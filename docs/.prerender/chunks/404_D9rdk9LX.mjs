import { f as renderTemplate, m as renderHead, pt as __exportAll } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="es-419"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>Rinde Plus</title><script>
      (function () {
        var m = location.pathname.match(/^\\/(en|pt)(\\/|$)/);
        location.replace((m ? '/' + m[1] + '/' : '/') + location.search + location.hash);
      })();
    <\/script>${renderHead($$result)}</head><body><a href="/">Rinde Plus</a></body></html>`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/404.astro", void 0);
var $$file = "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
