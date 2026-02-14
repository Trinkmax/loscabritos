import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { initGTM } from './lib/analytics'
import './index.css'
import App from './App.tsx'

// Bootstrap GTM if VITE_GTM_ID is set
initGTM()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
