import { a as renderComponent, f as renderTemplate, pt as __exportAll } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { f as PRIVACY_PATH } from "./src_CK36QlIG.mjs";
import { n as $$LegalView, t as PRIVACIDAD } from "./legal_hJ9WUEEl.mjs";
//#region src/pages/privacidad.astro
var privacidad_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacidad,
	file: () => $$file,
	url: () => $$url
});
var $$Privacidad = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "LegalView", $$LegalView, {
		"texto": PRIVACIDAD.es,
		"paths": PRIVACY_PATH
	})}`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/privacidad.astro", void 0);
var $$file = "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/privacidad.astro";
var $$url = "/privacidad";
//#endregion
//#region \0virtual:astro:page:src/pages/privacidad@_@astro
var page = () => privacidad_exports;
//#endregion
export { page };
