import { a as renderComponent, f as renderTemplate, pt as __exportAll } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { f as PRIVACY_PATH } from "./src_CK36QlIG.mjs";
import { n as $$LegalView, t as PRIVACIDAD } from "./legal_hJ9WUEEl.mjs";
//#region src/pages/en/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "LegalView", $$LegalView, {
		"texto": PRIVACIDAD.en,
		"paths": PRIVACY_PATH
	})}`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/en/privacy.astro", void 0);
var $$file = "C:/Users/totoa/Proyectos/RindePlus/Landing/src/pages/en/privacy.astro";
var $$url = "/en/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/en/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
