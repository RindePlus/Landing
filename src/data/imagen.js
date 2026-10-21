// Astro importa las imágenes como objetos ({ src, width, height }); en
// algunos contextos llegan como URL. Esto da siempre la URL.
export const urlDe = (img) => (typeof img === 'string' ? img : img.src);
