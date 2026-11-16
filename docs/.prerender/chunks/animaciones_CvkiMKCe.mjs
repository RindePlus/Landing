import { a as renderComponent, f as renderTemplate, h as addAttribute, m as renderHead, o as Fragment, pt as __exportAll } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { m as renderScript, t as DICTIONARIES } from "./src_CK36QlIG.mjs";
import { t as LoteMap } from "./HomePage_CQDLM_8o.mjs";
//#region src/pages/animaciones.astro
var animaciones_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Animaciones,
	file: () => $$file,
	url: () => $$url
});
var $$Animaciones = createComponent(($$result, $$props, $$slots) => {
	const avisos = {
		es: DICTIONARIES.es.hero.avisos,
		en: DICTIONARIES.en.hero.avisos,
		pt: DICTIONARIES.pt.hero.avisos
	};
	return renderTemplate`<html lang="es" data-astro-cid-eumjjntp><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>Animaciones del lote · Rinde Plus</title><script>
      (function () {
        var theme = null;
        try { theme = localStorage.getItem('rp-theme'); } catch (e) {}
        if (theme !== 'light' && theme !== 'dark') {
          theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-rp-theme', theme);
      })();
    <\/script>${renderHead($$result)}</head><body class="rp-home" data-astro-cid-eumjjntp><main class="anim" data-astro-cid-eumjjntp><header class="anim__cabecera" data-astro-cid-eumjjntp><div data-astro-cid-eumjjntp><p class="anim__marca" data-astro-cid-eumjjntp>Rinde Plus · página de prueba</p><h1 class="anim__titulo" data-astro-cid-eumjjntp>Animaciones del lote del hero</h1><p class="anim__intro" data-astro-cid-eumjjntp>En la home las escenas salen de a una y al azar. Acá están todas a la vez, en bucle, con lo que representa cada una y el texto de su notificación. Esta página no está enlazada desde el sitio ni aparece en buscadores.</p></div><div class="anim__acciones" data-astro-cid-eumjjntp><button type="button" class="anim__boton" data-tema data-astro-cid-eumjjntp>Cambiar a modo oscuro</button><button type="button" class="anim__boton" data-repetir-todas data-astro-cid-eumjjntp>Repetir todas</button></div></header><section class="anim__reglas" aria-labelledby="reglas" data-astro-cid-eumjjntp><h2 id="reglas" class="anim__subtitulo" data-astro-cid-eumjjntp>Qué representa el conjunto</h2><ul data-astro-cid-eumjjntp><li data-astro-cid-eumjjntp><strong data-astro-cid-eumjjntp>El lote es uno entre muchos:</strong> uno de los potreros del mosaico de fondo, con su mapa de ambientes (rojo bajo, verde alto).</li><li data-astro-cid-eumjjntp><strong data-astro-cid-eumjjntp>Las escenas recorren la campaña, del plan al cierre</strong>, con los mismos cinco momentos de «Qué hace». El ciclo completo muestra que Rinde Plus acompaña el lote toda la campaña.</li><li data-astro-cid-eumjjntp><strong data-astro-cid-eumjjntp>Cada escena tiene tres tiempos:</strong> la condición (lo que pasa en el lote, 0–2,2 s), el análisis (un barrido azul, 2,2–3,3 s) y la respuesta (la notificación de Rinde Plus, 5,5 s a la vista).</li><li data-astro-cid-eumjjntp><strong data-astro-cid-eumjjntp>El clima no es lo central:</strong> sequía, calor y lluvia son variantes de un solo momento, Acompañar el cultivo, para no parecer una app de alertas climáticas.</li><li data-astro-cid-eumjjntp><strong data-astro-cid-eumjjntp>Sólo se responde con lo que la plataforma hace hoy:</strong> cada notificación sale de una función que ya está en «Qué hace».</li><li data-astro-cid-eumjjntp>Las líneas onduladas del lote son <strong data-astro-cid-eumjjntp>curvas de nivel</strong> (relieve), no viento.</li></ul></section><ol class="anim__grilla" data-astro-cid-eumjjntp>${[
		{
			escena: "planificar",
			aviso: "planificar",
			momento: "Planificar",
			lote: "Los bordes de los tres ambientes (alto, medio y bajo) se dibujan uno por uno y cada ambiente se ilumina.",
			significa: "Rinde Plus trabaja el lote por ambientes y calcula el rinde potencial de cada uno.",
			respaldo: "Planificar: «Rinde base, potencial, fertilizando y cosechado, por lote y por ambiente»."
		},
		{
			escena: "preparar",
			aviso: "preparar",
			momento: "Preparar el lote",
			lote: "Aparecen nueve puntos de muestreo de suelo en grilla, cada uno con una onda.",
			significa: "El análisis de suelo del lote se carga y la plataforma lo interpreta.",
			respaldo: "Preparar el lote: «Análisis de suelo y plan de enmiendas»."
		},
		{
			escena: "fertilizar",
			aviso: "fertilizar",
			momento: "Fertilizar",
			lote: "Un mapa de prescripción en celdas se carga de a columnas, como pasadas: azul más oscuro, más dosis. Más dosis en el ambiente alto, menos en los bajos.",
			significa: "La dosis que conviene aplicar en cada ambiente, según su rinde esperado y los precios.",
			respaldo: "Fertilizar: «Dosis óptima económica» y «Margen bruto por lote y por ambiente».",
			duda: "Las celdas se parecen a un archivo de prescripción para la fertilizadora (dosis variable). Si la plataforma no exporta prescripciones, conviene mostrar sólo la dosis por ambiente."
		},
		{
			escena: "acompanar",
			clima: "sequia",
			aviso: "sequia",
			momento: "Acompañar el cultivo · sequía",
			lote: "El terreno se pone anaranjado, empezando por el ambiente bajo.",
			significa: "Falta agua: la plataforma calcula cuánto riego hace falta para llegar al rinde objetivo.",
			respaldo: "Planificar: «Riego necesario para llegar al rinde objetivo»."
		},
		{
			escena: "acompanar",
			clima: "calor",
			aviso: "calor",
			momento: "Acompañar el cultivo · calor",
			lote: "Un sol fuerte en una esquina, el lote más cálido y el aire que reverbera.",
			significa: "Se vienen días de calor que pueden estresar al cultivo.",
			respaldo: "Acompañar el cultivo: «Alertas de estrés térmico, déficit de presión de vapor y enfermedades fúngicas»."
		},
		{
			escena: "acompanar",
			clima: "lluvia",
			aviso: "lluvia",
			momento: "Acompañar el cultivo · lluvia",
			lote: "Cruza una llovizna y después el verde se aviva.",
			significa: "Después de la lluvia sube el riesgo de enfermedades fúngicas.",
			respaldo: "Acompañar el cultivo: «Alertas de estrés térmico, déficit de presión de vapor y enfermedades fúngicas»."
		},
		{
			escena: "cerrar",
			aviso: "cerrar",
			momento: "Cerrar y aprender",
			lote: "La cosechadora pasa en franjas, ida y vuelta, y deja el mapa de rinde en bloques, como los datos del monitor de rinde.",
			significa: "Lo que rindió cada ambiente contra lo que podía rendir: dónde se perdió rinde.",
			respaldo: "Cerrar y aprender: «Brecha de rendimiento por lote y por ambiente»."
		},
		{
			viento: true,
			aviso: null,
			momento: "Viento (ambiente)",
			lote: "Tres ráfagas finas cruzan el lote, escalonadas.",
			significa: "Sólo ambiente, entre escena y escena: no tiene análisis ni respuesta.",
			respaldo: "Sin notificación."
		}
	].map((e) => renderTemplate`<li class="anim__tarjeta" data-astro-cid-eumjjntp><div class="anim__escena"${addAttribute(e.escena ?? "", "data-escena-prueba")}${addAttribute(e.clima ?? "", "data-clima-prueba")}${addAttribute(e.viento ? "" : void 0, "data-viento-prueba")} data-astro-cid-eumjjntp>${renderComponent($$result, "LoteMap", LoteMap, {
		"aria": `Escena: ${e.momento}`,
		"avisos": avisos.es,
		"data-astro-cid-eumjjntp": true
	})}</div><div class="anim__texto" data-astro-cid-eumjjntp><div class="anim__tarjeta-cabecera" data-astro-cid-eumjjntp><h2 class="anim__subtitulo" data-astro-cid-eumjjntp>${e.momento}</h2><button type="button" class="anim__boton anim__boton--chico" data-repetir data-astro-cid-eumjjntp>Repetir</button></div><dl data-astro-cid-eumjjntp><dt data-astro-cid-eumjjntp>En el lote</dt><dd data-astro-cid-eumjjntp>${e.lote}</dd><dt data-astro-cid-eumjjntp>Qué significa</dt><dd data-astro-cid-eumjjntp>${e.significa}</dd><dt data-astro-cid-eumjjntp>Notificación</dt><dd data-astro-cid-eumjjntp>${e.aviso ? renderTemplate`<ul class="anim__avisos" data-astro-cid-eumjjntp><li data-astro-cid-eumjjntp><span data-astro-cid-eumjjntp>ES</span>${avisos.es[e.aviso]}</li><li data-astro-cid-eumjjntp><span data-astro-cid-eumjjntp>EN</span>${avisos.en[e.aviso]}</li><li data-astro-cid-eumjjntp><span data-astro-cid-eumjjntp>PT</span>${avisos.pt[e.aviso]}</li></ul>` : "Ninguna."}</dd><dt data-astro-cid-eumjjntp>Respaldo en «Qué hace»</dt><dd data-astro-cid-eumjjntp>${e.respaldo}</dd>${e.duda && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<dt class="anim__duda-titulo" data-astro-cid-eumjjntp>A confirmar</dt><dd class="anim__duda" data-astro-cid-eumjjntp>${e.duda}</dd>` })}`}</dl></div></li>`)}</ol></main>${renderScript($$result, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/animaciones.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/animaciones.astro", void 0);
var $$file = "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/animaciones.astro";
var $$url = "/animaciones";
//#endregion
//#region \0virtual:astro:page:src/pages/animaciones@_@astro
var page = () => animaciones_exports;
//#endregion
export { page };
