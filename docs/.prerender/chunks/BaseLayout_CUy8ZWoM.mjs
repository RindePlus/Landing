import { Q as AstroError, X as UnavailableAstroGlobal, a as renderComponent, f as renderTemplate, h as addAttribute, l as renderSlot, m as renderHead, tt as ASTRO_GENERATOR } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { a as EDUCACION_PATH, c as LOCALES, d as OG_LOCALE, f as PRIVACY_PATH, i as LOGIN_URL, l as LOCALE_LABELS, m as renderScript, n as conIdioma, o as HOME_PATH, p as idiomaDe, r as useI18n, s as HTML_LANG, t as DICTIONARIES, u as NOSOTROS_PATH } from "./src_CK36QlIG.mjs";
import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { LuLogIn } from "react-icons/lu";
import { PiCaretDown, PiCheck, PiEnvelopeSimple, PiInstagramLogo, PiMapPin, PiMoon, PiSun, PiWhatsappLogo } from "react-icons/pi";
//#region node_modules/.pnpm/astro@7.3.4_@emnapi+core@1._dd3aa0111818b8ac8930ad9c8d5090cc/node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
//#endregion
//#region src/assets/rindeplus-logo-light.webp
var rindeplus_logo_light_default = new Proxy({
	"src": "/assets/rindeplus-logo-light.DxoEFCis.webp",
	"width": 344,
	"height": 121,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-logo-light.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-logo-light.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-logo-light.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/rindeplus-logo-dark.webp
var rindeplus_logo_dark_default = new Proxy({
	"src": "/assets/rindeplus-logo-dark.BIhjejGF.webp",
	"width": 344,
	"height": 121,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-logo-dark.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-logo-dark.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-logo-dark.webp");
	}
	return target[name];
} });
//#endregion
//#region src/data/social.js
var INSTAGRAM_URL = "https://www.instagram.com/rindeplus/";
var whatsappUrl = (message) => `https://wa.me/5493564593446?text=${encodeURIComponent(message)}`;
//#endregion
//#region src/data/imagen.js
var urlDe = (img) => typeof img === "string" ? img : img.src;
//#endregion
//#region src/hooks/useRpTheme.js
var STORAGE_KEY = "rp-theme";
function readDocumentTheme() {
	return document.documentElement.getAttribute("data-rp-theme") === "dark" ? "dark" : "light";
}
/**
* Tema claro/oscuro, system-first: sin elección explícita sigue al sistema
* operativo en vivo; el toggle persiste la elección en localStorage y desde
* ahí manda sobre el SO.
*
* El HTML se prerenderiza en claro; BaseLayout.astro fija data-rp-theme antes
* del primer paint y acá se lee al montar, así el render de hidratación
* coincide con el del servidor.
*/
function useRpTheme() {
	const [theme, setTheme] = useState("light");
	const [synced, setSynced] = useState(false);
	useEffect(() => {
		setTheme(readDocumentTheme());
		setSynced(true);
	}, []);
	useEffect(() => {
		if (synced) document.documentElement.setAttribute("data-rp-theme", theme);
	}, [theme, synced]);
	useEffect(() => {
		if (!window.matchMedia) return void 0;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (event) => {
			let stored = null;
			try {
				stored = localStorage.getItem(STORAGE_KEY);
			} catch {}
			if (stored === "light" || stored === "dark") return;
			setTheme(event.matches ? "dark" : "light");
		};
		mq.addEventListener("change", handleChange);
		return () => mq.removeEventListener("change", handleChange);
	}, []);
	const toggleTheme = () => {
		setTheme((t) => {
			const next = t === "dark" ? "light" : "dark";
			try {
				localStorage.setItem(STORAGE_KEY, next);
			} catch {}
			return next;
		});
	};
	return {
		theme,
		toggleTheme
	};
}
//#endregion
//#region src/components/Header.jsx
var HIDE_DISTANCE = 120;
var SHOW_DISTANCE = 120;
var TOP_ZONE = 160;
var guardarPosicion = (destino) => {
	const secciones = [...document.querySelectorAll("section[id], footer[id]")];
	let actual = null;
	for (const el of secciones) if (el.getBoundingClientRect().top <= 0) actual = el;
	try {
		if (!actual) {
			sessionStorage.removeItem("rp-idioma-scroll");
			return;
		}
		const r = actual.getBoundingClientRect();
		const proporcion = r.height ? Math.min(1, -r.top / r.height) : 0;
		sessionStorage.setItem("rp-idioma-scroll", JSON.stringify({
			destino,
			id: actual.id,
			proporcion
		}));
	} catch {}
};
var Header = ({ rutas = HOME_PATH, inicio = "" }) => {
	const { locale, dict } = useI18n();
	const t = dict.header;
	const { theme, toggleTheme } = useRpTheme();
	const menuItems = useMemo(() => [
		{
			label: t.nav.impact,
			id: "impacto"
		},
		{
			label: t.nav.campaign,
			id: "funcionalidades"
		},
		{
			label: t.nav.why,
			id: "beneficios"
		},
		{
			label: t.nav.learn,
			page: "educacion",
			href: EDUCACION_PATH[locale],
			actual: rutas[locale] === EDUCACION_PATH[locale]
		},
		{
			label: t.nav.about,
			page: "nosotros",
			href: NOSOTROS_PATH[locale],
			actual: rutas[locale] === NOSOTROS_PATH[locale]
		},
		{
			label: t.nav.contact,
			id: "contacto"
		}
	], [
		t,
		locale,
		rutas
	]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const navegando = useRef(false);
	const finNavegar = useRef(0);
	const [isScrolled, setIsScrolled] = useState(false);
	const [sobreOscuro, setSobreOscuro] = useState(false);
	const [activeId, setActiveId] = useState(null);
	const [isLangOpen, setIsLangOpen] = useState(false);
	const headerRef = useRef(null);
	const langRef = useRef(null);
	useEffect(() => {
		if (!isMenuOpen) return void 0;
		const handlePointerDown = (event) => {
			if (headerRef.current && !headerRef.current.contains(event.target)) setIsMenuOpen(false);
		};
		document.addEventListener("pointerdown", handlePointerDown);
		return () => document.removeEventListener("pointerdown", handlePointerDown);
	}, [isMenuOpen]);
	useEffect(() => {
		if (!isLangOpen) return void 0;
		const handlePointerDown = (event) => {
			if (langRef.current && !langRef.current.contains(event.target)) setIsLangOpen(false);
		};
		const handleKey = (event) => {
			if (event.key === "Escape") setIsLangOpen(false);
		};
		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleKey);
		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleKey);
		};
	}, [isLangOpen]);
	useEffect(() => {
		let lastY = window.scrollY;
		let anchorY = lastY;
		let direction = 0;
		let ticking = false;
		const secciones = menuItems.filter((item) => item.id).map((item) => ({
			id: item.id,
			el: document.getElementById(item.id)
		})).filter((s) => s.el);
		const seccionActiva = () => {
			const linea = window.innerHeight * .35;
			const activa = secciones.findLast((s) => {
				const r = s.el.getBoundingClientRect();
				return r.top <= linea && r.bottom > linea;
			});
			return activa ? activa.id : null;
		};
		const update = () => {
			const y = window.scrollY;
			setIsScrolled(y > 8);
			const alto = headerRef.current?.offsetHeight ?? 80;
			document.documentElement.style.setProperty("--alto-header", `${alto}px`);
			setSobreOscuro([...document.querySelectorAll("[data-fondo-oscuro]")].some((el) => {
				const r = el.getBoundingClientRect();
				return r.top < alto && r.bottom > 0;
			}));
			setActiveId(seccionActiva());
			if (navegando.current) {
				direction = 0;
				anchorY = y;
				lastY = y;
				ticking = false;
				window.clearTimeout(finNavegar.current);
				finNavegar.current = window.setTimeout(() => {
					navegando.current = false;
				}, 200);
				return;
			}
			const nextDirection = Math.sign(y - lastY);
			if (nextDirection !== 0 && nextDirection !== direction) {
				direction = nextDirection;
				anchorY = lastY;
			}
			const travelled = Math.abs(y - anchorY);
			if (y < TOP_ZONE) setIsHidden(false);
			else if (direction > 0 && travelled >= HIDE_DISTANCE) setIsHidden(true);
			else if (direction < 0 && travelled >= SHOW_DISTANCE) setIsHidden(false);
			lastY = y;
			ticking = false;
		};
		const handleScroll = () => {
			if (ticking) return;
			ticking = true;
			window.requestAnimationFrame(update);
		};
		const scrollPropio = () => {
			navegando.current = true;
			window.clearTimeout(finNavegar.current);
			finNavegar.current = window.setTimeout(() => {
				navegando.current = false;
			}, 300);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll, { passive: true });
		window.addEventListener("rp:scroll-propio", scrollPropio);
		update();
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
			window.removeEventListener("rp:scroll-propio", scrollPropio);
			window.clearTimeout(finNavegar.current);
		};
	}, [menuItems]);
	const elegirIdioma = (event, code) => {
		setIsLangOpen(false);
		setIsMenuOpen(false);
		if (code === locale) {
			event.preventDefault();
			return;
		}
		guardarPosicion(rutas[code]);
	};
	const irASeccion = (event, item) => {
		setIsMenuOpen(false);
		setIsHidden(false);
		navegando.current = true;
		window.clearTimeout(finNavegar.current);
		finNavegar.current = window.setTimeout(() => {
			navegando.current = false;
		}, 1e3);
		const destino = inicio && item?.id ? document.getElementById(item.id) : null;
		if (destino) {
			event.preventDefault();
			destino.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			window.history.replaceState(null, "", `#${item.id}`);
		}
	};
	const estaActivo = (item) => item.page ? item.actual && !activeId : item.id === activeId;
	const ariaActual = (item) => {
		if (item.page) return item.actual ? "page" : void 0;
		return item.id === activeId ? "location" : void 0;
	};
	return /* @__PURE__ */ jsx("header", {
		ref: headerRef,
		className: `header ${isMenuOpen ? "header--menu-open" : ""} ${isHidden && !isMenuOpen ? "header--hidden" : ""} ${isScrolled ? "header--scrolled" : ""} ${sobreOscuro ? "header--sobre-oscuro" : ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "header-content",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: `${inicio}#top`,
					className: "header-logo",
					"aria-label": t.logoAlt,
					onClick: () => setIsMenuOpen(false),
					children: [/* @__PURE__ */ jsx("img", {
						src: urlDe(rindeplus_logo_light_default),
						alt: t.logoAlt,
						width: "344",
						height: "121",
						fetchPriority: "high",
						className: "logo-image logo-image--light"
					}), /* @__PURE__ */ jsx("img", {
						src: urlDe(rindeplus_logo_dark_default),
						alt: "",
						"aria-hidden": "true",
						width: "344",
						height: "121",
						fetchPriority: "high",
						className: "logo-image logo-image--dark"
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: `header-nav ${isMenuOpen ? "header-nav--open" : ""}`,
					id: "header-menu",
					children: [
						menuItems.map((item) => /* @__PURE__ */ jsx("a", {
							href: item.href ?? `${inicio}#${item.id}`,
							className: `menu-item ${item.page ? "menu-item--pagina" : ""} ${estaActivo(item) ? "menu-item--active" : ""}`,
							"aria-current": ariaActual(item),
							onClick: (event) => irASeccion(event, item),
							children: item.label
						}, item.id ?? item.page)),
						/* @__PURE__ */ jsx("a", {
							className: "menu-item header-nav__install",
							href: `${inicio}#instalar`,
							onClick: irASeccion,
							children: t.nav.install
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "header-nav__theme",
							children: [/* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "rp-theme-switch",
								role: "switch",
								"aria-checked": theme === "dark",
								"aria-label": t.themeSwitchAria,
								onClick: toggleTheme,
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "rp-theme-switch__icon rp-theme-switch__icon--sun",
										children: /* @__PURE__ */ jsx(PiSun, {})
									}),
									/* @__PURE__ */ jsx("span", {
										className: "rp-theme-switch__icon rp-theme-switch__icon--moon",
										children: /* @__PURE__ */ jsx(PiMoon, {})
									}),
									/* @__PURE__ */ jsx("span", { className: "rp-theme-switch__knob" })
								]
							}), /* @__PURE__ */ jsx("span", {
								className: "header-nav__lang-opciones",
								role: "group",
								"aria-label": t.language,
								children: LOCALES.map((code) => /* @__PURE__ */ jsx("a", {
									href: rutas[code],
									hrefLang: code,
									lang: code,
									"aria-label": LOCALE_LABELS[code],
									"aria-current": locale === code ? "true" : void 0,
									className: "header-nav__lang-opcion",
									onClick: (event) => elegirIdioma(event, code),
									children: code.toUpperCase()
								}, code))
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							className: "header-nav__whatsapp",
							href: whatsappUrl(dict.whatsapp.message),
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => setIsMenuOpen(false),
							children: [/* @__PURE__ */ jsx(PiWhatsappLogo, { "aria-hidden": "true" }), /* @__PURE__ */ jsx("span", { children: dict.whatsapp.cta })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "header-actions",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "header-paginas",
							children: menuItems.filter((item) => item.page).map((item) => /* @__PURE__ */ jsx("a", {
								href: item.href,
								className: `menu-item ${estaActivo(item) ? "menu-item--active" : ""}`,
								"aria-current": ariaActual(item),
								children: item.label
							}, item.page))
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "header-theme-toggle",
							onClick: toggleTheme,
							"aria-label": theme === "dark" ? t.toLight : t.toDark,
							title: theme === "dark" ? t.themeLight : t.themeDark,
							children: theme === "dark" ? /* @__PURE__ */ jsx(PiSun, {}) : /* @__PURE__ */ jsx(PiMoon, {})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "header-lang",
							ref: langRef,
							children: [/* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "header-lang__btn",
								"aria-haspopup": "menu",
								"aria-expanded": isLangOpen,
								"aria-label": t.language,
								onClick: () => setIsLangOpen((open) => !open),
								children: [/* @__PURE__ */ jsx("span", { children: locale.toUpperCase() }), /* @__PURE__ */ jsx(PiCaretDown, {
									className: "header-lang__caret",
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ jsx("ul", {
								className: `header-lang__menu ${isLangOpen ? "header-lang__menu--open" : ""}`,
								role: "menu",
								children: LOCALES.map((code) => /* @__PURE__ */ jsx("li", {
									role: "none",
									children: /* @__PURE__ */ jsxs("a", {
										href: rutas[code],
										hrefLang: code,
										lang: code,
										role: "menuitemradio",
										"aria-checked": locale === code,
										className: "header-lang__option",
										tabIndex: isLangOpen ? 0 : -1,
										onClick: (event) => elegirIdioma(event, code),
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "header-lang__code",
												children: code.toUpperCase()
											}),
											/* @__PURE__ */ jsx("span", { children: LOCALE_LABELS[code] }),
											locale === code && /* @__PURE__ */ jsx(PiCheck, {
												className: "header-lang__check",
												"aria-hidden": "true"
											})
										]
									})
								}, code))
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							className: "header-login",
							href: LOGIN_URL,
							"aria-label": t.loginLong,
							title: t.loginLong,
							children: [/* @__PURE__ */ jsx("span", {
								className: "header-login__texto",
								children: t.login
							}), /* @__PURE__ */ jsx(LuLogIn, { "aria-hidden": "true" })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					className: `hamburger-button ${isMenuOpen ? "open" : ""}`,
					onClick: () => setIsMenuOpen((open) => !open),
					"aria-label": t.openMenu,
					"aria-expanded": isMenuOpen,
					"aria-controls": "header-menu",
					children: [
						/* @__PURE__ */ jsx("span", { className: "hamburger-line" }),
						/* @__PURE__ */ jsx("span", { className: "hamburger-line" }),
						/* @__PURE__ */ jsx("span", { className: "hamburger-line" })
					]
				})
			]
		})
	});
};
var Header_default = conIdioma(Header);
//#endregion
//#region src/data/fotos.js
var FOTOS = [
	{
		autor: "Murray Foubister",
		licencia: "CC BY-SA 2.0",
		href: "https://commons.wikimedia.org/wiki/File:Flight_from_Buenos_Aires_to_San_Carlos_de_Bariloche,_Argentina_-_mostly_flat_and_virtually_treeless_all_the_way_-_(24815628019).jpg"
	},
	{
		autor: "Alfonso",
		licencia: "CC BY-SA 3.0",
		href: "https://commons.wikimedia.org/wiki/File:Sembrado_de_soja_en_argentina.jpg"
	},
	{
		autor: "Emilio Küffer",
		licencia: "CC BY-SA 2.0",
		href: "https://commons.wikimedia.org/wiki/File:Girasol_pampeano_(44521869145).jpg"
	},
	{
		autor: "Clasonsf",
		licencia: "CC BY-SA 4.0",
		href: "https://commons.wikimedia.org/wiki/File:CosechaSoja.jpg"
	}
];
//#endregion
//#region src/components/Footer.jsx
var EMAIL = "inforindeplus@gmail.com";
var ADDRESS = "Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina";
var MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
var Footer = () => {
	const { locale, dict } = useI18n();
	const t = dict.footer;
	const waUrl = whatsappUrl(dict.whatsapp.message);
	return /* @__PURE__ */ jsx("footer", {
		className: "rp-footer",
		"data-fondo-oscuro": true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "rp-footer__inner",
			children: [/* @__PURE__ */ jsx("div", {
				className: "rp-footer__main",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rp-footer__marca",
					children: [/* @__PURE__ */ jsx("a", {
						className: "rp-footer__logo",
						href: "#top",
						"aria-label": dict.header.logoAlt,
						children: /* @__PURE__ */ jsx("img", {
							src: urlDe(rindeplus_logo_dark_default),
							alt: dict.header.logoAlt,
							width: "344",
							height: "121",
							loading: "lazy",
							decoding: "async"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "rp-footer__derecha",
						children: [/* @__PURE__ */ jsx("nav", {
							className: "rp-footer__legales",
							"aria-label": t.legalNav,
							children: /* @__PURE__ */ jsx("a", {
								href: PRIVACY_PATH[locale],
								children: t.privacy
							})
						}), /* @__PURE__ */ jsxs("ul", {
							className: "rp-footer__redes",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: INSTAGRAM_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": t.instagramAria,
									children: /* @__PURE__ */ jsx(PiInstagramLogo, { "aria-hidden": "true" })
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: waUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": t.whatsappAria,
									children: /* @__PURE__ */ jsx(PiWhatsappLogo, { "aria-hidden": "true" })
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: `mailto:${EMAIL}`,
									"aria-label": t.emailAria,
									children: /* @__PURE__ */ jsx(PiEnvelopeSimple, { "aria-hidden": "true" })
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: MAPS_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": `${t.officeAria}: ${ADDRESS}`,
									title: ADDRESS,
									children: /* @__PURE__ */ jsx(PiMapPin, { "aria-hidden": "true" })
								}) })
							]
						})]
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "rp-footer__bottom",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "rp-footer__copyright",
					children: ["© 2026 Rinde Plus. ", t.rights]
				}), /* @__PURE__ */ jsxs("p", {
					className: "rp-footer__creditos",
					children: [
						dict.credits.lead,
						":",
						" ",
						FOTOS.map((f, i) => /* @__PURE__ */ jsxs("span", { children: [i > 0 && " · ", /* @__PURE__ */ jsx("a", {
							href: f.href,
							target: "_blank",
							rel: "noopener noreferrer",
							title: `${dict.credits.photos[i]} · ${f.licencia}`,
							children: f.autor
						})] }, f.href)),
						" ",
						"(CC BY-SA",
						/* @__PURE__ */ jsxs("span", {
							className: "rp-footer__creditos-via",
							children: [", ", dict.credits.via]
						}),
						")"
					]
				})]
			})]
		})
	});
};
var Footer_default = conIdioma(Footer);
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { noindex = false, title, description, paths = HOME_PATH } = Astro.props;
	const lang = idiomaDe(Astro.currentLocale);
	const { meta: metaHome } = DICTIONARIES[lang];
	const meta = {
		title: title ?? metaHome.title,
		description: description ?? metaHome.description
	};
	const esHome = paths === HOME_PATH;
	const site = Astro.site ?? new URL("https://rindeplus.com");
	const pageUrl = new URL(paths[lang], site).href;
	const ogImage = new URL(`/og/rindeplus-${lang}.png`, site).href;
	const hreflang = noindex ? [] : [...LOCALES.map((code) => ({
		lang: HTML_LANG[code],
		href: new URL(paths[code], site).href
	})), {
		lang: "x-default",
		href: new URL(paths.es, site).href
	}];
	return renderTemplate`<html${addAttribute(HTML_LANG[lang], "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>${meta.title}</title><meta name="description"${addAttribute(meta.description, "content")}>${noindex ? renderTemplate`<meta name="robots" content="noindex">` : renderTemplate`<link rel="canonical"${addAttribute(pageUrl, "href")}>`}${hreflang.map((h) => renderTemplate`<link rel="alternate"${addAttribute(h.lang, "hreflang")}${addAttribute(h.href, "href")}>`)}<meta property="og:type" content="website"><meta property="og:locale"${addAttribute(OG_LOCALE[lang], "content")}><meta property="og:site_name" content="Rinde Plus"><meta property="og:title"${addAttribute(meta.title, "content")}><meta property="og:description"${addAttribute(meta.description, "content")}><meta property="og:url"${addAttribute(pageUrl, "content")}><!-- Imagen al compartir el link (WhatsApp, LinkedIn, mail): una por
         idioma, 1200×630, en public/og/. --><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"${addAttribute(meta.title, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- Fuentes del texto y de los títulos, alojadas en el sitio (@font-face
         en src/index.css): se precargan para que el primer texto ya salga con ellas. --><link rel="preload" href="/fonts/ibm-plex-sans-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/aileron-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin><!-- Resuelve el tema antes del primer paint para evitar el flash
         claro→oscuro. Misma clave y criterio que src/hooks/useRpTheme.js. --><script>
      (function () {
        var theme = null;
        try { theme = localStorage.getItem('rp-theme'); } catch (e) {}
        if (theme !== 'light' && theme !== 'dark') {
          theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-rp-theme', theme);
        // Habilita las apariciones al hacer scroll sólo con JS y movimiento
        // permitido; sin esta clase el contenido se ve de entrada.
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduce && 'IntersectionObserver' in window) {
          document.documentElement.classList.add('rp-reveal-on');
        }
      })();
    <\/script>${renderHead($$result)}</head><body class="rp-home">${renderComponent($$result, "Header", Header_default, {
		"client:load": true,
		"lang": lang,
		"rutas": paths,
		"inicio": esHome ? "" : HOME_PATH[lang],
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/totoa/Proyectos/RindePlus/Landing/src/components/Header.jsx",
		"client:component-export": "default"
	})}<main id="contenido">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", Footer_default, { "lang": lang })}<!-- Cambio de idioma: el selector del header guarda en qué sección y a
         qué altura de ella estaba el usuario; acá, en la página del otro
         idioma, se vuelve a ese punto (los textos miden distinto, así que se
         usa la proporción dentro de la sección). Lo que ya queda a la vista
         se muestra sin la animación de aparición. Inline: corre antes del
         primer paint y antes del observer de abajo. --><script>
      (function () {
        var dato = null;
        try {
          dato = JSON.parse(sessionStorage.getItem('rp-idioma-scroll') || 'null');
          sessionStorage.removeItem('rp-idioma-scroll');
        } catch (e) {}
        var limpiar = function (r) { return r.replace(/\\/+$/, '') || '/'; };
        if (!dato || limpiar(dato.destino) !== limpiar(location.pathname) || location.hash) return;
        var el = dato.id && document.getElementById(dato.id);
        if (!el) return;
        var r = el.getBoundingClientRect();
        window.scrollTo({ top: window.scrollY + r.top + r.height * dato.proporcion, behavior: 'instant' });
        var alto = window.innerHeight;
        document.querySelectorAll('.rp-reveal').forEach(function (n) {
          if (n.closest('astro-island')) return; // las islas se animan solas
          var b = n.getBoundingClientRect();
          if (b.top < alto && b.bottom > -alto * 0.1) n.classList.add('rp-is-visible');
        });
      })();
    <\/script><!-- Apariciones al hacer scroll de las secciones estáticas (.rp-reveal,
         estilos en HomePage.css). Las islas lo hacen con su propio hook:
         tocar su HTML antes de hidratar rompe la hidratación.
         IntersectionObserver en lugar de un listener de scroll: no fuerza
         reflows y cada bloque se anima una sola vez. -->${renderScript($$result, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}<!-- Llegada con ancla (por ejemplo /#contacto desde otra página): el
         navegador salta a la sección apenas carga, pero después las islas
         (Impacto, Plataforma) se hidratan y cambian de alto, y la sección
         queda corrida. Mientras la página se acomoda, cada cambio de alto
         vuelve a dejar la sección justo debajo del header; ese scroll avisa
         rp:scroll-propio, así el header no lo toma como «bajar» y no se
         esconde. Se suelta al primer gesto de la persona o a los 3 s. -->${renderScript($$result, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/layouts/BaseLayout.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { createAstro as i, urlDe as n, whatsappUrl as r, $$BaseLayout as t };
