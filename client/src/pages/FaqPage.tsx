/**
 * FaqPage — よくある質問
 * デザイン方針: 開催概要と同じ白背景・黒文字・横罫線の編集レイアウトで、来場前の疑問を短く解消する。
 */
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Info, Mail, MapPin, Ticket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";

const FAQS = [
  { q: "開催期間を教えてください。", a: "2026年10月31日（土）から2027年1月31日（日）まで、全93日間の開催予定です。期間中は無休です。" },
  { q: "会場時間と点灯時間は何時ですか？", a: "会場時間・点灯時間ともに17:00〜21:30です。雨天決行です。" },
  { q: "雨の日も開催しますか？", a: "雨天でも開催予定です。天候や安全上の理由により内容変更・中止となる場合は、公式サイトのお知らせでご案内します。" },
  { q: "会場はどこですか？", a: "サッポロビール九州日田工場（〒877-0054 大分県日田市高瀬6979）です。" },
  { q: "駐車場はありますか？", a: "会場併設の無料駐車場を150台分ご用意する予定です。台数には限りがあるため、混雑時は時間に余裕をもってお越しください。" },
  { q: "入場料金を教えてください。", a: "大人（中学生以上）2,000円、子ども（1歳〜小学生）1,000円です。0歳のお子さまは無料です。" },
  { q: "前売りチケットはどこで購入できますか？", a: "楽天とKKDAYの購入ページを前売りチケット情報ページに掲載しています。その他の販売先は決定次第、順次公開します。当日券は会場受付で購入でき、お支払いは現金のみです。" },
];

export default function FaqPage() {
  useSEO({
    title: "よくある質問 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026の開催時間、雨天時、料金、チケット、駐車場、アクセスに関するよくある質問をご案内します。",
  });

  return (
    <PageLayout>
      <main className="relative overflow-hidden bg-[#fffefa] text-[#171717]">
        <div className="pointer-events-none absolute right-[-8%] top-32 h-80 w-80 rounded-full bg-[#55d9ff]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute left-[-12%] top-[54rem] h-80 w-80 rounded-full bg-[#f5c95d]/[0.08] blur-3xl" />

        <section className="relative px-5 pb-24 pt-32 md:px-8 md:pb-36 md:pt-44">
          <div className="mx-auto max-w-[1240px]">
            <header className="mb-16 text-center md:mb-24">
              <p className="font-display text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-none tracking-[-.045em] text-black">FAQ</p>
              <p className="mt-4 font-sans-jp text-sm font-bold tracking-[.2em] text-black/70">よくある質問</p>
              <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-[#F43F8E] via-[#F5C95D] to-[#55D9FF]" />
              <p className="mx-auto mt-7 max-w-xl font-sans-jp text-sm leading-7 text-black/58">開催時間、前売りチケット、駐車場など、ご来場前に知りたい情報をまとめています。</p>
            </header>

            <div className="border-t border-black/15">
              {FAQS.map((item, index) => (
                <details key={item.q} className="group border-b border-black/15">
                  <summary className="grid cursor-pointer list-none gap-4 py-6 md:grid-cols-[112px_1fr_30px] md:gap-10 md:py-8">
                    <span className="font-display text-xs tracking-[.18em] text-[#d72677] md:pt-1">Q {String(index + 1).padStart(2, "0")}</span>
                    <span className="font-sans-jp text-base font-bold leading-8 text-black md:text-lg">{item.q}</span>
                    <span className="relative hidden h-6 w-6 md:mt-1 md:block before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black after:absolute after:left-1/2 after:top-1/2 after:h-5 after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black after:transition-transform group-open:after:rotate-90" />
                    <span className="relative h-5 w-5 md:hidden before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:bg-black after:absolute after:left-2 after:top-0 after:h-4 after:w-px after:bg-black after:transition-transform group-open:after:rotate-90" />
                  </summary>
                  <div className="pb-8 md:grid md:grid-cols-[112px_1fr] md:gap-10 md:pb-10">
                    <span className="hidden font-display text-xs tracking-[.18em] text-black/35 md:block">A</span>
                    <p className="font-sans-jp text-sm leading-8 text-black/65 md:text-base md:leading-8">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-3 bg-[#f3f1eb] px-5 py-5 md:px-7">
                <Info size={18} className="mt-1 shrink-0 text-[#d72677]" />
                <p className="font-sans-jp text-xs leading-6 text-black/62 md:text-sm">掲載内容は最新の決定情報に基づいています。変更がある場合は、公式サイトのお知らせおよび公式Instagramでご案内します。</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:flex">
                <Link href="/tickets" className="inline-flex items-center justify-center gap-2 bg-[#171717] px-5 py-4 font-sans-jp text-sm font-bold text-white transition-colors hover:bg-[#d72677]">
                  <Ticket size={15} /> 前売りチケット
                </Link>
                <Link href="/access" className="inline-flex items-center justify-center gap-2 border border-black/20 px-5 py-4 font-sans-jp text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white">
                  <MapPin size={15} /> アクセス
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-black/20 px-5 py-4 font-sans-jp text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white">
                  <Mail size={15} /> お問い合わせ
                </Link>
              </div>
            </div>

            <a href="https://www.instagram.com/hita_illuminage/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-sans-jp text-sm font-bold text-black underline decoration-black/30 underline-offset-4 transition-colors hover:text-[#d72677]">
              公式Instagramで最新情報を見る <ExternalLink size={14} /><ArrowRight size={14} />
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
