// Organization.tsx — 開催体制ページ
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

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

export default function Organization() {
  const orgs = [
    {
      role: "主催",
      name: "日田イルミナージュ実行委員会",
      desc: "本イベントの主催団体。日田市における冬季観光の振興を目的に設立された実行委員会です。",
      color: "#D4AF37",
    },
    {
      role: "企画運営",
      name: "株式会社BIDOW",
      desc: "イルミネーションイベントの企画・制作・運営を専門とする会社。九州イルミナージュをはじめ、全国各地でイルミネーションイベントを手がけてきた実績を持ちます。",
      color: "#C8A35A",
      url: "https://kyushu-illuminage.jp/",
      urlLabel: "九州イルミナージュ公式サイト",
    },
    {
      role: "協力",
      name: "一般社団法人日本イルミネーション協会",
      desc: "全国のイルミネーションイベントを支援・認定する専門団体。イルミネーションの品質基準の策定や、開催支援を行っています。",
      color: "#a0c0e0",
      url: "https://jia-or.jp/",
      urlLabel: "日本イルミネーション協会公式サイト",
    },
    {
      role: "後援",
      name: "一般社団法人日田市観光協会",
      desc: "日田市の観光振興を担う団体。地域の観光資源の発掘・発信と、来訪者の受け入れ体制整備を推進しています。",
      color: "#80c080",
      url: "https://oidehita.com/",
      urlLabel: "一般社団法人日田市観光協会公式サイト",
    },
    {
      role: "後援",
      name: "日田温泉旅館組合",
      desc: "日田温泉の旅館・ホテルで構成される組合。宿泊と観光の連携を通じて、日田への滞在型観光を推進しています。",
      color: "#80c080",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#050a1a", color: "#fff" }}>
      <Header />
      <PageHero title="開催体制" en="Organization" />
      <section className="py-16">
        <div className="container max-w-3xl">
          <p className="font-sans-jp text-white/60 text-sm leading-loose mb-10">
            日田イルミナージュ2026は、日田イルミナージュ実行委員会が主催し、株式会社BIDOWが企画運営を行います。
            一般社団法人日本イルミネーション協会の協力のもと、イベントの企画と会場づくりを進めます。
          </p>
          <div className="space-y-4">
            {orgs.map((o, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span
                  className="inline-block font-display text-xs tracking-widest px-2 py-0.5 rounded mb-3"
                  style={{ background: `${o.color}22`, color: o.color, border: `1px solid ${o.color}44` }}
                >
                  {o.role}
                </span>
                <h3 className="font-serif-jp text-white text-lg font-bold mb-2">{o.name}</h3>
                <p className="font-sans-jp text-white/55 text-sm leading-relaxed mb-3">{o.desc}</p>
                {o.url && (
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans-jp text-xs transition-colors"
                    style={{ color: o.color }}
                  >
                    {o.urlLabel} <ArrowRight size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
