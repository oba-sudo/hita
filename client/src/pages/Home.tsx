/**
 * Home.tsx — 日田イルミナージュ2026 トップページ
 * デザイン: スマホ優先・体験型スクロール・没入感重視
 * 各セクションが独自の雰囲気を持ち、スクロールで世界観が変わる
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, MapPin, Clock, Calendar, Ticket, ArrowRight, Sparkles, Star, Utensils, Hotel, Camera, Map } from "lucide-react";

// ── 画像URL ──────────────────────────────────────────
const IMG = {
  hero: "/manus-storage/hero_clean1_073b3b8e.jpg",
  tunnel: "/manus-storage/hero_clean2_71d5a923.jpg",
  river: "/manus-storage/hero_clean3_219daed0.jpg",
  crowd: "/manus-storage/hita_wide_crowd_5f089356.jpg",
  crowdClean: "/manus-storage/hita_crowd_clean_1ea4edaa.jpg",
  food: "/manus-storage/hita_food_24c8ee40.jpg",
  v1: "/manus-storage/hita_vertical1_ca94d1c0.jpg",
  v2: "/manus-storage/hita_vertical2_c4f71435.jpg",
  g1: "/manus-storage/gallery1_b05537d1.jpg",
  g2: "/manus-storage/gallery2_3f1cfbd2.jpg",
  g3: "/manus-storage/gallery3_a3ce42f5.jpg",
};

// ── パーティクル（星） ────────────────────────────────
function Stars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur}s ${s.delay}s infinite alternate`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

// ── スクロール進捗フック ──────────────────────────────
function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setProgress(entry.intersectionRatio),
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return progress;
}

// ── フェードイン ──────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#040810] text-white overflow-x-hidden">
      <style>{`
        @keyframes twinkle { from { opacity: 0.2; } to { opacity: 0.9; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes glow-pulse { 0%,100% { text-shadow: 0 0 20px rgba(200,163,90,0.4); } 50% { text-shadow: 0 0 60px rgba(200,163,90,0.9), 0 0 100px rgba(200,163,90,0.4); } }
        @keyframes scroll-hint { 0%,100% { transform: translateY(0); opacity:1; } 50% { transform: translateY(8px); opacity:0.4; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .gold-shimmer {
          background: linear-gradient(90deg, #C8A35A 0%, #f0d080 40%, #C8A35A 60%, #a07830 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .text-glow { animation: glow-pulse 3s ease-in-out infinite; }
        .scroll-hint { animation: scroll-hint 2s ease-in-out infinite; }
        .float { animation: float 4s ease-in-out infinite; }
        .clip-diagonal { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .clip-diagonal-rev { clip-path: polygon(0 12%, 100% 0, 100% 100%, 0 100%); }
        .horizontal-scroll::-webkit-scrollbar { display: none; }
        .horizontal-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: フルスクリーンヒーロー（没入型）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-end pb-16 overflow-hidden">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG.hero})`,
            transform: `scale(1.08) translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        {/* イメージ注釈 */}
        <div className="absolute bottom-16 right-3 z-20 text-[10px] text-white/30 font-sans-jp pointer-events-none select-none">※イメージ画像です</div>
        {/* 多層グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-transparent" />
        {/* 星 */}
        <Stars />

        {/* コンテンツ */}
        <div className="relative z-10 text-center px-6 w-full max-w-lg mx-auto">
          {/* バッジ */}
          <div
            className="inline-flex items-center gap-2 border border-[#C8A35A]/50 rounded-full px-4 py-1.5 mb-6 text-xs tracking-widest text-[#C8A35A] backdrop-blur-sm"
            style={{ opacity: heroLoaded ? 1 : 0, transition: "opacity 1s ease 0.3s", animation: heroLoaded ? undefined : "none" }}
          >
            <Sparkles size={10} />
            HITA ILLUMINAGE 2026
            <Sparkles size={10} />
          </div>

          {/* メインタイトル */}
          <h1
            className="font-display text-[clamp(3rem,14vw,5.5rem)] leading-none tracking-tight mb-2"
            style={{ opacity: 1 }}
          >
            <span className="block text-white drop-shadow-2xl">日田</span>
            <span className="block gold-shimmer">イルミナージュ</span>
            <span className="block text-white/90 text-[0.55em] tracking-[0.3em] mt-1">2026</span>
          </h1>

          {/* サブコピー */}
          <p className="font-sans-jp text-white/70 text-sm tracking-widest mt-4 mb-8">
            冬の日田が、光に包まれる。
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col gap-3 items-center">
            <Link href="/ticket">
              <button className="w-full max-w-xs flex items-center justify-center gap-2 bg-[#C8A35A] text-[#040810] font-bold font-sans-jp py-4 px-8 rounded-full text-sm tracking-wider active:scale-95 transition-transform">
                <Ticket size={16} />
                チケットを購入する
              </button>
            </Link>
            <Link href="/today">
              <button className="w-full max-w-xs flex items-center justify-center gap-2 border border-white/30 text-white font-sans-jp py-3.5 px-8 rounded-full text-sm tracking-wider backdrop-blur-sm active:scale-95 transition-transform">
                <Calendar size={14} />
                本日の開催情報
              </button>
            </Link>
          </div>
        </div>

        {/* 基本情報バー */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md border-t border-white/10 px-4 py-3 flex justify-center gap-6 text-xs text-white/60 font-sans-jp">
          <span className="flex items-center gap-1.5"><Calendar size={11} className="text-[#C8A35A]" />10/31〜1/31（93日間）</span>
          <span className="flex items-center gap-1.5"><Clock size={11} className="text-[#C8A35A]" />17:00〜22:00</span>
          <span className="flex items-center gap-1.5"><MapPin size={11} className="text-[#C8A35A]" />サッポロビール九州日田工場</span>
        </div>

        {/* スクロールヒント */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 scroll-hint">
          <ChevronDown size={20} className="text-white/40" />
        </div>

        {/* 画像プリロード */}
        <img src={IMG.hero} className="hidden" onLoad={() => setHeroLoaded(true)} alt="" />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: 大きな数字で語るイベント規模
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* 背景テクスチャ */}
        <div className="absolute inset-0 bg-[#040810]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C8A35A 0%, transparent 60%), radial-gradient(circle at 80% 20%, #4060a0 0%, transparent 50%)" }} />

        <div className="relative max-w-lg mx-auto">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-3">ABOUT THE EVENT</p>
            <h2 className="font-display text-4xl text-white leading-tight mb-6">
              光で街ごと、<br />
              <span className="gold-shimmer">変わる冬。</span>
            </h2>
            <p className="font-sans-jp text-white/60 text-sm leading-relaxed">
              日田イルミナージュは、単なるイルミネーションイベントではありません。光をきっかけに、日田の食・宿・観光・文化を体験していただき、何度でも訪れたくなる「日田のファン」を増やすことを目指しています。
            </p>
          </FadeIn>

          {/* 数字グリッド */}
          <div className="mt-12 grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { num: "93", unit: "日間", label: "開催日数" },
              { num: "17:00", unit: "〜", label: "開場時間" },
              { num: "FREE", unit: "", label: "駐車場無料" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0a1020] p-6 text-center">
                  <div className="font-display text-3xl text-[#C8A35A] leading-none">
                    {item.num}<span className="text-lg">{item.unit}</span>
                  </div>
                  <div className="font-sans-jp text-white/40 text-xs mt-2">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: 全幅画像 × テキストオーバーレイ（斜めカット）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative clip-diagonal -mb-8">
        <div className="relative h-[70vw] max-h-[420px] overflow-hidden">
          <img src={IMG.tunnel} alt="光のトンネル" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 max-w-sm">
            <FadeIn>
              <p className="text-[#C8A35A] text-xs tracking-[0.3em] font-sans-jp mb-2">HIGHLIGHTS</p>
              <h2 className="font-display text-3xl text-white leading-tight mb-3">
                光のトンネルを<br />歩く体験
              </h2>
              <p className="font-sans-jp text-white/70 text-xs leading-relaxed mb-5">
                色とりどりのLEDが織りなす幻想的なトンネル。歩くたびに光が変化する体験型スポット。
              </p>
              <Link href="/highlights">
                <span className="inline-flex items-center gap-2 text-[#C8A35A] text-xs font-sans-jp border-b border-[#C8A35A]/40 pb-0.5">
                  見どころをすべて見る <ArrowRight size={12} />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: 楽しみ方カテゴリ（横スクロール）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 bg-[#040810] clip-diagonal-rev pt-24">
        <div className="px-6 mb-8">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-2">ENJOY</p>
            <h2 className="font-display text-3xl text-white">楽しみ方から<br />探す</h2>
          </FadeIn>
        </div>

        {/* 横スクロールカード */}
        <div className="flex gap-4 overflow-x-auto horizontal-scroll pl-6 pr-6 pb-4">
          {[
            { icon: Sparkles, label: "光を楽しむ", sub: "イルミネーション", href: "/highlights", img: IMG.g1, color: "#C8A35A" },
            { icon: Utensils, label: "食べる", sub: "飲食店・屋台", href: "/restaurants", img: IMG.food, color: "#e07040" },
            { icon: Hotel, label: "泊まる", sub: "宿泊施設", href: "/stay", img: IMG.v1, color: "#4090d0" },
            { icon: Map, label: "巡る", sub: "観光スポット", href: "/tourism", img: IMG.v2, color: "#50b080" },
            { icon: Camera, label: "撮る", sub: "フォトスポット", href: "/gallery", img: IMG.g2, color: "#c060c0" },
            { icon: Ticket, label: "チケット", sub: "購入・料金", href: "/ticket", img: IMG.g3, color: "#C8A35A" },
          ].map((item, i) => (
            <Link key={i} href={item.href}>
              <div className="flex-shrink-0 w-36 rounded-2xl overflow-hidden relative active:scale-95 transition-transform">
                <div className="h-48 relative">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}22`, border: `1px solid ${item.color}66` }}
                  >
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="font-sans-jp font-bold text-white text-sm leading-tight">{item.label}</div>
                    <div className="font-sans-jp text-white/50 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6: 地域創生メッセージ（テキスト主役）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#040810]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, #C8A35A 0%, transparent 70%)" }} />
        <div className="relative max-w-lg mx-auto text-center">
          <FadeIn>
            <Star size={20} className="text-[#C8A35A] mx-auto mb-6 float" />
            <h2 className="font-display text-[clamp(2rem,10vw,3.5rem)] leading-tight mb-6">
              <span className="block text-white/40 text-sm tracking-[0.4em] font-sans-jp mb-4">CONCEPT</span>
              <span className="gold-shimmer">「光を見に来る。</span><br />
              <span className="text-white">日田に泊まり、食べ、</span><br />
              <span className="text-white">巡り、また訪れる。」</span>
            </h2>
            <p className="font-sans-jp text-white/50 text-sm leading-relaxed mt-6">
              地域の事業者・住民・行政が一体となって作り上げる、日田ならではの冬の祭典。光が、人と街をつなぐ。
            </p>
          </FadeIn>

          {/* 地域キーワード */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {["豆田町", "日田杉", "天領日田", "日田温泉", "日田グルメ", "サッポロビール九州日田工場"].map((tag) => (
                <span key={tag} className="font-sans-jp text-xs text-white/50 border border-white/10 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 7: 全幅群衆ショット × 中央テキスト
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative">
        <div className="relative h-[60vw] max-h-[360px] overflow-hidden">
          <img src={IMG.crowdClean} alt="会場全景" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <FadeIn>
              <p className="font-sans-jp text-white/60 text-xs tracking-widest mb-3">2026.10.31 — 2027.1.31</p>
              <h2 className="font-display text-3xl text-white leading-tight">
                93日間、<br />
                <span className="gold-shimmer">日田が輝く。</span>
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 8: アクセス情報（ダーク）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 px-6 bg-[#060d1a]">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-2">ACCESS</p>
            <h2 className="font-display text-3xl text-white mb-8">アクセス</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-0 divide-y divide-white/5">
              {[
                { label: "会場", value: "サッポロビール九州日田工場（大分県日田市高瀬６９７９）" },
                { label: "期間", value: "2026年10月31日（土）〜2027年1月31日（日）" },
                { label: "時間", value: "17:00〜22:00（最終入場 21:30）" },
                { label: "駐車場", value: "無料（会場周辺）" },
              ].map((row) => (
                <div key={row.label} className="py-4 flex gap-4">
                  <span className="font-sans-jp text-[#C8A35A] text-xs w-14 flex-shrink-0 pt-0.5">{row.label}</span>
                  <span className="font-sans-jp text-white/70 text-sm leading-relaxed">{row.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link href="/access">
              <button className="mt-8 w-full flex items-center justify-center gap-2 border border-white/20 text-white/70 font-sans-jp py-4 rounded-xl text-sm active:scale-95 transition-transform">
                <MapPin size={14} className="text-[#C8A35A]" />
                アクセス詳細を見る
                <ArrowRight size={14} />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 9: チケット購入CTA（ゴールド背景）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A35A] via-[#a07830] to-[#6a4e20]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
        <Stars />
        <div className="relative py-20 px-6 text-center max-w-lg mx-auto">
          <FadeIn>
            <Ticket size={32} className="text-[#040810]/60 mx-auto mb-4" />
            <h2 className="font-display text-3xl text-[#040810] leading-tight mb-3">
              チケットを<br />購入する
            </h2>
            <p className="font-sans-jp text-[#040810]/70 text-sm mb-8">
              大人 ¥1,500 / 子ども ¥800<br />
              未就学児 無料
            </p>
            <Link href="/ticket">
              <button className="bg-[#040810] text-[#C8A35A] font-bold font-sans-jp py-4 px-10 rounded-full text-sm tracking-wider active:scale-95 transition-transform">
                チケット詳細・購入
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 10: フッター前 協賛募集
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-14 px-6 bg-[#040810] border-t border-white/5">
        <div className="max-w-lg mx-auto text-center">
          <FadeIn>
            <p className="font-sans-jp text-white/30 text-xs tracking-[0.3em] mb-3">SPONSOR</p>
            <h3 className="font-display text-xl text-white mb-3">協賛企業を募集しています</h3>
            <p className="font-sans-jp text-white/50 text-xs leading-relaxed mb-6">
              日田イルミナージュ2026は地域創生を目的としたイベントです。<br />
              協賛・協力いただける企業・団体を広く募集しています。
            </p>
            <Link href="/sponsor">
              <button className="inline-flex items-center gap-2 border border-[#C8A35A]/40 text-[#C8A35A] font-sans-jp py-3 px-8 rounded-full text-xs tracking-wider active:scale-95 transition-transform">
                協賛について詳しく見る <ArrowRight size={12} />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
