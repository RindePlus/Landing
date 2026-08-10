// Modelo único B2B: un solo plan con todos los módulos, y el precio
// definido por la cantidad de CUITs contratados.

export const CUITS_MINIMOS = 20;
export const LOTES_POR_CUIT = 20;

// Lo que accede cada CUIT. Sin nombre de plan: es uno solo.
// Ocho ítems: en desktop caen en dos filas de cuatro, con los tres Vig IA
// juntos en la segunda.
export const FUNCIONALIDADES = [
  'Análisis de Campaña',
  'Brechas Estándar',
  'Brechas Inteligentes',
  'Pronóstico Climático',
  'Simulador de Margen Bruto',
  'Vig IA BioEstrés',
  'Vig IA Cultivo de Servicio',
  'Vig IA Herbicidas',
];

const TARIFA_BASE = 750;

// Tres tramos cerrados. El ahorro se deriva de la tarifa base para que no
// pueda quedar desfasado.
export const TRAMOS_CUITS = [
  {
    id: 'base',
    label: `Desde ${CUITS_MINIMOS} CUITs`,
    precioPorCuit: TARIFA_BASE,
  },
  { id: 'p50', label: 'Pack 50 CUITs', precioPorCuit: 700 },
  { id: 'p100', label: 'Pack 100 CUITs', precioPorCuit: 600 },
].map((t) => ({
  ...t,
  ahorroPct: Math.round(((TARIFA_BASE - t.precioPorCuit) / TARIFA_BASE) * 100),
}));

const WHATSAPP_NUMBER = '5493564593446';

export function buildWhatsAppUrl(mensaje) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
