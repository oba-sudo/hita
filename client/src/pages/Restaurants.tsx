import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { RESTAURANTS } from "@/data/siteData";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Restaurants() {
  return (
    <PageLayout>
      <PageHero en="RESTAURANTS" ja="飲食店" sub="会場周辺のおすすめ飲食店をご紹介します。日田の食文化をお楽しみください。" bgImage="/manus-storage/gallery1_b05537d1.jpg" />
      <div className="pb-20 bg-[#050a1a]">
        <div className="max-w-[1200px] mx-auto px-4 -mt-4">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESTAURANTS.map((r) => (
              <div key={r.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/90 text-white text-xs font-bold px-2.5 py-1 rounded-full font-sans-jp">{r.genre}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif-jp font-bold text-white text-lg mb-1">{r.name}</h3>
                  <p className="font-sans-jp text-sm text-white/60 leading-relaxed mb-3 flex-1">{r.description}</p>
                  <div className="space-y-1.5 text-xs text-white/50 font-sans-jp">
                    <div className="flex items-center gap-1.5"><Clock size={12} />{r.hours}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={12} />{r.distance}</div>
                    <div className="flex items-center gap-1.5"><Phone size={12} />{r.phone}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {r.tags.map((tag) => (
                      <span key={tag} className="bg-[#050a1a] text-white/60 text-xs px-2 py-0.5 rounded-full font-sans-jp">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/40 font-sans-jp text-center">
            ※ 営業時間・定休日は変更になる場合があります。事前にご確認ください。
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
