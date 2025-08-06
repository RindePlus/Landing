import React from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import FeatureCards from './components/FeatureCards'
import ServicesSection from './components/ServicesSection'
import HeroWindow from './components/HeroWindow'
import TrustedCompanies from './components/TrustedCompanies'
import Footer from './components/Footer'
import inicioImage from './assets/inicio.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="hero-section" style={{ backgroundImage: `url(${inicioImage})` }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Aumenta el rendimiento de tu campo</h1>
                <p className="hero-subtitle">
                  Inteligencia Artificial aplicada a tu producción
                </p>
              </div>
              <div className="hero-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <FeatureCards />
        <ServicesSection />
        <HeroWindow />
        <TrustedCompanies />
      </main>
      <Footer />
    </div>
  )
}

export default App
