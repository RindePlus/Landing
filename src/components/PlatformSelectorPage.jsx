import { LuArrowUpRight, LuArrowLeft, LuShare } from 'react-icons/lu';
import { FaApple, FaAndroid } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useRpTheme } from '../hooks/useRpTheme';
import rindeLogo from '../assets/rindeplus-logo-light.png';
import rindeLogoDark from '../assets/rindeplus-logo-dark.png';
import logoAapresid from '../assets/botones/L-Aapresid.png';
import logoHalcon from '../assets/botones/l-Halcon.png';
import logoKimzza from '../assets/botones/L-Kimzza.png';
import './HomePage.css';
import './PlatformSelectorPage.css';

const PLATFORMS = [
  {
    id: 'rindeplus',
    name: 'Rinde Plus',
    logo: rindeLogo,
    wideLogo: true,
    featured: true,
    desc: 'La plataforma de inteligencia agronómica: análisis de campaña, brechas, pronóstico y Vig IA, todo en un solo lugar.',
    href: 'https://app.rindeplus.com/login/rindeplus',
  },
  {
    id: 'Aapresid',
    name: 'Aapresid',
    logo: logoAapresid,
    logoBg: '#008c35',
    desc: 'Para socios y ATR de la red Aapresid.',
    href: 'https://app.rindeplus.com/login/aapresid',
  },
  {
    id: 'kimzza',
    name: 'Kimzza',
    logo: logoKimzza,
    desc: 'Gestión integral de datos productivos.',
    href: 'https://kimzza.ddns.net/login/?next=/',
  },
  {
    id: 'halcon',
    name: 'Halcón Monitoreo',
    logo: logoHalcon,
    logoBg: '#1d7b3f',
    desc: 'Monitoreo y alertas a campo.',
    href: 'https://halconmonitoreos.ddns.net/login/?next=/',
  },
];

const PlatformCard = ({ platform }) => (
  <a
    className={`rp-platsel__card ${platform.featured ? 'rp-platsel__card--featured' : ''}`}
    href={platform.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="rp-platsel__card-top">
      <div
        className={`rp-platsel__logo ${platform.wideLogo ? 'rp-platsel__logo--wide' : ''}`}
        style={platform.logoBg ? { background: platform.logoBg } : undefined}
      >
        <img src={platform.logo} alt={platform.name} loading="lazy" />
      </div>
      {!platform.featured && (
        <h2 className="rp-platsel__card-title">{platform.name}</h2>
      )}
      {platform.featured && <span className="rp-platsel__badge">Plataforma principal</span>}
    </div>
    <p className="rp-platsel__card-desc">{platform.desc}</p>
    <span className="rp-platsel__card-cta">
      Ingresar
      <LuArrowUpRight />
    </span>
  </a>
);

const INSTALL_GUIDES = [
  {
    id: 'ios',
    name: 'iOS (iPhone)',
    Icon: FaApple,
    steps: [
      (
        <>
          Abrí <strong>Safari</strong> e ingresá al sitio de la plataforma.
        </>
      ),
      (
        <>
          Tocá el botón <strong>Compartir</strong>{' '}
          <LuShare className="rp-platsel__install-inline-icon" aria-hidden="true" />{' '}
          (el cuadrado con la flecha hacia arriba).
        </>
      ),
      (
        <>
          Seleccioná <strong>"Añadir a Pantalla de Inicio"</strong>.
        </>
      ),
      <>Si querés, cambiá el nombre del acceso directo.</>,
      (
        <>
          Pulsá <strong>Añadir</strong> y listo.
        </>
      ),
    ],
  },
  {
    id: 'android',
    name: 'Android',
    Icon: FaAndroid,
    steps: [
      (
        <>
          Abrí <strong>Chrome</strong> e ingresá al sitio de la plataforma.
        </>
      ),
      (
        <>
          Tocá el menú <strong>⋮</strong> (los tres puntos, arriba a la
          derecha).
        </>
      ),
      (
        <>
          Seleccioná <strong>"Instalar aplicación"</strong> (o{' '}
          <strong>"Añadir a la pantalla principal"</strong>, según tu versión
          de Chrome).
        </>
      ),
      <>Si querés, cambiá el nombre del acceso directo.</>,
      (
        <>
          Confirmá tocando <strong>Instalar</strong> y listo.
        </>
      ),
    ],
  },
];

const PlatformSelectorPage = ({ onOpenWhatsApp, onGoToHome }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { theme, toggleTheme } = useRpTheme();

  return (
    <div className="rp-home rp-platsel">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        theme={theme}
        onToggleTheme={toggleTheme}
        onBack={onGoToHome}
        showMenu={false}
      />

      <main className="rp-platsel__main">
        <section className="rp-platsel__hero">
          <h1 className="rp-platsel__title">
            Elegí tu <span className="rp-platsel__title-accent">plataforma</span>
          </h1>
          <p className="rp-platsel__subtitle">
            Ingresá a la plataforma que corresponde a tu cuenta.
          </p>
        </section>

        <section
          ref={ref}
          className={`rp-platsel__grid ${isVisible ? 'rp-platsel__grid--visible' : ''}`}
        >
          {PLATFORMS.map((p) => (
            <PlatformCard
              key={p.id}
              platform={
                p.featured
                  ? { ...p, logo: theme === 'dark' ? rindeLogoDark : rindeLogo }
                  : p
              }
            />
          ))}
        </section>

        <section className="rp-platsel__install">
          <div className="rp-platsel__install-header">
            <h2 className="rp-platsel__install-title">
              Instalá la plataforma{' '}
              <span className="rp-platsel__title-accent">en tu celular</span>
            </h2>
            <p className="rp-platsel__subtitle">
              Podés agregar la plataforma como una app en la pantalla de inicio
              de tu teléfono. Seguí estos pasos según tu dispositivo.
            </p>
          </div>

          <div className="rp-platsel__install-grid">
            {INSTALL_GUIDES.map(({ id, name, Icon, steps }) => (
              <article
                key={id}
                className={`rp-platsel__install-card rp-platsel__install-card--${id}`}
              >
                <div className="rp-platsel__install-top">
                  <span className="rp-platsel__install-icon">
                    <Icon />
                  </span>
                  <h3 className="rp-platsel__install-name">{name}</h3>
                </div>
                <ol className="rp-platsel__install-steps">
                  {steps.map((step, i) => (
                    <li key={i}>
                      <span className="rp-platsel__install-num">{i + 1}</span>
                      <div className="rp-platsel__install-step-text">{step}</div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <div className="rp-platsel__help">
          <button type="button" className="rp-platsel__back" onClick={onGoToHome}>
            <LuArrowLeft />
            Volver a inicio
          </button>
        </div>
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PlatformSelectorPage;
