// Todo o conteúdo do site fica aqui. Edite este arquivo para personalizar.
// Textos com { pt, en } aparecem conforme o idioma escolhido pelo visitante.

export const profile = {
  name: 'Juan Rodrigues',
  // Deixe como null para esconder o e-mail ou o link do LinkedIn no Contato.
  email: 'juanrodriguesdto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juan-r/',
  github: 'https://github.com/itjuanr',
  // Coloque uma foto em public/ (ex.: public/foto.jpg) e use './foto.jpg' aqui.
  photo: null,
  role: {
    pt: 'Analista de Sistemas na Deloitte',
    en: 'Systems Analyst at Deloitte',
  },
  // Frase grande do topo: uma linha por item.
  headline: {
    pt: ['Especifico.', 'Testo.', 'Desenvolvo.'],
    en: ['I specify.', 'I test.', 'I build.'],
  },
  intro: {
    pt: 'Sou Analista de Sistemas Pleno na Deloitte. Cuido das melhorias de um sistema crítico para a mineração, do levantamento de requisitos até a entrada em produção. Também desenvolvo com JavaScript, TypeScript, React e Node.',
    en: 'I am a mid-level Systems Analyst at Deloitte. I handle the improvements to a critical system for the mining industry, from requirements gathering to production release. I also build software with JavaScript, TypeScript, React and Node.',
  },
  // Terminal do topo: o que você está fazendo hoje. Atualize quando algo mudar.
  now: {
    file: { pt: 'agora.txt', en: 'now.txt' },
    items: [
      {
        label: { pt: 'Trabalho', en: 'Work' },
        value: {
          pt: 'Analista de Sistemas Pleno na Deloitte',
          en: 'Mid-level Systems Analyst at Deloitte',
        },
      },
      {
        label: { pt: 'Estudo', en: 'Studying' },
        value: {
          pt: 'Bacharelado em Engenharia de Software, UNINTER',
          en: "Bachelor's in Software Engineering, UNINTER",
        },
      },
      {
        label: { pt: 'Projeto', en: 'Project' },
        value: {
          pt: "Ocean's Store, em produção e em evolução",
          en: "Ocean's Store, in production and evolving",
        },
      },
    ],
  },
  // Faixa em movimento logo abaixo do topo.
  marquee: {
    pt: ['Requisitos', 'Testes', 'TypeScript', 'React', 'Node.js', 'SQL', 'UAT', 'Next.js'],
    en: ['Requirements', 'Testing', 'TypeScript', 'React', 'Node.js', 'SQL', 'UAT', 'Next.js'],
  },
  aboutHeading: {
    pt: ['Comecei testando software.', 'Hoje eu especifico', 'e desenvolvo.'],
    en: ['I started out testing software.', 'Today I specify', 'and build it.'],
  },
  about: {
    pt: [
      'Trabalho no ponto de encontro entre quem usa o software e quem o constrói. Hoje, na Deloitte, conduzo as evolutivas de um sistema MES de grande porte: o sistema que acompanha e controla a produção em tempo real, neste caso em operações de mineração. Ouço a necessidade de quem está na operação, transformo isso em especificação, acompanho o desenvolvimento, testo e levo a entrega até a produção.',
      'Cheguei aqui pelo caminho dos testes. Em 2022 fiz uma academia intensiva de teste de software na Universidade Franciscana e fui contratado pela Atos como analista de testes. Passei mais de dois anos procurando falhas nesse sistema, e para isso precisei entender cada fluxo e cada regra de negócio. Foi esse conhecimento que, em outubro de 2024, me rendeu uma promoção: passei a especificar os requisitos, além de garantir a qualidade.',
      "Programar é o passo seguinte, e é a parte de que mais gosto. Desenvolvo com JavaScript, TypeScript, React e Node, concluí uma pós-graduação em desenvolvimento Java e curso bacharelado em Engenharia de Software. Meu maior projeto, a Ocean's Store, é uma plataforma de vendas com pagamentos reais que está em produção.",
    ],
    en: [
      'I work where the people who use software meet the people who build it. Today, at Deloitte, I lead the enhancements of a large MES: the system that tracks and controls production in real time, in this case for mining operations. I listen to what operations need, turn it into a specification, follow development, test, and take the delivery all the way to production.',
      'I got here through testing. In 2022 I completed an intensive software testing academy at Universidade Franciscana and was hired by Atos as a test analyst. I spent more than two years hunting for failures in that system, which meant understanding every flow and every business rule. That knowledge is what earned me a promotion in October 2024: I began specifying requirements in addition to assuring quality.',
      "Coding is the next step, and the part I enjoy most. I build with JavaScript, TypeScript, React and Node, completed a postgraduate degree in Java development, and am pursuing a bachelor's degree in Software Engineering. My largest project, Ocean's Store, is a sales platform with real payments running in production.",
    ],
  },
  facts: [
    {
      label: { pt: 'Localização', en: 'Location' },
      value: { pt: 'Nova Iguaçu, Rio de Janeiro', en: 'Nova Iguaçu, Rio de Janeiro, Brazil' },
    },
    {
      label: { pt: 'Idiomas', en: 'Languages' },
      value: {
        pt: 'Português (nativo), inglês (profissional)',
        en: 'Portuguese (native), English (professional)',
      },
    },
  ],
}

