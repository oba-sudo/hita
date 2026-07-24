// Home.tsx — ヨルノヨ参考スタイル: Dark Space × Gold Glow × Entertainment Festival
// Design: 完全ダーク背景・英字大見出し・写真グリッド・地域エンタメ感
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Ticket, CalendarCheck, MapPin, Clock, ChevronDown, ArrowRight, Star, Utensils, Hotel, Camera, Map } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

// スクロールフェードイン hook
function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ヒーロースライドショー
const HERO_IMAGES = [
  "/manus-storage/hero_new_main_a3f186f4.jpg",
  "/manus-storage/hero_new_tunnel_90800fe9.jpg",
  "/manus-storage/hero_new_river_c2accbcc.jpg",
];

// 楽しみから探すカード
const ENJOY_CARDS = [
  { icon: Star, label: "光を楽しむ", sub: "Illumination", href: "/highlights", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80" },
  { icon: Utensils, label: "食を味わう", sub: "Dining", href: "/restaurants", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
  { icon: Hotel, label: "泊まる", sub: "Stay", href: "/stay", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { icon: Map, label: "エリアを巡る", sub: "Explore", href: "/tourism", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
  { icon: Camera, label: "写真を撮る", sub: "Gallery", href: "/gallery", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80" },
  { icon: Ticket, label: "チケット", sub: "Ticket", href: "/ticket", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" },
];

// 日田の魅力カード
const HITA_CARDS = [
  {
    title: "三隈川リフレクション",
    sub: "Mikuma River",
    desc: "川面に映るイルミネーションが幻想的な空間を演出。日田を代表する絶景スポット。",
    img: "/manus-storage/hero_new_river_c2accbcc.jpg",
    tag: "絶景スポット",
  },
  {
    title: "豆田町の光の路地",
    sub: "Mameda Town",
    desc: "江戸時代の面影を残す豆田町の街並みが、イルミネーションで幻想的に彩られる。",
    img: "/manus-storage/hero_new_tunnel_90800fe9.jpg",
    tag: "歴史地区",
  },
  {
    title: "サッポロ工場の光の庭",
    sub: "Sapporo Factory",
    desc: "サッポロビール日田工場の広大な敷地が、93日間の光の祭典の舞台となる。",
    img: "/manus-storage/hero_new_main_a3f186f4.jpg",
    tag: "メイン会場",
  },
];

export default function Home() {
  useFadeIn();
  const slideRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      slideRef.current = (slideRef.current + 1) % HERO_IMAGES.length;
      if (imgRef.current) {
        imgRef.current.style.opacity = "0";
        setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.src = HERO_IMAGES[slideRef.current];
            imgRef.current.style.opacity = "1";
          }
        }, 600);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      {/* ============ HERO ============ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Slideshow */}
        <img
          ref={imgRef}
          src={HERO_IMAGES[0]}
          alt="日田イルミナージュ2026"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transition: "opacity 0.8s ease", zIndex: 1 }}
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,10,26,0.3) 0%, rgba(5,10,26,0.5) 50%, rgba(5,10,26,0.85) 100%)",
            zIndex: 2,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display tracking-widest mb-6"
            style={{
              border: "1px solid rgba(212,175,55,0.5)",
              background: "rgba(212,175,55,0.1)",
              color: "#D4AF37",
              animationDelay: "0ms",
            }}
          >
            <span className="text-[#D4AF37]">◆</span>
            HITA ILLUMINAGE 2026
          </div>

          {/* Title */}
          <h1
            className="font-serif-jp font-black text-white leading-tight mb-3"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            日田イルミナージュ
          </h1>
          <p
            className="font-display text-[#D4AF37] font-bold mb-6 gold-glow"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            2026
          </p>

          {/* Tagline */}
          <p className="font-serif-jp text-white/90 text-lg md:text-xl mb-2">
            冬の日田が、光に包まれる。
          </p>
          <p className="font-sans-jp text-white/60 text-sm mb-10">
            泊まり、食べ、巡り、また訪れる。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/ticket"
              className="inline-flex items-center justify-center gap-2 font-bold font-sans-jp text-base px-8 py-4 rounded-lg transition-all active:scale-95 shadow-lg"
              style={{ background: "#D4AF37", color: "#050a1a", boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
            >
              <Ticket size={18} />
              チケットを購入する
            </Link>
            <Link
              href="/today"
              className="inline-flex items-center justify-center gap-2 font-bold font-sans-jp text-base px-8 py-4 rounded-lg transition-all active:scale-95"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", backdropFilter: "blur(8px)" }}
            >
              <CalendarCheck size={18} />
              本日の開催情報
            </Link>
          </div>

          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-5 text-white/55 text-xs font-sans-jp">
            <span className="flex items-center gap-1.5"><CalendarCheck size={12} />2026年10月31日〜2027年1月31日（93日間）</span>
            <span className="flex items-center gap-1.5"><Clock size={12} />17:00〜22:00</span>
            <span className="flex items-center gap-1.5"><MapPin size={12} />大分県日田市 サッポロビール日田工場</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce">
          <ChevronDown size={28} />
        </div>

        {/* Side Label */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <span className="side-label">HITA ILLUMINAGE 2026</span>
        </div>
      </section>

      {/* ============ ENJOY — 楽しみから探す ============ */}
      <section className="relative z-10 py-20 md:py-28" style={{ background: "#0a0f2e" }}>
        <div className="container">
          <div className="fade-in-up">
            <SectionHeading en="ENJOY" ja="楽しみから探す" align="center" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 fade-in-up">
            {ENJOY_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="relative overflow-hidden rounded-lg group card-hover"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,10,26,0.85) 0%, rgba(5,10,26,0.2) 60%, transparent 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-[#D4AF37] text-xs tracking-widest mb-1">{card.sub}</p>
                  <p className="font-serif-jp text-white font-bold text-base md:text-lg">{card.label}</p>
                </div>
                <div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#D4AF37" }}
                >
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT — イベント概要 ============ */}
      <section className="relative z-10 py-20 md:py-28" style={{ background: "#050a1a" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <SectionHeading en="ABOUT" ja="日田イルミナージュとは" />
              <p className="font-sans-jp text-white/70 text-sm leading-relaxed mb-6">
                大分県日田市のサッポロビール日田工場を舞台に、2026年10月31日から93日間にわたって開催される冬のイルミネーションイベントです。
              </p>
              <p className="font-sans-jp text-white/70 text-sm leading-relaxed mb-8">
                光を入口として、日田の食・宿・観光・文化の魅力を発信し、地域全体の活性化を目指す「地域創生型イルミネーション」。来場者が日田に泊まり、食べ、巡り、また訪れたくなる体験を提供します。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: "93", unit: "日間", label: "開催期間" },
                  { num: "5万", unit: "人+", label: "来場目標" },
                  { num: "17:00", unit: "〜22:00", label: "開催時間" },
                  { num: "無料", unit: "", label: "シャトルバス" },
                ].map(({ num, unit, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-lg"
                    style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.15)" }}
                  >
                    <p className="font-display text-[#D4AF37] text-2xl font-bold">
                      {num}<span className="text-sm ml-0.5">{unit}</span>
                    </p>
                    <p className="font-sans-jp text-white/55 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans-jp text-sm font-bold transition-colors"
                style={{ color: "#D4AF37" }}
              >
                詳しく見る <ArrowRight size={14} />
              </Link>
            </div>
            <div className="fade-in-up">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/manus-storage/hero_new_main_a3f186f4.jpg"
                  alt="日田イルミナージュ会場"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(5,10,26,0.3) 0%, transparent 60%)" }}
                />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-sans-jp"
                  style={{ background: "rgba(212,175,55,0.9)", color: "#050a1a", fontWeight: 700 }}
                >
                  サッポロビール日田工場
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS — 見どころ ============ */}
      <section className="relative z-10 py-20 md:py-28" style={{ background: "#0a0f2e" }}>
        <div className="container">
          <div className="fade-in-up">
            <SectionHeading en="HIGHLIGHTS" ja="日田の見どころ" align="center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
            {HITA_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl overflow-hidden card-hover"
                style={{ background: "#0f1840" }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-sans-jp font-bold"
                      style={{ background: "rgba(212,175,55,0.9)", color: "#050a1a" }}
                    >
                      {card.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-display text-[#D4AF37] text-xs tracking-widest mb-1">{card.sub}</p>
                  <h3 className="font-serif-jp text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="font-sans-jp text-white/55 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-in-up">
            <Link
              href="/highlights"
              className="inline-flex items-center gap-2 font-sans-jp text-sm font-bold px-6 py-3 rounded-lg transition-all active:scale-95"
              style={{ border: "1px solid rgba(212,175,55,0.5)", color: "#D4AF37" }}
            >
              すべての見どころを見る <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AREA — エリアから探す ============ */}
      <section className="relative z-10 py-20 md:py-28" style={{ background: "#050a1a" }}>
        <div className="container">
          <div className="fade-in-up">
            <SectionHeading en="AREA" ja="日田市内を巡る" sub="イルミネーション会場から足を伸ばして、日田の魅力を全身で体感してください。" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in-up">
            {[
              {
                area: "豆田町",
                en: "Mameda Town",
                desc: "江戸時代の商家町の面影を残す重要伝統的建造物群保存地区。夜はイルミネーションで幻想的に。",
                img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
                tags: ["歴史地区", "散策"],
              },
              {
                area: "三隈川・花月川",
                en: "Mikuma River",
                desc: "日田を流れる清流。川面に映るイルミネーションのリフレクションが絶景。",
                img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
                tags: ["絶景", "フォトスポット"],
              },
              {
                area: "日田温泉",
                en: "Hita Onsen",
                desc: "イルミネーション鑑賞後は日田温泉でゆっくり。宿泊とセットで特別な夜を。",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
                tags: ["温泉", "宿泊"],
              },
              {
                area: "日田グルメ",
                en: "Hita Gourmet",
                desc: "日田やきそば・日田梨・日田杉を使った地元料理など、日田ならではの食文化を楽しむ。",
                img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
                tags: ["グルメ", "地域食材"],
              },
            ].map((item) => (
              <Link
                key={item.area}
                href="/tourism"
                className="relative overflow-hidden rounded-xl group card-hover"
                style={{ aspectRatio: "16/7" }}
              >
                <img
                  src={item.img}
                  alt={item.area}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, rgba(5,10,26,0.85) 0%, rgba(5,10,26,0.3) 100%)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="font-display text-[#D4AF37] text-xs tracking-widest mb-1">{item.en}</p>
                  <h3 className="font-serif-jp text-white font-bold text-xl mb-2">{item.area}</h3>
                  <p className="font-sans-jp text-white/65 text-xs leading-relaxed mb-3 max-w-xs">{item.desc}</p>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-sans-jp"
                        style={{ background: "rgba(0,229,255,0.15)", border: "1px solid rgba(0,229,255,0.3)", color: "#00E5FF" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACCESS — アクセス ============ */}
      <section className="relative z-10 py-20 md:py-28" style={{ background: "#0a0f2e" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="fade-in-up">
              <SectionHeading en="ACCESS" ja="アクセス" />
              <div className="space-y-4 mb-8">
                {[
                  { label: "会場", value: "サッポロビール日田工場（大分県日田市大字高瀬）" },
                  { label: "開催期間", value: "2026年10月31日（土）〜2027年1月31日（日）" },
                  { label: "開催時間", value: "17:00〜22:00（最終入場 21:30）" },
                  { label: "シャトルバス", value: "JR日田駅〜会場 無料運行（期間中）" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex gap-4 p-4 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="font-sans-jp text-xs font-bold shrink-0 mt-0.5"
                      style={{ color: "#D4AF37", minWidth: "5rem" }}
                    >
                      {label}
                    </span>
                    <span className="font-sans-jp text-white/75 text-xs leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/access"
                className="inline-flex items-center gap-2 font-sans-jp text-sm font-bold px-6 py-3 rounded-lg transition-all active:scale-95"
                style={{ background: "#D4AF37", color: "#050a1a" }}
              >
                <MapPin size={14} />
                アクセス詳細を見る
              </Link>
            </div>
            <div className="fade-in-up rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d130.9408!3d33.3219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541a2b5f4e8e8e9%3A0x1234567890abcdef!2z44K144OD44Od44Ot44O844OT44O844OrE697Eld5de5E5B5!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="会場マップ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TICKET CTA ============ */}
      <section
        className="relative z-10 py-24 md:py-32 overflow-hidden"
        style={{ background: "#050a1a" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative container text-center fade-in-up">
          <p className="font-display text-[#D4AF37] text-xs tracking-[0.4em] uppercase mb-4">Ticket</p>
          <h2 className="font-serif-jp font-black text-white text-3xl md:text-5xl mb-4">
            チケットを購入する
          </h2>
          <div className="section-divider-center mb-6" />
          <p className="font-sans-jp text-white/55 text-sm mb-10 max-w-lg mx-auto">
            前売り券・当日券・ペアチケットなど各種チケットをご用意しています。
          </p>
          <Link
            href="/ticket"
            className="inline-flex items-center gap-3 font-bold font-sans-jp text-lg px-10 py-5 rounded-xl transition-all active:scale-95"
            style={{
              background: "#D4AF37",
              color: "#050a1a",
              boxShadow: "0 0 40px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.2)",
            }}
          >
            <Ticket size={22} />
            チケット情報を見る
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
