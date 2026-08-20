import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Termos de Uso | ${siteConfig.eventName}`,
  description:
    "Termos e condições gerais para acesso ao site, inscrição e participação na Masterclass AgroMinds Educação.",
};

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between font-sans">
      <Header />

      <main className="mx-auto w-full max-w-[1000px] px-6 py-12 md:px-10 md:py-16 flex-1">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900 transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar para a página inicial
        </Link>

        <article className="rounded-2xl border border-line bg-white p-8 md:p-12 shadow-sm">
          <header className="border-b border-line pb-8 mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-green-900 mb-3">
              Termos de Uso
            </h1>
            <p className="text-sm text-ink-soft">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </p>
          </header>

          <div className="space-y-8 text-ink-soft text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar o site da <strong>AgroMinds Educação</strong> ou realizar sua inscrição para a <strong>Masterclass {siteConfig.eventTitle}</strong>, você concorda em cumprir integralmente os presentes Termos de Uso e todas as leis e regulamentos aplicáveis. Caso você não concorde com qualquer disposição aqui contida, solicitamos que não prossiga com a compra ou navegação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">2. Descrição do Serviço e Evento</h2>
              <p className="mb-3">
                A AgroMinds Educação promove a <strong>Masterclass {siteConfig.eventTitle}</strong>, um evento educacional e estratégico {siteConfig.eventFormat}, agendado para o dia <strong>{siteConfig.eventDateLabel}</strong>, das <strong>{siteConfig.eventTimeLabel}</strong>.
              </p>
              <p>
                A inscrição garante acesso individual à transmissão ao vivo do evento e o recebimento do e-book oficial em formato digital.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">3. Inscrição, Pagamento e Processamento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>O processo de compra e pagamento é intermediado de forma segura através da plataforma <strong>Eduzz</strong>.</li>
                <li>A inscrição só é considerada válida e confirmada após a aprovação da transação bancária pela operadora ou instituição financeira.</li>
                <li>As instruções de acesso à transmissão online serão enviadas para o endereço de e-mail e/ou número de WhatsApp cadastrados no momento do checkout. É de inteira responsabilidade do participante fornecer dados corretos e atualizados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">4. Política de Cancelamento e Reembolso</h2>
              <p className="mb-3">
                Em conformidade com o Artigo 49 do Código de Defesa do Consumidor (CDC), o participante poderá solicitar o cancelamento da inscrição com reembolso integral do valor pago no prazo de até <strong>7 (sete) dias corridos</strong> a contar da data de confirmação da compra.
              </p>
              <p>
                As solicitações de reembolso devem ser efetuadas diretamente através do ambiente de suporte da Eduzz ou enviadas aos canais oficiais de atendimento da AgroMinds Educação antes da realização do evento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">5. Propriedade Intelectual e Uso do Material</h2>
              <p className="mb-3">
                Todo o conteúdo apresentado na Masterclass — incluindo apresentações, vídeos, materiais gráficos, marcas e o e-book oficial — é de propriedade exclusiva da <strong>AgroMinds Educação</strong> e de seus palestrantes e especialistas parceiros.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>É expressamente proibida a gravação, retransmissão, cópia, venda, distribuição ou reprodução pública não autorizada de qualquer trecho do evento ou material disponibilizado.</li>
                <li>O link de acesso ao evento e o e-book são de uso pessoal e intransferível.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">6. Conduta do Participante</h2>
              <p>
                Durante a transmissão ao vivo e nos ambientes de interação (chats ou fóruns), exige-se uma conduta respeitosa e ética. A AgroMinds Educação reserva-se o direito de remover ou restringir o acesso de participantes que manifestem linguagem ofensiva, discriminatória, difamatória ou que pratiquem spams e divulgações não autorizadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">7. Modificações de Cronograma e Força Maior</h2>
              <p>
                Em caso de imprevistos técnicos, motivos de força maior ou problemas de conexão por parte dos palestrantes, a AgroMinds Educação esforçar-se-á para reagendar o evento ou restabelecer a transmissão o mais rápido possível, notificando os participantes inscritos através dos canais de contato cadastrados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">8. Alterações nos Termos de Uso</h2>
              <p>
                Estes Termos de Uso podem ser alterados ou atualizados a qualquer momento. Quaisquer modificações entrarão em vigor imediatamente após a sua publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">9. Foro e Legislação Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro do domicílio do consumidor para dirimir eventuais controvérsias oriundas deste termo.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
