import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "wouter";
import { MapPin, Clock, Calendar, Users, Ticket } from "lucide-react";

export default function About() {
  return (
    <PageLayout>
      <PageHero en="ABOUT" ja="イベント概要" sub="日田イルミナージュ2026は、大分県日田市で開催される冬のイルミネーションイベントです。" bgImage="/manus-storage/gallery2_3f1cfbd2.jpg" />
      <div className="pb-24 bg-[#050a1a]">
        <div className="max-w-[1100px] mx-auto px-4 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 開催概要 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-serif-jp font-bold text-[#C8A35A] text-xl mb-6 border-b border-white/10 pb-3">開催概要</h3>
              <dl className="space-y-5">
                {[
                  { icon: <Calendar size={18} className="text-[#C8A35A]" />, label: "開催期間", value: "2026年10月31日（土）〜2027年1月31日（日）／全93日間" },
                  { icon: <Clock size={18} className="text-[#C8A35A]" />, label: "開催時間", value: "17:00〜22:00（最終入場 21:30）" },
                  { icon: <MapPin size={18} className="text-[#C8A35A]" />, label: "会場", value: "サッポロビール九州日田工場（大分県日田市高瀬６９７９）" },
                  { icon: <Ticket size={18} className="text-[#C8A35A]" />, label: "入場料", value: "有料（チケット要）" },
                  { icon: <Users size={18} className="text-[#C8A35A]" />, label: "対象", value: "どなたでもご参加いただけます" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <div className="mt-0.5">{icon}</div>
                    <div>
                      <dt className="text-xs text-white/40 font-sans-jp">{label}</dt>
                      <dd className="font-sans-jp font-medium text-white/90 mt-0.5">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            {/* 運営体制 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-serif-jp font-bold text-[#C8A35A] text-xl mb-6 border-b border-white/10 pb-3">運営体制</h3>
              <dl className="space-y-4">
                {[
                  { label: "主催", value: "日田光の町づくり実行委員会" },
                  { label: "企画・運営", value: "株式会社BIDOW" },
                  { label: "後援", value: "日田市 / 日田市観光協会" },
                  { label: "イルミネーション企画・演出協力", value: "イルミネーション協会（2026年度）" },
                  { label: "協賛", value: "各協賛企業（募集中）" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <dt className="text-xs text-white/40 font-sans-jp w-36 shrink-0 pt-0.5">{label}</dt>
                    <dd className="font-sans-jp text-white/80">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link href="/sponsor" className="inline-flex items-center gap-2 text-[#C8A35A] hover:text-[#e8c070] font-sans-jp text-sm font-bold transition-colors">
                  ◆ 協賛企業を募集しています →
                </Link>
              </div>
            </div>
          </div>
          {/* コンセプト */}
          <div className="mt-10 relative overflow-hidden rounded-2xl border border-[#C8A35A]/30 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A35A]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[#C8A35A] text-xs font-display tracking-[0.3em] uppercase mb-4">CONCEPT</p>
              <h3 className="font-serif-jp font-bold text-white text-2xl md:text-3xl mb-6 leading-relaxed">
                「光を見に来る。<br />日田に泊まり、食べ、巡り、また訪れる。」
              </h3>
              <p className="font-sans-jp text-white/70 leading-relaxed max-w-2xl">
                日田イルミナージュは、単なるイルミネーションイベントではありません。光をきっかけに、日田の食・宿・観光・文化を体験していただき、何度でも訪れたくなる「日田のファン」を増やすことを目指しています。地域の事業者・住民・行政が一体となって作り上げる、日田ならではの冬の祭典です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
