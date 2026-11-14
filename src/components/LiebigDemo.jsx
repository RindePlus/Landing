import { useState } from 'react';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { conIdioma, useI18n } from '../i18n/I18nContext';

// Ley del mínimo, para tocar: seis nutrientes como barras y el techo que
// pone el agua. El rinde es el más bajo de todos (agua incluida). Tocar una
// barra la fertiliza (+15, hasta el tope) y se ve cómo pasa a limitar otro
// nutriente, hasta que limita el agua. Ejemplo con maíz: cada punto de la
// escala son 100 kg/ha. Es una isla chica (client:visible en LearnView).
const INICIAL = [68, 42, 88, 82, 76, 58];
const TECHO = 84;
const TOPE = 100;
const PASO = 15;
const KG_POR_PUNTO = 100;

const LiebigDemo = () => {
  const { dict, locale } = useI18n();
  const t = dict.paginas.educacion.lecciones.find((l) => l.demo).demo;
  const [niveles, setNiveles] = useState(INICIAL);

  const minimo = Math.min(...niveles);
  const limitaAgua = TECHO <= minimo;
  const rinde = Math.min(minimo, TECHO);
  const limitante = limitaAgua ? -1 : niveles.indexOf(minimo);
  const nf = new Intl.NumberFormat(locale === 'en' ? 'en-US' : locale === 'pt' ? 'pt-BR' : 'es-AR');
  const cambiado = niveles.some((n, i) => n !== INICIAL[i]);

  const fertilizar = (i) =>
    setNiveles((prev) => prev.map((n, j) => (j === i ? Math.min(TOPE, n + PASO) : n)));

  return (
    <div className="rp-liebig">
      <div className="rp-liebig__cabecera">
        <p className="rp-liebig__ejemplo">{t.ejemplo}</p>
        <p className="rp-liebig__resultado" aria-live="polite">
          <span>
            {t.rinde}: <strong>
              {/* Separador de miles en la tipografía del texto (en Chivo
                  Mono «4.200» se lee «4 . 200»), como en Impacto. */}
              {nf.format(rinde * KG_POR_PUNTO).split(/([.,])/).map((parte, i) =>
                i % 2 ? <span key={i} className="rp-liebig__sep">{parte}</span> : parte,
              )}{' '}
              kg/ha
            </strong>
          </span>
          <span className={limitaAgua ? 'rp-liebig__limita rp-liebig__limita--agua' : 'rp-liebig__limita'}>
            {t.limita}: {limitaAgua ? t.agua : t.nutrientes[limitante]}
          </span>
        </p>
      </div>

      <div className="rp-liebig__grafico">
        <div
          className={`rp-liebig__techo${limitaAgua ? ' is-limita' : ''}`}
          style={{ bottom: `${TECHO}%` }}
        >
          <span>{t.techo}</span>
        </div>
        <div className="rp-liebig__rinde" style={{ bottom: `${rinde}%` }} aria-hidden="true" />
        <ul className="rp-liebig__barras">
          {niveles.map((n, i) => (
            <li key={t.simbolos[i]}>
              <button
                type="button"
                className={`rp-liebig__barra${i === limitante ? ' is-limitante' : ''}`}
                onClick={() => fertilizar(i)}
                disabled={n >= TOPE}
                aria-label={`${t.fertilizar(t.nutrientes[i])} (${n} / ${TOPE})`}
              >
                <span className="rp-liebig__relleno" style={{ height: `${n}%` }} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="rp-liebig__simbolos" aria-hidden="true">
        {t.simbolos.map((s, i) => (
          <li key={s} title={t.nutrientes[i]}>{s}</li>
        ))}
      </ul>

      <div className="rp-liebig__pie">
        <p className="rp-liebig__pista">{t.pista}</p>
        <button
          type="button"
          className="rp-liebig__reiniciar"
          onClick={() => setNiveles(INICIAL)}
          disabled={!cambiado}
        >
          <PiArrowCounterClockwise aria-hidden="true" />
          {t.reiniciar}
        </button>
      </div>
    </div>
  );
};

export default conIdioma(LiebigDemo);
