import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { LuChevronDown, LuX } from 'react-icons/lu';
import Reveal from './Reveal';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import {
  CIFRAS,
  HISTORIA,
  IMPACTO_CAMPANA,
  AUTOS_EQUIVALENTES,
  PORCENTAJE_BRECHAS,
  RANGO_BRECHAS,
  filasImpacto,
  formateador,
  formateadorPct,
} from '../data/impactoDatos';
import './ImpactSection.css';

// Cuánto tiene que quedar la sección fuera de la pantalla para que se
// cierre la tabla abierta (si se aleja más de una pantalla, se cierra ya).
const FUERA_MS = 4000;

// Formato de números por idioma: 110.000 (es, pt) / 110,000 (en).
const NUM_LOCALE = { es: 'es-AR', en: 'en-US', pt: 'pt-BR' };

// Fila de indicadores. Los que tienen `tabla` abren su detalle en el panel
// de abajo. (Los ⓘ con el cálculo de cada número se sacaron: sus textos
// están en doc/IMPACTO_INFO.md.)
const INDICADORES = [
  { id: 'hectareas', prefijo: '+', unidad: 'ha' },
  { id: 'grano', prefijo: '+', unidad: 't', tabla: true },
  { id: 'carbono', prefijo: '~', unidad: 't', tabla: true },
  { id: 'suelo', prefijo: '+', unidad: '' },
];
const TABLAS = INDICADORES.filter((i) => i.tabla).map((i) => i.id);

// En la tipografía de datos (monoespaciada) el punto o la coma de miles
// ocupa un ancho entero y "110.000" se lee "110 . 000": el separador va en
// la tipografía del texto, que es angosta (.rp-impact__sep).
const conSeparadores = (cifra) =>
  String(cifra).split(/([.,])/).map((parte, i) =>
    i % 2 ? <span key={i} className="rp-impact__sep">{parte}</span> : parte,
  );

