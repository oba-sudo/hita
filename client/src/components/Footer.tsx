/**
 * Footer — イベント本番仕様
 * デザイン方針: Immersive Celestial Festival。来場情報を簡潔に再掲し、協賛は補助導線として残す。
 */
import { Link } from "wouter";
import { ArrowUpRight, Instagram, Mail, MapPin, Ticket } from "lucide-react";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

const mainLinks = [
  { href: "/events", label: "イベント・見どころ" },
  { href: "/tickets", label: "前売りチケット" },
  { href: "/faq", label: "よくある質問" },
  { href: "/partners", label: "後援・協賛" },
  { href: "/access", label: "アクセス" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#02030d]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <img src={RENEWAL_ASSETS.logoHiRes} alt="日田イルミナージュ" className="h-auto w-full max-w-[360px] object-contain object-left drop-shadow-[0_0_18px_rgba(244,63,142,.22)]" />
            <p className="mt-6 max-w-md font-serif-jp text-xl leading-relaxed text-white/80">九州初上陸。冬の日田で、<br />光が泳ぐ93日間。</p>
            <div className="mt-7 flex flex-col gap-3 font-sans-jp text-xs text-white/50">
              <p>2026年10月31日（土）〜2027年1月31日（日）</p>
              <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0 text-[#F43F8E]" />サッポロビール九州日田工場<br />大分県日田市高瀬6979</p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-display text-[10px] tracking-[.28em] text-[#F5C95D]">NAVIGATION</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3" aria-label="フッターナビゲーション">
              {mainLinks.map((item) => (
                <Link key={item.href} href={item.href} className="font-sans-jp text-xs text-white/55 transition-colors hover:text-white">{item.label}</Link>
              ))}
            </nav>
            <Link href="/tickets" className="ticket-glow mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans-jp text-xs font-bold text-white">
              <Ticket size={14} /> 前売りチケット情報
            </Link>
          </div>

          <div>
            <p className="mb-5 font-display text-[10px] tracking-[.28em] text-[#55D9FF]">ENQUIRIES</p>
            <a href="mailto:info@bidow.jp" className="flex items-center gap-2 font-sans-jp text-sm text-white/75 transition-colors hover:text-white"><Mail size={15} /> info@bidow.jp</a>
            <a href="https://www.instagram.com/hita_illuminage/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 font-sans-jp text-sm text-white/70 transition-colors hover:text-[#FF83B7]"><Instagram size={16} /> @hita_illuminage</a>
            <p className="mt-3 font-sans-jp text-[11px] leading-6 text-white/38">イベント・取材・地域連携等のお問い合わせを受け付けています。</p>
            <Link href="/sponsor" className="mt-6 inline-flex items-center gap-2 font-sans-jp text-xs text-white/50 transition-colors hover:text-[#FF9CC8]">協賛・スポンサー募集 <ArrowUpRight size={13} /></Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="font-sans-jp text-[10px] leading-6 text-white/34">
              <p>主催：日田イルミナージュ実行委員会</p>
              <p>共催：<a href="https://skyhopbrew.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#55D9FF]">スカイホップブルーイング株式会社</a></p>
              <p>後援：<Link href="/partners" className="transition-colors hover:text-[#55D9FF]">日田市・日田商工会議所・一般社団法人日田市観光協会・進撃の日田まちおこし協議会</Link></p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <Link href="/privacy" className="font-sans-jp text-[10px] text-white/32 transition-colors hover:text-white/65">プライバシーポリシー</Link>
              <p className="font-sans-jp text-[10px] text-white/32">© 2026 日田イルミナージュ実行委員会</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
