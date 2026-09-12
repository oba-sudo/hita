/**
 * NearbyFacilities — 近隣施設をご利用の方へ
 * デザイン方針: 白背景と横罫線で、入場料金とは切り分けた周遊特典を読みやすく案内する。
 */
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const FACILITIES = [
  "進撃の巨人ミュージアム",
  "進撃の巨人カフェ 日田店",
  "日田森のビール園",
];

export default function NearbyFacilities() {
  useSEO({
    title: "近隣施設をご利用の方へ | 日田イルミナージュ2026",
    description: "近隣の対象施設をご利用の方へ、日田イルミナージュWEBチケット100円OFF特典をご案内します。対象施設・利用方法・注意事項をご確認ください。",
  });

  return (
    <PageLayout>
      <main className="relative overflow-hidden bg-[#fffefa] px-5 pb-28 pt-32 text-[#171717] md:px-8 md:pb-44 md:pt-44">
        <div className="pointer-events-none absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-[#f5c95d]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-12%] h-80 w-80 rounded-full bg-[#f43f8e]/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-[1240px]">
          <header className="max-w-4xl">
            <p className="font-display text-xs tracking-[.24em] text-[#d72677]">NEARBY FACILITIES</p>
            <h1 className="mt-5 font-serif-jp text-[clamp(2.5rem,7vw,5.75rem)] font-semibold leading-[1.15] tracking-[-.045em] text-black">近隣施設を<br />ご利用の方へ</h1>
            <p className="mt-8 max-w-2xl font-sans-jp text-sm leading-8 text-black/62 md:text-base">対象の近隣施設をご利用の方は、日田イルミナージュの入場時に使えるWEBチケットの特典をご利用いただけます。</p>
          </header>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(280px,.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20 md:mt-24">
            <div className="lg:sticky lg:top-28">
              <img src={RENEWAL_ASSETS.ticketPromo} alt="日田イルミナージュ近隣施設利用者向けWEBチケット100円OFF案内" className="mx-auto w-full max-w-[470px] object-contain" />
            </div>

            <div>
              <div className="border-t border-black/15">
                <div className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-[150px_1fr] md:gap-10 md:py-10">
                  <p className="font-sans-jp text-sm font-bold tracking-[.08em] text-black">特典内容</p>
                  <div>
                    <p className="font-serif-jp text-3xl font-semibold leading-tight text-black md:text-5xl">100円OFF</p>
                    <p className="mt-4 font-sans-jp text-sm leading-8 text-black/62 md:text-base">対象施設をご利用後、QRから割引チケットを取得し、日田イルミナージュ入場時にご提示ください。</p>
                  </div>
                </div>

                <div className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-[150px_1fr] md:gap-10 md:py-10">
                  <p className="font-sans-jp text-sm font-bold tracking-[.08em] text-black">対象施設</p>
                  <ul className="space-y-3 font-sans-jp text-base leading-7 text-black md:text-lg">
                    {FACILITIES.map((facility) => <li key={facility}>{facility}</li>)}
                  </ul>
                </div>

                <div className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-[150px_1fr] md:gap-10 md:py-10">
                  <p className="font-sans-jp text-sm font-bold tracking-[.08em] text-black">ご利用方法</p>
                  <ol className="space-y-3 font-sans-jp text-sm leading-8 text-black/65 md:text-base">
                    <li>1. 対象施設をご利用ください。</li>
                    <li>2. QRコードから割引チケットを取得してください。</li>
                    <li>3. 日田イルミナージュ入場時にチケットをご提示ください。</li>
                  </ol>
                </div>

                <div className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-[150px_1fr] md:gap-10 md:py-10">
                  <p className="font-sans-jp text-sm font-bold tracking-[.08em] text-black">注意事項</p>
                  <ul className="space-y-2 font-sans-jp text-sm leading-7 text-black/62 md:text-base">
                    <li>お一人様1回限りご利用いただけます。</li>
                    <li>他の割引との併用はできません。</li>
                    <li>転売・譲渡は禁止です。</li>
                  </ul>
                </div>
              </div>

              <div className="mt-11 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-9">
                <Link href="/tickets" className="font-sans-jp text-sm font-bold text-black underline decoration-black/35 underline-offset-8 transition-colors hover:text-[#d72677]">入場料金・当日券の案内を見る</Link>
                <Link href="/access" className="font-sans-jp text-sm font-bold text-black/65 underline decoration-black/25 underline-offset-8 transition-colors hover:text-[#d72677]">会場へのアクセスを見る</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
