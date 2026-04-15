export const PLAN_PRODUCTOR = {
  id: 'productor-plus',
  nombre: 'Premium',
  tagline: 'Todo incluido · Con acompañamiento agronómico',
  precioAnual: 720,
  precioMensualEq: 60,
  usdPorHaCampana: 3,
  incluye: [
    'Análisis de Campaña',
    'Brechas Estándar',
    'Brechas Inteligentes',
    'Vig IA BioEstrés',
    'Pronóstico Climático',
    'Todos tus lotes y hectáreas, sin tope',
    'Soporte técnico de la plataforma',
    'Acompañamiento agronómico del equipo Rinde Plus',
    'Onboarding, capacitación y validación de resultados',
  ],
};

export const PLANES_EMPRESAS = [
  {
    id: 'standard',
    nombre: 'Standard',
    tagline: 'Puerta de entrada al ecosistema',
    descripcion:
      'Los módulos base para que cada socio analice su campaña y sus brechas desde el primer día.',
    precioAnual: 360,
    precioMensualEq: 30,
    modulos: [
      'Análisis de Campaña',
      'Brechas Estándar',
      'Pronóstico Climático',
      'Actualizaciones futuras (parcial)',
    ],
    destacado: false,
  },
  {
    id: 'full',
    nombre: 'Full',
    tagline: 'Solución productiva completa',
    descripcion:
      'Todo lo del Standard más la capa analítica avanzada y las próximas actualizaciones productivas.',
    precioAnual: 720,
    precioMensualEq: 60,
    modulos: [
      'Análisis de Campaña',
      'Brechas Estándar',
      'Brechas Inteligentes',
      'Vig IA (próxima actualización)',
      'Pronóstico Climático',
      'Todas las actualizaciones productivas',
    ],
    destacado: true,
  },
];

export const AAPRESID_MIN_SOCIOS = 10;
export const AAPRESID_PROMO_VALIDA_HASTA = 'Junio 2026';

export const PLANES_AAPRESID = [
  {
    id: 'aapresid-standard',
    nombre: 'Standard',
    tagline: 'Puerta de entrada al ecosistema',
    descripcion:
      'Los módulos base para que cada socio de la regional analice su campaña y sus brechas desde el primer día.',
    precioAnualLista: 360,
    precioAnual: 240,
    precioMensualEq: 20,
    ahorroAnual: 120,
    modulos: [
      'Análisis de Campaña',
      'Brechas Estándar',
      'Pronóstico Climático',
      'Actualizaciones futuras (parcial)',
    ],
    destacado: false,
  },
  {
    id: 'aapresid-full',
    nombre: 'Full',
    tagline: 'Solución productiva completa',
    descripcion:
      'Todo lo del Standard más la capa analítica avanzada y las próximas actualizaciones productivas.',
    precioAnualLista: 720,
    precioAnual: 480,
    precioMensualEq: 40,
    ahorroAnual: 240,
    modulos: [
      'Análisis de Campaña',
      'Brechas Estándar',
      'Brechas Inteligentes',
      'Vig IA (próxima actualización)',
      'Pronóstico Climático',
      'Todas las actualizaciones productivas',
    ],
    destacado: true,
  },
];

export function calcularProductor(hectareas) {
  const ha = Math.max(0, Number.isFinite(hectareas) ? hectareas : 0);
  const suscripcion = PLAN_PRODUCTOR.precioAnual;
  const asesoramiento = ha * PLAN_PRODUCTOR.usdPorHaCampana;
  return { suscripcion, asesoramiento, total: suscripcion + asesoramiento };
}

export function calcularEmpresas(plan, cantidad) {
  const c = Math.max(1, Number.isFinite(cantidad) ? cantidad : 1);
  return {
    porEmpresaAnual: plan.precioAnual,
    totalAnual: plan.precioAnual * c,
  };
}

export function formatUSD(n) {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

const WHATSAPP_NUMBER = '5493564593446';

export function buildWhatsAppUrl(mensaje) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
