/**
 * Tickets — チケット案内
 * デザイン方針: Starlight Goldの料金表示とTicket Pinkの行動導線で、購入前の判断材料を明快に提示する。
 */
import { Building2, CalendarDays, Info, Ticket as TicketIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS, TICKET_SELLERS } from "@/data/renewalAssets";

export default function Tickets() {
  useSEO({
    title: "チケット・入場料金 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026の入場料金、当日券、WEBチケット、取扱予定のチケット販売会社をご案内します。",
  });

  return (
    <PageLayout>
      <PageHero en="TICKETS" ja="光の夜へのチケット。" sub="入場料金、当日券、取扱予定の販売会社をご案内します。" bgImage={RENEWAL_ASSETS.parkRestaurant} />

      <section className="relative overflow-hidden bg-[#030513] px-5 py-20 md:px-8 md:py-32">
        <div className="light-stream left-0 top-0 w-[68%]" />
          <div className="mx-auto max-w-[900px]">
            <div className="mb-5 flex items-center gap-3"><span className="constellation-number font-display text-sm">01</span><div className="light-rule w-20" /><span className="font-display text-[10px] tracking-[.28em] text-white/42">ADMISSION</span></div>
            <h2 className="font-serif-jp text-3xl font-semibold md:text-5xl">入場料金</h2>
            <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-[#07091d] p-6 md:p-8">
                <p className="font-sans-jp text-xs text-white/48">大人</p>
                <p className="mt-1 font-sans-jp text-[10px] text-white/32">中学生以上</p>
                <p className="constellation-number mt-5 font-display text-5xl">¥2,000</p>
              </div>
              <div className="bg-[#07091d] p-6 md:p-8">
                <p className="font-sans-jp text-xs text-white/48">子ども</p>
                <p className="mt-1 font-sans-jp text-[10px] text-white/32">1歳〜小学生</p>
                <p className="constellation-number mt-5 font-display text-5xl">¥1,000</p>
              </div>
            </div>
            <p className="mt-4 flex items-start gap-2 font-sans-jp text-xs leading-6 text-white/42"><Info size={14} className="mt-1 shrink-0 text-[#55D9FF]" />0歳のお子さまは無料です。料金・販売条件は変更になる場合があります。</p>

            <div className="mt-8 flex items-start gap-4 border border-[#F5C95D]/30 bg-[#F5C95D]/[.06] p-5 md:p-6">
              <TicketIcon size={22} className="mt-0.5 shrink-0 text-[#F5C95D]" />
              <div>
                <p className="font-display text-[10px] tracking-[.24em] text-[#F5C95D]">SAME-DAY TICKET</p>
                <h3 className="mt-2 font-serif-jp text-xl font-semibold">当日券は会場受付で購入できます</h3>
                <p className="mt-2 font-sans-jp text-sm font-bold text-white">お支払いは現金のみです。</p>
              </div>
            </div>

            <div className="mt-14 border border-[#F43F8E]/25 bg-[#F43F8E]/5 p-6 md:p-8">
              <p className="font-display text-[10px] tracking-[.26em] text-[#FF9CC8]">TICKET SALES</p>
              <h3 className="mt-3 font-serif-jp text-2xl font-semibold">販売URLは順次公開します</h3>
              <p className="mt-3 font-sans-jp text-sm leading-7 text-white/52">販売開始後、各チケット購入ページへのリンクを本ページに掲載します。</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/7 px-5 py-3 font-sans-jp text-xs text-white/55"><CalendarDays size={15} /> 公開準備中</div>
            </div>
          </div>
      </section>

      <section className="cosmos-surface relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex items-center gap-3"><Building2 size={18} className="text-[#55D9FF]" /><span className="font-display text-[10px] tracking-[.28em] text-[#55D9FF]">SALES PARTNERS</span></div>
          <h2 className="font-serif-jp text-3xl font-semibold md:text-4xl">取扱予定のチケット販売会社</h2>
          <p className="mt-4 max-w-2xl font-sans-jp text-sm leading-7 text-white/52">取扱開始時期や販売内容は会社ごとに異なる場合があります。正式な購入URLは決定次第ご案内します。</p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3 lg:grid-cols-4">
            {TICKET_SELLERS.map((seller, index) => (
              <div key={seller} className="flex min-h-[96px] items-center bg-[#06081d] p-5">
                <span className="mr-3 font-display text-[10px] text-[#F43F8E]">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-sans-jp text-sm font-medium leading-6 text-white/78">{seller}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
