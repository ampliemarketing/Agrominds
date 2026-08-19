/**
 * IDs de analytics lidos das variáveis de ambiente públicas.
 * Sem "use client": pode ser importado tanto por Server Components (ex: os
 * scripts do <head>) quanto por Client Components, sem virar uma referência
 * opaca do React Server Components.
 */
function readPublicEnv(value: string | undefined): string {
  return typeof value === "string" ? value : "";
}

export const GTM_ID = readPublicEnv(process.env.NEXT_PUBLIC_GTM_ID);
export const GA4_ID = readPublicEnv(process.env.NEXT_PUBLIC_GA4_ID);
export const META_PIXEL_ID = readPublicEnv(process.env.NEXT_PUBLIC_META_PIXEL_ID);
