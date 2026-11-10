import { LuShare } from 'react-icons/lu';
import { APP_URL } from '../../data/links';

// Enlace a la plataforma en los pasos de instalación: se toca y se abre.
const APP = (
  <a className="rp-install__link" href={APP_URL}>
    cloud.rindeplus.com
  </a>
);

// Español latam con base argentina y tono neutro: sin verbos en segunda
// persona (ahí se separan vos y tú), con posesivos tu/tus que sirven para
// ambos. Infinitivo, impersonal o primera del plural. Sin preguntas en los
// títulos. Solo se cuenta lo que la plataforma hace hoy.

const es = {
  meta: {
    title: 'Rinde Plus · Inteligencia agronómica para cada lote',
    description:
      'Rinde Plus integra el clima, el suelo, los ambientes y la historia de cada lote y los convierte en decisiones: qué hacer, cuándo y si conviene.',
  },

  whatsapp: {
    message: 'Hola, quiero más información sobre Rinde Plus',
    cta: 'Hablemos por WhatsApp',
  },

  header: {
    openMenu: 'Abrir menú',
    nav: {
      impact: 'Impacto',
      campaign: 'Plataforma',
      why: 'Ventajas',
      contact: 'Contacto',
      install: 'Cómo instalar la app',
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
    titleA: 'Inteligencia agronómica',
    titleB: 'para cada lote',
    subtitle: (
      <>
        Rinde Plus integra el clima, el suelo, los ambientes y la historia de
        cada lote y los convierte en <strong>decisiones</strong>: qué hacer,
        cuándo y si conviene.
      </>
    ),
    ctaTalk: 'Hablemos de tus lotes',
    ctaCampaign: 'Ver funcionalidades',
    mapAria: 'Lote dibujado con su mapa de vigor por ambientes, surcos de siembra y curvas de nivel',
    // Notificaciones de las escenas del lote del hero (doc/ANIMACION_LOTE.md):
    // una por momento de la campaña; Acompañar tiene una por clima.
    avisos: {
            planificar: { titulo: 'Planificación', texto: 'Rinde potencial por ambiente, listo.' },
      preparar: { titulo: 'Suelo', texto: 'Análisis de suelo interpretado.' },
      fertilizar: { titulo: 'Fertilización', texto: 'Dosis óptima económica por ambiente.' },
      sequia: { titulo: 'Alerta hídrica', texto: 'Riego necesario para llegar al rinde objetivo.' },
      calor: { titulo: 'Alerta de calor', texto: 'Estrés térmico previsto para los próximos días.' },
      lluvia: { titulo: 'Alerta sanitaria', texto: 'Riesgo de enfermedades fúngicas después de la lluvia.' },
      cerrar: { titulo: 'Cierre de campaña', texto: 'Brecha de rinde por ambiente, calculada.' },
    },
  },

  trusted: {
    title: 'Confían en nosotros',
  },

  // Sección Impacto. Los números llegan ya formateados en `d` (ver
  // ImpactSection.jsx); acá solo va el texto. "Campaña" es el año agrícola;
  // cada lote en un año es un "ciclo productivo".
  impacto: {
    title: 'Más grano y más captura de CO₂',
    subtitle: (d) => `Números de la campaña ${d.campana} en los lotes que sigue Rinde Plus.`,
    indicadores: {
      hectareas: (d) => `monitoreadas en la última campaña (${d.campana})`,
      grano: () => 'de grano extra por el manejo de brechas',
      carbono: () => 'de CO₂ extra que queda en el suelo',
      suelo: () => 'análisis de suelo interpretados',
    },
    pista: 'Los indicadores con flecha abren el detalle por cultivo',
    cerrar: 'Cerrar detalle',
    cultivos: { maiz: 'Maíz', soja: 'Soja', trigo: 'Trigo', girasol: 'Girasol', otros: 'Otros cultivos' },
    total: 'Total',
    tablas: {
      hectareas: {
        titulo: (d) => `Hectáreas por cultivo, campaña ${d.campana}`,
        columnas: ['Cultivo', 'Hectáreas', 'Parte', 'Rinde promedio (kg/ha)'],
      },
      grano: {
        titulo: (d) => `Grano extra por cultivo, campaña ${d.campana}`,
        columnas: ['Cultivo', 'kg/ha extra', 'Grano extra'],
      },
      carbono: {
        titulo: (d) => `Carbono extra por cultivo (t CO₂), campaña ${d.campana}`,
        columnas: ['Cultivo', 'Fijado', 'Vuelve al suelo', 'Queda estable'],
      },
      suelo: {
        titulo: (d) => `Análisis de suelo por cultivo, campaña ${d.campana}`,
        columnas: ['Cultivo', 'Análisis', 'Parte'],
      },
    },
    pie: {
      linea: (d) => `+${d.historia} ha de datos productivos en ${d.campanas} campañas (${d.desde} a ${d.hasta})`,
    },
  },

  fx: {
    title: 'Qué hace Rinde Plus',
    subtitle:
      'Una sola herramienta que acompaña cada lote durante toda la campaña, del plan al cierre.',
    momentos: 'Momentos de la campaña',
    siguiente: 'Siguiente',
    anterior: 'Anterior',
    volverInicio: 'Volver al inicio',
    charts: {
      zones: ['Alto', 'Medio', 'Bajo'],
      potentialCaption: 'Rinde base y potencial por ambiente',
      residueCaption: 'Residuo y riesgo de fitotoxicidad',
      doseCaption: 'Dosis óptima económica',
      today: 'Hoy',
      forecastCaption: 'Clima y pronóstico del lote',
      fourYields: ['Potencial', 'Fertilizando', 'Cosechado', 'Base'],
      gapCaption: 'Brecha de rendimiento',
    },
    panels: {
      planificar: {
        tag: 'Planificar',
        name: 'El rinde que puede dar cada lote',
        description:
          'Cuánto puede rendir cada ambiente del lote, según su suelo, el análisis propio y el agua de la campaña.',
        bullets: [
          'Suelo de referencia y análisis propio',
          'Riego necesario para el rinde objetivo',
          'Rinde base y potencial de cada ambiente',
        ],
      },
      preparar: {
        tag: 'Preparar el lote',
        name: 'El agua del perfil y el residuo de herbicidas',
        description:
          'El agua que usa el cultivo de servicio frente a un barbecho, y cuánto herbicida queda según lluvia, riego y fecha.',
        bullets: [
          'Alerta de fitotoxicidad para el próximo cultivo',
          'Aplicaciones de la campaña anterior incluidas',
          'Análisis de suelo y plan de enmiendas',
        ],
      },
      fertilizar: {
        tag: 'Fertilizar',
        name: 'La dosis que se paga',
        description:
          'Simulación por producto y dosis con el balance de nutrientes, la curva de respuesta y los precios cargados en el lote.',
        bullets: [
          'Dosis óptima económica por lote',
          'Rinde fertilizando, sin pasar el potencial',
          'Margen bruto por lote y por ambiente',
        ],
      },
      acompanar: {
        tag: 'Acompañar el cultivo',
        name: 'Avisos de lo que viene en cada lote',
        description:
          'Clima y pronóstico por lote, y monitoreo a campo con catálogos de malezas, plagas y enfermedades.',
        bullets: [
          'Alertas de estrés térmico y enfermedades',
          'Recomendación que pasa al plan de aplicaciones',
          'Avisos diarios por WhatsApp, que se responden',
        ],
      },
      cerrar: {
        tag: 'Cerrar y aprender',
        name: 'Dónde se perdió rinde',
        description:
          'Lo que podía rendir cada lote contra lo cosechado, y el plan contra lo realizado, en rinde y en margen.',
        bullets: [
          'Brecha de rendimiento por lote y por ambiente',
          'Mapa de análisis entre lotes y campañas',
          'Vista consolidada por empresa',
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
        copy: 'Cada decisión parte del clima, el suelo y la historia de ese lote, no de lo típico de la zona.',
        detail: 'Dibujado sobre imagen satelital con sus ambientes. Dos lotes vecinos pueden pedir decisiones distintas.',
      },
      {
        title: 'Más lotes, sin perder detalle',
        copy: 'Clima, suelo, ambientes, monitoreo e historia ya cruzados en un solo lugar, sin armar planillas.',
        detail: 'El tiempo que se iba en juntar datos queda para recorrer el campo y decidir.',
      },
      {
        title: 'Qué hacer y cuándo',
        copy: 'No solo ver el lote en un mapa: saber qué conviene hacer y en qué momento.',
        detail:
          'Alertas de clima, enfermedades y fitotoxicidad, y un aviso diario por WhatsApp que se puede responder.',
      },
      {
        title: 'Independiente',
        copy: 'Rinde Plus no vende insumos: a\u00a0veces la mejor decisión es no aplicar.',
        detail: 'Antes de aplicar, la simulación con los precios del lote muestra si la dosis se paga.',
      },
    ],
  },

  cta: {
    title: 'Hablemos de tus lotes',
    vision:
      'Nuestra visión: que cada lote se decida con criterio agronómico, no solo los de quien puede pagarse un equipo técnico.',
    button: 'Hablemos por WhatsApp',
    hint: 'Sin formularios · respuesta del equipo en menos de 24 h',
  },

  install: {
    titleA: 'Rinde Plus en el celular,',
    titleB: 'como una app',
    subtitle: 'Se instala desde el navegador en cuatro pasos, sin pasar por ninguna tienda.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Abrir {APP} en <strong>Safari</strong>.</>,
        <>Tocar <strong>Compartir</strong> <LuShare className="rp-install__inline-icon" aria-hidden="true" />, en la barra de abajo.</>,
        <>Elegir <strong>Agregar a pantalla de inicio</strong>.</>,
        <>Tocar <strong>Agregar</strong> para confirmar.</>,
      ],
    },
    android: {
      name: 'Android',
      steps: [
        <>Abrir {APP} en <strong>Chrome</strong>.</>,
        <>Tocar el menú <strong>⋮</strong> de arriba a la derecha.</>,
        <>Elegir <strong>Instalar app</strong> o <strong>Agregar a pantalla principal</strong>.</>,
        <>Tocar <strong>Instalar</strong> para confirmar.</>,
      ],
    },
  },

  credits: {
    lead: 'Fotos',
    via: 'vía Wikimedia Commons',
    photos: [
      'Lotes de la pampa desde el avión, Murray Foubister',
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
    officeAria: 'Ver ubicación en Google Maps',
    rights: 'Todos los derechos reservados.',
    made: 'Hecho con datos y criterio agronómico',
    legalNav: 'Información legal',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    termsTitle: 'Términos y condiciones de uso de la plataforma',
  },
};

export default es;
