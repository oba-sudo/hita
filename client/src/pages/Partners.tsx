/**
 * Partners — 後援・スポンサー／協賛案内
 * デザイン方針: 白背景と横罫線を基調に、地域連携団体の公式サイトと協賛案内への導線を明快に整理する。
 */
import { ArrowRight, ExternalLink, HandHeart, Info } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";

const SUPPORTERS = [
  {
    name: "日田市",
    role: "後援",
    href: "https://www.city.hita.oita.jp/",
    description: "日田市の公式ウェブサイト",
  },
  {
    name: "一般社団法人日田市観光協会",
    role: "後援",
    href: "https://oidehita.com/",
    description: "日田市観光協会「おいでひた」",
  },
  {
    name: "日田商工会議所",
    role: "後援",
    href: "https://hitacci.com/",
    description: "日田商工会議所の公式ウェブサイト",
  },
  {
    name: "進撃の日田まちおこし協議会",
    role: "後援",
    href: "https://shingeki-hita.com/operation.html",
    description: "進撃の日田まちおこし協議会の活動紹介",
  },
] as const;

export default function Partners() {
  useSEO({
    title: "後援・スポンサー／協賛 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026を後援いただく団体の公式サイトと、スポンサー・協賛に関するご案内を掲載しています。",
  });

  return (
    <PageLayout>
      <main className="relative overflow-hidden bg-[#fffefa] text-[#171717]">
        <div className="pointer-events-none absolute left-[-10%] top-28 h-80 w-80 rounded-full bg-[#f5c95d]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute right-[-8%] top-[36rem] h-80 w-80 rounded-full bg-[#55d9ff]/[0.06] blur-3xl" />

        <section className="relative px-5 pb-24 pt-32 md:px-8 md:pb-36 md:pt-44">
          <div className="mx-auto max-w-[1240px]">
            <header className="mb-14 text-center md:mb-20">
              <p className="font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-none tracking-[-.045em] text-black">PARTNERS</p>
              <p className="mt-4 font-sans-jp text-sm font-bold tracking-[.2em] text-black/70">後援・スポンサー／協賛</p>
              <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-[#F43F8E] via-[#F5C95D] to-[#55D9FF]" />
              <p className="mx-auto mt-7 max-w-2xl font-sans-jp text-sm leading-7 text-black/58 md:text-base md:leading-8">日田イルミナージュを支えてくださる地域・団体の皆さまをご紹介します。各団体名から公式サイトをご覧いただけます。</p>
            </header>

            <nav aria-label="後援・協賛ページのクイックナビゲーション" className="mb-14 grid border-y border-black/15 sm:grid-cols-3 md:mb-20">
              <Link href="/" className="group flex min-h-14 items-center justify-between border-b border-black/15 px-4 py-4 font-sans-jp text-sm font-bold text-black transition-colors hover:bg-black/[0.025] hover:text-[#d72677] sm:border-b-0 sm:border-r sm:border-black/15 md:px-6">
                <span><span className="mr-3 font-display text-[10px] tracking-[.18em] text-[#d72677]">TOP</span>トップページ</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/faq" className="group flex min-h-14 items-center justify-between border-b border-black/15 px-4 py-4 font-sans-jp text-sm font-bold text-black transition-colors hover:bg-black/[0.025] hover:text-[#d72677] sm:border-b-0 sm:border-r sm:border-black/15 md:px-6">
                <span><span className="mr-3 font-display text-[10px] tracking-[.18em] text-[#d72677]">FAQ</span>よくある質問</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/overview" className="group flex min-h-14 items-center justify-between px-4 py-4 font-sans-jp text-sm font-bold text-black transition-colors hover:bg-black/[0.025] hover:text-[#d72677] md:px-6">
                <span><span className="mr-3 font-display text-[10px] tracking-[.18em] text-[#d72677]">INFO</span>開催概要</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </nav>

            <section aria-labelledby="supporters-heading">
              <div className="mb-5 flex items-end justify-between gap-5 md:mb-7">
                <div>
                  <p className="font-display text-[10px] tracking-[.28em] text-[#d72677]">SUPPORT</p>
                  <h1 id="supporters-heading" className="mt-2 font-sans-jp text-xl font-bold text-black md:text-2xl">後援団体</h1>
                </div>
                <p className="font-sans-jp text-xs text-black/45">公式サイトへの外部リンク</p>
              </div>

              <div className="border-t border-black/15">
                {SUPPORTERS.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-3 border-b border-black/15 py-6 transition-colors hover:bg-black/[0.025] md:grid-cols-[150px_1fr_auto] md:items-center md:gap-8 md:px-5 md:py-8"
                  >
                    <span className="font-display text-[10px] tracking-[.22em] text-[#d72677]">{partner.role}</span>
                    <span>
                      <span className="block font-sans-jp text-base font-bold leading-7 text-black md:text-lg">{partner.name}</span>
                      <span className="mt-1 block font-sans-jp text-sm leading-6 text-black/52">{partner.description}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 font-sans-jp text-xs font-bold text-black/60 transition-colors group-hover:text-[#d72677]">
                      公式サイト <ExternalLink size={15} aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section aria-labelledby="sponsor-heading" className="mt-14 border-y border-black/15 py-10 md:mt-20 md:py-14">
              <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#171717] text-[#f5c95d]" aria-hidden="true">
                  <HandHeart size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[.28em] text-[#d72677]">SPONSORSHIP</p>
                  <h2 id="sponsor-heading" className="mt-2 font-sans-jp text-xl font-bold text-black md:text-2xl">スポンサー・協賛をご検討の方へ</h2>
                  <p className="mt-3 max-w-2xl font-sans-jp text-sm leading-7 text-black/60 md:text-base md:leading-8">地域とともに光の夜をつくるスポンサー・協賛の募集内容、プラン、申込みの流れをご案内しています。</p>
                </div>
                <Link href="/sponsor" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#171717] px-6 py-3 font-sans-jp text-sm font-bold text-white transition-colors hover:bg-[#d72677]">
                  協賛募集のご案内 <ArrowRight size={16} />
                </Link>
              </div>
            </section>

            <div className="mt-10 flex items-start gap-3 bg-[#f3f1eb] px-5 py-5 md:mt-14 md:px-7">
              <Info size={18} className="mt-1 shrink-0 text-[#d72677]" aria-hidden="true" />
              <p className="font-sans-jp text-xs leading-6 text-black/62 md:text-sm">スポンサー・協賛企業・団体のご紹介は、掲載内容が確定次第、順次更新します。</p>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
