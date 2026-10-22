import { PiEnvelopeSimple, PiInstagramLogo, PiWhatsappLogo, PiMapPin } from 'react-icons/pi';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.png';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappUrl } from '../data/social';
import { urlDe } from '../data/imagen';
import { FOTOS } from '../data/fotos';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import './Footer.css';

// Footer en el azul marino de Rinde Plus, monocromo (logo, íconos y letras
// en blanco; data-fondo-oscuro: el header se ajusta encima). Compacto: a la
// izquierda el logo y las redes en círculos chicos, a la derecha los cuatro
// datos de contacto con su ícono; abajo, el copyright y los créditos de las
// fotos, alineados a los mismos bordes. Estático (sin JS propio): los enlaces de
// WhatsApp llevan data-abrir-whatsapp y en escritorio WhatsAppWidget los
// abre en su panel; en celular van directo a WhatsApp.
const EMAIL = 'inforindeplus@gmail.com';
const ADDRESS = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const Footer = () => {
  const { dict } = useI18n();
  const t = dict.footer;
  const waUrl = whatsappUrl(dict.whatsapp.message);

  return (
    <footer className="rp-footer" data-fondo-oscuro>
      <div className="rp-footer__inner">
        <div className="rp-footer__main">
          <div className="rp-footer__marca">
            {/* Logo en blanco (el CSS lo pasa a monocromo). */}
            <a className="rp-footer__logo" href="#top" aria-label={dict.header.logoAlt}>
              <img src={urlDe(rindeplusLogoDark)} alt={dict.header.logoAlt} loading="lazy" decoding="async" />
            </a>

            <ul className="rp-footer__redes">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria}>
                  <PiInstagramLogo aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" data-abrir-whatsapp aria-label={t.whatsappAria}>
                  <PiWhatsappLogo aria-hidden="true" />
                </a>
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
              <a href={`mailto:${EMAIL}`} aria-label={t.emailAria} title={t.email}>
                <PiEnvelopeSimple aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria} title={t.instagram}>
                <PiInstagramLogo aria-hidden="true" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" data-abrir-whatsapp aria-label={t.whatsappAria} title={t.whatsapp}>
                <PiWhatsappLogo aria-hidden="true" />
                +54 9 3564 59-3446
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label={t.officeAria} title={t.office}>
                <PiMapPin aria-hidden="true" />
                Concejal Lorusso 762 · Alta Gracia
              </a>
            </li>
          </ul>
        </div>

        <div className="rp-footer__bottom">
          <p className="rp-footer__copyright">
            © 2026 Rinde Plus. {t.rights}
          </p>
          {/* Créditos de las fotos de campo (CC BY-SA pide autor, licencia
              y enlace): el autor enlaza a la foto; el título y la versión de
              la licencia van en el title. */}
          <p className="rp-footer__creditos">
            {dict.credits.lead}:{' '}
            {FOTOS.map((f, i) => (
              <span key={f.href}>
                {i > 0 && ' · '}
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${dict.credits.photos[i]} · ${f.licencia}`}
                >
                  {f.autor}
                </a>
              </span>
            ))}{' '}
            (CC BY-SA<span className="rp-footer__creditos-via">, {dict.credits.via}</span>)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default conIdioma(Footer);
