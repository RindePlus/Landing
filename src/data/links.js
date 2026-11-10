// Única puerta de ingreso a la plataforma. El login es el mismo para todas
// las organizaciones: la organización sale del usuario, no de la URL.
export const LOGIN_URL = 'https://cloud.rindeplus.com/login';

// Términos y condiciones de la plataforma: viven en la app (los acepta cada
// usuario y van versionados ahí), la landing sólo enlaza.
export const TERMS_URL = 'https://cloud.rindeplus.com/terminos-y-condiciones';
// Política de privacidad de la plataforma: también vive en la app, junto a
// los términos (se aceptan juntos). La de la landing (/privacidad) cubre
// sólo el sitio y los canales de contacto, y remite a ésta.
export const PLATFORM_PRIVACY_URL = 'https://cloud.rindeplus.com/politica-de-privacidad';

// La plataforma, para abrirla desde el celular e instalarla (pasos de
// «Rinde Plus en el celular»).
export const APP_URL = 'https://cloud.rindeplus.com';
