// Home.tsx — 第1段階構成（協賛営業用公式サイト）
// デザイン: 深夜ネイビー×アンティークゴールド、スマホ優先、体験型スクロール
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MapPin, Calendar, Clock, ChevronDown, ArrowRight, Building2, Users, Globe, Award } from "lucide-react";

const IMG = {
  illuminage_each: "/manus-storage/illuminage_each_photo_7df461c2.png",
  saga: "/manus-storage/saga_illuminage_photo_4d895885.png",
  hero: "/manus-storage/hero_clean1_073b3b8e.jpg",
  tunnel: "/manus-storage/hero_clean2_71d5a923.jpg",
  crowd: "/manus-storage/hita_crowd_clean_1ea4edaa.jpg",
  g1: "/manus-storage/saga_illuminage_photo_4d895885.png",
  g2: "/manus-storage/illuminage_each_photo_7df461c2.png",
  g3: "/manus-storage/gallery3_a3ce42f5.jpg",
};

// ─── パーティクル ───────────────────────────────
function GoldParticle({ delay, x }: { delay: number; x: number }) {
  return (
    <div
      className="absolute w-0.5 h-0.5 rounded-full opacity-0"
      style={{
        left: `${x}%`,
        bottom: "0",
        background: "#D4AF37",
        animation: `floatUp 4s ${delay}s ease-out infinite`,
      }}
    />
  );
}

// ─── フェードインフック ──────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ${delay}s ease, transform 0.8s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

