import './PronosticosPage.css';
import Header from './Header';
import Footer from './Footer';
import cosechadoraBg from '../assets/cosechadora.jpg';

const PronosticosPage = ({ onOpenWhatsApp, onGoToHome }) => {
  const pronosticosLoginUrl = 'https://pronosticos.rindeplus.com/login/rindeplus';

  return (
    <div className="pronosticos-page">
      <Header 
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        showMenu={false}
      />

      <main id="top">
        {/* HERO */}
        <section 
          className="pronosticos-hero-section" 
          style={{ backgroundImage: `linear-gradient(90deg, rgba(0,64,34,0.82) 0%, rgba(0,64,34,0.55) 50%, rgba(0,64,34,0.25) 100%), url(${cosechadoraBg})` }}
        >
          <div className="pronosticos-hero-inner">
            <h1 className="pronosticos-hero-title">Análisis y brechas</h1>
            <p className="pronosticos-hero-subtitle">Toda tu información en un solo lugar.</p>
            <div className="pronosticos-hero-cta-group">
              <a className="pronosticos-hero-btn pronosticos-hero-btn-primary" href={pronosticosLoginUrl} target="_blank" rel="noopener noreferrer">Ir a la plataforma</a>
              <button className="pronosticos-hero-btn pronosticos-hero-btn-outline" onClick={onOpenWhatsApp}>Contactanos</button>
            </div>
          </div>
        </section>

        {/* QUE ES */}
        <section id="que-es">
          <div className="pronosticos-wrap">
            <div className="pronosticos-section-title">
              <div>
                <h2>Qué es</h2>
              </div>
            </div>

            <div className="pronosticos-card">
              <p style={{fontSize: '16px', lineHeight: '1.7', margin: 0, color: 'var(--text)'}}>
                La plataforma es una herramienta de análisis y decisión que integra información de clima, suelo, ambientes e históricos productivos para construir escenarios de rendimiento antes y durante la campaña. Centraliza los datos del lote y los traduce en indicadores claros que permiten entender el comportamiento productivo y anticipar resultados con mayor certeza.
              </p>
            </div>
          </div>
        </section>

        {/* QUE SOLUCIONA */}
        <section id="que-soluciona">
          <div className="pronosticos-wrap">
            <div className="pronosticos-section-title">
              <div>
                <h2>Qué soluciona</h2>
              </div>
            </div>

            <div className="pronosticos-card">
              <p style={{fontSize: '16px', lineHeight: '1.7', margin: 0, color: 'var(--text)'}}>
                En la gestión agrícola, la información suele estar fragmentada, desordenada y sin conexión directa con la decisión. La herramienta resuelve este problema al unificar toda la información relevante en un solo lugar y cuantificar la brecha entre el rendimiento esperado y el rendimiento potencial alcanzable, mostrando cuánto puede mejorar el cultivo mediante intervenciones técnicas precisas y calculadas.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona">
          <div className="pronosticos-wrap">
            <div className="pronosticos-section-title">
              <div>
                <h2>Cómo funciona</h2>
                <p className="pronosticos-lead">Simple, trazable y pensado para que <b>escalés</b> a múltiples lotes y campos.</p>
              </div>
            </div>

            <div className="pronosticos-grid pronosticos-cols-3">
              <div className="pronosticos-mini">
                <h3>Paso 1 — Integramos tus datos</h3>
                <p>Históricos de <b>tu zona</b> + clima esperado de la ventana de <b>tu cultivo</b> + análisis de suelo / ambientes de <b>tu lote</b>.</p>
              </div>
              <div className="pronosticos-mini">
                <h3>Paso 2 — Modelamos por ambiente</h3>
                <p>El modelo genera el rinde y las brechas de <b>tu lote</b>; identifica variables (DPV, agua, suelo) en <b>tu campaña</b>.</p>
              </div>
              <div className="pronosticos-mini">
                <h3>Paso 3 — Recibís tu reporte</h3>
                <p>Resumen, escenarios, ventanas críticas y semáforo de variables para que <b>priorices tus decisiones</b>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MODULOS */}
        <section id="modulos">
          <div className="pronosticos-wrap">
            <div className="pronosticos-section-title">
              <div>
                <h2>Módulos de la plataforma</h2>
                <p className="pronosticos-lead">
                  Accedé a diferentes análisis según <b>tu necesidad</b>: análisis de campaña o análisis de brechas y rendimientos.
                </p>
              </div>
            </div>

            <div className="pronosticos-grid pronosticos-cols-2">
              <div className="pronosticos-card">
                <h3 style={{margin: '0 0 12px', fontSize: '20px'}}>Análisis de Campaña</h3>
                <p className="pronosticos-lead" style={{marginBottom: '16px'}}>
                  Dashboard completo con análisis detallado de datos de suelo, clima y rendimiento de <b>tu campaña</b>.
                </p>
                <ul className="pronosticos-list">
                  <li>
                    <span className="pronosticos-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Análisis de datos históricos de <b>tu campo</b></span>
                  </li>
                  <li>
                    <span className="pronosticos-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Monitoreo de clima y variables de <b>tu zona</b></span>
                  </li>
                  <li>
                    <span className="pronosticos-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Visualización de rendimientos y tendencias</span>
                  </li>
                </ul>
              </div>

              <div className="pronosticos-card">
                <h3 style={{margin: '0 0 12px', fontSize: '20px'}}>Análisis de Brechas y Rendimientos</h3>
                <p className="pronosticos-lead" style={{marginBottom: '16px'}}>
                  Escenarios de brechas y rendimiento con <b>tu lote</b> real. Modelo de IA para simular escenarios y evaluar riesgos.
                </p>
                <ul className="pronosticos-list">
                  <li>
                    <span className="pronosticos-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Escenarios de rendimiento con <b>tu lote</b></span>
                  </li>
                  <li>
                    <span className="pronosticos-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Brechas por ambiente (potencial vs pronosticado)</span>
                  </li>
                  <li>
                    <span className="pronosticos-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Recomendaciones de fertilización para cerrar <b>tu brecha</b></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pronosticos-card" style={{marginTop: '18px'}}>
              <h3 style={{margin: '0 0 12px'}}>Lo que te muestra el reporte</h3>
              <p className="pronosticos-lead" style={{margin: '0 0 16px', maxWidth: 'none'}}>
                Al abrir <b>tu reporte</b>, esto es lo que encontrás:
              </p>

              <div className="pronosticos-grid pronosticos-cols-2" style={{gap: '14px'}}>
                <div className="pronosticos-mini" style={{padding: '16px'}}>
                  <h4 style={{margin: '0 0 8px', fontSize: '15px', color: 'var(--btn)'}}>1. Comparación de fechas de siembra</h4>
                  <p style={{margin: 0, fontSize: '13px', lineHeight: '1.6'}}>
                    Posibilidad de comparar distintas fechas de siembra, <b>42 días en adelante</b> y <b>42 días para atrás</b>. 
                    Visualizá cómo impacta la fecha de siembra en el rendimiento pronosticado de <b>tu cultivo</b>.
                  </p>
                </div>
                <div className="pronosticos-mini" style={{padding: '16px'}}>
                  <h4 style={{margin: '0 0 8px', fontSize: '15px', color: 'var(--btn)'}}>2. Modelo clima + suelo</h4>
                  <p style={{margin: 0, fontSize: '13px', lineHeight: '1.6'}}>
                    Gráfico de barras comparando <b>Potencial vs Pronosticado</b> por ambiente (Alta, Media, Baja) en <b>tn/ha</b>.
                    Te muestra la <b>brecha</b> en toneladas por hectárea y datos de agua útil, lluvia del ciclo y agua total.
                  </p>
                </div>
                <div className="pronosticos-mini" style={{padding: '16px'}}>
                  <h4 style={{margin: '0 0 8px', fontSize: '15px', color: 'var(--btn)'}}>3. Distribución de rendimiento</h4>
                  <p style={{margin: 0, fontSize: '13px', lineHeight: '1.6'}}>
                    Gráfico con la distribución esperada de rendimiento mostrando <b>Media, P10, P90</b> y escenarios climáticos
                    (precipitaciones ±15%, temperatura ±3°C) para que entiendas el rango de <b>tu rendimiento</b>.
                  </p>
                </div>
                <div className="pronosticos-mini" style={{padding: '16px'}}>
                  <h4 style={{margin: '0 0 8px', fontSize: '15px', color: 'var(--btn)'}}>4. Déficit de presión de vapor (DPV)</h4>
                  <p style={{margin: 0, fontSize: '13px', lineHeight: '1.6'}}>
                    Promedio de DPV de los días analizados con categorías (Muy bajo, Óptimo, Moderado, Alto), evolución diaria
                    y tabla de días críticos con DPV &gt; 2.0 kPa en <b>tu campaña</b>.
                  </p>
                </div>
                <div className="pronosticos-mini" style={{padding: '16px'}}>
                  <h4 style={{margin: '0 0 8px', fontSize: '15px', color: 'var(--btn)'}}>5. Captura de carbono</h4>
                  <p style={{margin: 0, fontSize: '13px', lineHeight: '1.6'}}>
                    Gráfico de barras mostrando las toneladas de CO₂ equivalente que fija <b>tu cultivo</b> por ambiente,
                    basado en el rendimiento pronosticado. Incluye explicación de qué es y para qué sirve.
                  </p>
                </div>
                <div className="pronosticos-mini" style={{padding: '16px'}}>
                  <h4 style={{margin: '0 0 8px', fontSize: '15px', color: 'var(--btn)'}}>6. Recomendación de nutrientes a fertilizar</h4>
                  <p style={{margin: 0, fontSize: '13px', lineHeight: '1.6'}}>
                    Recomendaciones específicas de fertilización basadas en <b>tu brecha de rendimiento</b>, el análisis de <b>tu suelo</b> y los requerimientos de <b>tu cultivo</b>. Incluye dosis por nutriente y por ambiente para cerrar <b>tu brecha</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO EMPIEZO */}
        <section id="como-empezar">
          <div className="pronosticos-wrap">
            <div className="pronosticos-section-title">
              <div>
                <h2>Cómo empiezo a utilizar la herramienta</h2>
                <p className="pronosticos-lead">
                  Empezar a usar la plataforma es simple. Te guiamos paso a paso para que <b>obtengas resultados rápidos</b>.
                </p>
              </div>
            </div>

            <div className="pronosticos-grid pronosticos-cols-3">
              <div className="pronosticos-mini">
                <h3>1. Solicita tu cuenta</h3>
                <p>Contactate con nuestro equipo y pasales los datos de <b>tu empresa</b>.</p>
              </div>
              <div className="pronosticos-mini">
                <h3>2. Cargá tus lotes</h3>
                <p>Agregá <b>tus lotes</b> con ubicación (coordenadas o polígono), cultivo y fecha de siembra. Podés cargar múltiples lotes.</p>
              </div>
              <div className="pronosticos-mini">
                <h3>3. Generá tu primer análisis</h3>
                <p>Seleccioná <b>tu lote</b> y generá <b>tu primer análisis</b>. Recibís el reporte completo en PDF listo para compartir.</p>
              </div>
            </div>

            <div className="pronosticos-card" style={{marginTop: '18px', background: '#E3F2FD', borderColor: 'var(--btn)'}}>
              <h3 style={{margin: '0 0 8px', color: 'var(--btn)'}}>¿Necesitás ayuda?</h3>
              <p style={{margin: 0, color: 'var(--text)', fontSize: '14px', lineHeight: '1.6'}}>
                Nuestro equipo te acompaña en todo el proceso. Si tenés dudas sobre cómo cargar <b>tus datos</b> o interpretar <b>tu reporte</b>,
                contactanos y te ayudamos a sacarle el máximo provecho a <b>Pronósticos</b>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pronosticos-final-cta">
          <div className="pronosticos-final-box">
            <div>
              <h3>Comenzá a usarlo</h3>
              <p>Probalo ahora — ingresá directo a la plataforma o contactanos.</p>
            </div>
            <div className="pronosticos-cta-group">
              <a className="pronosticos-btn pronosticos-btn-primary" href={pronosticosLoginUrl} target="_blank" rel="noopener noreferrer">Ir a la plataforma</a>
              <button className="pronosticos-btn pronosticos-btn-outline" onClick={onOpenWhatsApp}>Contactanos</button>
            </div>
          </div>
        </section>
      </main>
      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PronosticosPage;
