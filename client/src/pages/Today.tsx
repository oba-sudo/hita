import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { TODAY_STATUS } from "@/data/siteData";
import { CheckCircle, AlertTriangle, XCircle, Clock, Car, Bus, RefreshCw } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { color: string; icon: React.ReactNode }> = {
    "通常開催": { color: "bg-green-100 text-green-800 border-green-300", icon: <CheckCircle size={16} /> },
    "内容を一部変更して開催": { color: "bg-yellow-100 text-yellow-800 border-yellow-300", icon: <AlertTriangle size={16} /> },
    "開催時間を変更": { color: "bg-orange-100 text-orange-800 border-orange-300", icon: <AlertTriangle size={16} /> },
    "中止": { color: "bg-red-100 text-red-800 border-red-300", icon: <XCircle size={16} /> },
    "空車": { color: "bg-green-100 text-green-800 border-green-300", icon: null },
    "混雑": { color: "bg-yellow-100 text-yellow-800 border-yellow-300", icon: null },
    "満車": { color: "bg-red-100 text-red-800 border-red-300", icon: null },
    "通常運行": { color: "bg-green-100 text-green-800 border-green-300", icon: null },
    "遅延": { color: "bg-yellow-100 text-yellow-800 border-yellow-300", icon: null },
    "運休": { color: "bg-red-100 text-red-800 border-red-300", icon: null },
    "販売中": { color: "bg-blue-100 text-blue-800 border-blue-300", icon: null },
    "情報確認中": { color: "bg-gray-100 text-gray-800 border-gray-300", icon: null },
    "本日は運行なし": { color: "bg-gray-100 text-gray-800 border-gray-300", icon: null },
  };
  const cfg = map[status] ?? { color: "bg-gray-100 text-gray-800 border-gray-300", icon: null };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold font-sans-jp ${cfg.color}`}>
      {cfg.icon}{status}
    </span>
  );
}

export default function Today() {
  const s = TODAY_STATUS;
  return (
    <PageLayout>
      <PageHero en="TODAY'S EVENT" ja="本日の開催情報" sub="最新の開催状況をご確認ください。状況は随時更新されます。" bgImage="/manus-storage/gallery1_9912daf3.jpg" />
      <div className="pb-16 bg-[#F7F1E5] min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 -mt-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e8e0d0]">
            <div className="bg-[#10243E] px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[#C8A35A] text-xs font-display tracking-widest uppercase">Date</p>
                <p className="text-white font-serif-jp font-bold text-lg">{s.date}</p>
              </div>
              <StatusBadge status={s.status} />
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F7F1E5] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#10243E]/60 text-xs font-sans-jp mb-1"><Clock size={14} />開催時間</div>
                <p className="font-serif-jp font-bold text-[#10243E] text-xl">{s.startTime}〜{s.endTime}</p>
                <p className="text-xs text-[#10243E]/60 font-sans-jp mt-0.5">最終入場 {s.lastEntry}</p>
              </div>
              <div className="bg-[#F7F1E5] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#10243E]/60 text-xs font-sans-jp mb-1">チケット</div>
                <StatusBadge status={s.ticketStatus} />
              </div>
              <div className="bg-[#F7F1E5] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#10243E]/60 text-xs font-sans-jp mb-1"><Car size={14} />駐車場</div>
                <StatusBadge status={s.parkingStatus} />
              </div>
              <div className="bg-[#F7F1E5] rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#10243E]/60 text-xs font-sans-jp mb-1"><Bus size={14} />シャトルバス</div>
                <StatusBadge status={s.shuttleStatus} />
              </div>
            </div>
            {s.weatherNote && (
              <div className="px-6 pb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 font-sans-jp">{s.weatherNote}</div>
              </div>
            )}
            {s.trafficNote && (
              <div className="px-6 pb-4">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-800 font-sans-jp">{s.trafficNote}</div>
              </div>
            )}
            <div className="px-6 pb-5 flex items-center gap-1.5 text-xs text-[#10243E]/40 font-sans-jp">
              <RefreshCw size={12} />最終更新：{s.updatedAt}
            </div>
          </div>
          <p className="mt-6 text-xs text-[#10243E]/50 font-sans-jp text-center">
            ※ 開催状況は天候・諸事情により変更になる場合があります。最新情報を必ずご確認ください。
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
