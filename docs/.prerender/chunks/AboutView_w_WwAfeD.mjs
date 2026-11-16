import { a as renderComponent, f as renderTemplate } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { i as createAstro, n as urlDe, t as $$BaseLayout } from "./BaseLayout_CUy8ZWoM.mjs";
import { n as conIdioma, p as idiomaDe, r as useI18n, t as DICTIONARIES, u as NOSOTROS_PATH } from "./src_CK36QlIG.mjs";
/* empty css                     */
import { n as CtaFinal } from "./HomePage_DmNEWE6z.mjs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { PiArrowRight, PiPath, PiPlant, PiUsersThree } from "react-icons/pi";
//#region src/assets/equipo/marcos-flesia.webp
var marcos_flesia_default = new Proxy({
	"src": "/assets/marcos-flesia.xyNJ3lxZ.webp",
	"width": 320,
	"height": 320,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/equipo/marcos-flesia.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/equipo/marcos-flesia.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/equipo/marcos-flesia.webp");
	}
	return target[name];
} });
//#endregion
//#region src/components/AboutPage.jsx
var ADDRESS = "Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina";
var MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
var MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;
var DosLotes = ({ t }) => /* @__PURE__ */ jsxs("figure", {
	className: "rp-doslotes",
	"aria-label": t.aria,
	children: [
		/* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 480 360",
			className: "rp-doslotes__mapa",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsxs("defs", { children: [
					/* @__PURE__ */ jsx("clipPath", {
						id: "rpLoteA",
						children: /* @__PURE__ */ jsx("path", { d: "M20 40 L250 24 L232 330 L12 316 Z" })
					}),
					/* @__PURE__ */ jsx("clipPath", {
						id: "rpLoteB",
						children: /* @__PURE__ */ jsx("path", { d: "M250 24 L466 46 L458 322 L232 330 Z" })
					}),
					/* @__PURE__ */ jsx("pattern", {
						id: "rpSurcosA",
						width: "9",
						height: "9",
						patternUnits: "userSpaceOnUse",
						patternTransform: "rotate(-4)",
						children: /* @__PURE__ */ jsx("line", {
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "9",
							className: "dg-surco"
						})
					}),
					/* @__PURE__ */ jsx("pattern", {
						id: "rpSurcosB",
						width: "9",
						height: "9",
						patternUnits: "userSpaceOnUse",
						patternTransform: "rotate(84)",
						children: /* @__PURE__ */ jsx("line", {
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "9",
							className: "dg-surco"
						})
					})
				] }),
				/* @__PURE__ */ jsxs("g", {
					clipPath: "url(#rpLoteA)",
					children: [
						/* @__PURE__ */ jsx("rect", {
							width: "480",
							height: "360",
							className: "dg-amb--alto"
						}),
						/* @__PURE__ */ jsx("path", {
							className: "dg-amb--alto-claro",
							d: "M0 176 C 80 146, 160 206, 260 166 V360 H0 Z"
						}),
						/* @__PURE__ */ jsx("path", {
							className: "dg-amb--medio",
							d: "M0 262 C 80 242, 170 292, 260 252 V360 H0 Z"
						}),
						/* @__PURE__ */ jsx("rect", {
							width: "480",
							height: "360",
							fill: "url(#rpSurcosA)"
						})
					]
				}),
				/* @__PURE__ */ jsxs("g", {
					clipPath: "url(#rpLoteB)",
					children: [
						/* @__PURE__ */ jsx("rect", {
							width: "480",
							height: "360",
							className: "dg-amb--bajo"
						}),
						/* @__PURE__ */ jsx("path", {
							className: "dg-amb--medio",
							d: "M220 0 H480 V112 C 400 142, 320 92, 220 132 Z"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							className: "dg-amb--bajo-fuerte",
							cx: "372",
							cy: "252",
							rx: "72",
							ry: "44"
						}),
						/* @__PURE__ */ jsx("rect", {
							width: "480",
							height: "360",
							fill: "url(#rpSurcosB)"
						})
					]
				}),
				/* @__PURE__ */ jsx("path", {
					className: "dg-contorno",
					d: "M20 40 L250 24 L232 330 L12 316 Z"
				}),
				/* @__PURE__ */ jsx("path", {
					className: "dg-contorno",
					d: "M250 24 L466 46 L458 322 L232 330 Z"
				}),
				/* @__PURE__ */ jsxs("g", {
					className: "dg-pildora",
					children: [
						/* @__PURE__ */ jsx("rect", {
							x: "40",
							y: "52",
							width: "70",
							height: "22",
							rx: "11"
						}),
						/* @__PURE__ */ jsx("text", {
							x: "75",
							y: "67",
							textAnchor: "middle",
							children: t.a.nombre
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "374",
							y: "288",
							width: "70",
							height: "22",
							rx: "11"
						}),
						/* @__PURE__ */ jsx("text", {
							x: "409",
							y: "303",
							textAnchor: "middle",
							children: t.b.nombre
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "rp-aviso rp-aviso--a",
			children: [/* @__PURE__ */ jsx("span", {
				className: "rp-aviso__marca",
				"aria-hidden": "true"
			}), /* @__PURE__ */ jsxs("span", { children: [
				/* @__PURE__ */ jsx("strong", { children: t.a.nombre }),
				" ",
				t.a.aviso
			] })]
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "rp-aviso rp-aviso--b",
			children: [/* @__PURE__ */ jsx("span", {
				className: "rp-aviso__marca",
				"aria-hidden": "true"
			}), /* @__PURE__ */ jsxs("span", { children: [
				/* @__PURE__ */ jsx("strong", { children: t.b.nombre }),
				" ",
				t.b.aviso
			] })]
		})
	]
});
var ICONOS_SOMOS = [
	PiUsersThree,
	PiPlant,
	PiPath
];
var About = () => {
	const t = useI18n().dict.paginas.nosotros;
	const a = t.anatomia;
	const m = a.mensaje;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "rp-ab-empresa",
			id: "top",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rp-ab-empresa__texto",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "rp-ab-empresa__titulo rp-fade-in rp-d-1",
					children: t.title
				}), /* @__PURE__ */ jsx("p", {
					className: "rp-ab-empresa__lead rp-fade-in rp-d-3",
					children: t.lead
				})]
			}), /* @__PURE__ */ jsx("ul", {
				className: "rp-somos",
				children: t.bloques.map((b, i) => {
					const Icono = ICONOS_SOMOS[i];
					return /* @__PURE__ */ jsxs("li", {
						className: `rp-somos__bloque rp-fade-in rp-d-${i + 3}`,
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "rp-somos__titulo",
							children: [/* @__PURE__ */ jsx(Icono, { "aria-hidden": "true" }), b.titulo]
						}), /* @__PURE__ */ jsx("p", {
							className: "rp-somos__texto",
							children: b.texto
						})]
					}, b.titulo);
				})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "rp-ab-intro",
			id: "idea",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rp-ab-intro__texto rp-reveal",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "rp-kicker",
						children: t.idea.kicker
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "rp-ab-intro__titulo",
						children: t.idea.titulo
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rp-ab-intro__lead",
						children: t.idea.lead
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "rp-ab-intro__visual rp-reveal rp-reveal--delay-1",
				children: /* @__PURE__ */ jsx(DosLotes, { t: t.dosLotes })
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "rp-anatomia",
			id: "como-pensamos",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rp-anatomia__texto rp-reveal",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "rp-kicker",
						children: a.kicker
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "rp-ab-h2",
						children: a.titulo
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rp-ab-bajada",
						children: a.bajada
					}),
					/* @__PURE__ */ jsx("ol", {
						className: "rp-anatomia__partes",
						children: a.partes.map((p, i) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
							className: `rp-marca rp-marca--${i + 1}`,
							"aria-hidden": "true",
							children: i + 1
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: p.titulo }), /* @__PURE__ */ jsx("p", { children: p.texto })] })] }, p.titulo))
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "rp-anatomia__pantalla rp-reveal rp-reveal--delay-1",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rp-mensaje",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "rp-mensaje__cabecera",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "rp-aviso__marca",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("strong", { children: "Rinde Plus" }),
								/* @__PURE__ */ jsx("span", { children: m.hora })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "rp-mensaje__titulo",
							children: m.encabezado
						}),
						/* @__PURE__ */ jsx("p", {
							className: "rp-mensaje__lote",
							children: m.lote
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "rp-mensaje__linea",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rp-marca rp-marca--1",
								"aria-hidden": "true",
								children: "1"
							}), /* @__PURE__ */ jsx("span", {
								className: "rp-mensaje__resalte rp-mensaje__resalte--1",
								children: m.medido
							})]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "rp-mensaje__linea",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rp-marca rp-marca--2",
								"aria-hidden": "true",
								children: "2"
							}), /* @__PURE__ */ jsx("span", {
								className: "rp-mensaje__resalte rp-mensaje__resalte--2",
								children: m.criterio
							})]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "rp-mensaje__linea",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rp-marca rp-marca--3",
								"aria-hidden": "true",
								children: "3"
							}), /* @__PURE__ */ jsx("span", {
								className: "rp-mensaje__resalte rp-mensaje__resalte--3",
								children: m.decision
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "rp-nohacemos",
			id: "lo-que-no-hacemos",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "rp-kicker rp-reveal",
				children: t.compromisos.titulo
			}), /* @__PURE__ */ jsx("ul", { children: t.compromisos.items.map((c) => /* @__PURE__ */ jsxs("li", {
				className: "rp-reveal",
				children: [/* @__PURE__ */ jsx("h3", { children: c.titulo }), /* @__PURE__ */ jsx("p", { children: c.texto })]
			}, c.titulo)) })]
		})
	] });
};
var FOTOS = { "Marcos Flesia": marcos_flesia_default };
var Persona = ({ m, i }) => {
	const foto = FOTOS[m.nombre];
	return /* @__PURE__ */ jsxs("li", {
		className: `rp-persona rp-persona--${m.area} rp-reveal rp-reveal--delay-${Math.min(i + 1, 4)}`,
		children: [foto && /* @__PURE__ */ jsx("img", {
			className: "rp-persona__foto",
			src: urlDe(foto),
			alt: "",
			width: "80",
			height: "80",
			loading: "lazy",
			decoding: "async"
		}), /* @__PURE__ */ jsxs("div", {
			className: "rp-persona__texto",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "rp-persona__nombre",
					children: m.nombre
				}),
				m.cargo && /* @__PURE__ */ jsx("p", {
					className: "rp-persona__cargo",
					children: m.cargo
				}),
				/* @__PURE__ */ jsx("p", {
					className: "rp-persona__profesion",
					children: m.profesion
				})
			]
		})]
	});
};
var Equipo = () => {
	const t = useI18n().dict.paginas.nosotros.equipo;
	const [principal, ...resto] = t.miembros;
	return /* @__PURE__ */ jsxs("section", {
		className: "rp-equipo",
		id: "equipo",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "rp-equipo__head rp-reveal",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "rp-kicker",
						children: t.kicker
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "rp-ab-h2",
						children: t.titulo
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rp-ab-bajada",
						children: t.bajada
					})
				]
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "rp-equipo__grupo rp-equipo__grupo--principal",
				children: /* @__PURE__ */ jsx(Persona, {
					m: principal,
					i: 0
				})
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "rp-equipo__grupo",
				children: resto.map((m, i) => /* @__PURE__ */ jsx(Persona, {
					m,
					i: i + 1
				}, m.nombre))
			})
		]
	});
};
var Lugar = () => {
	const t = useI18n().dict.paginas.nosotros.lugar;
	return /* @__PURE__ */ jsx("section", {
		className: "rp-lugar",
		id: "donde",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rp-lugar__ficha rp-reveal",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rp-lugar__texto",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "rp-kicker",
						children: t.kicker
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "rp-ab-h2",
						children: t.titulo
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rp-ab-bajada",
						children: t.texto
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rp-lugar__direccion",
						children: t.direccion
					}),
					/* @__PURE__ */ jsxs("a", {
						className: "rp-page__link",
						href: MAPS_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [t.mapa, /* @__PURE__ */ jsx(PiArrowRight, { "aria-hidden": "true" })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "rp-lugar__mapa",
				children: /* @__PURE__ */ jsx("iframe", {
					src: MAPS_EMBED,
					title: t.direccion,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		})
	});
};
var AboutContent = conIdioma(About);
var AboutEquipo = conIdioma(Equipo);
var AboutLugar = conIdioma(Lugar);
//#endregion
//#region src/views/AboutView.astro
createAstro("https://rindeplus.com");
var $$AboutView = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AboutView;
	const lang = idiomaDe(Astro.currentLocale);
	const { meta } = DICTIONARIES[lang].paginas.nosotros;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": meta.title,
		"description": meta.description,
		"paths": NOSOTROS_PATH
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AboutContent", AboutContent, { "lang": lang })}${renderComponent($$result, "AboutEquipo", AboutEquipo, { "lang": lang })}${renderComponent($$result, "AboutLugar", AboutLugar, { "lang": lang })}${renderComponent($$result, "CtaFinal", CtaFinal, { "lang": lang })}` })}`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/views/AboutView.astro", void 0);
//#endregion
export { $$AboutView as t };
