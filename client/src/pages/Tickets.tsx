/**
 * Tickets — チケット案内
 * デザイン方針: 白背景・黒文字・横罫線の料金表を中心に、販売条件を迷わず確認できる情報ページ。
 */
import { ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { TICKET_PURCHASE_OPTIONS, TICKET_SELLERS } from "@/data/renewalAssets";

export default function Tickets() {
  useSEO({
    title: "前売りチケット・入場料金 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026の前売りチケット、入場料金、当日券、取扱予定のチケット販売会社をご案内します。",
  });

  return (
    <PageLayout>
      <main className="relative overflow-hidden bg-[#fffefa] px-5 pb-20 pt-28 text-[#171717] md:px-8 md:pb-44 md:pt-44">
        <div className="pointer-events-none absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-[#f5c95d]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-[#55d9ff]/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-[1240px]">
          <header className="mb-12 text-center md:mb-24">
            <p className="font-display text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-none tracking-[-.045em] text-black">ADVANCE TICKET</p>
            <p className="mt-4 font-sans-jp text-sm font-bold tracking-[.2em] text-black/70">前売りチケット情報・料金</p>
            <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-[#F43F8E] via-[#F5C95D] to-[#55D9FF]" />
          </header>

          <section aria-labelledby="admission-title">
            <div className="flex items-baseline gap-4 border-b border-black/15 pb-5">
              <h1 id="admission-title" className="font-sans-jp text-xl font-bold tracking-[.08em] text-black md:text-2xl">入場料金</h1>
              <span className="font-display text-[10px] tracking-[.2em] text-black/40">ADMISSION</span>
            </div>

            <div className="mt-7 grid gap-3 md:hidden">
              <div className="border border-black/15 bg-white px-5 py-5">
                <p className="font-sans-jp text-sm font-bold text-black">大人（中学生以上）</p>
                <p className="mt-2 font-display text-4xl text-black">¥2,000</p>
                <p className="mt-3 font-sans-jp text-xs leading-6 text-black/58">入場当日にご利用いただけます。</p>
              </div>
              <div className="border border-black/15 bg-white px-5 py-5">
                <p className="font-sans-jp text-sm font-bold text-black">子ども（1歳〜小学生）</p>
                <p className="mt-2 font-display text-4xl text-black">¥1,000</p>
                <p className="mt-3 font-sans-jp text-xs leading-6 text-black/58">0歳のお子さまは無料です。</p>
              </div>
            </div>
            <div className="mt-8 hidden overflow-x-auto border-t border-black/15 md:block">
              <table className="min-w-[620px] w-full border-collapse text-left">
                <thead className="border-b border-black/15 bg-[#ded5b5]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-sans-jp text-sm font-bold text-black md:px-7">対象</th>
                    <th scope="col" className="border-l border-white/60 px-5 py-4 font-sans-jp text-sm font-bold text-black md:px-7">入場料金（税込）</th>
                    <th scope="col" className="border-l border-white/60 px-5 py-4 font-sans-jp text-sm font-bold text-black md:px-7">備考</th>
                  </tr>
                </thead>
                <tbody className="font-sans-jp">
                  <tr className="border-b border-black/15">
                    <th scope="row" className="px-5 py-6 text-base font-bold text-black md:px-7 md:text-lg">大人（中学生以上）</th>
                    <td className="border-l border-black/10 px-5 py-6 font-display text-3xl text-black md:px-7 md:text-4xl">¥2,000</td>
                    <td className="border-l border-black/10 px-5 py-6 text-sm leading-7 text-black/60 md:px-7">入場当日にご利用いただけます。</td>
                  </tr>
                  <tr className="border-b border-black/15">
                    <th scope="row" className="px-5 py-6 text-base font-bold text-black md:px-7 md:text-lg">子ども（1歳〜小学生）</th>
                    <td className="border-l border-black/10 px-5 py-6 font-display text-3xl text-black md:px-7 md:text-4xl">¥1,000</td>
                    <td className="border-l border-black/10 px-5 py-6 text-sm leading-7 text-black/60 md:px-7">0歳のお子さまは無料です。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-sans-jp text-xs leading-6 text-black/55">料金・販売条件は変更になる場合があります。最新情報は本サイトでご確認ください。</p>
          </section>

          <section className="mt-14 md:mt-28" aria-labelledby="same-day-title">
            <div className="flex items-baseline gap-4 border-b border-black/15 pb-5">
              <h2 id="same-day-title" className="font-sans-jp text-xl font-bold tracking-[.08em] text-black md:text-2xl">当日券について</h2>
              <span className="font-display text-[10px] tracking-[.2em] text-black/40">SAME-DAY TICKET</span>
            </div>
            <div className="grid gap-4 border-b border-black/15 py-7 md:grid-cols-[200px_1fr] md:gap-10 md:py-10">
              <p className="font-sans-jp text-sm font-bold tracking-[.08em] text-black">購入場所</p>
              <div>
                <p className="font-serif-jp text-2xl font-semibold leading-relaxed text-black md:text-3xl">会場受付で購入できます</p>
                <p className="mt-3 font-sans-jp text-sm leading-7 text-black/62 md:text-base">お支払いは現金のみです。ご来場当日に受付へお越しください。</p>
              </div>
            </div>
          </section>

          <section className="mt-14 md:mt-28" aria-labelledby="sales-title">
            <div className="flex items-baseline gap-4 border-b border-black/15 pb-5">
              <h2 id="sales-title" className="font-sans-jp text-xl font-bold tracking-[.08em] text-black md:text-2xl">前売りチケット販売について</h2>
              <span className="font-display text-[10px] tracking-[.2em] text-black/40">ADVANCE TICKETS</span>
            </div>

            <div className="grid gap-4 border-b border-black/15 py-7 md:grid-cols-[200px_1fr] md:gap-10 md:py-10">
              <p className="font-sans-jp text-sm font-bold tracking-[.08em] text-black">購入ページ</p>
              <div>
                <p className="font-serif-jp text-2xl font-semibold leading-relaxed text-black md:text-3xl">前売りチケットを購入する</p>
                <p className="mt-3 font-sans-jp text-sm leading-7 text-black/62 md:text-base">販売開始済みの購入ページを掲載しています。その他の販売先は順次公開します。取扱開始時期や販売内容は会社ごとに異なる場合があります。</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {TICKET_PURCHASE_OPTIONS.map((seller) => (
                    <a key={seller.name} href={seller.href} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[72px] items-center gap-3 bg-[#171717] p-3 font-sans-jp text-white transition-colors active:scale-[.99] hover:bg-[#d72677]">
                      <span className="grid h-11 w-16 shrink-0 place-items-center bg-white p-1.5">
                        {seller.logo && <img src={seller.logo} alt={seller.logoAlt ?? seller.name} className={`max-h-full max-w-full object-contain ${seller.name === "KKDAY" ? "h-9 w-9" : "w-full"}`} />}
                      </span>
                      <span className="min-w-0 flex-1 text-left">
                        <span className="block text-[10px] font-medium tracking-[.08em] text-white/55">ADVANCE TICKETS</span>
                        <span className="mt-1 block text-sm font-bold">{seller.name}で購入する</span>
                      </span>
                      <ExternalLink size={16} className="shrink-0 text-white/65 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-black/15">
              <p className="py-5 font-sans-jp text-sm font-bold tracking-[.08em] text-black">前売りチケット取扱予定の販売会社</p>
              <div className="grid md:grid-cols-3">
                {TICKET_SELLERS.map((seller, index) => (
                  <div key={seller.name} className="flex min-h-[82px] items-center gap-4 border-b border-black/15 py-5 md:border-r md:px-6 md:[&:nth-child(3n)]:border-r-0">
                    <span className="font-display text-[10px] tracking-[.15em] text-[#d72677]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-sans-jp text-sm font-medium leading-6 text-black">{seller.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
