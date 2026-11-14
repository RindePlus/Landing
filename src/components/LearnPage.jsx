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
import { CampoPagina } from './LotesMosaic';
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

// Apertura y mapa de la campaña: los cinco momentos como tramos de una
// misma barra (la campaña, del suelo a la cosecha) y, debajo de cada uno,
// sus lecciones como botones. Es el índice de la página.
const Intro = () => {
  const t = useI18n().dict.paginas.educacion;
  return (
    <section className="rp-ed-intro" id="top">
      <div className="rp-intro-bg" aria-hidden="true"><CampoPagina idBase="rpCampoIntro" /></div>
      <div className="rp-ed-intro__texto">
        <h1 className="rp-ed-intro__titulo rp-fade-in rp-d-1">{t.title}</h1>
        <p className="rp-ed-intro__lead rp-fade-in rp-d-3">{t.lead}</p>
      </div>

      <nav className="rp-campana rp-fade-in rp-d-4" aria-label={t.mapa}>
        <p className="rp-campana__titulo">{t.mapa}</p>
        <ol className="rp-campana__momentos">
          {t.momentos.map((m, i) => (
            <li key={m.id} className={`rp-campana__momento rp-campana__momento--${m.id}`}>
              <p className="rp-campana__tramo">
                <span className="rp-campana__tramo-num" aria-hidden="true">{i + 1}</span>
                {m.nombre}
              </p>
              <ul>
                {t.lecciones.map((l, i) =>
                  l.momento === m.id ? (
                    <li key={l.id}>
                      <a href={`#${l.id}`}>
                        <span className="rp-campana__num">{num(i)}</span>
                        {l.termino}
                      </a>
                    </li>
                  ) : null,
                )}
              </ul>
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
    </div>
  );
};

const Diagrama = ({ i }) => {
  const l = useI18n().dict.paginas.educacion.lecciones[i];
  const Dibujo = DIAGRAMAS[l.id];
  return Dibujo ? <Dibujo e={l.etiquetas} label={l.termino} /> : null;
};

const Fuentes = () => {
  const t = useI18n().dict.paginas.educacion.fuentes;
  return (
    <aside className="rp-ed-fuentes rp-reveal">
      <h2>{t.titulo}</h2>
      <p>{t.texto}</p>
    </aside>
  );
};

export const LearnIntro = conIdioma(Intro);
export const LeccionTexto = conIdioma(Texto);
export const LeccionDiagrama = conIdioma(Diagrama);
export const LearnFuentes = conIdioma(Fuentes);
