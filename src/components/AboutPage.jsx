import { PiArrowRight, PiPath, PiPlant, PiUsersThree } from 'react-icons/pi';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import { urlDe } from '../data/imagen';
import fotoMarcos from '../assets/equipo/marcos-flesia.webp';
import './InnerPages.css';

// Página Nosotros, editorial: no repite la home (ni su hero, ni cifras,
// ventajas, funciones o clientes) y cuenta cómo se trabaja. Estática: se
// renderiza a HTML al compilar. Solo datos que la empresa puede respaldar:
// no hay año de fundación ni equipo en ninguna fuente, así que no se nombran.

const ADDRESS = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
// Mapa embebido de Google Maps (no necesita clave), con el pin en la oficina.
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;

// Los dos lotes del título: comparten un alambrado, pero sus ambientes son
// otros (el 14 casi todo alto, el 15 casi todo bajo) y Rinde Plus le dice
// algo distinto a cada uno. Colores del mapa del lote del hero.
const DosLotes = ({ t }) => (
  <figure className="rp-doslotes" aria-label={t.aria}>
    <svg viewBox="0 0 480 360" className="rp-doslotes__mapa" aria-hidden="true">
      <defs>
        <clipPath id="rpLoteA"><path d="M20 40 L250 24 L232 330 L12 316 Z" /></clipPath>
        <clipPath id="rpLoteB"><path d="M250 24 L466 46 L458 322 L232 330 Z" /></clipPath>
        <pattern id="rpSurcosA" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-4)">
          <line x1="0" y1="0" x2="0" y2="9" className="dg-surco" />
        </pattern>
        <pattern id="rpSurcosB" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(84)">
          <line x1="0" y1="0" x2="0" y2="9" className="dg-surco" />
        </pattern>
      </defs>
      <g clipPath="url(#rpLoteA)">
        <rect width="480" height="360" className="dg-amb--alto" />
        <path className="dg-amb--alto-claro" d="M0 176 C 80 146, 160 206, 260 166 V360 H0 Z" />
        <path className="dg-amb--medio" d="M0 262 C 80 242, 170 292, 260 252 V360 H0 Z" />
        <rect width="480" height="360" fill="url(#rpSurcosA)" />
      </g>
      <g clipPath="url(#rpLoteB)">
        <rect width="480" height="360" className="dg-amb--bajo" />
        <path className="dg-amb--medio" d="M220 0 H480 V112 C 400 142, 320 92, 220 132 Z" />
        <ellipse className="dg-amb--bajo-fuerte" cx="372" cy="252" rx="72" ry="44" />
        <rect width="480" height="360" fill="url(#rpSurcosB)" />
      </g>
      <path className="dg-contorno" d="M20 40 L250 24 L232 330 L12 316 Z" />
      <path className="dg-contorno" d="M250 24 L466 46 L458 322 L232 330 Z" />
      <g className="dg-pildora">
        <rect x="40" y="52" width="70" height="22" rx="11" />
        <text x="75" y="67" textAnchor="middle">{t.a.nombre}</text>
        <rect x="374" y="288" width="70" height="22" rx="11" />
        <text x="409" y="303" textAnchor="middle">{t.b.nombre}</text>
      </g>
    </svg>
    <p className="rp-aviso rp-aviso--a">
      <span className="rp-aviso__marca" aria-hidden="true" />
      <span><strong>{t.a.nombre}</strong> {t.a.aviso}</span>
    </p>
    <p className="rp-aviso rp-aviso--b">
      <span className="rp-aviso__marca" aria-hidden="true" />
      <span><strong>{t.b.nombre}</strong> {t.b.aviso}</span>
    </p>
  </figure>
);

// Íconos de quiénes somos, qué hacemos y cómo lo hacemos.
const ICONOS_SOMOS = [PiUsersThree, PiPlant, PiPath];

