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
      campaign: 'What it does',
      why: 'Why Rinde Plus',
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
    info: (titulo) => `How it is calculated: ${titulo}`,
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
      fuente: (d) => `Data from the Rinde Plus database as of ${d.fecha}. The ⓘ button on each figure explains how it is calculated.`,
    },
    modal: {
      cerrar: 'Close',
      bloques: { mide: 'What it measures', calcula: 'How it is calculated', compone: 'Breakdown', cuenta: 'Keep in mind' },
      hectareas: {
        titulo: (d) => `Hectares monitored in the latest season (${d.campana})`,
        mide: () => 'The area Rinde Plus monitored in the latest complete season.',
        columnas: ['Crop', 'Hectares', '%'],
        cuenta: () => 'Area with no crop recorded was assigned the same crop mix as the rest.',
      },
      grano: {
        titulo: () => 'Extra grain from yield gap management',
        mide: () =>
          'The grain added in corn, soybean, wheat and sunflower by deciding with Rinde Plus yield gap analysis.',
        calcula: (d) =>
          `For each crop: ${d.campana} hectares × recorded average yield × ${d.pct}. Rinde Plus estimates that between ${d.pctBajo} and ${d.pctAlto} of the yield of fields under yield gap management comes from that management; ${d.pct} is used here, at the low end of the range. At ${d.pctBajo} it would be about ${d.granoBajo} t; at ${d.pctAlto}, about ${d.granoAlto} t.`,
        cuenta: (d) =>
          `It is an estimate on each crop’s average yield, not a field-by-field measurement. Area with no crop recorded (${d.sinCultivoPct}) was assigned the same crop mix as the rest. Corn, soybean, wheat and sunflower are included (${d.cultivosPct} of the area); rice and minor crops are not.`,
      },
      carbono: {
        titulo: () => 'Extra CO₂ in the soil',
        mide: () => 'The extra carbon that extra grain leaves in the soil, through stubble and roots.',
        calcula: () =>
          'Extra grain of each crop × carbon coefficients per tonne. For corn, soybean and wheat they are the same ones VigIA uses, taken from its technical report; sunflower’s were calculated with the same method, using its harvest index. The highlighted figure is the “Stays stable” column.',
        cuenta: () =>
          'It is an estimate based on coefficients, not a measurement of soil carbon in each field, and it is not a carbon credit certificate.',
      },
      suelo: {
        titulo: () => 'Soil tests interpreted',
        mide: (d) =>
          `How many ${d.campana} management zones have a soil test on record (phosphorus, organic matter, pH and more) that the platform interprets for diagnosis and fertilization.`,
        calcula: (d) => `Zones with at least one of those values are counted (${d.sueloTotal}).`,
      },
      historia: {
        titulo: () => 'Data history',
        mide: () => 'The area with production data accumulated in the database.',
        calcula: (d) =>
          `Each time a field has data in a season, its area is added. That is ${d.historiaHa} ha across ${d.ciclos} production cycles on ${d.lotes} fields from ${d.empresas} companies, between ${d.desde} and ${d.hasta}. The current season, ${d.enCurso}, is not counted.`,
        cuenta: (d) =>
          `A field with data in 10 seasons counts 10 times; counting each field once, the area is about ${d.haUnicas} ha.`,
      },
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
        copy: 'Every decision starts from the field’s weather, soil and history, not from what is typical for the area.',
        detail:
          'Each field, drawn on satellite imagery with its management zones, combines weather, soil and yield history. Two neighboring fields can call for different decisions.',
      },
      {
        title: 'The analysis is already done',
        copy: 'No more crossing weather, yields and soil by hand in spreadsheets: the time goes to deciding.',
        detail:
          'Weather, soil, zones, scouting and history of every field, in one place. More fields, without losing depth.',
      },
      {
        title: 'What to do and when',
        copy: 'More than a field on a map: what is worth doing and when.',
        detail:
          'A recommendation for every field, with weather, disease and crop injury alerts and daily WhatsApp notices.',
      },
      {
        title: 'Independent',
        copy: 'Rinde Plus does not sell inputs: sometimes the best decision is not to apply.',
        detail:
          'Before applying, the field’s numbers in view: if the application pays, it is worth it; if not, sometimes the best move is to do nothing.',
      },
    ],
  },

  cta: {
    title: "Let's talk about your fields.",
    vision:
      'Our vision: every field decided with agronomic judgment, not only those of growers who can afford a technical team.',
    copy: 'A few lines about the operation are enough to set up a call. No long forms: the Rinde Plus team replies directly.',
    button: 'Message us on WhatsApp',
    hint: 'Reply within 24 h',
  },

  install: {
    title: 'The platform as an app on your phone',
    subtitle: 'Add it to the home screen in three steps, no app store needed.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Open <strong>app.rindeplus.com</strong> in <strong>Safari</strong>.</>,
        (
          <>
            Tap <strong>Share</strong>{' '}
            <LuShare className="rp-install__inline-icon" aria-hidden="true" />{' '}
            (the square with the arrow pointing up).
          </>
        ),
        <>Choose <strong>Add to Home Screen</strong> and confirm with <strong>Add</strong>.</>,
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
            screen</strong>, depending on the version) and confirm.
          </>
        ),
      ],
    },
  },

  credits: {
    lead: 'Images',
    via: 'via Wikimedia Commons',
    photos: [
      'Argentina’s Wet Pampa seen from space, INPE',
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
