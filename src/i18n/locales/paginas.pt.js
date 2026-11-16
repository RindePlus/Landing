// Páginas Sobre nós e Educação (português do Brasil). Mesma estrutura de
// paginas.es.js.

const paginas = {
  nosotros: {
    meta: {
      title: 'Sobre nós · Rinde Plus',
      description:
        'A Rinde Plus é uma empresa de Alta Gracia, Córdoba, Argentina, que junta agronomia e sistemas de informação para que cada talhão seja decidido com critério agronômico. Quem somos e como trabalhamos.',
    },
    title: 'Somos a Rinde Plus',
    lead:
      'Unimos conhecimento agronômico e tecnologia para que cada talhão seja decidido com dados e com critério.',
    bloques: [
      { titulo: 'Quem somos', texto: 'Uma equipe de Alta Gracia, Córdoba, Argentina, que junta dois mundos: o saber agronômico de quem percorre o talhão e a tecnologia que o leva a cada decisão. Trabalhamos na mesma mesa, e isso aparece em cada número da plataforma.' },
      { titulo: 'O que fazemos', texto: 'A Rinde Plus acompanha cada talhão durante toda a safra: quanto pode produzir, quanta água o solo tem, que dose se paga, que riscos vêm e, no fechamento, onde se perdeu produtividade. Para produtores, consultores e empresas do setor.' },
      { titulo: 'Como fazemos', texto: 'Juntamos o solo, o clima, as imagens de satélite e o histórico de cada talhão, e os lemos com critério agronômico. O resultado chega claro: na plataforma, em relatórios e num aviso pelo WhatsApp que pode ser respondido.' },
    ],
    idea: {
      kicker: 'A ideia',
      titulo: 'Dois talhões vizinhos podem pedir decisões diferentes.',
      lead: 'A Rinde Plus existe para encontrar essa diferença e explicá-la: o solo, a água do perfil, o histórico de cada ambiente e o clima da safra, talhão por talhão.',
    },
    equipo: {
      kicker: 'Nossa equipe',
      titulo: 'Agronomia e software, na mesma mesa',
      bajada: 'Cada número da plataforma é pensado em conjunto por quem conhece o campo e por quem constrói o software.',
      miembros: [
        { nombre: 'Marcos Flesia', cargo: 'CEO', profesion: 'Engenheiro agrônomo', area: 'agro' },
        { nombre: 'Santiago Quesada', cargo: 'CTO', profesion: 'Engenheiro de sistemas de informação', area: 'sis' },
        { nombre: 'Manuel Frías', profesion: 'Engenheiro de sistemas de informação', area: 'sis' },
        { nombre: 'Ángeles Sanz', profesion: 'Engenheira agrônoma', area: 'agro' },
        { nombre: 'Tomás Abrate', profesion: 'Engenheiro de sistemas de informação', area: 'sis' },
      ],
    },
    dosLotes: {
      aria: 'Dois talhões vizinhos com mapas de ambientes diferentes e um aviso diferente para cada um',
      a: { nombre: 'Talhão 14', aviso: 'Vale a pena adubar o ambiente alto.' },
      b: { nombre: 'Talhão 15', aviso: 'A água limita: adubar não se paga.' },
    },
    anatomia: {
      kicker: 'Como pensamos cada número',
      titulo: 'Anatomia de um aviso',
      bajada:
        'Cada aviso diz o que foi medido, com que critério foi lido e o que convém fazer. Este é um do balanço hídrico, como chega pelo WhatsApp.',
      mensaje: {
        encabezado: 'Estresse hídrico · Alerta antecipado',
        medido: 'Água disponível 52,3 % · DPV 1,2 kPa',
        criterio: 'Limiar 60 % · DPV máx. 1,7 · três dias seguidos',
        decision: 'Aplicar se a previsão subir o DPV.',
        lote: 'Talhão 14 · ambiente baixo',
        hora: '7:02',
      },
      partes: [
        { titulo: 'O que foi medido', texto: 'A água disponível vem do balanço hídrico diário do ambiente; o DPV, da temperatura e da umidade na localização do talhão.' },
        { titulo: 'O critério', texto: 'O limiar depende da cultura e do estádio em que está. Um dia isolado não basta: o alerta pede três dias seguidos.' },
        { titulo: 'A decisão', texto: 'O nível diz quão grave é e o que convém fazer. Se faltasse um dado, o aviso diria em vez de inventá-lo.' },
      ],
    },
    compromisos: {
      titulo: 'Nossos compromissos',
      items: [
        { titulo: 'Não inventamos dados.', texto: 'Um dia sem clima fica como lacuna e uma análise que falta é avisada. Melhor um número a menos que um falso.' },
        { titulo: 'Não usamos caixas-pretas.', texto: 'Cada cálculo segue uma regra que pode ser lida e discutida com o consultor.' },
        { titulo: 'Não substituímos o agrônomo.', texto: 'Tiramos dele o trabalho de juntar dados para que tenha mais tempo no campo.' },
        { titulo: 'Recomendamos com independência.', texto: 'A recomendação sai do talhão, não de um produto. Se a simulação mostra que uma dose não se paga, a plataforma diz.' },
      ],
    },
    lugar: {
      kicker: 'Onde estamos',
      titulo: 'Alta Gracia, Córdoba',
      texto: 'No centro da região agrícola argentina, perto dos talhões que acompanhamos. Rinde Plus® é uma marca da Conextion S.A.S.',
      direccion: 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina',
      mapa: 'Ver no mapa',
    },
  },

  educacion: {
    meta: {
      title: 'O que há por trás de cada número · Rinde Plus',
      description:
        'Nove conceitos agronômicos explicados de forma simples e com um desenho: ambientes, lei do mínimo, água disponível, carryover, dose ótima, balanço hídrico, DPV, NDVI e lacuna.',
    },
    kicker: 'Educação',
    title: 'O que há por trás de cada número',
    lead:
      'Nove conceitos agronômicos, explicados de forma simples e com um desenho, organizados por momento da safra. Para entender o que o talhão diz antes de decidir.',
    mapa: 'Mapa da safra',
    momentos: [
      { id: 'planificar', nombre: 'Planejar' },
      { id: 'preparar', nombre: 'Preparar o talhão' },
      { id: 'fertilizar', nombre: 'Adubar' },
      { id: 'acompanar', nombre: 'Acompanhar a cultura' },
      { id: 'cerrar', nombre: 'Fechar e aprender' },
    ],
    probar: 'Para testar',
    comoSeLee: 'Como se lê',
    lecciones: [
      {
        id: 'ambientes',
        momento: 'planificar',
        termino: 'Ambientes',
        definicion: 'Zonas do talhão que se comportam de forma parecida pelo solo, relevo e histórico. Um mesmo talhão pode ter ambientes alto, médio e baixo, que produzem diferente e pedem manejos diferentes.',
        lectura: 'Antes de comparar números, ver de que ambiente é cada um: uma produtividade baixa no ambiente baixo pode ser um bom resultado.',
        etiquetas: { alto: 'Alto', medio: 'Médio', bajo: 'Baixo' },
      },
      {
        id: 'ley-del-minimo',
        momento: 'planificar',
        termino: 'Lei do mínimo',
        definicion: 'A produtividade fica limitada pelo nutriente mais escasso, mesmo que os outros sobrem. E acima de todos está a água: nenhum nutriente leva a produtividade além do que a água da safra permite.',
        lectura: 'Adubar um nutriente que não limita não aumenta a produtividade. O que importa é o mais curto.',
        demo: {
          ejemplo: 'Exemplo com milho',
          pista: 'Toque numa barra para adubar esse nutriente.',
          nutrientes: ['Nitrogênio', 'Fósforo', 'Potássio', 'Cálcio', 'Magnésio', 'Enxofre'],
          simbolos: ['N', 'P', 'K', 'Ca', 'Mg', 'S'],
          techo: 'Teto da água',
          rinde: 'Produtividade',
          limita: 'Limita',
          agua: 'a água',
          fertilizar: (n) => `Adubar com ${n}`,
          reiniciar: 'Começar de novo',
        },
      },
      {
        id: 'agua-util',
        momento: 'preparar',
        termino: 'Água disponível',
        definicion: 'A água do solo que a cultura consegue aproveitar. Vai de 0 % no ponto de murcha, quando a cultura já não consegue extrair água, a 100 % na capacidade de campo, o máximo que o solo retém.',
        lectura: 'Um 0 % não é solo seco: é água que a cultura já não pode usar. O que importa é quanto falta para o limiar da cultura.',
        etiquetas: { pmp: 'Ponto de murcha', cc: 'Capacidade de campo', umbral: 'Limiar', hoy: 'Hoje' },
      },
      {
        id: 'carry-over',
        momento: 'preparar',
        termino: 'Carryover de herbicidas',
        definicion: 'A parte de um herbicida que continua no solo depois da aplicação e pode prejudicar a cultura seguinte. Degrada mais rápido com calor e chuva, e depende do solo e do princípio ativo.',
        lectura: 'O que conta é o resíduo no dia da semeadura, não no da aplicação. Se na semeadura passa do limite da bula, é preciso esperar.',
        etiquetas: { aplicacion: 'Aplicação', siembra: 'Semeadura', limite: 'Limite da bula', espera: 'Dias de espera' },
      },
      {
        id: 'dosis-optima',
        momento: 'fertilizar',
        termino: 'Dose de máxima eficiência econômica',
        definicion: 'A produtividade sobe com a dose, mas cada quilo de fertilizante acrescenta menos que o anterior. A dose ótima econômica é onde o último quilo ainda se paga com o grão que acrescenta, antes da produtividade máxima.',
        lectura: 'Buscar a produtividade máxima quase nunca é negócio: os últimos quilos de fertilizante custam mais do que devolvem.',
        etiquetas: { dosis: 'Dose', rinde: 'Produtividade', optima: 'Ótima econômica', maximo: 'Máxima' },
      },
      {
        id: 'balance-hidrico',
        momento: 'acompanar',
        termino: 'Balanço hídrico e período crítico',
        definicion: 'A conta diária da água do solo: soma a chuva e a irrigação e desconta o que a cultura consome. Abaixo do limiar, a cultura sofre. O período crítico são os estádios em que essa falta mais afeta a produtividade.',
        lectura: 'O mesmo déficit pesa muito mais no período crítico. Aí convém olhar a previsão das próximas duas semanas.',
        etiquetas: { umbral: 'Limiar', critico: 'Período crítico', hoy: 'Hoje', pronostico: 'Previsão' },
      },
      {
        id: 'dpv',
        momento: 'acompanar',
        termino: 'Déficit de pressão de vapor',
        definicion: 'O DPV mede o quão seco está o ar: a diferença entre o vapor que poderia ter naquela temperatura e o que tem. Alto, o ar exige água da cultura; baixo, o ar úmido favorece os fungos.',
        lectura: 'Um dia isolado fora da faixa a planta aguenta. O que pesa são vários dias seguidos.',
        etiquetas: { alto: 'Ar seco', sano: 'Zona saudável', bajo: 'Risco fúngico', dias: 'Dias' },
      },
      {
        id: 'ndvi',
        momento: 'acompanar',
        termino: 'NDVI',
        definicion: 'Um índice calculado com a luz vermelha e infravermelha que a cultura reflete, vista do satélite. Mais alto, mais biomassa verde e ativa.',
        lectura: 'Serve para comparar: zonas do mesmo talhão ou o mesmo talhão em outra data. As nuvens e sua sombra o enganam.',
        etiquetas: { bajo: 'Baixo', alto: 'Alto', pixel: 'Cada quadro: 10 × 10 m' },
      },
      {
        id: 'brecha',
        momento: 'cerrar',
        termino: 'Produtividade potencial e lacuna',
        definicion: 'A potencial é o teto que a água da safra impõe. A lacuna é o que falta entre esse teto e o que o talhão produz com os nutrientes do solo, adubando ou na colheita.',
        lectura: 'Uma lacuna grande com água de sobra costuma falar de nutrientes. Se a água é que limita, adubar mais não a fecha.',
        etiquetas: { potencial: 'Potencial', fertilizando: 'Adubando', base: 'Base', cosechado: 'Colhida', brecha: 'Lacuna' },
      },
    ],
    fuentes: {
      titulo: 'De onde vêm os dados',
      texto: 'Serviço próprio de solo de referência, com GeoINTA, IDECOR e SoilGrids, ajustado com a análise de cada talhão. Clima de vários provedores meteorológicos selecionados. Imagens Sentinel-2: contém dados modificados do Copernicus Sentinel.',
    },
  },
};

export default paginas;
