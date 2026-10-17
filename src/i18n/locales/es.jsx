import { LuShare } from 'react-icons/lu';

// Español latam con base argentina y tono neutro: sin verbos en segunda
// persona (ahí se separan vos y tú), con posesivos tu/tus que sirven para
// ambos. Infinitivo, impersonal o primera del plural. Sin preguntas en los
// títulos. Solo se cuenta lo que la plataforma hace hoy.

const es = {
  meta: {
    title: 'Rinde Plus · Criterio agronómico para cada lote',
    description:
      'Inteligencia agronómica: Rinde Plus integra el clima, el suelo, los ambientes y la historia de cada lote y lo convierte en decisiones. Para productores y agrónomos.',
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
      campaign: 'La campaña',
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
        conviene. Para productores y agrónomos.
      </>
    ),
    ctaTalk: 'Hablemos de tus lotes',
    ctaCampaign: 'Ver la campaña',
    mapAria: 'Lote dibujado con tres ambientes, surcos de siembra y curvas de nivel',
  },

  trusted: {
    title: 'Confían en nosotros',
  },

  fx: {
    title: 'Una decisión a la vez, lote por lote',
    subtitle: (
      <>
        En cada lote, cuánto puede rendir, cuánto rindió y por qué no llegó.
        Cinco momentos de la campaña; en cada uno, <strong>Ver la
        diferencia</strong> muestra qué cambia.
      </>
    ),
    next: 'Siguiente',
    nextAria: 'Ver el siguiente momento',
    goTo: (name) => `Ir a ${name}`,
    more: 'Ver la diferencia',
    today: 'Cómo se decide hoy',
    withRp: 'Con Rinde Plus',
    back: 'Volver',
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
        name: 'El techo de cada lote, ambiente por ambiente',
        description:
          'Rinde base, potencial, fertilizando y cosechado, por lote y por ambiente. El potencial sale del suelo de referencia del lote, del análisis de suelo propio cuando lo hay y del balance hídrico de la campaña.',
        bullets: [
          'Suelo de referencia de GeoINTA, IDECOR y SoilGrids, ajustado con el análisis propio',
          'Balance hídrico: lluvia efectiva, agua útil y riego previsto',
          'Con riego: cuánto hace falta para llegar al rinde objetivo, con techo por capacidad de campo',
          'Variedades del padrón oficial de cultivares del INASE',
        ],
        problem:
          'Se planifica con el rinde típico de la zona. Sin un techo por lote, no se sabe cuánto se puede mejorar ni dónde conviene invertir.',
        gain:
          'Cada lote tiene su techo y su brecha a la vista, y la meta de la campaña sale del lote, no del promedio.',
      },
      preparar: {
        tag: 'Preparar el lote',
        name: 'El agua del perfil y el residuo de herbicidas, antes de sembrar',
        description:
          'El consumo de agua del cultivo de servicio frente a un barbecho, y el residuo de cada principio activo según lluvias, riego y fecha de aplicación, incluidas las aplicaciones de la campaña anterior.',
        bullets: [
          'Consumo de agua del cultivo de servicio contra un barbecho',
          'Residuo de cada herbicida según lluvias, riego y fecha de aplicación',
          'Alerta de riesgo alto de fitotoxicidad para el cultivo que viene',
          'Análisis de suelo por lote (química, agua útil, textura, densidad aparente) y plan de enmiendas, incluido el sódico',
        ],
        problem:
          'El secado se define a ojo y el residuo no se ve. Un secado tarde deja al cultivo siguiente sin agua; un residuo alto cuesta rinde desde la emergencia.',
        gain:
          'El momento de secado que cuida el agua del perfil, y el riesgo de fitotoxicidad de cada lote a la vista antes de sembrar.',
      },
      fertilizar: {
        tag: 'Fertilizar',
        name: 'Cuánto fertilizar y si la dosis se paga',
        description:
          'Simulación por producto y dosis, con el balance de nutrientes del lote y la curva de respuesta del rinde. Con los precios cargados en el lote, la dosis óptima económica y el margen que deja. A veces la mejor decisión es no aplicar.',
        bullets: [
          'Simulador por producto y dosis, con balance de nutrientes',
          'Curva de respuesta y dosis óptima económica',
          'Rinde fertilizando contra rinde base, sin pasar el potencial',
          'Margen bruto por lote y por ambiente',
        ],
        problem:
          'Se repite la dosis del año pasado o la típica de la zona, sin saber si en ese lote, y con estos precios, la aplicación se paga.',
        gain:
          'La dosis, o la decisión de no aplicar, con la cuenta del lote a la vista: cuánto rinde de más y cuánto margen deja.',
      },
      acompanar: {
        tag: 'Acompañar el cultivo',
        name: 'Lo que viene en cada lote y cuándo conviene actuar',
        description:
          'Clima de cada lote, 15 días hacia atrás y 15 hacia adelante, y monitoreo a campo: recorridas contra catálogos de malezas, plagas y enfermedades, con el daño por especie y la recomendación de producto, que pasa al plan de aplicaciones y al margen.',
        bullets: [
          'Pronóstico por lote, con alertas de estrés térmico, déficit de presión de vapor y riesgo de enfermedades fúngicas',
          'Monitoreo a campo con catálogos curados de malezas, plagas y enfermedades',
          'Aviso cuando un lote lleva tiempo sin recorrer o hay una decisión abierta',
          'Avisos diarios por WhatsApp, con tu consentimiento, que se pueden responder',
        ],
        problem:
          'El estrés se ve a campo cuando el rinde ya se perdió, el pronóstico regional no dice qué pasa en cada lote y lo que se ve en la recorrida queda en una libreta.',
        gain:
          'El aviso llega con tiempo para actuar, y lo que se ve en la recorrida se convierte en una aplicación con su costo en el margen.',
      },
      cerrar: {
        tag: 'Cerrar y aprender',
        name: 'Dónde se perdió rinde y cuánto se puede recuperar',
        description:
          'Al cierre, lote por lote, lo que podía rendir contra lo que se cosechó, y el plan contra lo realizado: el plan queda congelado al aplicar.',
        bullets: [
          'Rinde base, potencial, fertilizando y cosechado',
          'Plan contra realizado, en rinde y en margen',
          'Mapa de análisis que cruza lotes, ambientes y campañas en fertilización, aplicaciones y monitoreo',
          'Vista por empresa',
        ],
        problem:
          'La campaña se cierra con el rinde cosechado y poco más. Los datos quedan en planillas sueltas y la siguiente se decide igual.',
        gain:
          'Cada campaña deja una lección por lote, y la siguiente arranca con lo aprendido.',
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

  audiences: {
    title: 'Para productores y agrónomos',
    subtitle: 'Un mismo sistema, en el mismo idioma, para decidir sobre cada lote.',
    groups: [
      {
        id: 'productor',
        title: 'Productores',
        lead: 'Cuánto puede rendir cada lote, por qué no llegó, qué conviene hacer, cuándo y si paga.',
        items: [
          { t: 'Qué hacer y cuándo', d: 'Una recomendación para cada lote, en el momento justo.' },
          { t: 'Si la aplicación paga', d: 'La cuenta del lote antes de aplicar; a veces conviene no hacer nada.' },
          { t: 'Avisos diarios', d: 'Alertas de clima, enfermedades y fitotoxicidad por WhatsApp, que se pueden responder.' },
        ],
      },
      {
        id: 'agronomo',
        title: 'Agrónomos',
        lead: 'El análisis ya armado; el tiempo, para decidir.',
        items: [
          { t: 'El análisis ya integrado', d: 'Clima, suelo, ambientes, monitoreo e historia de cada lote en un solo lugar.' },
          { t: 'Más lotes, mismo rigor', d: 'Mapa de análisis y vista por empresa para seguir muchos lotes a la vez.' },
          { t: 'Recorridas con criterio', d: 'Monitoreo con catálogos curados y una recomendación que pasa al plan de aplicaciones.' },
        ],
      },
    ],
  },

  principles: [
    {
      title: 'Llega por tu organización',
      copy: 'Cooperativas, acopios, semilleras, empresas de insumos y asesorías dan acceso a su red.',
    },
    {
      title: 'Un solo sistema',
      copy: 'Clima, suelo, ambientes e historia de cada lote, en un mismo lugar.',
    },
    {
      title: 'Nuestra visión',
      copy: 'Que cada lote se decida con criterio agronómico, no solo los de quien puede pagarse un equipo técnico.',
    },
  ],

  cta: {
    title: 'Hablemos de tus lotes.',
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
