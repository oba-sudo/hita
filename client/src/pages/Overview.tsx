// Overview.tsx — 開催概要ページ
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Clock } from "lucide-react";

function PageHero({ title, en }: { title: string; en: string }) {
  return (
    <div
      className="pt-32 pb-16 relative"
      style={{ background: "linear-gradient(to bottom, #07101f, #050a1a)" }}
    >
      <div className="container">
        <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-2">{en}</p>
        <h1 className="font-serif-jp text-3xl md:text-4xl font-bold text-white">{title}</h1>
        <div className="mt-3 w-12 h-px" style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }} />
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="min-h-screen" style={{ background: "#050a1a", color: "#fff" }}>
      <Header />
      <PageHero title="開催概要" en="Overview" />
      <section className="py-16">
        <div className="container max-w-3xl">
          {/* 概要テーブル */}
          <div className="rounded-xl overflow-hidden mb-12" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
            {[
              { label: "イベント名", value: "日田イルミナージュ2026" },
              { label: "開催期間", value: "2026年10月31日（土）〜2027年1月31日（日）" },
              { label: "開催日数", value: "全93日間" },
              { label: "会場", value: "サッポロビール九州日田工場" },
              { label: "所在地", value: "〒877-0054 大分県日田市高瀬６９７９" },
              { label: "主催", value: "日田イルミナージュ実行委員会" },
              { label: "企画運営", value: "株式会社BIDOW" },
              { label: "協力", value: "一般社団法人日本イルミネーション協会" },
              { label: "後援", value: "一般社団法人日田市観光協会、日田温泉旅館組合" },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className="flex"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
              >
                <div
                  className="w-28 shrink-0 px-4 py-4 font-sans-jp text-xs font-bold"
                  style={{ background: "rgba(212,175,55,0.07)", color: "#D4AF37", borderRight: "1px solid rgba(212,175,55,0.12)" }}
                >
                  {row.label}
                </div>
                <div className="px-4 py-4 font-sans-jp text-white/80 text-sm leading-relaxed flex-1">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
          <p className="font-sans-jp text-white/35 text-xs leading-relaxed">
            ※営業時間、入場料金、チケット、駐車場、交通手段などは正式決定後に公開します。<br />
            ※内容は変更になる場合があります。
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
