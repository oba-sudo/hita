// PageLayout — 共通レイアウトラッパー（ダークスペーステーマ）
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";
import ScrollToTopButton from "./ScrollToTopButton";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0" style={{ background: "#050a1a" }}>
      <Header />
      <main className="relative z-10">{children}</main>
      <MobileBottomNav />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
