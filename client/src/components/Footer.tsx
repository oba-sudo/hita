// Footer — ダークスペーステーマ
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
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#D4AF37] text-xl">◆</span>
              <span className="font-serif-jp font-bold text-white text-lg">
                日田イルミナージュ<span className="font-display text-[#D4AF37] ml-1">2026</span>
              </span>
            </div>
            <p className="font-sans-jp text-white/45 text-xs leading-relaxed mb-4">
              大分県日田市サッポロビール日田工場を舞台に<br />
              開催される冬のイルミネーションイベント。<br />
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

          <div>
            <h4 className="font-display text-[#D4AF37] text-xs tracking-widest mb-4 uppercase">Event</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "イベント概要" },
                { href: "/highlights", label: "見どころ" },
                { href: "/ticket", label: "チケット" },
                { href: "/today", label: "本日の開催情報" },
                { href: "/gallery", label: "ギャラリー" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans-jp text-white/45 hover:text-white/90 text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[#D4AF37] text-xs tracking-widest mb-4 uppercase">Visit</h4>
            <ul className="space-y-2">
              {[
                { href: "/access", label: "アクセス" },
                { href: "/restaurants", label: "飲食店" },
                { href: "/stay", label: "宿泊施設" },
                { href: "/tourism", label: "観光スポット" },
                { href: "/faq", label: "よくある質問" },
                { href: "/contact", label: "お問い合わせ" },
                { href: "/sponsor", label: "協賛・協力" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans-jp text-white/45 hover:text-white/90 text-xs transition-colors">
                    {l.label}
                  </Link>
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
            © 2026 日田光の町づくり実行委員会 / 株式会社BIDOW. All rights reserved.
          </p>
          <Link href="/privacy" className="font-sans-jp text-white/30 hover:text-white/60 text-xs transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
