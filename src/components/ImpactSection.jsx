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
  // Dónde estaban los indicadores en pantalla antes de abrir o cerrar.
  const anclaTop = useRef(null);

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
    anclaTop.current = listaRef.current?.getBoundingClientRect().top ?? null;
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

  // Al abrir la primera tabla o cerrar la última, el título se pliega o
  // vuelve. La vista no se mueve: mientras dura el pliegue se compensa el
  // scroll para que los indicadores queden donde estaban en pantalla (sin
  // esto, subían de golpe bajo el mouse). Si la persona scrollea, se suelta.
  useEffect(() => {
    const destino = anclaTop.current;
    anclaTop.current = null;
    const lista = listaRef.current;
    if (destino == null || !lista) return undefined;
    const raiz = document.documentElement;
    raiz.setAttribute('data-scroll-quieto', '');
    const fin = performance.now() + 1100; // --imp-despliegue y un margen
    let raf = 0;
    const soltar = () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('wheel', soltar);
      window.removeEventListener('touchstart', soltar);
      window.removeEventListener('keydown', soltar);
      // Un cuadro más, para que el header vea el último scroll compensado.
      window.requestAnimationFrame(() => raiz.removeAttribute('data-scroll-quieto'));
    };
    const paso = () => {
      const diferencia = lista.getBoundingClientRect().top - destino;
      if (Math.abs(diferencia) >= 0.5) window.scrollBy({ top: diferencia, behavior: 'instant' });
      if (performance.now() < fin) raf = window.requestAnimationFrame(paso);
      else soltar();
    };
    window.addEventListener('wheel', soltar, { passive: true });
    window.addEventListener('touchstart', soltar, { passive: true });
    window.addEventListener('keydown', soltar);
    paso();
    return soltar;
  }, [abierto]);

  useEffect(() => {
    if (!abierto) return undefined;
    const onResize = () => ubicarFlecha(abierto);
    // Escape cierra el panel.
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      anclaTop.current = listaRef.current?.getBoundingClientRect().top ?? null;
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
    anclaTop.current = listaRef.current?.getBoundingClientRect().top ?? null;
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
    <section className={`rp-impacto${abierto ? ' is-tabla' : ''}`} id="impacto">
      {/* Con una tabla abierta (.is-tabla) el título se pliega y los
          indicadores suben: indicadores, tabla y pie entran en la pantalla
          sin bajar la vista. La bajada queda. Como en VigIA. */}
      <Reveal className="rp-impact__head">
        <div className="rp-impact__pliegue">
          <div>
            <h2 className="rp-impact__title">{t.title}</h2>
          </div>
        </div>
        <p className="rp-impact__subtitle">{t.subtitle(d)}</p>
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

      <div className="rp-impact__pie">
        <p className="rp-impact__pie-linea">{t.pie.linea(d)}</p>
      </div>

    </section>
  );
};

export default conIdioma(ImpactSection);
