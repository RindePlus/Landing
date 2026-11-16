// Bibliografía de terceros en la que se apoyan los cálculos de Rinde Plus
// (según el repo de la plataforma: BibliografiaSuelo.tsx, ADR-0120, el motor
// FAO-56 del balance hídrico, dpvEngine y liebig-rinde-base), más las
// referencias de origen del NDVI y del análisis de brechas. Las citas van
// igual en los tres idiomas; `conceptos` son los id de las lecciones.
export const BIBLIOGRAFIA = [
  {
    autores: 'Allen, R. G., Pereira, L. S., Raes, D. & Smith, M.',
    anio: '1998',
    titulo: 'Crop evapotranspiration: guidelines for computing crop water requirements.',
    fuente: 'FAO Irrigation and Drainage Paper 56. FAO, Roma.',
    url: 'https://www.fao.org/4/x0490e/x0490e00.htm',
    conceptos: ['balance-hidrico', 'agua-util'],
  },
  {
    autores: 'Saxton, K. E. & Rawls, W. J.',
    anio: '2006',
    titulo: 'Soil water characteristic estimates by texture and organic matter for hydrologic solutions.',
    fuente: 'Soil Science Society of America Journal, 70(5), 1569–1578.',
    url: 'https://doi.org/10.2136/sssaj2005.0117',
    conceptos: ['agua-util'],
  },
  {
    autores: 'Blake, G. R. & Hartge, K. H.',
    anio: '1986',
    titulo: 'Bulk density.',
    fuente: 'En A. Klute (Ed.), Methods of Soil Analysis, Part 1 (2.ª ed., pp. 363–375). ASA-SSSA.',
    conceptos: ['agua-util'],
  },
  {
    autores: 'Tetens, O.',
    anio: '1930',
    titulo: 'Über einige meteorologische Begriffe.',
    fuente: 'Zeitschrift für Geophysik, 6, 297–309.',
    conceptos: ['dpv'],
  },
  {
    autores: 'Rouse, J. W., Haas, R. H., Schell, J. A. & Deering, D. W.',
    anio: '1974',
    titulo: 'Monitoring vegetation systems in the Great Plains with ERTS.',
    fuente: 'Third Earth Resources Technology Satellite-1 Symposium, NASA SP-351, 309–317.',
    conceptos: ['ndvi'],
  },
  {
    autores: 'van Ittersum, M. K., Cassman, K. G., Grassini, P., Wolf, J., Tittonell, P. & Hochman, Z.',
    anio: '2013',
    titulo: 'Yield gap analysis with local to global relevance: a review.',
    fuente: 'Field Crops Research, 143, 4–17.',
    url: 'https://doi.org/10.1016/j.fcr.2012.09.009',
    conceptos: ['brecha'],
  },
  {
    autores: 'Liebig, J. von',
    anio: '1840',
    titulo: 'Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie.',
    fuente: 'Vieweg, Braunschweig.',
    conceptos: ['ley-del-minimo'],
  },
];
