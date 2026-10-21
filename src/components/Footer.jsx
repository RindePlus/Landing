import { PiEnvelopeSimple, PiInstagramLogo, PiWhatsappLogo, PiMapPin } from 'react-icons/pi';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.png';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/social';
import { useI18n } from '../i18n/I18nContext';
import './Footer.css';

// Footer con la estética de VigIA, en el azul marino de Rinde Plus
// (data-fondo-oscuro: el header se ajusta encima). A la izquierda la marca
// (logo y redes), a la derecha los cuatro datos de contacto; abajo, el
// copyright en un renglón fino.
const EMAIL = 'inforindeplus@gmail.com';
const ADDRESS = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const Footer = ({ onOpenWhatsApp }) => {
  const { dict } = useI18n();
  const t = dict.footer;

  return (
    <footer className="rp-footer" data-fondo-oscuro>
      <div className="rp-footer__inner">
        <div className="rp-footer__main">
          <div className="rp-footer__marca">
            {/* Logo de la versión oscura: amarillo y azul claro se leen
                sobre el marino. */}
            <a className="rp-footer__logo" href="#top" aria-label={dict.header.logoAlt}>
              <img src={rindeplusLogoDark} alt={dict.header.logoAlt} loading="lazy" decoding="async" />
            </a>
            <p className="rp-footer__made">{t.made}</p>

            <ul className="rp-footer__redes">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria}>
                  <PiInstagramLogo aria-hidden="true" />
                </a>
              </li>
              <li>
                <button type="button" onClick={onOpenWhatsApp} aria-label={t.whatsappAria}>
                  <PiWhatsappLogo aria-hidden="true" />
                </button>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} aria-label={t.emailAria}>
                  <PiEnvelopeSimple aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <ul className="rp-footer__contacto">
            <li>
              <span className="rp-footer__label"><PiEnvelopeSimple aria-hidden="true" />{t.email}</span>
              <a href={`mailto:${EMAIL}`} aria-label={t.emailAria}>{EMAIL}</a>
            </li>
            <li>
              <span className="rp-footer__label"><PiInstagramLogo aria-hidden="true" />{t.instagram}</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria}>
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <span className="rp-footer__label"><PiWhatsappLogo aria-hidden="true" />{t.whatsapp}</span>
              <button type="button" onClick={onOpenWhatsApp} aria-label={t.whatsappAria}>
                +54 9 3564 59-3446
              </button>
            </li>
            <li>
              <span className="rp-footer__label"><PiMapPin aria-hidden="true" />{t.office}</span>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label={t.officeAria}>
                Concejal Lorusso 762 · Alta Gracia
              </a>
            </li>
          </ul>
        </div>

        <div className="rp-footer__bottom">
          <p className="rp-footer__copyright">
            © 2026 Rinde Plus. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
