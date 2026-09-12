/**
 * Access — 会場アクセス
 * デザイン方針: 会場写真・交通手段・地図を一画面の旅程として構成し、迷わず到着できる情報設計にする。
 */
import { Car, ExternalLink, MapPin, ParkingCircle, TrainFront } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const MAP_URL = "https://maps.app.goo.gl/2m8Q6w659HrUcY3Q7";

export default function Access() {
  useSEO({
    title: "会場アクセス・駐車場 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026の会場、サッポロビール九州日田工場への電車・車でのアクセスと無料駐車場をご案内します。",
  });

  return (
    <PageLayout>
      <PageHero en="ACCESS" ja="光の会場へ。" sub="サッポロビール九州日田工場までのアクセスと駐車場情報をご案内します。" bgImage={RENEWAL_ASSETS.parking} />

      <section className="relative overflow-hidden bg-[#030513] px-5 py-16 md:px-8 md:py-32">
        <div className="light-stream left-0 top-0 w-[72%]" />
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="font-display text-[10px] tracking-[.28em] text-[#F5C95D]">VENUE</p>
              <h2 className="mt-3 font-serif-jp text-3xl font-semibold leading-tight md:text-5xl">サッポロビール<br />九州日田工場</h2>
              <p className="mt-5 flex items-start gap-2 font-sans-jp text-[15px] leading-7 text-white/70 md:text-sm"><MapPin size={16} className="mt-1 shrink-0 text-[#F43F8E]" />〒877-0054<br />大分県日田市高瀬6979</p>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-sans-jp text-sm text-white transition-colors hover:bg-white/10">Googleマップで開く <ExternalLink size={14} /></a>

              <div className="mt-10 space-y-px bg-white/10">
                <div className="bg-[#07091d] p-5 md:p-6">
                  <TrainFront size={22} className="mb-4 text-[#55D9FF]" />
                  <p className="font-display text-[9px] tracking-[.24em] text-white/38">BY TRAIN</p>
                  <h3 className="mt-2 font-serif-jp text-xl font-semibold">JR「日田」駅からタクシー約10分</h3>
                </div>
                <div className="bg-[#07091d] p-5 md:p-6">
                  <Car size={22} className="mb-4 text-[#F5C95D]" />
                  <p className="font-display text-[9px] tracking-[.24em] text-white/38">BY CAR</p>
                  <h3 className="mt-2 font-serif-jp text-xl font-semibold">大分自動車道「日田IC」から約10分</h3>
                </div>
                <div className="bg-[#07091d] p-5 md:p-6">
                  <ParkingCircle size={22} className="mb-4 text-[#F43F8E]" />
                  <p className="font-display text-[9px] tracking-[.24em] text-white/38">PARKING</p>
                  <h3 className="mt-2 font-serif-jp text-xl font-semibold">会場併設 150台・無料</h3>
                  <p className="mt-2 font-sans-jp text-xs leading-6 text-white/45">台数には限りがあります。混雑時は時間に余裕をもってご来場ください。</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative min-h-[240px] overflow-hidden border border-white/10 md:min-h-[360px]">
                <img src={RENEWAL_ASSETS.parking} alt="サッポロビール九州日田工場の駐車場案内" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030513]/62 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-sans-jp text-xs text-white/58">会場駐車場</p>
              </div>
              <div className="min-h-[360px] overflow-hidden border border-white/10 bg-white/5 md:min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.5!2d130.9440418!3d33.2979371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35416a6590a96e8d%3A0x8abbe19477e78166!2z44K144OD44Od44Ot44OT44O844Or5Lmd5bee5pel55Sw5L-d5Zy6!5e0!3m2!1sja!2sjp!4v1753970000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "360px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="サッポロビール九州日田工場 会場地図"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
