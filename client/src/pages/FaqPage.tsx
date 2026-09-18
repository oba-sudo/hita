/**
 * FaqPage — よくある質問
 * デザイン方針: 開催概要と同じ白背景・黒文字・横罫線の編集レイアウトで、来場前の疑問を短く解消する。
 */
import { type ReactNode, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Info, Mail, MapPin, Plus, Search, ThumbsDown, ThumbsUp, Ticket, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { TICKET_PURCHASE_OPTIONS } from "@/data/renewalAssets";

const FAQ_CATEGORIES = ["すべて", "開催・天候", "アクセス・駐車場", "チケット", "会場内・ご利用"] as const;

type FaqCategory = (typeof FAQ_CATEGORIES)[number];
type FaqItem = {
  category: Exclude<FaqCategory, "すべて">;
  q: string;
  a: ReactNode;
  keywords: string;
};

const INSTAGRAM_URL = "https://www.instagram.com/hita_illuminage/";
const RAKUTEN_URL = TICKET_PURCHASE_OPTIONS[0].href;
const KKDAY_URL = TICKET_PURCHASE_OPTIONS[1].href;

function ExternalTextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-black underline decoration-black/30 underline-offset-4 transition-colors hover:text-[#d72677] hover:decoration-[#d72677]">
      {children}<ExternalLink size={13} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

function normalizeSearchText(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase("ja-JP").trim();
}

const FAQS = [
  { category: "開催・天候", q: "開催期間を教えてください。", a: "2026年10月31日（土）から2027年1月31日（日）まで、全93日間の開催予定です。期間中は無休です。", keywords: "日程 開催日 期間 93日 無休 10月 1月" },
  { category: "開催・天候", q: "会場時間と点灯時間は何時ですか？", a: "会場時間は17:00〜21:30、点灯時間は17:30〜21:30です。雨天決行です。", keywords: "時間 営業時間 点灯 最終入場 17時 21時30分" },
  { category: "開催・天候", q: "雨の日も開催しますか？", a: "雨天でも開催予定です。天候や安全上の理由により内容変更・中止となる場合は、公式サイトのお知らせでご案内します。", keywords: "雨天 雨 悪天候 雪 風 中止" },
  { category: "開催・天候", q: "開催中止や変更の場合はどこで確認できますか？", a: <>公式サイトのお知らせおよび<ExternalTextLink href={INSTAGRAM_URL}>公式Instagram</ExternalTextLink>でご案内します。</>, keywords: "中止 変更 お知らせ インスタ instagram 最新情報" },
  { category: "アクセス・駐車場", q: "会場はどこですか？", a: "サッポロビール九州日田工場（〒877-0054 大分県日田市高瀬6979）です。", keywords: "場所 住所 会場 工場 高瀬6979 サッポロビール" },
  { category: "アクセス・駐車場", q: "駐車場はありますか？", a: "会場併設の無料駐車場を150台ご用意しています。台数に限りがあるため、混雑時は時間に余裕をもってお越しください。", keywords: "車 駐車 150台 無料 混雑" },
  { category: "アクセス・駐車場", q: "駐車料金はかかりますか？", a: "会場併設駐車場は無料です。", keywords: "車 駐車 無料 料金" },
  { category: "アクセス・駐車場", q: "車で会場まで直接行くことはできますか？", a: "可能です。日田ICから約10分、会場併設駐車場をご利用いただけます。", keywords: "車 自動車 日田IC インター 高速道路 直接" },
  { category: "会場内・ご利用", q: "車椅子での入場は可能ですか？", a: "車椅子でご入場いただけます。会場内は概ね平坦ですが、一部に砂利道があります。", keywords: "バリアフリー 車いす 車椅子 砂利" },
  { category: "会場内・ご利用", q: "ベビーカーでの入場は可能ですか？", a: "ベビーカーでご入場いただけます。会場内は概ね平坦ですが、一部に砂利道があります。", keywords: "子ども 赤ちゃん バギー 砂利" },
  { category: "会場内・ご利用", q: "再入場はできますか？", a: "入場後の再入場はできません。", keywords: "再入場 入り直し 退場" },
  { category: "会場内・ご利用", q: "愛犬などのペットを連れて入場できますか？", a: "介助犬を除き、ペットのご入場はできません。", keywords: "犬 愛犬 動物 介助犬 ペット同伴" },
  { category: "会場内・ご利用", q: "会場内で写真や動画を撮影できますか？", a: "個人でお楽しみいただく範囲で撮影できます。三脚・一脚をご使用の際は、ほかのお客様のご迷惑とならないようご配慮ください。商用目的での撮影をご希望の場合は、事前にお問い合わせください。", keywords: "撮影 写真 動画 三脚 一脚 カメラ 商用" },
  { category: "会場内・ご利用", q: "飲食できる場所はありますか？", a: "飲食は日田森のビール園のみでご利用いただけます。", keywords: "食事 レストラン 飲食 ビール園" },
  { category: "会場内・ご利用", q: "トイレはありますか？", a: "トイレは会場の外に設置しています。", keywords: "お手洗い 化粧室" },
  { category: "会場内・ご利用", q: "どのような服装がおすすめですか？", a: "屋外イベントのため、冬の夜間は冷え込みます。暖かい服装と、歩きやすい靴でのご来場をおすすめします。", keywords: "服装 防寒 寒さ 冬 靴" },
  { category: "チケット", q: "入場料金を教えてください。", a: "大人（中学生以上）2,000円、子ども（1歳〜小学生）1,000円です。0歳のお子さまは無料です。", keywords: "価格 値段 大人 子ども 幼児 0歳 2000円 1000円" },
  { category: "チケット", q: "当日券は購入できますか？", a: "会場受付で購入できます。支払いは現金のみです。", keywords: "当日 会場 受付 現金 支払い" },
  { category: "チケット", q: "WEBチケットはありますか？", a: <>前売り券のみWEBチケットを販売します。<ExternalTextLink href={RAKUTEN_URL}>楽天</ExternalTextLink>・<ExternalTextLink href={KKDAY_URL}>KKDAY</ExternalTextLink>で購入でき、購入先は随時追加予定です。</>, keywords: "オンライン web 前売り 楽天 KKDAY 購入" },
  { category: "チケット", q: "前売りチケットはどこで購入できますか？", a: <><ExternalTextLink href={RAKUTEN_URL}>楽天</ExternalTextLink>と<ExternalTextLink href={KKDAY_URL}>KKDAY</ExternalTextLink>の購入ページを前売りチケット情報ページに掲載しています。その他の販売先は決定次第、順次公開します。当日券は会場受付で購入でき、お支払いは現金のみです。</>, keywords: "前売り 購入 楽天 KKDAY 販売先 現金" },
] satisfies ReadonlyArray<FaqItem>;

export default function FaqPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("すべて");
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackByQuestion, setFeedbackByQuestion] = useState<Record<string, "yes" | "no">>({});
  const normalizedQuery = normalizeSearchText(searchQuery);
  const categoryFaqs = activeCategory === "すべて" ? FAQS : FAQS.filter((item) => item.category === activeCategory);
  const visibleFaqs = normalizedQuery
    ? categoryFaqs.filter((item) => normalizeSearchText(`${item.q} ${item.keywords}`).includes(normalizedQuery))
    : categoryFaqs;

  const selectCategory = (category: FaqCategory) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  const updateSearchQuery = (value: string) => {
    setSearchQuery(value);
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

        <section className="relative px-5 pb-20 pt-28 md:px-8 md:pb-36 md:pt-44">
          <div className="mx-auto max-w-[1240px]">
            <header className="mb-12 text-center md:mb-24">
              <p className="font-display text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-none tracking-[-.045em] text-black">FAQ</p>
              <p className="mt-4 font-sans-jp text-sm font-bold tracking-[.2em] text-black/70">よくある質問</p>
              <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-[#F43F8E] via-[#F5C95D] to-[#55D9FF]" />
              <p className="mx-auto mt-7 max-w-xl font-sans-jp text-sm leading-7 text-black/58">開催時間、前売りチケット、駐車場など、ご来場前に知りたい情報をまとめています。</p>
            </header>

            <div className="mb-10 border-y border-black/15 py-5 md:mb-14 md:py-6">
              <label htmlFor="faq-search" className="mb-3 block font-sans-jp text-xs font-bold tracking-[.14em] text-black/55">キーワードで探す</label>
              <div className="relative">
                <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/45" aria-hidden="true" />
                <input
                  id="faq-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => updateSearchQuery(event.target.value)}
                  placeholder="例：駐車場、現金、ペット、楽天"
                  className="h-12 w-full border border-black/20 bg-white py-3 pl-11 pr-12 font-sans-jp text-base text-black outline-none transition-colors placeholder:text-black/38 focus:border-[#d72677] focus:ring-2 focus:ring-[#d72677]/15"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => updateSearchQuery("")}
                    aria-label="検索語をクリア"
                    className="absolute right-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center text-black/55 transition-colors hover:text-[#d72677] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#d72677]"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                )}
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="font-sans-jp text-xs font-bold tracking-[.14em] text-black/55">カテゴリから探す</p>
                {normalizedQuery && <p className="shrink-0 font-sans-jp text-xs text-[#d72677]">検索結果：{visibleFaqs.length}件</p>}
              </div>
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0" aria-label="FAQカテゴリ">
                {FAQ_CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  const count = category === "すべて" ? FAQS.length : FAQS.filter((item) => item.category === category).length;
                  return (
                    <button
                      type="button"
                      key={category}
                      onClick={() => selectCategory(category)}
                      aria-pressed={isActive}
                      className={`min-h-11 shrink-0 border px-4 py-2.5 font-sans-jp text-sm font-bold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d72677] ${isActive ? "border-[#171717] bg-[#171717] text-white" : "border-black/20 bg-transparent text-black hover:border-[#d72677] hover:text-[#d72677]"}`}
                    >
                      {category}<span className={`ml-2 font-display text-[10px] ${isActive ? "text-white/60" : "text-black/40"}`}>{String(count).padStart(2, "0")}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-black/15" aria-live="polite">
              {visibleFaqs.length === 0 ? (
                <div className="border-b border-black/15 py-12 text-center">
                  <p className="font-sans-jp text-base font-bold text-black">該当する質問が見つかりませんでした。</p>
                  <p className="mt-3 font-sans-jp text-sm leading-7 text-black/58">別のキーワードで検索するか、「すべて」のカテゴリからお探しください。</p>
                  <button type="button" onClick={() => { updateSearchQuery(""); selectCategory("すべて"); }} className="mt-6 min-h-11 border border-black/20 px-5 py-2.5 font-sans-jp text-sm font-bold text-black transition-colors hover:border-[#d72677] hover:text-[#d72677]">検索をリセット</button>
                </div>
              ) : visibleFaqs.map((item, index) => {
                const isOpen = openQuestion === item.q;
                const answerId = `faq-answer-${index + 1}`;
                const feedback = feedbackByQuestion[item.q];

                return (
                <article key={item.q} className="border-b border-black/15">
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : item.q)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-3 gap-y-0 py-5 text-left outline-offset-4 transition-colors hover:text-[#d72677] focus-visible:outline-2 focus-visible:outline-[#d72677] md:grid-cols-[112px_1fr_30px] md:gap-10 md:py-8"
                  >
                    <span className="pt-1 font-display text-[10px] tracking-[.18em] text-[#d72677] md:pt-1 md:text-xs">Q {String(index + 1).padStart(2, "0")}</span>
                    <span className="font-sans-jp text-[15px] font-bold leading-7 text-black md:text-lg md:leading-8">{item.q}</span>
                    <Plus size={22} strokeWidth={1.5} className={`hidden justify-self-end text-black transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)] md:mt-1 md:block ${isOpen ? "rotate-45 text-[#d72677]" : ""}`} aria-hidden="true" />
                    <Plus size={19} strokeWidth={1.5} className={`mt-1 justify-self-end text-black transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)] md:hidden ${isOpen ? "rotate-45 text-[#d72677]" : ""}`} aria-hidden="true" />
                  </button>
                  <div id={answerId} role="region" aria-label={`${item.q}への回答`} className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(.23,1,.32,1)] motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-7 pl-10 pr-1 md:grid md:grid-cols-[112px_1fr] md:gap-10 md:pb-10 md:pl-0">
                        <span className="hidden font-display text-xs tracking-[.18em] text-black/35 md:block">A</span>
                        <div>
                          <p className="font-sans-jp text-sm leading-7 text-black/65 md:text-base md:leading-8">{item.a}</p>
                          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-black/10 pt-4">
                            <p className="mr-1 font-sans-jp text-xs font-bold text-black/55">この回答は役に立ちましたか？</p>
                            <button
                              type="button"
                              onClick={() => setFeedbackByQuestion((current) => ({ ...current, [item.q]: "yes" }))}
                              aria-pressed={feedback === "yes"}
                              className={`inline-flex min-h-10 items-center gap-1.5 border px-3 py-2 font-sans-jp text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d72677] ${feedback === "yes" ? "border-[#d72677] bg-[#d72677] text-white" : "border-black/20 bg-white text-black hover:border-[#d72677] hover:text-[#d72677]"}`}
                            >
                              <ThumbsUp size={14} aria-hidden="true" /> はい
                            </button>
                            <button
                              type="button"
                              onClick={() => setFeedbackByQuestion((current) => ({ ...current, [item.q]: "no" }))}
                              aria-pressed={feedback === "no"}
                              className={`inline-flex min-h-10 items-center gap-1.5 border px-3 py-2 font-sans-jp text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d72677] ${feedback === "no" ? "border-[#171717] bg-[#171717] text-white" : "border-black/20 bg-white text-black hover:border-[#171717] hover:text-[#171717]"}`}
                            >
                              <ThumbsDown size={14} aria-hidden="true" /> いいえ
                            </button>
                            {feedback && <p className="basis-full pt-1 font-sans-jp text-xs text-[#d72677]" role="status">ご回答ありがとうございます。</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-3 bg-[#f3f1eb] px-5 py-5 md:px-7">
                <Info size={18} className="mt-1 shrink-0 text-[#d72677]" />
                <p className="font-sans-jp text-xs leading-6 text-black/62 md:text-sm">掲載内容は最新の決定情報に基づいています。変更がある場合は、公式サイトのお知らせおよび<ExternalTextLink href={INSTAGRAM_URL}>公式Instagram</ExternalTextLink>でご案内します。</p>
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
