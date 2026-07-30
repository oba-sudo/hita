// Header — 第1段階構成（協賛営業用公式サイト）
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Star } from "lucide-react";

const NAV_ITEMS = [
  { href: "/about", label: "日田イルミナージュとは" },
  { href: "/overview", label: "開催概要" },
  { href: "/organization", label: "開催体制" },
  { href: "/achievements", label: "過去実績" },
  { href: "/news", label: "お知らせ" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
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
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#D4AF37] text-lg">◆</span>
            <span className="font-serif-jp font-bold text-white text-sm md:text-base leading-tight">
              日田イルミナージュ
              <span className="font-display text-[#D4AF37] ml-1 text-xs md:text-sm">2026</span>
            </span>
          </Link>

          {/* PCナビ */}
          <nav className="hidden lg:flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans-jp text-xs text-white/65 hover:text-[#D4AF37] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右側CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/sponsor"
              className="flex items-center gap-1.5 font-bold text-xs font-sans-jp px-4 py-2 rounded transition-all active:scale-95"
              style={{ background: "#D4AF37", color: "#050a1a" }}
            >
              <Star size={12} />
              協賛・スポンサーについて
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

      {/* モバイルメニュー */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20"
          style={{ background: "rgba(5,10,26,0.97)", backdropFilter: "blur(16px)" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {[...NAV_ITEMS].map((item) => (
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
              href="/sponsor"
              className="block w-full text-center font-bold font-sans-jp py-4 rounded-lg text-base"
              style={{ background: "#D4AF37", color: "#050a1a" }}
            >
              ★ 協賛・スポンサーについて
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
