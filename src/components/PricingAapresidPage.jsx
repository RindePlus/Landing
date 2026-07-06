import {
  FaUsers,
  FaInfinity,
  FaHandshake,
  FaCheck,
  FaArrowRight,
  FaTag,
  FaClock,
  FaStar,
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { useRpTheme } from '../hooks/useRpTheme';
import {
  PLANES_Aapresid,
  Aapresid_MIN_SOCIOS,
  Aapresid_PROMO_VALIDA_HASTA,
  buildWhatsAppUrl,
  formatUSD,
} from '../data/pricing';
import './pricing.css';
import './pricing-gh.css';
import './PricingAapresidPage.css';

const PRINCIPLES = [
  {
    Icon: FaUsers,
    title: 'Una cuenta por socio',
    copy:
      'Cada productor socio de la regional entra con su propio usuario y ve únicamente sus datos. La regional mantiene la visión integral.',
    accent: 'rp-acc-emerald',
    delay: 'rp-d-2',
  },
  {
    Icon: FaInfinity,
    title: 'Todo ilimitado, por siempre',
    copy:
      'Cada cuenta tiene acceso ilimitado a lotes, hectáreas y módulos. Sin topes, sin fiscalizaciones, sin letra chica.',
    accent: 'rp-acc-blue',
    delay: 'rp-d-3',
  },
  {
    Icon: FaStar,
    title: 'Descuento especial por lanzamiento',
    copy: `Precio aliado institucional, válido hasta ${Aapresid_PROMO_VALIDA_HASTA}.`,
    accent: 'rp-acc-amber',
    delay: 'rp-d-4',
  },
];

const EXPECTATIONS = [
  {
    title: `Mínimo ${Aapresid_MIN_SOCIOS} socios de la regional`,
    desc: `El descuento se activa cuando al menos ${Aapresid_MIN_SOCIOS} socios de la misma regional Aapresid contratan Rinde Plus, sin importar qué plan elige cada uno.`,
  },
  {
    title: 'Un coordinador designado',
    desc: 'Una persona de la regional opera como punto de contacto y administrador de las cuentas de los socios.',
  },
  {
    title: 'Soporte agronómico interno',
    desc: 'Los ATR y el equipo técnico de la regional acompañan a sus socios en la interpretación. Nosotros nos ocupamos de la herramienta.',
  },
  {
    title: 'Voluntad de capacitar a la red',
    desc: 'Compromiso de capacitar a los socios finales con el material y el onboarding inicial que te proveemos.',
  },
];

const FAQ = [
  {
    q: `¿Por qué el mínimo de ${Aapresid_MIN_SOCIOS} socios?`,
    a: 'Porque este precio es un precio de alianza institucional: pensado para que la regional empuje la adopción a escala y que cada socio reciba el beneficio de la negociación en conjunto.',
  },
  {
    q: '¿Todos los socios tienen que estar en el mismo plan?',
    a: `No. Cada socio elige el plan que más le sirve (Standard o Full) de forma independiente. Lo único que importa es que el total de socios de la regional contratando Rinde Plus sea ${Aapresid_MIN_SOCIOS} o más: ahí el descuento se aplica automáticamente a todas las cuentas, sea cual sea su plan.`,
  },
  {
    q: '¿Qué pasa si sumo un socio nuevo a mitad de año?',
    a: 'Se prorratea el costo hasta el próximo ciclo anual, manteniendo el precio aliado Aapresid. Se incorpora bajo el mismo esquema que el resto de la regional.',
  },
  {
    q: '¿Hasta cuándo tengo tiempo de acceder a este precio?',
    a: `Es un descuento especial por lanzamiento de la alianza con Aapresid, válido hasta ${Aapresid_PROMO_VALIDA_HASTA}. Las regionales que firmen antes de esa fecha conservan el precio aliado para su contrato inicial.`,
  },
];

const PricingAapresidPage = ({
  onOpenWhatsApp,
  onGoToHome,
  onGoToPricing,
  onGoToPlatforms,
}) => {
  const { theme, toggleTheme } = useRpTheme();

  const handleCoordinar = () => {
    const msg =
      `Hola, soy de una Regional Aapresid y quiero conocer más sobre el plan ` +
      `aliado para socios (+${Aapresid_MIN_SOCIOS} socios). ¿Podemos coordinar una demo?`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const standard = PLANES_Aapresid.find((p) => p.id === 'Aapresid-standard');
  const full = PLANES_Aapresid.find((p) => p.id === 'Aapresid-full');
  const stdDiscountPct = Math.round(
    ((standard.precioAnualLista - standard.precioAnual) /
      standard.precioAnualLista) *
      100,
  );
  const fullDiscountPct = Math.round(
    ((full.precioAnualLista - full.precioAnual) / full.precioAnualLista) * 100,
  );

  return (
    <div className="rp-home rp-pricing rp-aap-page">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        theme={theme}
        onToggleTheme={toggleTheme}
        onGoToPlatforms={onGoToPlatforms}
        onBack={onGoToPricing}
        showMenu={false}
      />

      <main id="top">
        <section className="rp-container">
          <div className="rp-aap__hero rp-fade-in rp-d-1">
            <span className="rp-aap__hero-chip">
              <FaHandshake />
              Plan aliado institucional
            </span>
            <h1 className="rp-home__section-title">
              Plan para Regionales{' '}
              <span className="rp-home__section-title-accent">Aapresid</span>
            </h1>
            <p className="rp-home__section-subtitle">
              Un único modelo B2B pensado para que la regional contrate Rinde
              Plus para todos sus socios, con un precio diferencial por ser
              parte de la alianza.
            </p>
          </div>

          {/* Discount hero banner */}
          <div className="rp-aap__offer rp-card-in rp-d-2">
            <div className="rp-aap__offer-grid">
              <div className="rp-aap__offer-intro">
                <span className="rp-aap__offer-eyebrow">
                  <FaTag /> Precio especial Aapresid
                </span>
                <h2 className="rp-aap__offer-title">
                  Sumá <span>+{Aapresid_MIN_SOCIOS} socios</span> de la regional
                  y ahorrá hasta {stdDiscountPct}% por socio.
                </h2>
                <p className="rp-aap__offer-copy">
                  Cada socio elige el plan que más le sirve. El descuento se
                  aplica a todas las cuentas cuando la regional llega a{' '}
                  {Aapresid_MIN_SOCIOS} socios contratando Rinde Plus, en
                  cualquier combinación de planes.
                </p>
                <div className="rp-aap__offer-req">
                  <div className="rp-aap__offer-req-icon">
                    <FaUsers />
                  </div>
                  <div>
                    <div className="rp-aap__offer-req-title">
                      Único requisito
                    </div>
                    <div className="rp-aap__offer-req-desc">
                      Al menos <b>{Aapresid_MIN_SOCIOS} socios</b> de la misma
                      regional contratando Rinde Plus, en el plan que cada uno
                      elija.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rp-aap__offer-prices-col">
                <div className="rp-aap__offer-prices">
                <article className="rp-aap__offer-card">
                  <header>
                    <span className="rp-aap__offer-card-name">Standard</span>
                    <span className="rp-aap__offer-card-tag">
                      −{stdDiscountPct}%
                    </span>
                  </header>
                  <div className="rp-aap__offer-card-price">
                    <span className="rp-aap__offer-card-old">
                      USD {standard.precioAnualLista}
                    </span>
                    <div className="rp-aap__offer-card-new">
                      <span className="rp-aap__offer-card-amount">
                        USD {standard.precioAnual}
                      </span>
                      <span className="rp-aap__offer-card-period">/ año</span>
                    </div>
                  </div>
                  <div className="rp-aap__offer-card-saving">
                    Ahorrás USD {formatUSD(standard.ahorroAnual)} por socio
                  </div>
                </article>

                <article className="rp-aap__offer-card rp-aap__offer-card--featured">
                  <header>
                    <span className="rp-aap__offer-card-name">Full</span>
                    <span className="rp-aap__offer-card-tag">
                      −{fullDiscountPct}%
                    </span>
                  </header>
                  <div className="rp-aap__offer-card-price">
                    <span className="rp-aap__offer-card-old">
                      USD {full.precioAnualLista}
                    </span>
                    <div className="rp-aap__offer-card-new">
                      <span className="rp-aap__offer-card-amount">
                        USD {full.precioAnual}
                      </span>
                      <span className="rp-aap__offer-card-period">/ año</span>
                    </div>
                  </div>
                  <div className="rp-aap__offer-card-saving">
                    Ahorrás USD {formatUSD(full.ahorroAnual)} por socio
                  </div>
                </article>
                </div>
                <div className="rp-aap__offer-deadline">
                  <FaClock />
                  <span>
                    Descuento especial por tiempo limitado · válido hasta{' '}
                    <b>{Aapresid_PROMO_VALIDA_HASTA}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rp-aap__principles">
            {PRINCIPLES.map((p) => {
              const IconComp = p.Icon;
              return (
                <article
                  key={p.title}
                  className={`rp-principle ${p.accent} rp-card-in ${p.delay}`}
                >
                  <div className="rp-principle__body">
                    <div className="rp-principle__icon">
                      <IconComp />
                    </div>
                    <h3 className="rp-principle__title">{p.title}</h3>
                    <p className="rp-principle__copy">{p.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="rp-aap__expect">
            <div className="rp-aap__expect-header">
              <div className="rp-num-eyebrow">La alianza</div>
              <h2 className="rp-h2">Qué esperamos de la regional</h2>
              <p>
                Rinde Plus te da la herramienta. La regional aporta la cercanía
                con el socio y el músculo agronómico para acompañarlo en las
                decisiones de campo.
              </p>
            </div>

            <ol className="rp-aap__expect-list">
              {EXPECTATIONS.map(({ title, desc }, i) => (
                <li key={title} className="rp-aap__expect-item">
                  <span className="rp-aap__expect-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="rp-aap__expect-title">{title}</h4>
                    <p className="rp-aap__expect-desc">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rp-aap__pricing">
            <div className="rp-aap__pricing-header">
              <div className="rp-num-eyebrow">Planes</div>
              <h2 className="rp-h2">Los dos planes · Elegí por socio</h2>
              <p>
                Cada socio contrata el plan que más le sirve: Standard o Full.
                El precio especial se aplica automáticamente cuando la regional
                tiene al menos {Aapresid_MIN_SOCIOS} socios contratando, en
                cualquier combinación de planes. Descuento válido hasta{' '}
                {Aapresid_PROMO_VALIDA_HASTA}.
              </p>
            </div>

            <div className="rp-aap__plan-grid">
              {PLANES_Aapresid.map((plan) => (
                <article
                  key={plan.id}
                  className={`rp-plan rp-aap__plan ${
                    plan.destacado ? 'rp-aap__plan--featured' : ''
                  }`}
                >
                  {plan.destacado && (
                    <span className="rp-plan__badge rp-plan__badge--emerald">
                      Más completo
                    </span>
                  )}
                  <h3 className="rp-plan__name">{plan.nombre}</h3>
                  <p className="rp-plan__tagline">{plan.descripcion}</p>

                  <div className="rp-aap__plan-discount">
                    <span className="rp-aap__plan-old">
                      USD {plan.precioAnualLista}
                    </span>
                    <span className="rp-aap__plan-arrow">→</span>
                    <span className="rp-aap__plan-tag">
                      Precio especial Aapresid
                    </span>
                  </div>

                  <div className="rp-plan__price">
                    <span className="rp-plan__price-amount">
                      USD {plan.precioAnual}
                    </span>
                    <span className="rp-plan__price-period">/ año</span>
                  </div>
                  <div className="rp-plan__price-monthly">
                    Equivale a USD {plan.precioMensualEq} / mes · por socio
                  </div>

                  <span className="rp-aap__plan-req">
                    <FaUsers />
                    Con +{Aapresid_MIN_SOCIOS} socios de la regional contratando
                  </span>

                  <ul className="rp-plan__list">
                    {plan.modulos.map((mod) => (
                      <li key={mod}>
                        <span className="rp-check">
                          <FaCheck />
                        </span>
                        {mod}
                      </li>
                    ))}
                  </ul>

                  <p className="rp-plan__footer-note">
                    Descuento especial válido hasta {Aapresid_PROMO_VALIDA_HASTA}.
                    Facturación anual única.
                  </p>
                </article>
              ))}
            </div>

            <div className="rp-cta-wrap">
              <button
                type="button"
                className="rp-cta"
                onClick={handleCoordinar}
              >
                Coordinemos una demo para la regional
                <FaArrowRight />
              </button>
              <p className="rp-cta__help">
                Te respondemos por WhatsApp en menos de 24hs.
              </p>
            </div>
          </div>

          <div className="rp-aap__faq">
            <div className="rp-aap__faq-header">
              <div className="rp-num-eyebrow">FAQ</div>
              <h2>Preguntas frecuentes</h2>
            </div>
            <div className="rp-faq-grid">
              {FAQ.map(({ q, a }) => (
                <div key={q} className="rp-faq-card">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default PricingAapresidPage;
