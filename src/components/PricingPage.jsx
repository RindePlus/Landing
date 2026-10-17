import {
  FaUsers,
  FaHeadset,
  FaCogs,
  FaCheck,
  FaWhatsapp,
  FaFlask,
  FaEye,
  FaCalculator,
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import PricingFaq from './PricingFaq';
import PricingTiers from './PricingTiers';
import { useRpTheme } from '../hooks/useRpTheme';
import { FUNCIONALIDADES, LOTES_POR_CUIT, buildWhatsAppUrl } from '../data/pricing';
import aaasLogo from '../assets/aaas-logo.png';
import agroconsultorLogo from '../assets/related companies/agroconsultor.png';
import './pricing.css';
import './pricing-gh.css';
import './PricingPage.css';

const PRINCIPLES = [
  {
    Icon: FaUsers,
    title: 'Una cuenta por socio',
    copy:
      'Cada empresa asociada entra con su propio usuario y ve únicamente sus datos. La regional o asesoría mantiene la vista integral.',
    accent: 'rp-acc-blue',
  },
  {
    Icon: FaHeadset,
    title: 'Soporte técnico y capacitaciones incluidas',
    copy:
      'Onboarding, capacitaciones para tu red y soporte técnico de la plataforma, incluidos en la licencia.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaCogs,
    title: 'Actualizaciones incluidas',
    copy:
      'Las mejoras y nuevas funcionalidades productivas entran en tu licencia. El producto crece con tu organización.',
    accent: 'rp-acc-amber',
  },
];

// Las tres capacidades que producen ese tiempo recuperado.
const BENEFICIOS = [
  {
    Icon: FaFlask,
    title: 'Simulá la fertilización antes de comprar',
    copy: 'Probás escenarios de fertilización lote por lote y ves el rinde potencial de cada uno. La compra de insumos se define con el número delante.',
    accent: 'rp-acc-blue',
  },
  {
    Icon: FaEye,
    title: 'Monitoreá el estrés antes de perder rinde',
    copy: 'Seguimiento de estrés hídrico y térmico con alertas tempranas, para actuar de forma preventiva y no cuando el daño ya está hecho.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaCalculator,
    title: 'Simulá el margen bruto y cerrá la campaña',
    copy: 'Margen bruto proyectado por lote y cierre de campaña con el manejo económico completo, sin armar una planilla.',
    accent: 'rp-acc-amber',
  },
];

const EXPECTATIONS = [
  {
    title: 'Equipo agronómico propio',
    desc: 'Un profesional o equipo capaz de interpretar los resultados y acompañar a los socios en las decisiones de campo.',
  },
  {
    title: 'Un administrador designado',
    desc: 'Una persona de tu organización que opere como punto de contacto y administrador principal de la plataforma.',
  },
  {
    title: 'Soporte agronómico a tus socios',
    desc: 'Tu equipo resuelve las dudas agronómicas que tengan tus productores. Nosotros nos ocupamos de las dudas sobre la herramienta.',
  },
  {
    title: 'Voluntad de capacitar a tu red',
    desc: 'Compromiso de capacitar a los usuarios finales con el material y el onboarding inicial que te proveemos.',
  },
];

const FAQ = [
  {
    q: '¿Cada socio tiene su usuario propio?',
    a: 'Sí. La regional o asesoría mantiene una visión integral de todas las empresas asociadas, mientras cada empresa ve únicamente su propia información.',
  },
  {
    q: '¿Hay un límite de lotes?',
    a: `Cada CUIT incluye hasta ${LOTES_POR_CUIT} lotes activos, sin tope de hectáreas. Si tu operación necesita más, lo conversamos.`,
  },
  {
    q: '¿Qué pasa si sumo una empresa nueva a mitad de año?',
    a: 'Se prorratea el costo hasta el próximo ciclo de facturación anual y se incorpora a tu organización bajo el mismo esquema.',
  },
  {
    q: '¿Por qué solo precio anual?',
    a: 'Simplificamos el pricing: un precio claro, anual. Así no hay descuentos con asteriscos ni sorpresas en la factura.',
  },
];

const PricingPage = ({ onOpenWhatsApp, onGoToHome, onGoToPlatforms }) => {
  const { theme, toggleTheme } = useRpTheme();

  const handleCoordinar = () => {
    const msg =
      `Hola, soy de una organización interesada en Rinde Plus para Empresas. ` +
      `¿Podemos coordinar una demo?`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rp-home rp-pricing rp-b2b-page">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        theme={theme}
        onToggleTheme={toggleTheme}
        onGoToPlatforms={onGoToPlatforms}
        onBack={onGoToHome}
        showMenu={false}
      />

      <main id="top">
        <section className="rp-container">
          <div className="rp-b2b__retorno rp-fade-in rp-d-1">
            <div className="rp-b2b__retorno-header">
              <h2 className="rp-h2 rp-b2b__retorno-title">
                Hasta{' '}
                <span className="rp-h2 rp-b2b__retorno-figure">
                  3<span className="rp-b2b__retorno-figure-x">×</span>
                </span>{' '}
                más hectáreas con el mismo equipo
              </h2>
              <p>
                El tiempo que hoy se va en demostrar el resultado —informes,
                planillas, cálculo de costos— lo resuelve la plataforma con los
                datos que tu equipo ya carga. Ese tiempo vuelve a lo único que
                no se puede automatizar:
                <strong className="rp-b2b__retorno-punch">
                  El criterio del asesor
                </strong>
              </p>
            </div>

            <div className="rp-b2b__retorno-grid">
              {BENEFICIOS.map((b) => {
                const IconComp = b.Icon;
                return (
                  <article
                    key={b.title}
                    className={`rp-principle ${b.accent}`}
                  >
                    <div className="rp-principle__body">
                      <div className="rp-principle__icon">
                        <IconComp />
                      </div>
                      <h3 className="rp-principle__title">{b.title}</h3>
                      <p className="rp-principle__copy">{b.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="rp-b2b__retorno-tail">
              Todo desde la plataforma · El productor entra a ver sus lotes ·
              Informe PDF listo para enviar
            </p>
          </div>

          <div className="rp-b2b__pricing">
            <div className="rp-b2b__pricing-header">
              <h1 className="rp-home__section-title">
                Precios para Empresas
              </h1>
              <p className="rp-home__section-subtitle">
                Un único plan con todos los módulos y usuarios ilimitados. Pagás
                por CUIT, y el precio baja a medida que crece tu red.
              </p>
            </div>

            <ul className="rp-b2b__incluye">
              {FUNCIONALIDADES.map((f) => (
                <li key={f}>
                  <span className="rp-check">
                    <FaCheck />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <PricingTiers />

            <ul className="rp-b2b__included">
              {PRINCIPLES.map((p) => {
                const IconComp = p.Icon;
                return (
                  <li
                    key={p.title}
                    className={`rp-b2b__included-item ${p.accent}`}
                  >
                    <span className="rp-b2b__included-icon" aria-hidden="true">
                      <IconComp />
                    </span>
                    <h3 className="rp-b2b__included-title">{p.title}</h3>
                    <p className="rp-b2b__included-copy">{p.copy}</p>
                  </li>
                );
              })}
            </ul>

            <div className="rp-cta-wrap">
              <button type="button" className="rp-cta" onClick={handleCoordinar}>
                Coordinemos una demo
              </button>
              <p className="rp-cta__help">
                Te respondemos por WhatsApp en menos de 24hs.
              </p>
            </div>
          </div>

          <div className="rp-b2b__expect">
            <div className="rp-b2b__expect-header">
              <h2 className="rp-h2">Qué esperamos de tu organización</h2>
              <p>
                Rinde Plus te da la herramienta. Tu organización aporta la
                cercanía con el productor. Este modelo funciona cuando tu equipo
                ya tiene el músculo agronómico para acompañar a sus socios.
              </p>
            </div>

            <ol className="rp-b2b__expect-list">
              {EXPECTATIONS.map(({ title, desc }, i) => (
                <li key={title} className="rp-b2b__expect-item">
                  <span className="rp-b2b__expect-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="rp-b2b__expect-title">{title}</h4>
                    <p className="rp-b2b__expect-desc">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rp-b2b__faq">
            <div className="rp-b2b__faq-header">
              <h2>Preguntas frecuentes</h2>
            </div>
            <PricingFaq items={FAQ} />
          </div>

          <div className="rp-b2b__productor">
            <h2 className="rp-b2b__productor-title">¿Sos productor?</h2>
            <p className="rp-b2b__productor-copy">
              Si trabajás tus lotes por tu cuenta, escribinos y te contamos cómo
              acceder a Rinde Plus.
            </p>
            <a
              className="rp-b2b__productor-cta"
              href={buildWhatsAppUrl(
                'Hola, soy productor y quiero saber cómo acceder a Rinde Plus.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Escribinos por WhatsApp
            </a>

            <div className="rp-b2b__aval">
              <span className="rp-b2b__aval-label">Con la asesoría de</span>
              <div className="rp-b2b__aval-logos">
                <img
                  className="rp-b2b__aval-aaas"
                  src={aaasLogo}
                  alt="Agro Assistance Service"
                />
                <img
                  className="rp-b2b__aval-agro"
                  src={agroconsultorLogo}
                  alt="Agroconsultor"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PricingPage;
