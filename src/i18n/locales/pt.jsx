import { LuShare } from 'react-icons/lu';

// Português do Brasil. Mesma estrutura e mesmas afirmações de es.jsx: só o
// que a plataforma faz hoje. 'Lote' → talhão, 'ambiente' → ambiente de
// manejo, 'campaña' → safra. Tom neutro, sem perguntas nos títulos.

const pt = {
  meta: {
    title: 'Rinde Plus · Critério agronômico para cada talhão',
    description:
      'Inteligência agronômica: a Rinde Plus integra o clima, o solo, os ambientes e o histórico de cada talhão e transforma tudo em decisões.',
  },

  whatsapp: {
    message: 'Olá, quero mais informações sobre a Rinde Plus',
    fabLabel: 'WhatsApp',
    hello: 'Olá',
    helloAria: 'aceno',
    question: 'Como podemos ajudar?',
    cta: 'Escrever pelo WhatsApp',
  },

  header: {
    openMenu: 'Abrir menu',
    nav: {
      home: 'Início',
      impact: 'Impacto',
      campaign: 'O que faz',
      why: 'Por que Rinde Plus',
    },
    themeDark: 'Modo escuro',
    themeLight: 'Modo claro',
    themeSwitchAria: 'Alternar entre modo claro e escuro',
    toLight: 'Ativar modo claro',
    toDark: 'Ativar modo escuro',
    login: 'Entrar',
    loginLong: 'Entrar na plataforma',
    language: 'Idioma',
    logoAlt: 'Rinde Plus',
  },

  hero: {
    titleA: 'Critério agronômico',
    titleB: 'para cada talhão.',
    subtitle: (
      <>
        A Rinde Plus é <strong>inteligência agronômica</strong>: integra o
        clima, o solo, os ambientes e o histórico de cada talhão e transforma
        tudo em <strong>decisões</strong> sobre o que fazer, quando e se vale a
        pena.
      </>
    ),
    ctaTalk: 'Vamos falar dos seus talhões',
    ctaCampaign: 'Ver o que faz',
    mapAria: 'Talhão desenhado com três ambientes, linhas de plantio e curvas de nível',
  },

  trusted: {
    title: 'Confiam em nós',
  },

  // Seção Impacto. Os números chegam já formatados em `d` (ver
  // ImpactSection.jsx). "Safra" é o ano agrícola; cada talhão num ano é um
  // "ciclo produtivo".
  impacto: {
    title: 'Mais grão e mais carbono no solo',
    subtitle: (d) => `Números da safra ${d.campana} nos talhões que a Rinde Plus acompanha.`,
    indicadores: {
      hectareas: (d) => `monitorados na última safra (${d.campana})`,
      grano: () => 'de grão extra pelo manejo de lacunas',
      carbono: () => 'de CO₂ extra que fica no solo',
      suelo: () => 'análises de solo interpretadas',
    },
    pista: 'Os indicadores com seta abrem o detalhe por cultura',
    cerrar: 'Fechar detalhe',
    info: (titulo) => `Como se calcula: ${titulo}`,
    cultivos: { maiz: 'Milho', soja: 'Soja', trigo: 'Trigo', girasol: 'Girassol', otros: 'Outras culturas' },
    total: 'Total',
    tablas: {
      grano: {
        titulo: (d) => `Grão extra por cultura, safra ${d.campana}`,
        columnas: ['Cultura', 'Hectares', 'Produtividade média (kg/ha)', 'kg/ha extra', 'Total'],
        nota: (d) =>
          `${d.pct} da produtividade de cada cultura, dentro da faixa de ${d.pctBajo} a ${d.pctAlto} que a Rinde Plus estima que o manejo de lacunas aporta. Com ${d.pctBajo} seriam cerca de ${d.granoBajo} t; com ${d.pctAlto}, cerca de ${d.granoAlto} t.`,
      },
      carbono: {
        titulo: (d) => `Carbono extra por cultura (t CO₂), safra ${d.campana}`,
        columnas: ['Cultura', 'Fixado', 'Volta ao solo', 'Fica estável'],
        nota: (d) =>
          `É o carbono extra do grão extra. O grão é colhido e seu carbono volta à atmosfera; o que fica é o da palhada e das raízes, e as raízes aportam a parte mais estável. Equivale a neutralizar as emissões de cerca de ${d.autos} carros por ano.`,
      },
    },
    pie: {
      linea: (d) => `+${d.historia} ha de dados produtivos em ${d.campanas} safras (${d.desde} a ${d.hasta})`,
      fuente: (d) => `Dados da base da Rinde Plus em ${d.fecha}. O botão ⓘ de cada número explica como se calcula.`,
    },
    modal: {
      cerrar: 'Fechar',
      bloques: { mide: 'O que mede', calcula: 'Como se calcula', compone: 'Composição', cuenta: 'Para levar em conta' },
      hectareas: {
        titulo: (d) => `Hectares monitorados na última safra (${d.campana})`,
        mide: () => 'A área que a Rinde Plus monitorou na última safra completa.',
        columnas: ['Cultura', 'Hectares', '%'],
        cuenta: () => 'À área sem cultura cadastrada foi atribuída a mesma proporção de culturas que ao restante.',
      },
      grano: {
        titulo: () => 'Grão extra pelo manejo de lacunas',
        mide: () =>
          'O grão que se soma em milho, soja, trigo e girassol ao decidir com a análise de lacunas da Rinde Plus.',
        calcula: (d) =>
          `Para cada cultura: hectares de ${d.campana} × produtividade média registrada × ${d.pct}. A Rinde Plus estima que entre ${d.pctBajo} e ${d.pctAlto} da produtividade dos talhões com manejo de lacunas se deve a esse manejo; aqui se usa ${d.pct}, na parte baixa da faixa. Com ${d.pctBajo} seriam cerca de ${d.granoBajo} t; com ${d.pctAlto}, cerca de ${d.granoAlto} t.`,
        cuenta: (d) =>
          `É uma estimativa sobre a produtividade média de cada cultura, não uma medição talhão por talhão. À área sem cultura cadastrada (${d.sinCultivoPct}) foi atribuída a mesma proporção de culturas que ao restante. Entram milho, soja, trigo e girassol (${d.cultivosPct} da área); arroz e culturas menores ficam de fora.`,
      },
      carbono: {
        titulo: () => 'CO₂ extra no solo',
        mide: () => 'O carbono extra que esse grão extra deixa no solo, pela palhada e pelas raízes.',
        calcula: () =>
          'Grão extra de cada cultura × coeficientes de carbono por tonelada. Para milho, soja e trigo são os mesmos que a VigIA usa, tirados do seu relatório técnico; os do girassol foram calculados com o mesmo método, com seu índice de colheita. O número em destaque é a coluna «Fica estável».',
        cuenta: () =>
          'É uma estimativa por coeficientes, não uma medição de carbono no solo de cada talhão, e não constitui um certificado de créditos de carbono.',
      },
      suelo: {
        titulo: () => 'Análises de solo interpretadas',
        mide: (d) =>
          `Quantos ambientes de ${d.campana} têm uma análise de solo cadastrada (fósforo, matéria orgânica, pH e outros) que a plataforma interpreta para o diagnóstico e a adubação.`,
        calcula: (d) => `Contam-se os ambientes com pelo menos um desses valores (${d.sueloTotal}).`,
      },
      historia: {
        titulo: () => 'Histórico de dados',
        mide: () => 'A área com dados produtivos acumulada na base.',
        calcula: (d) =>
          `Cada vez que um talhão tem dados numa safra, sua área é somada. São ${d.historiaHa} ha em ${d.ciclos} ciclos produtivos de ${d.lotes} talhões de ${d.empresas} empresas, entre ${d.desde} e ${d.hasta}. A safra em curso, ${d.enCurso}, não é contada.`,
        cuenta: (d) =>
          `Um talhão com dados em 10 safras conta 10 vezes; contando cada talhão uma só vez, a área é de cerca de ${d.haUnicas} ha.`,
      },
    },
  },

  fx: {
    title: 'O que a Rinde Plus faz',
    subtitle:
      'Uma só ferramenta que acompanha cada talhão durante toda a safra, do planejamento ao fechamento.',
    next: 'Próximo',
    nextAria: 'Ver o próximo momento',
    goTo: (name) => `Ir para ${name}`,
    charts: {
      zones: ['Alto', 'Médio', 'Baixo'],
      potentialCaption: 'Produtividade base e potencial por ambiente',
      residueCaption: 'Resíduo e risco de fitotoxicidade',
      doseCaption: 'Dose de máxima eficiência econômica',
      today: 'Hoje',
      forecastCaption: '15 dias atrás, 15 à frente',
      fourYields: ['Potencial', 'Adubada', 'Colhida', 'Base'],
      gapCaption: 'Lacuna de produtividade',
    },
    panels: {
      planificar: {
        tag: 'Planejar',
        name: 'A produtividade que cada talhão pode alcançar',
        description:
          'Produtividade base, potencial, adubada e colhida, por talhão e por ambiente. O potencial vem do solo, da análise de solo própria e do balanço hídrico da safra.',
        bullets: [
          'Solo de referência (GeoINTA, IDECOR, SoilGrids) ajustado com a análise própria',
          'Irrigação necessária para chegar à produtividade-alvo',
          'Cultivares do registro oficial do INASE (Argentina)',
        ],
      },
      preparar: {
        tag: 'Preparar o talhão',
        name: 'A água do perfil e o resíduo de herbicidas',
        description:
          'O consumo de água da planta de cobertura comparado a um pousio, e o resíduo de cada herbicida conforme chuvas, irrigação e data de aplicação.',
        bullets: [
          'Alerta de risco alto de fitotoxicidade para a próxima cultura',
          'Inclui as aplicações da safra anterior',
          'Análise de solo e plano de correção',
        ],
      },
      fertilizar: {
        tag: 'Adubar',
        name: 'A dose que se paga',
        description:
          'Simulação por produto e dose com o balanço de nutrientes, a curva de resposta e os preços cadastrados no talhão.',
        bullets: [
          'Dose de máxima eficiência econômica',
          'Produtividade adubada, sem passar do potencial',
          'Margem bruta por talhão e por ambiente',
        ],
      },
      acompanar: {
        tag: 'Acompanhar a cultura',
        name: 'Avisos do que vem em cada talhão',
        description:
          'Clima por talhão, 15 dias para trás e 15 para a frente, e monitoramento a campo com catálogos de plantas daninhas, pragas e doenças.',
        bullets: [
          'Alertas de estresse térmico, déficit de pressão de vapor e doenças fúngicas',
          'Recomendação de produto que passa ao plano de aplicações',
          'Avisos diários pelo WhatsApp, com o seu consentimento, que podem ser respondidos',
        ],
      },
      cerrar: {
        tag: 'Fechar e aprender',
        name: 'Onde se perdeu produtividade',
        description:
          'O que cada talhão podia produzir contra o que foi colhido, e o planejado contra o realizado, em produtividade e em margem.',
        bullets: [
          'Lacuna de produtividade por talhão e por ambiente',
          'Mapa de análise entre talhões, ambientes e safras',
          'Visão por empresa',
        ],
      },
    },
  },

  benefits: {
    aria: 'Por que Rinde Plus',
    roledesc: 'carrossel',
    slideRoledesc: 'item',
    slideLabel: (i, n) => `${i} de ${n}`,
    prev: 'Item anterior',
    next: 'Próximo item',
    dotLabel: (i, title) => `Item ${i}: ${title}`,
    items: [
      {
        title: 'O seu talhão, não a média',
        copy: 'Cada decisão parte do clima, do solo e do histórico do talhão, não do que é típico da região.',
        detail:
          'Cada talhão, desenhado sobre imagem de satélite com seus ambientes, cruza clima, solo e histórico produtivo. Dois talhões vizinhos podem pedir decisões diferentes.',
      },
      {
        title: 'A análise já está feita',
        copy: 'Sem cruzar clima, produtividade e solo à mão em planilhas: o tempo fica para decidir.',
        detail:
          'Clima, solo, ambientes, monitoramento e histórico de cada talhão, num mesmo lugar. Mais talhões, sem perder profundidade.',
      },
      {
        title: 'O que fazer e quando',
        copy: 'Mais que o talhão num mapa: o que vale fazer e em que momento.',
        detail:
          'Uma recomendação para cada talhão, com alertas de clima, doenças e fitotoxicidade e avisos diários pelo WhatsApp.',
      },
      {
        title: 'Independente',
        copy: 'A Rinde Plus não vende insumos: às vezes a melhor decisão é não aplicar.',
        detail:
          'Antes de aplicar, a conta do talhão à vista: se a aplicação se paga, vale; se não, às vezes o melhor é não fazer nada.',
      },
    ],
  },

  cta: {
    title: 'Vamos falar dos seus talhões.',
    vision:
      'Nossa visão: que cada talhão seja decidido com critério agronômico, não só os de quem pode pagar uma equipe técnica.',
    copy: 'Poucas linhas sobre a operação bastam para marcar uma conversa. Sem formulários longos: quem responde é a própria equipe da Rinde Plus.',
    button: 'Escrever pelo WhatsApp',
    hint: 'Resposta em menos de 24 h',
  },

  install: {
    title: 'A plataforma como app no celular',
    subtitle: 'Adicione à tela inicial em três passos, sem passar por nenhuma loja.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Abrir <strong>app.rindeplus.com</strong> no <strong>Safari</strong>.</>,
        (
          <>
            Tocar em <strong>Compartilhar</strong>{' '}
            <LuShare className="rp-install__inline-icon" aria-hidden="true" />{' '}
            (o quadrado com a seta para cima).
          </>
        ),
        <>Escolher <strong>Adicionar à Tela de Início</strong> e confirmar em <strong>Adicionar</strong>.</>,
      ],
    },
    android: {
      name: 'Android',
      steps: [
        <>Abrir <strong>app.rindeplus.com</strong> no <strong>Chrome</strong>.</>,
        <>Tocar no menu <strong>⋮</strong> (no canto superior direito).</>,
        (
          <>
            Escolher <strong>Instalar app</strong> (ou <strong>Adicionar à tela
            inicial</strong>, conforme a versão) e confirmar.
          </>
        ),
      ],
    },
  },

  credits: {
    lead: 'Imagens',
    via: 'via Wikimedia Commons',
    photos: [
      'Pampa úmido visto por satélite, INPE',
      'Plantação de soja na Argentina, Alfonso',
      'Girassol do pampa, Emilio Küffer',
      'Colheita de soja, Clasonsf',
    ],
  },

  footer: {
    email: 'E-mail',
    emailAria: 'Enviar e-mail para inforindeplus@gmail.com',
    instagram: 'Instagram',
    instagramAria: 'Abrir o Instagram da Rinde Plus',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Abrir conversa no WhatsApp',
    office: 'Escritório',
    officeAria: 'Ver localização no Google Maps',
    rights: 'Todos os direitos reservados.',
    made: 'Feito com dados e critério agronômico',
  },
};

export default pt;
