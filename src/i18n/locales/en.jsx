import { LuShare } from 'react-icons/lu';
import { APP_URL } from '../../data/links';

// Enlace a la plataforma en los pasos de instalación: se toca y se abre.
const APP = (
  <a className="rp-install__link" href={APP_URL}>
    cloud.rindeplus.com
  </a>
);

// US English. Same structure and claims as es.jsx: only what the platform
// does today. 'Lote' → field, 'ambiente' → management zone, 'campaña' →
// season. No questions in headings.

const en = {
  meta: {
    title: 'Rinde Plus · Agronomic intelligence for every field',
    description:
      'Rinde Plus brings together the weather, soil, management zones and history of every field and turns them into decisions: what to do, when, and whether it pays.',
  },

  whatsapp: {
    message: "Hi, I'd like more information about Rinde Plus",
    cta: "Let's talk on WhatsApp",
  },

  header: {
    openMenu: 'Open menu',
    nav: {
      impact: 'Impact',
      campaign: 'Platform',
      why: 'Benefits',
      contact: 'Contact',
      install: 'How to install the app',
    },
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
    themeSwitchAria: 'Switch between light and dark mode',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    login: 'Log in',
    loginLong: 'Log in to the platform',
    language: 'Language',
    logoAlt: 'Rinde Plus',
  },

  hero: {
    titleA: 'Agronomic intelligence',
    titleB: 'for every field',
    subtitle: (
      <>
        Rinde Plus brings together the weather, soil, management zones and
        history of every field and turns them into <strong>decisions</strong>:
        what to do, when, and whether it pays.
      </>
    ),
    ctaTalk: "Let's talk about your fields",
    ctaCampaign: 'See features',
    mapAria: 'A field drawn with its vigor map by management zone, crop rows and contour lines',
    // Hero field scene notifications (doc/ANIMACION_LOTE.md).
    avisos: {
            planificar: { titulo: 'Planning', texto: 'Potential yield by zone, ready.' },
      preparar: { titulo: 'Soil', texto: 'Soil test interpreted.' },
      fertilizar: { titulo: 'Fertilization', texto: 'Economic optimum rate by zone.' },
      sequia: { titulo: 'Water alert', texto: 'Irrigation needed to reach the target yield.' },
      calor: { titulo: 'Heat alert', texto: 'Heat stress expected in the coming days.' },
      lluvia: { titulo: 'Disease alert', texto: 'Fungal disease risk after the rain.' },
      cerrar: { titulo: 'Season close', texto: 'Yield gap by zone, calculated.' },
    },
  },

  trusted: {
    title: 'Trusted by',
  },

  // Impact section. Numbers arrive already formatted in `d` (see
  // ImpactSection.jsx). "Season" is the crop year; each field in a year is a
  // "production cycle".
  impacto: {
    title: 'More grain and more CO₂ capture',
    subtitle: (d) => `Figures from the ${d.campana} season across the fields Rinde Plus follows.`,
    indicadores: {
      hectareas: (d) => `monitored in the latest season (${d.campana})`,
      grano: () => 'of extra grain from yield gap management',
      carbono: () => 'of extra CO₂ that stays in the soil',
      suelo: () => 'soil tests interpreted',
    },
    pista: 'Figures with an arrow open the breakdown by crop',
    cerrar: 'Close breakdown',
    cultivos: { maiz: 'Corn', soja: 'Soybean', trigo: 'Wheat', girasol: 'Sunflower', otros: 'Other crops' },
    total: 'Total',
    tablas: {
      hectareas: {
        titulo: (d) => `Hectares by crop, ${d.campana} season`,
        columnas: ['Crop', 'Hectares', 'Share', 'Average yield (kg/ha)'],
      },
      grano: {
        titulo: (d) => `Extra grain by crop, ${d.campana} season`,
        columnas: ['Crop', 'Extra kg/ha', 'Extra grain'],
      },
      carbono: {
        titulo: (d) => `Extra carbon by crop (t CO₂), ${d.campana} season`,
        columnas: ['Crop', 'Fixed', 'Returns to soil', 'Stays stable'],
      },
      suelo: {
        titulo: (d) => `Soil tests by crop, ${d.campana} season`,
        columnas: ['Crop', 'Soil tests', 'Share'],
      },
    },
    pie: {
      linea: (d) => `+${d.historia} ha of production data over ${d.campanas} seasons (${d.desde} to ${d.hasta})`,
    },
  },

  fx: {
    title: 'What Rinde Plus does',
    subtitle:
      'One tool that follows every field through the whole season, from plan to close.',
    momentos: 'Moments of the season',
    siguiente: 'Next',
    anterior: 'Previous',
    volverInicio: 'Back to the start',
    charts: {
      zones: ['High', 'Mid', 'Low'],
      potentialCaption: 'Base and potential yield by zone',
      residueCaption: 'Residue and crop injury risk',
      doseCaption: 'Economic optimum rate',
      today: 'Today',
      forecastCaption: 'Field weather and forecast',
      fourYields: ['Potential', 'Fertilized', 'Harvested', 'Base'],
      gapCaption: 'Yield gap',
    },
    panels: {
      planificar: {
        tag: 'Plan',
        name: 'The yield each field can reach',
        description:
          'How much each management zone can yield, based on its soil, its own soil test and the season’s water.',
        bullets: [
          'Reference soil and own soil analysis',
          'Irrigation needed for the target yield',
          'Base and potential yield for each zone',
        ],
      },
      preparar: {
        tag: 'Prepare the field',
        name: 'Soil water and herbicide residue',
        description:
          'Cover crop water use against a fallow, and how much herbicide remains based on rain, irrigation and date.',
        bullets: [
          'Phytotoxicity alert for the next crop',
          'Last season’s applications included',
          'Soil analysis and amendment plan',
        ],
      },
      fertilizar: {
        tag: 'Fertilize',
        name: 'The rate that pays',
        description:
          'Simulation by product and rate with the nutrient balance, the response curve and the prices set for the field.',
        bullets: [
          'Economic optimum dose per field',
          'Fertilized yield, capped at potential',
          'Gross margin per field and zone',
        ],
      },
      acompanar: {
        tag: 'Follow the crop',
        name: 'Notices on what is coming for each field',
        description:
          'Field-level weather and forecast, and field scouting with catalogs of weeds, pests and diseases.',
        bullets: [
          'Heat stress and disease alerts',
          'Recommendations that go to the spray plan',
          'Daily WhatsApp notices that can be answered',
        ],
      },
      cerrar: {
        tag: 'Close and learn',
        name: 'Where yield was lost',
        description:
          'What each field could have yielded against what was harvested, and the plan against what was done, in yield and in margin.',
        bullets: [
          'Yield gap per field and zone',
          'Analysis map across fields and seasons',
          'Consolidated view per company',
        ],
      },
    },
  },

  benefits: {
    aria: 'Why Rinde Plus',
    roledesc: 'carousel',
    slideRoledesc: 'slide',
    slideLabel: (i, n) => `${i} of ${n}`,
    prev: 'Previous point',
    next: 'Next point',
    dotLabel: (i, title) => `Point ${i}: ${title}`,
    items: [
      {
        title: 'Your field, not the average',
        copy: 'Every decision starts from that field’s weather, soil and history, not from what is typical for the area.',
        detail: 'Drawn on satellite imagery with its management zones. Two neighboring fields can call for different decisions.',
      },
      {
        title: 'More fields, no less detail',
        copy: 'Weather, soil, zones, scouting and history already combined in one place, with no spreadsheets to build.',
        detail: 'The time that went into gathering data goes back to walking the fields and deciding.',
      },
      {
        title: 'What to do and when',
        copy: 'Not just seeing the field on a map: knowing what is worth doing and when.',
        detail: 'Weather, disease and crop injury alerts, and a daily WhatsApp notice you can reply to.',
      },
      {
        title: 'Independent',
        copy: 'Rinde Plus does not sell inputs: sometimes the best decision is not to apply.',
        detail: 'Before applying, a simulation with the field’s prices shows whether the rate pays off.',
      },
    ],
  },

  cta: {
    title: "Let's talk about your fields",
    vision:
      'Our vision: every field decided with agronomic judgment, not only those of growers who can afford a technical team.',
    button: "Let's talk on WhatsApp",
    hint: 'No forms · the team replies within 24 h',
  },

  install: {
    titleA: 'Rinde Plus on your phone,',
    titleB: 'just like an app',
    subtitle: 'Install it from the browser in four steps, no app store needed.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Open {APP} in <strong>Safari</strong>.</>,
        <>Tap <strong>Share</strong> <LuShare className="rp-install__inline-icon" aria-hidden="true" /> in the bottom bar.</>,
        <>Choose <strong>Add to Home Screen</strong>.</>,
        <>Tap <strong>Add</strong> to confirm.</>,
      ],
    },
    android: {
      name: 'Android',
      steps: [
        <>Open {APP} in <strong>Chrome</strong>.</>,
        <>Tap the <strong>⋮</strong> menu at the top right.</>,
        <>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</>,
        <>Tap <strong>Install</strong> to confirm.</>,
      ],
    },
  },

  credits: {
    lead: 'Photos',
    via: 'via Wikimedia Commons',
    photos: [
      'Pampas fields from the air, Murray Foubister',
      'Soybean field in Argentina, Alfonso',
      'Pampas sunflower, Emilio Küffer',
      'Soybean harvest, Clasonsf',
    ],
  },

  footer: {
    email: 'Email',
    emailAria: 'Send an email to inforindeplus@gmail.com',
    instagram: 'Instagram',
    instagramAria: 'Open Rinde Plus on Instagram',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Open WhatsApp chat',
    officeAria: 'See location on Google Maps',
    rights: 'All rights reserved.',
    made: 'Built with data and agronomic judgment',
  },
};

export default en;
