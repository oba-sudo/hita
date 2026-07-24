import { Link, useLocation } from "wouter";
import { CalendarCheck, Ticket, MapPin } from "lucide-react";

export default function MobileNav() {
  const [location] = useLocation();
  const items = [
    { label: "本日の開催", href: "/today", icon: CalendarCheck },
    { label: "チケット", href: "/ticket", icon: Ticket },
    { label: "アクセス", href: "/access", icon: MapPin },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#10243E] border-t border-white/10">
      <div className="flex">
        {items.map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-sans-jp transition-colors ${location === href ? "text-[#C8A35A]" : "text-white/70 hover:text-white"}`}>
            <Icon size={20} /><span>{label}</span>
          </Link>
        ))}
        <Link href="/ticket" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-sans-jp bg-[#C8A35A] text-[#10243E] font-bold">
          <Ticket size={20} /><span>購入する</span>
        </Link>
      </div>
    </nav>
  );
}
