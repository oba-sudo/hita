/**
 * Overview — 開催概要
 * デザイン方針: 確定情報を星座の座標のように整理し、来場前に必要な日時・料金・会場を一目で伝える。
 */
import { CalendarDays, Clock3, MapPin, ParkingCircle, Ticket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const DETAILS = [
  ["イベント名", "日田イルミナージュ2026"],
  ["開催期間", "2026年10月31日（土）〜2027年1月31日（日）"],
  ["開催日数", "全93日間・期間中無休"],
  ["開催時間", "17:30〜21:30（最終受付 21:00）"],
  ["開催条件", "雨天決行"],
  ["会場", "サッポロビール九州日田工場"],
  ["所在地", "〒877-0054 大分県日田市高瀬6979"],
  ["入場料金", "大人（中学生以上）2,000円／子ども（1歳〜小学生）1,000円"],
  ["駐車場", "会場併設150台・無料"],
  ["主催", "日田イルミナージュ実行委員会"],
  ["共催", "スカイホップブルーイング株式会社"],
  ["企画運営", "株式会社BIDOW"],
  ["協力", "一般社団法人日本イルミネーション協会"],
  ["後援", "日田市・日田商工会議所・一般社団法人日田市観光協会・進撃の日田まちおこし協議会"],
];

export default function Overview() {
  useSEO({
    title: "開催概要・料金・時間 | 日田イルミナージュ2026",
    description: "2026年10月31日から2027年1月31日まで全93日間開催。時間、料金、会場、駐車場、主催・後援情報をご案内します。",
  });

  return (
    <PageLayout>
      <PageHero en="EVENT INFORMATION" ja="開催概要" sub="開催期間、時間、料金、会場などの基本情報をご案内します。" bgImage={RENEWAL_ASSETS.aerial} />
      <section className="relative overflow-hidden bg-[#030513] px-5 py-20 md:px-8 md:py-32">
        <div className="light-stream left-0 top-0 w-[72%]" />
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-px bg-white/10 md:grid-cols-4">
            {[
              { icon: CalendarDays, label: "DAYS", value: "93", unit: "日間" },
              { icon: Clock3, label: "OPEN", value: "17:30", unit: "開始" },
              { icon: Ticket, label: "ADULT", value: "2,000", unit: "円" },
              { icon: ParkingCircle, label: "PARKING", value: "150", unit: "台・無料" },
            ].map(({ icon: Icon, label, value, unit }) => (
              <div key={label} className="bg-[#07091d] p-6 md:p-8">
                <Icon size={18} className="mb-5 text-[#F43F8E]" />
                <p className="font-display text-[9px] tracking-[.24em] text-white/35">{label}</p>
                <p className="constellation-number mt-2 font-display text-4xl">{value}</p>
                <p className="mt-1 font-sans-jp text-xs text-white/42">{unit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10">
            {DETAILS.map(([label, value]) => (
              <div key={label} className="grid border-b border-white/10 py-5 md:grid-cols-[210px_1fr] md:py-6">
                <p className="mb-2 font-sans-jp text-[10px] font-bold tracking-[.14em] text-[#F5C95D] md:mb-0">{label}</p>
                <p className="font-sans-jp text-sm leading-7 text-white/68">
                  {label === "共催" ? (
                    <a href="https://skyhopbrew.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-[#55D9FF]">
                      {value}
                    </a>
                  ) : value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 border-l border-[#55D9FF]/50 pl-5">
            <MapPin size={18} className="mt-1 shrink-0 text-[#55D9FF]" />
            <p className="font-sans-jp text-xs leading-6 text-white/42">天候・安全上の理由により、開催内容を変更または中止する場合があります。最新情報は本サイトのお知らせでご確認ください。</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
