import { useState, useRef, useEffect } from 'react';
import HomePage from './components/HomePage';
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { WHATSAPP_URL } from './data/social';
import './App.css';

// La landing es una sola página. Cualquier otra ruta (las viejas de planes
// y de selección de plataforma, o una inventada) se normaliza a "/" para que
// los links que siguen circulando no caigan en una página rota. En GitHub
// Pages esas rutas llegan por 404.html, que deja el path original en
// sessionStorage; se conservan query y hash.
function normalizeToHome() {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) sessionStorage.removeItem('redirect');
  const url = new URL(redirect || window.location.href, window.location.origin);
  const target = `/${url.search}${url.hash}`;
  if (window.location.pathname !== '/' || redirect) {
    window.history.replaceState({}, '', target);
  }
}

normalizeToHome();

function App() {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    if (!showWhatsappPopup) return;
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowWhatsappPopup(false);
      }
    };
    const handleScroll = () => setShowWhatsappPopup(false);
    document.addEventListener('mousedown', handleClick);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showWhatsappPopup]);

  const whatsappUrl = WHATSAPP_URL;

  const whatsappElements = (
    <>
      {showWhatsappPopup && (
        <div className="wa-overlay" onClick={() => setShowWhatsappPopup(false)} />
      )}
      <div
        ref={popupRef}
        className={`wa-widget ${showWhatsappPopup ? 'wa-widget--open' : ''}`}
      >
        <button
          className="wa-widget__fab"
          onClick={() => setShowWhatsappPopup((v) => !v)}
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="wa-widget__fab-icon wa-widget__fab-icon--wa" />
          <FaTimes className="wa-widget__fab-icon wa-widget__fab-icon--close" />
        </button>

        <div className="wa-widget__panel">
          <p className="wa-widget__greeting">
            Hola <span role="img" aria-label="saludo">👋</span>
            <br />
            ¿En qué podemos ayudarte?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-widget__send"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="App">
      <HomePage onOpenWhatsApp={() => setShowWhatsappPopup(true)} />
      {whatsappElements}
    </div>
  );
}

export default App;
