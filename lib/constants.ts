export const SITE = {
  name: "GNAVIDA",
  fullName: "GNAVIDA Gestão de Saúde Ocupacional",
  description:
    "Clínica de saúde ocupacional em Camaçari com exames, PGR, PCMSO, LTCAT, Laudo de Insalubridade, Risco Psicossocial e adequação à NR-1.",
  url: "https://www.gnavida.com.br",
  phone: "(71) 2141-8521",
  phone2: "(71) 3054-6422",
  whatsapp: "+5571985224584",
  whatsappDisplay: "(71) 98522-4584",
  whatsappLink: "https://wa.me/5571985224584",
  email: "comercialgna@gnavida.com",
  instagram: "@gnavidaocupacional",
  instagramUrl: "https://www.instagram.com/gnavidaocupacional",
  address: {
    street: "Avenida Eixo Urbano Central, 797",
    neighborhood: "Centro",
    city: "Camaçari",
    state: "BA",
    zip: "42800-057",
    full: "Av. Eixo Urbano Central, 797, Centro, Camaçari/BA, CEP 42800-057",
  },
  hours: {
    exams: {
      weekdays: "07:00 a 11:00",
      saturday: "07:00 a 10:00",
      sunday: "Closed",
    },
    admin: {
      weekdays: "07:00 a 16:00",
      saturday: "07:00 a 10:00",
      sunday: "Closed",
    },
  },
} as const;

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "NR-1", href: "#nr1" },
  { label: "Atendimento In Loco", href: "#inloco" },
  { label: "Contato", href: "#contato" },
] as const;

export const CLIENTS = ["Braskem", "White Martins", "Knauf", "Deten"] as const;

export const TRUST_METRICS = [
  { value: "48h", label: "Entrega do ASO" },
  { value: "100%", label: "Digital e integrado ao eSocial" },
  { value: "In loco", label: "Atendemos na sua empresa" },
] as const;

export const SERVICES = [
  {
    icon: "Stethoscope",
    title: "Exames Ocupacionais em Camaçari",
    description:
      "Realizamos todos os exames obrigatórios: admissional, periódico, demissional, retorno ao trabalho e mudança de função. ASO entregue em até 48 horas, integrado ao eSocial.",
  },
  {
    icon: "FileText",
    title: "PGR: Programa de Gerenciamento de Riscos",
    description:
      "Elaboração completa do PGR com visita técnica, mapeamento de riscos e entrega digital. Obrigatório para todas as empresas com funcionários CLT conforme NR-1.",
  },
  {
    icon: "ClipboardList",
    title: "PCMSO: Programa de Controle Médico",
    description:
      "Desenvolvimento do PCMSO conforme NR-7, com planejamento anual de exames, acompanhamento médico e relatório analítico.",
  },
  {
    icon: "Upload",
    title: "eSocial",
    description:
      "Envio correto e no prazo. Evite autuações automáticas do governo.",
  },
  {
    icon: "MapPin",
    title: "Atendimento in loco",
    description:
      "Levamos os exames até a sua empresa. Sem deslocamento, sem perda de produtividade.",
  },
  {
    icon: "Brain",
    title: "Medição de Risco Psicossocial",
    description:
      "Avaliação completa dos fatores psicossociais conforme exigência da nova NR-1. Um dos poucos serviços disponíveis em Camaçari, com relatório e plano de ação incluso.",
    badge: "NR-1 2026",
  },
  {
    icon: "FileSearch",
    title: "LTCAT",
    description:
      "Laudo Técnico das Condições Ambientais do Trabalho para identificação de agentes nocivos e aposentadoria especial.",
  },
  {
    icon: "ShieldAlert",
    title: "Laudo de Insalubridade",
    description:
      "Avaliação técnica das condições insalubres do ambiente de trabalho com emissão de laudo assinado por responsável técnico.",
  },
  {
    icon: "Zap",
    title: "Laudo de Periculosidade",
    description:
      "Identificação e caracterização de atividades perigosas com emissão de laudo técnico conforme NR-16.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    icon: "Layers",
    title: "Tudo em Um Só Lugar",
    description:
      "Exames + documentação SST + eSocial em uma única clínica. Sem terceiros, sem atrasos, sem retrabalho.",
  },
  {
    icon: "Timer",
    title: "ASO em até 48 Horas",
    description:
      "Resultado entregue em até 48 horas com integração automática ao eSocial. Seu RH não para.",
  },
  {
    icon: "Building2",
    title: "Atendimento In Loco",
    description:
      "Levamos a estrutura até a sua empresa. Todos os colaboradores examinados em um único dia, sem deslocamento.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Melhor Custo-Benefício",
    description:
      "Preço competitivo sem abrir mão da qualidade. Sem taxas escondidas, sem intermediários.",
  },
] as const;

