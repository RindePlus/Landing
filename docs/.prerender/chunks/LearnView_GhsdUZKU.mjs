import { a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_Drd9-UE6.mjs";
import { t as createComponent } from "./compiler_D9OSEWFj.mjs";
import { i as createAstro, n as urlDe, t as $$BaseLayout } from "./BaseLayout_CUy8ZWoM.mjs";
import { a as EDUCACION_PATH, n as conIdioma, p as idiomaDe, r as useI18n, t as DICTIONARIES } from "./src_CK36QlIG.mjs";
/* empty css                     */
import { n as CtaFinal } from "./HomePage_DmNEWE6z.mjs";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { PiArrowCounterClockwise } from "react-icons/pi";
//#region src/components/LearnDiagramas.jsx
var Svg = ({ children, label }) => /* @__PURE__ */ jsx("svg", {
	viewBox: "0 0 320 200",
	className: "dg",
	role: "img",
	"aria-label": label,
	children
});
var DiagramaAmbientes = ({ e, label }) => /* @__PURE__ */ jsxs(Svg, {
	label,
	children: [
		/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsx("clipPath", {
			id: "dgLote",
			children: /* @__PURE__ */ jsx("path", { d: "M24 30 L296 18 L306 176 L18 186 Z" })
		}), /* @__PURE__ */ jsx("pattern", {
			id: "dgSurcos",
			width: "9",
			height: "9",
			patternUnits: "userSpaceOnUse",
			patternTransform: "rotate(-8)",
			children: /* @__PURE__ */ jsx("line", {
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "9",
				className: "dg-surco"
			})
		})] }),
		/* @__PURE__ */ jsxs("g", {
			clipPath: "url(#dgLote)",
			children: [
				/* @__PURE__ */ jsx("path", {
					className: "dg-amb dg-amb--alto",
					d: "M0 0 H320 V64 C 230 84, 140 48, 0 96 Z"
				}),
				/* @__PURE__ */ jsx("path", {
					className: "dg-amb dg-amb--medio",
					d: "M0 96 C 140 48, 230 84, 320 64 V122 C 232 140, 122 104, 0 152 Z"
				}),
				/* @__PURE__ */ jsx("path", {
					className: "dg-amb dg-amb--bajo",
					d: "M0 152 C 122 104, 232 140, 320 122 V200 H0 Z"
				}),
				/* @__PURE__ */ jsx("rect", {
					width: "320",
					height: "200",
					fill: "url(#dgSurcos)"
				})
			]
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-contorno",
			d: "M24 30 L296 18 L306 176 L18 186 Z"
		}),
		/* @__PURE__ */ jsxs("g", {
			className: "dg-pildora",
			children: [
				/* @__PURE__ */ jsx("rect", {
					x: "196",
					y: "34",
					width: "56",
					height: "20",
					rx: "10"
				}),
				/* @__PURE__ */ jsx("text", {
					x: "224",
					y: "48",
					textAnchor: "middle",
					children: e.alto
				}),
				/* @__PURE__ */ jsx("rect", {
					x: "64",
					y: "98",
					width: "62",
					height: "20",
					rx: "10"
				}),
				/* @__PURE__ */ jsx("text", {
					x: "95",
					y: "112",
					textAnchor: "middle",
					children: e.medio
				}),
				/* @__PURE__ */ jsx("rect", {
					x: "206",
					y: "150",
					width: "54",
					height: "20",
					rx: "10"
				}),
				/* @__PURE__ */ jsx("text", {
					x: "233",
					y: "164",
					textAnchor: "middle",
					children: e.bajo
				})
			]
		})
	]
});
var DiagramaAguaUtil = ({ e, label }) => {
	const x0 = 30;
	const ancho = 260;
	return /* @__PURE__ */ jsxs(Svg, {
		label,
		children: [
			/* @__PURE__ */ jsxs("text", {
				className: "dg-label",
				x: x0,
				y: "58",
				children: [e.hoy, " · 48 %"]
			}),
			/* @__PURE__ */ jsx("rect", {
				className: "dg-pista",
				x: x0,
				y: "70",
				width: ancho,
				height: "36",
				rx: "8"
			}),
			/* @__PURE__ */ jsx("rect", {
				className: "dg-agua",
				x: x0,
				y: "70",
				width: ancho * .48,
				height: "36",
				rx: "8"
			}),
			[
				.25,
				.5,
				.75
			].map((p) => /* @__PURE__ */ jsx("line", {
				className: "dg-tick",
				x1: x0 + ancho * p,
				y1: "106",
				x2: x0 + ancho * p,
				y2: "112"
			}, p)),
			/* @__PURE__ */ jsx("line", {
				className: "dg-umbral",
				x1: 186,
				y1: "62",
				x2: 186,
				y2: "114"
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label dg-label--fuerte",
				x: 192,
				y: "58",
				children: e.umbral
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-dato",
				x: x0,
				y: "132",
				children: "0 %"
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-dato",
				x: 290,
				y: "132",
				textAnchor: "end",
				children: "100 %"
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: x0,
				y: "150",
				children: e.pmp
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: 290,
				y: "150",
				textAnchor: "end",
				children: e.cc
			})
		]
	});
};
var DiagramaCarryOver = ({ e, label }) => /* @__PURE__ */ jsxs(Svg, {
	label,
	children: [
		/* @__PURE__ */ jsx("line", {
			className: "dg-eje",
			x1: "34",
			y1: "22",
			x2: "34",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-eje",
			x1: "34",
			y1: "160",
			x2: "300",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-limite",
			x1: "34",
			y1: "104",
			x2: "300",
			y2: "104"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label dg-label--peligro",
			x: "296",
			y: "96",
			textAnchor: "end",
			children: e.limite
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-curva",
			d: "M36 30 C 86 66, 128 88, 186 104 C 226 115, 262 124, 300 130"
		}),
		/* @__PURE__ */ jsx("circle", {
			className: "dg-punto dg-punto--neutro",
			cx: "36",
			cy: "30",
			r: "4"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-guia",
			x1: "120",
			y1: "84",
			x2: "120",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("circle", {
			className: "dg-punto dg-punto--peligro",
			cx: "120",
			cy: "84",
			r: "4.5"
		}),
		/* @__PURE__ */ jsx("circle", {
			className: "dg-punto",
			cx: "186",
			cy: "104",
			r: "4.5"
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-llave",
			d: "M120 172 V178 H186 V172"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label dg-label--fuerte",
			x: "153",
			y: "194",
			textAnchor: "middle",
			children: e.espera
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "36",
			y: "176",
			children: e.aplicacion
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "116",
			y: "152",
			textAnchor: "end",
			children: e.siembra
		})
	]
});
var DiagramaDosis = ({ e, label }) => /* @__PURE__ */ jsxs(Svg, {
	label,
	children: [
		/* @__PURE__ */ jsx("line", {
			className: "dg-eje",
			x1: "34",
			y1: "22",
			x2: "34",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-eje",
			x1: "34",
			y1: "160",
			x2: "300",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "300",
			y: "178",
			textAnchor: "end",
			children: e.dosis
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "42",
			y: "30",
			children: e.rinde
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-area",
			d: "M36 150 C 80 92, 140 60, 200 48 C 228 43, 256 42, 296 47 L296 160 L36 160 Z"
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-curva",
			d: "M36 150 C 80 92, 140 60, 200 48 C 228 43, 256 42, 296 47"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-guia",
			x1: "168",
			y1: "54",
			x2: "168",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-guia dg-guia--tenue",
			x1: "250",
			y1: "42",
			x2: "250",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("circle", {
			className: "dg-punto",
			cx: "168",
			cy: "54",
			r: "5"
		}),
		/* @__PURE__ */ jsx("circle", {
			className: "dg-punto dg-punto--neutro",
			cx: "250",
			cy: "42",
			r: "4"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label dg-label--fuerte",
			x: "164",
			y: "178",
			textAnchor: "middle",
			children: e.optima
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "250",
			y: "32",
			textAnchor: "middle",
			children: e.maximo
		})
	]
});
var DiagramaBalance = ({ e, label }) => /* @__PURE__ */ jsxs(Svg, {
	label,
	children: [
		/* @__PURE__ */ jsx("rect", {
			className: "dg-franja",
			x: "150",
			y: "18",
			width: "100",
			height: "142",
			rx: "4"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label dg-label--fuerte",
			x: "200",
			y: "34",
			textAnchor: "middle",
			children: e.critico
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-eje",
			x1: "30",
			y1: "160",
			x2: "300",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-umbral",
			x1: "30",
			y1: "100",
			x2: "300",
			y2: "100"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "34",
			y: "94",
			children: e.umbral
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-curva",
			d: "M30 52 C 60 46, 84 66, 112 72 C 140 78, 164 108, 192 116 C 206 120, 214 112, 222 106"
		}),
		/* @__PURE__ */ jsx("path", {
			className: "dg-curva dg-curva--pronostico",
			d: "M222 106 C 240 98, 262 82, 300 72"
		}),
		/* @__PURE__ */ jsx("line", {
			className: "dg-guia",
			x1: "222",
			y1: "106",
			x2: "222",
			y2: "160"
		}),
		/* @__PURE__ */ jsx("circle", {
			className: "dg-punto",
			cx: "222",
			cy: "106",
			r: "4.5"
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "222",
			y: "178",
			textAnchor: "middle",
			children: e.hoy
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "296",
			y: "178",
			textAnchor: "end",
			children: e.pronostico
		})
	]
});
var DPV = [
	92,
	98,
	60,
	96,
	104,
	88,
	52,
	48,
	44,
	50,
	90,
	100,
	94,
	138,
	106
];
var DiagramaDpv = ({ e, label }) => {
	const x = (i) => 40 + i * 18;
	const linea = DPV.map((v, i) => `${i ? "L" : "M"}${x(i)} ${v}`).join(" ");
	return /* @__PURE__ */ jsxs(Svg, {
		label,
		children: [
			/* @__PURE__ */ jsx("rect", {
				className: "dg-zona dg-zona--alto",
				x: "30",
				y: "20",
				width: "276",
				height: "46"
			}),
			/* @__PURE__ */ jsx("rect", {
				className: "dg-zona dg-zona--sano",
				x: "30",
				y: "66",
				width: "276",
				height: "58"
			}),
			/* @__PURE__ */ jsx("rect", {
				className: "dg-zona dg-zona--bajo",
				x: "30",
				y: "124",
				width: "276",
				height: "40"
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: "300",
				y: "34",
				textAnchor: "end",
				children: e.alto
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: "300",
				y: "80",
				textAnchor: "end",
				children: e.sano
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: "300",
				y: "158",
				textAnchor: "end",
				children: e.bajo
			}),
			/* @__PURE__ */ jsx("path", {
				className: "dg-curva dg-curva--fina",
				d: linea
			}),
			DPV.map((v, i) => /* @__PURE__ */ jsx("circle", {
				className: `dg-punto ${v < 66 ? "dg-punto--alerta" : v > 124 ? "dg-punto--neutro" : ""}`,
				cx: x(i),
				cy: v,
				r: "3.5"
			}, i)),
			/* @__PURE__ */ jsx("path", {
				className: "dg-llave",
				d: "M144 38 V32 H198 V38"
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: "40",
				y: "182",
				children: e.dias
			})
		]
	});
};
var ndvi = (c, r) => {
	const mancha = Math.hypot(c - 3, r - 6) / 4;
	const franja = (c + (7 - r)) / 20;
	const v = .25 + Math.min(1, mancha) * .45 + franja * .35 + ((c * 7 + r * 13) % 5 - 2) * .03;
	return Math.max(0, Math.min(4, Math.floor(v * 4.2)));
};
var DiagramaNdvi = ({ e, label }) => /* @__PURE__ */ jsxs(Svg, {
	label,
	children: [
		Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => /* @__PURE__ */ jsx("rect", {
			className: `dg-px dg-px--${ndvi(c, r)}`,
			x: 20 + c * 20,
			y: 14 + r * 18,
			width: "19",
			height: "17"
		}, `${r}-${c}`))),
		[
			0,
			1,
			2,
			3,
			4
		].map((n) => /* @__PURE__ */ jsx("rect", {
			className: `dg-px dg-px--${n}`,
			x: 196 + n * 20,
			y: "172",
			width: "19",
			height: "10"
		}, n)),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "190",
			y: "181",
			textAnchor: "end",
			children: e.bajo
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "300",
			y: "196",
			textAnchor: "end",
			children: e.alto
		}),
		/* @__PURE__ */ jsx("text", {
			className: "dg-label",
			x: "20",
			y: "181",
			children: e.pixel
		})
	]
});
var DiagramaBrecha = ({ e, label }) => {
	const piso = 164;
	const barras = [
		{
			id: "base",
			h: 62
		},
		{
			id: "fertilizando",
			h: 96
		},
		{
			id: "cosechado",
			h: 86,
			fuerte: true
		},
		{
			id: "potencial",
			h: 132,
			techo: true
		}
	];
	const techo = 32;
	return /* @__PURE__ */ jsxs(Svg, {
		label,
		children: [
			/* @__PURE__ */ jsx("line", {
				className: "dg-limite dg-limite--techo",
				x1: "24",
				y1: techo,
				x2: "300",
				y2: techo
			}),
			barras.map((b, i) => /* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("rect", {
				className: `dg-barra${b.fuerte ? " dg-barra--fuerte" : ""}${b.techo ? " dg-barra--techo" : ""}`,
				x: 36 + i * 62,
				y: piso - b.h,
				width: "40",
				height: b.h,
				rx: "4"
			}), /* @__PURE__ */ jsx("text", {
				className: "dg-label",
				x: 56 + i * 62,
				y: 182,
				textAnchor: "middle",
				children: e[b.id]
			})] }, b.id)),
			/* @__PURE__ */ jsx("rect", {
				className: "dg-hueco",
				x: "160",
				y: techo,
				width: "40",
				height: 46,
				rx: "4"
			}),
			/* @__PURE__ */ jsx("text", {
				className: "dg-label dg-label--fuerte",
				x: "180",
				y: 24,
				textAnchor: "middle",
				children: e.brecha
			}),
			/* @__PURE__ */ jsx("line", {
				className: "dg-eje",
				x1: "24",
				y1: piso,
				x2: "300",
				y2: piso
			})
		]
	});
};
//#endregion
//#region src/assets/rindeplus-r.webp
var rindeplus_r_default = new Proxy({
	"src": "/assets/rindeplus-r.BoL0cDUT.webp",
	"width": 51,
	"height": 48,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-r.webp";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-r.webp");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/totoa/Proyectos/RindePlus/Landing/src/assets/rindeplus-r.webp");
	}
	return target[name];
} });
//#endregion
//#region src/data/bibliografia.js
var BIBLIOGRAFIA = [
	{
		autores: "Allen, R. G., Pereira, L. S., Raes, D. & Smith, M.",
		anio: "1998",
		titulo: "Crop evapotranspiration: guidelines for computing crop water requirements.",
		fuente: "FAO Irrigation and Drainage Paper 56. FAO, Roma.",
		url: "https://www.fao.org/4/x0490e/x0490e00.htm",
		conceptos: ["balance-hidrico", "agua-util"]
	},
	{
		autores: "Saxton, K. E. & Rawls, W. J.",
		anio: "2006",
		titulo: "Soil water characteristic estimates by texture and organic matter for hydrologic solutions.",
		fuente: "Soil Science Society of America Journal, 70(5), 1569–1578.",
		url: "https://doi.org/10.2136/sssaj2005.0117",
		conceptos: ["agua-util"]
	},
	{
		autores: "Blake, G. R. & Hartge, K. H.",
		anio: "1986",
		titulo: "Bulk density.",
		fuente: "En A. Klute (Ed.), Methods of Soil Analysis, Part 1 (2.ª ed., pp. 363–375). ASA-SSSA.",
		conceptos: ["agua-util"]
	},
	{
		autores: "Tetens, O.",
		anio: "1930",
		titulo: "Über einige meteorologische Begriffe.",
		fuente: "Zeitschrift für Geophysik, 6, 297–309.",
		conceptos: ["dpv"]
	},
	{
		autores: "Rouse, J. W., Haas, R. H., Schell, J. A. & Deering, D. W.",
		anio: "1974",
		titulo: "Monitoring vegetation systems in the Great Plains with ERTS.",
		fuente: "Third Earth Resources Technology Satellite-1 Symposium, NASA SP-351, 309–317.",
		conceptos: ["ndvi"]
	},
	{
		autores: "van Ittersum, M. K., Cassman, K. G., Grassini, P., Wolf, J., Tittonell, P. & Hochman, Z.",
		anio: "2013",
		titulo: "Yield gap analysis with local to global relevance: a review.",
		fuente: "Field Crops Research, 143, 4–17.",
		url: "https://doi.org/10.1016/j.fcr.2012.09.009",
		conceptos: ["brecha"]
	},
	{
		autores: "Liebig, J. von",
		anio: "1840",
		titulo: "Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie.",
		fuente: "Vieweg, Braunschweig.",
		conceptos: ["ley-del-minimo"]
	}
];
//#endregion
//#region src/components/LearnPage.jsx
var DIAGRAMAS = {
	ambientes: DiagramaAmbientes,
	"agua-util": DiagramaAguaUtil,
	"carry-over": DiagramaCarryOver,
	"dosis-optima": DiagramaDosis,
	"balance-hidrico": DiagramaBalance,
	dpv: DiagramaDpv,
	ndvi: DiagramaNdvi,
	brecha: DiagramaBrecha
};
var num = (i) => String(i + 1).padStart(2, "0");
var LogoR = () => /* @__PURE__ */ jsx("img", {
	className: "rp-logo-r",
	src: urlDe(rindeplus_r_default),
	alt: "",
	width: "17",
	height: "16"
});
var Intro = () => {
	const t = useI18n().dict.paginas.educacion;
	const momento = (id) => t.momentos.find((m) => m.id === id)?.nombre;
	return /* @__PURE__ */ jsxs("section", {
		className: "rp-ed-intro",
		id: "top",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rp-ed-intro__texto",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "rp-ed-intro__titulo rp-fade-in rp-d-1",
				children: t.title
			}), /* @__PURE__ */ jsx("p", {
				className: "rp-ed-intro__lead rp-fade-in rp-d-3",
				children: t.lead
			})]
		}), /* @__PURE__ */ jsx("nav", {
			className: "rp-indice rp-fade-in rp-d-4",
			"aria-label": t.mapa,
			children: /* @__PURE__ */ jsx("ol", {
				className: "rp-indice__lista",
				children: t.lecciones.map((l, i) => /* @__PURE__ */ jsx("li", {
					className: `rp-indice__item rp-momento--${l.momento}`,
					children: /* @__PURE__ */ jsxs("a", {
						href: `#${l.id}`,
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "rp-indice__cabeza",
								children: [/* @__PURE__ */ jsx("span", {
									className: "rp-indice__num",
									children: num(i)
								}), /* @__PURE__ */ jsx("span", {
									className: "rp-indice__momento",
									children: momento(l.momento)
								})]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "rp-indice__termino",
								children: l.termino
							}),
							/* @__PURE__ */ jsx("span", {
								className: "rp-indice__donde",
								children: l.plataforma.donde
							})
						]
					})
				}, l.id))
			})
		})]
	});
};
var Texto = ({ i }) => {
	const t = useI18n().dict.paginas.educacion;
	const l = t.lecciones[i];
	const momento = t.momentos.find((m) => m.id === l.momento)?.nombre;
	return /* @__PURE__ */ jsxs("div", {
		className: "rp-ficha__texto",
		children: [
			/* @__PURE__ */ jsxs("p", {
				className: "rp-ficha__meta",
				children: [/* @__PURE__ */ jsx("span", {
					className: "rp-ficha__num",
					children: num(i)
				}), l.demo ? t.probar : momento]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "rp-ficha__titulo",
				id: `${l.id}-titulo`,
				children: /* @__PURE__ */ jsx("a", {
					href: `#${l.id}`,
					children: l.termino
				})
			}),
			/* @__PURE__ */ jsx("p", {
				className: "rp-ficha__definicion",
				children: l.definicion
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rp-ficha__lectura",
				children: [/* @__PURE__ */ jsx("p", {
					className: "rp-ficha__lectura-titulo",
					children: t.comoSeLee
				}), /* @__PURE__ */ jsx("p", { children: l.lectura })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rp-ficha__plataforma",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "rp-ficha__plataforma-titulo",
					children: [
						/* @__PURE__ */ jsx(LogoR, {}),
						t.enPlataforma,
						/* @__PURE__ */ jsx("span", {
							className: "rp-ficha__seccion",
							children: l.plataforma.donde
						})
					]
				}), /* @__PURE__ */ jsx("p", { children: l.plataforma.texto })]
			})
		]
	});
};
var Diagrama = ({ i }) => {
	const l = useI18n().dict.paginas.educacion.lecciones[i];
	const Dibujo = DIAGRAMAS[l.id];
	return Dibujo ? /* @__PURE__ */ jsx(Dibujo, {
		e: l.etiquetas,
		label: l.termino
	}) : null;
};
var Fuentes = () => {
	const ed = useI18n().dict.paginas.educacion;
	const t = ed.fuentes;
	const termino = (id) => ed.lecciones.find((l) => l.id === id)?.termino;
	return /* @__PURE__ */ jsxs("section", {
		className: "rp-ed-fuentes",
		id: "fuentes",
		"aria-labelledby": "fuentes-titulo",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "rp-ed-fuentes__head rp-reveal",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "rp-ab-h2",
					id: "fuentes-titulo",
					children: t.titulo
				}), /* @__PURE__ */ jsx("p", {
					className: "rp-ab-bajada",
					children: t.bajada
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rp-ed-fuentes__grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rp-ed-fuentes__bloque rp-reveal",
					children: [/* @__PURE__ */ jsx("h3", { children: t.propio }), /* @__PURE__ */ jsx("ul", {
						className: "rp-ed-propio",
						children: t.propios.map((p) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("h4", { children: p.titulo }), /* @__PURE__ */ jsx("p", { children: p.texto })] }, p.titulo))
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rp-ed-fuentes__bloque rp-reveal rp-reveal--delay-1",
					children: [/* @__PURE__ */ jsx("h3", { children: t.terceros }), /* @__PURE__ */ jsx("ol", {
						className: "rp-ed-biblio",
						children: BIBLIOGRAFIA.map((b) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("p", {
							className: "rp-ed-biblio__cita",
							children: [
								/* @__PURE__ */ jsx("strong", { children: b.autores }),
								" (",
								b.anio,
								"). ",
								/* @__PURE__ */ jsx("cite", { children: b.titulo }),
								" ",
								b.fuente,
								b.url && /* @__PURE__ */ jsxs(Fragment$1, { children: [" ", /* @__PURE__ */ jsx("a", {
									href: b.url,
									target: "_blank",
									rel: "noopener noreferrer",
									children: t.ver
								})] })
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "rp-ed-biblio__conceptos",
							children: b.conceptos.map((c) => /* @__PURE__ */ jsx("a", {
								href: `#${c}`,
								children: termino(c)
							}, c))
						})] }, b.autores))
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "rp-ed-fuentes__datos rp-reveal",
				children: [
					/* @__PURE__ */ jsxs("strong", { children: [t.datos, "."] }),
					" ",
					t.datosTexto
				]
			})
		]
	});
};
var LearnIntro = conIdioma(Intro);
var LeccionTexto = conIdioma(Texto);
var LeccionDiagrama = conIdioma(Diagrama);
var LearnFuentes = conIdioma(Fuentes);
//#endregion
//#region src/components/LiebigDemo.jsx
var INICIAL = [
	68,
	42,
	88,
	82,
	76,
	58
];
var TECHO = 84;
var TOPE = 100;
var PASO = 15;
var KG_POR_PUNTO = 100;
var LiebigDemo = () => {
	const { dict, locale } = useI18n();
	const t = dict.paginas.educacion.lecciones.find((l) => l.demo).demo;
	const [niveles, setNiveles] = useState(INICIAL);
	const minimo = Math.min(...niveles);
	const limitaAgua = TECHO <= minimo;
	const rinde = Math.min(minimo, TECHO);
	const limitante = limitaAgua ? -1 : niveles.indexOf(minimo);
	const nf = new Intl.NumberFormat(locale === "en" ? "en-US" : locale === "pt" ? "pt-BR" : "es-AR");
	const cambiado = niveles.some((n, i) => n !== INICIAL[i]);
	const fertilizar = (i) => setNiveles((prev) => prev.map((n, j) => j === i ? Math.min(TOPE, n + PASO) : n));
	return /* @__PURE__ */ jsxs("div", {
		className: "rp-liebig",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rp-liebig__cabecera",
				children: [/* @__PURE__ */ jsx("p", {
					className: "rp-liebig__ejemplo",
					children: t.ejemplo
				}), /* @__PURE__ */ jsxs("p", {
					className: "rp-liebig__resultado",
					"aria-live": "polite",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						t.rinde,
						": ",
						/* @__PURE__ */ jsxs("strong", { children: [
							nf.format(rinde * KG_POR_PUNTO).split(/([.,])/).map((parte, i) => i % 2 ? /* @__PURE__ */ jsx("span", {
								className: "rp-liebig__sep",
								children: parte
							}, i) : parte),
							" ",
							"kg/ha"
						] })
					] }), /* @__PURE__ */ jsxs("span", {
						className: limitaAgua ? "rp-liebig__limita rp-liebig__limita--agua" : "rp-liebig__limita",
						children: [
							t.limita,
							": ",
							limitaAgua ? t.agua : t.nutrientes[limitante]
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rp-liebig__grafico",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: `rp-liebig__techo${limitaAgua ? " is-limita" : ""}`,
						style: { bottom: `${TECHO}%` },
						children: /* @__PURE__ */ jsx("span", { children: t.techo })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rp-liebig__rinde",
						style: { bottom: `${rinde}%` },
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "rp-liebig__barras",
						children: niveles.map((n, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: `rp-liebig__barra${i === limitante ? " is-limitante" : ""}`,
							onClick: () => fertilizar(i),
							disabled: n >= TOPE,
							"aria-label": `${t.fertilizar(t.nutrientes[i])} (${n} / ${TOPE})`,
							children: /* @__PURE__ */ jsx("span", {
								className: "rp-liebig__relleno",
								style: { height: `${n}%` }
							})
						}) }, t.simbolos[i]))
					})
				]
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "rp-liebig__simbolos",
				"aria-hidden": "true",
				children: t.simbolos.map((s, i) => /* @__PURE__ */ jsx("li", {
					title: t.nutrientes[i],
					children: s
				}, s))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rp-liebig__pie",
				children: [/* @__PURE__ */ jsx("p", {
					className: "rp-liebig__pista",
					children: t.pista
				}), /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "rp-liebig__reiniciar",
					onClick: () => setNiveles(INICIAL),
					disabled: !cambiado,
					children: [/* @__PURE__ */ jsx(PiArrowCounterClockwise, { "aria-hidden": "true" }), t.reiniciar]
				})]
			})
		]
	});
};
var LiebigDemo_default = conIdioma(LiebigDemo);
//#endregion
//#region src/views/LearnView.astro
createAstro("https://rindeplus.com");
var $$LearnView = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LearnView;
	const lang = idiomaDe(Astro.currentLocale);
	const { lecciones, meta } = DICTIONARIES[lang].paginas.educacion;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": meta.title,
		"description": meta.description,
		"paths": EDUCACION_PATH
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "LearnIntro", LearnIntro, { "lang": lang })}${maybeRenderHead($$result)}<div class="rp-fichas">${lecciones.map((l, i) => renderTemplate`<article${addAttribute(l.id, "id")}${addAttribute([
		"rp-ficha",
		"rp-reveal",
		{
			"rp-ficha--demo": l.demo,
			"rp-ficha--invertida": !l.demo && i % 2 === 1
		}
	], "class:list")}${addAttribute(`${l.id}-titulo`, "aria-labelledby")}>${renderComponent($$result, "LeccionTexto", LeccionTexto, {
		"lang": lang,
		"i": i
	})}<div class="rp-ficha__visual">${l.demo ? renderTemplate`${renderComponent($$result, "LiebigDemo", LiebigDemo_default, {
		"client:visible": true,
		"lang": lang,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/totoa/Proyectos/RindePlus/Landing/src/components/LiebigDemo.jsx",
		"client:component-export": "default"
	})}` : renderTemplate`${renderComponent($$result, "LeccionDiagrama", LeccionDiagrama, {
		"lang": lang,
		"i": i
	})}`}</div></article>`)}${renderComponent($$result, "LearnFuentes", LearnFuentes, { "lang": lang })}</div>${renderComponent($$result, "CtaFinal", CtaFinal, { "lang": lang })}` })}`;
}, "C:/Users/totoa/Proyectos/RindePlus/Landing/src/views/LearnView.astro", void 0);
//#endregion
export { $$LearnView as t };
