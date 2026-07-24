import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { TOURISM_SPOTS } from "@/data/siteData";
import { MapPin, Clock, Ticket } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  "歴史": "bg-amber-100 text-amber-800",
  "温泉": "bg-blue-100 text-blue-800",
  "自然": "bg-green-100 text-green-800",
  "文化": "bg-purple-100 text-purple-800",
};

export default function Tourism() {
  return (
    <PageLayout>
      <PageHero en="TOURISM" ja="観光スポット" sub="日田市内の観光スポットをご紹介します。イルミネーション観賞と合わせてお楽しみください。" bgImage="/manus-storage/gallery3_77c209d6.jpg" />
      <div className="pb-20 bg-[#F7F1E5]">
        <div className="max-w-[1200px] mx-auto px-4 -mt-4">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOURISM_SPOTS.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e8e0d0] flex flex-col sm:flex-row">
                <div className="sm:w-48 h-44 sm:h-auto shrink-0 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full font-sans-jp ${CATEGORY_COLORS[t.category] ?? "bg-gray-100 text-gray-800"}`}>{t.category}</span>
                  <h3 className="font-serif-jp font-bold text-[#10243E] text-lg mt-2 mb-2">{t.name}</h3>
                  <p className="font-sans-jp text-sm text-[#10243E]/70 leading-relaxed mb-3">{t.description}</p>
                  <div className="space-y-1 text-xs text-[#10243E]/60 font-sans-jp">
                    <div className="flex items-center gap-1.5"><Clock size={11} />{t.hours}</div>
                    <div className="flex items-center gap-1.5"><Ticket size={11} />{t.fee}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={11} />{t.address}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
