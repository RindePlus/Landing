import { LuShare } from 'react-icons/lu';

// US English. Same structure and claims as es.jsx: only what the platform
// does today. 'Lote' → field, 'ambiente' → management zone, 'campaña' →
// season. No questions in headings.

const en = {
  meta: {
    title: 'Rinde Plus · Agronomic judgment for every field',
    description:
      'Agronomic intelligence: Rinde Plus brings together the weather, soil, management zones and history of every field and turns them into decisions.',
  },

  whatsapp: {
    message: "Hi, I'd like more information about Rinde Plus",
    fabLabel: 'WhatsApp',
    hello: 'Hi',
    helloAria: 'wave',
    question: 'How can we help?',
    cta: 'Message us on WhatsApp',
  },

  header: {
    openMenu: 'Open menu',
    nav: {
      home: 'Home',
      impact: 'Impact',
      campaign: 'Platform',
      why: 'Benefits',
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
    titleA: 'Agronomic judgment',
    titleB: 'for every field.',
    subtitle: (
      <>
        Rinde Plus is <strong>agronomic intelligence</strong>: it brings
        together the weather, soil, management zones and history of every
        field and turns them into <strong>decisions</strong> on what to do,
        when, and whether it pays.
      </>
    ),
    ctaTalk: "Let's talk about your fields",
    ctaCampaign: 'See what it does',
    mapAria: 'A field drawn with three management zones, crop rows and contour lines',
    // Hero field scene notifications (doc/ANIMACION_LOTE.md).
    avisos: {
      marca: 'Rinde Plus',
      ahora: 'now',
      planificar: 'Potential yield by zone, ready.',
      preparar: 'Soil test interpreted.',
      fertilizar: 'Economic optimum rate by zone.',
      sequia: 'Irrigation needed to reach the target yield.',
      calor: 'Heat stress alert for the coming days.',
      lluvia: 'Fungal disease risk after the rain.',
      cerrar: 'Yield gap by zone, calculated.',
    },
  },

  trusted: {
    title: 'Trusted by',
  },

  // Impact section. Numbers arrive already formatted in `d` (see
  // ImpactSection.jsx). "Season" is the crop year; each field in a year is a
  // "production cycle".
  impacto: {
    title: 'More grain and more carbon in the soil',
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
      grano: {
        titulo: (d) => `Extra grain by crop, ${d.campana} season`,
        columnas: ['Crop', 'Hectares', 'Average yield (kg/ha)', 'Extra kg/ha', 'Total'],
        nota: (d) =>
          `${d.pct} of each crop’s yield, within the ${d.pctBajo} to ${d.pctAlto} range Rinde Plus estimates comes from yield gap management. At ${d.pctBajo} it would be about ${d.granoBajo} t; at ${d.pctAlto}, about ${d.granoAlto} t.`,
      },
      carbono: {
        titulo: (d) => `Extra carbon by crop (t CO₂), ${d.campana} season`,
        columnas: ['Crop', 'Fixed', 'Returns to soil', 'Stays stable'],
        nota: (d) =>
          `This is the extra carbon from the extra grain. Grain is harvested and its carbon returns to the atmosphere; what stays is the carbon in stubble and roots, and roots contribute the most stable part. It is equivalent to offsetting the emissions of about ${d.autos} cars a year.`,
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
    next: 'Next',
    nextAria: 'See the next moment',
    goTo: (name) => `Go to ${name}`,
    charts: {
      zones: ['High', 'Mid', 'Low'],
      potentialCaption: 'Base and potential yield by zone',
      residueCaption: 'Residue and crop injury risk',
      doseCaption: 'Economic optimum rate',
      today: 'Today',
      forecastCaption: '15 days back, 15 ahead',
      fourYields: ['Potential', 'Fertilized', 'Harvested', 'Base'],
      gapCaption: 'Yield gap',
    },
    panels: {
      planificar: {
        tag: 'Plan',
        name: 'The yield each field can reach',
        description:
          'Base, potential, fertilized and harvested yield, per field and per management zone. The potential comes from the soil, the field’s own soil test and the season’s water balance.',
        bullets: [
          'Reference soil (GeoINTA, IDECOR, SoilGrids) adjusted with the field’s own soil test',
          'Irrigation needed to reach the target yield',
          'Varieties from INASE, Argentina’s official cultivar registry',
        ],
      },
      preparar: {
        tag: 'Prepare the field',
        name: 'Soil water and herbicide residue',
        description:
          'Cover crop water use against a fallow, and the residue of each herbicide based on rainfall, irrigation and application date.',
        bullets: [
          'High crop injury (phytotoxicity) risk alert for the next crop',
          'Includes applications from the previous season',
          'Soil tests and amendment plan',
        ],
      },
      fertilizar: {
        tag: 'Fertilize',
        name: 'The rate that pays',
        description:
          'Simulation by product and rate with the nutrient balance, the response curve and the prices set for the field.',
        bullets: [
          'Economic optimum rate',
          'Fertilized yield, never above the potential',
          'Gross margin per field and per zone',
        ],
      },
      acompanar: {
        tag: 'Follow the crop',
        name: 'Notices on what is coming for each field',
        description:
          'Field-level weather, 15 days back and 15 ahead, and field scouting with catalogs of weeds, pests and diseases.',
        bullets: [
          'Alerts for heat stress, vapor pressure deficit and fungal diseases',
          'Product recommendations that flow into the application plan',
          'Daily WhatsApp notices, with your consent, that can be answered',
        ],
      },
      cerrar: {
        tag: 'Close and learn',
        name: 'Where yield was lost',
        description:
          'What each field could have yielded against what was harvested, and the plan against what was done, in yield and in margin.',
        bullets: [
          'Yield gap per field and per zone',
          'Analysis map across fields, zones and seasons',
          'Company-wide view',
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
    title: "Let's talk about your fields.",
    vision:
      'Our vision: every field decided with agronomic judgment, not only those of growers who can afford a technical team.',
    copy: 'A few lines about your operation are enough to set up a call. No forms: the Rinde Plus team replies directly.',
    button: 'Message us on WhatsApp',
    hint: 'Reply within 24 h',
  },

  install: {
    titleA: 'Rinde Plus on your phone,',
    titleB: 'just like an app.',
    subtitle: 'Install it from the browser in three steps, no app store needed.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Open <strong>app.rindeplus.com</strong> in <strong>Safari</strong>.</>,
        (
          <>
            Tap <strong>Share</strong>{' '}
            <LuShare className="rp-install__inline-icon" aria-hidden="true" />{' '}
            (the square with the arrow).
          </>
        ),
        <>Choose <strong>Add to Home Screen</strong> and confirm.</>,
      ],
    },
    android: {
      name: 'Android',
      steps: [
        <>Open <strong>app.rindeplus.com</strong> in <strong>Chrome</strong>.</>,
        <>Tap the <strong>⋮</strong> menu (top right).</>,
        (
          <>
            Choose <strong>Install app</strong> (or <strong>Add to Home
            screen</strong>) and confirm.
          </>
        ),
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
    office: 'Office',
    officeAria: 'See location on Google Maps',
    rights: 'All rights reserved.',
    made: 'Built with data and agronomic judgment',
  },
};

export default en;