const About = () => {
  const t = useI18n().dict.paginas.nosotros;
  const a = t.anatomia;
  const m = a.mensaje;

  return (
    <>
      {/* Apertura: el título y, debajo, tres textos que cuentan quiénes
          somos, qué hacemos y cómo lo hacemos. */}
      <section className="rp-ab-empresa" id="top">
        <div className="rp-ab-empresa__texto">
          <h1 className="rp-ab-empresa__titulo rp-fade-in rp-d-1">{t.title}</h1>
          <p className="rp-ab-empresa__lead rp-fade-in rp-d-3">{t.lead}</p>
        </div>
        <ul className="rp-somos">
          {t.bloques.map((b, i) => {
            const Icono = ICONOS_SOMOS[i];
            return (
              <li key={b.titulo} className={`rp-somos__bloque rp-fade-in rp-d-${i + 3}`}>
                <h2 className="rp-somos__titulo"><Icono aria-hidden="true" />{b.titulo}</h2>
                <p className="rp-somos__texto">{b.texto}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* La idea: los dos lotes vecinos, cada uno con su aviso. */}
      <section className="rp-ab-intro" id="idea">
        <div className="rp-ab-intro__texto rp-reveal">
          <p className="rp-kicker">{t.idea.kicker}</p>
          <h2 className="rp-ab-intro__titulo">{t.idea.titulo}</h2>
          <p className="rp-ab-intro__lead">{t.idea.lead}</p>
        </div>
        <div className="rp-ab-intro__visual rp-reveal rp-reveal--delay-1">
          <DosLotes t={t.dosLotes} />
        </div>
      </section>

      {/* Anatomía de un aviso: el mensaje marcado en tres partes y, al lado,
          qué es cada una. Los números del mensaje son los del ejemplo de la
          documentación del balance hídrico. */}
      <section className="rp-anatomia" id="como-pensamos">
        <div className="rp-anatomia__texto rp-reveal">
          <p className="rp-kicker">{a.kicker}</p>
          <h2 className="rp-ab-h2">{a.titulo}</h2>
          <p className="rp-ab-bajada">{a.bajada}</p>
          <ol className="rp-anatomia__partes">
            {a.partes.map((p, i) => (
              <li key={p.titulo}>
                <span className={`rp-marca rp-marca--${i + 1}`} aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rp-anatomia__pantalla rp-reveal rp-reveal--delay-1">
          <div className="rp-mensaje">
            <p className="rp-mensaje__cabecera">
              <span className="rp-aviso__marca" aria-hidden="true" />
              <strong>Rinde Plus</strong>
              <span>{m.hora}</span>
            </p>
            <p className="rp-mensaje__titulo">{m.encabezado}</p>
            <p className="rp-mensaje__lote">{m.lote}</p>
            <p className="rp-mensaje__linea">
              <span className="rp-marca rp-marca--1" aria-hidden="true">1</span>
              <span className="rp-mensaje__resalte rp-mensaje__resalte--1">{m.medido}</span>
            </p>
            <p className="rp-mensaje__linea">
              <span className="rp-marca rp-marca--2" aria-hidden="true">2</span>
              <span className="rp-mensaje__resalte rp-mensaje__resalte--2">{m.criterio}</span>
            </p>
            <p className="rp-mensaje__linea">
              <span className="rp-marca rp-marca--3" aria-hidden="true">3</span>
              <span className="rp-mensaje__resalte rp-mensaje__resalte--3">{m.decision}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Nuestros compromisos: una tabla compacta, renglón por renglón. */}
      <section className="rp-nohacemos" id="lo-que-no-hacemos">
        <h2 className="rp-kicker rp-reveal">{t.compromisos.titulo}</h2>
        <ul>
          {t.compromisos.items.map((c) => (
            <li key={c.titulo} className="rp-reveal">
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

// Fotos del equipo (la de Marcos es la de la landing de VigIA). Quien no
// tiene foto todavía va sin círculo: sólo el nombre y el oficio.
const FOTOS = { 'Marcos Flesia': fotoMarcos };

// Una tarjeta por persona: foto si la hay, nombre, cargo si lo tiene y
// oficio. Verde agronomía, azul sistemas.
const Persona = ({ m, i }) => {
  const foto = FOTOS[m.nombre];
  return (
    <li className={`rp-persona rp-persona--${m.area} rp-reveal rp-reveal--delay-${Math.min(i + 1, 4)}`}>
      {foto && (
        <img className="rp-persona__foto" src={urlDe(foto)} alt="" width="80" height="80" loading="lazy" decoding="async" />
      )}
      <div className="rp-persona__texto">
        <h3 className="rp-persona__nombre">{m.nombre}</h3>
        {m.cargo && <p className="rp-persona__cargo">{m.cargo}</p>}
        <p className="rp-persona__profesion">{m.profesion}</p>
      </div>
    </li>
  );
};

// Nuestro equipo: el CEO solo en la primera fila y el resto debajo, todas
// las tarjetas del mismo tamaño.
const Equipo = () => {
  const t = useI18n().dict.paginas.nosotros.equipo;
  const [principal, ...resto] = t.miembros;
  return (
    <section className="rp-equipo" id="equipo">
      <header className="rp-equipo__head rp-reveal">
        <p className="rp-kicker">{t.kicker}</p>
        <h2 className="rp-ab-h2">{t.titulo}</h2>
        <p className="rp-ab-bajada">{t.bajada}</p>
      </header>
      <ul className="rp-equipo__grupo rp-equipo__grupo--principal">
        <Persona m={principal} i={0} />
      </ul>
      <ul className="rp-equipo__grupo">
        {resto.map((m, i) => <Persona key={m.nombre} m={m} i={i + 1} />)}
      </ul>
    </section>
  );
};

// Dónde estamos: una ficha con la empresa y el mapa de la oficina.
const Lugar = () => {
  const t = useI18n().dict.paginas.nosotros.lugar;
  return (
    <section className="rp-lugar" id="donde">
      <div className="rp-lugar__ficha rp-reveal">
        <div className="rp-lugar__texto">
          <p className="rp-kicker">{t.kicker}</p>
          <h2 className="rp-ab-h2">{t.titulo}</h2>
          <p className="rp-ab-bajada">{t.texto}</p>
          <p className="rp-lugar__direccion">{t.direccion}</p>
          <a className="rp-page__link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            {t.mapa}
            <PiArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="rp-lugar__mapa">
          <iframe
            src={MAPS_EMBED}
            title={t.direccion}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export const AboutContent = conIdioma(About);
export const AboutEquipo = conIdioma(Equipo);
export const AboutLugar = conIdioma(Lugar);
