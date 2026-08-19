"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

/** Envia um evento para o dataLayer (GTM/GA4). Não faz nada se o GTM não estiver carregado. */
export function pushDataLayerEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}

/** Dispara um evento de conversão no Meta Pixel, se disponível. */
export function trackMetaPixelEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, payload);
}

/**
 * Rastreia o clique em um CTA de inscrição antes de redirecionar para o checkout da Eduzz.
 * ctaLocation identifica em qual seção da página o botão foi clicado (ex: "hero", "conversion-block").
 */
export function trackCtaClick(ctaLocation: string) {
  pushDataLayerEvent("cta_click", { cta_location: ctaLocation });
  pushDataLayerEvent("generate_lead", { cta_location: ctaLocation });
  trackMetaPixelEvent("Lead", { content_name: ctaLocation });
}

/** Anexa os parâmetros UTM da URL atual ao destino de checkout, para preservar a atribuição. */
export function appendUtmParams(destinationUrl: string): string {
  if (typeof window === "undefined") return destinationUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  const utmParams = new URLSearchParams();
  utmKeys.forEach((key) => {
    const value = currentParams.get(key);
    if (value) utmParams.set(key, value);
  });

  if ([...utmParams].length === 0) return destinationUrl;

  const separator = destinationUrl.includes("?") ? "&" : "?";
  return `${destinationUrl}${separator}${utmParams.toString()}`;
}