export const IN_LOCO_STEPS = [
  "Você entra em contato e informa o número de colaboradores",
  "Agendamos uma data e levamos a estrutura até você",
  "Todos os ASOs entregues em até 48 horas com envio ao eSocial",
] as const;

export const IN_LOCO_STATS = [
  { value: "20+", label: "colaboradores mínimo recomendado" },
  { value: "1 dia", label: "para realizar todos os exames" },
  { value: "48h", label: "para receber os ASOs" },
  { value: "0km", label: "deslocamento para seus funcionários" },
] as const;

export const NR1_CHECKLIST = [
  "Medição de Risco Psicossocial",
  "Atualização do PGR conforme NR-1",
  "Treinamentos obrigatórios documentados",
  "Envio automático ao eSocial",
] as const;

export const CONTACT_EMPLOYEE_OPTIONS = [
  "10 a 20",
  "21 a 50",
  "51 a 100",
  "101 a 200",
  "200+",
] as const;

export const CONTACT_SERVICE_OPTIONS = [
  "Exames Ocupacionais",
  "PGR",
  "PCMSO",
  "LTCAT",
  "Laudo de Insalubridade",
  "Risco Psicossocial NR-1",
  "Pacote Completo SST",
] as const;

export const FAQ_ITEMS = [
  {
    question: "O que é PGR e minha empresa é obrigada a ter?",
    answer:
      "O PGR (Programa de Gerenciamento de Riscos) é obrigatório para todas as empresas com funcionários registrados, conforme a NR-1. Ele mapeia e classifica todos os riscos do ambiente de trabalho. A GNAVIDA elabora o PGR completo com visita técnica e entrega digital integrada ao eSocial.",
  },
  {
    question: "O que mudou com a nova NR-1 em 2026?",
    answer:
      "A partir de maio de 2026, a NR-1 passou a exigir a identificação, avaliação e gerenciamento dos riscos psicossociais no ambiente de trabalho. Empresas que não realizarem a medição estão sujeitas a multas que podem ultrapassar R$ 10.000. A GNAVIDA é uma das poucas clínicas de Camaçari habilitadas a realizar esse serviço.",
  },
  {
    question: "Quais empresas precisam fazer medição de risco psicossocial?",
    answer:
      "Todas as empresas com funcionários CLT precisam realizar a medição de risco psicossocial conforme a nova NR-1, independentemente do porte ou setor. A obrigatoriedade entrou em vigor em maio de 2026.",
  },
  {
    question: "Como funciona o atendimento in loco da GNAVIDA?",
    answer:
      "A GNAVIDA leva a estrutura de exames até a empresa do cliente. Todos os ASOs são realizados em um único dia, dentro da empresa, sem deslocamento dos colaboradores e sem filas. Ideal para empresas com 20 ou mais funcionários que não podem parar a operação.",
  },
  {
    question: "Qual o prazo de entrega do ASO na GNAVIDA?",
    answer:
      "A GNAVIDA entrega o ASO (Atestado de Saúde Ocupacional) em até 48 horas após a realização dos exames, com envio automático ao eSocial.",
  },
  {
    question: "A GNAVIDA atende empresas fora de Camaçari?",
    answer:
      "Sim. Além do atendimento presencial em Camaçari, a GNAVIDA atende empresas de todo o Brasil por meio do atendimento in loco e elaboração remota de PGR, PCMSO e LTCAT.",
  },
] as const;

// NAP data is intentionally formatted exactly as the JSON-LD values.
export const SCHEMA_NAP = {
  name: "GNAVIDA Gestão de Saúde Ocupacional",
  streetAddress: "Avenida Eixo Urbano Central, 797",
  addressLocality: "Camaçari",
  addressRegion: "BA",
  postalCode: "42800-057",
  addressCountry: "BR",
  telephone: ["+55-71-2141-8521", "+55-71-3054-6422"],
} as const;
