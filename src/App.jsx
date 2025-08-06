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
        <div id="inicio" className="hero-section">
          <div 
            className="hero-background" 
            style={{ backgroundImage: `url(${inicioImage})` }}
          ></div>
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
        <div id="caracteristicas">
          <FeatureCards />
        </div>
        <div id="servicios">
          <ServicesSection />
        </div>
        <HeroWindow />
        <TrustedCompanies />
        <div id="contacto">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
