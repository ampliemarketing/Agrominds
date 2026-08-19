/**
 * Fonte única de verdade para dados do evento e destino de checkout.
 * Atualize aqui quando o preço oficial e o link da Eduzz forem definidos.
 */
export const siteConfig = {
  eventName: "Masterclass AgroMinds Educação",
  eventTitle: "El Niño 2026/2027",
  eventTitleLine1: "El Niño",
  eventTitleLine2: "2026/2027",
  eventSubtitle:
    "Estratégias de manejo para enfrentar os desafios da próxima safra",
  eventDateLabel: "15 de setembro de 2026",
  eventDateShort: "15 de setembro",
  eventTimeLabel: "19h às 22h",
  eventTimezone: "Horário de Brasília",
  eventFormat: "100% online e ao vivo",
  eventISODate: "2026-09-15T19:00:00-03:00",

  // TODO: substituir pelo link real do checkout da Eduzz quando disponível.
  checkoutUrl: "https://sun.eduzz.com/CHECKOUT_ID_A_DEFINIR",

  // TODO: preço oficial da inscrição — não exibir valor até ser definido.
  priceLabel: "[Valor da inscrição a definir]",

  specialists: [
    {
      name: "Anderson Rossatto",
      region: "Região Norte",
      slug: "anderson-rossatto",
      photo: "/images/anderson-rossatto.jpg",
      bio: "Engenheiro agrônomo, com 13 anos de experiência, comunicador e influenciador do agro, com forte atuação em Roraima. Une experiência no campo, mercado e comunicação para valorizar e fortalecer o agronegócio na região Norte.",
    },
    {
      name: "Rodrigo Rossato",
      region: "Região Sul",
      slug: "rodrigo-rossato",
      photo: "/images/rodrigo-rossato.jpg",
      bio: "Diretor Técnico da AgroPrecision, engenheiro agrônomo, mestre em Ciência do Solo pela UFSM e especialista em agricultura de precisão. Atua no agronegócio no Rio Grande do Sul, especialmente com manejo de solo, tecnologia e agricultura de precisão. 20 anos na área de fertilidade do solo e agricultura de precisão.",
    },
    {
      name: "Fabrício Andrade",
      region: "Centro-Oeste",
      slug: "fabricio-andrade",
      photo: "/images/fabricio-andrade.jpg",
      bio: "Engenheiro agrônomo com 20 anos na área, consultor e produtor rural, ligado à Agro7 Consultoria e Gestão Rural, em Minas Gerais. Atua principalmente com gestão de propriedades, manejo de grandes culturas e produção de grãos, com destaque para milho.",
    },
  ],

  social: {
    instagram: "#",
    site: "#",
    whatsapp: "#",
  },
} as const;
