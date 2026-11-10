// Política de privacidad del sitio (src/pages/privacidad.astro y sus
// versiones /en/privacy y /pt/privacidade), enlazada desde el footer.
//
// Cubre el sitio y los canales de contacto. Los datos que se cargan en la
// plataforma (cloud.rindeplus.com) se rigen por sus Términos y condiciones
// y su Política de privacidad, que viven en la app y se ven desde el login:
// acá sólo se nombran, sin enlace, para no depender de sus rutas.
//
// Describe lo que el sitio hace hoy; si cambia algo de esto, se actualiza el
// texto y la fecha (ACTUALIZADO) en los tres idiomas:
// - sin formularios ni cuentas; el ingreso a la plataforma es otro sitio;
// - Cloudflare como red y seguridad, y Cloudflare Web Analytics (sin cookies);
// - alojamiento en GitHub Pages;
// - tipografías e imágenes servidas desde el mismo sitio (sin Google Fonts);
// - en el navegador: el tema (localStorage, rp-theme) y, por un momento, la
//   posición al cambiar de idioma (sessionStorage, rp-idioma-scroll);
// - contacto por WhatsApp (bandeja de atención con herramientas automáticas),
//   email e Instagram.
//
// Normas: Ley 25.326 y Decreto 1558/2001 (deber de información del art. 6,
// plazos de los arts. 14 y 16, transferencias del art. 12) y la leyenda de la
// Resolución AAIP 14/2018. La versión en español es la que rige.
//
// Los párrafos y los ítems son HTML propio (se renderizan con set:html): sólo
// texto fijo de este archivo, nunca datos de afuera.
const RESPONSABLE = 'Conextion S.A.S.';
const CUIT = '30-71722681-6';
const MARCA = 'Rinde Plus';
const DOMICILIO = 'Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina';
const EMAIL = 'inforindeplus@gmail.com';
const MAIL = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
const AAIP_URL = 'https://www.argentina.gob.ar/aaip/datospersonales';
const aaip = (texto) => `<a href="${AAIP_URL}" target="_blank" rel="noopener noreferrer">${texto}</a>`;

