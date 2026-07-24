import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, CalendarCheck } from "lucide-react";

const navItems = [
  { label: "イベント概要", href: "/about" },
  { label: "見どころ", href: "/highlights" },
  { label: "チケット", href: "/ticket" },
  { label: "アクセス", href: "/access" },
  { label: "飲食店", href: "/restaurants" },
  { label: "宿泊施設", href: "/stay" },
  { label: "観光スポット", href: "/tourism" },
  { label: "ギャラリー", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 shadow-lg" : "py-4"} bg-[#10243E]`}>
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#C8A35A] text-xl font-bold">◆</span>
            <span className="font-serif-jp text-white font-bold text-lg leading-tight">
              日田イルミナージュ<span className="text-[#C8A35A] font-display ml-1 text-base">2026</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 hover:text-[#C8A35A] text-sm font-sans-jp transition-colors">{item.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/today" className="flex items-center gap-1.5 text-white/90 hover:text-[#C8A35A] text-sm font-sans-jp transition-colors">
              <CalendarCheck size={16} />本日の開催
            </Link>
            <Link href="/ticket" className="bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold text-sm px-4 py-2 rounded-lg transition-all active:scale-95 font-sans-jp">
              チケット購入
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <Link href="/today" className="flex items-center gap-1 text-white/90 text-xs font-sans-jp">
              <CalendarCheck size={14} />本日の開催
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#10243E]/95 backdrop-blur-sm lg:hidden">
          <div className="pt-20 px-6 pb-8">
            <nav className="flex flex-col gap-1">
              {[...navItems, { label: "協賛募集", href: "/sponsor" }, { label: "お問い合わせ", href: "/contact" }].map((item) => (
                <Link key={item.href} href={item.href} className="text-white/90 hover:text-[#C8A35A] text-lg font-sans-jp py-3 border-b border-white/10 transition-colors">{item.label}</Link>
              ))}
            </nav>
            <Link href="/ticket" className="mt-6 block w-full bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold text-center py-4 rounded-xl font-sans-jp text-lg">
              チケットを購入する
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