// Do mais recente para o mais antigo.
export const experience = [
  {
    period: { pt: 'Mar/2026 – atual', en: 'Mar 2026 – present' },
    title: { pt: 'Analista de Sistemas Pleno', en: 'Mid-level Systems Analyst' },
    place: 'Deloitte',
    summary: {
      pt: 'A Deloitte assumiu as evolutivas do sistema MES e pediu que eu continuasse no projeto. Sou a ponte entre os usuários da operação e o time de desenvolvimento.',
      en: 'Deloitte took over the enhancements of the MES and asked me to stay on the project. I am the bridge between operations users and the development team.',
    },
    highlights: {
      pt: [
        'Conduzo evolutivas técnicas e funcionais do começo ao fim: elicitação, especificação funcional, modelagem de dados, acompanhamento do desenvolvimento e validação.',
        'Traduzo necessidades de negócio em especificações e protótipos que o time técnico consegue implementar.',
        'Executo testes funcionais para validar cada entrega antes da implantação, e treino e apoio os testers.',
        'Conduzo sessões de UAT (validação com o usuário) e KT (passagem de conhecimento), participo de rollouts e atendo usuários.',
      ],
      en: [
        'I lead technical and functional enhancements end to end: elicitation, functional specification, data modeling, development follow-up and validation.',
        'I translate business needs into specifications and prototypes the technical team can implement.',
        'I run functional tests to validate each delivery before deployment, and train and support the testers.',
        'I run UAT (user acceptance) and KT (knowledge transfer) sessions, take part in rollouts and support users.',
      ],
    },
  },
  {
    period: { pt: 'Out/2024 – Fev/2026', en: 'Oct 2024 – Feb 2026' },
    title: {
      pt: 'Analista de Desenvolvimento de Sistemas',
      en: 'Systems Development Analyst',
    },
    place: 'Atos',
    summary: {
      pt: 'Promoção dentro do mesmo projeto, a convite da gestão: passei a responder pela especificação de requisitos, além da garantia de qualidade.',
      en: 'A promotion within the same project, at management’s invitation: I became responsible for requirements specification in addition to quality assurance.',
    },
    highlights: {
      pt: [
        'Elicitação e refinamento de regras de negócio com usuários finais e times técnicos.',
        'Especificação funcional das evolutivas e modelagem de dados, com repasse estruturado ao time de desenvolvimento.',
        'Documentação de User Stories com critérios de aceite no Azure DevOps.',
        'Planejamento e execução de testes funcionais e condução de UAT com usuários finais.',
        'Treinamento de usuários nas janelas de subida para produção.',
      ],
      en: [
        'Elicited and refined business rules with end users and technical teams.',
        'Wrote functional specifications and data models for enhancements, with a structured handoff to developers.',
        'Documented User Stories with acceptance criteria in Azure DevOps.',
        'Planned and executed functional tests and ran UAT with end users.',
        'Trained users during production release windows.',
      ],
    },
  },
  {
    period: { pt: 'Jun/2022 – Out/2024', en: 'Jun 2022 – Oct 2024' },
    title: { pt: 'Analista de Testes', en: 'Test Analyst' },
    place: 'Atos',
    summary: {
      pt: 'Minha entrada na área. Comecei no time de QA de um cliente de telecomunicações e, em agosto de 2022, fui para o projeto do sistema MES de mineração, em uma equipe ágil de melhorias funcionais, técnicas e não funcionais.',
      en: 'My entry into the field. I started on the QA team of a telecom client and, in August 2022, moved to the mining MES project, on an agile team delivering functional, technical and non-functional improvements.',
    },
    highlights: {
      pt: [
        'Elaboração e execução de testes funcionais, de regressão e de integração das evolutivas.',
        'Validação de APIs com Postman, SoapUI e Swagger, e consultas SQL (Oracle, MySQL) para conferir os dados no backend.',
        'Gestão do ciclo de vida dos defeitos e rastreabilidade dos testes no Azure DevOps.',
        'Suporte técnico nas janelas de implantação em produção.',
      ],
      en: [
        'Designed and executed functional, regression and integration tests for enhancements.',
        'Validated APIs with Postman, SoapUI and Swagger, and used SQL queries (Oracle, MySQL) to verify backend data.',
        'Managed the defect lifecycle and test traceability in Azure DevOps.',
        'Provided technical support during production deployment windows.',
      ],
    },
  },
]

