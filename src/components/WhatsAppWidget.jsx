import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { whatsappUrl } from '../data/social';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import './WhatsAppWidget.css';

// FAB de WhatsApp que se transforma en panel. Antes vivía en App.jsx; ahora
// es una isla propia montada en BaseLayout. Los botones estáticos de otras
// partes (el footer) lo abren con el atributo data-abrir-whatsapp.
const WhatsAppWidget = () => {
  const t = useI18n().dict.whatsapp;
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest?.('[data-abrir-whatsapp]')) setOpen(true);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleScroll = () => setOpen(false);
    document.addEventListener('mousedown', handleClick);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <>
      {open && <div className="wa-overlay" onClick={() => setOpen(false)} />}
      <div ref={popupRef} className={`wa-widget ${open ? 'wa-widget--open' : ''}`}>
        <button
          className="wa-widget__fab"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.fabLabel}
        >
          <FaWhatsapp className="wa-widget__fab-icon wa-widget__fab-icon--wa" />
          <FaTimes className="wa-widget__fab-icon wa-widget__fab-icon--close" />
        </button>

        <div className="wa-widget__panel">
          <p className="wa-widget__greeting">
            {t.hello} <span role="img" aria-label={t.helloAria}>👋</span>
            <br />
            {t.question}
          </p>
          <a
            href={whatsappUrl(t.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-widget__send"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </>
  );
};

export default conIdioma(WhatsAppWidget);
