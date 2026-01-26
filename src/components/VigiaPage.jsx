import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './VigiaPage.css';
import { FaBell, FaCheckCircle, FaCloudSunRain, FaLeaf, FaSeedling, FaShieldAlt, FaThermometerHalf } from 'react-icons/fa';
import vigiaLogo from '../assets/botones/L-Vigia.png';
import heroBackground from '../assets/VigIA/Slices01.png';
import fieldTop from '../assets/VigIA/Slices02.png';
import farmerBg from '../assets/VigIA/Slices04.png';
import wheatBg from '../assets/VigIA/Slices05.png';
import mockPhone from '../assets/VigIA/Slices03 Celular.png';
import logoAgropago from '../assets/VigIA/LOGO Agopago.png';
import logoNera from '../assets/VigIA/nerajpg.webp';
import logoNave from '../assets/VigIA/Logo Nave.png';
import logoBiored from '../assets/VigIA/Logo Biored.png';
import logoRindePlus from '../assets/VigIA/Logo Rinde Plus sin fondo (1).png';
import logoAgroconsultor from '../assets/agroconsultor_logo.png';

const RevealSection = ({ children, className = '', id = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  return (
    <section id={id} className={`${className} fade-in-up ${isVisible ? 'visible' : ''}`} ref={ref}>
      {children}
    </section>
  );
};

const VigiaPage = ({ onOpenWhatsApp, onGoToPlatform }) => {
  const handleDemoClick = () => {
    const demoSection = document.querySelector('#vigia-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (onOpenWhatsApp) {
      onOpenWhatsApp();
    }
  };

  return (
    <div className="vigia-page">
      <section
        className="vigia-hero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="vigia-hero-inner">
          <div className="vigia-hero-logo">
            <img src={vigiaLogo} alt="VigIA BioEstrés" />
          </div>
          <h1 className="vigia-hero-title">Inteligencia predictiva para vigilar el estrés de los cultivos.</h1>
          <p className="vigia-hero-subtitle">Anticipá lo invisible.</p>
          <div className="vigia-cta-group">
            <button className="vigia-btn primary" onClick={onGoToPlatform}>Ir a la plataforma</button>
            <button className="vigia-btn outline" onClick={onOpenWhatsApp}>Contactanos</button>
          </div>
        </div>
      </section>

      <RevealSection className="vigia-section vigia-overview">
        <div className="vigia-wrap">
          <div className="vigia-text-block">
            <h2 className="vigia-title">La inteligencia que anticipa el estrés antes de que se vea</h2>
            <p className="vigia-lead">
              VigIA BioEstrés es una <strong>herramienta de inteligencia predictiva</strong> que permite monitorear, diagnosticar y anticipar escenarios de estrés en los cultivos extensivos antes de que se manifiesten.
            </p>
            <p className="vigia-lead">
              Combina <strong>Inteligencia Artificial</strong> e <strong>Inteligencia Agronómica</strong> para generar alertas tempranas y facilitar decisiones preventivas que optimizan el manejo con bioinsumos.
            </p>
          </div>
          <div className="vigia-quote-card">
            <div className="vigia-quote-mark">&ldquo;</div>
            <div>
              <p className="vigia-quote">
                Cuando la agronomía y la inteligencia artificial se unen, <span>la prevención se vuelve posible</span>
              </p>
              <p className="vigia-quote-note">Agronomía potenciada con tecnología.</p>
            </div>
            <div className="vigia-venn">
              <div className="vigia-circle circle-a" />
              <div className="vigia-circle circle-b" />
              <div className="vigia-circle circle-c" />
              <div className="vigia-leaf-icon">🍃</div>
            </div>
          </div>
        </div>
      </RevealSection>

      <section className="vigia-section vigia-how">
        <div className="vigia-how-top-section" style={{ backgroundImage: `url(${fieldTop})` }}>
          <div className="vigia-how-header-section">
            <h2 className="vigia-how-title-blue">Así funciona</h2>
            <h3 className="vigia-how-title-green">Una sola plataforma,<br />todas las variables.</h3>
          </div>
        </div>
        <div className="vigia-wrap">
          <div className="vigia-how-content-wrapper">
            <div className="vigia-how-main-content">
              <div className="vigia-how-text-section">
                <p className="vigia-how-description">
                  A partir de la geoposición del lote y del contenido inicial de agua en el suelo, <span className="vigia-brand-text">Vig iA BioEstrés</span> integra pronósticos climáticos y los combina con los requerimientos hídricos específicos del cultivo según su estadio fenológico.
                </p>
                <div className="vigia-how-divider"></div>
                <p className="vigia-how-highlight">
                  El cultivo no te muestra el estrés, <strong>te lo muestra Vig iA.</strong>
                </p>
                <div className="vigia-how-divider"></div>
                <p className="vigia-how-description">
                  <strong>Proyecta la demanda atmosférica (ETP)</strong> y anticipa períodos críticos de estrés hídrico o térmico, emitiendo alertas preventivas que permiten actuar antes de que los síntomas sean visibles.
                </p>
              </div>
              <div className="vigia-phone">
                <img src={mockPhone} alt="App móvil VigIA" loading="lazy" />
              </div>
            </div>
            <div className="vigia-feature-grid">
              <div className="vigia-feature-card">
                <FaThermometerHalf />
                <h4>Monitoreo de temperatura y humedad</h4>
                <p>Relevamiento continuo del microclima del lote con IA.</p>
              </div>
              <div className="vigia-feature-card">
                <FaCloudSunRain />
                <h4>Proyección climática con IA</h4>
                <p>Combina pronósticos y datos históricos para anticipar escenarios.</p>
              </div>
              <div className="vigia-feature-card">
                <FaSeedling />
                <h4>Cálculo de DPV y balance hídrico</h4>
                <p>Modelos que traducen datos atmosféricos en decisiones agronómicas.</p>
              </div>
              <div className="vigia-feature-card">
                <FaBell />
                <h4>Alertas automáticas y personalizadas</h4>
                <p>Notificaciones oportunas que indican cuándo actuar en cada lote.</p>
              </div>
            </div>
            <div className="vigia-benefits-section">
              <h1 className="vigia-benefits-title">Lo que ganás con usarlo</h1>
              <div className="vigia-benefits-grid">
                <div className="vigia-benefit-item">
                  <FaCheckCircle />
                  <p><strong>Anticipación:</strong> detecta el riesgo varios días antes de que sea visible</p>
                </div>
                <div className="vigia-benefit-item">
                  <FaCheckCircle />
                  <p><strong>Decisiones precisas:</strong> ayuda a ajustar el manejo según la demanda real</p>
                </div>
                <div className="vigia-benefit-item">
                  <FaCheckCircle />
                  <p><strong>Mayor estabilidad:</strong> predice pérdidas por golpes de calor o sequía</p>
                </div>
                <div className="vigia-benefit-item">
                  <FaCheckCircle />
                  <p><strong>Protección del rendimiento:</strong> predice pérdidas en el rendimiento por estrés abiótico</p>
                </div>
                <div className="vigia-benefit-item">
                  <FaCheckCircle />
                  <p><strong>Alertas:</strong> señales automáticas que indican cuándo actuar</p>
                </div>
                <div className="vigia-benefit-item">
                  <FaCheckCircle />
                  <p><strong>Mayor control:</strong> alarmas inteligentes con IA para priorizar lotes y momentos</p>
                </div>
              </div>
              <div className="vigia-banner-card-benefits">
                <p>Agronomía potenciada <span>por inteligencia artificial.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="vigia-section vigia-audience" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.9)), url(${farmerBg})` }}>
        <div className="vigia-wrap">
          <div className="vigia-audience-inner">
            <h1 className="vigia-title">Es para quienes asesoran y toman decisiones en el campo</h1>
            <p className="vigia-highlight">De la observación al control: la prevención inteligente ahora está en tus manos.</p>
            <div className="vigia-audience-grid">
              <p>
                Es una herramienta pensada <strong>especialmente para productores, asesores y técnicos</strong> que buscan gestionar los bioinsumos orientados al segmento de la mitigación del estrés abiótico en cultivos extensivos de manera anticipada.
              </p>
              <p>
                También es una plataforma aliada para <strong>empresas de biosoluciones</strong> que necesitan decisiones respaldadas en datos y alertas tempranas que reduzcan el riesgo.
              </p>
            </div>
            <div className="vigia-strip">Menos estrés, más rendimiento</div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="vigia-section vigia-easy" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.92)), url(${wheatBg})` }}>
        <div className="vigia-wrap">
          <div className="vigia-easy-grid">
            <div>
              <h1 className="vigia-subtitle">Necesitás muy poco para usarlo</h1>
              <p className="vigia-lead">Fácil de implementar, pensado para vos.</p>
              <ul className="vigia-list">
                <li><FaShieldAlt />Solo necesitás las coordenadas del lote (KMZ) y contactarte con nuestro equipo para conocer los paquetes.</li>
                <li><FaLeaf />Te acompañamos en todo el proceso: desde la carga de datos iniciales hasta los primeros reportes.</li>
              </ul>
              <div className="vigia-quote-box">
                <p>Vos cargás los datos, <span>VigIA BioEstrés</span> se encarga del resto.</p>
              </div>
            </div>
            <div>
              <h1 className="vigia-subtitle">Es accesible</h1>
              <p className="vigia-lead">La estabilidad de rendimientos a tu alcance.</p>
              <p>Funciona por suscripción de paquete de lotes: cada paquete incluye 5 lotes por establecimiento. Ofrecemos medios de pago adaptados al sector agropecuario.</p>
              <div className="vigia-payments">
                <img src={logoAgropago} alt="Agropago" className="vigia-logo-pay agropago" loading="lazy" />
                <img src={logoNera} alt="Nera" className="vigia-logo-pay nera" loading="lazy" />
                <img src={logoNave} alt="Nave" className="vigia-logo-pay nave" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="vigia-section">
        <div className="vigia-wrap">
          <div className="vigia-text-block">
            <h1 className="vigia-subtitle">Una innovación en alianza</h1>
            <p className="vigia-alliance-subtitle">Tres equipos, un mismo objetivo: ayudar a anticipar el estrés abiótico en cultivos extensivos.</p>
            <p className="vigia-lead">
              <strong>Vig IA BioEstrés</strong> es el resultado de una alianza entre <strong>Agroconsultor</strong>, <strong>BioRed</strong> y <strong>RindePlus</strong>.
            </p>
            <p className="vigia-lead">
              Una misma misión: unir agronomía, inteligencia artificial y bioinsumos potenciando datos para anticipar comportamientos del cultivo.
            </p>
          </div>
          <div className="vigia-alliance-grid">
            <div className="vigia-alliance-card">
              <div className="vigia-alliance-logo">
                <img src={logoAgroconsultor} alt="Agroconsultor" loading="lazy" />
              </div>
              <p>PROFESIONALES EN INVESTIGACIÓN Y ASESORAMIENTO EN MITIGACIÓN DE ESTRÉS DE LOS CULTIVOS.</p>
            </div>
            <div className="vigia-alliance-card">
              <div className="vigia-alliance-logo">
                <img src={logoRindePlus} alt="RindePlus" loading="lazy" />
              </div>
              <p>EXPERTOS EN LA FUSIÓN DE AGRONOMÍA E INTELIGENCIA ARTIFICIAL APLICADA AL MANEJO.</p>
            </div>
            <div className="vigia-alliance-card">
              <div className="vigia-alliance-logo">
                <img src={logoBiored} alt="BioRed" loading="lazy" />
              </div>
              <p>REFERENTES EN SUSTENTABILIDAD DE AGRO SISTEMAS Y BIOINSUMOS.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="vigia-final-cta">
        <div className="vigia-final-box">
          <div>
            <h3>Comenzá a usarlo</h3>
            <p>Probalo ahora — ingresá directo a la plataforma o contactanos.</p>
          </div>
          <div className="vigia-cta-group">
            <a className="vigia-btn primary" onClick={onGoToPlatform}>Ir a la plataforma</a>
            <button className="vigia-btn outline" onClick={onOpenWhatsApp}>Contactanos</button>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};

export default VigiaPage;