// ─── セクション見出し ─────────────────────────────
function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-6 md:mb-8">
      <p className="font-display text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2">{en}</p>
      <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-tight">{ja}</h2>
      <div className="mt-3 w-12 h-px" style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }} />
    </div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 0.4,
    x: 5 + i * 8,
  }));

  return (
    <div className="min-h-screen" style={{ background: "#050a1a", color: "#fff" }}>
      <style>{`
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(1); }
          20% { opacity: 0.8; }
          80% { opacity: 0.4; }
          100% { opacity: 0; transform: translateY(-120px) scale(0.3); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>

      <Header />

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${IMG.hero})`,
            opacity: heroLoaded ? 1 : 0,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <img src={IMG.hero} className="hidden" onLoad={() => setHeroLoaded(true)} alt="" />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,10,26,0.3) 0%, rgba(5,10,26,0.5) 50%, rgba(5,10,26,0.92) 100%)" }} />
        {/* パーティクル */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => <GoldParticle key={i} delay={p.delay} x={p.x} />)}
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 container pb-16 md:pb-24 pt-32">
          {/* 開催決定バッジ */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-sans-jp font-bold"
            style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.4)", color: "#D4AF37" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            開催決定
          </div>

          {/* タイトル */}
          <h1 className="font-serif-jp font-bold leading-none mb-2">
            <span className="block text-white/90 text-4xl md:text-6xl tracking-tight">日田</span>
            <span
              className="block text-5xl md:text-7xl tracking-tight"
              style={{ color: "#D4AF37", textShadow: "0 0 40px rgba(212,175,55,0.4)" }}
            >
              イルミナージュ
            </span>
            <span className="block font-display text-white/60 text-3xl md:text-5xl tracking-widest">2026</span>
          </h1>

          {/* キャッチコピー */}
          <p className="font-serif-jp text-white/80 text-lg md:text-xl mt-4 mb-8 leading-relaxed">
            冬の日田を、光の観光地へ。
          </p>

          {/* ボタン */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/sponsor"
              className="inline-flex items-center justify-center gap-2 font-bold font-sans-jp px-6 py-3.5 rounded-lg text-sm transition-all active:scale-95"
              style={{ background: "#D4AF37", color: "#050a1a" }}
            >
              <Star size={14} />
              協賛・スポンサーについて
            </Link>
            <Link
              href="/overview"
              className="inline-flex items-center justify-center gap-2 font-sans-jp px-6 py-3.5 rounded-lg text-sm transition-all active:scale-95 text-white/80"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              開催概要を見る
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* 開催情報バー */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: Calendar, text: "10/31〜1/31（93日間）" },
              { icon: MapPin, text: "サッポロビール九州日田工場" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon size={13} className="text-[#D4AF37]" />
                <span className="font-sans-jp text-white/60 text-xs">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 実施体制バー */}
        <div
          className="relative z-10 py-3"
          style={{ background: "rgba(5,10,26,0.85)", borderTop: "1px solid rgba(212,175,55,0.12)" }}
        >
          <div className="container">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {[
                { role: "主催", name: "日田イルミナージュ実行委員会" },
                { role: "企画運営", name: "株式会社BIDOW" },
                { role: "協力", name: "一般社団法人日本イルミネーション協会" },
                { role: "後援", name: "一般社団法人日田市観光協会・日田温泉旅館組合" },
              ].map((o) => (
                <div key={o.role} className="flex items-center gap-1.5">
                  <span className="font-sans-jp text-[#D4AF37]/70 text-xs">{o.role}：</span>
                  <span className="font-sans-jp text-white/55 text-xs">{o.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none">
          <span className="font-display text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-white/30" style={{ animation: "scrollBounce 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ─── 開催決定 ─────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#050a1a" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="Announcement" ja={"日田イルミナージュ2026\n開催決定"} />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="max-w-2xl space-y-5 font-sans-jp text-white/70 text-sm leading-loose">
              <p>
                2026年10月31日から2027年1月31日まで、サッポロビール九州日田工場を会場に、「日田イルミナージュ2026」を開催します。
              </p>
              <p>
                全93日間にわたり、日田の冬を彩る新たなイルミネーションイベントとして、地域の皆さまをはじめ、市外・県外から訪れる方々にも楽しんでいただける空間をつくります。
              </p>
              <p>
                イベントの詳細は、決定次第、本サイトで順次お知らせします。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 93日間ビジュアル ─────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vw", maxHeight: 520 }}>
        <img
          src={IMG.crowd}
          alt="イルミナージュ会場全景 ※過去開催イメージ"
          className="w-full h-full object-cover absolute inset-0"
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,10,26,0.85) 0%, rgba(5,10,26,0.3) 60%, transparent 100%)" }} />
        <div className="relative z-10 h-full flex items-center" style={{ minHeight: "inherit" }}>
          <div className="container py-16">
            <FadeIn>
              <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-2">93 Days of Light</p>
              <p className="font-serif-jp font-bold text-white text-5xl md:text-7xl leading-none mb-4">
                93日間、<br />日田が輝く。
              </p>
              <p className="font-sans-jp text-white/60 text-sm max-w-xs leading-relaxed">
                2026年10月31日（土）〜2027年1月31日（日）<br />
                サッポロビール九州日田工場
              </p>
            </FadeIn>
          </div>
        </div>
        <p className="absolute bottom-2 right-3 font-sans-jp text-white/30 text-xs z-10">※過去開催イメージ</p>
      </section>

      {/* ─── 目指すもの ───────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#07101f" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="Vision" ja={"「冬の日田といえばイルミナージュ」\nと言われる未来へ。"} />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <FadeIn delay={0.1}>
              <div className="font-sans-jp text-white/70 text-sm leading-loose space-y-4">
                <p>
                  日田イルミナージュ2026は、イルミネーション会場だけで完結するイベントではありません。
                </p>
                <p>
                  冬の日田を訪れる新たな目的をつくり、来場者の市内回遊と滞在を促進することで、地域全体に賑わいを広げることを目指しています。
                </p>
                <p>
                  来場者の行動を、飲食店、宿泊施設、温泉、観光施設、お土産購入などの地域内消費につなげ、一度限りではなく、日田の冬を代表する継続的な観光コンテンツへ育てていきます。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, title: "地域回遊の促進", desc: "市内飲食・宿泊・温泉・観光施設への誘客" },
                  { icon: Users, title: "継続的な観光資源", desc: "日田の冬を代表するコンテンツへ" },
                  { icon: Building2, title: "地域経済への貢献", desc: "地域内消費の拡大と雇用創出" },
                  { icon: Award, title: "ブランド価値の向上", desc: "日田市の認知度・魅力度向上" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-lg"
                    style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.12)" }}
                  >
                    <item.icon size={20} className="text-[#D4AF37] mb-2" />
                    <p className="font-sans-jp text-white/90 text-xs font-bold mb-1">{item.title}</p>
                    <p className="font-sans-jp text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 開催体制 ─────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#050a1a" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="Organization" ja={"専門団体と地域関係団体が連携する\n日田の冬季観光プロジェクト"} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans-jp text-white/60 text-sm leading-loose max-w-2xl mb-10">
              日田イルミナージュ2026は、日田イルミナージュ実行委員会が主催し、株式会社BIDOWが企画運営を行います。
              イルミネーションイベントに関する専門的な知見と開催実績を持つ、一般社団法人日本イルミネーション協会の協力のもと、
              イベントの企画と会場づくりを進めます。
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                role: "主催",
                name: "日田イルミナージュ実行委員会",
                desc: "本イベントの主催団体。日田市における冬季観光の振興を目的に設立。",
                color: "#D4AF37",
              },
              {
                role: "企画運営",
                name: "株式会社BIDOW",
                desc: "イルミネーションイベントの企画・制作・運営を専門とする会社。",
                color: "#C8A35A",
               url: "https://saga-illuminage.jp/",
              },
              {
                role: "協力",
                name: "一般社団法人日本イルミネーション協会",
                desc: "全国のイルミネーションイベントを支援する専門団体。",
                color: "#a0c0e0",
                url: "https://jia-or.jp/",
              },
              {
                role: "後援",
                name: "一般社団法人日田市観光協会・日田温泉旅館組合",
                desc: "日田市の観光振興を担う地域団体。地域一体型の運営を支援。",
                color: "#80c080",
              },
            ].map((o) => (
              <FadeIn key={o.role} delay={0.1}>
                <div
                  className="p-5 rounded-xl h-full"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="inline-block font-display text-xs tracking-widest px-2 py-0.5 rounded mb-3"
                    style={{ background: `${o.color}22`, color: o.color, border: `1px solid ${o.color}44` }}
                  >
                    {o.role}
                  </span>
                  <p className="font-serif-jp text-white/90 text-sm font-bold mb-2">{o.name}</p>
                  <p className="font-sans-jp text-white/50 text-xs leading-relaxed mb-3">{o.desc}</p>
                  {o.url && (
                    <a
                      href={o.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans-jp text-xs transition-colors"
                      style={{ color: o.color }}
                    >
                      公式サイトを見る <ArrowRight size={11} />
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 過去実績 ─────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#07101f" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="Track Record" ja={"全国で培われてきた\nイルミナージュの開催実績"} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans-jp text-white/60 text-sm leading-loose max-w-2xl mb-10">
              イルミナージュは、これまで全国各地で開催されてきたイルミネーションイベントです。
              日田イルミナージュ2026では、過去の開催で培われた会場演出、運営、安全管理、広報、集客などの知見を生かし、
              日田の地域特性に合わせた新しい冬のイベントをつくります。
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { img: IMG.g1, title: "佐賀イルミナージュ", location: "佐賀県", note: "過去開催イメージ" },
              { img: IMG.g2, title: "イルミナージュ各地", location: "全国各地", note: "過去開催イメージ" },
              { img: IMG.g3, title: "地域連携型イベント", location: "地域一体型運営", note: "過去開催イメージ" },
            ].map((item) => (
              <FadeIn key={item.title} delay={0.1}>
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.7)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,26,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-0 left-0 p-3">
                    <p className="font-serif-jp text-white text-sm font-bold">{item.title}</p>
                    <p className="font-sans-jp text-white/60 text-xs">{item.location}</p>
                  </div>
                  <p className="absolute top-2 right-2 font-sans-jp text-white/40 text-xs">※{item.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <a
              href="https://illuminagegroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-jp text-sm transition-all"
              style={{ color: "#D4AF37" }}
            >
              過去の開催の詳細はこちら（イルミナージュグループ公式サイト） <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── 協賛募集 ─────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a1628 0%, #050a1a 50%, #0d1a0d 100%)" }} />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(212,175,55,0.3) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 container">
          <FadeIn>
            <SectionLabel en="Sponsor" ja={"冬の日田を代表する観光イベントを\nともにつくる企業・団体を募集しています"} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans-jp text-white/65 text-sm leading-loose max-w-2xl mb-8">
              日田イルミナージュ2026では、本プロジェクトの趣旨に賛同し、日田の冬季観光と地域の活性化をともに推進していただける
              企業・団体を募集しています。協賛企業・団体には、公式サイト、会場、広報物、SNSなどへの企業名・ロゴ掲載を予定しています。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/sponsor"
                className="inline-flex items-center justify-center gap-2 font-bold font-sans-jp px-6 py-3.5 rounded-lg text-sm transition-all active:scale-95"
                style={{ background: "#D4AF37", color: "#050a1a" }}
              >
                <Star size={14} />
                協賛について問い合わせる
              </Link>
              <Link
                href="/sponsor"
                className="inline-flex items-center justify-center gap-2 font-sans-jp px-6 py-3.5 rounded-lg text-sm transition-all active:scale-95 text-white/70"
                style={{ border: "1px solid rgba(212,175,55,0.3)" }}
              >
                協賛プランを見る <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 開催概要テーブル ─────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#050a1a" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="Overview" ja="開催概要" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="rounded-xl overflow-hidden max-w-2xl"
              style={{ border: "1px solid rgba(212,175,55,0.15)" }}
            >
              {[
                { label: "イベント名", value: "日田イルミナージュ2026" },
                { label: "開催期間", value: "2026年10月31日（土）〜2027年1月31日（日）" },
                { label: "開催日数", value: "全93日間" },
                { label: "会場", value: "サッポロビール九州日田工場" },
                { label: "所在地", value: "〒877-0054 大分県日田市高瀬６９７９" },
                { label: "主催", value: "日田イルミナージュ実行委員会" },
                { label: "企画運営", value: "株式会社BIDOW" },
                { label: "協力", value: "一般社団法人日本イルミネーション協会" },
                { label: "後援", value: "一般社団法人日田市観光協会、日田温泉旅館組合" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className="flex"
                  style={{ borderBottom: i < 8 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                >
                  <div
                    className="w-28 shrink-0 px-4 py-3.5 font-sans-jp text-xs font-bold"
                    style={{ background: "rgba(212,175,55,0.07)", color: "#D4AF37", borderRight: "1px solid rgba(212,175,55,0.12)" }}
                  >
                    {row.label}
                  </div>
                  <div className="px-4 py-3.5 font-sans-jp text-white/80 text-xs leading-relaxed flex-1">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans-jp text-white/35 text-xs mt-3">
              ※営業時間、入場料金、チケット、駐車場、交通手段などは正式決定後に公開します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── お知らせ ─────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#07101f" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="News" ja="お知らせ" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl space-y-0">
              {[
                { date: "2026.07.30", tag: "開催情報", title: "日田イルミナージュ2026開催決定のお知らせ" },
                { date: "2026.07.30", tag: "協賛募集", title: "協賛・スポンサー募集開始のお知らせ" },
                { date: "2026.07.30", tag: "協力決定", title: "一般社団法人日本イルミネーション協会との協力決定のお知らせ" },
                { date: "2026.07.30", tag: "後援決定", title: "一般社団法人日田市観光協会・日田温泉旅館組合の後援決定のお知らせ" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="font-display text-white/35 text-xs shrink-0 mt-0.5">{item.date}</span>
                  <span
                    className="font-sans-jp text-xs px-2 py-0.5 rounded shrink-0"
                    style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37" }}
                  >
                    {item.tag}
                  </span>
                  <p className="font-sans-jp text-white/70 text-sm leading-relaxed">{item.title}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── アクセス ─────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#050a1a" }}>
        <div className="container">
          <FadeIn>
            <SectionLabel en="Access" ja="アクセス" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div
                  className="p-5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-[#D4AF37]" />
                    <span className="font-sans-jp text-white/90 text-sm font-bold">会場</span>
                  </div>
                  <p className="font-serif-jp text-white text-base font-bold mb-1">サッポロビール九州日田工場</p>
                  <p className="font-sans-jp text-white/55 text-xs">〒877-0054 大分県日田市高瀬６９７９</p>
                </div>
                <p className="font-sans-jp text-white/40 text-xs leading-relaxed">
                  ※駐車場・交通規制などの詳細は、正式決定後に公開します。
                </p>
                <Link
                  href="/access"
                  className="inline-flex items-center gap-1.5 font-sans-jp text-sm transition-colors"
                  style={{ color: "#D4AF37" }}
                >
                  アクセス詳細を見る <ArrowRight size={13} />
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ height: 240 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.5!2d130.9416!3d33.3218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354178c2a8e2d4f1%3A0x1234567890abcdef!2z44K144OD44Od44Ot44O844OT44O844OrOS5E5YmN5bee5YuV5Zyf5bel5Zy6!5e0!3m2!1sja!2sjp!4v1690000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="サッポロビール九州日田工場 地図"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section
        className="py-20 md:py-28 text-center"
        style={{ background: "linear-gradient(to bottom, #07101f, #050a1a)" }}
      >
        <div className="container">
          <FadeIn>
            <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-4">Contact</p>
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              協賛・スポンサーについて<br />お気軽にお問い合わせください
            </h2>
            <p className="font-sans-jp text-white/55 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              協賛プランの詳細、資料のご請求、地域連携についてのご相談など、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/sponsor"
                className="inline-flex items-center justify-center gap-2 font-bold font-sans-jp px-8 py-4 rounded-lg text-sm transition-all active:scale-95"
                style={{ background: "#D4AF37", color: "#050a1a" }}
              >
                <Star size={14} />
                協賛・スポンサーについて
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-sans-jp px-8 py-4 rounded-lg text-sm transition-all active:scale-95 text-white/70"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                お問い合わせ <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
