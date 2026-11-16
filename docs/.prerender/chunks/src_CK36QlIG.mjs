import { g as createRenderInstruction } from "./server_Drd9-UE6.mjs";
import { createContext, useContext } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { LuShare } from "react-icons/lu";
//#region node_modules/.pnpm/astro@7.3.4_@emnapi+core@1._dd3aa0111818b8ac8930ad9c8d5090cc/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/i18n/config.js
var LOCALES = [
	"es",
	"en",
	"pt"
];
var HTML_LANG = {
	es: "es-419",
	en: "en-US",
	pt: "pt-BR"
};
var OG_LOCALE = {
	es: "es_AR",
	en: "en_US",
	pt: "pt_BR"
};
var LOCALE_LABELS = {
	es: "Español",
	en: "English",
	pt: "Português"
};
var HOME_PATH = {
	es: "/",
	en: "/en/",
	pt: "/pt/"
};
var PRIVACY_PATH = {
	es: "/privacidad/",
	en: "/en/privacy/",
	pt: "/pt/privacidade/"
};
var NOSOTROS_PATH = {
	es: "/nosotros/",
	en: "/en/about/",
	pt: "/pt/sobre/"
};
var EDUCACION_PATH = {
	es: "/educacion/",
	en: "/en/learn/",
	pt: "/pt/educacao/"
};
var idiomaDe = (locale) => LOCALES.includes(locale) ? locale : "es";
//#endregion
//#region src/i18n/locales/paginas.es.js
var paginas$2 = {
	nosotros: {
		meta: {
			title: "Nosotros · Rinde Plus",
			description: "Rinde Plus es una empresa de Alta Gracia, Córdoba, que junta agronomía y sistemas de información para que cada lote se decida con criterio agronómico. Quiénes somos y cómo trabajamos."
		},
		title: "Somos Rinde Plus",
		lead: "Mezclamos conocimiento agronómico y tecnología para que cada lote se decida con datos y con criterio.",
		bloques: [
			{
				titulo: "Quiénes somos",
				texto: "Un equipo de Alta Gracia, Córdoba, que junta dos mundos: el saber agronómico de quien camina el lote y la tecnología que lo lleva a cada decisión. Trabajamos en la misma mesa, y eso se nota en cada número de la plataforma."
			},
			{
				titulo: "Qué hacemos",
				texto: "Rinde Plus acompaña cada lote durante toda la campaña: cuánto puede rendir, cuánta agua tiene el suelo, qué dosis se paga, qué riesgos vienen y, al cierre, dónde se perdió rinde. Para productores, asesores y empresas del sector."
			},
			{
				titulo: "Cómo lo hacemos",
				texto: "Juntamos el suelo, el clima, las imágenes satelitales y la historia de cada lote, y los leemos con criterio agronómico. El resultado llega claro: en la plataforma, en informes y en un aviso por WhatsApp que se puede responder."
			}
		],
		idea: {
			kicker: "La idea",
			titulo: "Dos lotes vecinos pueden pedir decisiones distintas.",
			lead: "Rinde Plus existe para encontrar esa diferencia y explicarla: el suelo, el agua del perfil, la historia de cada ambiente y el clima de esa campaña, cruzados lote por lote."
		},
		equipo: {
			kicker: "Nuestro equipo",
			titulo: "Agronomía y software, en la misma mesa",
			bajada: "Cada número de la plataforma lo piensan juntos quienes conocen el campo y quienes construyen el software.",
			miembros: [
				{
					nombre: "Marcos Flesia",
					cargo: "CEO",
					profesion: "Ingeniero agrónomo",
					area: "agro"
				},
				{
					nombre: "Santiago Quesada",
					cargo: "CTO",
					profesion: "Ingeniero en sistemas de información",
					area: "sis"
				},
				{
					nombre: "Manuel Frías",
					profesion: "Ingeniero en sistemas de información",
					area: "sis"
				},
				{
					nombre: "Ángeles Sanz",
					profesion: "Ingeniera agrónoma",
					area: "agro"
				},
				{
					nombre: "Tomás Abrate",
					profesion: "Ingeniero en sistemas de información",
					area: "sis"
				}
			]
		},
		dosLotes: {
			aria: "Dos lotes vecinos con mapas de ambientes distintos y un aviso distinto para cada uno",
			a: {
				nombre: "Lote 14",
				aviso: "Conviene fertilizar el ambiente alto."
			},
			b: {
				nombre: "Lote 15",
				aviso: "El agua limita: fertilizar no se paga."
			}
		},
		anatomia: {
			kicker: "Cómo pensamos cada número",
			titulo: "Anatomía de un aviso",
			bajada: "Cada aviso dice qué se midió, con qué criterio se leyó y qué conviene hacer. Este es uno del balance hídrico, como llega por WhatsApp.",
			mensaje: {
				encabezado: "Estrés hídrico · Alerta temprana",
				medido: "Agua útil 52,3 % · DPV 1,2 kPa",
				criterio: "Umbral 60 % · DPV máx. 1,7 · tres días seguidos",
				decision: "Aplicar si el pronóstico sube el DPV.",
				lote: "Lote 14 · ambiente bajo",
				hora: "7:02"
			},
			partes: [
				{
					titulo: "Lo medido",
					texto: "El agua útil sale del balance hídrico del ambiente, día por día; el DPV, de la temperatura y la humedad en la ubicación del lote."
				},
				{
					titulo: "El criterio",
					texto: "El umbral depende del cultivo y de la etapa en la que está. Un día suelto no alcanza: la alerta pide tres días seguidos."
				},
				{
					titulo: "La decisión",
					texto: "El nivel dice qué tan grave es y qué conviene hacer. Si faltara un dato, el aviso lo diría en lugar de inventarlo."
				}
			]
		},
		compromisos: {
			titulo: "Nuestros compromisos",
			items: [
				{
					titulo: "No inventamos datos.",
					texto: "Un día sin clima queda como hueco y un análisis que falta se avisa. Mejor un número menos que uno falso."
				},
				{
					titulo: "No usamos cajas negras.",
					texto: "Cada cálculo sigue una regla que se puede leer y discutir con el asesor."
				},
				{
					titulo: "No reemplazamos al agrónomo.",
					texto: "Le sacamos de encima el trabajo de juntar datos para que tenga más tiempo en el campo."
				},
				{
					titulo: "Recomendamos con independencia.",
					texto: "La recomendación sale del lote, no de un producto. Si la simulación muestra que una dosis no se paga, la plataforma lo dice."
				}
			]
		},
		lugar: {
			kicker: "Dónde estamos",
			titulo: "Alta Gracia, Córdoba",
			texto: "En el centro del país agrícola, cerca de los lotes que seguimos. Rinde Plus® es una marca de Conextion S.A.S.",
			direccion: "Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina",
			mapa: "Ver en el mapa"
		}
	},
	educacion: {
		meta: {
			title: "Lo que hay detrás de cada número · Rinde Plus",
			description: "Nueve conceptos agronómicos y cómo se ven en Rinde Plus: ambientes, ley del mínimo, agua útil, carry-over, dosis óptima, balance hídrico, DPV, NDVI y brecha."
		},
		kicker: "Educación",
		title: "Lo que hay detrás de cada número",
		lead: "Los conceptos agronómicos detrás de cada decisión del lote, qué significan y cómo se ven en Rinde Plus. Ordenados por momento de la campaña.",
		mapa: "Los nueve conceptos",
		enPlataforma: "En Rinde Plus",
		momentos: [
			{
				id: "planificar",
				nombre: "Planificar"
			},
			{
				id: "preparar",
				nombre: "Preparar el lote"
			},
			{
				id: "fertilizar",
				nombre: "Fertilizar"
			},
			{
				id: "acompanar",
				nombre: "Acompañar el cultivo"
			},
			{
				id: "cerrar",
				nombre: "Cerrar y aprender"
			}
		],
		probar: "Para probar",
		comoSeLee: "Cómo se lee",
		lecciones: [
			{
				id: "ambientes",
				momento: "planificar",
				termino: "Ambientes",
				definicion: "Zonas del lote que se comportan de forma parecida por su suelo, su relieve y su historia. Un mismo lote puede tener ambientes alto, medio y bajo, que rinden distinto y piden manejos distintos.",
				lectura: "Antes de comparar números, mirar de qué ambiente es cada uno: un rinde bajo en el ambiente bajo puede ser un buen resultado.",
				plataforma: {
					donde: "Ambientes y ensayos",
					texto: "Cada ambiente se dibuja sobre la imagen satelital con su propio color, y ese color lo acompaña en toda la plataforma: los gráficos, los indicadores y las tablas del lote se separan por ambiente."
				},
				etiquetas: {
					alto: "Alto",
					medio: "Medio",
					bajo: "Bajo"
				}
			},
			{
				id: "ley-del-minimo",
				momento: "planificar",
				termino: "Ley del mínimo",
				definicion: "El rinde queda limitado por el nutriente más escaso, aunque los demás sobren. Y por encima de todos está el agua: ningún nutriente lleva el rinde más allá de lo que permite el agua del ciclo.",
				lectura: "Fertilizar un nutriente que no limita no suma rinde. El que importa es el más corto.",
				plataforma: {
					donde: "Brechas de rendimiento",
					texto: "Aparece como el rinde base de cada ambiente: lo que el suelo da sin fertilizar, en una barra con forma de silo. Debajo se indica qué nutriente pone el techo, por ejemplo «Limitación por nitrógeno (N)»."
				},
				demo: {
					ejemplo: "Ejemplo con maíz",
					pista: "Tocar una barra para fertilizar ese nutriente.",
					nutrientes: [
						"Nitrógeno",
						"Fósforo",
						"Potasio",
						"Calcio",
						"Magnesio",
						"Azufre"
					],
					simbolos: [
						"N",
						"P",
						"K",
						"Ca",
						"Mg",
						"S"
					],
					techo: "Techo del agua",
					rinde: "Rinde",
					limita: "Limita",
					agua: "el agua",
					fertilizar: (n) => `Fertilizar con ${n}`,
					reiniciar: "Volver a empezar"
				}
			},
			{
				id: "agua-util",
				momento: "preparar",
				termino: "Agua útil",
				definicion: "El agua del suelo que el cultivo puede aprovechar. Va de 0 % en el punto de marchitez, cuando el cultivo ya no puede sacar agua, a 100 % en la capacidad de campo, lo máximo que el suelo retiene.",
				lectura: "Un 0 % no es suelo seco: es agua que el cultivo ya no puede usar. Lo que importa es cuánto falta para el umbral del cultivo.",
				plataforma: {
					donde: "Balance hídrico",
					texto: "Un indicador circular muestra el agua útil en porcentaje, en verde, amarillo o rojo según qué tan cerca está el cultivo de su umbral de estrés. En el tablero del lote se ve por ambiente y, en el análisis de suelo, capa por capa."
				},
				etiquetas: {
					pmp: "Punto de marchitez",
					cc: "Capacidad de campo",
					umbral: "Umbral",
					hoy: "Hoy"
				}
			},
			{
				id: "carry-over",
				momento: "preparar",
				termino: "Carry-over de herbicidas",
				definicion: "La parte de un herbicida que sigue en el suelo después de aplicado y puede dañar al cultivo que viene. Se degrada más rápido con calor y lluvia, y depende del suelo y del principio activo.",
				lectura: "Lo que cuenta es el residuo el día de la siembra, no el de la aplicación. Si a la siembra supera el límite del marbete, hay que esperar.",
				plataforma: {
					donde: "Herbicidas",
					texto: "Una curva muestra cómo baja el residuo de cada herbicida, con la fecha de hoy y la de siembra marcadas. Al lado, los días de espera y una alerta por color, de muy baja a muy alta, según lo que tolera el próximo cultivo."
				},
				etiquetas: {
					aplicacion: "Aplicación",
					siembra: "Siembra",
					limite: "Límite del marbete",
					espera: "Días de espera"
				}
			},
			{
				id: "dosis-optima",
				momento: "fertilizar",
				termino: "Dosis óptima económica",
				definicion: "El rinde sube con la dosis pero cada kilo de fertilizante suma menos que el anterior. La dosis óptima económica es donde el último kilo todavía se paga con el grano que agrega, antes del rinde máximo.",
				lectura: "Ir por el rinde máximo casi nunca es negocio: los últimos kilos de fertilizante cuestan más de lo que devuelven.",
				plataforma: {
					donde: "Curvas de respuesta",
					texto: "Cada dosis aplicada se ve como un punto contra el rinde que logró, por ambiente, con una línea de tendencia que muestra dónde la respuesta se aplana. El análisis económico de la fertilización suma la ganancia y el retorno de cada aplicación."
				},
				etiquetas: {
					dosis: "Dosis",
					rinde: "Rinde",
					optima: "Óptima económica",
					maximo: "Máximo"
				}
			},
			{
				id: "balance-hidrico",
				momento: "acompanar",
				termino: "Balance hídrico y período crítico",
				definicion: "La cuenta diaria del agua del suelo: suma la lluvia y el riego y descuenta lo que consume el cultivo. Por debajo del umbral, el cultivo sufre. El período crítico son las etapas en las que esa falta más afecta al rinde.",
				lectura: "El mismo déficit pesa mucho más en el período crítico. Ahí conviene mirar el pronóstico de las dos semanas que vienen.",
				plataforma: {
					donde: "Balance hídrico",
					texto: "Un gráfico diario desde la siembra sigue el agua útil frente al umbral de estrés, con las lluvias debajo. El período crítico se marca como una franja roja, y la plataforma cuenta los días que faltan para que empiece."
				},
				etiquetas: {
					umbral: "Umbral",
					critico: "Período crítico",
					hoy: "Hoy",
					pronostico: "Pronóstico"
				}
			},
			{
				id: "dpv",
				momento: "acompanar",
				termino: "Déficit de presión de vapor",
				definicion: "El DPV mide qué tan seco está el aire: la diferencia entre el vapor que podría tener a esa temperatura y el que tiene. Alto, el aire le exige agua al cultivo; bajo, el aire húmedo favorece a los hongos.",
				lectura: "Un día suelto fuera de rango la planta lo aguanta. Lo que pesa son varios días seguidos.",
				plataforma: {
					donde: "Balance hídrico y clima de la campaña",
					texto: "Un indicador en kPa dice si el DPV está bien, si hay riesgo fúngico o si es excesivo, y en el clima de la campaña cada día lleva su estado. Los días de DPV alto también llegan en el aviso por WhatsApp."
				},
				etiquetas: {
					alto: "Aire seco",
					sano: "Zona sana",
					bajo: "Riesgo fúngico",
					dias: "Días"
				}
			},
			{
				id: "ndvi",
				momento: "acompanar",
				termino: "NDVI",
				definicion: "Un índice que se calcula con la luz roja e infrarroja que refleja el cultivo, desde el satélite. Más alto, más biomasa verde y activa.",
				lectura: "Sirve para comparar: zonas del mismo lote o el mismo lote en otra fecha. Las nubes y su sombra lo engañan.",
				plataforma: {
					donde: "Mapas del lote",
					texto: "La imagen satelital se pinta sobre el lote con una escala de colores de 0 a 1, con la fecha de la imagen y las referencias a mano. Al pasar el cursor se lee el valor de cada punto."
				},
				etiquetas: {
					bajo: "Bajo",
					alto: "Alto",
					pixel: "Cada cuadro: 10 × 10 m"
				}
			},
			{
				id: "brecha",
				momento: "cerrar",
				termino: "Rinde potencial y brecha",
				definicion: "El potencial es el techo que pone el agua del ciclo. La brecha es lo que falta entre ese techo y lo que el lote rinde con los nutrientes del suelo, fertilizando o en la cosecha.",
				lectura: "Una brecha grande con agua de sobra suele hablar de nutrientes. Si el agua es la que limita, fertilizar más no la cierra.",
				plataforma: {
					donde: "Brechas de rendimiento",
					texto: "Un gráfico por ambiente pone lado a lado el rinde base, el rinde fertilizando, el potencial y lo cosechado. La distancia hasta el potencial es la brecha: la original y la que queda después de fertilizar."
				},
				etiquetas: {
					potencial: "Potencial",
					fertilizando: "Fertilizando",
					base: "Base",
					cosechado: "Cosechado",
					brecha: "Brecha"
				}
			}
		],
		fuentes: {
			titulo: "De dónde sale la información",
			bajada: "Cada cálculo de Rinde Plus se apoya en bibliografía agronómica reconocida, y el equipo lo ajusta y lo revisa con datos de lotes reales.",
			propio: "Cómo lo ajustamos",
			propios: [
				{
					titulo: "Modelos del equipo agronómico",
					texto: "El carry-over de herbicidas, los coeficientes de cultivo del balance hídrico y los requerimientos de nutrientes se calibran con planillas propias, a partir de los marbetes y de la experiencia de campo."
				},
				{
					titulo: "Revisiones con lotes reales",
					texto: "Los cálculos se revisan periódicamente con datos de campo de distintos lotes y ambientes, y se ajustan cuando lo que se mide no coincide con lo que se estima."
				},
				{
					titulo: "Los ensayos de cada lote",
					texto: "Las curvas de respuesta se arman con las franjas y los ambientes que carga cada productor, así la dosis se lee con datos de su propio campo."
				}
			],
			terceros: "Bibliografía",
			ver: "Ver",
			datos: "Datos",
			datosTexto: "Suelo de referencia propio, con GeoINTA, IDECOR y SoilGrids, ajustado con el análisis de cada lote. Clima de varios proveedores meteorológicos seleccionados. Imágenes Sentinel-2: contiene datos modificados de Copernicus Sentinel."
		}
	}
};
//#endregion
//#region src/data/links.js
var LOGIN_URL = "https://cloud.rindeplus.com/login";
var APP_URL = "https://cloud.rindeplus.com";
//#endregion
//#region src/i18n/locales/es.jsx
var APP$2 = /* @__PURE__ */ jsx("a", {
	className: "rp-install__link",
	href: APP_URL,
	children: "cloud.rindeplus.com"
});
var es = {
	paginas: paginas$2,
	meta: {
		title: "Rinde Plus · Inteligencia agronómica para cada lote",
		description: "Rinde Plus integra el clima, el suelo, los ambientes y la historia de cada lote y los convierte en decisiones: qué hacer, cuándo y si conviene."
	},
	whatsapp: {
		message: "Hola, quiero más información sobre Rinde Plus",
		cta: "Hablemos por WhatsApp"
	},
	header: {
		openMenu: "Abrir menú",
		nav: {
			impact: "Impacto",
			campaign: "Plataforma",
			why: "Ventajas",
			learn: "Educación",
			about: "Nosotros",
			contact: "Contacto",
			install: "Cómo instalar la app"
		},
		themeDark: "Modo oscuro",
		themeLight: "Modo claro",
		themeSwitchAria: "Cambiar entre modo claro y oscuro",
		toLight: "Activar modo claro",
		toDark: "Activar modo oscuro",
		login: "Ingresar",
		loginLong: "Ingresar a la plataforma",
		language: "Idioma",
		logoAlt: "Rinde Plus"
	},
	hero: {
		titleA: "Inteligencia agronómica",
		titleB: "para cada lote",
		subtitle: /* @__PURE__ */ jsxs(Fragment$1, { children: [
			"Rinde Plus integra el clima, el suelo, los ambientes y la historia de cada lote y los convierte en ",
			/* @__PURE__ */ jsx("strong", { children: "decisiones" }),
			": qué hacer, cuándo y si conviene."
		] }),
		ctaTalk: "Hablemos de tus lotes",
		ctaCampaign: "Ver funcionalidades",
		mapAria: "Lote dibujado con su mapa de vigor por ambientes, surcos de siembra y curvas de nivel",
		avisos: {
			planificar: {
				titulo: "Planificación",
				texto: "Rinde potencial por ambiente, listo."
			},
			preparar: {
				titulo: "Suelo",
				texto: "Análisis de suelo interpretado."
			},
			fertilizar: {
				titulo: "Fertilización",
				texto: "Dosis óptima económica por ambiente."
			},
			sequia: {
				titulo: "Alerta hídrica",
				texto: "Riego necesario para llegar al rinde objetivo."
			},
			calor: {
				titulo: "Alerta de calor",
				texto: "Estrés térmico previsto para los próximos días."
			},
			lluvia: {
				titulo: "Alerta sanitaria",
				texto: "Riesgo de enfermedades fúngicas después de la lluvia."
			},
			cerrar: {
				titulo: "Cierre de campaña",
				texto: "Brecha de rinde por ambiente, calculada."
			}
		}
	},
	trusted: { title: "Confían en nosotros" },
	impacto: {
		title: "Más grano y más captura de CO₂",
		subtitle: (d) => `Números de la campaña ${d.campana} en los lotes que sigue Rinde Plus.`,
		indicadores: {
			hectareas: (d) => `monitoreadas en la última campaña (${d.campana})`,
			grano: () => "de grano extra por el manejo de brechas",
			carbono: () => "de CO₂ extra que queda en el suelo",
			suelo: () => "análisis de suelo interpretados"
		},
		pista: "Los indicadores con flecha abren el detalle por cultivo",
		cerrar: "Cerrar detalle",
		cultivos: {
			maiz: "Maíz",
			soja: "Soja",
			trigo: "Trigo",
			girasol: "Girasol",
			otros: "Otros cultivos"
		},
		total: "Total",
		tablas: {
			hectareas: {
				titulo: (d) => `Hectáreas por cultivo, campaña ${d.campana}`,
				columnas: [
					"Cultivo",
					"Hectáreas",
					"Parte",
					"Rinde promedio (kg/ha)"
				]
			},
			grano: {
				titulo: (d) => `Grano extra por cultivo, campaña ${d.campana}`,
				columnas: [
					"Cultivo",
					"kg/ha extra",
					"Grano extra"
				]
			},
			carbono: {
				titulo: (d) => `Carbono extra por cultivo (t CO₂), campaña ${d.campana}`,
				columnas: [
					"Cultivo",
					"Fijado",
					"Vuelve al suelo",
					"Queda estable"
				]
			},
			suelo: {
				titulo: (d) => `Análisis de suelo por cultivo, campaña ${d.campana}`,
				columnas: [
					"Cultivo",
					"Análisis",
					"Parte"
				]
			}
		},
		pie: { linea: (d) => `+${d.historia} ha de datos productivos en ${d.campanas} campañas (${d.desde} a ${d.hasta})` }
	},
	fx: {
		title: "Qué hace Rinde Plus",
		subtitle: "Una sola herramienta que acompaña cada lote durante toda la campaña, del plan al cierre.",
		momentos: "Momentos de la campaña",
		siguiente: "Siguiente",
		anterior: "Anterior",
		volverInicio: "Volver al inicio",
		charts: {
			zones: [
				"Alto",
				"Medio",
				"Bajo"
			],
			potentialCaption: "Rinde base y potencial por ambiente",
			residueCaption: "Residuo y riesgo de fitotoxicidad",
			doseCaption: "Dosis óptima económica",
			today: "Hoy",
			forecastCaption: "Clima y pronóstico del lote",
			fourYields: [
				"Potencial",
				"Fertilizando",
				"Cosechado",
				"Base"
			],
			gapCaption: "Brecha de rendimiento"
		},
		panels: {
			planificar: {
				tag: "Planificar",
				name: "El rinde que puede dar cada lote",
				description: "Cuánto puede rendir cada ambiente del lote, según su suelo, el análisis propio y el agua de la campaña.",
				bullets: [
					"Suelo de referencia y análisis propio",
					"Riego necesario para el rinde objetivo",
					"Rinde base y potencial de cada ambiente"
				]
			},
			preparar: {
				tag: "Preparar el lote",
				name: "El agua del perfil y el residuo de herbicidas",
				description: "El agua que usa el cultivo de servicio frente a un barbecho, y cuánto herbicida queda según lluvia, riego y fecha.",
				bullets: [
					"Alerta de fitotoxicidad para el próximo cultivo",
					"Aplicaciones de la campaña anterior incluidas",
					"Análisis de suelo y plan de enmiendas"
				]
			},
			fertilizar: {
				tag: "Fertilizar",
				name: "La dosis que se paga",
				description: "Simulación por producto y dosis con el balance de nutrientes, la curva de respuesta y los precios cargados en el lote.",
				bullets: [
					"Dosis óptima económica por lote",
					"Rinde fertilizando, sin pasar el potencial",
					"Margen bruto por lote y por ambiente"
				]
			},
			acompanar: {
				tag: "Acompañar el cultivo",
				name: "Avisos de lo que viene en cada lote",
				description: "Clima y pronóstico por lote, y monitoreo a campo con catálogos de malezas, plagas y enfermedades.",
				bullets: [
					"Alertas de estrés térmico y enfermedades",
					"Recomendación que pasa al plan de aplicaciones",
					"Avisos diarios por WhatsApp, que se responden"
				]
			},
			cerrar: {
				tag: "Cerrar y aprender",
				name: "Dónde se perdió rinde",
				description: "Lo que podía rendir cada lote contra lo cosechado, y el plan contra lo realizado, en rinde y en margen.",
				bullets: [
					"Brecha de rendimiento por lote y por ambiente",
					"Mapa de análisis entre lotes y campañas",
					"Vista consolidada por empresa"
				]
			}
		}
	},
	benefits: {
		aria: "Por qué Rinde Plus",
		roledesc: "carrusel",
		slideRoledesc: "punto",
		slideLabel: (i, n) => `${i} de ${n}`,
		prev: "Punto anterior",
		next: "Punto siguiente",
		dotLabel: (i, title) => `Punto ${i}: ${title}`,
		items: [
			{
				title: "Tu lote, no el promedio",
				copy: "Cada decisión parte del clima, el suelo y la historia de ese lote, no de lo típico de la zona.",
				detail: "Dibujado sobre imagen satelital con sus ambientes. Dos lotes vecinos pueden pedir decisiones distintas."
			},
			{
				title: "Más lotes, sin perder detalle",
				copy: "Clima, suelo, ambientes, monitoreo e historia ya cruzados en un solo lugar, sin armar planillas.",
				detail: "El tiempo que se iba en juntar datos queda para recorrer el campo y decidir."
			},
			{
				title: "Qué hacer y cuándo",
				copy: "No solo ver el lote en un mapa: saber qué conviene hacer y en qué momento.",
				detail: "Alertas de clima, enfermedades y fitotoxicidad, y un aviso diario por WhatsApp que se puede responder."
			},
			{
				title: "Independiente",
				copy: "Rinde Plus no vende insumos: a\xA0veces la mejor decisión es no aplicar.",
				detail: "Antes de aplicar, la simulación con los precios del lote muestra si la dosis se paga."
			}
		]
	},
	cta: {
		title: "Hablemos de tus lotes",
		vision: "Nuestra visión: que cada lote se decida con criterio agronómico, no solo los de quien puede pagarse un equipo técnico.",
		button: "Hablemos por WhatsApp",
		hint: "Sin formularios · respuesta del equipo en menos de 24 h"
	},
	install: {
		titleA: "Rinde Plus en el celular,",
		titleB: "como una app",
		subtitle: "Se instala desde el navegador en cuatro pasos, sin pasar por ninguna tienda.",
		ios: {
			name: "iPhone",
			steps: [
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Abrir ",
					APP$2,
					" en ",
					/* @__PURE__ */ jsx("strong", { children: "Safari" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tocar ",
					/* @__PURE__ */ jsx("strong", { children: "Compartir" }),
					" ",
					/* @__PURE__ */ jsx(LuShare, {
						className: "rp-install__inline-icon",
						"aria-hidden": "true"
					}),
					", en la barra de abajo."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Elegir ",
					/* @__PURE__ */ jsx("strong", { children: "Agregar a pantalla de inicio" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tocar ",
					/* @__PURE__ */ jsx("strong", { children: "Agregar" }),
					" para confirmar."
				] })
			]
		},
		android: {
			name: "Android",
			steps: [
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Abrir ",
					APP$2,
					" en ",
					/* @__PURE__ */ jsx("strong", { children: "Chrome" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tocar el menú ",
					/* @__PURE__ */ jsx("strong", { children: "⋮" }),
					" de arriba a la derecha."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Elegir ",
					/* @__PURE__ */ jsx("strong", { children: "Instalar app" }),
					" o ",
					/* @__PURE__ */ jsx("strong", { children: "Agregar a pantalla principal" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tocar ",
					/* @__PURE__ */ jsx("strong", { children: "Instalar" }),
					" para confirmar."
				] })
			]
		}
	},
	credits: {
		lead: "Fotos",
		via: "vía Wikimedia Commons",
		photos: [
			"Lotes de la pampa desde el avión, Murray Foubister",
			"Sembrado de soja en Argentina, Alfonso",
			"Girasol pampeano, Emilio Küffer",
			"Cosecha de soja, Clasonsf"
		]
	},
	footer: {
		email: "Email",
		emailAria: "Enviar email a inforindeplus@gmail.com",
		instagram: "Instagram",
		instagramAria: "Abrir Instagram de Rinde Plus",
		whatsapp: "WhatsApp",
		whatsappAria: "Abrir chat de WhatsApp",
		officeAria: "Ver ubicación en Google Maps",
		rights: "Todos los derechos reservados.",
		made: "Hecho con datos y criterio agronómico",
		legalNav: "Información legal",
		privacy: "Política de privacidad"
	}
};
//#endregion
//#region src/i18n/locales/paginas.en.js
var paginas$1 = {
	nosotros: {
		meta: {
			title: "About · Rinde Plus",
			description: "Rinde Plus is a company from Alta Gracia, Córdoba, Argentina, bringing agronomy and information systems together so every field is decided with agronomic judgment. Who we are and how we work."
		},
		title: "We are Rinde Plus",
		lead: "We combine agronomic knowledge and technology so every field is decided with data and with judgment.",
		bloques: [
			{
				titulo: "Who we are",
				texto: "A team from Alta Gracia, Córdoba, Argentina, that brings two worlds together: the agronomic knowledge of people who walk the field and the technology that carries it into every decision. We work at the same table, and it shows in every number in the platform."
			},
			{
				titulo: "What we do",
				texto: "Rinde Plus follows every field through the whole season: how much it can yield, how much water the soil holds, which rate pays off, what risks are coming and, at the close, where yield was lost. For growers, advisors and farm businesses."
			},
			{
				titulo: "How we do it",
				texto: "We bring together the soil, the weather, satellite imagery and the history of every field, and read them with agronomic judgment. The result arrives clearly: in the platform, in reports and in a WhatsApp alert you can reply to."
			}
		],
		idea: {
			kicker: "The idea",
			titulo: "Two neighboring fields can call for different decisions.",
			lead: "Rinde Plus exists to find that difference and explain it: soil, water in the profile, the history of each zone and the season’s weather, field by field."
		},
		equipo: {
			kicker: "Our team",
			titulo: "Agronomy and software, at the same table",
			bajada: "Every number in the platform is worked out together by people who know the field and people who build the software.",
			miembros: [
				{
					nombre: "Marcos Flesia",
					cargo: "CEO",
					profesion: "Agronomist",
					area: "agro"
				},
				{
					nombre: "Santiago Quesada",
					cargo: "CTO",
					profesion: "Information systems engineer",
					area: "sis"
				},
				{
					nombre: "Manuel Frías",
					profesion: "Information systems engineer",
					area: "sis"
				},
				{
					nombre: "Ángeles Sanz",
					profesion: "Agronomist",
					area: "agro"
				},
				{
					nombre: "Tomás Abrate",
					profesion: "Information systems engineer",
					area: "sis"
				}
			]
		},
		dosLotes: {
			aria: "Two neighboring fields with different zone maps and a different alert for each",
			a: {
				nombre: "Field 14",
				aviso: "Fertilizing the high zone pays off."
			},
			b: {
				nombre: "Field 15",
				aviso: "Water is limiting: fertilizer won’t pay."
			}
		},
		anatomia: {
			kicker: "How we think about every number",
			titulo: "Anatomy of an alert",
			bajada: "Every alert says what was measured, which criteria were used to read it and what to do. This one comes from the water balance, as it arrives on WhatsApp.",
			mensaje: {
				encabezado: "Water stress · Early alert",
				medido: "Available water 52.3% · VPD 1.2 kPa",
				criterio: "Threshold 60% · VPD max 1.7 · three days in a row",
				decision: "Apply if the forecast pushes VPD up.",
				lote: "Field 14 · low zone",
				hora: "7:02"
			},
			partes: [
				{
					titulo: "What was measured",
					texto: "Available water comes from the zone’s daily water balance; VPD, from temperature and humidity at the field’s location."
				},
				{
					titulo: "The criteria",
					texto: "The threshold depends on the crop and its growth stage. One day isn’t enough: the alert needs three days in a row."
				},
				{
					titulo: "The decision",
					texto: "The level says how serious it is and what to do. If data were missing, the alert would say so instead of making it up."
				}
			]
		},
		compromisos: {
			titulo: "Our commitments",
			items: [
				{
					titulo: "We don’t make up data.",
					texto: "A day without weather stays a gap, and a missing soil test is flagged. Better one number less than a false one."
				},
				{
					titulo: "We don’t use black boxes.",
					texto: "Every calculation follows a rule you can read and discuss with your advisor."
				},
				{
					titulo: "We don’t replace the agronomist.",
					texto: "We take the data gathering off their plate so they have more time in the field."
				},
				{
					titulo: "We recommend independently.",
					texto: "The recommendation comes from the field, not from a product. If the simulation shows a rate doesn’t pay, the platform says so."
				}
			]
		},
		lugar: {
			kicker: "Where we are",
			titulo: "Alta Gracia, Córdoba",
			texto: "In the heart of Argentina’s farm country, close to the fields we follow. Rinde Plus® is a brand of Conextion S.A.S.",
			direccion: "Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina",
			mapa: "View on map"
		}
	},
	educacion: {
		meta: {
			title: "What’s behind every number · Rinde Plus",
			description: "Nine agronomy concepts and how they look in Rinde Plus: management zones, law of the minimum, plant available water, carryover, optimum rate, water balance, VPD, NDVI and yield gap."
		},
		kicker: "Learn",
		title: "What’s behind every number",
		lead: "The agronomic concepts behind every field decision, what they mean and how they look in Rinde Plus. In season order.",
		mapa: "The nine concepts",
		enPlataforma: "In Rinde Plus",
		momentos: [
			{
				id: "planificar",
				nombre: "Plan"
			},
			{
				id: "preparar",
				nombre: "Prepare the field"
			},
			{
				id: "fertilizar",
				nombre: "Fertilize"
			},
			{
				id: "acompanar",
				nombre: "Follow the crop"
			},
			{
				id: "cerrar",
				nombre: "Close and learn"
			}
		],
		probar: "Try it",
		comoSeLee: "How to read it",
		lecciones: [
			{
				id: "ambientes",
				momento: "planificar",
				termino: "Management zones",
				definicion: "Areas of a field that behave alike because of their soil, relief and history. One field can have high, medium and low zones that yield differently and call for different management.",
				lectura: "Before comparing numbers, check which zone each one comes from: a low yield in the low zone can be a good result.",
				plataforma: {
					donde: "Zones and trials",
					texto: "Each zone is drawn over the satellite image in its own color, and that color follows it across the platform: the field’s charts, indicators and tables are split by zone."
				},
				etiquetas: {
					alto: "High",
					medio: "Medium",
					bajo: "Low"
				}
			},
			{
				id: "ley-del-minimo",
				momento: "planificar",
				termino: "Law of the minimum",
				definicion: "Yield is limited by the scarcest nutrient, even when the others are plentiful. And water sits above them all: no nutrient takes yield beyond what the season’s water allows.",
				lectura: "Fertilizing a nutrient that isn’t limiting adds no yield. The one that matters is the shortest.",
				plataforma: {
					donde: "Yield gaps",
					texto: "It shows up as each zone’s base yield: what the soil gives without fertilizer, on a bar shaped like a grain silo. Below it, the nutrient that sets the ceiling, for example “Limited by nitrogen (N)”."
				},
				demo: {
					ejemplo: "Corn example",
					pista: "Tap a bar to fertilize that nutrient.",
					nutrientes: [
						"Nitrogen",
						"Phosphorus",
						"Potassium",
						"Calcium",
						"Magnesium",
						"Sulfur"
					],
					simbolos: [
						"N",
						"P",
						"K",
						"Ca",
						"Mg",
						"S"
					],
					techo: "Water ceiling",
					rinde: "Yield",
					limita: "Limited by",
					agua: "water",
					fertilizar: (n) => `Fertilize with ${n}`,
					reiniciar: "Start over"
				}
			},
			{
				id: "agua-util",
				momento: "preparar",
				termino: "Plant available water",
				definicion: "Soil water the crop can actually use. It goes from 0% at the wilting point, when the crop can no longer extract water, to 100% at field capacity, the most the soil can hold.",
				lectura: "0% doesn’t mean dry soil: it means water the crop can no longer use. What matters is how far it is from the crop’s threshold.",
				plataforma: {
					donde: "Water balance",
					texto: "A round gauge shows available water as a percentage, in green, yellow or red depending on how close the crop is to its stress threshold. The field dashboard shows it by zone, and the soil analysis layer by layer."
				},
				etiquetas: {
					pmp: "Wilting point",
					cc: "Field capacity",
					umbral: "Threshold",
					hoy: "Today"
				}
			},
			{
				id: "carry-over",
				momento: "preparar",
				termino: "Herbicide carryover",
				definicion: "The share of a herbicide that stays in the soil after application and can injure the next crop. It breaks down faster with heat and rain, and depends on the soil and the active ingredient.",
				lectura: "What counts is the residue on planting day, not on application day. If it is above the label limit at planting, you have to wait.",
				plataforma: {
					donde: "Herbicides",
					texto: "A curve shows how each herbicide’s residue drops over time, with today and the sowing date marked. Next to it, the waiting days and a color alert, from very low to very high, based on what the next crop tolerates."
				},
				etiquetas: {
					aplicacion: "Application",
					siembra: "Planting",
					limite: "Label limit",
					espera: "Waiting days"
				}
			},
			{
				id: "dosis-optima",
				momento: "fertilizar",
				termino: "Economic optimum rate",
				definicion: "Yield rises with rate, but each extra pound of fertilizer adds less than the one before. The economic optimum is where the last pound still pays for itself in grain, before maximum yield.",
				lectura: "Chasing maximum yield is rarely good business: the last pounds of fertilizer cost more than they return.",
				plataforma: {
					donde: "Response curves",
					texto: "Each applied rate shows up as a point against the yield it reached, by zone, with a trend line that shows where the response flattens. The fertilization economic analysis adds up the profit and return of each application."
				},
				etiquetas: {
					dosis: "Rate",
					rinde: "Yield",
					optima: "Economic optimum",
					maximo: "Maximum"
				}
			},
			{
				id: "balance-hidrico",
				momento: "acompanar",
				termino: "Water balance and critical period",
				definicion: "A daily account of soil water: it adds rain and irrigation and subtracts what the crop uses. Below the threshold, the crop suffers. The critical period is the stages when that shortage hurts yield the most.",
				lectura: "The same deficit weighs much more in the critical period. That’s when the next two weeks of forecast matter most.",
				plataforma: {
					donde: "Water balance",
					texto: "A daily chart from sowing follows available water against the stress threshold, with rain below it. The critical period is marked as a red band, and the platform counts the days until it starts."
				},
				etiquetas: {
					umbral: "Threshold",
					critico: "Critical period",
					hoy: "Today",
					pronostico: "Forecast"
				}
			},
			{
				id: "dpv",
				momento: "acompanar",
				termino: "Vapor pressure deficit",
				definicion: "VPD measures how dry the air is: the gap between the water vapor it could hold at that temperature and what it holds. High, the air pulls water from the crop; low, humid air favors fungi.",
				lectura: "A single day out of range the plant can handle. What weighs is several days in a row.",
				plataforma: {
					donde: "Water balance and season weather",
					texto: "A gauge in kPa tells whether VPD is fine, whether there is fungal risk or whether it is too high, and the season weather gives each day its status. High VPD days also come in the WhatsApp alert."
				},
				etiquetas: {
					alto: "Dry air",
					sano: "Healthy zone",
					bajo: "Fungal risk",
					dias: "Days"
				}
			},
			{
				id: "ndvi",
				momento: "acompanar",
				termino: "NDVI",
				definicion: "An index calculated from the red and near-infrared light the crop reflects, seen from the satellite. Higher means more green, active biomass.",
				lectura: "It’s for comparing: areas of the same field, or the same field on another date. Clouds and their shadows fool it.",
				plataforma: {
					donde: "Field maps",
					texto: "The satellite image is painted over the field on a color scale from 0 to 1, with the image date and the legend at hand. Hover to read the value at each point."
				},
				etiquetas: {
					bajo: "Low",
					alto: "High",
					pixel: "Each square: 10 × 10 m"
				}
			},
			{
				id: "brecha",
				momento: "cerrar",
				termino: "Yield potential and yield gap",
				definicion: "Potential is the ceiling set by the season’s water. The gap is what’s missing between that ceiling and what the field yields with soil nutrients, with fertilizer or at harvest.",
				lectura: "A large gap with plenty of water usually points to nutrients. If water is what limits, more fertilizer won’t close it.",
				plataforma: {
					donde: "Yield gaps",
					texto: "A chart by zone puts base yield, fertilized yield, potential and harvested yield side by side. The distance to the potential is the gap: the original one and what is left after fertilizing."
				},
				etiquetas: {
					potencial: "Potential",
					fertilizando: "Fertilized",
					base: "Base",
					cosechado: "Harvested",
					brecha: "Gap"
				}
			}
		],
		fuentes: {
			titulo: "Where the information comes from",
			bajada: "Every Rinde Plus calculation rests on established agronomy literature, and the team adjusts and reviews it with data from real fields.",
			propio: "How we adjust it",
			propios: [
				{
					titulo: "Models from the agronomy team",
					texto: "Herbicide carryover, the crop coefficients of the water balance and nutrient requirements are calibrated with our own spreadsheets, built from product labels and field experience."
				},
				{
					titulo: "Reviews with real fields",
					texto: "Calculations are reviewed regularly with field data from different fields and zones, and adjusted when what is measured does not match what is estimated."
				},
				{
					titulo: "Each field’s own trials",
					texto: "Response curves are built from the strips and zones each grower loads, so the rate is read with data from their own field."
				}
			],
			terceros: "Literature",
			ver: "View",
			datos: "Data",
			datosTexto: "Our own reference soil data, with GeoINTA, IDECOR and SoilGrids, adjusted with each field’s soil test. Weather from several selected providers. Sentinel-2 imagery: contains modified Copernicus Sentinel data."
		}
	}
};
//#endregion
//#region src/i18n/locales/en.jsx
var APP$1 = /* @__PURE__ */ jsx("a", {
	className: "rp-install__link",
	href: APP_URL,
	children: "cloud.rindeplus.com"
});
var en = {
	paginas: paginas$1,
	meta: {
		title: "Rinde Plus · Agronomic intelligence for every field",
		description: "Rinde Plus brings together the weather, soil, management zones and history of every field and turns them into decisions: what to do, when, and whether it pays."
	},
	whatsapp: {
		message: "Hi, I'd like more information about Rinde Plus",
		cta: "Let's talk on WhatsApp"
	},
	header: {
		openMenu: "Open menu",
		nav: {
			impact: "Impact",
			campaign: "Platform",
			why: "Benefits",
			learn: "Learn",
			about: "About",
			contact: "Contact",
			install: "How to install the app"
		},
		themeDark: "Dark mode",
		themeLight: "Light mode",
		themeSwitchAria: "Switch between light and dark mode",
		toLight: "Switch to light mode",
		toDark: "Switch to dark mode",
		login: "Log in",
		loginLong: "Log in to the platform",
		language: "Language",
		logoAlt: "Rinde Plus"
	},
	hero: {
		titleA: "Agronomic intelligence",
		titleB: "for every field",
		subtitle: /* @__PURE__ */ jsxs(Fragment$1, { children: [
			"Rinde Plus brings together the weather, soil, management zones and history of every field and turns them into ",
			/* @__PURE__ */ jsx("strong", { children: "decisions" }),
			": what to do, when, and whether it pays."
		] }),
		ctaTalk: "Let's talk about your fields",
		ctaCampaign: "See features",
		mapAria: "A field drawn with its vigor map by management zone, crop rows and contour lines",
		avisos: {
			planificar: {
				titulo: "Planning",
				texto: "Potential yield by zone, ready."
			},
			preparar: {
				titulo: "Soil",
				texto: "Soil test interpreted."
			},
			fertilizar: {
				titulo: "Fertilization",
				texto: "Economic optimum rate by zone."
			},
			sequia: {
				titulo: "Water alert",
				texto: "Irrigation needed to reach the target yield."
			},
			calor: {
				titulo: "Heat alert",
				texto: "Heat stress expected in the coming days."
			},
			lluvia: {
				titulo: "Disease alert",
				texto: "Fungal disease risk after the rain."
			},
			cerrar: {
				titulo: "Season close",
				texto: "Yield gap by zone, calculated."
			}
		}
	},
	trusted: { title: "Trusted by" },
	impacto: {
		title: "More grain and more CO₂ capture",
		subtitle: (d) => `Figures from the ${d.campana} season across the fields Rinde Plus follows.`,
		indicadores: {
			hectareas: (d) => `monitored in the latest season (${d.campana})`,
			grano: () => "of extra grain from yield gap management",
			carbono: () => "of extra CO₂ that stays in the soil",
			suelo: () => "soil tests interpreted"
		},
		pista: "Figures with an arrow open the breakdown by crop",
		cerrar: "Close breakdown",
		cultivos: {
			maiz: "Corn",
			soja: "Soybean",
			trigo: "Wheat",
			girasol: "Sunflower",
			otros: "Other crops"
		},
		total: "Total",
		tablas: {
			hectareas: {
				titulo: (d) => `Hectares by crop, ${d.campana} season`,
				columnas: [
					"Crop",
					"Hectares",
					"Share",
					"Average yield (kg/ha)"
				]
			},
			grano: {
				titulo: (d) => `Extra grain by crop, ${d.campana} season`,
				columnas: [
					"Crop",
					"Extra kg/ha",
					"Extra grain"
				]
			},
			carbono: {
				titulo: (d) => `Extra carbon by crop (t CO₂), ${d.campana} season`,
				columnas: [
					"Crop",
					"Fixed",
					"Returns to soil",
					"Stays stable"
				]
			},
			suelo: {
				titulo: (d) => `Soil tests by crop, ${d.campana} season`,
				columnas: [
					"Crop",
					"Soil tests",
					"Share"
				]
			}
		},
		pie: { linea: (d) => `+${d.historia} ha of production data over ${d.campanas} seasons (${d.desde} to ${d.hasta})` }
	},
	fx: {
		title: "What Rinde Plus does",
		subtitle: "One tool that follows every field through the whole season, from plan to close.",
		momentos: "Moments of the season",
		siguiente: "Next",
		anterior: "Previous",
		volverInicio: "Back to the start",
		charts: {
			zones: [
				"High",
				"Mid",
				"Low"
			],
			potentialCaption: "Base and potential yield by zone",
			residueCaption: "Residue and crop injury risk",
			doseCaption: "Economic optimum rate",
			today: "Today",
			forecastCaption: "Field weather and forecast",
			fourYields: [
				"Potential",
				"Fertilized",
				"Harvested",
				"Base"
			],
			gapCaption: "Yield gap"
		},
		panels: {
			planificar: {
				tag: "Plan",
				name: "The yield each field can reach",
				description: "How much each management zone can yield, based on its soil, its own soil test and the season’s water.",
				bullets: [
					"Reference soil and own soil analysis",
					"Irrigation needed for the target yield",
					"Base and potential yield for each zone"
				]
			},
			preparar: {
				tag: "Prepare the field",
				name: "Soil water and herbicide residue",
				description: "Cover crop water use against a fallow, and how much herbicide remains based on rain, irrigation and date.",
				bullets: [
					"Phytotoxicity alert for the next crop",
					"Last season’s applications included",
					"Soil analysis and amendment plan"
				]
			},
			fertilizar: {
				tag: "Fertilize",
				name: "The rate that pays",
				description: "Simulation by product and rate with the nutrient balance, the response curve and the prices set for the field.",
				bullets: [
					"Economic optimum dose per field",
					"Fertilized yield, capped at potential",
					"Gross margin per field and zone"
				]
			},
			acompanar: {
				tag: "Follow the crop",
				name: "Notices on what is coming for each field",
				description: "Field-level weather and forecast, and field scouting with catalogs of weeds, pests and diseases.",
				bullets: [
					"Heat stress and disease alerts",
					"Recommendations that go to the spray plan",
					"Daily WhatsApp notices that can be answered"
				]
			},
			cerrar: {
				tag: "Close and learn",
				name: "Where yield was lost",
				description: "What each field could have yielded against what was harvested, and the plan against what was done, in yield and in margin.",
				bullets: [
					"Yield gap per field and zone",
					"Analysis map across fields and seasons",
					"Consolidated view per company"
				]
			}
		}
	},
	benefits: {
		aria: "Why Rinde Plus",
		roledesc: "carousel",
		slideRoledesc: "slide",
		slideLabel: (i, n) => `${i} of ${n}`,
		prev: "Previous point",
		next: "Next point",
		dotLabel: (i, title) => `Point ${i}: ${title}`,
		items: [
			{
				title: "Your field, not the average",
				copy: "Every decision starts from that field’s weather, soil and history, not from what is typical for the area.",
				detail: "Drawn on satellite imagery with its management zones. Two neighboring fields can call for different decisions."
			},
			{
				title: "More fields, no less detail",
				copy: "Weather, soil, zones, scouting and history already combined in one place, with no spreadsheets to build.",
				detail: "The time that went into gathering data goes back to walking the fields and deciding."
			},
			{
				title: "What to do and when",
				copy: "Not just seeing the field on a map: knowing what is worth doing and when.",
				detail: "Weather, disease and crop injury alerts, and a daily WhatsApp notice you can reply to."
			},
			{
				title: "Independent",
				copy: "Rinde Plus does not sell inputs: sometimes the best decision is not to apply.",
				detail: "Before applying, a simulation with the field’s prices shows whether the rate pays off."
			}
		]
	},
	cta: {
		title: "Let's talk about your fields",
		vision: "Our vision: every field decided with agronomic judgment, not only those of growers who can afford a technical team.",
		button: "Let's talk on WhatsApp",
		hint: "No forms · the team replies within 24 h"
	},
	install: {
		titleA: "Rinde Plus on your phone,",
		titleB: "just like an app",
		subtitle: "Install it from the browser in four steps, no app store needed.",
		ios: {
			name: "iPhone",
			steps: [
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Open ",
					APP$1,
					" in ",
					/* @__PURE__ */ jsx("strong", { children: "Safari" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tap ",
					/* @__PURE__ */ jsx("strong", { children: "Share" }),
					" ",
					/* @__PURE__ */ jsx(LuShare, {
						className: "rp-install__inline-icon",
						"aria-hidden": "true"
					}),
					" in the bottom bar."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Choose ",
					/* @__PURE__ */ jsx("strong", { children: "Add to Home Screen" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tap ",
					/* @__PURE__ */ jsx("strong", { children: "Add" }),
					" to confirm."
				] })
			]
		},
		android: {
			name: "Android",
			steps: [
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Open ",
					APP$1,
					" in ",
					/* @__PURE__ */ jsx("strong", { children: "Chrome" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tap the ",
					/* @__PURE__ */ jsx("strong", { children: "⋮" }),
					" menu at the top right."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Choose ",
					/* @__PURE__ */ jsx("strong", { children: "Install app" }),
					" or ",
					/* @__PURE__ */ jsx("strong", { children: "Add to Home screen" }),
					"."
				] }),
				/* @__PURE__ */ jsxs(Fragment$1, { children: [
					"Tap ",
					/* @__PURE__ */ jsx("strong", { children: "Install" }),
					" to confirm."
				] })
			]
		}
	},
	credits: {
		lead: "Photos",
		via: "via Wikimedia Commons",
		photos: [
			"Pampas fields from the air, Murray Foubister",
			"Soybean field in Argentina, Alfonso",
			"Pampas sunflower, Emilio Küffer",
			"Soybean harvest, Clasonsf"
		]
	},
	footer: {
		email: "Email",
		emailAria: "Send an email to inforindeplus@gmail.com",
		instagram: "Instagram",
		instagramAria: "Open Rinde Plus on Instagram",
		whatsapp: "WhatsApp",
		whatsappAria: "Open WhatsApp chat",
		officeAria: "See location on Google Maps",
		rights: "All rights reserved.",
		made: "Built with data and agronomic judgment",
		legalNav: "Legal information",
		privacy: "Privacy policy"
	}
};
//#endregion
//#region src/i18n/locales/paginas.pt.js
var paginas = {
	nosotros: {
		meta: {
			title: "Sobre nós · Rinde Plus",
			description: "A Rinde Plus é uma empresa de Alta Gracia, Córdoba, Argentina, que junta agronomia e sistemas de informação para que cada talhão seja decidido com critério agronômico. Quem somos e como trabalhamos."
		},
		title: "Somos a Rinde Plus",
		lead: "Unimos conhecimento agronômico e tecnologia para que cada talhão seja decidido com dados e com critério.",
		bloques: [
			{
				titulo: "Quem somos",
				texto: "Uma equipe de Alta Gracia, Córdoba, Argentina, que junta dois mundos: o saber agronômico de quem percorre o talhão e a tecnologia que o leva a cada decisão. Trabalhamos na mesma mesa, e isso aparece em cada número da plataforma."
			},
			{
				titulo: "O que fazemos",
				texto: "A Rinde Plus acompanha cada talhão durante toda a safra: quanto pode produzir, quanta água o solo tem, que dose se paga, que riscos vêm e, no fechamento, onde se perdeu produtividade. Para produtores, consultores e empresas do setor."
			},
			{
				titulo: "Como fazemos",
				texto: "Juntamos o solo, o clima, as imagens de satélite e o histórico de cada talhão, e os lemos com critério agronômico. O resultado chega claro: na plataforma, em relatórios e num aviso pelo WhatsApp que pode ser respondido."
			}
		],
		idea: {
			kicker: "A ideia",
			titulo: "Dois talhões vizinhos podem pedir decisões diferentes.",
			lead: "A Rinde Plus existe para encontrar essa diferença e explicá-la: o solo, a água do perfil, o histórico de cada ambiente e o clima da safra, talhão por talhão."
		},
		equipo: {
			kicker: "Nossa equipe",
			titulo: "Agronomia e software, na mesma mesa",
			bajada: "Cada número da plataforma é pensado em conjunto por quem conhece o campo e por quem constrói o software.",
			miembros: [
				{
					nombre: "Marcos Flesia",
					cargo: "CEO",
					profesion: "Engenheiro agrônomo",
					area: "agro"
				},
				{
					nombre: "Santiago Quesada",
					cargo: "CTO",
					profesion: "Engenheiro de sistemas de informação",
					area: "sis"
				},
				{
					nombre: "Manuel Frías",
					profesion: "Engenheiro de sistemas de informação",
					area: "sis"
				},
				{
					nombre: "Ángeles Sanz",
					profesion: "Engenheira agrônoma",
					area: "agro"
				},
				{
					nombre: "Tomás Abrate",
					profesion: "Engenheiro de sistemas de informação",
					area: "sis"
				}
			]
		},
		dosLotes: {
			aria: "Dois talhões vizinhos com mapas de ambientes diferentes e um aviso diferente para cada um",
			a: {
				nombre: "Talhão 14",
				aviso: "Vale a pena adubar o ambiente alto."
			},
			b: {
				nombre: "Talhão 15",
				aviso: "A água limita: adubar não se paga."
			}
		},
		anatomia: {
			kicker: "Como pensamos cada número",
			titulo: "Anatomia de um aviso",
			bajada: "Cada aviso diz o que foi medido, com que critério foi lido e o que convém fazer. Este é um do balanço hídrico, como chega pelo WhatsApp.",
			mensaje: {
				encabezado: "Estresse hídrico · Alerta antecipado",
				medido: "Água disponível 52,3 % · DPV 1,2 kPa",
				criterio: "Limiar 60 % · DPV máx. 1,7 · três dias seguidos",
				decision: "Aplicar se a previsão subir o DPV.",
				lote: "Talhão 14 · ambiente baixo",
				hora: "7:02"
			},
			partes: [
				{
					titulo: "O que foi medido",
					texto: "A água disponível vem do balanço hídrico diário do ambiente; o DPV, da temperatura e da umidade na localização do talhão."
				},
				{
					titulo: "O critério",
					texto: "O limiar depende da cultura e do estádio em que está. Um dia isolado não basta: o alerta pede três dias seguidos."
				},
				{
					titulo: "A decisão",
					texto: "O nível diz quão grave é e o que convém fazer. Se faltasse um dado, o aviso diria em vez de inventá-lo."
				}
			]
		},
		compromisos: {
			titulo: "Nossos compromissos",
			items: [
				{
					titulo: "Não inventamos dados.",
					texto: "Um dia sem clima fica como lacuna e uma análise que falta é avisada. Melhor um número a menos que um falso."
				},
				{
					titulo: "Não usamos caixas-pretas.",
					texto: "Cada cálculo segue uma regra que pode ser lida e discutida com o consultor."
				},
				{
					titulo: "Não substituímos o agrônomo.",
					texto: "Tiramos dele o trabalho de juntar dados para que tenha mais tempo no campo."
				},
				{
					titulo: "Recomendamos com independência.",
					texto: "A recomendação sai do talhão, não de um produto. Se a simulação mostra que uma dose não se paga, a plataforma diz."
				}
			]
		},
		lugar: {
			kicker: "Onde estamos",
			titulo: "Alta Gracia, Córdoba",
			texto: "No centro da região agrícola argentina, perto dos talhões que acompanhamos. Rinde Plus® é uma marca da Conextion S.A.S.",
			direccion: "Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina",
			mapa: "Ver no mapa"
		}
	},
	educacion: {
		meta: {
			title: "O que há por trás de cada número · Rinde Plus",
			description: "Nove conceitos agronômicos e como aparecem na Rinde Plus: ambientes, lei do mínimo, água disponível, carryover, dose ótima, balanço hídrico, DPV, NDVI e lacuna."
		},
		kicker: "Educação",
		title: "O que há por trás de cada número",
		lead: "Os conceitos agronômicos por trás de cada decisão do talhão, o que significam e como aparecem na Rinde Plus. Na ordem da safra.",
		mapa: "Os nove conceitos",
		enPlataforma: "Na Rinde Plus",
		momentos: [
			{
				id: "planificar",
				nombre: "Planejar"
			},
			{
				id: "preparar",
				nombre: "Preparar o talhão"
			},
			{
				id: "fertilizar",
				nombre: "Adubar"
			},
			{
				id: "acompanar",
				nombre: "Acompanhar a cultura"
			},
			{
				id: "cerrar",
				nombre: "Fechar e aprender"
			}
		],
		probar: "Para testar",
		comoSeLee: "Como se lê",
		lecciones: [
			{
				id: "ambientes",
				momento: "planificar",
				termino: "Ambientes",
				definicion: "Zonas do talhão que se comportam de forma parecida pelo solo, relevo e histórico. Um mesmo talhão pode ter ambientes alto, médio e baixo, que produzem diferente e pedem manejos diferentes.",
				lectura: "Antes de comparar números, ver de que ambiente é cada um: uma produtividade baixa no ambiente baixo pode ser um bom resultado.",
				plataforma: {
					donde: "Ambientes e ensaios",
					texto: "Cada ambiente é desenhado sobre a imagem de satélite com sua própria cor, e essa cor o acompanha em toda a plataforma: os gráficos, os indicadores e as tabelas do talhão se separam por ambiente."
				},
				etiquetas: {
					alto: "Alto",
					medio: "Médio",
					bajo: "Baixo"
				}
			},
			{
				id: "ley-del-minimo",
				momento: "planificar",
				termino: "Lei do mínimo",
				definicion: "A produtividade fica limitada pelo nutriente mais escasso, mesmo que os outros sobrem. E acima de todos está a água: nenhum nutriente leva a produtividade além do que a água da safra permite.",
				lectura: "Adubar um nutriente que não limita não aumenta a produtividade. O que importa é o mais curto.",
				plataforma: {
					donde: "Lacunas de produtividade",
					texto: "Aparece como a produtividade base de cada ambiente: o que o solo dá sem adubação, numa barra em forma de silo. Embaixo aparece o nutriente que põe o teto, por exemplo «Limitação por nitrogênio (N)»."
				},
				demo: {
					ejemplo: "Exemplo com milho",
					pista: "Toque numa barra para adubar esse nutriente.",
					nutrientes: [
						"Nitrogênio",
						"Fósforo",
						"Potássio",
						"Cálcio",
						"Magnésio",
						"Enxofre"
					],
					simbolos: [
						"N",
						"P",
						"K",
						"Ca",
						"Mg",
						"S"
					],
					techo: "Teto da água",
					rinde: "Produtividade",
					limita: "Limita",
					agua: "a água",
					fertilizar: (n) => `Adubar com ${n}`,
					reiniciar: "Começar de novo"
				}
			},
			{
				id: "agua-util",
				momento: "preparar",
				termino: "Água disponível",
				definicion: "A água do solo que a cultura consegue aproveitar. Vai de 0 % no ponto de murcha, quando a cultura já não consegue extrair água, a 100 % na capacidade de campo, o máximo que o solo retém.",
				lectura: "Um 0 % não é solo seco: é água que a cultura já não pode usar. O que importa é quanto falta para o limiar da cultura.",
				plataforma: {
					donde: "Balanço hídrico",
					texto: "Um indicador circular mostra a água útil em porcentagem, em verde, amarelo ou vermelho conforme o quão perto a cultura está do seu limiar de estresse. No painel do talhão aparece por ambiente e, na análise de solo, camada por camada."
				},
				etiquetas: {
					pmp: "Ponto de murcha",
					cc: "Capacidade de campo",
					umbral: "Limiar",
					hoy: "Hoje"
				}
			},
			{
				id: "carry-over",
				momento: "preparar",
				termino: "Carryover de herbicidas",
				definicion: "A parte de um herbicida que continua no solo depois da aplicação e pode prejudicar a cultura seguinte. Degrada mais rápido com calor e chuva, e depende do solo e do princípio ativo.",
				lectura: "O que conta é o resíduo no dia da semeadura, não no da aplicação. Se na semeadura passa do limite da bula, é preciso esperar.",
				plataforma: {
					donde: "Herbicidas",
					texto: "Uma curva mostra como cai o resíduo de cada herbicida, com a data de hoje e a de semeadura marcadas. Ao lado, os dias de espera e um alerta por cor, de muito baixo a muito alto, conforme o que a próxima cultura tolera."
				},
				etiquetas: {
					aplicacion: "Aplicação",
					siembra: "Semeadura",
					limite: "Limite da bula",
					espera: "Dias de espera"
				}
			},
			{
				id: "dosis-optima",
				momento: "fertilizar",
				termino: "Dose de máxima eficiência econômica",
				definicion: "A produtividade sobe com a dose, mas cada quilo de fertilizante acrescenta menos que o anterior. A dose ótima econômica é onde o último quilo ainda se paga com o grão que acrescenta, antes da produtividade máxima.",
				lectura: "Buscar a produtividade máxima quase nunca é negócio: os últimos quilos de fertilizante custam mais do que devolvem.",
				plataforma: {
					donde: "Curvas de resposta",
					texto: "Cada dose aplicada aparece como um ponto contra a produtividade que alcançou, por ambiente, com uma linha de tendência que mostra onde a resposta se achata. A análise econômica da adubação soma o ganho e o retorno de cada aplicação."
				},
				etiquetas: {
					dosis: "Dose",
					rinde: "Produtividade",
					optima: "Ótima econômica",
					maximo: "Máxima"
				}
			},
			{
				id: "balance-hidrico",
				momento: "acompanar",
				termino: "Balanço hídrico e período crítico",
				definicion: "A conta diária da água do solo: soma a chuva e a irrigação e desconta o que a cultura consome. Abaixo do limiar, a cultura sofre. O período crítico são os estádios em que essa falta mais afeta a produtividade.",
				lectura: "O mesmo déficit pesa muito mais no período crítico. Aí convém olhar a previsão das próximas duas semanas.",
				plataforma: {
					donde: "Balanço hídrico",
					texto: "Um gráfico diário desde a semeadura acompanha a água útil frente ao limiar de estresse, com as chuvas embaixo. O período crítico aparece como uma faixa vermelha, e a plataforma conta os dias que faltam para começar."
				},
				etiquetas: {
					umbral: "Limiar",
					critico: "Período crítico",
					hoy: "Hoje",
					pronostico: "Previsão"
				}
			},
			{
				id: "dpv",
				momento: "acompanar",
				termino: "Déficit de pressão de vapor",
				definicion: "O DPV mede o quão seco está o ar: a diferença entre o vapor que poderia ter naquela temperatura e o que tem. Alto, o ar exige água da cultura; baixo, o ar úmido favorece os fungos.",
				lectura: "Um dia isolado fora da faixa a planta aguenta. O que pesa são vários dias seguidos.",
				plataforma: {
					donde: "Balanço hídrico e clima da safra",
					texto: "Um indicador em kPa diz se o DPV está bem, se há risco de fungos ou se está excessivo, e no clima da safra cada dia tem seu estado. Os dias de DPV alto também chegam no aviso pelo WhatsApp."
				},
				etiquetas: {
					alto: "Ar seco",
					sano: "Zona saudável",
					bajo: "Risco fúngico",
					dias: "Dias"
				}
			},
			{
				id: "ndvi",
				momento: "acompanar",
				termino: "NDVI",
				definicion: "Um índice calculado com a luz vermelha e infravermelha que a cultura reflete, vista do satélite. Mais alto, mais biomassa verde e ativa.",
				lectura: "Serve para comparar: zonas do mesmo talhão ou o mesmo talhão em outra data. As nuvens e sua sombra o enganam.",
				plataforma: {
					donde: "Mapas do talhão",
					texto: "A imagem de satélite é pintada sobre o talhão numa escala de cores de 0 a 1, com a data da imagem e as referências à mão. Ao passar o cursor se lê o valor de cada ponto."
				},
				etiquetas: {
					bajo: "Baixo",
					alto: "Alto",
					pixel: "Cada quadro: 10 × 10 m"
				}
			},
			{
				id: "brecha",
				momento: "cerrar",
				termino: "Produtividade potencial e lacuna",
				definicion: "A potencial é o teto que a água da safra impõe. A lacuna é o que falta entre esse teto e o que o talhão produz com os nutrientes do solo, adubando ou na colheita.",
				lectura: "Uma lacuna grande com água de sobra costuma falar de nutrientes. Se a água é que limita, adubar mais não a fecha.",
				plataforma: {
					donde: "Lacunas de produtividade",
					texto: "Um gráfico por ambiente põe lado a lado a produtividade base, a adubada, a potencial e a colhida. A distância até o potencial é a lacuna: a original e a que sobra depois de adubar."
				},
				etiquetas: {
					potencial: "Potencial",
					fertilizando: "Adubando",
					base: "Base",
					cosechado: "Colhida",
					brecha: "Lacuna"
				}
			}
		],
		fuentes: {
			titulo: "De onde vem a informação",
			bajada: "Cada cálculo da Rinde Plus se apoia em bibliografia agronômica reconhecida, e a equipe o ajusta e revisa com dados de talhões reais.",
			propio: "Como ajustamos",
			propios: [
				{
					titulo: "Modelos da equipe agronômica",
					texto: "O carryover de herbicidas, os coeficientes de cultura do balanço hídrico e as exigências de nutrientes são calibrados com planilhas próprias, a partir das bulas e da experiência de campo."
				},
				{
					titulo: "Revisões com talhões reais",
					texto: "Os cálculos são revisados periodicamente com dados de campo de diferentes talhões e ambientes, e ajustados quando o que se mede não coincide com o que se estima."
				},
				{
					titulo: "Os ensaios de cada talhão",
					texto: "As curvas de resposta são montadas com as faixas e os ambientes que cada produtor carrega, assim a dose é lida com dados do seu próprio campo."
				}
			],
			terceros: "Bibliografia",
			ver: "Ver",
			datos: "Dados",
			datosTexto: "Solo de referência próprio, com GeoINTA, IDECOR e SoilGrids, ajustado com a análise de cada talhão. Clima de vários provedores meteorológicos selecionados. Imagens Sentinel-2: contém dados modificados do Copernicus Sentinel."
		}
	}
};
//#endregion
//#region src/i18n/locales/pt.jsx
var APP = /* @__PURE__ */ jsx("a", {
	className: "rp-install__link",
	href: APP_URL,
	children: "cloud.rindeplus.com"
});
//#endregion
//#region src/i18n/I18nContext.jsx
var DICTIONARIES = {
	es,
	en,
	pt: {
		paginas,
		meta: {
			title: "Rinde Plus · Inteligência agronômica para cada talhão",
			description: "A Rinde Plus integra o clima, o solo, os ambientes e o histórico de cada talhão e transforma tudo em decisões: o que fazer, quando e se vale a pena."
		},
		whatsapp: {
			message: "Olá, quero mais informações sobre a Rinde Plus",
			cta: "Vamos conversar pelo WhatsApp"
		},
		header: {
			openMenu: "Abrir menu",
			nav: {
				impact: "Impacto",
				campaign: "Plataforma",
				why: "Vantagens",
				learn: "Educação",
				about: "Sobre nós",
				contact: "Contato",
				install: "Como instalar o app"
			},
			themeDark: "Modo escuro",
			themeLight: "Modo claro",
			themeSwitchAria: "Alternar entre modo claro e escuro",
			toLight: "Ativar modo claro",
			toDark: "Ativar modo escuro",
			login: "Entrar",
			loginLong: "Entrar na plataforma",
			language: "Idioma",
			logoAlt: "Rinde Plus"
		},
		hero: {
			titleA: "Inteligência agronômica",
			titleB: "para cada talhão",
			subtitle: /* @__PURE__ */ jsxs(Fragment$1, { children: [
				"A Rinde Plus integra o clima, o solo, os ambientes e o histórico de cada talhão e transforma tudo em ",
				/* @__PURE__ */ jsx("strong", { children: "decisões" }),
				": o que fazer, quando e se vale a pena."
			] }),
			ctaTalk: "Vamos falar dos seus talhões",
			ctaCampaign: "Ver funcionalidades",
			mapAria: "Talhão desenhado com seu mapa de vigor por ambiente, linhas de plantio e curvas de nível",
			avisos: {
				planificar: {
					titulo: "Planejamento",
					texto: "Produtividade potencial por ambiente, pronta."
				},
				preparar: {
					titulo: "Solo",
					texto: "Análise de solo interpretada."
				},
				fertilizar: {
					titulo: "Adubação",
					texto: "Dose de máxima eficiência econômica por ambiente."
				},
				sequia: {
					titulo: "Alerta hídrico",
					texto: "Irrigação necessária para atingir a produtividade-alvo."
				},
				calor: {
					titulo: "Alerta de calor",
					texto: "Estresse térmico previsto para os próximos dias."
				},
				lluvia: {
					titulo: "Alerta sanitário",
					texto: "Risco de doenças fúngicas depois da chuva."
				},
				cerrar: {
					titulo: "Fechamento da safra",
					texto: "Lacuna de produtividade por ambiente, calculada."
				}
			}
		},
		trusted: { title: "Confiam em nós" },
		impacto: {
			title: "Mais grão e mais captura de CO₂",
			subtitle: (d) => `Números da safra ${d.campana} nos talhões que a Rinde Plus acompanha.`,
			indicadores: {
				hectareas: (d) => `monitorados na última safra (${d.campana})`,
				grano: () => "de grão extra pelo manejo de lacunas",
				carbono: () => "de CO₂ extra que fica no solo",
				suelo: () => "análises de solo interpretadas"
			},
			pista: "Os indicadores com seta abrem o detalhe por cultura",
			cerrar: "Fechar detalhe",
			cultivos: {
				maiz: "Milho",
				soja: "Soja",
				trigo: "Trigo",
				girasol: "Girassol",
				otros: "Outras culturas"
			},
			total: "Total",
			tablas: {
				hectareas: {
					titulo: (d) => `Hectares por cultura, safra ${d.campana}`,
					columnas: [
						"Cultura",
						"Hectares",
						"Parcela",
						"Produtividade média (kg/ha)"
					]
				},
				grano: {
					titulo: (d) => `Grão extra por cultura, safra ${d.campana}`,
					columnas: [
						"Cultura",
						"kg/ha extra",
						"Grão extra"
					]
				},
				carbono: {
					titulo: (d) => `Carbono extra por cultura (t CO₂), safra ${d.campana}`,
					columnas: [
						"Cultura",
						"Fixado",
						"Volta ao solo",
						"Fica estável"
					]
				},
				suelo: {
					titulo: (d) => `Análises de solo por cultura, safra ${d.campana}`,
					columnas: [
						"Cultura",
						"Análises",
						"Parcela"
					]
				}
			},
			pie: { linea: (d) => `+${d.historia} ha de dados produtivos em ${d.campanas} safras (${d.desde} a ${d.hasta})` }
		},
		fx: {
			title: "O que a Rinde Plus faz",
			subtitle: "Uma só ferramenta que acompanha cada talhão durante toda a safra, do planejamento ao fechamento.",
			momentos: "Momentos da safra",
			siguiente: "Próximo",
			anterior: "Anterior",
			volverInicio: "Voltar ao início",
			charts: {
				zones: [
					"Alto",
					"Médio",
					"Baixo"
				],
				potentialCaption: "Produtividade base e potencial por ambiente",
				residueCaption: "Resíduo e risco de fitotoxicidade",
				doseCaption: "Dose de máxima eficiência econômica",
				today: "Hoje",
				forecastCaption: "Clima e previsão do talhão",
				fourYields: [
					"Potencial",
					"Adubada",
					"Colhida",
					"Base"
				],
				gapCaption: "Lacuna de produtividade"
			},
			panels: {
				planificar: {
					tag: "Planejar",
					name: "A produtividade que cada talhão pode alcançar",
					description: "Quanto cada ambiente do talhão pode produzir, segundo o solo, a análise própria e a água da safra.",
					bullets: [
						"Solo de referência e análise própria",
						"Irrigação necessária para a produtividade-alvo",
						"Produtividade base e potencial de cada ambiente"
					]
				},
				preparar: {
					tag: "Preparar o talhão",
					name: "A água do perfil e o resíduo de herbicidas",
					description: "A água que a planta de cobertura usa frente a um pousio, e quanto herbicida resta conforme chuva, irrigação e data.",
					bullets: [
						"Alerta de fitotoxicidade para a próxima cultura",
						"Aplicações da safra anterior incluídas",
						"Análise de solo e plano de correção"
					]
				},
				fertilizar: {
					tag: "Adubar",
					name: "A dose que se paga",
					description: "Simulação por produto e dose com o balanço de nutrientes, a curva de resposta e os preços cadastrados no talhão.",
					bullets: [
						"Dose de máxima eficiência econômica",
						"Produtividade adubada, sem passar do potencial",
						"Margem bruta por talhão e por ambiente"
					]
				},
				acompanar: {
					tag: "Acompanhar a cultura",
					name: "Avisos do que vem em cada talhão",
					description: "Clima e previsão por talhão, e monitoramento a campo com catálogos de plantas daninhas, pragas e doenças.",
					bullets: [
						"Alertas de estresse térmico e doenças",
						"Recomendação que vai ao plano de aplicações",
						"Avisos diários pelo WhatsApp, com resposta"
					]
				},
				cerrar: {
					tag: "Fechar e aprender",
					name: "Onde se perdeu produtividade",
					description: "O que cada talhão podia produzir contra o que foi colhido, e o planejado contra o realizado, em produtividade e em margem.",
					bullets: [
						"Lacuna de produtividade por talhão e ambiente",
						"Mapa de análise entre talhões e safras",
						"Visão consolidada por empresa"
					]
				}
			}
		},
		benefits: {
			aria: "Por que Rinde Plus",
			roledesc: "carrossel",
			slideRoledesc: "item",
			slideLabel: (i, n) => `${i} de ${n}`,
			prev: "Item anterior",
			next: "Próximo item",
			dotLabel: (i, title) => `Item ${i}: ${title}`,
			items: [
				{
					title: "O seu talhão, não a média",
					copy: "Cada decisão parte do clima, do solo e do histórico daquele talhão, não do que é típico da região.",
					detail: "Desenhado sobre imagem de satélite com seus ambientes. Dois talhões vizinhos podem pedir decisões diferentes."
				},
				{
					title: "Mais talhões, sem perder detalhe",
					copy: "Clima, solo, ambientes, monitoramento e histórico já cruzados num só lugar, sem montar planilhas.",
					detail: "O tempo que ia em juntar dados fica para percorrer o campo e decidir."
				},
				{
					title: "O que fazer e quando",
					copy: "Não só ver o talhão num mapa: saber o que vale fazer e em que momento.",
					detail: "Alertas de clima, doenças e fitotoxicidade, e um aviso diário pelo WhatsApp que pode ser respondido."
				},
				{
					title: "Independente",
					copy: "A Rinde Plus não vende insumos: às\xA0vezes a melhor decisão é não aplicar.",
					detail: "Antes de aplicar, a simulação com os preços do talhão mostra se a dose se paga."
				}
			]
		},
		cta: {
			title: "Vamos falar dos seus talhões",
			vision: "Nossa visão: que cada talhão seja decidido com critério agronômico, não só os de quem pode pagar uma equipe técnica.",
			button: "Vamos conversar pelo WhatsApp",
			hint: "Sem formulários · resposta da equipe em menos de 24 h"
		},
		install: {
			titleA: "A Rinde Plus no celular,",
			titleB: "como um app",
			subtitle: "Instale pelo navegador em quatro passos, sem passar por nenhuma loja.",
			ios: {
				name: "iPhone",
				steps: [
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Abrir ",
						APP,
						" no ",
						/* @__PURE__ */ jsx("strong", { children: "Safari" }),
						"."
					] }),
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Tocar em ",
						/* @__PURE__ */ jsx("strong", { children: "Compartilhar" }),
						" ",
						/* @__PURE__ */ jsx(LuShare, {
							className: "rp-install__inline-icon",
							"aria-hidden": "true"
						}),
						", na barra de baixo."
					] }),
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Escolher ",
						/* @__PURE__ */ jsx("strong", { children: "Adicionar à Tela de Início" }),
						"."
					] }),
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Tocar em ",
						/* @__PURE__ */ jsx("strong", { children: "Adicionar" }),
						" para confirmar."
					] })
				]
			},
			android: {
				name: "Android",
				steps: [
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Abrir ",
						APP,
						" no ",
						/* @__PURE__ */ jsx("strong", { children: "Chrome" }),
						"."
					] }),
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Tocar no menu ",
						/* @__PURE__ */ jsx("strong", { children: "⋮" }),
						" no canto superior direito."
					] }),
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Escolher ",
						/* @__PURE__ */ jsx("strong", { children: "Instalar app" }),
						" ou ",
						/* @__PURE__ */ jsx("strong", { children: "Adicionar à tela inicial" }),
						"."
					] }),
					/* @__PURE__ */ jsxs(Fragment$1, { children: [
						"Tocar em ",
						/* @__PURE__ */ jsx("strong", { children: "Instalar" }),
						" para confirmar."
					] })
				]
			}
		},
		credits: {
			lead: "Fotos",
			via: "via Wikimedia Commons",
			photos: [
				"Talhões do pampa vistos do avião, Murray Foubister",
				"Plantação de soja na Argentina, Alfonso",
				"Girassol do pampa, Emilio Küffer",
				"Colheita de soja, Clasonsf"
			]
		},
		footer: {
			email: "E-mail",
			emailAria: "Enviar e-mail para inforindeplus@gmail.com",
			instagram: "Instagram",
			instagramAria: "Abrir o Instagram da Rinde Plus",
			whatsapp: "WhatsApp",
			whatsappAria: "Abrir conversa no WhatsApp",
			officeAria: "Ver localização no Google Maps",
			rights: "Todos os direitos reservados.",
			made: "Feito com dados e critério agronômico",
			legalNav: "Informações legais",
			privacy: "Política de privacidade"
		}
	}
};
var I18nContext = createContext({
	locale: "es",
	dict: es
});
var I18nProvider = ({ locale = "es", children }) => {
	const valid = LOCALES.includes(locale) ? locale : "es";
	return /* @__PURE__ */ jsx(I18nContext.Provider, {
		value: {
			locale: valid,
			dict: DICTIONARIES[valid]
		},
		children
	});
};
var conIdioma = (Component) => {
	const ConIdioma = ({ lang, ...props }) => /* @__PURE__ */ jsx(I18nProvider, {
		locale: lang,
		children: /* @__PURE__ */ jsx(Component, { ...props })
	});
	ConIdioma.displayName = `ConIdioma(${Component.displayName || Component.name})`;
	return ConIdioma;
};
var useI18n = () => useContext(I18nContext);
//#endregion
export { EDUCACION_PATH as a, LOCALES as c, OG_LOCALE as d, PRIVACY_PATH as f, LOGIN_URL as i, LOCALE_LABELS as l, renderScript as m, conIdioma as n, HOME_PATH as o, idiomaDe as p, useI18n as r, HTML_LANG as s, DICTIONARIES as t, NOSOTROS_PATH as u };
