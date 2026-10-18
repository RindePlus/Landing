import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { LuChevronDown, LuInfo, LuX } from 'react-icons/lu';
import Reveal from './Reveal';
import { useI18n } from '../i18n/I18nContext';
import {
  ANALISIS_SUELO,
  CIFRAS,
  HA_CULTIVOS,
  HA_SIN_CULTIVO,
  HA_TOTAL,
  HISTORIA,
  IMPACTO_CAMPANA,
  IMPACTO_FECHA_CORTE,
  AUTOS_EQUIVALENTES,
  CO2_ESTABLE,
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
// de abajo; todos tienen además un ⓘ que abre el modal de cálculo.
const INDICADORES = [
  { id: 'hectareas', prefijo: '+', unidad: 'ha' },
  { id: 'grano', prefijo: '+', unidad: 't', tabla: true },
  { id: 'carbono', prefijo: '~', unidad: 't', tabla: true },
  { id: 'suelo', prefijo: '+', unidad: '' },
];
const TABLAS = INDICADORES.filter((i) => i.tabla).map((i) => i.id);

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
    const fecha = new Intl.DateTimeFormat(numLocale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(`${IMPACTO_FECHA_CORTE}T00:00:00Z`));
    return {
      d: {
        campana: IMPACTO_CAMPANA,
        fecha,
        pct: pct(PORCENTAJE_BRECHAS),
        pctBajo: pct(RANGO_BRECHAS[0]),
        pctAlto: pct(RANGO_BRECHAS[1]),
        granoBajo: fmt(CIFRAS.granoRango[0]),
        granoAlto: fmt(CIFRAS.granoRango[1]),
        autos: fmt(AUTOS_EQUIVALENTES),
        sinCultivoPct: pct(HA_SIN_CULTIVO / HA_TOTAL),
        cultivosPct: pct(HA_CULTIVOS / HA_TOTAL),
        sueloTotal: fmt(ANALISIS_SUELO),
        historia: fmt(CIFRAS.historia),
        historiaHa: fmt(HISTORIA.hectareas),
        ciclos: fmt(HISTORIA.ciclos),
        lotes: fmt(HISTORIA.lotes),
        empresas: fmt(HISTORIA.empresas),
        campanas: HISTORIA.campanas,
        desde: HISTORIA.desde,
        hasta: HISTORIA.hasta,
        enCurso: HISTORIA.enCurso,
        haUnicas: fmt(HISTORIA.hectareasUnicas),
        co2Estable: fmt(CO2_ESTABLE),
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

  useEffect(() => {
    if (!abierto) return undefined;
    const onResize = () => ubicarFlecha(abierto);
    // Escape cierra el panel, salvo que el Escape sea del modal.
    const onKey = (e) => {
      if (e.key !== 'Escape' || document.querySelector('dialog[open]')) return;
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

  /* ---- Modal de cálculo (dialog nativo) ---- */

  const [modal, setModal] = useState(null);
  const dialogRef = useRef(null);
  const abridorRef = useRef(null);

  const abrirModal = (id, e) => {
    abridorRef.current = e.currentTarget;
    setModal(id);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!modal || !dialog || dialog.open) return;
    dialog.showModal();
    // La página de fondo no scrollea mientras el modal está abierto.
    document.documentElement.classList.add('rp-modal-open');
  }, [modal]);

  const onDialogClose = () => {
    document.documentElement.classList.remove('rp-modal-open');
    setModal(null);
    abridorRef.current?.focus();
  };

  // Clic en el backdrop: el dialog no tiene padding propio, así que un clic
  // con target en el dialog mismo cae fuera del contenido.
  const onDialogClick = (e) => {
    if (e.target === e.currentTarget) dialogRef.current?.close();
  };

  const m = modal ? t.modal[modal] : null;

  return (
    <section className="rp-impacto" id="impacto">
      <Reveal className="rp-impact__head">
        <h2 className="rp-impact__title">{t.title}</h2>
        <p className="rp-impact__subtitle">{t.subtitle(d)}</p>
      </Reveal>

      <Reveal delay={1} className="rp-impact__box">
        <ul className="rp-impact__inds" ref={listaRef}>
          {INDICADORES.map((ind) => {
            const contenido = (
              <>
                <strong>
                  {valores[ind.id]}
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
                <button
                  type="button"
                  className="rp-impact__info"
                  aria-label={t.info(t.modal[ind.id].titulo(d))}
                  title={t.info(t.modal[ind.id].titulo(d))}
                  onClick={(e) => abrirModal(ind.id, e)}
                >
                  <LuInfo aria-hidden="true" />
                </button>
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
        <p className="rp-impact__pie-linea">
          {t.pie.linea(d)}
          <button
            type="button"
            className="rp-impact__info rp-impact__info--inline"
            aria-label={t.info(t.modal.historia.titulo(d))}
            title={t.info(t.modal.historia.titulo(d))}
            onClick={(e) => abrirModal('historia', e)}
          >
            <LuInfo aria-hidden="true" />
          </button>
        </p>
        <p className="rp-impact__fuente">{t.pie.fuente(d)}</p>
      </div>

      <dialog
        ref={dialogRef}
        className="rp-impact__modal"
        aria-labelledby="rp-impact-modal-title"
        onClose={onDialogClose}
        onClick={onDialogClick}
      >
        {m && (
          <div className="rp-impact__modal-body">
            <div className="rp-impact__modal-head">
              <h3 id="rp-impact-modal-title">{m.titulo(d)}</h3>
              <button
                type="button"
                className="rp-impact__cerrar"
                aria-label={t.modal.cerrar}
                onClick={() => dialogRef.current?.close()}
              >
                <LuX aria-hidden="true" />
              </button>
            </div>
            <h4>{t.modal.bloques.mide}</h4>
            <p>{m.mide(d)}</p>
            {modal === 'hectareas' && (
              <>
                <h4>{t.modal.bloques.compone}</h4>
                <Tabla columnas={m.columnas} filas={filas.hectareas} />
              </>
            )}
            {m.calcula && (
              <>
                <h4>{t.modal.bloques.calcula}</h4>
                <p>{m.calcula(d)}</p>
              </>
            )}
            {m.cuenta && (
              <>
                <h4>{t.modal.bloques.cuenta}</h4>
                <p>{m.cuenta(d)}</p>
              </>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
};

export default ImpactSection;