export const PRIVACIDAD = {
  es: {
    titulo: 'Política de privacidad',
    descripcion:
      'Qué datos trata Rinde Plus cuando visitás su sitio o te comunicás con el equipo, para qué los usa, con quién los comparte y cómo ejercer tus derechos.',
    actualizado: '9 de noviembre de 2026',
    fechaLabel: 'Última actualización',
    secciones: [
      {
        titulo: '1. Quién es responsable de tus datos',
        parrafos: [
          `El responsable del tratamiento es <strong>${RESPONSABLE}</strong> (CUIT ${CUIT}), titular de la marca ${MARCA}, con domicilio en ${DOMICILIO}. Para cualquier consulta sobre tus datos personales podés escribir a ${MAIL}.`,
        ],
      },
      {
        titulo: '2. A qué se aplica esta política',
        parrafos: [
          'Esta política se aplica al sitio rindeplus.com, en todos sus idiomas, y a las comunicaciones que mantengas con nosotros por WhatsApp, email o redes sociales.',
          `La plataforma ${MARCA} (cloud.rindeplus.com) tiene sus propios Términos y condiciones y su propia Política de privacidad, disponibles en la plataforma, que regulan los datos que se cargan en ella y que cada usuario acepta al ingresar.`,
        ],
      },
      {
        titulo: '3. Qué datos tratamos y para qué',
        parrafos: ['<strong>Cuando navegás el sitio.</strong> El sitio no tiene formularios ni cuentas de usuario, y no usa herramientas de publicidad ni de seguimiento entre sitios.'],
        lista: [
          'Nuestros proveedores de red y alojamiento procesan los datos técnicos de cada visita (dirección IP, navegador, página pedida, fecha y hora) para entregar el sitio y protegerlo de ataques y abusos.',
          'Medimos las visitas con Cloudflare Web Analytics, que no usa cookies ni identifica a las personas: nos muestra cifras agregadas, como páginas vistas, país de origen, tipo de navegador y velocidad de carga.',
        ],
        cierre: [
          '<strong>Cuando nos escribís.</strong> Si nos contactás por WhatsApp, por email o por redes sociales, tratamos los datos que nos compartas: nombre, teléfono, email, empresa y lo que nos cuentes sobre tus campos y lotes. Los usamos para responderte, coordinar una demostración, darte de alta en la plataforma si lo pedís y hacer el seguimiento de tu consulta.',
          'Gestionamos las conversaciones con un sistema de atención que puede usar herramientas automáticas, incluidas herramientas de inteligencia artificial, para transcribir audios, leer imágenes y documentos y preparar o revisar respuestas. Esas herramientas no toman decisiones que te produzcan efectos jurídicos ni te afecten de manera significativa.',
          'Darnos tus datos es voluntario. Sin un medio de contacto no podemos responderte.',
        ],
      },
      {
        titulo: '4. Qué se guarda en tu navegador',
        parrafos: [
          'El sitio no usa cookies propias. Guarda en tu navegador si elegiste el modo claro u oscuro y, por un instante, la sección en la que estabas al cambiar de idioma, para volver a ese punto. Esos datos quedan en tu dispositivo y no se nos envían; podés borrarlos desde la configuración del navegador.',
          'Nuestro proveedor de red puede colocar cookies estrictamente técnicas, de seguridad, para distinguir el tráfico legítimo del automatizado.',
        ],
      },
      {
        titulo: '5. Con quién compartimos tus datos',
        parrafos: [
          'No vendemos ni cedemos tus datos personales. Sólo los compartimos con los proveedores que nos prestan servicios y que los tratan por nuestra cuenta y según nuestras instrucciones:',
        ],
        lista: [
          'Cloudflare, Inc. (red, seguridad y medición de visitas) y GitHub, Inc. (alojamiento del sitio).',
          'WhatsApp, de Meta Platforms, Inc. (mensajería) y nuestro proveedor de correo electrónico.',
          'Los proveedores de la herramienta de atención y de los servicios automáticos que usamos para gestionar las conversaciones.',
        ],
        cierre: [
          'También podemos revelar datos cuando lo ordene una autoridad competente o lo exija la ley.',
          'Los enlaces a WhatsApp, Instagram y Google Maps te llevan a servicios de terceros, que tratan tus datos según sus propias políticas.',
        ],
      },
      {
        titulo: '6. Transferencias internacionales',
        parrafos: [
          'Varios de esos proveedores procesan datos fuera de la Argentina, en especial en los Estados Unidos. Cuando el país de destino no tiene un nivel de protección adecuado, exigimos garantías de protección equivalentes, en los términos del artículo 12 de la Ley 25.326 y de las normas de la Agencia de Acceso a la Información Pública.',
          'Al comunicarte con nosotros prestás tu consentimiento expreso para que tus datos se transfieran a esos proveedores con las finalidades de esta política.',
        ],
      },
      {
        titulo: '7. Cuánto tiempo los conservamos',
        parrafos: [
          'Conservamos tus datos mientras sean necesarios para atender tu consulta y, si sos cliente, mientras dure la relación. Después los conservamos sólo el tiempo que exijan obligaciones legales o la defensa ante posibles reclamos, y luego los eliminamos o los anonimizamos.',
          'Las estadísticas de visitas son agregadas y no permiten identificarte.',
        ],
      },
      {
        titulo: '8. Seguridad',
        parrafos: [
          'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos: el sitio funciona sólo con conexiones cifradas (HTTPS) y el acceso a las conversaciones está restringido a las personas del equipo que lo necesitan.',
        ],
      },
      {
        titulo: '9. Tus derechos',
        parrafos: [
          'Como titular de los datos tenés derecho a:',
        ],
        lista: [
          '<strong>Acceso:</strong> saber qué datos tuyos tratamos, en forma gratuita y a intervalos no inferiores a seis meses, salvo que acredites un interés legítimo. Respondemos dentro de los diez días corridos de recibido el pedido.',
          '<strong>Rectificación, actualización y supresión:</strong> que corrijamos, actualicemos o eliminemos tus datos. Lo hacemos dentro de los cinco días hábiles de recibido el pedido.',
          '<strong>Retiro del consentimiento y oposición:</strong> retirar en cualquier momento tu consentimiento y pedir que dejemos de enviarte comunicaciones comerciales.',
        ],
        cierre: [
          `Para ejercerlos, escribinos a ${MAIL} desde el medio de contacto que usaste con nosotros, o indicando cómo acreditar que sos el titular.`,
          `LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales. Podés consultar ${aaip('cómo hacer un reclamo ante la Agencia')}.`,
          'Si te alcanza otra legislación de protección de datos, por ejemplo la de tu país de residencia, también podés ejercer ante nosotros los derechos que esa ley te reconozca, por el mismo canal.',
        ],
      },
      {
        titulo: '10. Menores de edad',
        parrafos: [
          'El sitio está dirigido a productores, asesores y empresas del sector agropecuario. No buscamos recolectar datos de menores de 18 años; si nos enteramos de que lo hicimos, los eliminamos.',
        ],
      },
      {
        titulo: '11. Cambios en esta política',
        parrafos: [
          'Si cambiamos esta política, publicamos la versión nueva en esta página con su fecha de actualización. Si el cambio es importante y tenemos tu contacto, te avisamos.',
        ],
      },
      {
        titulo: '12. Ley aplicable',
        parrafos: [
          'Esta política se rige por las leyes de la República Argentina, en particular la Ley 25.326 de Protección de los Datos Personales y su reglamentación. Se publica en español, inglés y portugués; si hubiera diferencias entre versiones, rige la versión en español.',
        ],
      },
    ],
  },

  en: {
    titulo: 'Privacy policy',
    descripcion:
      'What data Rinde Plus processes when you visit its website or contact the team, what it uses it for, who it shares it with and how to exercise your rights.',
    actualizado: 'November 9, 2026',
    fechaLabel: 'Last updated',
    secciones: [
      {
        titulo: '1. Who is responsible for your data',
        parrafos: [
          `The data controller is <strong>${RESPONSABLE}</strong> (CUIT ${CUIT}), owner of the ${MARCA} brand, located at ${DOMICILIO}. For any question about your personal data, write to ${MAIL}.`,
        ],
      },
      {
        titulo: '2. What this policy covers',
        parrafos: [
          'This policy applies to the rindeplus.com website, in all its languages, and to the communications you have with us through WhatsApp, email or social media.',
          `The ${MARCA} platform (cloud.rindeplus.com) has its own Terms and conditions and Privacy policy (in Spanish), available on the platform, which govern the data entered into it and which every user accepts when signing in.`,
        ],
      },
      {
        titulo: '3. What data we process and why',
        parrafos: ['<strong>When you browse the website.</strong> The website has no forms or user accounts, and it does not use advertising or cross-site tracking tools.'],
        lista: [
          'Our network and hosting providers process the technical data of each visit (IP address, browser, requested page, date and time) to deliver the website and protect it from attacks and abuse.',
          'We measure visits with Cloudflare Web Analytics, which does not use cookies or identify individuals: it shows us aggregate figures such as page views, country of origin, browser type and loading speed.',
        ],
        cierre: [
          '<strong>When you write to us.</strong> If you contact us through WhatsApp, email or social media, we process the data you share: name, phone number, email, company and whatever you tell us about your farms and fields. We use it to reply, arrange a demo, set up your platform account if you ask for it and follow up on your inquiry.',
          'We manage conversations with a customer service system that may use automated tools, including artificial intelligence tools, to transcribe audio messages, read images and documents, and draft or review replies. These tools do not make decisions that produce legal effects on you or significantly affect you.',
          'Providing your data is voluntary. Without a way to contact you, we cannot reply.',
        ],
      },
      {
        titulo: '4. What is stored in your browser',
        parrafos: [
          'The website does not use its own cookies. It stores in your browser whether you chose light or dark mode and, briefly, the section you were reading when you switch languages, so you return to the same spot. This data stays on your device and is not sent to us; you can delete it from your browser settings.',
          'Our network provider may set strictly necessary security cookies to tell legitimate traffic apart from automated traffic.',
        ],
      },
      {
        titulo: '5. Who we share your data with',
        parrafos: [
          'We do not sell or transfer your personal data to third parties. It is only shared with the providers that render services to us and process it on our behalf and under our instructions:',
        ],
        lista: [
          'Cloudflare, Inc. (network, security and visit measurement) and GitHub, Inc. (website hosting).',
          'WhatsApp, by Meta Platforms, Inc. (messaging) and our email provider.',
          'The providers of the customer service tool and of the automated services we use to manage conversations.',
        ],
        cierre: [
          'We may also disclose data when ordered by a competent authority or required by law.',
          'Links to WhatsApp, Instagram and Google Maps take you to third-party services, which process your data under their own policies.',
        ],
      },
      {
        titulo: '6. International transfers',
        parrafos: [
          'Several of these providers process data outside Argentina, particularly in the United States. When the destination country does not offer an adequate level of protection, we require equivalent safeguards, as provided by section 12 of Argentine Law 25,326 and the rules of the Agency for Access to Public Information.',
          'By contacting us, you give your express consent for your data to be transferred to these providers for the purposes of this policy.',
        ],
      },
      {
        titulo: '7. How long we keep it',
        parrafos: [
          'We keep your data for as long as needed to handle your inquiry and, if you are a customer, for as long as the relationship lasts. Afterwards we keep it only for as long as legal obligations or the defense of possible claims require, and then we delete or anonymize it.',
          'Visit statistics are aggregated and cannot identify you.',
        ],
      },
      {
        titulo: '8. Security',
        parrafos: [
          'We apply reasonable technical and organizational measures to protect your data: the website only works over encrypted connections (HTTPS), and access to conversations is restricted to the team members who need it.',
        ],
      },
      {
        titulo: '9. Your rights',
        parrafos: ['As the data subject, you have the right to:'],
        lista: [
          '<strong>Access:</strong> find out what data about you we process, free of charge and at intervals of no less than six months, unless you show a legitimate interest. We reply within ten calendar days of receiving the request.',
          '<strong>Rectification, update and deletion:</strong> have your data corrected, updated or deleted. We do so within five business days of receiving the request.',
          '<strong>Withdrawal of consent and objection:</strong> withdraw your consent at any time and ask us to stop sending you commercial communications.',
        ],
        cierre: [
          `To exercise these rights, write to ${MAIL} from the contact channel you used with us, or explain how you can prove you are the data subject.`,
          `The Agency for Access to Public Information (AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA), as the Supervisory Authority of Law No. 25,326, has the power to handle the complaints and claims filed by anyone whose rights are affected by non-compliance with the rules in force on personal data protection. See ${aaip('how to file a claim with the Agency')} (in Spanish).`,
          'If another data protection law applies to you, such as that of your country of residence, you can also exercise with us the rights that law grants you, through the same channel.',
        ],
      },
      {
        titulo: '10. Minors',
        parrafos: [
          'The website is aimed at growers, agronomic advisors and companies in the agricultural sector. We do not seek to collect data from people under 18; if we learn that we did, we delete it.',
        ],
      },
      {
        titulo: '11. Changes to this policy',
        parrafos: [
          'If we change this policy, we publish the new version on this page with its update date. If the change is significant and we have your contact details, we will let you know.',
        ],
      },
      {
        titulo: '12. Governing law',
        parrafos: [
          'This policy is governed by the laws of the Argentine Republic, in particular Law 25,326 on Personal Data Protection and its regulations. It is published in Spanish, English and Portuguese; in case of any discrepancy between versions, the Spanish version prevails.',
        ],
      },
    ],
  },

  pt: {
    titulo: 'Política de privacidade',
    descripcion:
      'Quais dados a Rinde Plus trata quando você visita o site ou entra em contato com a equipe, para que os usa, com quem os compartilha e como exercer seus direitos.',
    actualizado: '9 de novembro de 2026',
    fechaLabel: 'Última atualização',
    secciones: [
      {
        titulo: '1. Quem é o responsável pelos seus dados',
        parrafos: [
          `O controlador dos dados é a <strong>${RESPONSABLE}</strong> (CUIT ${CUIT}), titular da marca ${MARCA}, com sede em ${DOMICILIO}. Para qualquer dúvida sobre seus dados pessoais, escreva para ${MAIL}.`,
        ],
      },
      {
        titulo: '2. A que se aplica esta política',
        parrafos: [
          'Esta política se aplica ao site rindeplus.com, em todos os seus idiomas, e às comunicações que você mantiver conosco por WhatsApp, e-mail ou redes sociais.',
          `A plataforma ${MARCA} (cloud.rindeplus.com) tem seus próprios Termos e condições e sua própria Política de privacidade (em espanhol), disponíveis na plataforma, que regulam os dados inseridos nela e que cada usuário aceita ao entrar.`,
        ],
      },
      {
        titulo: '3. Quais dados tratamos e para quê',
        parrafos: ['<strong>Quando você navega no site.</strong> O site não tem formulários nem contas de usuário e não usa ferramentas de publicidade nem de rastreamento entre sites.'],
        lista: [
          'Nossos provedores de rede e hospedagem tratam os dados técnicos de cada visita (endereço IP, navegador, página solicitada, data e hora) para entregar o site e protegê-lo contra ataques e abusos.',
          'Medimos as visitas com o Cloudflare Web Analytics, que não usa cookies nem identifica as pessoas: ele nos mostra números agregados, como páginas vistas, país de origem, tipo de navegador e velocidade de carregamento.',
        ],
        cierre: [
          '<strong>Quando você nos escreve.</strong> Se você entrar em contato por WhatsApp, e-mail ou redes sociais, tratamos os dados que você compartilhar: nome, telefone, e-mail, empresa e o que você nos contar sobre suas fazendas e talhões. Usamos esses dados para responder, agendar uma demonstração, criar seu acesso à plataforma se você pedir e acompanhar sua consulta.',
          'Gerenciamos as conversas com um sistema de atendimento que pode usar ferramentas automáticas, incluindo ferramentas de inteligência artificial, para transcrever áudios, ler imagens e documentos e preparar ou revisar respostas. Essas ferramentas não tomam decisões que produzam efeitos jurídicos sobre você nem que o afetem de forma significativa.',
          'Fornecer seus dados é voluntário. Sem um meio de contato, não podemos responder.',
        ],
      },
      {
        titulo: '4. O que fica salvo no seu navegador',
        parrafos: [
          'O site não usa cookies próprios. Ele salva no seu navegador se você escolheu o modo claro ou escuro e, por um instante, a seção em que você estava ao trocar de idioma, para voltar ao mesmo ponto. Esses dados ficam no seu dispositivo e não são enviados para nós; você pode apagá-los nas configurações do navegador.',
          'Nosso provedor de rede pode definir cookies estritamente técnicos, de segurança, para distinguir o tráfego legítimo do automatizado.',
        ],
      },
      {
        titulo: '5. Com quem compartilhamos seus dados',
        parrafos: [
          'Não vendemos nem cedemos seus dados pessoais. Eles só são compartilhados com os provedores que nos prestam serviços e que os tratam em nosso nome e segundo nossas instruções:',
        ],
        lista: [
          'Cloudflare, Inc. (rede, segurança e medição de visitas) e GitHub, Inc. (hospedagem do site).',
          'WhatsApp, da Meta Platforms, Inc. (mensagens) e nosso provedor de e-mail.',
          'Os provedores da ferramenta de atendimento e dos serviços automáticos que usamos para gerenciar as conversas.',
        ],
        cierre: [
          'Também podemos revelar dados quando uma autoridade competente determinar ou a lei exigir.',
          'Os links para WhatsApp, Instagram e Google Maps levam a serviços de terceiros, que tratam seus dados segundo suas próprias políticas.',
        ],
      },
      {
        titulo: '6. Transferências internacionais',
        parrafos: [
          'Vários desses provedores tratam dados fora da Argentina, especialmente nos Estados Unidos. Quando o país de destino não oferece um nível de proteção adequado, exigimos garantias de proteção equivalentes, nos termos do artigo 12 da Lei argentina 25.326 e das normas da Agência de Acesso à Informação Pública.',
          'Ao entrar em contato conosco, você dá seu consentimento expresso para que seus dados sejam transferidos a esses provedores para as finalidades desta política.',
        ],
      },
      {
        titulo: '7. Por quanto tempo os guardamos',
        parrafos: [
          'Guardamos seus dados enquanto forem necessários para atender sua consulta e, se você for cliente, enquanto durar a relação. Depois, guardamos apenas pelo tempo exigido por obrigações legais ou pela defesa contra possíveis reclamações, e então os excluímos ou anonimizamos.',
          'As estatísticas de visitas são agregadas e não permitem identificar você.',
        ],
      },
      {
        titulo: '8. Segurança',
        parrafos: [
          'Aplicamos medidas técnicas e organizacionais razoáveis para proteger seus dados: o site funciona apenas com conexões criptografadas (HTTPS) e o acesso às conversas é restrito às pessoas da equipe que precisam dele.',
        ],
      },
      {
        titulo: '9. Seus direitos',
        parrafos: ['Como titular dos dados, você tem direito a:'],
        lista: [
          '<strong>Acesso:</strong> saber quais dados seus tratamos, gratuitamente e em intervalos não inferiores a seis meses, salvo se você demonstrar um interesse legítimo. Respondemos em até dez dias corridos a partir do recebimento do pedido.',
          '<strong>Retificação, atualização e exclusão:</strong> que corrijamos, atualizemos ou excluamos seus dados. Fazemos isso em até cinco dias úteis a partir do recebimento do pedido.',
          '<strong>Revogação do consentimento e oposição:</strong> revogar seu consentimento a qualquer momento e pedir que deixemos de enviar comunicações comerciais.',
        ],
        cierre: [
          `Para exercê-los, escreva para ${MAIL} pelo mesmo meio de contato que você usou conosco, ou indicando como comprovar que você é o titular.`,
          `A Agência de Acesso à Informação Pública (AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA), na qualidade de Órgão de Controle da Lei nº 25.326, tem a atribuição de atender às denúncias e reclamações apresentadas por quem for afetado em seus direitos pelo descumprimento das normas vigentes em matéria de proteção de dados pessoais. Veja ${aaip('como apresentar uma reclamação à Agência')} (em espanhol).`,
          'Se outra legislação de proteção de dados se aplicar a você, como a do seu país de residência (por exemplo, a LGPD no Brasil), você também pode exercer conosco os direitos que essa lei lhe garante, pelo mesmo canal.',
        ],
      },
      {
        titulo: '10. Menores de idade',
        parrafos: [
          'O site é voltado a produtores, consultores e empresas do setor agropecuário. Não buscamos coletar dados de menores de 18 anos; se soubermos que isso aconteceu, os excluímos.',
        ],
      },
      {
        titulo: '11. Alterações nesta política',
        parrafos: [
          'Se alterarmos esta política, publicaremos a nova versão nesta página com a data de atualização. Se a alteração for relevante e tivermos seu contato, avisaremos você.',
        ],
      },
      {
        titulo: '12. Lei aplicável',
        parrafos: [
          'Esta política é regida pelas leis da República Argentina, em especial a Lei 25.326 de Proteção dos Dados Pessoais e sua regulamentação. É publicada em espanhol, inglês e português; em caso de divergência entre as versões, prevalece a versão em espanhol.',
        ],
      },
    ],
  },
};
