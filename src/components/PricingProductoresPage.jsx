import {
  FaUserCheck,
  FaInfinity,
  FaBullseye,
  FaLeaf,
  FaCheck,
  FaArrowRight,
  FaArrowLeft,
  FaPlus,
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { PLAN_PRODUCTOR, buildWhatsAppUrl } from '../data/pricing';
import './pricing.css';
import './PricingProductoresPage.css';

const PRINCIPLES = [
  {
    Icon: FaUserCheck,
    title: 'Agrónomo dedicado',
    copy:
      'Un profesional del equipo Rinde Plus mira tus lotes asesorados, valida los resultados y te acompaña toda la campaña.',
    accent: 'rp-acc-emerald',
    delay: 'rp-d-2',
  },
  {
    Icon: FaInfinity,
    title: 'Todos tus lotes incluidos',
    copy:
      'Cargá todos tus campos y lotes sin tope. El plan base te da acceso ilimitado a toda la plataforma.',
    accent: 'rp-acc-blue',
    delay: 'rp-d-3',
  },
  {
    Icon: FaBullseye,
    title: 'Sólo pagás lo que asesoramos',
    copy:
      'USD 3/ha/año únicamente sobre los lotes que elijas para acompañamiento personalizado.',
    accent: 'rp-acc-amber',
    delay: 'rp-d-4',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Onboarding asistido',
    copy: 'Carga de datos y validación inicial del historial de tus lotes.',
  },
  {
    num: '02',
    title: 'Validación agronómica',
    copy: 'Un agrónomo del equipo revisa los resultados y confirma las recomendaciones.',
  },
  {
    num: '03',
    title: 'Recomendaciones',
    copy: 'Ajustes específicos para los lotes bajo asesoramiento, no planillas genéricas.',
  },
  {
    num: '04',
    title: 'Seguimiento',
    copy: 'Revisiones a lo largo de la campaña con correcciones en tiempo real.',
  },
];

const FAQ = [
  {
    q: '¿Qué diferencia al plan premium del plan para empresas?',
    a: 'El acompañamiento agronómico. En empresas cada organización da soporte a sus socios. Acá lo hacemos nosotros, directamente con vos.',
  },
  {
    q: '¿Qué lotes entran en el asesoramiento personalizado?',
    a: 'Los que vos elijas. El cobro de USD 3/ha sólo aplica sobre las hectáreas que definas para acompañamiento, el resto de la plataforma es ilimitada.',
  },
  {
    q: '¿Puedo cambiar los lotes asesorados durante la campaña?',
    a: 'Sí. La definición se ajusta por campaña. Si querés sumar lotes en el medio, se agregan y se prorratea hasta el próximo cierre de campaña.',
  },
  {
    q: '¿Cómo se paga el USD 3/ha?',
    a: 'Se factura anualmente sobre las hectáreas contratadas. La suscripción a la herramienta es independiente y anual, en dólares.',
  },
];

const PricingProductoresPage = ({
  onOpenWhatsApp,
  onGoToHome,
  onGoToPricing,
  onGoToEmpresas,
}) => {
  const handleContratar = () => {
    const msg =
      `Hola, soy productor y me interesa el plan Premium de Rinde Plus. ` +
      `¿Podemos coordinar una llamada?`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rp-page">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        menuItems={[
          { label: 'Volver a inicio', id: 'top', action: onGoToHome },
          { label: 'Planes', id: 'top', action: onGoToPricing },
          { label: 'Empresas', id: 'top', action: onGoToEmpresas },
          { label: 'Contacto', id: 'top', action: onOpenWhatsApp },
        ]}
      />

      <main id="top">
        <section className="rp-container">
          <div className="rp-prod__hero rp-fade-in rp-d-1">
            <h1 className="rp-h1">Rinde Plus para Productores</h1>
            <button
              type="button"
              className="rp-back-link"
              onClick={onGoToPricing}
            >
              <FaArrowLeft /> Volver a la selección
            </button>
            <p className="rp-prod__hero-copy">
              La herramienta completa más un equipo agronómico acompañándote
              toda la campaña. Vos sos dueño de la decisión. Nosotros de que no
              te falte nada.
            </p>
          </div>

          <div className="rp-prod__principles">
            {PRINCIPLES.map((p) => {
              const IconComp = p.Icon;
              return (
                <article
                  key={p.title}
                  className={`rp-principle ${p.accent} rp-card-in ${p.delay}`}
                >
                  <div className="rp-principle__body">
                    <div className="rp-principle__icon">
                      <IconComp />
                    </div>
                    <h3 className="rp-principle__title">{p.title}</h3>
                    <p className="rp-principle__copy">{p.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="rp-prod__steps">
            <div className="rp-prod__steps-header">
              <h2>Cómo funciona el acompañamiento</h2>
              <p>
                Cuatro momentos claros donde el equipo Rinde Plus trabaja con
                vos, sobre los lotes que elijas.
              </p>
            </div>

            <div className="rp-prod__steps-grid">
              {STEPS.map(({ num, title, copy }) => (
                <article key={num} className="rp-prod__step">
                  <div className="rp-prod__step-bar" />
                  <div className="rp-prod__step-body">
                    <div className="rp-prod__step-num">{num}</div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rp-prod__pricing">
            <div className="rp-prod__pricing-header">
              <h2 className="rp-h2">Conocés los resultados · Elegí cómo empezar</h2>
              <p>
                Un plan único: la herramienta completa + nuestro equipo
                agronómico sobre los lotes que elijas. Precio anual, en dólares.
              </p>
            </div>

            <div className="rp-prod__grid">
              <article className="rp-prod__plan">
                <span className="rp-prod__plan-badge">
                  Plan único · Todo incluido
                </span>

                <div className="rp-prod__plan-header">
                  <div className="rp-prod__plan-icon">
                    <FaLeaf />
                  </div>
                  <div>
                    <h3 className="rp-prod__plan-name">{PLAN_PRODUCTOR.nombre}</h3>
                    <p className="rp-prod__plan-tagline">{PLAN_PRODUCTOR.tagline}</p>
                  </div>
                </div>

                <div className="rp-prod__price-block">
                  <div className="rp-prod__price">
                    <span className="rp-prod__price-amount">
                      USD {PLAN_PRODUCTOR.precioAnual}
                    </span>
                    <span className="rp-prod__price-period">/ año</span>
                  </div>
                  <div className="rp-prod__price-monthly">
                    Equivale a USD {PLAN_PRODUCTOR.precioMensualEq} / mes ·
                    Facturación anual única
                  </div>

                  <div className="rp-prod__extra">
                    <FaPlus className="rp-prod__extra-icon" />
                    <div>
                      <strong>USD 3 / ha / año</strong> sólo sobre los lotes
                      que elijas para asesoramiento personalizado.
                    </div>
                  </div>
                </div>

                <ul className="rp-prod__plan-list">
                  {PLAN_PRODUCTOR.incluye.map((item) => (
                    <li key={item}>
                      <span className="rp-check"><FaCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="rp-cta-wrap">
              <button
                type="button"
                className="rp-cta"
                onClick={handleContratar}
              >
                Quiero empezar
                <FaArrowRight />
              </button>
              <p className="rp-cta__help">
                Te respondemos por WhatsApp en menos de 24hs.
              </p>
            </div>
          </div>

          <div className="rp-prod__faq">
            <div className="rp-prod__faq-header">
              <h2>Preguntas frecuentes</h2>
            </div>
            <div className="rp-faq-grid">
              {FAQ.map(({ q, a }) => (
                <div key={q} className="rp-faq-card">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PricingProductoresPage;
