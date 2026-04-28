import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onOpenWhatsApp }) => {
  const openEmail = () => {
    window.location.href = 'mailto:inforindeplus@gmail.com';
  };

  const openGoogleMaps = () => {
    const address = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="rp-footer">
      <div className="rp-footer__dots" />
      <div className="rp-footer__inner">
        <h3 className="rp-footer__column-title">Contacto directo</h3>

        <ul className="rp-footer__contact">
          <li>
            <button
              type="button"
              className="rp-footer__contact-item"
              onClick={openEmail}
              aria-label="Enviar email a inforindeplus@gmail.com"
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--blue">
                <MdEmail />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">Email</span>
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
              onClick={onOpenWhatsApp}
              aria-label="Abrir chat de WhatsApp"
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--whatsapp">
                <FaWhatsapp />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">WhatsApp</span>
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
              aria-label="Ver ubicación en Google Maps"
            >
              <span className="rp-footer__contact-icon rp-footer__contact-icon--amber">
                <MdLocationOn />
              </span>
              <span className="rp-footer__contact-text">
                <span className="rp-footer__contact-label">Oficina</span>
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
            © 2026 <strong>Rinde Plus</strong>. Todos los derechos reservados.
          </p>
          <span className="rp-footer__made">
            <span className="rp-footer__made-dot" />
            Hecho con datos y criterio agronómico
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
