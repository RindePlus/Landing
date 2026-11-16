// About and Learn pages (English, US). Same structure as paginas.es.js.

const paginas = {
  nosotros: {
    meta: {
      title: 'About · Rinde Plus',
      description:
        'Rinde Plus is a company from Alta Gracia, Córdoba, Argentina, bringing agronomy and information systems together so every field is decided with agronomic judgment. Who we are and how we work.',
    },
    title: 'We are Rinde Plus',
    lead:
      'We combine agronomic knowledge and technology so every field is decided with data and with judgment.',
    bloques: [
      { titulo: 'Who we are', texto: 'A team from Alta Gracia, Córdoba, Argentina, that brings two worlds together: the agronomic knowledge of people who walk the field and the technology that carries it into every decision. We work at the same table, and it shows in every number in the platform.' },
      { titulo: 'What we do', texto: 'Rinde Plus follows every field through the whole season: how much it can yield, how much water the soil holds, which rate pays off, what risks are coming and, at the close, where yield was lost. For growers, advisors and farm businesses.' },
      { titulo: 'How we do it', texto: 'We bring together the soil, the weather, satellite imagery and the history of every field, and read them with agronomic judgment. The result arrives clearly: in the platform, in reports and in a WhatsApp alert you can reply to.' },
    ],
    idea: {
      kicker: 'The idea',
      titulo: 'Two neighboring fields can call for different decisions.',
      lead: 'Rinde Plus exists to find that difference and explain it: soil, water in the profile, the history of each zone and the season’s weather, field by field.',
    },
    equipo: {
      kicker: 'Our team',
      titulo: 'Agronomy and software, at the same table',
      bajada: 'Every number in the platform is worked out together by people who know the field and people who build the software.',
      miembros: [
        { nombre: 'Marcos Flesia', cargo: 'CEO', profesion: 'Agronomist', area: 'agro' },
        { nombre: 'Santiago Quesada', cargo: 'CTO', profesion: 'Information systems engineer', area: 'sis' },
        { nombre: 'Manuel Frías', profesion: 'Information systems engineer', area: 'sis' },
        { nombre: 'Ángeles Sanz', profesion: 'Agronomist', area: 'agro' },
        { nombre: 'Tomás Abrate', profesion: 'Information systems engineer', area: 'sis' },
      ],
    },
    dosLotes: {
      aria: 'Two neighboring fields with different zone maps and a different alert for each',
      a: { nombre: 'Field 14', aviso: 'Fertilizing the high zone pays off.' },
      b: { nombre: 'Field 15', aviso: 'Water is limiting: fertilizer won’t pay.' },
    },
    anatomia: {
      kicker: 'How we think about every number',
      titulo: 'Anatomy of an alert',
      bajada:
        'Every alert says what was measured, which criteria were used to read it and what to do. This one comes from the water balance, as it arrives on WhatsApp.',
      mensaje: {
        encabezado: 'Water stress · Early alert',
        medido: 'Available water 52.3% · VPD 1.2 kPa',
        criterio: 'Threshold 60% · VPD max 1.7 · three days in a row',
        decision: 'Apply if the forecast pushes VPD up.',
        lote: 'Field 14 · low zone',
        hora: '7:02',
      },
      partes: [
        { titulo: 'What was measured', texto: 'Available water comes from the zone’s daily water balance; VPD, from temperature and humidity at the field’s location.' },
        { titulo: 'The criteria', texto: 'The threshold depends on the crop and its growth stage. One day isn’t enough: the alert needs three days in a row.' },
        { titulo: 'The decision', texto: 'The level says how serious it is and what to do. If data were missing, the alert would say so instead of making it up.' },
      ],
    },
    compromisos: {
      titulo: 'Our commitments',
      items: [
        { titulo: 'We don’t make up data.', texto: 'A day without weather stays a gap, and a missing soil test is flagged. Better one number less than a false one.' },
        { titulo: 'We don’t use black boxes.', texto: 'Every calculation follows a rule you can read and discuss with your advisor.' },
        { titulo: 'We don’t replace the agronomist.', texto: 'We take the data gathering off their plate so they have more time in the field.' },
        { titulo: 'We recommend independently.', texto: 'The recommendation comes from the field, not from a product. If the simulation shows a rate doesn’t pay, the platform says so.' },
      ],
    },
    lugar: {
      kicker: 'Where we are',
      titulo: 'Alta Gracia, Córdoba',
      texto: 'In the heart of Argentina’s farm country, close to the fields we follow. Rinde Plus® is a brand of Conextion S.A.S.',
      direccion: 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina',
      mapa: 'View on map',
    },
  },

  educacion: {
    meta: {
      title: 'What’s behind every number · Rinde Plus',
      description:
        'Nine agronomy concepts explained simply, each with a drawing: management zones, law of the minimum, plant available water, carryover, optimum rate, water balance, VPD, NDVI and yield gap.',
    },
    kicker: 'Learn',
    title: 'What’s behind every number',
    lead:
      'Nine agronomy concepts, explained simply and with a drawing, ordered by moment of the season. To understand what a field is telling you before you decide.',
    mapa: 'Season map',
    momentos: [
      { id: 'planificar', nombre: 'Plan' },
      { id: 'preparar', nombre: 'Prepare the field' },
      { id: 'fertilizar', nombre: 'Fertilize' },
      { id: 'acompanar', nombre: 'Follow the crop' },
      { id: 'cerrar', nombre: 'Close and learn' },
    ],
    probar: 'Try it',
    comoSeLee: 'How to read it',
    lecciones: [
      {
        id: 'ambientes',
        momento: 'planificar',
        termino: 'Management zones',
        definicion: 'Areas of a field that behave alike because of their soil, relief and history. One field can have high, medium and low zones that yield differently and call for different management.',
        lectura: 'Before comparing numbers, check which zone each one comes from: a low yield in the low zone can be a good result.',
        etiquetas: { alto: 'High', medio: 'Medium', bajo: 'Low' },
      },
      {
        id: 'ley-del-minimo',
        momento: 'planificar',
        termino: 'Law of the minimum',
        definicion: 'Yield is limited by the scarcest nutrient, even when the others are plentiful. And water sits above them all: no nutrient takes yield beyond what the season’s water allows.',
        lectura: 'Fertilizing a nutrient that isn’t limiting adds no yield. The one that matters is the shortest.',
        demo: {
          ejemplo: 'Corn example',
          pista: 'Tap a bar to fertilize that nutrient.',
          nutrientes: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium', 'Magnesium', 'Sulfur'],
          simbolos: ['N', 'P', 'K', 'Ca', 'Mg', 'S'],
          techo: 'Water ceiling',
          rinde: 'Yield',
          limita: 'Limited by',
          agua: 'water',
          fertilizar: (n) => `Fertilize with ${n}`,
          reiniciar: 'Start over',
        },
      },
      {
        id: 'agua-util',
        momento: 'preparar',
        termino: 'Plant available water',
        definicion: 'Soil water the crop can actually use. It goes from 0% at the wilting point, when the crop can no longer extract water, to 100% at field capacity, the most the soil can hold.',
        lectura: '0% doesn’t mean dry soil: it means water the crop can no longer use. What matters is how far it is from the crop’s threshold.',
        etiquetas: { pmp: 'Wilting point', cc: 'Field capacity', umbral: 'Threshold', hoy: 'Today' },
      },
      {
        id: 'carry-over',
        momento: 'preparar',
        termino: 'Herbicide carryover',
        definicion: 'The share of a herbicide that stays in the soil after application and can injure the next crop. It breaks down faster with heat and rain, and depends on the soil and the active ingredient.',
        lectura: 'What counts is the residue on planting day, not on application day. If it is above the label limit at planting, you have to wait.',
        etiquetas: { aplicacion: 'Application', siembra: 'Planting', limite: 'Label limit', espera: 'Waiting days' },
      },
      {
        id: 'dosis-optima',
        momento: 'fertilizar',
        termino: 'Economic optimum rate',
        definicion: 'Yield rises with rate, but each extra pound of fertilizer adds less than the one before. The economic optimum is where the last pound still pays for itself in grain, before maximum yield.',
        lectura: 'Chasing maximum yield is rarely good business: the last pounds of fertilizer cost more than they return.',
        etiquetas: { dosis: 'Rate', rinde: 'Yield', optima: 'Economic optimum', maximo: 'Maximum' },
      },
      {
        id: 'balance-hidrico',
        momento: 'acompanar',
        termino: 'Water balance and critical period',
        definicion: 'A daily account of soil water: it adds rain and irrigation and subtracts what the crop uses. Below the threshold, the crop suffers. The critical period is the stages when that shortage hurts yield the most.',
        lectura: 'The same deficit weighs much more in the critical period. That’s when the next two weeks of forecast matter most.',
        etiquetas: { umbral: 'Threshold', critico: 'Critical period', hoy: 'Today', pronostico: 'Forecast' },
      },
      {
        id: 'dpv',
        momento: 'acompanar',
        termino: 'Vapor pressure deficit',
        definicion: 'VPD measures how dry the air is: the gap between the water vapor it could hold at that temperature and what it holds. High, the air pulls water from the crop; low, humid air favors fungi.',
        lectura: 'A single day out of range the plant can handle. What weighs is several days in a row.',
        etiquetas: { alto: 'Dry air', sano: 'Healthy zone', bajo: 'Fungal risk', dias: 'Days' },
      },
      {
        id: 'ndvi',
        momento: 'acompanar',
        termino: 'NDVI',
        definicion: 'An index calculated from the red and near-infrared light the crop reflects, seen from the satellite. Higher means more green, active biomass.',
        lectura: 'It’s for comparing: areas of the same field, or the same field on another date. Clouds and their shadows fool it.',
        etiquetas: { bajo: 'Low', alto: 'High', pixel: 'Each square: 10 × 10 m' },
      },
      {
        id: 'brecha',
        momento: 'cerrar',
        termino: 'Yield potential and yield gap',
        definicion: 'Potential is the ceiling set by the season’s water. The gap is what’s missing between that ceiling and what the field yields with soil nutrients, with fertilizer or at harvest.',
        lectura: 'A large gap with plenty of water usually points to nutrients. If water is what limits, more fertilizer won’t close it.',
        etiquetas: { potencial: 'Potential', fertilizando: 'Fertilized', base: 'Base', cosechado: 'Harvested', brecha: 'Gap' },
      },
    ],
    fuentes: {
      titulo: 'Where the data comes from',
      texto: 'Our own reference soil service, with GeoINTA, IDECOR and SoilGrids, adjusted with each field’s soil test. Weather from several carefully selected providers. Sentinel-2 imagery: contains modified Copernicus Sentinel data.',
    },
  },
};

export default paginas;
