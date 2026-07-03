import { LuArrowUpRight, LuArrowLeft } from 'react-icons/lu';
import Header from './Header';
import Footer from './Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import rindeLogo from '../assets/rindeplus-logo-light.png';
import logoAapresid from '../assets/botones/L-Aapresid.png';
import logoConci from '../assets/botones/L-Conci.png';
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
    id: 'aapresid',
    name: 'Aapresid',
    logo: logoAapresid,
    logoBg: '#008c35',
    desc: 'Versión para socios y ATR de la red AAPRESID.',
    href: 'https://app.rindeplus.com/login/aapresid',
  },
  {
    id: 'conci',
    name: 'Conci Riego',
    logo: logoConci,
    logoBg: '#000000',
    desc: 'Riego predictivo desarrollado junto a Conci.',
    href: 'https://conciriegopredictivo.ddns.net/login/?next=/',
  },
  {
    id: 'halcon',
    name: 'Halcón Monitoreo',
    logo: logoHalcon,
    logoBg: '#1d7b3f',
    desc: 'Monitoreo y alertas a campo para Halcón.',
    href: 'https://halconmonitoreos.ddns.net/login/?next=/',
  },
  {
    id: 'kimzza',
    name: 'Kimzza',
    logo: logoKimzza,
    desc: 'Gestión integral de datos productivos para Kimzza.',
    href: 'https://kimzza.ddns.net/login/?next=/',
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
      {platform.featured && <span className="rp-platsel__badge">Plataforma principal</span>}
    </div>
    <h2 className="rp-platsel__card-title">{platform.name}</h2>
    <p className="rp-platsel__card-desc">{platform.desc}</p>
    <span className="rp-platsel__card-cta">
      Ingresar
      <LuArrowUpRight />
    </span>
  </a>
);

const PlatformSelectorPage = ({ onOpenWhatsApp, onGoToHome }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="rp-home rp-platsel">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        menuItems={[
          { label: 'Volver a inicio', id: 'top', action: onGoToHome },
        ]}
      />

      <main className="rp-platsel__main">
        <section className="rp-platsel__hero">
          <button type="button" className="rp-platsel__back" onClick={onGoToHome}>
            <LuArrowLeft />
            Volver a inicio
          </button>
          <span className="rp-platsel__eyebrow">
            <span className="rp-platsel__eyebrow-dot" />
            Acceso a plataformas
          </span>
          <h1 className="rp-platsel__title">
            Elegí tu <span className="rp-platsel__title-accent">plataforma</span>
          </h1>
          <p className="rp-platsel__subtitle">
            Ingresá a la plataforma que corresponde a tu cuenta. Si no sabés cuál
            es la tuya, escribinos y te ayudamos.
          </p>
        </section>

        <section
          ref={ref}
          className={`rp-platsel__grid ${isVisible ? 'rp-platsel__grid--visible' : ''}`}
        >
          {PLATFORMS.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </section>

        <div className="rp-platsel__help">
          ¿No encontrás tu plataforma?{' '}
          <button type="button" className="rp-platsel__help-link" onClick={onOpenWhatsApp}>
            Escribinos por WhatsApp
          </button>
        </div>
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PlatformSelectorPage;
