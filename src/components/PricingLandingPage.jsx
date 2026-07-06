import { FaCheck } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import AapresidBanner from './AapresidBanner';
import { useRpTheme } from '../hooks/useRpTheme';
import './pricing.css';
import './pricing-gh.css';
import './PricingLandingPage.css';

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
  onGoToAapresid,
  onGoToPlatforms,
}) => {
  const { theme, toggleTheme } = useRpTheme();

  return (
    <div className="rp-home rp-pricing">
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
        <section className="rp-home__section rp-pricing__hero">
          <div className="rp-home__section-header rp-fade-in rp-d-1">
            <div className="rp-num-eyebrow">Planes y precios</div>
            <h1 className="rp-home__section-title">
              ¿Cómo vas a usar{' '}
              <span className="rp-home__section-title-accent">Rinde Plus</span>?
            </h1>
            <p className="rp-home__section-subtitle">
              Tenemos dos modelos pensados para dos formas muy distintas de
              tomar decisiones a campo. Elegí el que está hecho para vos.
            </p>
          </div>

          <div className="rp-pricing__selectors">
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
              </div>
            </button>
          </div>
        </section>

        <AapresidBanner onGoToAapresidPricing={onGoToAapresid} />
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PricingLandingPage;
