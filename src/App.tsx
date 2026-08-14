import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AlibikersBanner from './components/AlibikersBanner'
import Invierno from './components/Invierno'
import Mundial from './components/Mundial'
import Especialidades from './components/Especialidades'
import CenaShow from './components/CenaShow'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SeoHead from './components/SeoHead'
import StructuredData from './components/StructuredData'
import CartaPage from './pages/CartaPage'
import NosotrosPage from './pages/NosotrosPage'
import EntretenimientoPage from './pages/EntretenimientoPage'
import NotFoundPage from './pages/NotFoundPage'
import { generateHomeSchema, generateFAQSchema, generateEventSchema } from './seo/schema'
import { faqData } from './data/faqData'
import { isMundialActive } from './data/mundialData'
import { isMotoRideActive } from './data/motoRideData'
import { getUpcomingEvent } from './data/eventsData'
import './App.css'

// Resetea el scroll al cambiar de ruta; si hay un ancla (#seccion), posiciona
// la sección una vez que React la montó (incluye secciones renderizadas
// condicionalmente, p. ej. #mundial). Esto hace que enlaces como "/#contacto"
// desde otra solapa lleguen a la sección correcta.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      let frame = 0
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        if (attempts++ < 20) frame = requestAnimationFrame(tryScroll)
      }
      tryScroll()
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

// Componente para la página principal
function HomePage() {
  const homeSchema = generateHomeSchema()
  const faqSchema = generateFAQSchema(faqData)
  const upcomingEvent = getUpcomingEvent()

  return (
    <div className="app">
      <SeoHead routeKey="home" />
      <StructuredData schema={homeSchema} />
      <StructuredData schema={faqSchema} />
      {upcomingEvent && <StructuredData schema={generateEventSchema(upcomingEvent)} />}
      <Navbar />
      <main>
        <Hero />
        {isMotoRideActive() && <AlibikersBanner />}
        <Invierno />
        {isMundialActive() && <Mundial />}
        <Especialidades />
        <CenaShow />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SpeedInsights />
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carta" element={<CartaPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/entretenimiento" element={<EntretenimientoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
