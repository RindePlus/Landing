import { LuArrowRight } from 'react-icons/lu';
import Reveal from './Reveal';
import './AapresidBanner.css';

/* Callout banner for the AAPRESID program — lives on /pricing.
   Class names keep the rp-home__ prefix: the banner renders inside the
   .rp-home GitHub-skin scope on every page that uses it. */
const AapresidBanner = ({ onGoToAapresidPricing }) => (
  <section className="rp-home__section rp-home__aapresid-section">
    <Reveal>
      <div className="rp-home__aapresid">
        <div className="rp-home__aapresid-text">
          <span className="rp-home__aapresid-eyebrow">Programa AAPRESID</span>
          <h2 className="rp-home__aapresid-title">
            ¿Sos socio de una Regional de AAPRESID?
          </h2>
          <p className="rp-home__aapresid-copy">
            Tenemos un programa y precios especiales para socios y ATR de la red.
          </p>
        </div>
        <button
          type="button"
          className="rp-home__aapresid-btn"
          onClick={onGoToAapresidPricing}
        >
          Ver planes AAPRESID
          <LuArrowRight />
        </button>
      </div>
    </Reveal>
  </section>
);

export default AapresidBanner;
