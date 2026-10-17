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
