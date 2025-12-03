import React from 'react';
import './VigiaPage.css';
import { FaBell, FaCheckCircle, FaCloudSunRain, FaLeaf, FaSeedling, FaShieldAlt, FaThermometerHalf } from 'react-icons/fa';
import vigiaLogo from '../assets/botones/L-Vigia.png';
import heroBackground from '../assets/VigIA/Slices01.png';
import fieldTop from '../assets/VigIA/Slices02.png';
import farmerBg from '../assets/VigIA/Slices04.png';
import wheatBg from '../assets/VigIA/Slices05.png';
import mockDesktop from '../assets/VigIA/Tapa compu.png';
import mockPhone from '../assets/VigIA/Slices03 Celular.png';
import logoAgropago from '../assets/VigIA/LOGO Agopago.png';
import logoNera from '../assets/VigIA/nerajpg.webp';
import logoNave from '../assets/VigIA/Logo Nave.png';
import logoBiored from '../assets/VigIA/Logo Biored.png';
import logoRindePlus from '../assets/VigIA/Logo Rinde Plus sin fondo (1).png';

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
        style={{ backgroundImage: `linear-gradient(90deg, rgba(0,64,34,0.82) 0%, rgba(0,64,34,0.55) 50%, rgba(0,64,34,0.25) 100%), url(${heroBackground})` }}
      >
        <div className="vigia-hero-inner">
          <div className="vigia-hero-logo">
            <img src={vigiaLogo} alt="VigIA BioEstrés" />
          </div>
          <h1 className="vigia-hero-title">Inteligencia predictiva para vigilar el estrés de los cultivos.</h1>
          <p className="vigia-hero-subtitle">Anticipá lo invisible.</p>
          <div className="vigia-cta-group">
            <button className="vigia-btn primary vigia-btn-hero" onClick={onGoToPlatform}>Ir a la plataforma</button>
            <button className="vigia-btn outline" onClick={onOpenWhatsApp}>Contactanos</button>
          </div>
        </div>
      </section>

      <section className="vigia-section vigia-overview">
        <div className="vigia-overview-grid">
          <div className="vigia-text-block">
            <h2 className="vigia-title">La inteligencia que anticipa el estrés antes de que se vea.</h2>
            <p className="vigia-lead">
              VigIA BioEstrés es una <strong>herramienta de inteligencia predictiva</strong> que permite monitorear, diagnosticar y anticipar escenarios de estrés en los cultivos extensivos antes de que se manifiesten.
            </p>
            <p className="vigia-lead">
              Combina <strong>Inteligencia Artificial</strong> e <strong>Inteligencia Agronómica</strong> para generar alertas tempranas y facilitar decisiones preventivas que optimizan el manejo con bioinsumos.
            </p>
            <div className="vigia-mini-cta">
              <button className="vigia-btn ghost" onClick={handleDemoClick}>Quiero una demo</button>
              <button className="vigia-btn outline" onClick={onGoToPlatform}>Ver login</button>
            </div>
          </div>
          <div className="vigia-mock">
            <img src={mockDesktop} alt="Vista plataforma VigIA" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="vigia-quote-section" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%), url(${fieldTop})` }}>
        <div className="vigia-quote-card">
          <div className="vigia-quote-mark">“</div>
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
            <div className="vigia-leaf-dot" />
          </div>
        </div>
      </section>

      <section className="vigia-section" id="vigia-demo">
        <div className="vigia-split">
          <div>
            <h3 className="vigia-subtitle">Lo que ganás con usarlo</h3>
            <div className="vigia-benefits">
              {[
                'Anticipación: detecta el riesgo varios días antes de que sea visible',
                'Decisiones precisas: ayuda a ajustar el manejo según la demanda real',
                'Mayor estabilidad: predice pérdidas por golpes de calor o sequía',
                'Protección del rendimiento: predice pérdidas en el rendimiento por estrés abiótico',
                'Alertas: señales automáticas que indican cuándo actuar',
                'Mayor control: alarmas inteligentes con IA para priorizar lotes y momentos'
              ].map((text) => (
                <div className="vigia-benefit" key={text}>
                  <FaCheckCircle />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="vigia-banner-card">
            <p>Agronomía potenciada <span>por inteligencia artificial.</span></p>
          </div>
        </div>
      </section>

      <section className="vigia-section vigia-audience" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,48,32,0.85), rgba(2,48,32,0.9)), url(${farmerBg})` }}>
        <div className="vigia-audience-inner">
          <h3 className="vigia-title">Es para quienes asesoran y toman decisiones en el campo</h3>
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
      </section>

      <section className="vigia-section">
        <div className="vigia-text-block">
          <h3 className="vigia-subtitle">Una innovación en alianza</h3>
          <p className="vigia-lead">
            Tres equipos, un mismo objetivo: ayudar a anticipar el estrés abiótico en cultivos extensivos.
            VigIA BioEstrés es el resultado de una alianza entre Agroconsultor, BioRed y Rinde Plus.
          </p>
          <p className="vigia-lead">
            Una misma misión: unir agronomía, inteligencia artificial y bioinsumos potenciando datos para anticipar comportamientos del cultivo.
          </p>
        </div>
        <div className="vigia-alliance-grid">
          <div className="vigia-alliance-card">
            <div className="vigia-alliance-logo">
              <span className="vigia-chip">Agroconsultor</span>
            </div>
            <p>Profesionales en investigación y asesoramiento en mitigación de estrés de los cultivos.</p>
          </div>
          <div className="vigia-alliance-card">
            <div className="vigia-alliance-logo">
              <img src={logoRindePlus} alt="Rinde Plus" loading="lazy" />
            </div>
            <p>Expertos en la fusión de agronomía e inteligencia artificial aplicada al manejo.</p>
          </div>
          <div className="vigia-alliance-card">
            <div className="vigia-alliance-logo">
              <img src={logoBiored} alt="BioRed" loading="lazy" />
            </div>
            <p>Referentes en sustentabilidad de agro sistemas y bioinsumos.</p>
          </div>
        </div>
      </section>

      <section className="vigia-section">
        <h3 className="vigia-subtitle">Propuesta comercial</h3>
        <p className="vigia-lead">Estamos para acompañarte</p>
        <div className="vigia-table-wrapper">
          <table className="vigia-table">
            <thead>
              <tr>
                <th>Productores</th>
                <th>Nombre</th>
                <th>Detalle</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Campos + lotes</td><td>Pack lotes I</td><td>1 Campo - 5 lotes</td><td>USD 750</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes II</td><td>2 Campos - 10 lotes</td><td>USD 740</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes III</td><td>3 Campos - 15 lotes</td><td>USD 728</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes IV</td><td>4 Campos - 20 lotes</td><td>USD 716</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes V</td><td>5 Campos - 25 lotes</td><td>USD 705</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes VI</td><td>6 Campos - 30 lotes</td><td>USD 694</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes VII</td><td>7 Campos - 35 lotes</td><td>USD 683</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes VIII</td><td>8 Campos - 40 lotes</td><td>USD 671</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes IX</td><td>9 Campos - 45 lotes</td><td>USD 660</td></tr>
              <tr><td>Campos + lotes</td><td>Pack lotes X</td><td>10 Campos - 50 lotes</td><td>USD 649</td></tr>
              <tr><td>Lotes</td><td>Lote adicional</td><td>Agrega lote adicional en el mismo campo</td><td>USD 60</td></tr>
            </tbody>
          </table>
          <p className="vigia-glossary">
            <strong>Glosario:</strong> Pack lotes corresponde a lotes de un mismo campo. Lote adicional: corresponde al agregado de lotes individuales al Pack de lotes.
          </p>
        </div>
      </section>

      <section className="vigia-section vigia-how">
        <div className="vigia-how-grid">
          <div className="vigia-text-block">
            <h3 className="vigia-subtitle">Así funciona</h3>
            <p className="vigia-lead">
              Una sola plataforma, todas las variables. Desde la geoposición del lote, VigIA BioEstrés integra pronósticos climáticos, condiciones del suelo y requerimientos hídricos según el estadio fenológico.
            </p>
            <p className="vigia-highlight">El cultivo no te muestra el estrés, <strong>te lo muestra VigIA</strong>.</p>
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
          </div>
          <div className="vigia-phone">
            <img src={mockPhone} alt="App móvil VigIA" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="vigia-section vigia-easy" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.92)), url(${wheatBg})` }}>
        <div className="vigia-easy-grid">
          <div>
            <h3 className="vigia-subtitle">Necesitás muy poco para usarlo</h3>
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
            <h3 className="vigia-subtitle">Es accesible</h3>
            <p className="vigia-lead">La estabilidad de rendimientos a tu alcance.</p>
            <p>Funciona por suscripción de paquete de lotes: cada paquete incluye 5 lotes por establecimiento. Ofrecemos medios de pago adaptados al sector agropecuario.</p>
            <div className="vigia-payments">
              <img src={logoAgropago} alt="Agropago" loading="lazy" />
              <img src={logoNera} alt="Nera" loading="lazy" />
              <img src={logoNave} alt="Nave" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="vigia-final-cta">
        <div className="vigia-final-box">
          <div>
            <h3>Comenzá a usarlo</h3>
            <p>Probalo ahora — ingresá directo a la plataforma o contactanos.</p>
          </div>
          <div className="vigia-cta-group">
            <button className="vigia-btn primary vigia-btn-hero" onClick={onGoToPlatform}>Ir a la plataforma</button>
            <button className="vigia-btn outline" onClick={onOpenWhatsApp}>Contactanos</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VigiaPage;
