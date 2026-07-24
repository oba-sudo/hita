import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#10243E] text-white/80">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#C8A35A] text-lg">◆</span>
              <span className="font-serif-jp text-white font-bold text-base">日田イルミナージュ<span className="text-[#C8A35A] font-display ml-1 text-sm">2026</span></span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed font-sans-jp">光を見に来る。<br />日田に泊まり、食べ、巡り、また訪れる。</p>
          </div>
          <div>
            <h3 className="text-[#C8A35A] font-bold text-sm mb-3 font-sans-jp">イベント情報</h3>
            <ul className="space-y-2 text-sm">
              {[{ label: "本日の開催情報", href: "/today" }, { label: "イベント概要", href: "/about" }, { label: "見どころ", href: "/highlights" }, { label: "チケット", href: "/ticket" }, { label: "アクセス", href: "/access" }].map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-[#C8A35A] transition-colors font-sans-jp">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#C8A35A] font-bold text-sm mb-3 font-sans-jp">日田を楽しむ</h3>
            <ul className="space-y-2 text-sm">
              {[{ label: "飲食店", href: "/restaurants" }, { label: "宿泊施設", href: "/stay" }, { label: "観光スポット", href: "/tourism" }, { label: "ギャラリー", href: "/gallery" }, { label: "FAQ", href: "/faq" }].map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-[#C8A35A] transition-colors font-sans-jp">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#C8A35A] font-bold text-sm mb-3 font-sans-jp">運営体制</h3>
            <dl className="space-y-2 text-xs font-sans-jp">
              <div><dt className="text-white/50">主催</dt><dd className="text-white/80">日田光の町づくり実行委員会</dd></div>
              <div><dt className="text-white/50">企画・運営</dt><dd className="text-white/80">株式会社BIDOW</dd></div>
              <div><dt className="text-white/50">後援</dt><dd className="text-white/80">日田市 / 日田市観光協会</dd></div>
              <div><dt className="text-white/50">イルミネーション企画・演出協力</dt><dd className="text-white/80">イルミネーション協会<br /><span className="text-white/50 text-[10px]">※2026年度</span></dd></div>
            </dl>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50 font-sans-jp">
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-[#C8A35A] transition-colors">お問い合わせ</Link>
            <Link href="/sponsor" className="hover:text-[#C8A35A] transition-colors">協賛募集</Link>
            <Link href="/privacy" className="hover:text-[#C8A35A] transition-colors">プライバシーポリシー</Link>
          </div>
          <p>© 2026 日田光の町づくり実行委員会 / 株式会社BIDOW</p>
        </div>
      </div>
    </footer>
  );
}
