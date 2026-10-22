import { LuShare } from 'react-icons/lu';

// Português do Brasil. Mesma estrutura e mesmas afirmações de es.jsx: só o
// que a plataforma faz hoje. 'Lote' → talhão, 'ambiente' → ambiente de
// manejo, 'campaña' → safra. Tom neutro, sem perguntas nos títulos.

const pt = {
  meta: {
    title: 'Rinde Plus · Inteligência agronômica para cada talhão',
    description:
      'A Rinde Plus integra o clima, o solo, os ambientes e o histórico de cada talhão e transforma tudo em decisões: o que fazer, quando e se vale a pena.',
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
      impact: 'Impacto',
      campaign: 'Plataforma',
      why: 'Vantagens',
      contact: 'Contato',
      install: 'Instalar o app',
      installHint: 'No celular, sem passar por uma loja',
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
    titleA: 'Inteligência agronômica',
    titleB: 'para cada talhão.',
    subtitle: (
      <>
        A Rinde Plus integra o clima, o solo, os ambientes e o histórico de
        cada talhão e transforma tudo em <strong>decisões</strong>: o que fazer,
        quando e se vale a pena.
      </>
    ),
    ctaTalk: 'Vamos falar dos seus talhões',
    ctaCampaign: 'Ver o que faz',
    mapAria: 'Talhão desenhado com seu mapa de vigor por ambiente, linhas de plantio e curvas de nível',
    // Notificações das cenas do talhão do hero (doc/ANIMACION_LOTE.md).
    avisos: {
      marca: 'Rinde Plus',
      ahora: 'agora',
      planificar: 'Produtividade potencial por ambiente, pronta.',
      preparar: 'Análise de solo interpretada.',
      fertilizar: 'Dose de máxima eficiência econômica por ambiente.',
      sequia: 'Irrigação necessária para atingir a produtividade-alvo.',
      calor: 'Alerta de estresse térmico para os próximos dias.',
      lluvia: 'Risco de doenças fúngicas depois da chuva.',
      cerrar: 'Lacuna de produtividade por ambiente, calculada.',
    },
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
    },
  },

  fx: {
    title: 'O que a Rinde Plus faz',
    subtitle:
      'Uma só ferramenta que acompanha cada talhão durante toda a safra, do planejamento ao fechamento.',
    momentos: 'Momentos da safra',
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
        copy: 'Cada decisão parte do clima, do solo e do histórico daquele talhão, não do que é típico da região.',
        detail: 'Desenhado sobre imagem de satélite com seus ambientes. Dois talhões vizinhos podem pedir decisões diferentes.',
      },
      {
        title: 'Mais talhões, sem perder detalhe',
        copy: 'Clima, solo, ambientes, monitoramento e histórico já cruzados num só lugar, sem montar planilhas.',
        detail: 'O tempo que ia em juntar dados fica para percorrer o campo e decidir.',
      },
      {
        title: 'O que fazer e quando',
        copy: 'Não só ver o talhão num mapa: saber o que vale fazer e em que momento.',
        detail: 'Alertas de clima, doenças e fitotoxicidade, e um aviso diário pelo WhatsApp que pode ser respondido.',
      },
      {
        title: 'Independente',
        copy: 'A Rinde Plus não vende insumos: às\u00a0vezes a melhor decisão é não aplicar.',
        detail: 'Antes de aplicar, a simulação com os preços do talhão mostra se a dose se paga.',
      },
    ],
  },

  cta: {
    title: 'Vamos falar dos seus talhões.',
    vision:
      'Nossa visão: que cada talhão seja decidido com critério agronômico, não só os de quem pode pagar uma equipe técnica.',
    copy: 'Poucas linhas sobre a operação bastam para marcar uma conversa. Sem formulários: quem responde é a própria equipe da Rinde Plus.',
    button: 'Escrever pelo WhatsApp',
    hint: 'Resposta em menos de 24 h',
  },

  install: {
    titleA: 'A Rinde Plus no celular,',
    titleB: 'como um app.',
    subtitle: 'Instale pelo navegador em três passos, sem passar por nenhuma loja.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Abrir <strong>app.rindeplus.com</strong> no <strong>Safari</strong>.</>,
        (
          <>
            Tocar em <strong>Compartilhar</strong>{' '}
            <LuShare className="rp-install__inline-icon" aria-hidden="true" />{' '}
            (o quadrado com a seta).
          </>
        ),
        <>Escolher <strong>Adicionar à Tela de Início</strong> e confirmar.</>,
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
            inicial</strong>) e confirmar.
          </>
        ),
      ],
    },
  },

  credits: {
    lead: 'Fotos',
    via: 'via Wikimedia Commons',
    photos: [
      'Talhões do pampa vistos do avião, Murray Foubister',
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
