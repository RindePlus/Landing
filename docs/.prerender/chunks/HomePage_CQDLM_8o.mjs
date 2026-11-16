import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/LotesMosaic.jsx
var CELL_W = 200;
var CELL_H = 180;
var TONES = 6;
var rng$1 = (seed) => () => {
	let t = seed += 1831565813;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
};
var pathDe = (puntos) => `M${puntos.map((p) => p.map((n) => n.toFixed(1)).join(" ")).join(" L")} Z`;
var buildLotes = ({ cols, rows, seed, resaltado }) => {
	const rand = rng$1(seed);
	const W = cols * CELL_W;
	const H = rows * CELL_H;
	const pts = Array.from({ length: rows + 1 }, (_, r) => Array.from({ length: cols + 1 }, (_, c) => {
		const edgeX = c === 0 || c === cols;
		const edgeY = r === 0 || r === rows;
		return [c * CELL_W + (edgeX ? 0 : (rand() - .5) * CELL_W * .5), r * CELL_H + (edgeY ? 0 : (rand() - .5) * CELL_H * .45)];
	}));
	const [hr, hc] = resaltado ?? [-9, -9];
	if (resaltado) {
		const enderezar = (p, a, b) => {
			p[0] = (a[0] + b[0]) / 2 + (rand() - .5) * CELL_W * .08;
			p[1] = (a[1] + b[1]) / 2 + (rand() - .5) * CELL_H * .08;
		};
		enderezar(pts[hr][hc + 1], pts[hr][hc], pts[hr][hc + 2]);
		enderezar(pts[hr + 1][hc + 2], pts[hr][hc + 2], pts[hr + 2][hc + 2]);
		enderezar(pts[hr + 2][hc + 1], pts[hr + 2][hc], pts[hr + 2][hc + 2]);
		enderezar(pts[hr + 1][hc], pts[hr][hc], pts[hr + 2][hc]);
	}
	const enResaltado = (r, c) => r >= hr && r < hr + 2 && c >= hc && c < hc + 2;
	const lotes = [];
	for (let r = 0; r < rows; r += 1) for (let c = 0; c < cols; c += 1) {
		const tone = Math.floor(rand() * TONES);
		const angle = Math.round((rand() - .5) * 70);
		if (enResaltado(r, c)) continue;
		lotes.push({
			id: `${r}-${c}`,
			d: pathDe([
				pts[r][c],
				pts[r][c + 1],
				pts[r + 1][c + 1],
				pts[r + 1][c]
			]),
			tone,
			angle
		});
	}
	let lote = null;
	if (resaltado) {
		const contorno = [
			pts[hr][hc],
			pts[hr][hc + 1],
			pts[hr][hc + 2],
			pts[hr + 1][hc + 2],
			pts[hr + 2][hc + 2],
			pts[hr + 2][hc + 1],
			pts[hr + 2][hc],
			pts[hr + 1][hc]
		];
		const xs = contorno.map((p) => p[0]);
		const ys = contorno.map((p) => p[1]);
		const x = Math.min(...xs);
		const y = Math.min(...ys);
		lote = {
			id: "resaltado",
			d: pathDe(contorno),
			tone: 1,
			angle: -6,
			bbox: {
				x,
				y,
				w: Math.max(...xs) - x,
				h: Math.max(...ys) - y
			}
		};
		lotes.push(lote);
	}
	return {
		W,
		H,
		lotes,
		lote
	};
};
var CAMPO_HERO = buildLotes({
	cols: 18,
	rows: 12,
	seed: 20261021,
	resaltado: [5, 10]
});
var LOTE_HERO = CAMPO_HERO.lote;
var Mosaico = ({ campo, idBase, className = "", preserveAspectRatio = "xMidYMid slice" }) => /* @__PURE__ */ jsxs("svg", {
	className: `rp-mosaic ${className}`,
	viewBox: `0 0 ${campo.W} ${campo.H}`,
	preserveAspectRatio,
	"aria-hidden": "true",
	focusable: "false",
	children: [/* @__PURE__ */ jsx("defs", { children: campo.lotes.map((l) => /* @__PURE__ */ jsx("pattern", {
		id: `${idBase}-${l.id}`,
		width: "10",
		height: "10",
		patternUnits: "userSpaceOnUse",
		patternTransform: `rotate(${l.angle})`,
		children: /* @__PURE__ */ jsx("line", {
			className: "rp-mosaic__row",
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "10"
		})
	}, l.id)) }), campo.lotes.map((l) => /* @__PURE__ */ jsxs("g", { children: [
		/* @__PURE__ */ jsx("path", {
			className: `rp-mosaic__lote rp-mosaic__lote--${l.tone}`,
			d: l.d
		}),
		/* @__PURE__ */ jsx("path", {
			d: l.d,
			fill: `url(#${idBase}-${l.id})`
		}),
		/* @__PURE__ */ jsx("path", {
			className: "rp-mosaic__road",
			d: l.d
		})
	] }, l.id))]
});
buildLotes({
	cols: 12,
	rows: 6,
	seed: 20261113
});
var CampoHero = () => /* @__PURE__ */ jsx(Mosaico, {
	campo: CAMPO_HERO,
	idBase: "rpCampoRows",
	className: "rp-mosaic--hero"
});
var CAMPO_INSTALAR = buildLotes({
	cols: 16,
	rows: 5,
	seed: 20261109
});
var CampoInstalar = () => /* @__PURE__ */ jsx(Mosaico, {
	campo: CAMPO_INSTALAR,
	idBase: "rpCampoInstalar"
});
//#endregion
//#region src/data/loteMapa.js
var MAPA = [
	["high2", "M-20 300 C 30 282, 70 300, 110 296 C 150 292, 178 316, 200 340 C 222 364, 250 370, 262 400 C 272 424, 280 440, 286 450 H-20 Z"],
	["high2", "M400 450 C 420 400, 470 370, 540 360 V450 Z"],
	["high2", "M236 168 C 244 140, 290 132, 326 126 C 360 120, 372 104, 412 110 C 452 116, 500 132, 506 168 C 512 198, 478 214, 446 206 C 420 200, 402 218, 370 216 C 338 214, 316 202, 286 204 C 258 206, 230 192, 236 168 Z"],
	["high2", "M440 -20 H540 V90 C 510 80, 480 60, 460 34 C 450 16, 444 0, 440 -20 Z"],
	["mid", "M-20 -20 H286 C 276 18, 248 40, 222 58 C 200 74, 206 98, 188 116 C 170 134, 140 132, 122 152 C 104 172, 112 200, 92 222 C 72 242, 30 236, -20 244 Z"],
	["mid", "M300 30 C 318 14, 356 16, 374 30 C 390 42, 380 62, 358 66 C 336 70, 312 64, 302 52 C 296 44, 294 36, 300 30 Z"],
	["mid", "M258 262 C 270 238, 318 236, 352 240 C 388 244, 410 228, 440 236 C 470 244, 478 272, 456 292 C 436 310, 404 304, 380 320 C 356 336, 318 338, 292 322 C 268 308, 248 286, 258 262 Z"],
	["mid", "M300 404 C 314 388, 344 386, 366 396 C 384 404, 390 424, 380 450 H306 C 296 436, 292 418, 300 404 Z"],
	["low", "M-20 -20 H196 C 186 14, 160 34, 138 52 C 118 68, 122 92, 100 108 C 78 124, 50 118, 30 136 C 14 150, 0 158, -20 160 Z"],
	["low", "M318 266 C 334 252, 366 258, 384 254 C 410 248, 432 260, 426 278 C 420 294, 394 290, 374 302 C 354 314, 326 310, 316 294 C 308 282, 308 274, 318 266 Z"],
	["low2", "M-20 -20 H118 C 110 8, 92 22, 70 36 C 52 48, 48 66, 28 76 C 12 84, -2 86, -20 88 Z"],
	["low2", "M352 270 C 362 262, 382 264, 392 270 C 400 276, 396 286, 384 288 C 372 290, 358 288, 352 282 C 348 278, 348 274, 352 270 Z"]
];
var de = (nivel) => MAPA.filter(([n]) => n === nivel).map(([, d]) => d);
var AMB_ALTO = de("high2").join(" ");
var AMB_BAJO = de("mid").join(" ");
var AMB_MEDIO = `M-20 -20 H560 V460 H-20 Z ${AMB_ALTO} ${AMB_BAJO}`;
var bajos = de("mid");
var BORDES = [
	AMB_ALTO,
	`${bajos[0]} ${bajos[1]}`,
	`${bajos[2]} ${bajos[3]}`
];
var aPoligono = (d) => {
	const t = d.match(/[MHVCZ]|-?\d*\.?\d+/g);
	const pts = [];
	let x = 0;
	let y = 0;
	let cmd = "";
	let i = 0;
	const num = () => Number(t[i++]);
	while (i < t.length) {
		if (/[MHVCZ]/.test(t[i])) cmd = t[i++];
		if (cmd === "Z") continue;
		if (cmd === "M") {
			x = num();
			y = num();
			pts.push([x, y]);
		} else if (cmd === "H") {
			x = num();
			pts.push([x, y]);
		} else if (cmd === "V") {
			y = num();
			pts.push([x, y]);
		} else if (cmd === "C") {
			const [x1, y1, x2, y2, x3, y3] = [
				num(),
				num(),
				num(),
				num(),
				num(),
				num()
			];
			for (let k = 1; k <= 12; k += 1) {
				const s = k / 12;
				const u = 1 - s;
				pts.push([u * u * u * x + 3 * u * u * s * x1 + 3 * u * s * s * x2 + s * s * s * x3, u * u * u * y + 3 * u * u * s * y1 + 3 * u * s * s * y2 + s * s * s * y3]);
			}
			x = x3;
			y = y3;
		}
	}
	return pts;
};
var adentro = (pts, px, py) => {
	let dentro = false;
	for (let a = 0, b = pts.length - 1; a < pts.length; b = a, a += 1) {
		const [xa, ya] = pts[a];
		const [xb, yb] = pts[b];
		if (ya > py !== yb > py && px < (xb - xa) * (py - ya) / (yb - ya) + xa) dentro = !dentro;
	}
	return dentro;
};
var POLIGONOS = MAPA.map(([nivel, d]) => [nivel, aPoligono(d)]);
var ORDEN = [
	"low2",
	"low",
	"mid",
	"high2"
];
/** Nivel del mapa en (x, y): low2 | low | mid | high | high2. */
var nivelEn = (x, y) => {
	for (const nivel of ORDEN) if (POLIGONOS.some(([n, pts]) => n === nivel && adentro(pts, x, y))) return nivel;
	return "high";
};
var NIVELES = [
	"low2",
	"low",
	"mid",
	"high",
	"high2"
];
//#endregion
//#region src/components/LoteMap.jsx
var { d: LOTE, bbox } = LOTE_HERO;
var PAD = 4;
var VIEWBOX = `${bbox.x - PAD} ${bbox.y - PAD} ${bbox.w + 8} ${bbox.h + 8}`;
var LIENZO = `translate(${bbox.x} ${bbox.y}) scale(${bbox.w / 520} ${bbox.h / 430})`;
var MUESTRAS = [
	110,
	260,
	410
].flatMap((x, c) => [
	92,
	212,
	332
].map((y, r) => ({
	x,
	y,
	i: c * 3 + r
})));
var rng = (seed) => () => {
	let t = seed += 1831565813;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
};
var azar = rng(431);
var GOTAS = Array.from({ length: 28 }, (_, i) => ({
	x: Math.round(azar() * 560 - 20),
	y: Math.round(azar() * 430),
	d: Math.round(azar() * 5) / 10,
	i
}));
var CELDA = 40;
var DOSIS = {
	low2: 1,
	low: 1,
	mid: 1,
	high: 2,
	high2: 3
};
var CELDAS = Array.from({ length: 11 }, (_, f) => Array.from({ length: 13 }, (_, c) => ({
	x: c * CELDA,
	y: f * CELDA,
	c,
	dosis: DOSIS[nivelEn(c * CELDA + CELDA / 2, f * CELDA + CELDA / 2)]
}))).flat();
var PASADA_ALTO = 43;
var PASADAS = Array.from({ length: 10 }, (_, i) => ({
	y: i * PASADA_ALTO,
	i
}));
var BLOQUE = 26;
var azarRinde = rng(97);
var BLOQUES = PASADAS.flatMap(({ y }) => Array.from({ length: 20 }, (_, c) => {
	const base = NIVELES.indexOf(nivelEn(c * BLOQUE + BLOQUE / 2, y + PASADA_ALTO / 2));
	const r = azarRinde();
	const salto = r < .1 ? 1 : r > .92 ? -1 : 0;
	const nivel = NIVELES[Math.min(NIVELES.length - 1, Math.max(0, base + salto))];
	return {
		x: c * BLOQUE,
		y,
		nivel
	};
}));
var RAFAGAS = [
	"M-60 120 C 60 96, 140 146, 260 118 S 430 92, 580 116",
	"M-60 210 C 40 190, 160 236, 280 206 S 450 186, 580 204",
	"M-60 300 C 80 282, 170 322, 300 296 S 460 276, 580 292"
];
var AVISOS = [
	"planificar",
	"preparar",
	"fertilizar",
	"sequia",
	"calor",
	"lluvia",
	"cerrar"
];
var LoteMap = ({ aria, avisos }) => /* @__PURE__ */ jsxs("figure", {
	className: "rp-lote",
	children: [/* @__PURE__ */ jsxs("svg", {
		className: "rp-lote__map",
		viewBox: VIEWBOX,
		role: "img",
		"aria-label": aria,
		children: [
			/* @__PURE__ */ jsxs("defs", { children: [
				/* @__PURE__ */ jsx("clipPath", {
					id: "rpLoteClip",
					children: /* @__PURE__ */ jsx("path", { d: LOTE })
				}),
				/* @__PURE__ */ jsx("pattern", {
					id: "rpLoteRows",
					width: "9",
					height: "9",
					patternUnits: "userSpaceOnUse",
					patternTransform: "rotate(-6)",
					children: /* @__PURE__ */ jsx("line", {
						className: "rp-lote__row",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "9"
					})
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "rpLoteBarrido",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "0",
					children: [
						/* @__PURE__ */ jsx("stop", {
							offset: "0",
							className: "rp-lote__barrido-borde"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "0.7",
							className: "rp-lote__barrido-centro"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "1",
							className: "rp-lote__barrido-borde"
						})
					]
				}),
				/* @__PURE__ */ jsx("filter", {
					id: "rpMapaFundido",
					x: "-5%",
					y: "-5%",
					width: "110%",
					height: "110%",
					children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "2.5" })
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "rpNdviBorde",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "0",
					children: [/* @__PURE__ */ jsx("stop", {
						offset: "0.44",
						stopColor: "#ffffff"
					}), /* @__PURE__ */ jsx("stop", {
						offset: "0.56",
						stopColor: "#000000"
					})]
				}),
				/* @__PURE__ */ jsx("mask", {
					id: "rpNdviMascara",
					maskUnits: "userSpaceOnUse",
					x: "-40",
					y: "-40",
					width: "600",
					height: "510",
					children: /* @__PURE__ */ jsx("rect", {
						className: "rp-lote__revelado",
						x: "-665",
						y: "-40",
						width: "1240",
						height: "510",
						fill: "url(#rpNdviBorde)"
					})
				}),
				/* @__PURE__ */ jsx("pattern", {
					id: "rpRindeMapa",
					x: "0",
					y: "0",
					width: "520",
					height: "430",
					patternUnits: "userSpaceOnUse",
					children: BLOQUES.map((b) => /* @__PURE__ */ jsx("rect", {
						className: `rp-lote__rinde--${b.nivel}`,
						x: b.x,
						y: b.y,
						width: 25,
						height: 42
					}, `${b.x}-${b.y}`))
				})
			] }),
			/* @__PURE__ */ jsxs("g", {
				clipPath: "url(#rpLoteClip)",
				children: [
					/* @__PURE__ */ jsxs("g", {
						transform: LIENZO,
						children: [/* @__PURE__ */ jsx("rect", {
							className: "rp-lote__suelo",
							x: "-40",
							y: "-40",
							width: "600",
							height: "510"
						}), /* @__PURE__ */ jsx("g", {
							mask: "url(#rpNdviMascara)",
							children: /* @__PURE__ */ jsxs("g", {
								className: "rp-lote__mapa",
								filter: "url(#rpMapaFundido)",
								children: [/* @__PURE__ */ jsx("rect", {
									className: "rp-lote__mapa--high",
									x: "-40",
									y: "-40",
									width: "600",
									height: "510"
								}), MAPA.map(([nivel, d], i) => /* @__PURE__ */ jsx("path", {
									className: `rp-lote__mapa--${nivel}`,
									d
								}, i))]
							})
						})]
					}),
					/* @__PURE__ */ jsx("rect", {
						x: bbox.x,
						y: bbox.y,
						width: bbox.w,
						height: bbox.h,
						fill: "url(#rpLoteRows)"
					}),
					/* @__PURE__ */ jsxs("g", {
						transform: LIENZO,
						children: [
							/* @__PURE__ */ jsx("path", {
								className: "rp-lote__contour",
								d: "M20 210 C 120 180, 220 230, 330 200 C 410 178, 470 206, 520 190"
							}),
							/* @__PURE__ */ jsx("path", {
								className: "rp-lote__contour",
								d: "M20 290 C 110 262, 200 318, 300 300 C 380 286, 450 312, 520 300"
							}),
							/* @__PURE__ */ jsx("path", {
								className: "rp-lote__contour",
								d: "M60 120 C 160 104, 250 150, 360 124 C 420 110, 470 124, 520 116"
							}),
							/* @__PURE__ */ jsx("rect", {
								className: "rp-lote__escaneo",
								x: "-90",
								y: "-20",
								width: "90",
								height: "470",
								fill: "url(#rpLoteBarrido)"
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "rp-esc rp-esc--planificar",
								children: [
									/* @__PURE__ */ jsx("path", {
										className: "rp-esc__ambiente rp-esc__ambiente--1",
										d: AMB_ALTO
									}),
									/* @__PURE__ */ jsx("path", {
										className: "rp-esc__ambiente rp-esc__ambiente--2",
										d: AMB_MEDIO,
										fillRule: "evenodd"
									}),
									/* @__PURE__ */ jsx("path", {
										className: "rp-esc__ambiente rp-esc__ambiente--3",
										d: AMB_BAJO
									}),
									BORDES.map((d, i) => /* @__PURE__ */ jsx("path", {
										className: `rp-esc__borde rp-esc__borde--${i + 1}`,
										d,
										pathLength: "1"
									}, i))
								]
							}),
							/* @__PURE__ */ jsx("g", {
								className: "rp-esc rp-esc--preparar",
								children: MUESTRAS.map((m) => /* @__PURE__ */ jsxs("g", {
									className: "rp-esc__muestra",
									style: { "--i": m.i },
									transform: `translate(${m.x} ${m.y})`,
									children: [/* @__PURE__ */ jsx("circle", {
										className: "rp-esc__muestra-anillo",
										r: "16"
									}), /* @__PURE__ */ jsx("circle", {
										className: "rp-esc__muestra-punto",
										r: "5"
									})]
								}, m.i))
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "rp-esc rp-esc--fertilizar",
								children: [/* @__PURE__ */ jsx("rect", {
									className: "rp-esc__celdas-fondo",
									x: "-20",
									y: "-20",
									width: "560",
									height: "470"
								}), CELDAS.map((c) => /* @__PURE__ */ jsx("rect", {
									className: `rp-esc__celda rp-esc__celda--${c.dosis}`,
									style: { "--c": c.c },
									x: c.x + 1.5,
									y: c.y + 1.5,
									width: 37,
									height: 37,
									rx: "2"
								}, `${c.x}-${c.y}`))]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "rp-esc rp-esc--sequia",
								children: [/* @__PURE__ */ jsx("path", {
									className: "rp-esc__seco rp-esc__seco--bajo",
									d: AMB_BAJO
								}), /* @__PURE__ */ jsx("rect", {
									className: "rp-esc__seco rp-esc__seco--todo",
									x: "-20",
									y: "-20",
									width: "560",
									height: "470"
								})]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "rp-esc rp-esc--calor",
								children: [
									/* @__PURE__ */ jsx("rect", {
										className: "rp-esc__calido",
										x: "-20",
										y: "-20",
										width: "560",
										height: "470"
									}),
									/* @__PURE__ */ jsxs("g", {
										className: "rp-esc__sol",
										transform: "translate(440 78)",
										children: [/* @__PURE__ */ jsx("g", {
											className: "rp-esc__rayos",
											children: Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ jsx("line", {
												className: "rp-esc__rayo",
												x1: "0",
												y1: "-44",
												x2: "0",
												y2: "-62",
												transform: `rotate(${i * 45})`
											}, i))
										}), /* @__PURE__ */ jsx("circle", {
											className: "rp-esc__sol-disco",
											r: "30"
										})]
									}),
									[
										150,
										260,
										370
									].map((x, i) => /* @__PURE__ */ jsx("path", {
										className: "rp-esc__vaho",
										style: { "--i": i },
										d: `M${x} 340 c 10 -14, -10 -28, 0 -42 s -10 -28, 0 -42`
									}, x))
								]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "rp-esc rp-esc--lluvia",
								children: [
									/* @__PURE__ */ jsx("rect", {
										className: "rp-esc__nublado",
										x: "-20",
										y: "-20",
										width: "560",
										height: "470"
									}),
									/* @__PURE__ */ jsx("path", {
										className: "rp-esc__verdor",
										d: AMB_MEDIO,
										fillRule: "evenodd"
									}),
									/* @__PURE__ */ jsx("g", {
										className: "rp-esc__gotas",
										children: GOTAS.map((g) => /* @__PURE__ */ jsx("line", {
											className: "rp-esc__gota",
											style: { "--d": `${g.d}s` },
											x1: g.x,
											y1: g.y,
											x2: g.x - 8,
											y2: g.y + 22
										}, g.i))
									})
								]
							}),
							/* @__PURE__ */ jsx("g", {
								className: "rp-esc rp-esc--cerrar",
								children: PASADAS.map((p) => /* @__PURE__ */ jsx("rect", {
									className: `rp-esc__pasada ${p.i % 2 ? "rp-esc__pasada--vuelta" : ""}`,
									style: { "--i": p.i },
									x: "0",
									y: p.y,
									width: "520",
									height: PASADA_ALTO,
									fill: "url(#rpRindeMapa)"
								}, p.i))
							}),
							/* @__PURE__ */ jsx("rect", {
								className: "rp-esc__barrido",
								x: "-90",
								y: "-20",
								width: "90",
								height: "470",
								fill: "url(#rpLoteBarrido)"
							}),
							/* @__PURE__ */ jsx("g", {
								className: "rp-lote__viento",
								children: RAFAGAS.map((d, i) => /* @__PURE__ */ jsx("path", {
									className: "rp-lote__rafaga",
									style: { "--i": i },
									d,
									pathLength: "1"
								}, i))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("path", {
				className: "rp-lote__outline",
				d: LOTE,
				pathLength: "1"
			})
		]
	}), avisos && /* @__PURE__ */ jsx("div", {
		className: "rp-lote__avisos",
		"aria-hidden": "true",
		children: AVISOS.map((id) => /* @__PURE__ */ jsxs("div", {
			className: `rp-lote__aviso rp-lote__aviso--${id}`,
			children: [/* @__PURE__ */ jsx("span", {
				className: "rp-lote__aviso-titulo",
				children: avisos[id].titulo
			}), /* @__PURE__ */ jsx("span", {
				className: "rp-lote__aviso-texto",
				children: avisos[id].texto
			})]
		}, id))
	})]
});
//#endregion
export { CampoHero as n, CampoInstalar as r, LoteMap as t };
