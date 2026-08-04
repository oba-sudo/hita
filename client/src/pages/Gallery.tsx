import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, src: "/images/hero_97225277.jpg", alt: "日田イルミナージュ2026 メインビジュアル", caption: "会場全景イメージ" },
  { id: 2, src: "/images/gallery1.jpg", alt: "イルミネーション1", caption: "光のトンネル" },
  { id: 3, src: "/images/gallery2.jpg", alt: "イルミネーション2", caption: "メインゲート" },
  { id: 4, src: "/images/gallery3.jpg", alt: "イルミネーション3", caption: "水辺の光景" },
  { id: 5, src: "/images/hero_sp.jpg", alt: "イルミネーション4", caption: "夜の会場" },
  { id: 6, src: "/images/gallery1.jpg", alt: "イルミネーション5", caption: "フォトスポット" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedImg = GALLERY_IMAGES.find((g) => g.id === selected);

  return (
    <PageLayout>
      <PageHero en="GALLERY" ja="ギャラリー" sub="日田イルミナージュのイメージ画像をご覧ください。" bgImage="/images/hero_97225277.jpg" />
      <div className="pb-20 bg-[#050a1a]">
        <div className="max-w-[1200px] mx-auto px-4 -mt-4">
          <p className="mt-6 mb-4 text-xs text-white/40 font-sans-jp">※ 掲載画像はイメージです。実際の演出とは異なる場合があります。</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_IMAGES.map((img) => (
              <button key={img.id} onClick={() => setSelected(img.id)} className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-sans-jp opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selected && selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={() => setSelected(null)}>
            <X size={32} />
          </button>
          <img src={selectedImg.src} alt={selectedImg.alt} className="max-w-full max-h-[85vh] rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-6 text-white/70 text-sm font-sans-jp">{selectedImg.caption}</p>
        </div>
      )}
    </PageLayout>
  );
}
