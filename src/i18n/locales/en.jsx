import { LuShare } from 'react-icons/lu';

// US English. Same structure and claims as es.jsx: only what the platform
// does today. "Lote" → field, "ambiente" → management zone, "campaña" →
// season. No questions in headings.

const en = {
  meta: {
    title: 'Rinde Plus · Agronomic judgment for every field',
    description:
      'Agronomic intelligence: Rinde Plus brings together the weather, soil, management zones and history of every field and turns them into decisions. For growers and agronomists.',
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
      campaign: 'The season',
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
        when, and whether it pays. For growers and agronomists.
      </>
    ),
    ctaTalk: "Let's talk about your fields",
    ctaCampaign: 'See the season',
    mapAria: 'A field drawn with three management zones, crop rows and contour lines',
  },

  trusted: {
    title: 'Trusted by',
  },

  fx: {
    title: 'One decision at a time, field by field',
    subtitle: (
      <>
        For every field: how much it can yield, how much it yielded and why it
        fell short. Five moments of the season; in each one, <strong>See the
        difference</strong> shows what changes.
      </>
    ),
    next: 'Next',
    nextAria: 'See the next moment',
    goTo: (name) => `Go to ${name}`,
    more: 'See the difference',
    today: 'How it is decided today',
    withRp: 'With Rinde Plus',
    back: 'Back',
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
        name: 'The ceiling of every field, zone by zone',
        description:
          'Base, potential, fertilized and harvested yield, per field and per management zone. The potential comes from the field’s reference soil, from its own soil test when there is one, and from the season’s water balance.',
        bullets: [
          'Reference soil from GeoINTA, IDECOR and SoilGrids, adjusted with the field’s own soil test',
          'Water balance: effective rainfall, plant-available water and planned irrigation',
          'Under irrigation: how much water it takes to reach the target yield, capped at field capacity',
          'Varieties from INASE, Argentina’s official cultivar registry',
        ],
        problem:
          'Plans are made with the typical yield of the area. Without a ceiling per field, there is no way to know how much can be gained or where it pays to invest.',
        gain:
          'Every field has its ceiling and its gap in plain sight, and the season’s target comes from the field, not from the average.',
      },
      preparar: {
        tag: 'Prepare the field',
        name: 'Soil water and herbicide residue, before planting',
        description:
          'Water use of the cover crop compared with a fallow, and the residue of each active ingredient based on rainfall, irrigation and application date, including applications carried over from the previous season.',
        bullets: [
          'Cover crop water use compared with a fallow',
          'Residue of each herbicide based on rainfall, irrigation and application date',
          'High crop injury (phytotoxicity) risk alert for the next crop',
          'Soil tests per field (chemistry, available water, texture, bulk density) and an amendment plan, sodic soils included',
        ],
        problem:
          'Cover crop termination is decided by eye and residue cannot be seen. Terminating late leaves the next crop short of water; high residue costs yield from emergence.',
        gain:
          'A termination date that protects soil water, and each field’s crop injury risk in plain sight before planting.',
      },
      fertilizar: {
        tag: 'Fertilize',
        name: 'How much to fertilize and whether the rate pays',
        description:
          'Simulation by product and rate, with the field’s nutrient balance and the yield response curve. With prices set at field level, the economic optimum rate and the margin it leaves. Sometimes the best decision is not to apply.',
        bullets: [
          'Simulator by product and rate, with nutrient balance',
          'Response curve and economic optimum rate',
          'Fertilized yield against base yield, never above the potential',
          'Gross margin per field and per zone',
        ],
        problem:
          'Last year’s rate, or the usual one for the area, gets repeated without knowing whether, in that field and at these prices, the application pays.',
        gain:
          'The rate, or the decision not to apply, with the field’s numbers in view: how much extra yield and how much margin it leaves.',
      },
      acompanar: {
        tag: 'Follow the crop',
        name: 'What is coming for each field and when to act',
        description:
          'Weather for each field, 15 days back and 15 ahead, plus field scouting against catalogs of weeds, pests and diseases, with damage by species and a product recommendation that flows into the application plan and the margin.',
        bullets: [
          'Field-level forecast, with alerts for heat stress, vapor pressure deficit and fungal disease risk',
          'Field scouting with curated catalogs of weeds, pests and diseases',
          'A notice when a field has gone unscouted for a while or a decision is pending',
          'Daily WhatsApp notices, with your consent, that can be answered',
        ],
        problem:
          'Stress shows in the field once yield is already lost, regional forecasts say nothing about each field, and what is seen while scouting stays in a notebook.',
        gain:
          'The notice arrives in time to act, and what is seen while scouting becomes an application with its cost in the margin.',
      },
      cerrar: {
        tag: 'Close and learn',
        name: 'Where yield was lost and how much can be recovered',
        description:
          'At season close, field by field, what could have been yielded against what was harvested, and the plan against what was done: the plan is frozen when it is applied.',
        bullets: [
          'Base, potential, fertilized and harvested yield',
          'Plan against actual, in yield and in margin',
          'Analysis map across fields, zones and seasons for fertilization, applications and scouting',
          'Company-wide view',
        ],
        problem:
          'The season closes with the harvested yield and little else. Data stays in scattered spreadsheets and the next season is decided the same way.',
        gain:
          'Every season leaves a lesson per field, and the next one starts from what was learned.',
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

  audiences: {
    title: 'For growers and agronomists',
    subtitle: 'One system, in the same language, to decide on every field.',
    groups: [
      {
        id: 'productor',
        title: 'Growers',
        lead: 'How much each field can yield, why it fell short, what is worth doing, when, and whether it pays.',
        items: [
          { t: 'What to do and when', d: 'A recommendation for every field, at the right moment.' },
          { t: 'Whether the application pays', d: 'The field’s numbers before applying; sometimes doing nothing is the better call.' },
          { t: 'Daily notices', d: 'Weather, disease and crop injury alerts on WhatsApp, which can be answered.' },
        ],
      },
      {
        id: 'agronomo',
        title: 'Agronomists',
        lead: 'The analysis already built; the time, for deciding.',
        items: [
          { t: 'The analysis, already integrated', d: 'Weather, soil, zones, scouting and history of every field in one place.' },
          { t: 'More fields, same rigor', d: 'Analysis map and company-wide view to follow many fields at once.' },
          { t: 'Scouting with judgment', d: 'Scouting with curated catalogs and a recommendation that flows into the application plan.' },
        ],
      },
    ],
  },

  principles: [
    {
      title: 'Through your organization',
      copy: 'Cooperatives, grain elevators, seed companies, input suppliers and advisory firms give their network access.',
    },
    {
      title: 'One system',
      copy: 'Weather, soil, zones and history of every field, in one place.',
    },
    {
      title: 'Our vision',
      copy: 'Every field decided with agronomic judgment, not only those of growers who can afford a technical team.',
    },
  ],

  cta: {
    title: "Let's talk about your fields.",
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
