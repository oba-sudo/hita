// Achievements.tsx — 過去実績ページ
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";

const IMG = {
  g1: "/manus-storage/gallery1_b05537d1.jpg",
  g2: "/manus-storage/gallery2_3f1cfbd2.jpg",
  g3: "/manus-storage/gallery3_a3ce42f5.jpg",
  hero: "/manus-storage/hero_clean1_073b3b8e.jpg",
  crowd: "/manus-storage/hita_crowd_clean_1ea4edaa.jpg",
};

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

export default function Achievements() {
  return (
    <div className="min-h-screen" style={{ background: "#050a1a", color: "#fff" }}>
      <Header />
      <PageHero title="過去実績" en="Track Record" />
      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="font-sans-jp text-white/60 text-sm leading-loose max-w-2xl mb-12">
            イルミナージュは、これまで全国各地で開催されてきたイルミネーションイベントです。
            日田イルミナージュ2026では、過去の開催で培われた会場演出、運営、安全管理、広報、集客などの知見を生かし、
            日田の地域特性に合わせた新しい冬のイベントをつくります。
          </p>

          {/* 九州イルミナージュ */}
          <div
            className="rounded-xl overflow-hidden mb-8"
            style={{ border: "1px solid rgba(212,175,55,0.15)" }}
          >
            <div className="relative h-48 md:h-64">
              <img src={IMG.crowd} alt="九州イルミナージュ ※過去開催イメージ" className="w-full h-full object-cover" style={{ filter: "brightness(0.6)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,26,0.9) 0%, transparent 60%)" }} />
              <p className="absolute top-3 right-3 font-sans-jp text-white/40 text-xs">※過去開催イメージ</p>
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-1">Kyushu Illuminage</p>
                <h2 className="font-serif-jp text-white text-xl font-bold">九州イルミナージュ</h2>
              </div>
            </div>
            <div className="p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
              <p className="font-sans-jp text-white/65 text-sm leading-loose mb-4">
                株式会社BIDOWが手がける九州イルミナージュは、福岡・佐賀をはじめとした九州各地で開催されてきたイルミネーションイベントです。
                地域の特色を生かした会場演出と、地域連携型の運営体制が特徴です。
              </p>
              <a
                href="https://kyushu-illuminage.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans-jp text-sm font-bold transition-colors"
                style={{ color: "#D4AF37" }}
              >
                九州イルミナージュ公式サイト <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* 日本イルミネーション協会 */}
          <div
            className="rounded-xl p-6 mb-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(160,192,224,0.2)" }}
          >
            <span
              className="inline-block font-display text-xs tracking-widest px-2 py-0.5 rounded mb-3"
              style={{ background: "rgba(160,192,224,0.12)", color: "#a0c0e0", border: "1px solid rgba(160,192,224,0.3)" }}
            >
              協力団体
            </span>
            <h3 className="font-serif-jp text-white text-lg font-bold mb-2">一般社団法人日本イルミネーション協会</h3>
            <p className="font-sans-jp text-white/55 text-sm leading-loose mb-4">
              全国のイルミネーションイベントを支援・認定する専門団体。
              日田イルミナージュ2026では、同協会の協力のもと、イベントの品質確保と安全な運営を進めます。
            </p>
            <a
              href="https://jia-or.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-jp text-sm font-bold transition-colors"
              style={{ color: "#a0c0e0" }}
            >
              日本イルミネーション協会公式サイト <ExternalLink size={13} />
            </a>
          </div>

          {/* ギャラリー */}
          <h3 className="font-serif-jp text-white text-lg font-bold mb-4">過去開催イメージ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[IMG.g1, IMG.g2, IMG.g3].map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-video">
                <img src={src} alt={`過去開催イメージ${i + 1}`} className="w-full h-full object-cover" style={{ filter: "brightness(0.75)" }} />
                <p className="absolute bottom-2 right-2 font-sans-jp text-white/40 text-xs">※過去開催イメージ</p>
              </div>
            ))}
          </div>
          <p className="font-sans-jp text-white/35 text-xs">
            ※掲載画像はすべて過去開催のイメージです。日田イルミナージュ2026の実際の会場・演出とは異なります。
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
