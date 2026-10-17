import { LuShare } from 'react-icons/lu';

// Português do Brasil. Mesma estrutura e mesmas afirmações de es.jsx: só o
// que a plataforma faz hoje. "Lote" → talhão, "ambiente" → ambiente de
// manejo, "campaña" → safra. Tom neutro, sem perguntas nos títulos.

const pt = {
  meta: {
    title: 'Rinde Plus · Critério agronômico para cada talhão',
    description:
      'Inteligência agronômica: a Rinde Plus integra o clima, o solo, os ambientes e o histórico de cada talhão e transforma tudo em decisões. Para produtores e agrônomos.',
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
      campaign: 'A safra',
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
        pena. Para produtores e agrônomos.
      </>
    ),
    ctaTalk: 'Vamos falar dos seus talhões',
    ctaCampaign: 'Ver a safra',
    mapAria: 'Talhão desenhado com três ambientes, linhas de plantio e curvas de nível',
  },

  trusted: {
    title: 'Confiam em nós',
  },

  fx: {
    title: 'Uma decisão por vez, talhão por talhão',
    subtitle: (
      <>
        Em cada talhão, quanto pode produzir, quanto produziu e por que não
        chegou lá. Cinco momentos da safra; em cada um, <strong>Ver a
        diferença</strong> mostra o que muda.
      </>
    ),
    next: 'Próximo',
    nextAria: 'Ver o próximo momento',
    goTo: (name) => `Ir para ${name}`,
    more: 'Ver a diferença',
    today: 'Como se decide hoje',
    withRp: 'Com a Rinde Plus',
    back: 'Voltar',
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
        name: 'O teto de cada talhão, ambiente por ambiente',
        description:
          'Quatro produtividades por talhão e por ambiente: base, potencial, adubada e colhida. O potencial vem do solo de referência do talhão, da análise de solo própria quando existe e do balanço hídrico da safra.',
        bullets: [
          'Solo de referência do GeoINTA, IDECOR e SoilGrids, ajustado com a análise própria',
          'Balanço hídrico: chuva efetiva, água disponível e irrigação prevista',
          'Com irrigação: quanto é preciso para chegar à produtividade-alvo, com teto pela capacidade de campo',
          'Cultivares do registro oficial do INASE (Argentina)',
        ],
        problem:
          'O planejamento parte da produtividade típica da região. Sem um teto por talhão, não dá para saber quanto se pode melhorar nem onde vale investir.',
        gain:
          'Cada talhão tem seu teto e sua lacuna à vista, e a meta da safra sai do talhão, não da média.',
      },
      preparar: {
        tag: 'Preparar o talhão',
        name: 'A água do perfil e o resíduo de herbicidas, antes de plantar',
        description:
          'O consumo de água da planta de cobertura frente a um pousio, e o resíduo de cada princípio ativo conforme chuvas, irrigação e data de aplicação, incluindo as aplicações da safra anterior.',
        bullets: [
          'Consumo de água da planta de cobertura comparado a um pousio',
          'Resíduo de cada herbicida conforme chuvas, irrigação e data de aplicação',
          'Alerta de risco alto de fitotoxicidade para a próxima cultura',
          'Análise de solo por talhão (química, água disponível, textura, densidade) e plano de correção, inclusive para solos sódicos',
        ],
        problem:
          'A dessecação é decidida no olho e o resíduo não se vê. Dessecar tarde deixa a próxima cultura sem água; um resíduo alto custa produtividade desde a emergência.',
        gain:
          'O momento de dessecação que preserva a água do perfil, e o risco de fitotoxicidade de cada talhão à vista antes de plantar.',
      },
      fertilizar: {
        tag: 'Adubar',
        name: 'Quanto adubar e se a dose se paga',
        description:
          'Simulação por produto e dose, com o balanço de nutrientes do talhão e a curva de resposta da produtividade. Com os preços cadastrados no talhão, a dose de máxima eficiência econômica e a margem que ela deixa. Às vezes a melhor decisão é não aplicar.',
        bullets: [
          'Simulador por produto e dose, com balanço de nutrientes',
          'Curva de resposta e dose de máxima eficiência econômica',
          'Produtividade adubada contra a base, sem passar do potencial',
          'Margem bruta por talhão e por ambiente',
        ],
        problem:
          'Repete-se a dose do ano passado ou a típica da região, sem saber se naquele talhão, e com estes preços, a aplicação se paga.',
        gain:
          'A dose, ou a decisão de não aplicar, com a conta do talhão à vista: quanto produz a mais e quanta margem deixa.',
      },
      acompanar: {
        tag: 'Acompanhar a cultura',
        name: 'O que vem em cada talhão e quando vale agir',
        description:
          'Clima de cada talhão, 15 dias para trás e 15 para a frente, e monitoramento a campo: vistorias com catálogos de plantas daninhas, pragas e doenças, com o dano por espécie e a recomendação de produto, que passa ao plano de aplicações e à margem.',
        bullets: [
          'Previsão por talhão, com alertas de estresse térmico, déficit de pressão de vapor e risco de doenças fúngicas',
          'Monitoramento a campo com catálogos curados de plantas daninhas, pragas e doenças',
          'Aviso quando um talhão está há tempo sem vistoria ou há uma decisão pendente',
          'Avisos diários pelo WhatsApp, com o seu consentimento, que podem ser respondidos',
        ],
        problem:
          'O estresse aparece no campo quando a produtividade já foi perdida, a previsão regional não diz o que acontece em cada talhão e o que se vê na vistoria fica num caderno.',
        gain:
          'O aviso chega com tempo para agir, e o que se vê na vistoria vira uma aplicação com seu custo na margem.',
      },
      cerrar: {
        tag: 'Fechar e aprender',
        name: 'Onde se perdeu produtividade e quanto dá para recuperar',
        description:
          'No fechamento, talhão por talhão, o que podia produzir contra o que foi colhido, e o planejado contra o realizado: o plano fica congelado ao aplicar.',
        bullets: [
          'Produtividade base, potencial, adubada e colhida',
          'Planejado contra realizado, em produtividade e em margem',
          'Mapa de análise que cruza talhões, ambientes e safras em adubação, aplicações e monitoramento',
          'Visão por empresa',
        ],
        problem:
          'A safra fecha com a produtividade colhida e pouco mais. Os dados ficam em planilhas soltas e a próxima é decidida do mesmo jeito.',
        gain:
          'Cada safra deixa uma lição por talhão, e a próxima começa com o que se aprendeu.',
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

  audiences: {
    title: 'Para produtores e agrônomos',
    subtitle: 'Um mesmo sistema, na mesma língua, para decidir sobre cada talhão.',
    groups: [
      {
        id: 'productor',
        title: 'Produtores',
        lead: 'Quanto cada talhão pode produzir, por que não chegou lá, o que vale fazer, quando e se se paga.',
        items: [
          { t: 'O que fazer e quando', d: 'Uma recomendação para cada talhão, no momento certo.' },
          { t: 'Se a aplicação se paga', d: 'A conta do talhão antes de aplicar; às vezes vale não fazer nada.' },
          { t: 'Avisos diários', d: 'Alertas de clima, doenças e fitotoxicidade pelo WhatsApp, que podem ser respondidos.' },
        ],
      },
      {
        id: 'agronomo',
        title: 'Agrônomos',
        lead: 'A análise já montada; o tempo, para decidir.',
        items: [
          { t: 'A análise já integrada', d: 'Clima, solo, ambientes, monitoramento e histórico de cada talhão num só lugar.' },
          { t: 'Mais talhões, mesmo rigor', d: 'Mapa de análise e visão por empresa para acompanhar muitos talhões ao mesmo tempo.' },
          { t: 'Vistorias com critério', d: 'Monitoramento com catálogos curados e uma recomendação que passa ao plano de aplicações.' },
        ],
      },
    ],
  },

  principles: [
    {
      title: 'Chega pela sua organização',
      copy: 'Cooperativas, cerealistas, empresas de sementes, revendas de insumos e consultorias dão acesso à sua rede.',
    },
    {
      title: 'Um só sistema',
      copy: 'Clima, solo, ambientes e histórico de cada talhão, num mesmo lugar.',
    },
    {
      title: 'Nossa visão',
      copy: 'Que cada talhão seja decidido com critério agronômico, não só os de quem pode pagar uma equipe técnica.',
    },
  ],

  cta: {
    title: 'Vamos falar dos seus talhões.',
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
