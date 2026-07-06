import Reveal from './Reveal';
import './AapresidBanner.css';

/* Callout banner for the Aapresid program — lives on /pricing.
   Class names keep the rp-home__ prefix: the banner renders inside the
   .rp-home GitHub-skin scope on every page that uses it. */
const AapresidBanner = ({ onGoToAapresidPricing }) => (
  <section className="rp-home__section rp-home__Aapresid-section">
    <Reveal>
      <div className="rp-home__Aapresid">
        <div className="rp-home__Aapresid-text">
          <span className="rp-home__Aapresid-eyebrow">Programa Aapresid</span>
          <h2 className="rp-home__Aapresid-title">
            ¿Sos socio de una Regional de Aapresid?
          </h2>
          <p className="rp-home__Aapresid-copy">
            Tenemos un programa y precios especiales para socios y ATR de la red.
          </p>
        </div>
        <button
          type="button"
          className="rp-home__Aapresid-btn"
          onClick={onGoToAapresidPricing}
        >
          Ver planes Aapresid
        </button>
      </div>
    </Reveal>
  </section>
);

export default AapresidBanner;
