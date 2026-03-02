import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './AapresidPage.css';
import Header from './Header';
import Footer from './Footer';
import sembradoraBg from '../assets/sembradora.webp';
import aapresidLogo from '../assets/aapresid-logo.png';
import { FaBook, FaBrain, FaInfoCircle, FaTimes } from 'react-icons/fa';

const RevealSection = ({ children, className = '', id = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  return (
    <section id={id} className={`${className} fade-in-up ${isVisible ? 'visible' : ''}`} ref={ref}>
      {children}
    </section>
  );
};

const CheckIcon = () => (
  <span className="aapresid-check" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const AapresidPage = ({ onOpenWhatsApp, onGoToHome }) => {
  const aapresidLoginUrl = 'https://pronosticos.rindeplus.com/login/aapresid';
  const [showSourcesModal, setShowSourcesModal] = useState(false);

  return (
    <div className="aapresid-page">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        menuItems={[
          { label: 'Inicio', id: 'top' },
          { label: '¿Qué es?', id: 'que-es' },
          { label: 'El problema', id: 'el-problema' },
          { label: '¿Cómo funciona?', id: 'como-funciona' },
          { label: 'Brechas', id: 'tipos-brechas' },
          { label: '¿Para quién?', id: 'para-quien' },
          { label: 'Módulos', id: 'modulos' },
          { label: '¿Cómo empiezo?', id: 'como-empezar' },
          { label: 'Instalar app', id: 'instalar-app' },
        ]}
      />

      <main id="top">
        {/* 1. HERO */}
        <section
          className="aapresid-hero-section"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(0,40,20,0.88) 0%, rgba(0,40,20,0.6) 50%, rgba(0,40,20,0.3) 100%), url(${sembradoraBg})` }}
        >
          <div className="aapresid-hero-inner">
            <img src={aapresidLogo} alt="AAPRESID" className="aapresid-hero-logo" />
            <h1 className="aapresid-hero-title">Análisis de Campaña y Brechas de Rendimiento</h1>
            <p className="aapresid-hero-subtitle">Dejá de procesar datos. Empezá a tomar decisiones.</p>
            <div className="aapresid-hero-cta-group">
              <a className="aapresid-hero-btn aapresid-hero-btn-primary" href={aapresidLoginUrl} target="_blank" rel="noopener noreferrer">Ir a la plataforma</a>
              <button className="aapresid-hero-btn aapresid-hero-btn-outline" onClick={onOpenWhatsApp}>Contactanos</button>
            </div>
          </div>
        </section>

        {/* 2. QUE ES */}
        <RevealSection id="que-es">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>¿Qué es?</h2>
              </div>
            </div>
            <div className="aapresid-card">
              <p className="aapresid-text">
                Un sistema de análisis y decisión diseñado para <b>socios y ATR de AAPRESID</b>. Integra información de clima, suelo, ambientes e históricos productivos de tu regional para construir escenarios de rendimiento y calcular brechas. No entrega datos crudos: entrega <b>causas y recomendaciones</b> para que tu foco esté en lo técnico.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* 3. EL PROBLEMA */}
        <RevealSection id="el-problema">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>El problema</h2>
                <p className="aapresid-lead">Argentina tiene brechas de productividad significativas. La información para cerrarlas existe, pero está fragmentada.</p>
              </div>
            </div>
            <div className="aapresid-grid aapresid-cols-3">
              <div className="aapresid-mini">
                <h3>Brechas productivas</h3>
                <p>En Argentina, la brecha de rendimiento alcanza el <b>41% en trigo y maíz</b> y el <b>31% en soja</b>. Hay margen concreto para mejorar.</p>
                <button className="aapresid-sources-btn" onClick={() => setShowSourcesModal(true)} aria-label="Ver fuentes bibliográficas">
                  <FaInfoCircle /> <span>Ver fuentes</span>
                </button>
              </div>
              <div className="aapresid-mini">
                <h3>Información fragmentada</h3>
                <p>Datos de clima, suelo, ambientes e históricos en diferentes fuentes. <b>Reportes manuales</b> que consumen tiempo y no escalan.</p>
              </div>
              <div className="aapresid-mini">
                <h3>Causas enterradas</h3>
                <p>Las causas de las brechas quedan <b>enterradas bajo datos</b>. Sin un análisis integrado, las recomendaciones pierden precisión.</p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Modal de fuentes bibliográficas */}
        {showSourcesModal && (
          <div className="aapresid-modal-overlay" onClick={() => setShowSourcesModal(false)}>
            <div className="aapresid-modal" onClick={(e) => e.stopPropagation()}>
              <div className="aapresid-modal-header">
                <h3>Fuentes bibliográficas</h3>
                <button className="aapresid-modal-close" onClick={() => setShowSourcesModal(false)} aria-label="Cerrar">
                  <FaTimes />
                </button>
              </div>
              <div className="aapresid-modal-body">
                <div className="aapresid-source-item">
                  <span className="aapresid-source-tag">Fuente principal</span>
                  <h4>Merlos, Monzon et al. (2015)</h4>
                  <p>
                    <em>"Potential for crop production increase in Argentina through closure of existing yield gaps."</em>
                    <br />Field Crops Research, 184, 145-154.
                  </p>
                  <p className="aapresid-source-detail">
                    Trigo: Yw 5.2 t/ha vs Ya 3.0 t/ha — <b>brecha 41%</b><br />
                    Maíz: Yw 11.6 t/ha vs Ya 6.9 t/ha — <b>brecha 41%</b><br />
                    Soja: Yw 3.9 t/ha vs Ya 2.7 t/ha — <b>brecha 31%</b>
                  </p>
                  <a href="https://www.sciencedirect.com/science/article/pii/S0378429015300599" target="_blank" rel="noopener noreferrer" className="aapresid-source-link">
                    Ver en ScienceDirect
                  </a>
                </div>

                <div className="aapresid-source-item">
                  <h4>Global Yield Gap Atlas — Argentina (2023)</h4>
                  <p>
                    Datos actualizados de rendimientos promedio (2016-2021) con simulaciones DSSAT v4.7. Cubre +70% del área cosechada.
                  </p>
                  <a href="https://www.yieldgap.org/argentina" target="_blank" rel="noopener noreferrer" className="aapresid-source-link">
                    Ver en yieldgap.org
                  </a>
                </div>

                <div className="aapresid-source-item">
                  <h4>Andrade, F.H. — Fertilizar (2023)</h4>
                  <p>
                    <em>"Evaluación de la productividad agrícola en Argentina: brechas de rendimiento en maíz, soja, trigo y girasol."</em>
                    <br />Brechas del 30% al 50% según cultivo y región.
                  </p>
                  <a href="https://fertilizar.org.ar/wp-content/uploads/2023/06/2_Evaluacion-de-la-productividad-agricola-en-Argentina-Brechas-de-rendimiento-en-maiz-soja-trigo-y-girasol.pdf" target="_blank" rel="noopener noreferrer" className="aapresid-source-link">
                    Ver PDF en fertilizar.org.ar
                  </a>
                </div>

                <div className="aapresid-source-item">
                  <h4>AAPRESID — Soja centro de Santa Fe (2024)</h4>
                  <p>
                    Brecha del 33% en soja en centro de Santa Fe. Rinde real ~3.2 t/ha vs potencial ~4.9 t/ha.
                  </p>
                  <a href="https://www.aapresid.org.ar/blog/soja-centro-santa-fe-achicar-33-brecha-rinde-actual" target="_blank" rel="noopener noreferrer" className="aapresid-source-link">
                    Ver en aapresid.org.ar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. COMO FUNCIONA */}
        <RevealSection id="como-funciona">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>¿Cómo funciona?</h2>
                <p className="aapresid-lead">Simple, trazable y pensado para que <b>escalés</b> a toda tu regional.</p>
              </div>
            </div>
            <div className="aapresid-grid aapresid-cols-3">
              <div className="aapresid-mini">
                <h3>Paso 1 — Integramos los datos de tu regional</h3>
                <p>Históricos de <b>tu zona</b> + clima esperado de la ventana de <b>tu cultivo</b> + análisis de suelo / ambientes de <b>tu lote</b>.</p>
              </div>
              <div className="aapresid-mini">
                <h3>Paso 2 — Modelamos por ambiente y calculamos brechas</h3>
                <p>El modelo genera el rinde y las brechas (<b>estándar e inteligentes</b>) de tu lote; identifica variables clave en <b>tu campaña</b>.</p>
              </div>
              <div className="aapresid-mini">
                <h3>Paso 3 — Recibís causas y recomendaciones</h3>
                <p>Resumen, escenarios, ventanas críticas y recomendaciones claras para que <b>priorices tus decisiones</b>.</p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 5. TIPOS DE BRECHAS */}
        <RevealSection id="tipos-brechas">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>Tipos de Brechas</h2>
                <p className="aapresid-lead">Dos enfoques complementarios para entender y cerrar la brecha de rendimiento de <b>tu lote</b>.</p>
              </div>
            </div>
            <div className="aapresid-grid aapresid-cols-2">
              <div className="aapresid-card aapresid-brecha-card aapresid-brecha-estandar">
                <div className="aapresid-brecha-header">
                  <div className="aapresid-brecha-badge aapresid-badge-estandar">
                    <FaBook />
                  </div>
                  <h3 className="aapresid-brecha-name">Brechas Estándar</h3>
                </div>
                <span className="aapresid-brecha-tag aapresid-tag-biblio">Bibliografía</span>
                <p className="aapresid-brecha-text">
                  Calculadas a partir de <b>bibliografía científica, ensayos regionales y referencias técnicas</b>. Representan el rendimiento potencial según el conocimiento agronómico validado para tu zona y cultivo.
                </p>
              </div>
              <div className="aapresid-card aapresid-brecha-card aapresid-brecha-inteligente">
                <div className="aapresid-brecha-header">
                  <div className="aapresid-brecha-badge aapresid-badge-inteligente">
                    <FaBrain />
                  </div>
                  <h3 className="aapresid-brecha-name">Brechas Inteligentes</h3>
                </div>
                <span className="aapresid-brecha-tag aapresid-tag-ml">Machine Learning</span>
                <p className="aapresid-brecha-text">
                  Calculadas con <b>modelos de Machine Learning entrenados con datos históricos</b> de tu zona. Se ajustan dinámicamente campaña a campaña, capturando patrones que la bibliografía tradicional no alcanza.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 6. AHORRO DE TIEMPO */}
        <RevealSection id="ahorro-tiempo">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>Tu tiempo vale más que un reporte</h2>
                <p className="aapresid-lead">Automatizamos el procesamiento para que te enfoques en <b>lo que realmente importa</b>: las recomendaciones agronómicas.</p>
              </div>
            </div>
            <div className="aapresid-grid aapresid-cols-3">
              <div className="aapresid-mini">
                <h3>Sin procesamiento manual</h3>
                <p>Olvidate de cruzar planillas, limpiar datos y armar gráficos. La plataforma <b>integra y procesa todo automáticamente</b>.</p>
              </div>
              <div className="aapresid-mini">
                <h3>Reportes listos para compartir</h3>
                <p>Generá reportes completos en PDF que podés <b>compartir directamente</b> con productores, equipos técnicos o tu regional.</p>
              </div>
              <div className="aapresid-mini">
                <h3>Escalá sin esfuerzo</h3>
                <p>Pasá de analizar un lote a <b>gestionar toda tu regional</b> sin multiplicar las horas de trabajo.</p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 7. PARA QUIEN */}
        <RevealSection id="para-quien">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>¿Para quién es?</h2>
                <p className="aapresid-lead">Diseñado para dos perfiles clave dentro de la red AAPRESID.</p>
              </div>
            </div>
            <div className="aapresid-grid aapresid-cols-2">
              <div className="aapresid-card aapresid-audience-card">
                <h3>Socios de Regionales</h3>
                <ul>
                  <li>
                    <CheckIcon />
                    <span>Entendé las <b>causas de tu brecha</b> de rendimiento, no solo los números</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Recibí <b>recomendaciones claras</b> y accionables para tu lote</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Compará tu rendimiento con el <b>potencial real</b> de tu ambiente</span>
                  </li>
                </ul>
              </div>
              <div className="aapresid-card aapresid-audience-card">
                <h3>ATR (Asesores Técnicos Regionales)</h3>
                <ul>
                  <li>
                    <CheckIcon />
                    <span>Gestioná <b>todos los datos de la regional</b> desde una sola plataforma</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Generá <b>reportes para toda tu regional</b> sin procesamiento manual</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Focalizá tu tiempo en <b>lo técnico</b>, no en armar informes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 8. MODULOS */}
        <RevealSection id="modulos">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>Módulos de la plataforma</h2>
                <p className="aapresid-lead">
                  Accedé a diferentes análisis según <b>tu necesidad</b>: análisis de campaña o análisis de brechas y rendimientos.
                </p>
              </div>
            </div>

            <div className="aapresid-grid aapresid-cols-2">
              <div className="aapresid-card">
                <h3 className="aapresid-card-title">Análisis de Campaña</h3>
                <p className="aapresid-lead mb-4">
                  Dashboard completo con análisis detallado de datos de suelo, clima y rendimiento de <b>tu campaña</b>.
                </p>
                <ul className="aapresid-list">
                  <li>
                    <CheckIcon />
                    <span>Análisis de datos históricos de <b>tu campo</b></span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Monitoreo de clima y variables de <b>tu zona</b></span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Visualización de rendimientos y tendencias</span>
                  </li>
                </ul>
              </div>

              <div className="aapresid-card">
                <h3 className="aapresid-card-title">Análisis de Brechas y Rendimientos</h3>
                <p className="aapresid-lead mb-4">
                  Escenarios de brechas (<b>Estándar e Inteligentes</b>) y rendimiento con <b>tu lote</b> real. Modelo de IA para simular escenarios y evaluar riesgos.
                </p>
                <ul className="aapresid-list">
                  <li>
                    <CheckIcon />
                    <span>Escenarios de rendimiento con <b>tu lote</b></span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Brechas por ambiente (potencial vs pronosticado)</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Recomendaciones de fertilización para cerrar <b>tu brecha</b></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="aapresid-card aapresid-report-card">
              <h3 className="aapresid-card-title">Lo que te muestra el reporte</h3>
              <p className="aapresid-lead mb-4" style={{ maxWidth: 'none' }}>
                Al abrir <b>tu reporte</b>, esto es lo que encontrás:
              </p>

              <div className="aapresid-grid aapresid-cols-2 gap-3">
                <div className="aapresid-mini p-4">
                  <h4 className="aapresid-mini-title">1. Comparación de fechas de siembra</h4>
                  <p className="aapresid-mini-text">
                    Posibilidad de comparar distintas fechas de siembra, <b>42 días en adelante</b> y <b>42 días para atrás</b>.
                    Visualizá cómo impacta la fecha de siembra en el rendimiento pronosticado de <b>tu cultivo</b>.
                  </p>
                </div>
                <div className="aapresid-mini p-4">
                  <h4 className="aapresid-mini-title">2. Modelo clima + suelo</h4>
                  <p className="aapresid-mini-text">
                    Gráfico de barras comparando <b>Potencial vs Pronosticado</b> por ambiente (Alta, Media, Baja) en <b>tn/ha</b>.
                    Te muestra la <b>brecha</b> en toneladas por hectárea y datos de agua útil, lluvia del ciclo y agua total.
                  </p>
                </div>
                <div className="aapresid-mini p-4">
                  <h4 className="aapresid-mini-title">3. Distribución de rendimiento</h4>
                  <p className="aapresid-mini-text">
                    Gráfico con la distribución esperada de rendimiento mostrando <b>Media, P10, P90</b> y escenarios climáticos
                    (precipitaciones ±15%, temperatura ±3°C) para que entiendas el rango de <b>tu rendimiento</b>.
                  </p>
                </div>
                <div className="aapresid-mini p-4">
                  <h4 className="aapresid-mini-title">4. Déficit de presión de vapor (DPV)</h4>
                  <p className="aapresid-mini-text">
                    Promedio de DPV de los días analizados con categorías (Muy bajo, Óptimo, Moderado, Alto), evolución diaria
                    y tabla de días críticos con DPV &gt; 2.0 kPa en <b>tu campaña</b>.
                  </p>
                </div>
                <div className="aapresid-mini p-4">
                  <h4 className="aapresid-mini-title">5. Captura de carbono</h4>
                  <p className="aapresid-mini-text">
                    Gráfico de barras mostrando las toneladas de CO₂ equivalente que fija <b>tu cultivo</b> por ambiente,
                    basado en el rendimiento pronosticado. Incluye explicación de qué es y para qué sirve.
                  </p>
                </div>
                <div className="aapresid-mini p-4">
                  <h4 className="aapresid-mini-title">6. Recomendación de nutrientes a fertilizar</h4>
                  <p className="aapresid-mini-text">
                    Recomendaciones específicas de fertilización basadas en <b>tu brecha de rendimiento</b>, el análisis de <b>tu suelo</b> y los requerimientos de <b>tu cultivo</b>. Incluye dosis por nutriente y por ambiente para cerrar <b>tu brecha</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 9. COMO EMPIEZO */}
        <RevealSection id="como-empezar">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>Cómo empiezo</h2>
                <p className="aapresid-lead">
                  Empezar es simple. Te guiamos paso a paso para que <b>tu regional obtenga resultados rápidos</b>.
                </p>
              </div>
            </div>

            <div className="aapresid-grid aapresid-cols-3">
              <div className="aapresid-mini">
                <h3>1. Contactanos</h3>
                <p>Escribinos por WhatsApp o completá el formulario. Te armamos el acceso para <b>tu regional</b>.</p>
              </div>
              <div className="aapresid-mini">
                <h3>2. Cargá los lotes de tu regional</h3>
                <p>Agregá <b>los lotes</b> con ubicación (coordenadas o polígono), cultivo y fecha de siembra. Podés cargar múltiples lotes.</p>
              </div>
              <div className="aapresid-mini">
                <h3>3. Generá tu primer análisis</h3>
                <p>Seleccioná <b>tu lote</b> y generá <b>tu primer análisis</b>. Recibís el reporte completo en PDF listo para compartir.</p>
              </div>
            </div>

            <div className="aapresid-card aapresid-support-card">
              <h3 className="aapresid-support-title">¿Necesitás ayuda?</h3>
              <p className="aapresid-support-text">
                Nuestro equipo te acompaña en todo el proceso. Si tenés dudas sobre cómo cargar <b>tus datos</b> o interpretar <b>tu reporte</b>,
                contactanos y te ayudamos a sacarle el máximo provecho a la plataforma.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* 10. INSTALA LA APP (PWA) */}
        <RevealSection id="instalar-app">
          <div className="aapresid-wrap">
            <div className="aapresid-section-title">
              <div>
                <h2>Instalá la plataforma en tu celular</h2>
                <p className="aapresid-lead">
                  Podés agregar la plataforma como una app en la pantalla de inicio de <b>tu teléfono</b>. No necesitás descargar nada de una tienda — seguí estos pasos según tu dispositivo.
                </p>
              </div>
            </div>

            <div className="aapresid-grid aapresid-cols-2">
              {/* iOS */}
              <div className="aapresid-card pwa-card pwa-card-ios">
                <div className="pwa-card-header">
                  <div className="pwa-platform-badge pwa-badge-ios" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.02-1.77-.79-3.29-.79s-2 .77-3.27.81c-1.31.04-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.71.85-1.84 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/></svg>
                  </div>
                  <h3 className="pwa-platform-name">iOS (iPhone)</h3>
                </div>
                <ol className="pwa-steps">
                  <li className="pwa-step">
                    <span className="pwa-step-num">1</span>
                    <span className="pwa-step-text">Abrí <b>Safari</b> e ingresá al sitio de la plataforma.</span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">2</span>
                    <span className="pwa-step-text">
                      Tocá el botón <b>Compartir</b>{' '}
                      <span className="pwa-inline-icon" aria-label="Ícono de compartir de iOS">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                      </span>{' '}
                      (el cuadrado con la flecha hacia arriba).
                    </span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">3</span>
                    <span className="pwa-step-text">Seleccioná <b>"Añadir a Pantalla de Inicio"</b>.</span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">4</span>
                    <span className="pwa-step-text">Si querés, cambiá el nombre del acceso directo.</span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">5</span>
                    <span className="pwa-step-text">Pulsá <b>Añadir</b> y listo.</span>
                  </li>
                </ol>
              </div>

              {/* Android */}
              <div className="aapresid-card pwa-card pwa-card-android">
                <div className="pwa-card-header">
                  <div className="pwa-platform-badge pwa-badge-android" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.27-.85-.31-.16-.69-.04-.85.27l-1.88 3.24C14.98 8.35 13.54 8 12 8s-2.98.35-4.44.96L5.68 5.73c-.16-.31-.54-.43-.85-.27-.31.16-.43.54-.27.85L6.4 9.48C3.32 11.25 1.18 14.41 1 18h22c-.18-3.59-2.32-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/></svg>
                  </div>
                  <h3 className="pwa-platform-name">Android</h3>
                </div>
                <ol className="pwa-steps">
                  <li className="pwa-step">
                    <span className="pwa-step-num">1</span>
                    <span className="pwa-step-text">Abrí <b>Chrome</b> e ingresá al sitio de la plataforma.</span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">2</span>
                    <span className="pwa-step-text">Tocá el menú <b className="pwa-dots-icon">⋮</b> (los tres puntos, arriba a la derecha).</span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">3</span>
                    <span className="pwa-step-text">Seleccioná <b>"Instalar aplicación"</b>.</span>
                  </li>
                  <li className="pwa-step">
                    <span className="pwa-step-num">4</span>
                    <span className="pwa-step-text">Confirmá tocando <b>Instalar</b> y listo.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* 11. CTA FINAL */}
        <RevealSection className="aapresid-final-cta">
          <div className="aapresid-final-box">
            <div>
              <h3>Empezá a cerrar la brecha</h3>
              <p>Ingresá a la plataforma o contactanos para arrancar con tu regional.</p>
            </div>
            <div className="aapresid-cta-group">
              <a className="aapresid-btn aapresid-btn-primary" href={aapresidLoginUrl} target="_blank" rel="noopener noreferrer">Ir a la plataforma</a>
              <button className="aapresid-btn aapresid-btn-outline" onClick={onOpenWhatsApp}>Contactanos</button>
            </div>
          </div>
        </RevealSection>
      </main>
      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default AapresidPage;
