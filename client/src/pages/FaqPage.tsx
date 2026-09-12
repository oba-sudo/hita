/**
 * FaqPage — よくある質問
 * デザイン方針: 来場前の不安を短い回答で解消し、チケット・アクセスへ迷わず進める情報設計。
 */
import { Link } from "wouter";
import { ArrowRight, CircleHelp, Mail, MapPin, Ticket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const FAQS = [
  { q: "開催期間を教えてください。", a: "2026年10月31日（土）から2027年1月31日（日）まで、全93日間の開催予定です。" },
  { q: "開催時間と最終受付は何時ですか？", a: "開催時間は17:30〜21:30、最終受付は21:00です。時間には余裕をもってご来場ください。" },
  { q: "雨の日も開催しますか？", a: "雨天でも開催予定です。天候や安全上の理由により内容変更・中止となる場合は、公式サイトのお知らせでご案内します。" },
  { q: "会場はどこですか？", a: "サッポロビール九州日田工場（〒877-0054 大分県日田市高瀬6979）です。" },
  { q: "駐車場はありますか？", a: "会場併設の無料駐車場を150台分ご用意する予定です。台数には限りがあるため、混雑時は時間に余裕をもってお越しください。" },
  { q: "入場料金を教えてください。", a: "大人（中学生以上）2,000円、子ども（1歳〜小学生）1,000円です。0歳のお子さまは無料です。" },
  { q: "チケットはどこで購入できますか？", a: "アソビュー、楽天、トリップドットコムを含む各チケット販売会社での取扱いを予定しています。購入URLは決定次第、チケットページで公開します。" },
  { q: "WEBチケットの100円OFF特典とは何ですか？", a: "進撃の巨人ミュージアム、進撃の巨人カフェ 日田店、日田森のビール園をご利用の方が対象です。QRから割引チケットを取得し、入場時にご提示ください。" },
];

export default function FaqPage() {
  useSEO({
    title: "よくある質問 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026の開催時間、雨天時、料金、チケット、駐車場、アクセスに関するよくある質問をご案内します。",
  });

  return (
    <PageLayout>
      <PageHero en="FREQUENTLY ASKED QUESTIONS" ja="ご来場前の、よくある質問。" sub="開催時間、チケット、駐車場など、ご来場前に知りたい情報をまとめています。" bgImage={RENEWAL_ASSETS.kidsTwo} />

      <section className="relative overflow-hidden bg-[#030513] px-5 py-20 md:px-8 md:py-32">
        <div className="light-stream right-0 top-0 w-[66%]" />
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.42fr_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-2 text-[#F43F8E]"><CircleHelp size={18} /><span className="font-display text-[10px] tracking-[.26em]">BEFORE YOUR VISIT</span></div>
            <h2 className="mt-4 font-serif-jp text-3xl font-semibold leading-tight md:text-4xl">知っておくと、<br />夜がもっと楽しくなる。</h2>
            <p className="mt-5 font-sans-jp text-sm leading-8 text-white/52">掲載内容は最新の決定情報に基づいています。運営上の変更がある場合は、公式サイトのお知らせでご案内します。</p>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/tickets" className="inline-flex items-center gap-2 font-sans-jp text-sm text-[#FF9CC8]">チケット情報 <Ticket size={14} /></Link>
              <Link href="/access" className="inline-flex items-center gap-2 font-sans-jp text-sm text-[#9CEBFF]">アクセス情報 <MapPin size={14} /></Link>
            </div>
          </div>

          <div className="border-t border-white/10">
            {FAQS.map((item, index) => (
              <details key={item.q} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-6 font-sans-jp text-sm font-medium leading-7 text-white md:py-7 md:text-base">
                  <span className="constellation-number mt-0.5 shrink-0 font-display text-xs">Q{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{item.q}</span>
                  <span className="relative mt-2 h-3 w-3 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:bg-[#F43F8E] after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:bg-[#F43F8E] after:transition-transform group-open:after:rotate-90" />
                </summary>
                <div className="pb-7 pl-[3.25rem] pr-6 font-sans-jp text-sm leading-8 text-white/55">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cosmos-surface px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1080px] flex-col items-start justify-between gap-7 border-l border-[#55D9FF]/50 pl-6 md:flex-row md:items-center md:pl-9">
          <div>
            <p className="font-display text-[10px] tracking-[.26em] text-[#55D9FF]">STILL NEED HELP?</p>
            <h2 className="mt-2 font-serif-jp text-2xl font-semibold md:text-3xl">解決しない場合はお問い合わせください。</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-sans-jp text-sm text-white"><Mail size={15} /> お問い合わせ <ArrowRight size={14} /></Link>
        </div>
      </section>
    </PageLayout>
  );
}