export const education = [
  {
    period: { pt: 'Jun/2026 – Jun/2030', en: 'Jun 2026 – Jun 2030' },
    title: { pt: 'Bacharelado em Engenharia de Software', en: "Bachelor's in Software Engineering" },
    place: { pt: 'UNINTER, em andamento', en: 'UNINTER, in progress' },
  },
  {
    period: { pt: 'Dez/2024 – Out/2025', en: 'Dec 2024 – Oct 2025' },
    title: {
      pt: 'Pós-graduação em Desenvolvimento de Sistemas em Java',
      en: 'Postgraduate degree in Java Systems Development',
    },
    place: { pt: 'UniCesumar', en: 'UniCesumar' },
  },
  {
    period: { pt: 'Out/2021 – Out/2024', en: 'Oct 2021 – Oct 2024' },
    title: {
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'Associate degree in Systems Analysis and Development',
    },
    place: { pt: 'Estácio', en: 'Estácio' },
  },
]

// Cursos e academias. Cada item de "details" vira uma linha "Rótulo: conteúdo".
export const courses = [
  {
    period: { pt: 'Out/2023', en: 'Oct 2023' },
    title: {
      pt: 'Academia de Java, Full Stack Development',
      en: 'Java Academy, Full Stack Development',
    },
    place: { pt: 'Universidade Franciscana (UFN)', en: 'Universidade Franciscana (UFN)' },
    summary: {
      pt: 'Formação intensiva focada em desenvolvimento robusto e arquitetura de sistemas.',
      en: 'Intensive training focused on robust development and systems architecture.',
    },
    details: [
      {
        label: { pt: 'Backend', en: 'Backend' },
        value: {
          pt: 'Java (JVM), Spring Boot 2, JPA/Hibernate, Spring Security e Batch.',
          en: 'Java (JVM), Spring Boot 2, JPA/Hibernate, Spring Security and Batch.',
        },
      },
      {
        label: { pt: 'Frontend e web', en: 'Frontend & web' },
        value: {
          pt: 'Angular, JSF, Servlets e Webservices.',
          en: 'Angular, JSF, Servlets and Web services.',
        },
      },
      {
        label: { pt: 'Infra e DevOps', en: 'Infra & DevOps' },
        value: {
          pt: 'Introdução ao Docker, servidores de aplicação (Tomcat/Wildfly) e logging/debugging.',
          en: 'Introduction to Docker, application servers (Tomcat/Wildfly) and logging/debugging.',
        },
      },
    ],
  },
  {
    period: { pt: 'Out/2022', en: 'Oct 2022' },
    title: { pt: 'Academia de Automação de Testes', en: 'Test Automation Academy' },
    place: { pt: 'UniCesumar', en: 'UniCesumar' },
    summary: {
      pt: 'Especialização prática em garantia de qualidade através de automação.',
      en: 'Hands-on specialization in quality assurance through automation.',
    },
    details: [
      {
        label: { pt: 'Módulos', en: 'Modules' },
        value: {
          pt: 'Planejamento de automação, testes de unidade e de integração.',
          en: 'Automation planning, unit and integration testing.',
        },
      },
      {
        label: { pt: 'Plataformas', en: 'Platforms' },
        value: {
          pt: 'Automação para web, mobile e APIs REST.',
          en: 'Automation for web, mobile and REST APIs.',
        },
      },
    ],
  },
  {
    period: { pt: 'Fev/2022 – Abr/2022', en: 'Feb 2022 – Apr 2022' },
    title: {
      pt: 'Academia de Testes de Software, Quality Assurance',
      en: 'Software Testing Academy, Quality Assurance',
    },
    place: {
      pt: 'Universidade Franciscana (UFN)',
      en: 'Universidade Franciscana (UFN)',
    },
    summary: {
      pt: 'Formação completa em QA e processos de teste no ciclo de vida de software (SDLC).',
      en: 'Complete training in QA and testing processes across the software development life cycle (SDLC).',
    },
    details: [
      {
        label: { pt: 'Técnicas', en: 'Techniques' },
        value: {
          pt: 'Caixa preta, modelagem de testes, gestão de defeitos e massa de dados.',
          en: 'Black-box testing, test modeling, defect management and test data.',
        },
      },
      {
        label: { pt: 'Ferramentas', en: 'Tools' },
        value: {
          pt: 'Jira, Azure, Postman, SoapUI e SQL (consultas complexas).',
          en: 'Jira, Azure, Postman, SoapUI and SQL (complex queries).',
        },
      },
    ],
  },
]

