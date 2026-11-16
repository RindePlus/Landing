import { conIdioma, useI18n } from '../i18n/I18nContext';
import {
  DiagramaAmbientes,
  DiagramaAguaUtil,
  DiagramaCarryOver,
  DiagramaDosis,
  DiagramaBalance,
  DiagramaDpv,
  DiagramaNdvi,
  DiagramaBrecha,
} from './LearnDiagramas';
import { urlDe } from '../data/imagen';
import rindeplusR from '../assets/rindeplus-r.webp';
import { BIBLIOGRAFIA } from '../data/bibliografia';
import './InnerPages.css';

// Piezas de la página Educación. LearnView.astro arma cada ficha con el
// texto (LeccionTexto) y su dibujo (LeccionDiagrama) o, en la ley del
// mínimo, la demo interactiva (LiebigDemo, una isla): una isla no puede ir
// dentro de un componente de React estático, por eso se arma en Astro.

const DIAGRAMAS = {
  ambientes: DiagramaAmbientes,
  'agua-util': DiagramaAguaUtil,
  'carry-over': DiagramaCarryOver,
  'dosis-optima': DiagramaDosis,
  'balance-hidrico': DiagramaBalance,
  dpv: DiagramaDpv,
  ndvi: DiagramaNdvi,
  brecha: DiagramaBrecha,
};

const num = (i) => String(i + 1).padStart(2, '0');

// La R del logo, chica, para marcar lo que aparece en la plataforma.
const LogoR = () => <img className="rp-logo-r" src={urlDe(rindeplusR)} alt="" width="17" height="16" />;

// Apertura e índice: los nueve conceptos en tarjetas, en orden de campaña.
// Cada una dice en qué momento se usa y dónde aparece en Rinde Plus.
const Intro = () => {
  const t = useI18n().dict.paginas.educacion;
  const momento = (id) => t.momentos.find((m) => m.id === id)?.nombre;
  return (
    <section className="rp-ed-intro" id="top">
      <div className="rp-ed-intro__texto">
        <h1 className="rp-ed-intro__titulo rp-fade-in rp-d-1">{t.title}</h1>
        <p className="rp-ed-intro__lead rp-fade-in rp-d-3">{t.lead}</p>
      </div>

      <nav className="rp-indice rp-fade-in rp-d-4" aria-label={t.mapa}>
        <ol className="rp-indice__lista">
          {t.lecciones.map((l, i) => (
            <li key={l.id} className={`rp-indice__item rp-momento--${l.momento}`}>
              <a href={`#${l.id}`}>
                <span className="rp-indice__cabeza">
                  <span className="rp-indice__num">{num(i)}</span>
                  <span className="rp-indice__momento">{momento(l.momento)}</span>
                </span>
                <span className="rp-indice__termino">{l.termino}</span>
                <span className="rp-indice__donde">
                  {l.plataforma.donde}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};

const Texto = ({ i }) => {
  const t = useI18n().dict.paginas.educacion;
  const l = t.lecciones[i];
  const momento = t.momentos.find((m) => m.id === l.momento)?.nombre;
  return (
    <div className="rp-ficha__texto">
      <p className="rp-ficha__meta">
        <span className="rp-ficha__num">{num(i)}</span>
        {l.demo ? t.probar : momento}
      </p>
      <h2 className="rp-ficha__titulo" id={`${l.id}-titulo`}>
        <a href={`#${l.id}`}>{l.termino}</a>
      </h2>
      <p className="rp-ficha__definicion">{l.definicion}</p>
      <div className="rp-ficha__lectura">
        <p className="rp-ficha__lectura-titulo">{t.comoSeLee}</p>
        <p>{l.lectura}</p>
      </div>
      {/* Cómo se ve en la plataforma: la sección y qué muestra. */}
      <div className="rp-ficha__plataforma">
        <p className="rp-ficha__plataforma-titulo">
          <LogoR />
          {t.enPlataforma}
          <span className="rp-ficha__seccion">{l.plataforma.donde}</span>
        </p>
        <p>{l.plataforma.texto}</p>
      </div>
    </div>
  );
};

const Diagrama = ({ i }) => {
  const l = useI18n().dict.paginas.educacion.lecciones[i];
  const Dibujo = DIAGRAMAS[l.id];
  return Dibujo ? <Dibujo e={l.etiquetas} label={l.termino} /> : null;
};

// De dónde sale la información: el trabajo propio y la bibliografía de
// terceros, cada cita con los conceptos que respalda. Al pie, los datos.
const Fuentes = () => {
  const ed = useI18n().dict.paginas.educacion;
  const t = ed.fuentes;
  const termino = (id) => ed.lecciones.find((l) => l.id === id)?.termino;
  return (
    <section className="rp-ed-fuentes" id="fuentes" aria-labelledby="fuentes-titulo">
      <header className="rp-ed-fuentes__head rp-reveal">
        <h2 className="rp-ab-h2" id="fuentes-titulo">{t.titulo}</h2>
        <p className="rp-ab-bajada">{t.bajada}</p>
      </header>

      <div className="rp-ed-fuentes__grid">
        <div className="rp-ed-fuentes__bloque rp-reveal">
          <h3>{t.propio}</h3>
          <ul className="rp-ed-propio">
            {t.propios.map((p) => (
              <li key={p.titulo}>
                <h4>{p.titulo}</h4>
                <p>{p.texto}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rp-ed-fuentes__bloque rp-reveal rp-reveal--delay-1">
          <h3>{t.terceros}</h3>
          <ol className="rp-ed-biblio">
            {BIBLIOGRAFIA.map((b) => (
              <li key={b.autores}>
                <p className="rp-ed-biblio__cita">
                  <strong>{b.autores}</strong> ({b.anio}). <cite>{b.titulo}</cite> {b.fuente}
                  {b.url && (
                    <>
                      {' '}
                      <a href={b.url} target="_blank" rel="noopener noreferrer">{t.ver}</a>
                    </>
                  )}
                </p>
                <p className="rp-ed-biblio__conceptos">
                  {b.conceptos.map((c) => (
                    <a key={c} href={`#${c}`}>{termino(c)}</a>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Lo que viene: un lugar con los trabajos y las fuentes. */}
      <div className="rp-ed-proximo rp-reveal">
        <span className="rp-ed-proximo__etiqueta">{t.proximamente.etiqueta}</span>
        <h3>{t.proximamente.titulo}</h3>
        <p>{t.proximamente.texto}</p>
      </div>

      <p className="rp-ed-fuentes__datos rp-reveal">
        <strong>{t.datos}.</strong> {t.datosTexto}
      </p>
    </section>
  );
};

export const LearnIntro = conIdioma(Intro);
export const LeccionTexto = conIdioma(Texto);
export const LeccionDiagrama = conIdioma(Diagrama);
export const LearnFuentes = conIdioma(Fuentes);