const Tabla = ({ columnas, filas }) => (
  <div className="rp-impact__tabla">
    <table>
      <thead>
        <tr>
          {columnas.map((c) => (
            <th key={c} scope="col">{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filas.map((f, j) => (
          <tr key={f[0]} className={j === filas.length - 1 ? 'rp-impact__total' : undefined}>
            <th scope="row">{f[0]}</th>
            {f.slice(1).map((v, k) => (
              <td key={k}>{v}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ImpactSection = () => {
  const { locale, dict } = useI18n();
  const t = dict.impacto;

  // Todos los números que usan los textos, ya formateados para el idioma.
  const { d, filas, valores } = useMemo(() => {
    const numLocale = NUM_LOCALE[locale] || 'es-AR';
    const fmt = formateador(numLocale);
    const pct = formateadorPct(numLocale);
    return {
      d: {
        campana: IMPACTO_CAMPANA,
        pct: pct(PORCENTAJE_BRECHAS),
        pctBajo: pct(RANGO_BRECHAS[0]),
        pctAlto: pct(RANGO_BRECHAS[1]),
        granoBajo: fmt(CIFRAS.granoRango[0]),
        granoAlto: fmt(CIFRAS.granoRango[1]),
        autos: fmt(AUTOS_EQUIVALENTES),
        historia: fmt(CIFRAS.historia),
        campanas: HISTORIA.campanas,
        desde: HISTORIA.desde,
        hasta: HISTORIA.hasta,
      },
      filas: filasImpacto(fmt, pct, t.cultivos, t.total),
      valores: Object.fromEntries(INDICADORES.map((i) => [i.id, `${i.prefijo}${fmt(CIFRAS[i.id])}`])),
    };
  }, [locale, t]);

  /* ---- Panel de tablas: de a una, con flecha al indicador de origen ---- */

  const [abierto, setAbierto] = useState(null);
  const [instant, setInstant] = useState(false);
  const ultimo = useRef(TABLAS[0]); // la tabla visible mientras el panel se pliega
  const cajaRef = useRef(null);
  const botonesRef = useRef({});
  const [pista, setPista] = useState(false);
  const pistaTimer = useRef(0);
  const listaRef = useRef(null);
  const seccionRef = useRef(null);

  const cancelarPista = () => {
    window.clearTimeout(pistaTimer.current);
    setPista(false);
  };

  const ubicarFlecha = (id) => {
    const boton = botonesRef.current[id];
    const caja = cajaRef.current;
    if (!boton || !caja) return;
    const b = boton.getBoundingClientRect();
    const c = caja.getBoundingClientRect();
    caja.style.setProperty('--flecha-x', `${b.left + b.width / 2 - c.left}px`);
  };

  const alternar = (id) => {
    cancelarPista();
    if (abierto === id) {
      setAbierto(null);
      return;
    }
    // Recién abierto: tabla y flecha se ubican sin deslizarse.
    setInstant(abierto === null);
    setAbierto(id);
  };

  // Antes de pintar: flecha en su lugar y, si venía cerrado, se reactivan las
  // transiciones recién después de aplicar las posiciones.
  useLayoutEffect(() => {
    if (!abierto) return;
    ultimo.current = abierto;
    ubicarFlecha(abierto);
    if (instant) {
      void cajaRef.current?.offsetWidth;
      setInstant(false);
    }
  }, [abierto, instant]);

  // Alto fijo de la sección (como en VigIA): el que ocupa con la tabla más
  // alta abierta: indicadores y tabla, sin título, bajada ni pie. Cerrada,
  // todo queda centrado en ese alto; al abrir, título, bajada y pie se
  // pliegan, los indicadores suben y la tabla entra en el lugar que dejan: la
  // sección no cambia de alto y nada de arriba se mueve. Las dos tablas
  // comparten la celda, así que el alto del contenido del panel ya es el de
  // la más alta.
  useEffect(() => {
    const seccion = seccionRef.current;
    const lista = listaRef.current;
    const interior = cajaRef.current?.firstElementChild;
    if (!seccion || !lista || !interior) return undefined;
    const medir = () => {
      const estilo = getComputedStyle(seccion);
      const px = (v) => parseFloat(v) || 0;
      const alto =
        px(estilo.paddingTop) + px(estilo.paddingBottom) +
        lista.offsetHeight + interior.scrollHeight;
      seccion.style.setProperty('--alto-impacto', `${Math.ceil(alto)}px`);
    };
    medir();
    document.fonts?.ready.then(medir);
    window.addEventListener('resize', medir, { passive: true });
    return () => window.removeEventListener('resize', medir);
  }, [locale]);

  useEffect(() => {
    if (!abierto) return undefined;
    const onResize = () => ubicarFlecha(abierto);
    // Escape cierra el panel.
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      const origen = botonesRef.current[abierto];
      setAbierto(null);
      origen?.focus();
    };
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKey);
    };
  }, [abierto]);

  // Si la sección sale de la pantalla con una tabla abierta, la tabla se
  // cierra: al volver, Impacto está como al principio. No por salir un
  // instante: tiene que quedar fuera FUERA_MS, o alejarse más de una
  // pantalla. Se cierra fuera de la vista y sin animación. Si la sección
  // quedó arriba y cambia de alto (en celular, que no tiene alto fijo), lo
  // que se está viendo no se tiene que mover: casi todos los navegadores lo
  // compensan solos (scroll anchoring); si alguno no, se corrige lo que
  // falte midiendo lo que viene después de la sección.
  const [quieto, setQuieto] = useState(false);
  const ancla = useRef(null); // { el, top } de lo que sigue a la sección

  useEffect(() => {
    const seccion = seccionRef.current;
    if (!abierto || !seccion || !('IntersectionObserver' in window)) return undefined;
    let timer = 0;
    const cerrarFuera = () => {
      window.clearTimeout(timer);
      // Lo que sigue a la sección (está dentro de la isla de Astro: se sube
      // hasta encontrar un hermano).
      let siguiente = null;
      for (let el = seccion; el && !siguiente; el = el.parentElement) siguiente = el.nextElementSibling;
      ancla.current = seccion.getBoundingClientRect().bottom < 0 && siguiente
        ? { el: siguiente, top: siguiente.getBoundingClientRect().top }
        : null;
      // Aviso al header: el scroll que viene (del navegador o el nuestro) no
      // es de la persona.
      if (ancla.current) window.dispatchEvent(new Event('rp:scroll-propio'));
      setQuieto(true);
      setAbierto(null);
    };
    const fuera = new IntersectionObserver(([e]) => {
      window.clearTimeout(timer);
      if (!e.isIntersecting) timer = window.setTimeout(cerrarFuera, FUERA_MS);
    });
    // La pantalla agrandada una pantalla para arriba y para abajo: si la
    // sección sale de ahí, está lejos.
    const lejos = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) cerrarFuera();
    }, { rootMargin: '100% 0px' });
    fuera.observe(seccion);
    lejos.observe(seccion);
    return () => {
      window.clearTimeout(timer);
      fuera.disconnect();
      lejos.disconnect();
    };
  }, [abierto]);

  useEffect(() => {
    if (!quieto) return undefined;
    // Un cuadro después del cierre, cuando el navegador ya compensó (o no).
    const raf = window.requestAnimationFrame(() => {
      const a = ancla.current;
      ancla.current = null;
      if (a) {
        const corrida = a.el.getBoundingClientRect().top - a.top;
        if (Math.abs(corrida) >= 1) {
          window.dispatchEvent(new Event('rp:scroll-propio'));
          window.scrollBy({ top: corrida, behavior: 'instant' });
        }
      }
      setQuieto(false); // vuelven las transiciones
    });
    return () => window.cancelAnimationFrame(raf);
  }, [quieto]);

  // Aviso de una sola vez: aparece cuando los indicadores entran en pantalla
  // y se va a los pocos segundos (o al tocar un indicador).
  useEffect(() => {
    const lista = listaRef.current;
    if (!lista || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setPista(true);
        pistaTimer.current = window.setTimeout(() => setPista(false), 4000);
      },
      { threshold: 0.6 },
    );
    io.observe(lista);
    return () => {
      io.disconnect();
      window.clearTimeout(pistaTimer.current);
    };
  }, []);

  const cerrarPanel = () => {
    const origen = botonesRef.current[abierto];
    setAbierto(null);
    origen?.focus();
  };

  const visible = abierto ?? ultimo.current;
  const posicion = (id) => {
    const i = TABLAS.indexOf(id);
    const v = TABLAS.indexOf(visible);
    return i < v ? 'antes' : i > v ? 'despues' : 'activo';
  };

  return (
    <section
      ref={seccionRef}
      className={`rp-impacto${abierto ? ' is-tabla' : ''}${quieto ? ' is-quieto' : ''}`}
      id="impacto"
      data-fondo-oscuro
    >
      {/* Con una tabla abierta (.is-tabla) el título y la bajada se pliegan
          (la campaña ya la dice la tabla) y los indicadores suben; la tabla
          entra en el lugar que dejan. Como en VigIA. */}
      <Reveal className="rp-impact__head">
        <div className="rp-impact__pliegue">
          <div>
            <h2 className="rp-impact__title">{t.title}</h2>
            <p className="rp-impact__subtitle">{t.subtitle(d)}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={1} className="rp-impact__box">
        <ul className="rp-impact__inds" ref={listaRef}>
          {INDICADORES.map((ind) => {
            const contenido = (
              <>
                <strong>
                  {conSeparadores(valores[ind.id])}
                  {ind.unidad && <small>{ind.unidad}</small>}
                </strong>
                <span>{t.indicadores[ind.id](d)}</span>
              </>
            );
            return (
              <li key={ind.id} className="rp-impact__cell">
                {ind.tabla ? (
                  <button
                    type="button"
                    ref={(el) => { botonesRef.current[ind.id] = el; }}
                    className={`rp-impact__ind rp-impact__ind--boton rp-impact__ind--${ind.id}${abierto === ind.id ? ' is-active' : ''}`}
                    aria-expanded={abierto === ind.id}
                    aria-controls={`rp-impact-panel-${ind.id}`}
                    onClick={() => alternar(ind.id)}
                  >
                    {contenido}
                    <LuChevronDown className="rp-impact__caret" aria-hidden="true" />
                  </button>
                ) : (
                  <div className="rp-impact__ind">{contenido}</div>
                )}
              </li>
            );
          })}
        </ul>
        <p className={`rp-impact__pista${pista ? ' is-visible' : ''}`} aria-hidden="true">
          {t.pista}
        </p>
      </Reveal>

      <div
        ref={cajaRef}
        className={`rp-impact__panel${abierto ? ' is-open' : ''}${instant ? ' is-instant' : ''}`}
        data-tono={visible}
      >
        <div className="rp-impact__panel-inner">
          <span className="rp-impact__flecha" aria-hidden="true" />
          <div className="rp-impact__items">
            {TABLAS.map((id) => {
              const tabla = t.tablas[id];
              return (
                <div
                  key={id}
                  id={`rp-impact-panel-${id}`}
                  className={`rp-impact__item rp-impact__item--${id}`}
                  role="region"
                  aria-label={tabla.titulo(d)}
                  data-pos={posicion(id)}
                  inert={abierto !== id}
                >
                  <div className="rp-impact__item-head">
                    <h3>{tabla.titulo(d)}</h3>
                    <button
                      type="button"
                      className="rp-impact__cerrar"
                      aria-label={t.cerrar}
                      onClick={cerrarPanel}
                    >
                      <LuX aria-hidden="true" />
                    </button>
                  </div>
                  <Tabla columnas={tabla.columnas} filas={filas[id]} />
                  <p className="rp-impact__nota">{tabla.nota(d)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Con una tabla abierta se pliega: la historia (21 campañas) al lado
          de una tabla de una sola campaña podría confundir. */}
      <div className="rp-impact__pie" inert={!!abierto}>
        <p className="rp-impact__pie-linea">{t.pie.linea(d)}</p>
      </div>

    </section>
  );
};

export default conIdioma(ImpactSection);
