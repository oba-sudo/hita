/**
 * Header — イベント本番仕様
 * デザイン方針: Immersive Celestial Festival。透過ヘッダーから濃紺ガラスへ遷移し、チケットCTAを最優先する。
 */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Globe2, Instagram, Menu, Sparkles, Ticket, X } from "lucide-react";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const EVENT_LINKS = [
  { label: "日田イルミナージュ", sub: "現在のイベント", href: "/", external: false },
  { label: "神戸イルミナージュ", sub: "KOBE", href: "https://illuminagegroup.com/events/kobe", external: true },
  { label: "大阪城イルミナージュ", sub: "OSAKA", href: "https://illuminagegroup.com/events/osaka", external: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [location] = useLocation();
  const eventsRef = useRef<HTMLDivElement>(null);
  const hasLightPageSurface = ["/overview", "/faq", "/tickets", "/partners"].includes(location);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setEventsOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.dataset.mobileMenu = mobileOpen ? "open" : "closed";
    return () => {
      delete document.documentElement.dataset.mobileMenu;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!eventsRef.current?.contains(event.target as Node)) setEventsOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[70] transition-all duration-300"
        style={{
          background: scrolled || hasLightPageSurface ? "rgba(3,5,19,0.94)" : "linear-gradient(180deg,rgba(3,5,19,.92),rgba(3,5,19,.18),transparent)",
          backdropFilter: scrolled || hasLightPageSurface ? "blur(18px)" : "none",
          borderBottom: scrolled || hasLightPageSurface ? "1px solid rgba(255,255,255,.1)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-5 md:h-20 md:px-8">
          <Link href="/" className="group flex min-h-11 min-w-0 items-center" aria-label="日田イルミナージュ トップページ">
            <img src={RENEWAL_ASSETS.logoHiRes} alt="日田イルミナージュ" className="h-9 w-auto max-w-[132px] object-contain object-left drop-shadow-[0_0_12px_rgba(244,63,142,.28)] sm:h-11 sm:max-w-[166px] md:h-14 md:max-w-[218px]" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
            <div ref={eventsRef} className="relative">
              <button
                type="button"
                onClick={() => setEventsOpen((open) => !open)}
                aria-expanded={eventsOpen}
                className="flex items-center gap-1.5 font-sans-jp text-xs font-medium text-white/75 transition-colors hover:text-white"
              >
                イベント <ChevronDown size={13} className={`transition-transform ${eventsOpen ? "rotate-180" : ""}`} />
              </button>
              {eventsOpen && (
                <div className="absolute left-1/2 top-9 w-64 -translate-x-1/2 border border-white/10 bg-[#07091d]/95 p-2 shadow-2xl backdrop-blur-xl">
                  {EVENT_LINKS.map((item) =>
                    item.external ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-3 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
                        <span className="font-sans-jp text-xs">{item.label}</span>
                        <span className="font-display text-[9px] tracking-[.16em] text-[#55D9FF]">{item.sub}</span>
                      </a>
                    ) : (
                      <Link key={item.label} href={item.href} className="flex items-center justify-between bg-white/5 px-3 py-3 text-white">
                        <span className="font-sans-jp text-xs">{item.label}</span>
                        <span className="font-sans-jp text-[9px] text-[#F5C95D]">{item.sub}</span>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
            <Link href="/overview" className="font-sans-jp text-xs font-medium text-white/75 transition-colors hover:text-white">開催概要</Link>
            <Link href="/faq" className="font-sans-jp text-xs font-medium text-white/75 transition-colors hover:text-white">よくある質問</Link>
            <Link href="/access" className="font-sans-jp text-xs font-medium text-white/75 transition-colors hover:text-white">アクセス</Link>
            <Link href="/contact" className="font-sans-jp text-xs font-medium text-white/75 transition-colors hover:text-white">お問い合わせ</Link>
            <a href="https://www.instagram.com/hita_illuminage/" target="_blank" rel="noopener noreferrer" aria-label="日田イルミナージュ公式Instagram" className="text-white/65 transition-colors hover:text-[#FF83B7]">
              <Instagram size={16} />
            </a>
            <span className="flex items-center gap-1.5 border-l border-white/15 pl-6 font-sans-jp text-xs text-white/55" aria-label="表示言語 日本語">
              <Globe2 size={14} /> JA
            </span>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link
              href="/tickets"
              className="ticket-glow inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-2.5 font-sans-jp text-xs font-bold text-white transition-transform active:scale-[.97] sm:gap-2 sm:px-4 md:px-6 md:py-3"
            >
              <Ticket size={14} />
              <span className="hidden sm:inline">前売りチケット情報</span>
              <span className="sm:hidden">前売り</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={mobileOpen}
              className="grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C95D] lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#030513]/98 px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-20 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-lg" aria-label="モバイルナビゲーション">
            <div className="mb-6 flex items-center gap-2 font-display text-[10px] tracking-[.28em] text-[#F5C95D]">
              <Sparkles size={14} /> EVENTS
            </div>
            <div className="border-y border-white/10">
              {EVENT_LINKS.map((item) =>
                item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between border-b border-white/5 py-4 text-white/75 last:border-b-0">
                    <span className="font-sans-jp text-sm">{item.label}</span>
                    <span className="font-display text-[10px] tracking-[.16em] text-[#55D9FF]">{item.sub}</span>
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className="flex min-h-14 items-center justify-between border-b border-white/5 py-4 text-white last:border-b-0">
                    <span className="font-sans-jp text-sm">{item.label}</span>
                    <span className="font-sans-jp text-[10px] text-[#F5C95D]">{item.sub}</span>
                  </Link>
                )
              )}
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              <Link href="/overview" className="flex min-h-16 items-center justify-center bg-[#030513] px-3 py-4 text-center font-sans-jp text-sm text-white/75">開催概要</Link>
              <Link href="/access" className="flex min-h-16 items-center justify-center bg-[#030513] px-3 py-4 text-center font-sans-jp text-sm text-white/75">アクセス</Link>
              <Link href="/faq" className="flex min-h-16 items-center justify-center bg-[#030513] px-4 py-4 text-center font-sans-jp text-sm text-white/75">よくある質問</Link>
              <Link href="/contact" className="flex min-h-16 items-center justify-center bg-[#030513] px-4 py-4 text-center font-sans-jp text-sm text-white/75">お問い合わせ</Link>
            </div>
            <a href="https://www.instagram.com/hita_illuminage/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 border border-white/10 py-3.5 font-sans-jp text-sm text-white/70">
              <Instagram size={16} className="text-[#FF83B7]" /> 公式Instagram
            </a>
            <Link href="/tickets" className="ticket-glow mt-6 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-sans-jp text-sm font-bold text-white">
              <Ticket size={16} /> 前売りチケット情報を見る
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
