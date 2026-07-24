// MobileBottomNav — スマートフォン下部固定ナビ
import { Link, useLocation } from "wouter";
import { CalendarCheck, Ticket, MapPin, Menu } from "lucide-react";

const ITEMS = [
  { href: "/today", icon: CalendarCheck, label: "本日の開催" },
  { href: "/ticket", icon: Ticket, label: "チケット" },
  { href: "/access", icon: MapPin, label: "アクセス" },
  { href: "/about", icon: Menu, label: "メニュー" },
];

export default function MobileBottomNav() {
  const [location] = useLocation();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "rgba(5,10,26,0.95)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div className="flex">
        {ITEMS.map(({ href, icon: Icon, label }) => {
          const active = location === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex-1 flex flex-col items-center gap-0.5 py-2 transition-colors"
              style={{ color: active ? "#D4AF37" : "rgba(255,255,255,0.5)" }}
            >
              <Icon size={18} />
              <span className="font-sans-jp text-[10px]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
