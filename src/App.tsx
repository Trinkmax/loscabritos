import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartaPage from './pages/CartaPage'
import './App.css'

// Componente para la página principal
function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
