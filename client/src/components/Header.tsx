// Header — ヨルノヨ参考スタイル（ダークスペーステーマ）
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Ticket, CalendarCheck } from "lucide-react";

const NAV_ITEMS = [
  { href: "/sponsor", label: "協賛企業募集", highlight: true },
  { href: "/about", label: "イベント概要" },
  { href: "/highlights", label: "見どころ" },
  { href: "/ticket", label: "チケット" },
  { href: "/access", label: "アクセス" },
  { href: "/restaurants", label: "飲食店" },
  { href: "/stay", label: "宿泊施設" },
  { href: "/gallery", label: "ギャラリー" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  type NavItem = { href: string; label: string; highlight?: boolean };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5,10,26,0.94)"
            : "linear-gradient(to bottom, rgba(5,10,26,0.75), transparent)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#D4AF37] text-lg">◆</span>
            <span className="font-serif-jp font-bold text-white text-sm md:text-base leading-tight">
              日田イルミナージュ
              <span className="font-display text-[#D4AF37] ml-1 text-xs md:text-sm">2026</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            {(NAV_ITEMS as NavItem[]).map((item) =>
              item.highlight ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans-jp text-xs font-bold px-3 py-1 rounded border transition-all active:scale-95"
                  style={{ borderColor: "rgba(212,175,55,0.6)", color: "#D4AF37" }}
                >
                  ★ {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans-jp text-xs text-white/65 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/today"
              className="hidden md:flex items-center gap-1.5 text-xs font-sans-jp text-white/65 hover:text-[#D4AF37] transition-colors px-3 py-1.5"
            >
              <CalendarCheck size={13} />
              本日の開催
            </Link>
            <Link
              href="/ticket"
              className="flex items-center gap-1.5 font-bold text-xs font-sans-jp px-4 py-2 rounded transition-all active:scale-95"
              style={{ background: "#D4AF37", color: "#050a1a" }}
            >
              <Ticket size={13} />
              チケット購入
            </Link>
            <button
              className="lg:hidden text-white/80 hover:text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="メニュー"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20"
          style={{ background: "rgba(5,10,26,0.97)", backdropFilter: "blur(16px)" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {[...NAV_ITEMS,
              { href: "/today", label: "本日の開催情報" },
              { href: "/faq", label: "よくある質問" },
              { href: "/contact", label: "お問い合わせ" },
              { href: "/sponsor", label: "協賛募集" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans-jp text-white/80 hover:text-[#D4AF37] text-base py-3 border-b border-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-4">
            <Link
              href="/ticket"
              className="block w-full text-center font-bold font-sans-jp py-4 rounded-lg text-base"
              style={{ background: "#D4AF37", color: "#050a1a" }}
            >
              チケットを購入する
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
