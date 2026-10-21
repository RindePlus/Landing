// Escenas del lote del hero: qué escena corre y cuándo. Las capas están en
// LoteMap.jsx y las animaciones en LoteMap.css; acá sólo se ponen y se
// sacan data-escena / data-clima / data-viento en la figura. Qué representa
// cada escena y cómo cambiarlas: doc/ANIMACION_LOTE.md.
//
// Una escena por vez, con calma entre medio. Las cinco escenas salen en
// orden al azar y no se repiten hasta que pasaron todas (ni dos veces
// seguidas al empezar otra vuelta). En la calma, a veces, cruza una ráfaga
// de viento. Sólo corre con el hero en pantalla y la pestaña visible; con
// prefers-reduced-motion no corre nada.

// Los cinco momentos de la campaña (los mismos de "Qué hace").
const ESCENAS = ['planificar', 'preparar', 'fertilizar', 'acompanar', 'cerrar'];
// Acompañar muestra una condición de clima al azar.
const CLIMAS = ['sequia', 'calor', 'lluvia'];

const PRIMERA_MS = 4600; // después de la entrada del lote (borde, suelo y NDVI)
const ESCENA_MS = 10300; // --esc-dur (10 s) y un respiro
const CALMA_MS = 5500; // lote quieto entre escenas
const VIENTO_MS = 3400; // tres ráfagas escalonadas de 2,6 s
const VIENTO_PROB = 0.6; // en cuántas calmas cruza el viento

const figura = document.querySelector('.rp-home__hero .rp-lote');
const hero = figura?.closest('.rp-home__hero');
const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (figura && hero && !reducido && 'IntersectionObserver' in window) {
  let enPantalla = false;
  let corriendo = false;
  let timer = 0;
  let cola = [];
  let ultima = null;
  let ultimoClima = null;

  const puede = () => enPantalla && !document.hidden;
  const esperar = (fn, ms) => {
    timer = window.setTimeout(fn, ms);
  };

  const mezclar = (lista) => {
    const a = [...lista];
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const siguiente = () => {
    if (!cola.length) {
      cola = mezclar(ESCENAS);
      if (cola[0] === ultima) cola.push(cola.shift());
    }
    return cola.shift();
  };

  const parar = () => {
    corriendo = false;
    delete figura.dataset.viento;
  };

  const escena = () => {
    if (!puede()) return parar();
    const id = siguiente();
    ultima = id;
    if (id === 'acompanar') {
      const climas = CLIMAS.filter((c) => c !== ultimoClima);
      ultimoClima = climas[Math.floor(Math.random() * climas.length)];
      figura.dataset.clima = ultimoClima;
    }
    figura.dataset.escena = id;
    esperar(() => {
      delete figura.dataset.escena;
      delete figura.dataset.clima;
      calma();
    }, ESCENA_MS);
  };

  const calma = () => {
    if (!puede()) return parar();
    if (Math.random() >= VIENTO_PROB) return esperar(escena, CALMA_MS);
    // La ráfaga cruza en el medio de la calma, nunca junto a una escena.
    const antes = (CALMA_MS - VIENTO_MS) / 2;
    esperar(() => {
      figura.dataset.viento = '';
      esperar(() => {
        delete figura.dataset.viento;
        esperar(escena, antes);
      }, VIENTO_MS);
    }, antes);
  };

  const reanudar = () => {
    if (corriendo || !puede()) return;
    corriendo = true;
    window.clearTimeout(timer);
    esperar(escena, PRIMERA_MS);
  };

  new IntersectionObserver(
    ([entrada]) => {
      enPantalla = entrada.isIntersecting;
      reanudar();
    },
    { threshold: 0.3 },
  ).observe(hero);

  document.addEventListener('visibilitychange', reanudar);
}
