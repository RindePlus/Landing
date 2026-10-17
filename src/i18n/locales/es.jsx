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
