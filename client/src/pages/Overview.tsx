/**
 * Overview — 開催概要
 * デザイン方針: 白背景と黒文字、広い余白、細い横罫線で来場情報を迷わず読める編集レイアウト。
 */
import { ArrowRight, ExternalLink, Info, Ticket } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";

const DETAILS = [
  { label: "名称", value: "日田イルミナージュ2026", sub: "HITA ILLUMINAGE 2026" },
  { label: "会期", value: "2026年10月31日（土）〜2027年1月31日（日）", sub: "全93日間・期間中無休" },
  { label: "会場時間", value: "17:00〜21:30" },
  { label: "点灯時間", value: "17:30〜21:30" },
  { label: "開催条件", value: "雨天決行", sub: "天候・安全上の理由により、開催内容を変更または中止する場合があります。" },
  { label: "会場", value: "サッポロビール九州日田工場", sub: "〒877-0054 大分県日田市高瀬6979" },
  { label: "入場料金", value: "大人（中学生以上）2,000円", sub: "子ども（1歳〜小学生）1,000円／0歳無料" },
  { label: "当日券", value: "会場受付で購入できます", sub: "お支払いは現金のみです。" },
  { label: "駐車場", value: "会場併設 150台", sub: "駐車料金無料" },
  { label: "主催", value: "日田イルミナージュ実行委員会" },
  { label: "共催", value: "スカイホップブルーイング株式会社", href: "https://skyhopbrew.com/" },
  { label: "企画運営", value: "株式会社BIDOW" },
  { label: "協力", value: "一般社団法人日本イルミネーション協会", href: "https://jia-or.jp/" },
  { label: "後援", value: "日田市・日田商工会議所・一般社団法人日田市観光協会・進撃の日田まちおこし協議会" },
];

export default function Overview() {
  useSEO({
    title: "開催概要・料金・時間 | 日田イルミナージュ2026",
    description: "2026年10月31日から2027年1月31日まで全93日間開催。時間、料金、会場、駐車場、主催・後援情報をご案内します。",
  });

  return (
    <PageLayout>
      <main className="relative overflow-hidden bg-[#fffefa] text-[#171717]">
        <div className="pointer-events-none absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[#f5c95d]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute right-[-10%] top-[42rem] h-80 w-80 rounded-full bg-[#f43f8e]/[0.05] blur-3xl" />

        <section className="relative px-5 pb-24 pt-32 md:px-8 md:pb-36 md:pt-44">
          <div className="mx-auto max-w-[1240px]">
            <header className="mb-16 text-center md:mb-24">
              <p className="font-display text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-none tracking-[-.045em] text-black">OUTLINE</p>
              <p className="mt-4 font-sans-jp text-sm font-bold tracking-[.2em] text-black/70">開催概要</p>
              <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-[#F43F8E] via-[#F5C95D] to-[#55D9FF]" />
            </header>

            <div className="border-t border-black/15">
              {DETAILS.map(({ label, value, sub, href }) => {
                const important = label === "会期" || label === "開催時間";
                return (
                  <div key={label} className="grid gap-4 border-b border-black/15 py-7 md:grid-cols-[180px_1fr] md:gap-10 md:py-9">
                    <h2 className="font-sans-jp text-sm font-bold tracking-[.08em] text-black md:pt-1">{label}</h2>
                    <div>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-sans-jp text-base font-medium leading-8 text-black underline decoration-black/25 underline-offset-4 transition-colors hover:text-[#d72677]"
                        >
                          {value}<ExternalLink size={14} />
                        </a>
                      ) : (
                        <p className={`font-sans-jp font-medium leading-relaxed text-black ${important ? "text-xl md:text-[1.7rem]" : "text-base md:text-lg"}`}>
                          {value}
                          {label === "当日券" && <span className="ml-3 inline-flex rounded-full bg-[#171717] px-3 py-1 align-middle text-[10px] font-bold tracking-[.08em] text-white">現金のみ</span>}
                        </p>
                      )}
                      {sub && <p className="mt-1.5 font-sans-jp text-sm leading-7 text-black/58 md:text-base">{sub}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex items-start gap-3 bg-[#f3f1eb] px-5 py-5 md:px-7">
                <Info size={18} className="mt-1 shrink-0 text-[#d72677]" />
                <p className="font-sans-jp text-xs leading-6 text-black/62 md:text-sm">最新の開催状況や変更情報は、本サイトのお知らせおよび公式Instagramでご案内します。</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/tickets" className="inline-flex items-center justify-center gap-2 bg-[#171717] px-7 py-4 font-sans-jp text-sm font-bold text-white transition-colors hover:bg-[#d72677]">
                  <Ticket size={16} /> 前売りチケット情報
                </Link>
                <Link href="/access" className="inline-flex items-center justify-center gap-2 border border-black/20 px-7 py-4 font-sans-jp text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white">
                  アクセス <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
