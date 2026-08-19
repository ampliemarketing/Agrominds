# AgroMinds Educação — Masterclass El Niño 2026/2027

Landing page de vendas para a Masterclass **"El Niño 2026/2027: Estratégias de manejo para enfrentar os desafios da próxima safra"**, da AgroMinds Educação.

Construída em **Next.js + TypeScript + Tailwind CSS + Framer Motion**, com componentes de CTA reutilizáveis, animações de entrada por seção e integração pronta para os pixels de rastreamento (GTM, GA4, Meta Pixel).

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # checagem de lint
```

## Estrutura do projeto

```
src/
  app/
    layout.tsx       # fontes, metadados de SEO/OG e scripts de analytics
    page.tsx          # monta todas as seções da landing page
    globals.css        # tokens de cor e tipografia (Tailwind v4)
  components/
    layout/            # Header e Footer
    sections/           # uma seção da página por arquivo (Hero, FAQ, etc.)
    ui/                 # componentes reutilizáveis (CtaButton, VideoPlayer, AnimatedSection)
    AnalyticsScripts.tsx # injeta GTM / GA4 / Meta Pixel quando configurados
  lib/
    site-config.ts      # dados do evento, preço e link de checkout — edite aqui
    analytics.ts         # helpers de rastreamento (clique em CTA, UTMs)
    analytics-env.ts       # leitura das variáveis de ambiente de analytics
public/
  images/                # logo e fotografias usadas na página
```

## O que ainda precisa ser preenchido

Estas informações não foram fornecidas no briefing e estão sinalizadas no código com comentários `TODO` ou textos entre colchetes na própria página:

| O que falta | Onde editar |
|---|---|
| Link do checkout da Eduzz | `src/lib/site-config.ts` → `checkoutUrl` |
| Preço oficial da inscrição | `src/lib/site-config.ts` → `priceLabel` |
| Mini currículo dos 3 especialistas | `src/components/sections/Specialists.tsx` |
| Vídeo de apresentação do Anderson | `src/components/sections/Hero.tsx` (prop `videoUrl` do `VideoPlayer`) |
| Resposta da FAQ "Preciso instalar algum programa?" | `src/components/sections/Faq.tsx` |

## Configurando o rastreamento (analytics)

Copie `.env.example` para `.env.local` e preencha os IDs quando estiverem disponíveis. Nenhum script de rastreamento é carregado enquanto as variáveis estiverem vazias.

```
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Todos os botões de inscrição usam o componente `CtaButton`, que já dispara automaticamente:
- evento `cta_click` e `generate_lead` no dataLayer (GTM/GA4);
- evento `Lead` no Meta Pixel;
- encaminhamento dos parâmetros UTM da URL atual para o link de checkout.

## Deploy

O projeto está pronto para deploy em qualquer plataforma compatível com Next.js (ex: [Vercel](https://vercel.com)). Basta configurar as variáveis de ambiente de analytics na plataforma escolhida antes de publicar.
