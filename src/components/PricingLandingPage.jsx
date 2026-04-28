import {
  FaInfinity,
  FaChartLine,
  FaCalendarAlt,
  FaBuilding,
  FaSeedling,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import './pricing.css';
import './PricingLandingPage.css';

const PRINCIPLES = [
  {
    Icon: FaInfinity,
    title: 'Acceso ilimitado',
    copy:
      'Todos los lotes y hectáreas que necesites, en cada uno de los planes. Sin tope, sin asteriscos, sin letra chica.',
    accent: 'rp-acc-emerald',
    delay: 'rp-d-2',
  },
  {
    Icon: FaChartLine,
    title: 'Sin costo por escala',
    copy:
      'El precio refleja lo que cuesta construir la herramienta, no el tamaño del campo del cliente.',
    accent: 'rp-acc-blue',
    delay: 'rp-d-3',
  },
  {
    Icon: FaCalendarAlt,
    title: 'Un plan anual simple',
    copy:
      'Precio anual único en dólares. Abajo te mostramos el equivalente mensual, sin letra chica ni descuentos con asteriscos.',
    accent: 'rp-acc-amber',
    delay: 'rp-d-4',
  },
];

const EMPRESAS_POINTS = [
  'Una plataforma centralizada para toda tu red',
  'Planes diferenciados para cada empresa socia',
  'Standard USD 360/año o Full USD 720/año por empresa',
];

const PRODUCTORES_POINTS = [
  'Herramienta completa con todos tus lotes incluidos',
  'Acompañamiento agronómico personalizado del equipo',
  'USD 720/año + USD 3/ha sólo sobre los lotes asesorados',
];

const PricingLandingPage = ({
  onOpenWhatsApp,
  onGoToHome,
  onGoToEmpresas,
  onGoToProductores,
}) => {
  return (
    <div className="rp-page">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        menuItems={[
          { label: 'Inicio', id: 'top' },
          { label: 'Empresas', id: 'top', action: onGoToEmpresas },
          { label: 'Productores', id: 'top', action: onGoToProductores },
          { label: 'Contacto', id: 'top', action: onOpenWhatsApp },
        ]}
      />

      <main id="top">
        <section className="rp-container">
          <div className="rp-pricing-landing__hero rp-fade-in rp-d-1">
            <h1 className="rp-h1">¿Cómo vas a usar Rinde Plus?</h1>
            <p className="rp-pricing-landing__hero-copy">
              Tenemos dos modelos pensados para dos formas muy distintas de
              tomar decisiones a campo. Elegí el que está hecho para vos.
            </p>
          </div>

          <div className="rp-pricing-landing__principles">
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

          <div className="rp-pricing-landing__selectors">
            <button
              type="button"
              onClick={onGoToEmpresas}
              className="rp-selector rp-selector--blue rp-card-in rp-d-5"
            >
              <div className="rp-selector__top">
                <span className="rp-selector__chip rp-selector__chip--blue">
                  Modelo B2B
                </span>
              </div>
              <h2 className="rp-selector__title">Empresas</h2>
              <p className="rp-selector__copy">
                Asesorías, regionales Aapresid, grupos CREA, ensayistas,
                semilleros. Organizaciones que gestionan varios productores.
              </p>

              <ul className="rp-selector__list">
                {EMPRESAS_POINTS.map((txt) => (
                  <li key={txt}>
                    <span className="rp-check"><FaCheck /></span>
                    {txt}
                  </li>
                ))}
              </ul>

              <div className="rp-selector__cta">
                Ver planes Empresas
                <FaArrowRight />
              </div>
            </button>

            <button
              type="button"
              onClick={onGoToProductores}
              className="rp-selector rp-selector--emerald rp-card-in rp-d-6"
            >
              <div className="rp-selector__top">
                <span className="rp-selector__chip rp-selector__chip--emerald">
                  Modelo B2C
                </span>
              </div>
              <h2 className="rp-selector__title">Productores</h2>
              <p className="rp-selector__copy">
                Productores individuales que quieren la herramienta completa y
                un equipo agronómico acompañándolos durante toda la campaña.
              </p>

              <ul className="rp-selector__list">
                {PRODUCTORES_POINTS.map((txt) => (
                  <li key={txt}>
                    <span className="rp-check"><FaCheck /></span>
                    {txt}
                  </li>
                ))}
              </ul>

              <div className="rp-selector__cta">
                Ver plan Productores
                <FaArrowRight />
              </div>
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PricingLandingPage;
