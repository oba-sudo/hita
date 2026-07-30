import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";

function PageHero({ title, en }: { title: string; en: string }) {
  return (
    <div className="pt-32 pb-16 relative" style={{ background: "linear-gradient(to bottom, #07101f, #050a1a)" }}>
      <div className="container">
        <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-2">{en}</p>
        <h1 className="font-serif-jp text-3xl md:text-4xl font-bold text-white">{title}</h1>
        <div className="mt-3 w-12 h-px" style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "#050a1a", color: "#fff" }}>
      <Header />
      <PageHero title="日田イルミナージュとは" en="About" />

      {/* コンセプト */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <p className="font-sans-jp text-white/60 text-sm leading-loose mb-10">
            日田イルミナージュ2026は、大分県日田市のサッポロビール九州日田工場を舞台に開催される、
            冬の大型イルミネーションイベントです。
          </p>
          <div className="relative rounded-2xl border border-[#D4AF37]/30 p-8 md:p-10 mb-10"
            style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(5,10,26,0) 60%)" }}>
            <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-4">CONCEPT</p>
            <h2 className="font-serif-jp text-white text-2xl md:text-3xl font-bold leading-relaxed mb-6">
              冬の日田を、光の観光地へ。
            </h2>
            <p className="font-sans-jp text-white/70 leading-relaxed">
              光をきっかけに、日田の食・宿・観光・文化を体験していただき、何度でも訪れたくなる「日田のファン」を増やすことを目指しています。
              地域の事業者・住民・行政が一体となって作り上げる、日田ならではの冬の祭典です。
            </p>
          </div>

          {/* 開催概要 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
            <h3 className="font-serif-jp text-[#D4AF37] text-lg font-bold mb-6 pb-3 border-b border-white/10">開催概要</h3>
            <dl className="space-y-5">
              {[
                { icon: <Calendar size={16} className="text-[#D4AF37]" />, label: "開催期間", value: "2026年10月31日（土）〜2027年1月31日（日）／全93日間" },
                { icon: <MapPin size={16} className="text-[#D4AF37]" />, label: "会場", value: "サッポロビール九州日田工場（〒877-0054 大分県日田市高瀬６９７９）" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <div className="mt-0.5 shrink-0">{icon}</div>
                  <div>
                    <dt className="text-xs text-white/40 font-sans-jp mb-0.5">{label}</dt>
                    <dd className="font-sans-jp text-white/90">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* 実施体制 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
            <h3 className="font-serif-jp text-[#D4AF37] text-lg font-bold mb-6 pb-3 border-b border-white/10">実施体制</h3>
            <dl className="space-y-4">
              {[
                { label: "主催", value: "日田イルミナージュ実行委員会" },
                { label: "企画運営", value: "株式会社BIDOW", url: "https://kyushu-illuminage.jp/", urlLabel: "九州イルミナージュ公式サイト" },
                { label: "協力", value: "一般社団法人日本イルミネーション協会", url: "https://jia-or.jp/", urlLabel: "日本イルミネーション協会公式サイト" },
                { label: "後援", value: "一般社団法人日田市観光協会", url: "https://oidehita.com/", urlLabel: "一般社団法人日田市観光協会公式サイト" },
                { label: "後援", value: "日田温泉旅館組合" },
              ].map(({ label, value, url, urlLabel }, i) => (
                <div key={i} className="flex gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <dt className="font-sans-jp text-xs text-white/40 w-20 shrink-0 pt-0.5">{label}</dt>
                  <dd>
                    <p className="font-sans-jp text-white/85">{value}</p>
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-sans-jp text-xs text-[#D4AF37] hover:text-[#e8c870] transition-colors mt-1"
                      >
                        {urlLabel} <ArrowRight size={10} />
                      </a>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 3つの価値 */}
          <div className="mb-10">
            <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-6">WHY HITA</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Star size={20} className="text-[#D4AF37]" />, title: "圧倒的な規模", desc: "九州最大級のイルミネーション。工場の広大な敷地を活かした光の空間演出。" },
                { icon: <MapPin size={20} className="text-[#D4AF37]" />, title: "日田の魅力と融合", desc: "日田温泉・グルメ・歴史文化と組み合わせた、滞在型の観光体験を提供。" },
                { icon: <Calendar size={20} className="text-[#D4AF37]" />, title: "93日間の長期開催", desc: "10月末から翌年1月末まで。年末年始も含む冬の観光シーズンを通じて開催。" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="mb-3">{icon}</div>
                  <h4 className="font-serif-jp text-white font-bold mb-2">{title}</h4>
                  <p className="font-sans-jp text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-2 font-sans-jp text-sm font-bold px-8 py-4 rounded-full transition-all"
              style={{ background: "linear-gradient(135deg, #D4AF37, #C8A35A)", color: "#050a1a" }}
            >
              ☆ 協賛・スポンサーについて <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
