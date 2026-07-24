// PageLayout — 共通レイアウトラッパー（ダークスペーステーマ）
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen" style={{ background: "#050a1a" }}>
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

