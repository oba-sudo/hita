// Footer — 第1段階構成
import { Link } from "wouter";
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        background: "#030712",
        borderTop: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#D4AF37] text-xl">◆</span>
              <span className="font-serif-jp font-bold text-white text-lg">
                日田イルミナージュ<span className="font-display text-[#D4AF37] ml-1">2026</span>
              </span>
            </div>
            <p className="font-sans-jp text-white/45 text-xs leading-relaxed mb-4">
              サッポロビール九州日田工場を舞台に開催される<br />
              冬のイルミネーションイベント。<br />
              2026年10月31日〜2027年1月31日（93日間）
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white/35 hover:text-[#D4AF37] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/35 hover:text-[#D4AF37] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* サイトマップ */}
          <div>
            <h4 className="font-display text-[#D4AF37] text-xs tracking-widest mb-4 uppercase">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "日田イルミナージュとは" },
                { href: "/overview", label: "開催概要" },
                { href: "/organization", label: "開催体制" },
                { href: "/achievements", label: "過去実績" },
                { href: "/news", label: "お知らせ" },
                { href: "/access", label: "アクセス" },
                { href: "/contact", label: "お問い合わせ" },
                { href: "/sponsor", label: "協賛・スポンサー募集" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans-jp text-white/45 hover:text-white/90 text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 実施体制 */}
          <div>
            <h4 className="font-display text-[#D4AF37] text-xs tracking-widest mb-4 uppercase">Organization</h4>
            <ul className="space-y-3">
              {[
                { role: "主催", name: "日田イルミナージュ実行委員会" },
                { role: "企画運営", name: "株式会社BIDOW" },
                { role: "協力", name: "一般社団法人日本イルミネーション協会" },
                { role: "後援", name: "一般社団法人日田市観光協会\n日田市\n日田商工会議所" },
              ].map((o) => (
                <li key={o.role} className="flex gap-2">
                  <span className="font-sans-jp text-[#D4AF37]/70 text-xs shrink-0 w-14">{o.role}</span>
                  <span className="font-sans-jp text-white/55 text-xs whitespace-pre-line">{o.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-3"
          style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
        >
          <p className="font-sans-jp text-white/30 text-xs">
            © 2026 日田イルミナージュ実行委員会 / 株式会社BIDOW. All rights reserved.
          </p>
          <Link href="/privacy" className="font-sans-jp text-white/30 hover:text-white/60 text-xs transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