// Itens podem ser um texto simples ou { pt, en } quando precisam de tradução.
export const skills = [
  {
    category: { pt: 'Requisitos e análise', en: 'Requirements & analysis' },
    items: [
      { pt: 'Elicitação de requisitos', en: 'Requirements elicitation' },
      { pt: 'Especificação funcional', en: 'Functional specification' },
      { pt: 'Modelagem de dados', en: 'Data modeling' },
      'User Stories',
      'UAT, KT',
      'BPMN, UML',
      'Scrum, Kanban',
      'Azure DevOps',
      'Jira, Confluence',
    ],
  },
  {
    category: { pt: 'Qualidade e testes', en: 'Quality & testing' },
    items: [
      { pt: 'Testes funcionais', en: 'Functional testing' },
      { pt: 'Regressão e integração', en: 'Regression & integration' },
      { pt: 'Testes de API', en: 'API testing' },
      'Postman, SoapUI',
      'Swagger',
      'Cypress',
      'BDD / Gherkin',
    ],
  },
  {
    category: { pt: 'Front-end', en: 'Front-end' },
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML, CSS'],
  },
  {
    category: { pt: 'Back-end e dados', en: 'Back-end & data' },
    items: ['Node.js', 'Express', 'MongoDB', 'SQL (Oracle, MySQL)', 'Java', 'Spring Boot'],
  },
]

