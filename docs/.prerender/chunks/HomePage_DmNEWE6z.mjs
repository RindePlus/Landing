import { n as urlDe, r as whatsappUrl } from "./BaseLayout_CUy8ZWoM.mjs";
import { n as conIdioma, r as useI18n } from "./src_CK36QlIG.mjs";
import { r as CampoInstalar, t as LoteMap } from "./HomePage_CQDLM_8o.mjs";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { PiArrowDownBold } from "react-icons/pi";
import { FaAndroid, FaApple, FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
//#region src/hooks/useIntersectionObserver.js
var useIntersectionObserver = (options = {}) => {
	const elementRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (options.triggerOnce !== false) observer.disconnect();
			} else if (options.triggerOnce === false) setIsVisible(false);
		}, {
			root: null,
			rootMargin: "0px",
			threshold: .1,
			...options
		});
		const currentElement = elementRef.current;
		if (currentElement) observer.observe(currentElement);
		return () => {
			if (currentElement) observer.unobserve(currentElement);
		};
	}, [options]);
	return [elementRef, isVisible];
};
//#endregion
//#region src/components/Reveal.jsx
var Reveal = ({ children, className = "", id, delay }) => {
	const [ref, isVisible] = useIntersectionObserver({
		threshold: .15,
		triggerOnce: true
	});
	const delayClass = delay ? `rp-reveal--delay-${delay}` : "";
	return /* @__PURE__ */ jsx("div", {
		id,
		ref,
		className: `rp-reveal ${delayClass} ${isVisible ? "rp-is-visible" : ""} ${className}`,
		children
	});
};
//#endregion
//#region src/assets/campo/pampa-avion.webp
var pampa_avion_default = new Proxy({
	"src": "/assets/pampa-avion.BNwpczKz.webp",
	"width": 1920,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/pampa-avion.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/pampa-avion.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/pampa-avion.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/pampa-avion-1100.webp
var pampa_avion_1100_default = new Proxy({
	"src": "/assets/pampa-avion-1100.CXukT37-.webp",
	"width": 1100,
	"height": 619,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/pampa-avion-1100.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/pampa-avion-1100.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/pampa-avion-1100.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/soja-atardecer.webp
var soja_atardecer_default = new Proxy({
	"src": "/assets/soja-atardecer.CQTKi0dY.webp",
	"width": 2048,
	"height": 1536,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/soja-atardecer.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/soja-atardecer.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/soja-atardecer.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/soja-atardecer-1100.webp
var soja_atardecer_1100_default = new Proxy({
	"src": "/assets/soja-atardecer-1100.lxPGnJoD.webp",
	"width": 1100,
	"height": 825,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/soja-atardecer-1100.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/soja-atardecer-1100.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/soja-atardecer-1100.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/girasol-tormenta.webp
var girasol_tormenta_default = new Proxy({
	"src": "/assets/girasol-tormenta.CZDsdYof.webp",
	"width": 1920,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/girasol-tormenta.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/girasol-tormenta.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/girasol-tormenta.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/girasol-tormenta-1100.webp
var girasol_tormenta_1100_default = new Proxy({
	"src": "/assets/girasol-tormenta-1100.AD7ZMXZe.webp",
	"width": 1100,
	"height": 619,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/girasol-tormenta-1100.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/girasol-tormenta-1100.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/girasol-tormenta-1100.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/cosecha-soja.webp
var cosecha_soja_default = new Proxy({
	"src": "/assets/cosecha-soja.DhaELixS.webp",
	"width": 1920,
	"height": 1440,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/cosecha-soja.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/cosecha-soja.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/cosecha-soja.webp");
	}
	return target[name];
} });
//#endregion
//#region src/assets/campo/cosecha-soja-1100.webp
var cosecha_soja_1100_default = new Proxy({
	"src": "/assets/cosecha-soja-1100.BeRb2SO_.webp",
	"width": 1100,
	"height": 825,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/cosecha-soja-1100.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/cosecha-soja-1100.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/campo/cosecha-soja-1100.webp");
	}
	return target[name];
} });
//#endregion
//#region src/components/HomePage.jsx
var BENEFIT_PHOTOS = [
	{
		id: "lote",
		src: pampa_avion_default,
		srcSm: pampa_avion_1100_default,
		w: 1100,
		pos: "50% 50%"
	},
	{
		id: "detalle",
		src: soja_atardecer_default,
		srcSm: soja_atardecer_1100_default,
		w: 1100,
		pos: "50% 60%"
	},
	{
		id: "cuando",
		src: girasol_tormenta_default,
		srcSm: girasol_tormenta_1100_default,
		w: 1100,
		pos: "50% 70%"
	},
	{
		id: "independiente",
		src: cosecha_soja_default,
		srcSm: cosecha_soja_1100_default,
		w: 1100,
		pos: "60% 55%"
	}
];
var HeroSection = () => {
	const { dict } = useI18n();
	const t = dict.hero;
	return /* @__PURE__ */ jsxs("div", {
		className: "rp-home__hero-inner",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rp-home__hero-text",
			children: [
				/* @__PURE__ */ jsxs("h1", {
					className: "rp-home__hero-title rp-rise rp-d-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "rp-home__hero-title-a",
						children: t.titleA
					}), /* @__PURE__ */ jsx("span", {
						className: "rp-home__hero-title-accent",
						children: t.titleB
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "rp-home__hero-subtitle rp-rise rp-d-3",
					children: t.subtitle
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rp-home__hero-ctas rp-fade-in rp-d-4",
					children: [/* @__PURE__ */ jsxs("a", {
						href: whatsappUrl(dict.whatsapp.message),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rp-home__hero-btn rp-home__hero-btn--primary rp-home__hero-btn--whatsapp",
						children: [/* @__PURE__ */ jsx(FaWhatsapp, { "aria-hidden": "true" }), t.ctaTalk]
					}), /* @__PURE__ */ jsxs("a", {
						href: "#funcionalidades",
						className: "rp-home__hero-btn rp-home__hero-btn--ghost",
						children: [t.ctaCampaign, /* @__PURE__ */ jsx(PiArrowDownBold, { "aria-hidden": "true" })]
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "rp-home__hero-visual rp-fade-in rp-d-3",
			children: /* @__PURE__ */ jsx(LoteMap, {
				aria: t.mapAria,
				avisos: t.avisos
			})
		})]
	});
};
var SLIDE_MS = 15e3;
var BenefitsSection = () => {
	const t = useI18n().dict.benefits;
	const ref = useRef(null);
	const touchX = useRef(null);
	const [active, setActive] = useState(0);
	const [visible, setVisible] = useState(false);
	const [autoplay, setAutoplay] = useState(true);
	const running = autoplay && visible;
	const n = BENEFIT_PHOTOS.length;
	const go = (i) => setActive((i + n) % n);
	useEffect(() => {
		const el = ref.current;
		if (!el) return void 0;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAutoplay(false);
		let inView = false;
		const sync = () => setVisible(inView && !document.hidden);
		const io = new IntersectionObserver(([e]) => {
			inView = e.isIntersecting;
			sync();
		}, { threshold: .15 });
		io.observe(el);
		document.addEventListener("visibilitychange", sync);
		return () => {
			io.disconnect();
			document.removeEventListener("visibilitychange", sync);
		};
	}, []);
	useEffect(() => {
		if (!running) return void 0;
		const id = setTimeout(() => setActive((a) => (a + 1) % n), SLIDE_MS);
		return () => clearTimeout(id);
	}, [
		running,
		active,
		n
	]);
	const onKeyDown = (e) => {
		if (e.key === "ArrowRight") {
			e.preventDefault();
			go(active + 1);
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			go(active - 1);
		}
	};
	const onTouchStart = (e) => {
		touchX.current = {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		};
	};
	const onTouchEnd = (e) => {
		if (touchX.current == null) return;
		const dx = e.changedTouches[0].clientX - touchX.current.x;
		const dy = e.changedTouches[0].clientY - touchX.current.y;
		touchX.current = null;
		if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) go(active + (dx < 0 ? 1 : -1));
	};
	return /* @__PURE__ */ jsxs("section", {
		ref,
		className: "rp-home__section rp-home__section--field",
		id: "beneficios",
		onTouchStart,
		onTouchEnd,
		children: [/* @__PURE__ */ jsx("div", {
			className: "rp-fieldbg",
			"aria-hidden": "true",
			children: BENEFIT_PHOTOS.map((photo, i) => /* @__PURE__ */ jsx("img", {
				className: `rp-fieldbg__img${i === active ? " is-active" : ""}`,
				src: urlDe(photo.src),
				srcSet: `${urlDe(photo.srcSm)} ${photo.w}w, ${urlDe(photo.src)} 1920w`,
				sizes: "100vw",
				style: { objectPosition: photo.pos },
				alt: "",
				loading: "lazy",
				decoding: "async"
			}, photo.id))
		}), /* @__PURE__ */ jsxs("div", {
			className: "rp-benefit-slider",
			role: "region",
			"aria-roledescription": t.roledesc,
			"aria-label": t.aria,
			onKeyDown,
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "rp-benefit-slider__rotulo",
					children: t.aria
				}),
				/* @__PURE__ */ jsx("ol", {
					className: "rp-benefit-slider__stage",
					children: t.items.map((b, i) => /* @__PURE__ */ jsxs("li", {
						className: `rp-benefit-slider__slide${i === active ? " is-active" : ""}`,
						"aria-hidden": i !== active,
						inert: i !== active,
						"aria-roledescription": t.slideRoledesc,
						"aria-label": t.slideLabel(i + 1, n),
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "rp-benefit-slider__title",
								children: b.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "rp-benefit-slider__lead",
								children: b.copy
							}),
							/* @__PURE__ */ jsx("p", {
								className: "rp-benefit-slider__detail",
								children: b.detail
							})
						]
					}, BENEFIT_PHOTOS[i].id))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: `rp-fieldbg__nav${running ? " is-running" : ""}`,
					children: [
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "rp-fieldbg__arrow",
							"aria-label": t.prev,
							onClick: () => go(active - 1),
							children: /* @__PURE__ */ jsx(FaChevronLeft, { "aria-hidden": "true" })
						}),
						t.items.map((b, i) => /* @__PURE__ */ jsx("button", {
							type: "button",
							className: `rp-fieldbg__dot${i === active ? " is-active" : ""}`,
							"aria-label": t.dotLabel(i + 1, b.title),
							"aria-current": i === active ? "true" : void 0,
							onClick: () => go(i),
							children: /* @__PURE__ */ jsx("span", {
								className: "rp-fieldbg__bar",
								style: { "--rp-slide-ms": `${SLIDE_MS}ms` }
							})
						}, BENEFIT_PHOTOS[i].id)),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "rp-fieldbg__arrow",
							"aria-label": t.next,
							onClick: () => go(active + 1),
							children: /* @__PURE__ */ jsx(FaChevronRight, { "aria-hidden": "true" })
						})
					]
				})
			]
		})]
	});
};
var FinalCta = () => {
	const { dict } = useI18n();
	const t = dict.cta;
	return /* @__PURE__ */ jsx("section", {
		className: "rp-home__cta",
		id: "contacto",
		"data-fondo-oscuro": true,
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "rp-home__cta-panel",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "rp-home__cta-title",
					children: t.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "rp-home__cta-vision",
					children: t.vision
				}),
				/* @__PURE__ */ jsxs("a", {
					href: whatsappUrl(dict.whatsapp.message),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "rp-home__hero-btn rp-home__cta-btn",
					children: [/* @__PURE__ */ jsx(FaWhatsapp, { "aria-hidden": "true" }), t.button]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "rp-home__cta-hint",
					children: t.hint
				})
			]
		})
	});
};
var INSTALL_GUIDES = [{
	id: "ios",
	icon: /* @__PURE__ */ jsx(FaApple, {})
}, {
	id: "android",
	icon: /* @__PURE__ */ jsx(FaAndroid, {})
}];
var InstallAppSection = () => {
	const t = useI18n().dict.install;
	return /* @__PURE__ */ jsxs("section", {
		className: "rp-install",
		id: "instalar",
		children: [/* @__PURE__ */ jsx("div", {
			className: "rp-install__bg",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx(CampoInstalar, {})
		}), /* @__PURE__ */ jsxs("div", {
			className: "rp-install__inner",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "rp-install__header",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "rp-install__title",
					children: [t.titleA, /* @__PURE__ */ jsx("span", {
						className: "rp-install__title-accent",
						children: t.titleB
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "rp-install__subtitle",
					children: t.subtitle
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "rp-install__grid",
				children: INSTALL_GUIDES.map(({ id, icon }, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i + 1,
					children: /* @__PURE__ */ jsxs("article", {
						className: `rp-install__card rp-install__card--${id}`,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "rp-install__top",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rp-install__icon",
								children: icon
							}), /* @__PURE__ */ jsx("h3", {
								className: "rp-install__name",
								children: t[id].name
							})]
						}), /* @__PURE__ */ jsx("ol", {
							className: "rp-install__steps",
							children: t[id].steps.map((step, n) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "rp-install__punto",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx("div", {
								className: "rp-install__step-text",
								children: step
							})] }, n))
						})]
					})
				}, id))
			})]
		})]
	});
};
var Hero = conIdioma(HeroSection);
var Benefits = conIdioma(BenefitsSection);
var CtaFinal = conIdioma(FinalCta);
var InstallApp = conIdioma(InstallAppSection);
//#endregion
export { Reveal as a, InstallApp as i, CtaFinal as n, useIntersectionObserver as o, Hero as r, Benefits as t };
