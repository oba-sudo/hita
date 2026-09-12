/**
 * Events — 会場の見どころ
 * デザイン方針: Immersive Celestial Festival。写真の縦横比を活かし、光の中を歩く順路として編集する。
 */
import { Link } from "wouter";
import { ArrowRight, Sparkles, Ticket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const AREAS = [
  { number: "01", title: "回廊トンネル", en: "LIGHT CORRIDOR", image: RENEWAL_ASSETS.corridorTunnel, text: "幾重もの光が続く、幻想的な回廊。歩くたびに色と奥行きが変化し、光の世界へ誘います。" },
  { number: "02", title: "宇宙広場", en: "COSMIC PLAZA", image: RENEWAL_ASSETS.spacePlaza, text: "星、惑星、ロケットの光が夜空へ広がるエリア。宇宙を旅するようなスケール感を楽しめます。" },
  { number: "03", title: "恵比寿池", en: "EBISU POND", image: RENEWAL_ASSETS.ebisuPond, text: "水辺に映る光が、会場の夜景に奥行きを生み出します。静かに眺めたいフォトスポットです。" },
  { number: "04", title: "キッズエリア", en: "KIDS AREA", image: RENEWAL_ASSETS.kidsCircle, text: "動物やカラフルな光に囲まれた、家族で楽しめるエリア。子どもたちの記念撮影にもおすすめです。" },
  { number: "05", title: "LEDシーソー", en: "PLAY WITH LIGHT", image: RENEWAL_ASSETS.ledSeesaw, text: "光と一緒に遊べる体験型コンテンツ。見るだけではない、イルミナージュの楽しさを体感できます。" },
  { number: "06", title: "回廊前広場", en: "GATE PLAZA", image: RENEWAL_ASSETS.corridorPlaza, text: "光のオブジェが広がる開放的な広場。会場を巡る前後に、思い思いの一枚を残せます。" },
];

export default function Events() {
  useSEO({
    title: "見どころ・会場エリア | 日田イルミナージュ2026",
    description: "回廊トンネル、宇宙広場、恵比寿池、キッズエリアなど、日田イルミナージュ2026の見どころをご紹介します。",
  });

  return (
    <PageLayout>
      <PageHero en="EVENT HIGHLIGHTS" ja="光の中を、めぐる。" sub="回廊、宇宙、水辺、遊び。会場ごとに表情を変える光の体験をご紹介します。" bgImage={RENEWAL_ASSETS.corridorPlaza} />

      <section className="relative overflow-hidden bg-[#030513] px-5 py-20 md:px-8 md:py-32">
        <div className="light-stream right-0 top-0 w-[70%]" />
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 grid gap-8 md:grid-cols-[.72fr_1.28fr] md:items-end">
            <div>
              <p className="font-display text-[10px] tracking-[.3em] text-[#F5C95D]">THE NIGHT ROUTE</p>
              <h2 className="mt-3 font-serif-jp text-3xl font-semibold leading-tight md:text-5xl">光の物語を、<br />一つずつ。</h2>
            </div>
            <p className="max-w-2xl font-sans-jp text-sm leading-8 text-white/58">サッポロビール九州日田工場の敷地に、異なるテーマを持つ光のエリアが広がります。お気に入りの景色を探しながら、ゆっくりと会場をお楽しみください。</p>
          </div>

          <div className="space-y-5 md:space-y-8">
            {AREAS.map((area, index) => (
              <article key={area.title} className={`group grid overflow-hidden border border-white/10 bg-[#07091d] md:grid-cols-12 ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative order-2 min-h-[300px] md:order-none md:col-span-7 md:min-h-[460px]">
                  <img src={area.image} alt={`${area.title}の会場演出イメージ`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030513]/65 via-transparent to-transparent" />
                  <p className="absolute bottom-3 right-4 font-sans-jp text-[9px] text-white/42">※会場演出イメージ</p>
                </div>
                <div className="relative order-1 flex flex-col justify-end p-7 md:order-none md:col-span-5 md:p-12">
                  <span className="constellation-number font-display text-6xl md:text-8xl">{area.number}</span>
                  <p className="mt-4 font-display text-[10px] tracking-[.26em] text-[#55D9FF]">{area.en}</p>
                  <h3 className="mt-2 font-serif-jp text-3xl font-semibold md:text-4xl">{area.title}</h3>
                  <div className="light-rule my-6 w-24" />
                  <p className="font-sans-jp text-sm leading-8 text-white/58">{area.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cosmos-surface relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#F43F8E]"><Sparkles size={16} /><span className="font-display text-[10px] tracking-[.24em]">READY FOR THE NIGHT?</span></div>
            <h2 className="font-serif-jp text-3xl font-semibold md:text-4xl">光の夜へ、出かけよう。</h2>
            <p className="mt-3 font-sans-jp text-sm text-white/52">販売先・購入URLは順次公開します。</p>
          </div>
          <Link href="/tickets" className="ticket-glow inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans-jp text-sm font-bold text-white"><Ticket size={17} /> チケット情報を見る <ArrowRight size={14} /></Link>
        </div>
      </section>
    </PageLayout>
  );
}
