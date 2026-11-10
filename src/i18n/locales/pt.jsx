import { LuShare } from 'react-icons/lu';
import { APP_URL } from '../../data/links';

// Enlace a la plataforma en los pasos de instalación: se toca y se abre.
const APP = (
  <a className="rp-install__link" href={APP_URL}>
    cloud.rindeplus.com
  </a>
);

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
    cta: 'Vamos conversar pelo WhatsApp',
  },

  header: {
    openMenu: 'Abrir menu',
    nav: {
      impact: 'Impacto',
      campaign: 'Plataforma',
      why: 'Vantagens',
      contact: 'Contato',
      install: 'Como instalar o app',
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
    titleB: 'para cada talhão',
    subtitle: (
      <>
        A Rinde Plus integra o clima, o solo, os ambientes e o histórico de
        cada talhão e transforma tudo em <strong>decisões</strong>: o que fazer,
        quando e se vale a pena.
      </>
    ),
    ctaTalk: 'Vamos falar dos seus talhões',
    ctaCampaign: 'Ver funcionalidades',
    mapAria: 'Talhão desenhado com seu mapa de vigor por ambiente, linhas de plantio e curvas de nível',
    // Notificações das cenas do talhão do hero (doc/ANIMACION_LOTE.md).
    avisos: {
            planificar: { titulo: 'Planejamento', texto: 'Produtividade potencial por ambiente, pronta.' },
      preparar: { titulo: 'Solo', texto: 'Análise de solo interpretada.' },
      fertilizar: { titulo: 'Adubação', texto: 'Dose de máxima eficiência econômica por ambiente.' },
      sequia: { titulo: 'Alerta hídrico', texto: 'Irrigação necessária para atingir a produtividade-alvo.' },
      calor: { titulo: 'Alerta de calor', texto: 'Estresse térmico previsto para os próximos dias.' },
      lluvia: { titulo: 'Alerta sanitário', texto: 'Risco de doenças fúngicas depois da chuva.' },
      cerrar: { titulo: 'Fechamento da safra', texto: 'Lacuna de produtividade por ambiente, calculada.' },
    },
  },

  trusted: {
    title: 'Confiam em nós',
  },

  // Seção Impacto. Os números chegam já formatados em `d` (ver
  // ImpactSection.jsx). "Safra" é o ano agrícola; cada talhão num ano é um
  // "ciclo produtivo".
  impacto: {
    title: 'Mais grão e mais captura de CO₂',
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
      hectareas: {
        titulo: (d) => `Hectares por cultura, safra ${d.campana}`,
        columnas: ['Cultura', 'Hectares', 'Parcela', 'Produtividade média (kg/ha)'],
      },
      grano: {
        titulo: (d) => `Grão extra por cultura, safra ${d.campana}`,
        columnas: ['Cultura', 'kg/ha extra', 'Grão extra'],
      },
      carbono: {
        titulo: (d) => `Carbono extra por cultura (t CO₂), safra ${d.campana}`,
        columnas: ['Cultura', 'Fixado', 'Volta ao solo', 'Fica estável'],
      },
      suelo: {
        titulo: (d) => `Análises de solo por cultura, safra ${d.campana}`,
        columnas: ['Cultura', 'Análises', 'Parcela'],
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
    siguiente: 'Próximo',
    anterior: 'Anterior',
    volverInicio: 'Voltar ao início',
    charts: {
      zones: ['Alto', 'Médio', 'Baixo'],
      potentialCaption: 'Produtividade base e potencial por ambiente',
      residueCaption: 'Resíduo e risco de fitotoxicidade',
      doseCaption: 'Dose de máxima eficiência econômica',
      today: 'Hoje',
      forecastCaption: 'Clima e previsão do talhão',
      fourYields: ['Potencial', 'Adubada', 'Colhida', 'Base'],
      gapCaption: 'Lacuna de produtividade',
    },
    panels: {
      planificar: {
        tag: 'Planejar',
        name: 'A produtividade que cada talhão pode alcançar',
        description:
          'Quanto cada ambiente do talhão pode produzir, segundo o solo, a análise própria e a água da safra.',
        bullets: [
          'Solo de referência e análise própria',
          'Irrigação necessária para a produtividade-alvo',
          'Produtividade base e potencial de cada ambiente',
        ],
      },
      preparar: {
        tag: 'Preparar o talhão',
        name: 'A água do perfil e o resíduo de herbicidas',
        description:
          'A água que a planta de cobertura usa frente a um pousio, e quanto herbicida resta conforme chuva, irrigação e data.',
        bullets: [
          'Alerta de fitotoxicidade para a próxima cultura',
          'Aplicações da safra anterior incluídas',
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
          'Clima e previsão por talhão, e monitoramento a campo com catálogos de plantas daninhas, pragas e doenças.',
        bullets: [
          'Alertas de estresse térmico e doenças',
          'Recomendação que vai ao plano de aplicações',
          'Avisos diários pelo WhatsApp, com resposta',
        ],
      },
      cerrar: {
        tag: 'Fechar e aprender',
        name: 'Onde se perdeu produtividade',
        description:
          'O que cada talhão podia produzir contra o que foi colhido, e o planejado contra o realizado, em produtividade e em margem.',
        bullets: [
          'Lacuna de produtividade por talhão e ambiente',
          'Mapa de análise entre talhões e safras',
          'Visão consolidada por empresa',
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
    title: 'Vamos falar dos seus talhões',
    vision:
      'Nossa visão: que cada talhão seja decidido com critério agronômico, não só os de quem pode pagar uma equipe técnica.',
    button: 'Vamos conversar pelo WhatsApp',
    hint: 'Sem formulários · resposta da equipe em menos de 24 h',
  },

  install: {
    titleA: 'A Rinde Plus no celular,',
    titleB: 'como um app',
    subtitle: 'Instale pelo navegador em quatro passos, sem passar por nenhuma loja.',
    ios: {
      name: 'iPhone',
      steps: [
        <>Abrir {APP} no <strong>Safari</strong>.</>,
        <>Tocar em <strong>Compartilhar</strong> <LuShare className="rp-install__inline-icon" aria-hidden="true" />, na barra de baixo.</>,
        <>Escolher <strong>Adicionar à Tela de Início</strong>.</>,
        <>Tocar em <strong>Adicionar</strong> para confirmar.</>,
      ],
    },
    android: {
      name: 'Android',
      steps: [
        <>Abrir {APP} no <strong>Chrome</strong>.</>,
        <>Tocar no menu <strong>⋮</strong> no canto superior direito.</>,
        <>Escolher <strong>Instalar app</strong> ou <strong>Adicionar à tela inicial</strong>.</>,
        <>Tocar em <strong>Instalar</strong> para confirmar.</>,
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
    officeAria: 'Ver localização no Google Maps',
    rights: 'Todos os direitos reservados.',
    made: 'Feito com dados e critério agronômico',
    legalNav: 'Informações legais',
    privacy: 'Política de privacidade',
  },
};

export default pt;
