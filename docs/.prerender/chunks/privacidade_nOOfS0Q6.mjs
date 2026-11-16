import { a as renderComponent, f as renderTemplate, pt as __exportAll } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { f as PRIVACY_PATH } from "./src_CK36QlIG.mjs";
import { n as $$LegalView, t as PRIVACIDAD } from "./legal_hJ9WUEEl.mjs";
//#region src/pages/pt/privacidade.astro
var privacidade_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacidade,
	file: () => $$file,
	url: () => $$url
});
var $$Privacidade = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "LegalView", $$LegalView, {
		"texto": PRIVACIDAD.pt,
		"paths": PRIVACY_PATH
	})}`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/pt/privacidade.astro", void 0);
var $$file = "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/pt/privacidade.astro";
var $$url = "/pt/privacidade";
//#endregion
//#region \0virtual:astro:page:src/pages/pt/privacidade@_@astro
var page = () => privacidade_exports;
//#endregion
export { page };
