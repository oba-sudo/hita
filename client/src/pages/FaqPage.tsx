/**
 * FaqPage — よくある質問
 * デザイン方針: 開催概要と同じ白背景・黒文字・横罫線の編集レイアウトで、来場前の疑問を短く解消する。
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Info, Mail, MapPin, Plus, Ticket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";

const FAQ_CATEGORIES = ["すべて", "開催・天候", "アクセス・駐車場", "チケット", "会場内・ご利用"] as const;

type FaqCategory = (typeof FAQ_CATEGORIES)[number];
type FaqItem = {
  category: Exclude<FaqCategory, "すべて">;
  q: string;
  a: string;
};

const FAQS = [
  { category: "開催・天候", q: "開催期間を教えてください。", a: "2026年10月31日（土）から2027年1月31日（日）まで、全93日間の開催予定です。期間中は無休です。" },
  { category: "開催・天候", q: "会場時間と点灯時間は何時ですか？", a: "会場時間は17:00〜21:30、点灯時間は17:30〜21:30です。雨天決行です。" },
  { category: "開催・天候", q: "雨の日も開催しますか？", a: "雨天でも開催予定です。天候や安全上の理由により内容変更・中止となる場合は、公式サイトのお知らせでご案内します。" },
  { category: "開催・天候", q: "開催中止や変更の場合はどこで確認できますか？", a: "公式サイトのお知らせおよび公式Instagramでご案内します。" },
  { category: "アクセス・駐車場", q: "会場はどこですか？", a: "サッポロビール九州日田工場（〒877-0054 大分県日田市高瀬6979）です。" },
  { category: "アクセス・駐車場", q: "駐車場はありますか？", a: "会場併設の無料駐車場を150台ご用意しています。台数に限りがあるため、混雑時は時間に余裕をもってお越しください。" },
  { category: "アクセス・駐車場", q: "駐車料金はかかりますか？", a: "会場併設駐車場は無料です。" },
  { category: "アクセス・駐車場", q: "車で会場まで直接行くことはできますか？", a: "可能です。日田ICから約10分、会場併設駐車場をご利用いただけます。" },
  { category: "会場内・ご利用", q: "車椅子での入場は可能ですか？", a: "車椅子でご入場いただけます。会場内は概ね平坦ですが、一部に砂利道があります。" },
  { category: "会場内・ご利用", q: "ベビーカーでの入場は可能ですか？", a: "ベビーカーでご入場いただけます。会場内は概ね平坦ですが、一部に砂利道があります。" },
  { category: "会場内・ご利用", q: "再入場はできますか？", a: "入場後の再入場はできません。" },
  { category: "会場内・ご利用", q: "愛犬などのペットを連れて入場できますか？", a: "介助犬を除き、ペットのご入場はできません。" },
  { category: "会場内・ご利用", q: "会場内で写真や動画を撮影できますか？", a: "個人でお楽しみいただく範囲で撮影できます。三脚・一脚をご使用の際は、ほかのお客様のご迷惑とならないようご配慮ください。商用目的での撮影をご希望の場合は、事前にお問い合わせください。" },
  { category: "会場内・ご利用", q: "飲食できる場所はありますか？", a: "飲食は日田森のビール園のみでご利用いただけます。" },
  { category: "会場内・ご利用", q: "トイレはありますか？", a: "トイレは会場の外に設置しています。" },
  { category: "会場内・ご利用", q: "どのような服装がおすすめですか？", a: "屋外イベントのため、冬の夜間は冷え込みます。暖かい服装と、歩きやすい靴でのご来場をおすすめします。" },
  { category: "チケット", q: "入場料金を教えてください。", a: "大人（中学生以上）2,000円、子ども（1歳〜小学生）1,000円です。0歳のお子さまは無料です。" },
  { category: "チケット", q: "当日券は購入できますか？", a: "会場受付で購入できます。支払いは現金のみです。" },
  { category: "チケット", q: "WEBチケットはありますか？", a: "前売り券のみWEBチケットを販売します。楽天・KKDAYで購入でき、購入先は随時追加予定です。" },
  { category: "チケット", q: "前売りチケットはどこで購入できますか？", a: "楽天とKKDAYの購入ページを前売りチケット情報ページに掲載しています。その他の販売先は決定次第、順次公開します。当日券は会場受付で購入でき、お支払いは現金のみです。" },
] satisfies ReadonlyArray<FaqItem>;

export default function FaqPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("すべて");
  const visibleFaqs = activeCategory === "すべて" ? FAQS : FAQS.filter((item) => item.category === activeCategory);

  const selectCategory = (category: FaqCategory) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

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

            <div className="mb-10 border-y border-black/15 py-5 md:mb-14 md:py-6">
              <p className="mb-3 font-sans-jp text-xs font-bold tracking-[.14em] text-black/55">カテゴリから探す</p>
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0" aria-label="FAQカテゴリ">
                {FAQ_CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  const count = category === "すべて" ? FAQS.length : FAQS.filter((item) => item.category === category).length;
                  return (
                    <button
                      type="button"
                      key={category}
                      onClick={() => selectCategory(category)}
                      aria-pressed={isActive}
                      className={`shrink-0 border px-4 py-2.5 font-sans-jp text-sm font-bold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d72677] ${isActive ? "border-[#171717] bg-[#171717] text-white" : "border-black/20 bg-transparent text-black hover:border-[#d72677] hover:text-[#d72677]"}`}
                    >
                      {category}<span className={`ml-2 font-display text-[10px] ${isActive ? "text-white/60" : "text-black/40"}`}>{String(count).padStart(2, "0")}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-black/15" aria-live="polite">
              {visibleFaqs.map((item, index) => {
                const isOpen = openQuestion === item.q;
                const answerId = `faq-answer-${index + 1}`;

                return (
                <article key={item.q} className="border-b border-black/15">
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : item.q)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="grid w-full cursor-pointer gap-4 py-6 text-left outline-offset-4 transition-colors hover:text-[#d72677] focus-visible:outline-2 focus-visible:outline-[#d72677] md:grid-cols-[112px_1fr_30px] md:gap-10 md:py-8"
                  >
                    <span className="font-display text-xs tracking-[.18em] text-[#d72677] md:pt-1">Q {String(index + 1).padStart(2, "0")}</span>
                    <span className="font-sans-jp text-base font-bold leading-8 text-black md:text-lg">{item.q}</span>
                    <Plus size={22} strokeWidth={1.5} className={`hidden justify-self-end text-black transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)] md:mt-1 md:block ${isOpen ? "rotate-45 text-[#d72677]" : ""}`} aria-hidden="true" />
                    <Plus size={19} strokeWidth={1.5} className={`justify-self-end text-black transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)] md:hidden ${isOpen ? "rotate-45 text-[#d72677]" : ""}`} aria-hidden="true" />
                  </button>
                  <div id={answerId} role="region" aria-label={`${item.q}への回答`} className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(.23,1,.32,1)] motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-8 md:grid md:grid-cols-[112px_1fr] md:gap-10 md:pb-10">
                        <span className="hidden font-display text-xs tracking-[.18em] text-black/35 md:block">A</span>
                        <p className="font-sans-jp text-sm leading-8 text-black/65 md:text-base md:leading-8">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </article>
                );
              })}
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
