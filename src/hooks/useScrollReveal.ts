import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook that uses IntersectionObserver to detect when an element
 * enters the viewport and triggers a CSS class for reveal animations.
 * 
 * Best practices:
 * - Uses `triggerOnce` by default to avoid re-triggering
 * - Disconnects observer after first reveal for performance
 * - Respects `prefers-reduced-motion` automatically
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect user preference for reduced motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) observer.disconnect();
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

/**
 * Hook that observes multiple children within a container and
 * applies staggered reveal classes to each.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
) {
    const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
    const containerRef = useRef<T>(null);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            const allItems = new Set(
                Array.from(container.querySelectorAll('[data-reveal-item]')).map((_, i) => i)
            );
            setVisibleItems(allItems);
            return;
        }

        const children = container.querySelectorAll('[data-reveal-item]');
        if (children.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number((entry.target as HTMLElement).dataset.revealItem);
                        setVisibleItems((prev) => new Set(prev).add(index));
                        if (triggerOnce) observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        children.forEach((child) => observer.observe(child));
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { containerRef, visibleItems };
}
