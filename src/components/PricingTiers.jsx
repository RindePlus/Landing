import { TRAMOS_CUITS, LOTES_POR_CUIT } from '../data/pricing';
import './PricingTiers.css';

// Tabla de tramos: la tarifa por CUIT es lo único que se compara; los tramos
// con descuento lo declaran en porcentaje.
const PricingTiers = () => (
  <div className="rp-tiers">
    <div className="rp-tiers__row">
      {TRAMOS_CUITS.map((t) => (
        <div key={t.id} className="rp-tier">
          <div className="rp-tier__label">{t.label}</div>

          <p className="rp-tier__rate">
            <span className="rp-tier__rate-currency">USD</span>
            <span className="rp-tier__rate-amount">{t.precioPorCuit}</span>
          </p>
          <div className="rp-tier__unit">por CUIT / año</div>

          {t.ahorroPct > 0 && (
            <p className="rp-tier__saving">{t.ahorroPct}% de descuento</p>
          )}
        </div>
      ))}
    </div>

    <p className="rp-tiers__note">
      Incluye hasta {LOTES_POR_CUIT} lotes por CUIT · Sin límite de hectáreas ·
      Sin cargos ocultos
    </p>
  </div>
);

export default PricingTiers;
