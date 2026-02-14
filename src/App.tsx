import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SeoHead from './components/SeoHead'
import StructuredData from './components/StructuredData'
import CartaPage from './pages/CartaPage'
import NotFoundPage from './pages/NotFoundPage'
import { generateHomeSchema, generateFAQSchema } from './seo/schema'
import { faqData } from './data/faqData'
import './App.css'

// Componente para la página principal
function HomePage() {
  const homeSchema = generateHomeSchema()
  const faqSchema = generateFAQSchema(faqData)

  return (
    <div className="app">
      <SeoHead routeKey="home" />
      <StructuredData schema={homeSchema} />
      <StructuredData schema={faqSchema} />
      <Navbar />
      <main>
        <Hero />
        <About />
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carta" element={<CartaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
