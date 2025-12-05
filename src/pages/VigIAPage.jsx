import React from 'react';
import Header from '../components/Header';
import './VigIAPage.css';
import inicioImage from '../assets/inicio.jpg';
import { FaWhatsapp } from "react-icons/fa";

const VigIAPage = ({ onOpenWhatsApp }) => {
  const platformUrl = 'https://vigiabioestress.ddns.net/login/';
  const whatsappUrl = "https://wa.me/5493564593446?text=Hola,%20quiero%20más%20información%20sobre%20Vig%20IA%20BioEstrés";

  return (
    <div className="vigia-page">
      <Header onOpenWhatsApp={onOpenWhatsApp} />
      
      {/* Hero Section */}
      <section className="vigia-hero">
        <div className="vigia-hero-overlay">
          <div className="vigia-hero-content">
            <div className="vigia-logo-section">
              <div className="vigia-logo-box">
                <div className="vigia-logo-text">
                  <span className="vigia-logo-vig">Vig i</span>
                  <span className="vigia-logo-arrow">Λ</span>
                </div>
                <div className="vigia-logo-bioestres">BioEstrés</div>
              </div>
            </div>
            <h1 className="vigia-hero-title">Inteligencia predictiva para vigilar el estrés de los cultivos.</h1>
            <h2 className="vigia-hero-subtitle">Anticipá lo invisible.</h2>
            <div className="vigia-hero-buttons">
              <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="vigia-btn vigia-btn-primary">
                Ir a la plataforma
              </a>
              <button onClick={onOpenWhatsApp} className="vigia-btn vigia-btn-secondary">
                <FaWhatsapp /> Contactanos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="vigia-main-content">
        <div className="vigia-content-wrapper">
          <h2 className="vigia-section-title">La inteligencia que anticipa el estrés antes de que se vea.</h2>
          <p className="vigia-section-text">
            Vig IA BioEstrés es una herramienta de inteligencia predictiva que permite monitorear, diagnosticar y anticipar escenarios de estrés en los cultivos extensivos antes de que se manifiesten. Combina <span className="vigia-highlight">Inteligencia Artificial</span> e <span className="vigia-highlight">Inteligencia Agronómica</span> para generar alertas tempranas y facilitar decisiones preventivas que optimizan el manejo con bioinsumos.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="vigia-quote-section">
        <div className="vigia-quote-wrapper">
          <div className="vigia-quote-icon">"</div>
          <p className="vigia-quote-text">
            Cuando la agronomía y la inteligencia artificial se unen, la prevención se vuelve posible
          </p>
        </div>
        <div className="vigia-quote-graphic">
          <div className="vigia-circle vigia-circle-1"></div>
          <div className="vigia-circle vigia-circle-2"></div>
          <div className="vigia-circle vigia-circle-3"></div>
          <div className="vigia-leaf-icon">🍃</div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="vigia-how-it-works">
        <div className="vigia-how-content">
          <div className="vigia-how-header">
            <h2 className="vigia-how-title-blue">Así funciona</h2>
            <h3 className="vigia-how-title-green">Una sola plataforma, todas las variables.</h3>
          </div>
          
          <div className="vigia-how-main">
            <div className="vigia-how-text-block">
              <p>
                A partir de la geoposición del lote y del contenido inicial de agua en el suelo, <strong>Vig IA BioEstrés</strong> integra pronósticos climáticos y los combina con los requerimientos hídricos específicos del cultivo según su estadio fenológico.
              </p>
            </div>
            
            <div className="vigia-phone-mockup">
              <div className="vigia-phone-screen">
                <div className="vigia-phone-header">Porcentaje de Agua Útil - próximos 6 meses</div>
                <div className="vigia-gauges">
                  <div className="vigia-gauge">
                    <div className="vigia-gauge-label">Diciembre de 2025</div>
                    <div className="vigia-gauge-circle vigia-gauge-green">
                      <div className="vigia-gauge-needle"></div>
                    </div>
                    <div className="vigia-gauge-days">24 días</div>
                  </div>
                  <div className="vigia-gauge">
                    <div className="vigia-gauge-label">Enero de 2026</div>
                    <div className="vigia-gauge-circle vigia-gauge-green">
                      <div className="vigia-gauge-needle"></div>
                    </div>
                    <div className="vigia-gauge-days">30 días</div>
                  </div>
                  <div className="vigia-gauge">
                    <div className="vigia-gauge-label">Febrero de 2026</div>
                    <div className="vigia-gauge-circle vigia-gauge-green">
                      <div className="vigia-gauge-needle"></div>
                    </div>
                    <div className="vigia-gauge-days">55 días</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vigia-how-second">
            <h3 className="vigia-how-subtitle">El cultivo no te muestra el estrés, te lo muestra Vig iA</h3>
            <p>
              Proyecta la demanda atmosférica (ETP) y anticipa períodos críticos de estrés hídrico o térmico, emitiendo alertas preventivas que permiten actuar antes de que los síntomas sean visibles.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="vigia-features">
        <div className="vigia-features-grid">
          <div className="vigia-feature">
            <div className="vigia-feature-icon">📊</div>
            <h4 className="vigia-feature-title">Monitoreo de temperatura y humedad</h4>
          </div>
          <div className="vigia-feature">
            <div className="vigia-feature-icon">🤖</div>
            <h4 className="vigia-feature-title">Proyección climática con IA</h4>
          </div>
          <div className="vigia-feature">
            <div className="vigia-feature-icon">💧</div>
            <h4 className="vigia-feature-title">Cálculo de DPV (Déficit de Presión de Vapor) y balance hídrico</h4>
          </div>
          <div className="vigia-feature">
            <div className="vigia-feature-icon">🚨</div>
            <h4 className="vigia-feature-title">Alertas automáticas y personalizadas</h4>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="vigia-benefits">
        <div className="vigia-benefits-wrapper">
          <h2 className="vigia-benefits-title">Lo que ganás con usarlo</h2>
          <div className="vigia-benefits-grid">
            <div className="vigia-benefit-item">
              <div className="vigia-check-icon">✓</div>
              <p><strong>Anticipación:</strong> detecta el riesgo varios días antes de que sea visible</p>
            </div>
            <div className="vigia-benefit-item">
              <div className="vigia-check-icon">✓</div>
              <p><strong>Decisiones precisas:</strong> ayuda a ajustar el manejo según la demanda real</p>
            </div>
            <div className="vigia-benefit-item">
              <div className="vigia-check-icon">✓</div>
              <p><strong>Mayor estabilidad:</strong> predice pérdidas por golpes de calor o sequía</p>
            </div>
            <div className="vigia-benefit-item">
              <div className="vigia-check-icon">✓</div>
              <p><strong>Protección del rendimiento:</strong> predice pérdidas en el rendimiento por estrés abiótico</p>
            </div>
            <div className="vigia-benefit-item">
              <div className="vigia-check-icon">✓</div>
              <p><strong>Alertas:</strong> señales automáticas que indican cuándo actuar</p>
            </div>
          </div>
          <div className="vigia-slogan-box">
            <span className="vigia-slogan-green">Agronomía</span> <span className="vigia-slogan-blue">potenciada por inteligencia artificial.</span>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="vigia-image-section">
        <div className="vigia-image-wrapper">
          <img src={inicioImage} alt="Campo agrícola" className="vigia-field-image" />
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="vigia-target">
        <div className="vigia-target-wrapper">
          <h2 className="vigia-target-title">Es para quienes asesoran y toman decisiones en el campo</h2>
          <h3 className="vigia-target-subtitle">De la observación al control: la prevención inteligente ahora está en tus manos</h3>
          <div className="vigia-target-text">
            <p>
              Es una herramienta pensada especialmente para productores, asesores y técnicos que buscan gestionar el estrés abiótico en cultivos extensivos de manera anticipada.
            </p>
            <p>
              También es una plataforma aliada para empresas de biosoluciones orientadas al segmento de la mitigación del estrés abiótico en cultivos extensivos de manera anticipada.
            </p>
          </div>
          <div className="vigia-cta-box">
            Menos estrés, más rendimiento
          </div>
        </div>
      </section>

      {/* Easy to Use Section */}
      <section className="vigia-easy">
        <div className="vigia-easy-wrapper">
          <div className="vigia-easy-content">
            <h2 className="vigia-easy-title">Necesitás muy poco para usarlo</h2>
            <h3 className="vigia-easy-subtitle">Fácil de implementar, pensado para vos.</h3>
            <div className="vigia-easy-main">
              <div className="vigia-easy-text">
                <p>
                  Solo necesitás las coordenadas del lote (KMZ) y contactarte con nuestro equipo para conocer los paquetes de suscripción.
                </p>
                <p>
                  Nos encargamos de acompañarte en todo el proceso: desde la carga de datos iniciales hasta la visualización de tus primeros reportes.
                </p>
              </div>
              <div className="vigia-easy-box">
                <p className="vigia-easy-box-text">Vos cargás los datos,</p>
                <p className="vigia-easy-box-title">Vig iA BioEstrés</p>
                <p className="vigia-easy-box-text">se encarga del resto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Section */}
      <section className="vigia-accessible">
        <div className="vigia-accessible-wrapper">
          <div className="vigia-accessible-content">
            <h2 className="vigia-accessible-title">Es accesible</h2>
            <h3 className="vigia-accessible-subtitle">La estabilidad de rendimientos a tu alcance</h3>
            <p>
              Funciona por suscripción de paquete de lotes: cada paquete incluye 5 lotes por establecimiento.
            </p>
            <p>
              Ofrecemos medios de pago adaptados al sector agropecuario:
            </p>
            <div className="vigia-payment-methods">
              <div className="vigia-payment-btn vigia-payment-agropago">Agropago</div>
              <div className="vigia-payment-btn vigia-payment-nera">
                <span className="vigia-nera-icon">■</span> nera
              </div>
              <div className="vigia-payment-btn vigia-payment-nave">Nave</div>
            </div>
          </div>
          <div className="vigia-accessible-image">
            <img src={inicioImage} alt="Campo de trigo" className="vigia-wheat-image" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="vigia-final-cta">
        <div className="vigia-final-cta-wrapper">
          <div className="vigia-final-cta-box">
            <h2 className="vigia-final-cta-title">Comenzá a usarlo</h2>
            <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="vigia-final-cta-button">
              PROBALO AHORA — SOLICITÁ UNA DEMO
              <FaWhatsapp className="vigia-whatsapp-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Alliance Section */}
      <section className="vigia-alliance">
        <div className="vigia-alliance-wrapper">
          <h2 className="vigia-alliance-title">Una innovación en alianza</h2>
          <h3 className="vigia-alliance-subtitle">Tres equipos, un mismo objetivo: ayudar a anticipar el estrés abiótico en cultivos extensivos.</h3>
          <p className="vigia-alliance-text">
            Vig iA BioEstrés es el resultado de una alianza entre Agroconsultor, BioRed y Rinde Plus.
          </p>
          <p className="vigia-alliance-text">
            Una misma misión: unir agronomía, inteligencia artificial y bioinsumos potenciando datos para anticipar comportamientos del cultivo.
          </p>
          <div className="vigia-alliance-partners">
            <div className="vigia-partner">
              <div className="vigia-partner-logo vigia-partner-agroconsultor">🌱</div>
              <h4 className="vigia-partner-name">AGROCONSULTOR</h4>
              <p className="vigia-partner-tagline">PROFESIONALES DE LA AGRICULTURA</p>
              <p className="vigia-partner-desc">PROFESIONALES EN INVESTIGACIÓN Y ASESORAMIENTO EN MITIGACIÓN DE ESTRÉS DE LOS CULTIVOS.</p>
            </div>
            <div className="vigia-partner">
              <div className="vigia-partner-logo vigia-partner-rindeplus">R</div>
              <h4 className="vigia-partner-name">Rinde Plus</h4>
              <p className="vigia-partner-tagline">AG-TECH</p>
              <p className="vigia-partner-desc">EXPERTOS EN LA FUSIÓN AGRONOMÍA E INTELIGENCIA ARTIFICIAL.</p>
            </div>
            <div className="vigia-partner">
              <div className="vigia-partner-logo vigia-partner-bired">🌿</div>
              <h4 className="vigia-partner-name">BioRed</h4>
              <p className="vigia-partner-desc">REFERENTES EN SUSTENTABILIDAD DE AGRO SISTEMAS.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VigIAPage;

