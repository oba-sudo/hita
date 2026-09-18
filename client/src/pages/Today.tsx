import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { TODAY_STATUS } from "@/data/siteData";
import { CheckCircle, AlertTriangle, XCircle, Clock, Car, RefreshCw } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { color: string; icon: React.ReactNode }> = {
    "通常開催": { color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", icon: <CheckCircle size={14} /> },
    "内容を一部変更して開催": { color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40", icon: <AlertTriangle size={14} /> },
    "開催時間を変更": { color: "bg-orange-500/20 text-orange-300 border-orange-500/40", icon: <AlertTriangle size={14} /> },
    "中止": { color: "bg-red-500/20 text-red-300 border-red-500/40", icon: <XCircle size={14} /> },
    "空車": { color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", icon: null },
    "混雑": { color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40", icon: null },
    "満車": { color: "bg-red-500/20 text-red-300 border-red-500/40", icon: null },
    "通常運行": { color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", icon: null },
    "遅延": { color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40", icon: null },
    "運休": { color: "bg-red-500/20 text-red-300 border-red-500/40", icon: null },
    "販売中": { color: "bg-blue-500/20 text-blue-300 border-blue-500/40", icon: null },
    "情報確認中": { color: "bg-white/10 text-white/60 border-white/20", icon: null },
    "本日は運行なし": { color: "bg-white/10 text-white/60 border-white/20", icon: null },
  };
  const cfg = map[status] ?? { color: "bg-white/10 text-white/60 border-white/20", icon: null };
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
      <PageHero en="TODAY'S EVENT" ja="本日の開催情報" sub="最新の開催状況をご確認ください。状況は随時更新されます。" bgImage="/images/gallery1.jpg" />
      <div className="pb-24 bg-[#050a1a] min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 pt-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* ヘッダー */}
            <div className="bg-gradient-to-r from-[#C8A35A]/20 to-transparent border-b border-white/10 px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#C8A35A] text-xs font-display tracking-widest uppercase mb-1">Date</p>
                <p className="text-white font-serif-jp font-bold text-lg">{s.date}</p>
              </div>
              <StatusBadge status={s.status} />
            </div>
            {/* ステータスグリッド */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-white/40 text-xs font-sans-jp mb-2"><Clock size={13} />会場時間</div>
                <p className="font-serif-jp font-bold text-white text-xl">{s.startTime}〜{s.endTime}</p>
                <p className="text-xs text-white/40 font-sans-jp mt-1">{s.weatherPolicy}</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-white/40 text-xs font-sans-jp mb-2"><Clock size={13} />点灯時間</div>
                <p className="font-serif-jp font-bold text-white text-xl">{s.lightingStartTime}〜{s.lightingEndTime}</p>
                <p className="text-xs text-white/40 font-sans-jp mt-1">{s.weatherPolicy}</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-white/40 text-xs font-sans-jp mb-2">チケット</div>
                <StatusBadge status={s.ticketStatus} />
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-white/40 text-xs font-sans-jp mb-2"><Car size={13} />駐車場</div>
                <StatusBadge status={s.parkingStatus} />
              </div>
            </div>
            {s.weatherNote && (
              <div className="px-6 pb-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm text-blue-300 font-sans-jp">{s.weatherNote}</div>
              </div>
            )}
            {s.trafficNote && (
              <div className="px-6 pb-4">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-sm text-orange-300 font-sans-jp">{s.trafficNote}</div>
              </div>
            )}
            <div className="px-6 pb-5 flex items-center gap-1.5 text-xs text-white/30 font-sans-jp border-t border-white/5 pt-4 mt-2">
              <RefreshCw size={12} />最終更新：{s.updatedAt}
            </div>
          </div>
          <p className="mt-6 text-xs text-white/30 font-sans-jp text-center">
            ※ 開催状況は天候・諸事情により変更になる場合があります。最新情報を必ずご確認ください。
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
