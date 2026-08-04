import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  { id: 1, title: "メインゲート イルミネーション", description: "会場への入口を彩る豪華なイルミネーションゲート。記念撮影スポットとして人気です。", tag: "フォトスポット", image: "/images/gallery1.jpg" },
  { id: 2, title: "光のトンネル", description: "色とりどりのLEDが織りなす幻想的なトンネル。歩くたびに光が変化する体験型スポット。", tag: "体験型", image: "/images/gallery2.jpg" },
  { id: 3, title: "三隈川リフレクション", description: "川面に映るイルミネーションが幻想的な空間を演出。日田ならではの水辺の光景。", tag: "絶景スポット", image: "/images/gallery3.jpg" },
  { id: 4, title: "フードエリア", description: "日田の名物グルメが集まるフードエリア。温かい食べ物で体を温めながら光を楽しめます。", tag: "グルメ", image: "/images/gallery1.jpg" },
  { id: 5, title: "フォトスポット巡り", description: "会場内に設置された多数のフォトスポット。SNS映えする写真が撮れます。", tag: "フォトスポット", image: "/images/gallery2.jpg" },
  { id: 6, title: "キッズエリア", description: "子どもたちが楽しめる体験型アトラクション。家族みんなで楽しめます。", tag: "ファミリー", image: "/images/gallery3.jpg" },
];

export default function Highlights() {
  return (
    <PageLayout>
      <PageHero en="HIGHLIGHTS" ja="見どころ" sub="日田イルミナージュ2026の主な見どころをご紹介します。" bgImage="/images/hero_97225277.jpg" />
      <div className="pb-20 bg-[#050a1a]">
        <div className="max-w-[1200px] mx-auto px-4 -mt-4">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={h.image} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#C8A35A] text-white text-xs font-bold px-2.5 py-1 rounded-full font-sans-jp">{h.tag}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-[#C8A35A]" />
                    <h3 className="font-serif-jp font-bold text-white text-base">{h.title}</h3>
                  </div>
                  <p className="font-sans-jp text-sm text-white/60 leading-relaxed">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
