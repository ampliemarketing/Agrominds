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
    { name: "Anderson", region: "Região Norte", slug: "anderson" },
    { name: "Rodrigo Rossato", region: "Região Sul", slug: "rodrigo-rossato" },
    { name: "Fabrício", region: "Centro-Oeste", slug: "fabricio" },
  ],

  social: {
    instagram: "#",
    site: "#",
    whatsapp: "#",
  },
} as const;
