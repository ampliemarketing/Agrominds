import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${siteConfig.eventName}`,
  description:
    "Saiba como a AgroMinds Educação coleta, utiliza e protege seus dados pessoais de acordo com a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="text-sm text-ink-soft">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </p>
          </header>

          <div className="space-y-8 text-ink-soft text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">1. Introdução</h2>
              <p>
                A <strong>AgroMinds Educação</strong> compromete-se a resguardar a sua privacidade e a proteger os seus dados pessoais.
                Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as informações fornecidas por você ao se inscrever na <strong>Masterclass {siteConfig.eventTitle}</strong> ou navegar em nosso site, em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">2. Dados Pessoais Coletados</h2>
              <p className="mb-3">
                Podemos coletar e processar os seguintes dados pessoais fornecidos diretamente por você ou coletados automaticamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informações de Cadastro e Inscrição:</strong> Nome completo, endereço de e-mail, número de telefone/WhatsApp e CPF.</li>
                <li><strong>Dados de Pagamento:</strong> Processados de forma 100% segura diretamente por meio da plataforma de pagamento parceira (Eduzz). Não armazenamos seus dados bancários ou número de cartão de crédito em nossos servidores.</li>
                <li><strong>Dados de Navegação e Dispositivo:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas e horários de acesso via cookies e ferramentas de analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">3. Finalidade do Tratamento dos Dados</h2>
              <p className="mb-3">Seus dados pessoais são utilizados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar e gerenciar sua inscrição na Masterclass;</li>
                <li>Enviar orientações de acesso à transmissão online e disponibilizar o e-book oficial;</li>
                <li>Enviar comunicações sobre o evento (lembretes, avisos de início e atualizações de cronograma);</li>
                <li>Prestar suporte ao participante e responder a dúvidas ou solicitações;</li>
                <li>Aprimorar a experiência de navegação em nosso site e medir o desempenho de campanhas de divulgação.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">4. Compartilhamento de Dados</h2>
              <p className="mb-3">
                Não vendemos nem alugamos seus dados pessoais. O compartilhamento ocorre estritamente quando necessário para a prestação dos serviços contratados, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Plataformas de Checkout e Transmissão:</strong> Eduzz e serviços parceiros responsáveis pelo processamento de pagamento e entrega dos ingressos digitais.</li>
                <li><strong>Ferramentas de Análise e Marketing:</strong> Provedores como Google Analytics e Meta Pixel para avaliação de métricas de uso e tráfego.</li>
                <li><strong>Cumprimento Legal:</strong> Autoridades judiciais ou governamentais, caso exigido por lei ou ordem judicial.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">5. Armazenamento e Segurança da Informação</h2>
              <p>
                Adotamos medidas técnicas e administrativas aptas a proteger seus dados pessoais contra acessos não autorizados, perdas, alterações ou qualquer forma de tratamento inadequado ou ilícito. O acesso aos seus dados é restrito a profissionais autorizados sujeitos ao dever de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">6. Seus Direitos como Titular dos Dados (LGPD)</h2>
              <p className="mb-3">Você possui os seguintes direitos garantidos pela LGPD:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência do tratamento de seus dados pessoais;</li>
                <li>Solicitar o acesso, correção ou atualização de dados incompletos ou inexatos;</li>
                <li>Solicitar a eliminação dos seus dados tratados com base no seu consentimento;</li>
                <li>Revogar o consentimento para o recebimento de comunicações de marketing a qualquer momento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">7. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies para melhorar a navegação, analisar o tráfego do site e personalizar anúncios. Você pode configurar seu navegador para recusar cookies, porém algumas funcionalidades do site podem ser afetadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">8. Alterações nesta Política</h2>
              <p>
                Esta Política de Privacidade poderá ser atualizada periodicamente para refletir melhorias em nossos processos ou alterações regulatórias. Recomendamos a consulta frequente desta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink mb-3 font-serif">9. Contato do Encarregado (DPO)</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou para exercer seus direitos como titular de dados, entre em contato conosco através dos canais oficiais de atendimento da <strong>AgroMinds Educação</strong>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