export const projects = [
  {
    title: "Ocean's Store",
    description: {
      pt: 'Plataforma de vendas de uma loja de itens digitais, que funciona dentro do Discord e também por um site. O cliente monta o pedido, paga por PIX e o sistema confirma o pagamento sozinho; a equipe entrega e acompanha tudo por painéis. Desenvolvi o bot e a webapp, que compartilham o mesmo banco de dados: são cerca de 49 mil linhas de TypeScript. Em um ano de operação com o sistema automático, a loja chegou a aproximadamente 15 mil usuários e clientes e a um faturamento perto de R$ 100 mil. Os clientes elogiam com frequência a facilidade do fluxo de compra.',
      en: 'Sales platform for a digital goods store that runs inside Discord and on a website. Customers build an order, pay by PIX and the system confirms the payment on its own; the team delivers and tracks everything through dashboards. I built the bot and the web app, which share the same database: around 49 thousand lines of TypeScript. In one year of operation with the automated system, the store reached approximately 15 thousand users and customers and close to R$ 100 thousand in revenue. Customers frequently praise how easy the purchase flow is.',
    },
    note: { pt: 'Em produção', en: 'In production' },
    tags: ['TypeScript', 'Node.js', 'Discord.js', 'Next.js', 'MongoDB'],
    repo: null,
    demo: 'https://www.oceansstore.site/',
  },
  {
    title: 'FlashMind',
    description: {
      pt: 'Aplicativo de estudo com flashcards e repetição espaçada: ele decide quando mostrar cada cartão de novo para você memorizar melhor. Tem sessões cronometradas, estatísticas de progresso, cartões com áudio e imagem e importação por CSV.',
      en: 'Study app with flashcards and spaced repetition: it decides when to show each card again so you memorize better. Includes timed sessions, progress statistics, cards with audio and images, and CSV import.',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/itjuanr/flashmind',
    demo: 'https://flashmind-delta.vercel.app',
  },
  {
    title: 'QA Automation Exercise',
    description: {
      pt: 'Testes automatizados de ponta a ponta de um e-commerce: o robô navega pelo site como um usuário e confere se tudo funciona. Feito com Cypress e organizado no padrão Page Object Model, que facilita a manutenção dos testes.',
      en: 'End-to-end automated tests for an e-commerce site: the robot browses the site like a user and checks that everything works. Built with Cypress and organized with the Page Object Model pattern, which keeps the tests maintainable.',
    },
    tags: ['Cypress', 'JavaScript', 'Page Object Model'],
    repo: 'https://github.com/itjuanr/qa-automation-exercise',
    demo: null,
  },
  {
    title: 'Order Management System',
    description: {
      pt: 'Aplicação completa para gerenciar pedidos e fornecedores, com login protegido por JWT. O backend é uma API em Spring Boot e o front-end é feito em Angular.',
      en: 'Full application for managing orders and suppliers, with JWT-protected login. The backend is a Spring Boot API and the front end is built with Angular.',
    },
    tags: ['Java', 'Spring Boot', 'Angular', 'JWT'],
    repo: 'https://github.com/itjuanr/order-management-system',
    demo: null,
  },
  {
    title: 'JOV Portfolio',
    description: {
      pt: 'Site profissional feito para um designer gráfico especializado em identidade visual para pequenos negócios, com tema claro e escuro e galeria de projetos.',
      en: 'Professional website built for a graphic designer specialized in visual identity for small businesses, with light and dark themes and a project gallery.',
    },
    tags: ['React', 'Tailwind CSS', 'Vite'],
    repo: 'https://github.com/itjuanr/jovportfolio',
    demo: 'https://jovportfolio.vercel.app',
  },
  {
    title: 'Rio Balsamor',
    description: {
      pt: 'Landing page responsiva e interativa para uma marca fictícia de gastronomia carioca. Um exercício de layout, responsividade e interação.',
      en: 'Responsive, interactive landing page for a fictional Rio de Janeiro food brand. An exercise in layout, responsiveness and interaction.',
    },
    tags: ['HTML', 'CSS'],
    repo: 'https://github.com/itjuanr/rio-balsamor-landing-page',
    demo: 'https://balsamor.vercel.app',
  },
]

// Textos fixos da interface.
export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      journey: 'Trajetória',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    hero: {
      viewProjects: 'Ver projetos',
      contact: 'Entrar em contato',
    },
    about: { title: 'Sobre' },
    journey: {
      title: 'Trajetória',
      experience: 'Experiência',
      education: 'Formação',
      courses: 'Cursos',
      showDetails: 'Ver detalhes',
      hideDetails: 'Ocultar detalhes',
    },
    projects: {
      title: 'Projetos',
      code: 'Código',
      demo: 'Ver online',
    },
    skills: { title: 'Habilidades' },
    contact: {
      title: 'Contato',
      text: 'Estou aberto a novas oportunidades e a boas conversas sobre software.',
    },
    a11y: {
      menu: 'Abrir menu',
      toDark: 'Mudar para o tema escuro',
      toLight: 'Mudar para o tema claro',
      language: 'Idioma',
      skip: 'Pular para o conteúdo',
    },
  },
  en: {
    nav: {
      about: 'About',
      journey: 'Journey',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      viewProjects: 'View projects',
      contact: 'Get in touch',
    },
    about: { title: 'About' },
    journey: {
      title: 'Journey',
      experience: 'Experience',
      education: 'Education',
      courses: 'Courses',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
    },
    projects: { title: 'Projects', code: 'Code', demo: 'Live demo' },
    skills: { title: 'Skills' },
    contact: {
      title: 'Contact',
      label: "Let's talk",
      text: "I'm open to new opportunities and to good conversations about software.",
    },
    a11y: {
      menu: 'Open menu',
      toDark: 'Switch to dark theme',
      toLight: 'Switch to light theme',
      language: 'Language',
      skip: 'Skip to content',
    },
  },
}
