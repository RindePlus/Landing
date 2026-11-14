// Textos de las páginas Nosotros y Educación (español). Mismas reglas que
// es.jsx: tono neutro, sin segunda persona, solo lo que la plataforma hace
// hoy. Ninguna de las dos repite la home (cifras, ventajas, funciones,
// clientes): Nosotros cuenta cómo se trabaja; Educación enseña los
// conceptos. Las definiciones salen de la documentación del equipo (repo
// RindePlus, backend/rag_corpus): si cambia un cálculo allá, se revisa acá.

const paginas = {
  nosotros: {
    meta: {
      title: 'Nosotros · Rinde Plus',
      description:
        'Rinde Plus es una empresa de Alta Gracia, Córdoba, que junta agronomía y sistemas de información para que cada lote se decida con criterio agronómico. Quiénes somos y cómo trabajamos.',
    },
    title: 'Somos Rinde Plus',
    lead:
      'Hacemos tecnología para el campo: pensada por agrónomos, construida por ingenieros en sistemas y probada lote por lote.',
    bloques: [
      { titulo: 'Quiénes somos', texto: 'Un equipo de ingenieros agrónomos e ingenieros en Sistemas de Información de Alta Gracia, Córdoba. Unos conocen el lote; los otros construyen el software. Trabajamos en la misma mesa, y eso se nota en cada número de la plataforma.' },
      { titulo: 'Qué hacemos', texto: 'Rinde Plus acompaña cada lote durante toda la campaña: cuánto puede rendir, cuánta agua tiene el suelo, qué dosis se paga, qué riesgos vienen y, al cierre, dónde se perdió rinde. Para productores, asesores y empresas del sector.' },
      { titulo: 'Cómo lo hacemos', texto: 'Juntamos el suelo, el clima, las imágenes satelitales y la historia de cada lote, y los leemos con criterio agronómico. El resultado llega claro: en la plataforma, en informes y en un aviso por WhatsApp que se puede responder.' },
    ],
    idea: {
      kicker: 'La idea',
      titulo: 'Dos lotes vecinos pueden pedir decisiones distintas.',
      lead: 'Rinde Plus existe para encontrar esa diferencia y explicarla: el suelo, el agua del perfil, la historia de cada ambiente y el clima de esa campaña, cruzados lote por lote.',
    },
    equipo: {
      kicker: 'Nuestro equipo',
      titulo: 'Agronomía y software, en la misma mesa',
      bajada: 'Cada número de la plataforma lo piensan juntos quienes conocen el campo y quienes construyen el software.',
      leyenda: { agro: 'Agronomía', sis: 'Sistemas de información' },
      miembros: [
        { nombre: 'Marcos Flesia', cargo: 'CEO', profesion: 'Ingeniero agrónomo', area: 'agro' },
        { nombre: 'Santiago Quesada', cargo: 'CTO', profesion: 'Ingeniero en Sistemas de Información', area: 'sis' },
        { nombre: 'Manuel Frias', profesion: 'Ingeniero en Sistemas de Información', area: 'sis' },
        { nombre: 'Angeles Sanz', profesion: 'Ingeniera agrónoma', area: 'agro' },
        { nombre: 'Tomás Abrate', profesion: 'Ingeniero en Sistemas de Información', area: 'sis' },
      ],
    },
    dosLotes: {
      aria: 'Dos lotes vecinos con mapas de ambientes distintos y un aviso distinto para cada uno',
      a: { nombre: 'Lote 14', aviso: 'Conviene fertilizar el ambiente alto.' },
      b: { nombre: 'Lote 15', aviso: 'El agua limita: fertilizar no se paga.' },
    },
    anatomia: {
      kicker: 'Cómo pensamos cada número',
      titulo: 'Anatomía de un aviso',
      bajada:
        'Cada aviso dice qué se midió, con qué criterio se leyó y qué conviene hacer. Este es uno del balance hídrico, como llega por WhatsApp.',
      mensaje: {
        encabezado: 'Estrés hídrico · Alerta temprana',
        medido: 'Agua útil 52,3 % · DPV 1,2 kPa',
        criterio: 'Umbral 60 % · DPV máx. 1,7 · tres días seguidos',
        decision: 'Aplicar si el pronóstico sube el DPV.',
        lote: 'Lote 14 · ambiente bajo',
        hora: '7:02',
      },
      partes: [
        { titulo: 'Lo medido', texto: 'El agua útil sale del balance hídrico del ambiente, día por día; el DPV, de la temperatura y la humedad en la ubicación del lote.' },
        { titulo: 'El criterio', texto: 'El umbral depende del cultivo y de la etapa en la que está. Un día suelto no alcanza: la alerta pide tres días seguidos.' },
        { titulo: 'La decisión', texto: 'El nivel dice qué tan grave es y qué conviene hacer. Si faltara un dato, el aviso lo diría en lugar de inventarlo.' },
      ],
    },
    compromisos: {
      titulo: 'Lo que no hacemos',
      items: [
        { titulo: 'No vendemos insumos.', texto: 'Ni cobramos por recomendar productos. Si la simulación muestra que una dosis no se paga, la plataforma lo dice.' },
        { titulo: 'No inventamos datos.', texto: 'Un día sin clima queda como hueco y un análisis que falta se avisa. Mejor un número menos que uno falso.' },
        { titulo: 'No usamos cajas negras.', texto: 'Cada cálculo sigue una regla que se puede leer y discutir con el asesor.' },
        { titulo: 'No reemplazamos al agrónomo.', texto: 'Le sacamos de encima el trabajo de juntar datos para que tenga más tiempo en el campo.' },
      ],
    },
    lugar: {
      kicker: 'Dónde estamos',
      titulo: 'Alta Gracia, Córdoba',
      texto: 'En el centro del país agrícola, cerca de los lotes que seguimos. Rinde Plus® es una marca de Conextion S.A.S.',
      direccion: 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina',
      coordenadas: '31°39′ S · 64°26′ O',
      mapa: 'Ver en el mapa',
    },
  },

  educacion: {
    meta: {
      title: 'Lo que hay detrás de cada número · Rinde Plus',
      description:
        'Nueve conceptos agronómicos explicados en simple y con un dibujo: ambientes, ley del mínimo, agua útil, carry-over, dosis óptima, balance hídrico, DPV, NDVI y brecha.',
    },
    kicker: 'Educación',
    title: 'Lo que hay detrás de cada número',
    lead:
      'Nueve conceptos agronómicos, explicados en simple y con un dibujo, ordenados por momento de la campaña. Para entender qué dice el lote antes de decidir.',
    mapa: 'Mapa de la campaña',
    momentos: [
      { id: 'planificar', nombre: 'Planificar' },
      { id: 'preparar', nombre: 'Preparar el lote' },
      { id: 'fertilizar', nombre: 'Fertilizar' },
      { id: 'acompanar', nombre: 'Acompañar el cultivo' },
      { id: 'cerrar', nombre: 'Cerrar y aprender' },
    ],
    probar: 'Para probar',
    comoSeLee: 'Cómo se lee',
    lecciones: [
      {
        id: 'ambientes',
        momento: 'planificar',
        termino: 'Ambientes',
        definicion: 'Zonas del lote que se comportan de forma parecida por su suelo, su relieve y su historia. Un mismo lote puede tener ambientes alto, medio y bajo, que rinden distinto y piden manejos distintos.',
        lectura: 'Antes de comparar números, mirar de qué ambiente es cada uno: un rinde bajo en el ambiente bajo puede ser un buen resultado.',
        etiquetas: { alto: 'Alto', medio: 'Medio', bajo: 'Bajo' },
      },
      {
        id: 'ley-del-minimo',
        momento: 'planificar',
        termino: 'Ley del mínimo',
        definicion: 'El rinde queda limitado por el nutriente más escaso, aunque los demás sobren. Y por encima de todos está el agua: ningún nutriente lleva el rinde más allá de lo que permite el agua del ciclo.',
        lectura: 'Fertilizar un nutriente que no limita no suma rinde. El que importa es el más corto.',
        demo: {
          ejemplo: 'Ejemplo con maíz',
          pista: 'Tocar una barra para fertilizar ese nutriente.',
          nutrientes: ['Nitrógeno', 'Fósforo', 'Potasio', 'Calcio', 'Magnesio', 'Azufre'],
          simbolos: ['N', 'P', 'K', 'Ca', 'Mg', 'S'],
          techo: 'Techo del agua',
          rinde: 'Rinde',
          limita: 'Limita',
          agua: 'el agua',
          fertilizar: (n) => `Fertilizar con ${n}`,
          reiniciar: 'Volver a empezar',
        },
      },
      {
        id: 'agua-util',
        momento: 'preparar',
        termino: 'Agua útil',
        definicion: 'El agua del suelo que el cultivo puede aprovechar. Va de 0 % en el punto de marchitez, cuando el cultivo ya no puede sacar agua, a 100 % en la capacidad de campo, lo máximo que el suelo retiene.',
        lectura: 'Un 0 % no es suelo seco: es agua que el cultivo ya no puede usar. Lo que importa es cuánto falta para el umbral del cultivo.',
        etiquetas: { pmp: 'Punto de marchitez', cc: 'Capacidad de campo', umbral: 'Umbral', hoy: 'Hoy' },
      },
      {
        id: 'carry-over',
        momento: 'preparar',
        termino: 'Carry-over de herbicidas',
        definicion: 'La parte de un herbicida que sigue en el suelo después de aplicado y puede dañar al cultivo que viene. Se degrada más rápido con calor y lluvia, y depende del suelo y del principio activo.',
        lectura: 'Lo que cuenta es el residuo el día de la siembra, no el de la aplicación. Si a la siembra supera el límite del marbete, hay que esperar.',
        etiquetas: { aplicacion: 'Aplicación', siembra: 'Siembra', limite: 'Límite del marbete', espera: 'Días de espera' },
      },
      {
        id: 'dosis-optima',
        momento: 'fertilizar',
        termino: 'Dosis óptima económica',
        definicion: 'El rinde sube con la dosis pero cada kilo de fertilizante suma menos que el anterior. La dosis óptima económica es donde el último kilo todavía se paga con el grano que agrega, antes del rinde máximo.',
        lectura: 'Ir por el rinde máximo casi nunca es negocio: los últimos kilos de fertilizante cuestan más de lo que devuelven.',
        etiquetas: { dosis: 'Dosis', rinde: 'Rinde', optima: 'Óptima económica', maximo: 'Máximo' },
      },
      {
        id: 'balance-hidrico',
        momento: 'acompanar',
        termino: 'Balance hídrico y período crítico',
        definicion: 'La cuenta diaria del agua del suelo: suma la lluvia y el riego y descuenta lo que consume el cultivo. Por debajo del umbral, el cultivo sufre. El período crítico son las etapas en las que esa falta más afecta al rinde.',
        lectura: 'El mismo déficit pesa mucho más en el período crítico. Ahí conviene mirar el pronóstico de las dos semanas que vienen.',
        etiquetas: { umbral: 'Umbral', critico: 'Período crítico', hoy: 'Hoy', pronostico: 'Pronóstico' },
      },
      {
        id: 'dpv',
        momento: 'acompanar',
        termino: 'Déficit de presión de vapor',
        definicion: 'El DPV mide qué tan seco está el aire: la diferencia entre el vapor que podría tener a esa temperatura y el que tiene. Alto, el aire le exige agua al cultivo; bajo, el aire húmedo favorece a los hongos.',
        lectura: 'Un día suelto fuera de rango la planta lo aguanta. Lo que pesa son varios días seguidos.',
        etiquetas: { alto: 'Aire seco', sano: 'Zona sana', bajo: 'Riesgo fúngico', dias: 'Días' },
      },
      {
        id: 'ndvi',
        momento: 'acompanar',
        termino: 'NDVI',
        definicion: 'Un índice que se calcula con la luz roja e infrarroja que refleja el cultivo, desde el satélite. Más alto, más biomasa verde y activa.',
        lectura: 'Sirve para comparar: zonas del mismo lote o el mismo lote en otra fecha. Las nubes y su sombra lo engañan.',
        etiquetas: { bajo: 'Bajo', alto: 'Alto', pixel: 'Cada cuadro: 10 × 10 m' },
      },
      {
        id: 'brecha',
        momento: 'cerrar',
        termino: 'Rinde potencial y brecha',
        definicion: 'El potencial es el techo que pone el agua del ciclo. La brecha es lo que falta entre ese techo y lo que el lote rinde con los nutrientes del suelo, fertilizando o en la cosecha.',
        lectura: 'Una brecha grande con agua de sobra suele hablar de nutrientes. Si el agua es la que limita, fertilizar más no la cierra.',
        etiquetas: { potencial: 'Potencial', fertilizando: 'Fertilizando', base: 'Base', cosechado: 'Cosechado', brecha: 'Brecha' },
      },
    ],
    fuentes: {
      titulo: 'De dónde salen los datos',
      texto: 'Suelo de referencia propio, con GeoINTA, IDECOR y SoilGrids, ajustado con el análisis de cada lote. Clima de varios proveedores meteorológicos seleccionados. Imágenes Sentinel-2: contiene datos modificados de Copernicus Sentinel.',
    },
  },
};

export default paginas;
