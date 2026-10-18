import { LuShare } from 'react-icons/lu';

// Español latam con base argentina y tono neutro: sin verbos en segunda
// persona (ahí se separan vos y tú), con posesivos tu/tus que sirven para
// ambos. Infinitivo, impersonal o primera del plural. Sin preguntas en los
// títulos. Solo se cuenta lo que la plataforma hace hoy.

const es = {
  meta: {
    title: 'Rinde Plus · Criterio agronómico para cada lote',
    description:
      'Inteligencia agronómica: Rinde Plus integra el clima, el suelo, los ambientes y la historia de cada lote y lo convierte en decisiones.',
  },

  whatsapp: {
    message: 'Hola, quiero más información sobre Rinde Plus',
    fabLabel: 'WhatsApp',
    hello: 'Hola',
    helloAria: 'saludo',
    question: '¿En qué podemos ayudarte?',
    cta: 'Escribir por WhatsApp',
  },

  header: {
    openMenu: 'Abrir menú',
    nav: {
      home: 'Inicio',
      impact: 'Impacto',
      campaign: 'Qué hace',
      why: 'Por qué Rinde Plus',
    },
    themeDark: 'Modo oscuro',
    themeLight: 'Modo claro',
    themeSwitchAria: 'Cambiar entre modo claro y oscuro',
    toLight: 'Activar modo claro',
    toDark: 'Activar modo oscuro',
    login: 'Ingresar',
    loginLong: 'Ingresar a la plataforma',
    language: 'Idioma',
    logoAlt: 'Rinde Plus',
  },

  hero: {
    titleA: 'Criterio agronómico',
    titleB: 'para cada lote.',
    subtitle: (
      <>
        Rinde Plus es <strong>inteligencia agronómica</strong>: integra el
        clima, el suelo, los ambientes y la historia de cada lote y lo
        convierte en <strong>decisiones</strong> sobre qué hacer, cuándo y si
        conviene.
      </>
    ),
    ctaTalk: 'Hablemos de tus lotes',
    ctaCampaign: 'Ver qué hace',
    mapAria: 'Lote dibujado con tres ambientes, surcos de siembra y curvas de nivel',
  },

  trusted: {
    title: 'Confían en nosotros',
  },

  // Sección Impacto. Los números llegan ya formateados en `d` (ver
  // ImpactSection.jsx); acá solo va el texto. "Campaña" es el año agrícola;
  // cada lote en un año es un "ciclo productivo".
  impacto: {
    title: 'Más grano y más carbono en el suelo',
    subtitle: (d) => `Números de la campaña ${d.campana} en los lotes que sigue Rinde Plus.`,
    indicadores: {
      hectareas: (d) => `monitoreadas en la última campaña (${d.campana})`,
      grano: () => 'de grano extra por el manejo de brechas',
      carbono: () => 'de CO₂ extra que queda en el suelo',
      suelo: () => 'análisis de suelo interpretados',
    },
    pista: 'Los indicadores con flecha abren el detalle por cultivo',
    cerrar: 'Cerrar detalle',
    info: (titulo) => `Cómo se calcula: ${titulo}`,
    cultivos: { maiz: 'Maíz', soja: 'Soja', trigo: 'Trigo', girasol: 'Girasol', otros: 'Otros cultivos' },
    total: 'Total',
    tablas: {
      grano: {
        titulo: (d) => `Grano extra por cultivo, campaña ${d.campana}`,
        columnas: ['Cultivo', 'Hectáreas', 'Rinde promedio (kg/ha)', 'kg/ha extra', 'Total'],
        nota: (d) =>
          `El ${d.pct} del rinde de cada cultivo, dentro del rango del ${d.pctBajo} al ${d.pctAlto} que Rinde Plus estima que aporta el manejo de brechas. Con el ${d.pctBajo} serían unas ${d.granoBajo} t; con el ${d.pctAlto}, unas ${d.granoAlto} t.`,
      },
      carbono: {
        titulo: (d) => `Carbono extra por cultivo (t CO₂), campaña ${d.campana}`,
        columnas: ['Cultivo', 'Fijado', 'Vuelve al suelo', 'Queda estable'],
        nota: (d) =>
          `Es el carbono extra del grano extra. El grano se cosecha y su carbono vuelve a la atmósfera; lo que queda es el del rastrojo y las raíces, y las raíces aportan el más estable. Equivale a neutralizar las emisiones de unos ${d.autos} autos por año.`,
      },
    },
    pie: {
      linea: (d) => `+${d.historia} ha de datos productivos en ${d.campanas} campañas (${d.desde} a ${d.hasta})`,
      fuente: (d) => `Datos de la base de Rinde Plus al ${d.fecha}. El botón ⓘ de cada número explica cómo se calcula.`,
    },
    modal: {
      cerrar: 'Cerrar',
      bloques: { mide: 'Qué mide', calcula: 'Cómo se calcula', compone: 'Cómo se compone', cuenta: 'A tener en cuenta' },
      hectareas: {
        titulo: (d) => `Hectáreas monitoreadas en la última campaña (${d.campana})`,
        mide: () => 'La superficie que Rinde Plus monitoreó en la última campaña completa.',
        columnas: ['Cultivo', 'Hectáreas', '%'],
        cuenta: () => 'A la superficie sin cultivo cargado se le asignó la misma proporción de cultivos que al resto.',
      },
      grano: {
        titulo: () => 'Grano extra por el manejo de brechas',
        mide: () =>
          'El grano que se suma en maíz, soja, trigo y girasol por decidir con el análisis de brechas de Rinde Plus.',
        calcula: (d) =>
          `Para cada cultivo: hectáreas de ${d.campana} × rinde promedio registrado × ${d.pct}. Rinde Plus estima que entre el ${d.pctBajo} y el ${d.pctAlto} del rinde de los lotes con manejo de brechas se debe a ese manejo; acá se usa un ${d.pct}, en la parte baja del rango. Con el ${d.pctBajo} serían unas ${d.granoBajo} t; con el ${d.pctAlto}, unas ${d.granoAlto} t.`,
        cuenta: (d) =>
          `Es una estimación sobre el rinde promedio de cada cultivo, no una medición lote por lote. A la superficie sin cultivo cargado (${d.sinCultivoPct}) se le asignó la misma proporción de cultivos que al resto. Entran maíz, soja, trigo y girasol (el ${d.cultivosPct} de la superficie); no entran arroz ni los cultivos menores.`,
      },
      carbono: {
        titulo: () => 'CO₂ extra en el suelo',
        mide: () => 'El carbono extra que deja en el suelo ese grano extra, a través del rastrojo y las raíces.',
        calcula: () =>
          'Grano extra de cada cultivo × coeficientes de carbono por tonelada. Para maíz, soja y trigo son los mismos que usa VigIA, tomados de su informe técnico; los de girasol se calcularon con el mismo método, con su índice de cosecha. El número destacado es la columna «Queda estable».',
        cuenta: () =>
          'Es una estimación por coeficientes, no una medición de carbono en el suelo de cada lote, y no constituye un certificado de bonos de carbono.',
      },
      suelo: {
        titulo: () => 'Análisis de suelo interpretados',
        mide: (d) =>
          `Cuántos ambientes de ${d.campana} tienen un análisis de suelo cargado (fósforo, materia orgánica, pH y demás) que la plataforma interpreta para el diagnóstico y la fertilización.`,
        calcula: (d) => `Se cuentan los ambientes con al menos uno de esos valores (${d.sueloTotal}).`,
      },
      historia: {
        titulo: () => 'Historia de datos',
        mide: () => 'La superficie con datos productivos acumulada en la base.',
        calcula: (d) =>
          `Cada vez que un lote tiene datos en una campaña se suma su superficie. Son ${d.historiaHa} ha en ${d.ciclos} ciclos productivos de ${d.lotes} lotes de ${d.empresas} empresas, entre ${d.desde} y ${d.hasta}. La campaña en curso, ${d.enCurso}, no se cuenta.`,
        cuenta: (d) =>
          `Un lote con datos en 10 campañas cuenta 10 veces; contado una sola vez por lote, la superficie es de unas ${d.haUnicas} ha.`,
      },
    },
  },

  fx: {
    title: 'Qué hace Rinde Plus',
    subtitle:
      'Una sola herramienta que acompaña cada lote durante toda la campaña, del plan al cierre.',
    next: 'Siguiente',
    nextAria: 'Ver el siguiente momento',
    goTo: (name) => `Ir a ${name}`,
    charts: {
      zones: ['Alto', 'Medio', 'Bajo'],
      potentialCaption: 'Rinde base y potencial por ambiente',
      residueCaption: 'Residuo y riesgo de fitotoxicidad',
      doseCaption: 'Dosis óptima económica',
      today: 'Hoy',
      forecastCaption: '15 días atrás, 15 adelante',
      fourYields: ['Potencial', 'Fertilizando', 'Cosechado', 'Base'],
      gapCaption: 'Brecha de rendimiento',
    },
    panels: {
      planificar: {
        tag: 'Planificar',
        name: 'El rinde que puede dar cada lote',
        description:
          'Rinde base, potencial, fertilizando y cosechado, por lote y por ambiente. El potencial sale del suelo, del análisis propio y del balance hídrico de la campaña.',
        bullets: [
          'Suelo de referencia (GeoINTA, IDECOR, SoilGrids) ajustado con el análisis propio',
          'Riego necesario para llegar al rinde objetivo',
          'Variedades del padrón oficial del INASE',
        ],
      },
      preparar: {
        tag: 'Preparar el lote',
        name: 'El agua del perfil y el residuo de herbicidas',
        description:
          'El consumo de agua del cultivo de servicio contra un barbecho, y el residuo de cada herbicida según lluvias, riego y fecha de aplicación.',
        bullets: [
          'Alerta de riesgo alto de fitotoxicidad para el cultivo que viene',
          'Incluye las aplicaciones de la campaña anterior',
          'Análisis de suelo y plan de enmiendas',
        ],
      },
      fertilizar: {
        tag: 'Fertilizar',
        name: 'La dosis que se paga',
        description:
          'Simulación por producto y dosis con el balance de nutrientes, la curva de respuesta y los precios cargados en el lote.',
        bullets: [
          'Dosis óptima económica',
          'Rinde fertilizando, sin pasar el potencial',
          'Margen bruto por lote y por ambiente',
        ],
      },
      acompanar: {
        tag: 'Acompañar el cultivo',
        name: 'Avisos de lo que viene en cada lote',
        description:
          'Clima por lote, 15 días atrás y 15 adelante, y monitoreo a campo con catálogos de malezas, plagas y enfermedades.',
        bullets: [
          'Alertas de estrés térmico, déficit de presión de vapor y enfermedades fúngicas',
          'Recomendación de producto que pasa al plan de aplicaciones',
          'Avisos diarios por WhatsApp, con tu consentimiento, que se pueden responder',
        ],
      },
      cerrar: {
        tag: 'Cerrar y aprender',
        name: 'Dónde se perdió rinde',
        description:
          'Lo que podía rendir cada lote contra lo cosechado, y el plan contra lo realizado, en rinde y en margen.',
        bullets: [
          'Brecha de rendimiento por lote y por ambiente',
          'Mapa de análisis entre lotes, ambientes y campañas',
          'Vista por empresa',
        ],
      },
    },
  },

  benefits: {
    aria: 'Por qué Rinde Plus',
    roledesc: 'carrusel',
    slideRoledesc: 'punto',
    slideLabel: (i, n) => `${i} de ${n}`,
    prev: 'Punto anterior',
    next: 'Punto siguiente',
    dotLabel: (i, title) => `Punto ${i}: ${title}`,
    items: [
      {
        title: 'Tu lote, no el promedio',
        copy: 'Cada decisión parte del clima, el suelo y la historia del lote, no de lo típico de la zona.',
        detail:
          'Cada lote, dibujado sobre imagen satelital con sus ambientes, cruza clima, suelo e historia productiva. Dos lotes vecinos pueden pedir decisiones distintas.',
      },
      {
        title: 'El análisis ya está hecho',
        copy: 'Sin cruzar clima, rindes y suelo a mano en planillas: el tiempo queda para decidir.',
        detail:
          'Clima, suelo, ambientes, monitoreo e historia de cada lote, en un mismo lugar. Más lotes, sin perder profundidad.',
      },
      {
        title: 'Qué hacer y cuándo',
        copy: 'Más que el lote en un mapa: qué conviene hacer y en qué momento.',
        detail:
          'Una recomendación para cada lote, con alertas de clima, enfermedades y fitotoxicidad y avisos diarios por WhatsApp.',
      },
      {
        title: 'Independiente',
        copy: 'Rinde Plus no vende insumos: a veces la mejor decisión es no aplicar.',
        detail:
          'Antes de aplicar, la cuenta del lote a la vista: si la aplicación paga, conviene; si no, a veces lo mejor es no hacer nada.',
      },
    ],
  },

  cta: {
    title: 'Hablemos de tus lotes.',
    vision:
      'Nuestra visión: que cada lote se decida con criterio agronómico, no solo los de quien puede pagarse un equipo técnico.',
    copy: 'Unas líneas sobre la operación alcanzan para coordinar una llamada. Sin formularios largos: responde directo el equipo de Rinde Plus.',
    button: 'Escribir por WhatsApp',
    hint: 'Respuesta en menos de 24 h',
  },

  install: {
    title: 'La plataforma, como app en el celular',
    subtitle: 'Se agrega a la pantalla de inicio en tres pasos, sin pasar por ninguna tienda.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Abrir <strong>app.rindeplus.com</strong> en <strong>Safari</strong>.</>,
        (
          <>
            Tocar <strong>Compartir</strong>{' '}
            <LuShare className="rp-install__inline-icon" aria-hidden="true" />{' '}
            (el cuadrado con la flecha hacia arriba).
          </>
        ),
        <>Elegir <strong>Agregar a pantalla de inicio</strong> y confirmar con <strong>Agregar</strong>.</>,
      ],
    },
    android: {
      name: 'Android',
      steps: [
        <>Abrir <strong>app.rindeplus.com</strong> en <strong>Chrome</strong>.</>,
        <>Tocar el menú <strong>⋮</strong> (arriba a la derecha).</>,
        (
          <>
            Elegir <strong>Instalar app</strong> (o <strong>Agregar a la
            pantalla principal</strong>, según la versión) y confirmar.
          </>
        ),
      ],
    },
  },

  credits: {
    lead: 'Imágenes',
    via: 'vía Wikimedia Commons',
    photos: [
      'Pampa húmeda vista por satélite, INPE',
      'Sembrado de soja en Argentina, Alfonso',
      'Girasol pampeano, Emilio Küffer',
      'Cosecha de soja, Clasonsf',
    ],
  },

  footer: {
    email: 'Email',
    emailAria: 'Enviar email a inforindeplus@gmail.com',
    instagram: 'Instagram',
    instagramAria: 'Abrir Instagram de Rinde Plus',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Abrir chat de WhatsApp',
    office: 'Oficina',
    officeAria: 'Ver ubicación en Google Maps',
    rights: 'Todos los derechos reservados.',
    made: 'Hecho con datos y criterio agronómico',
  },
};

export default es;
