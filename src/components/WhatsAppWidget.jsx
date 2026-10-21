import { useState, useRef, useEffect } from 'react';
import { PiX } from 'react-icons/pi';
// Logo oficial de WhatsApp (Simple Icons), como en VigIA: el de línea fina
// no se reconoce bien sobre el botón verde.
import { SiWhatsapp } from 'react-icons/si';
import { whatsappUrl } from '../data/social';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import './WhatsAppWidget.css';

// FAB de WhatsApp que se transforma en panel, el de la landing de VigIA. Es
// una isla propia montada en BaseLayout; los botones estáticos de otras
// partes (el footer) lo abren con el atributo data-abrir-whatsapp. Sólo en
// escritorio: en celular WhatsApp va al pie del menú del header.
const WhatsAppWidget = () => {
  const t = useI18n().dict.whatsapp;
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // En escritorio los enlaces con data-abrir-whatsapp abren el panel; en
    // celular (sin botón flotante) siguen su enlace a WhatsApp.
    const handleClick = (e) => {
      if (!e.target.closest?.('[data-abrir-whatsapp]')) return;
      if (!window.matchMedia('(min-width: 768px)').matches) return;
      e.preventDefault();
      setOpen(true);
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
    // Basta el primer scroll para cerrarlo: once evita escuchar cada evento.
    window.addEventListener('scroll', handleScroll, { passive: true, once: true });
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
          <SiWhatsapp className="wa-widget__fab-icon wa-widget__fab-icon--wa" aria-hidden="true" />
          <PiX className="wa-widget__fab-icon wa-widget__fab-icon--close" />
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
