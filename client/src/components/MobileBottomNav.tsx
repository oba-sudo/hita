/**
 * MobileBottomNav — スマホ来場者向け固定ナビ
 * デザイン方針: 片手で「見どころ・チケット・アクセス・FAQ」へ到達できる最短導線。
 */
import { Link, useLocation } from "wouter";
import { CircleHelp, MapPin, Sparkles, Ticket } from "lucide-react";

const ITEMS = [
  { href: "/events", label: "見どころ", icon: Sparkles },
  { href: "/tickets", label: "チケット", icon: Ticket, primary: true },
  { href: "/access", label: "アクセス", icon: MapPin },
  { href: "/faq", label: "FAQ", icon: CircleHelp },
];

export default function MobileBottomNav() {
  const [location] = useLocation();
  return (
    <nav className="fixed inset-x-2 bottom-2 z-50 grid grid-cols-4 overflow-hidden rounded-[20px] border border-white/10 bg-[#050719]/95 shadow-[0_12px_42px_rgba(0,0,0,.55)] backdrop-blur-xl lg:hidden" aria-label="スマートフォン用ナビゲーション">
        {ITEMS.map(({ href, icon: Icon, label, primary }) => {
          const active = location === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-[64px] flex-col items-center justify-center gap-1.5 font-sans-jp text-[10px] transition-colors ${primary ? "bg-gradient-to-br from-[#ED3387] to-[#FF8B6A] text-white" : active ? "text-[#F5C95D]" : "text-white/55"}`}
            >
              <Icon size={17} strokeWidth={1.8} />
              {label}
            </Link>
          );
        })}
    </nav>
  );
}
