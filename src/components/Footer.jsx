import { PiEnvelopeSimple, PiInstagramLogo, PiWhatsappLogo, PiMapPin } from 'react-icons/pi';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.webp';
import { INSTAGRAM_URL, whatsappUrl } from '../data/social';
import { PRIVACY_PATH } from '../i18n/config';
import { urlDe } from '../data/imagen';
import { FOTOS } from '../data/fotos';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import './Footer.css';

// Footer en el azul marino de Rinde Plus, monocromo (logo, íconos y letras
// en blanco; data-fondo-oscuro: el header se ajusta encima). Compacto: el
// logo, la política de privacidad del sitio (los términos y la política
// de la plataforma se ven desde la app) y los
// contactos en círculos chicos (Instagram, WhatsApp, email y la oficina en
// el mapa); abajo, el copyright y los créditos de las fotos,
// alineados a los mismos bordes. Estático (sin JS propio): los enlaces de
// WhatsApp van directo a WhatsApp.
const EMAIL = 'inforindeplus@gmail.com';
const ADDRESS = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const Footer = () => {
  const { locale, dict } = useI18n();
  const t = dict.footer;
  const waUrl = whatsappUrl(dict.whatsapp.message);

  return (
    <footer className="rp-footer" data-fondo-oscuro>
      <div className="rp-footer__inner">
        <div className="rp-footer__main">
          <div className="rp-footer__marca">
            {/* Logo en blanco (el CSS lo pasa a monocromo). */}
            <a className="rp-footer__logo" href="#top" aria-label={dict.header.logoAlt}>
              <img src={urlDe(rindeplusLogoDark)} alt={dict.header.logoAlt} width="344" height="121" loading="lazy" decoding="async" />
            </a>

            <div className="rp-footer__derecha">
              <nav className="rp-footer__legales" aria-label={t.legalNav}>
                <a href={PRIVACY_PATH[locale]}>{t.privacy}</a>
              </nav>

              <ul className="rp-footer__redes">
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria}>
                    <PiInstagramLogo aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" aria-label={t.whatsappAria}>
                    <PiWhatsappLogo aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} aria-label={t.emailAria}>
                    <PiEnvelopeSimple aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.officeAria}: ${ADDRESS}`}
                    title={ADDRESS}
                  >
                    <PiMapPin aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
