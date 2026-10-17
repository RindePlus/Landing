import { LuMail, LuMapPin } from 'react-icons/lu';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/social';
import { useI18n } from '../i18n/I18nContext';
import './Footer.css';

const Footer = ({ onOpenWhatsApp }) => {
  const t = useI18n().dict.footer;
  const openEmail = () => {
    window.location.href = 'mailto:inforindeplus@gmail.com';
  };

  const openGoogleMaps = () => {
    const address = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="rp-footer">
      <div className="rp-footer__dots" />
      <div className="rp-footer__inner">
        <ul className="rp-footer__contact">
          <li>
            <button
              type="button"
              className="rp-footer__contact-item"
              onClick={openEmail}
              aria-label={t.emailAria}
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--blue">
                <LuMail />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">{t.email}</span>
                <span className="rp-footer__contact-value">
                  inforindeplus@gmail.com
                </span>
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="rp-footer__contact-item"
              onClick={openInstagram}
              aria-label={t.instagramAria}
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--instagram">
                <FaInstagram />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">{t.instagram}</span>
                <span className="rp-footer__contact-value">
                  {INSTAGRAM_HANDLE}
                </span>
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="rp-footer__contact-item"
              onClick={onOpenWhatsApp}
              aria-label={t.whatsappAria}
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--whatsapp">
                <FaWhatsapp />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">{t.whatsapp}</span>
                <span className="rp-footer__contact-value">
                  +54 9 3564 59-3446
                </span>
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="rp-footer__contact-item"
              onClick={openGoogleMaps}
              aria-label={t.officeAria}
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--amber">
                <LuMapPin />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">{t.office}</span>
                <span className="rp-footer__contact-value">
                  Concejal Lorusso 762 · Alta Gracia
                </span>
              </span>
            </button>
          </li>
        </ul>

        <div className="rp-footer__divider" />

        <div className="rp-footer__bottom">
          <p className="rp-footer__copyright">
            © 2026 <strong>Rinde Plus</strong>. {t.rights}
          </p>
          <span className="rp-footer__made">
            <span className="rp-footer__made-dot" />
            {t.made}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
