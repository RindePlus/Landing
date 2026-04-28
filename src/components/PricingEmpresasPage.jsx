import {
  FaUsers,
  FaInfinity,
  FaCogs,
  FaCheck,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { PLANES_EMPRESAS, buildWhatsAppUrl } from '../data/pricing';
import './pricing.css';
import './PricingEmpresasPage.css';

const PRINCIPLES = [
  {
    Icon: FaUsers,
    title: 'Una cuenta por socio',
    copy:
      'Cada empresa asociada entra con su propio usuario y ve únicamente sus datos. La regional o asesoría mantiene la vista integral.',
    accent: 'rp-acc-blue',
    delay: 'rp-d-2',
  },
  {
    Icon: FaInfinity,
    title: 'Todo ilimitado, por siempre',
    copy:
      'Cada cuenta tiene acceso ilimitado a lotes, hectáreas y módulos. Sin fiscalizaciones, sin letra chica.',
    accent: 'rp-acc-emerald',
    delay: 'rp-d-3',
  },
  {
    Icon: FaCogs,
    title: 'Actualizaciones incluidas',
    copy:
      'Las mejoras y nuevas funcionalidades productivas entran en el plan Full. El producto crece con tu organización.',
    accent: 'rp-acc-amber',
    delay: 'rp-d-4',
  },
];

const EXPECTATIONS = [
  {
    title: 'Equipo agronómico propio',
    desc: 'Un profesional o equipo capaz de interpretar los resultados y acompañar a los socios en las decisiones de campo.',
  },
  {
    title: 'Un administrador designado',
    desc: 'Una persona de tu organización que opere como punto de contacto y administrador principal de la plataforma.',
  },
  {
    title: 'Soporte agronómico a tus socios',
    desc: 'Tu equipo resuelve las dudas agronómicas que tengan tus productores. Nosotros nos ocupamos de las dudas sobre la herramienta.',
  },
  {
    title: 'Voluntad de capacitar a tu red',
    desc: 'Compromiso de capacitar a los usuarios finales con el material y el onboarding inicial que te proveemos.',
  },
];

const FAQ = [
  {
    q: '¿Puedo tener empresas en distintos planes dentro de la misma regional?',
    a: 'Sí. Cada empresa puede adoptar su propio plan (Standard o Full) según sus necesidades, sin que todas tengan que estar en el mismo nivel.',
  },
  {
    q: '¿Cada socio tiene su usuario propio?',
    a: 'Sí. La regional o asesoría mantiene una visión integral de todas las empresas asociadas, mientras cada empresa ve únicamente su propia información.',
  },
  {
    q: '¿Qué pasa si sumo una empresa nueva a mitad de año?',
    a: 'Se prorratea el costo hasta el próximo ciclo de facturación anual y se incorpora a tu organización bajo el mismo esquema.',
  },
  {
    q: '¿Por qué solo precio anual?',
    a: 'Simplificamos el pricing: un precio claro, en dólares, anual. Así no hay descuentos con asteriscos ni sorpresas en la factura.',
  },
];

const PricingEmpresasPage = ({
  onOpenWhatsApp,
  onGoToHome,
  onGoToPricing,
  onGoToProductores,
}) => {
  const handleCoordinar = () => {
    const msg =
      `Hola, soy de una organización interesada en Rinde Plus para Empresas. ` +
      `¿Podemos coordinar una demo?`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rp-page">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        menuItems={[
          { label: 'Inicio', id: 'top' },
          { label: 'Planes', id: 'top', action: onGoToPricing },
          { label: 'Productores', id: 'top', action: onGoToProductores },
          { label: 'Contacto', id: 'top', action: onOpenWhatsApp },
        ]}
      />

      <main id="top">
        <section className="rp-container">
          <div className="rp-emp__hero rp-fade-in rp-d-1">
            <h1 className="rp-h1">Planes para Empresas</h1>
            <button
              type="button"
              className="rp-back-link"
              onClick={onGoToPricing}
            >
              <FaArrowLeft /> Volver a la selección
            </button>
            <p className="rp-emp__hero-copy">
              Una suscripción anual fija por cada socio o cliente. Sin
              hectáreas, sin lotes, sin variables. La misma herramienta para
              toda tu red.
            </p>
          </div>

          <div className="rp-emp__principles">
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

          <div className="rp-emp__expect">
            <div className="rp-emp__expect-header">
              <h2 className="rp-h2">Qué esperamos de tu organización</h2>
              <p>
                Rinde Plus te da la herramienta. Tu organización aporta la
                cercanía con el productor. Este modelo funciona cuando tu equipo
                ya tiene el músculo agronómico para acompañar a sus socios.
              </p>
            </div>

            <ol className="rp-emp__expect-list">
              {EXPECTATIONS.map(({ title, desc }, i) => (
                <li key={title} className="rp-emp__expect-item">
                  <span className="rp-emp__expect-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="rp-emp__expect-title">{title}</h4>
                    <p className="rp-emp__expect-desc">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rp-emp__pricing">
            <div className="rp-emp__pricing-header">
              <h2 className="rp-h2">Conocés todo · Elegí tu plan</h2>
              <p>
                Dos planes por empresa socia o cliente. Precio anual único en
                dólares, con el equivalente mensual abajo para referencia.
              </p>
            </div>

            <div className="rp-emp__plan-grid">
              {PLANES_EMPRESAS.map((plan) => (
                <article key={plan.id} className="rp-plan">
                  <h3 className="rp-plan__name">{plan.nombre}</h3>
                  <p className="rp-plan__tagline">{plan.descripcion}</p>

                  <div className="rp-plan__price">
                    <span className="rp-plan__price-amount">
                      USD {plan.precioAnual}
                    </span>
                    <span className="rp-plan__price-period">/ año</span>
                  </div>
                  <div className="rp-plan__price-monthly">
                    Equivale a USD {plan.precioMensualEq} / mes
                  </div>

                  <span className="rp-emp__plan-tag">
                    Por cada empresa socia o cliente
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
                    Facturación anual única. Sin cargos ocultos.
                  </p>
                </article>
              ))}
            </div>

            <div className="rp-cta-wrap">
              <button
                type="button"
                className="rp-cta rp-cta--blue"
                onClick={handleCoordinar}
              >
                Coordinemos una demo
                <FaArrowRight />
              </button>
              <p className="rp-cta__help">
                Te respondemos por WhatsApp en menos de 24hs.
              </p>
            </div>
          </div>

          <div className="rp-emp__faq">
            <div className="rp-emp__faq-header">
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

export default PricingEmpresasPage;
