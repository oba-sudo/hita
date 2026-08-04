import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { STAYS } from "@/data/siteData";
import { MapPin, Clock, Phone, Waves, ParkingCircle, ExternalLink } from "lucide-react";

export default function Stay() {
  return (
    <PageLayout>
      <PageHero en="STAY" ja="宿泊施設" sub="日田での宿泊をお楽しみください。温泉・旅館・ホテルなど多彩な宿泊施設をご紹介します。" bgImage="/images/gallery2.jpg" />
      <div className="pb-20 bg-[#050a1a]">
        <div className="max-w-[1100px] mx-auto px-4 -mt-4">
          <div className="mt-6 space-y-6">
            {STAYS.map((s) => (
              <div key={s.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-72 h-52 md:h-auto shrink-0 overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-xs bg-[#10243E] text-[#C8A35A] px-2 py-0.5 rounded font-sans-jp">{s.type}</span>
                      <h3 className="font-serif-jp font-bold text-white text-xl mt-1">{s.name}</h3>
                    </div>
                  </div>
                  <p className="font-sans-jp text-sm text-white/60 leading-relaxed mb-4">{s.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/50 font-sans-jp mb-4">
                    <div className="flex items-center gap-1.5"><MapPin size={12} />{s.distance}</div>
                    <div className="flex items-center gap-1.5"><Clock size={12} />IN {s.checkIn} / OUT {s.checkOut}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.hasOnsen && <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-sans-jp"><Waves size={11} />温泉あり</span>}
                    {s.hasParking && <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-sans-jp"><ParkingCircle size={11} />駐車場あり</span>}
                  </div>
                  <a href={s.bookingUrl} className="inline-flex items-center gap-2 bg-[#10243E] hover:bg-[#1a3a5e] text-white font-bold text-sm px-5 py-2.5 rounded-xl font-sans-jp transition-all active:scale-95">
                    <ExternalLink size={14} />予約・詳細を見る
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/40 font-sans-jp text-center">
            ※ 宿泊施設の情報は変更になる場合があります。予約前に各施設へご確認ください。
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
