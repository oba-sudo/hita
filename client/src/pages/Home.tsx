/**
 * 日田イルミナージュ2026 トップページ
 * デザイン: Deep Navy × Antique Gold — 夜空の深みと光の温かさ
 * レイアウト: 全幅ヒーロー → 本日の開催 → 概要 → 見どころ → チケット → 飲食・宿泊 → アクセス → FAQ
 */
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import SectionTitle from "@/components/SectionTitle";
import { TODAY_STATUS, RESTAURANTS, STAYS, FAQ_ITEMS } from "@/data/siteData";
import {
  CalendarCheck, Clock, Car, Bus, Ticket, MapPin, ChevronRight,
  Star, Sparkles, ChevronDown, ArrowRight
} from "lucide-react";

/* ── アニメーション用フック ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── ステータスバッジ ── */
function StatusBadge({ status }: { status: string }) {
  const isGood = ["通常開催", "空車", "通常運行", "販売中"].includes(status);
  const isWarn = ["内容を一部変更して開催", "開催時間を変更", "混雑", "遅延"].includes(status);
  const isBad = ["中止", "満車", "運休"].includes(status);
  const color = isGood ? "bg-emerald-100 text-emerald-800 border-emerald-300" : isWarn ? "bg-amber-100 text-amber-800 border-amber-300" : isBad ? "bg-red-100 text-red-800 border-red-300" : "bg-gray-100 text-gray-700 border-gray-300";
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-bold font-sans-jp ${color}`}>{status}</span>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const s = TODAY_STATUS;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero_97225277.jpg"
            alt="日田イルミナージュ2026"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10243E]/70 via-[#10243E]/40 to-[#10243E]/80" />
          {/* 光の粒子エフェクト */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C8A35A]/30"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ヒーローコンテンツ */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#C8A35A]/40 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-[#C8A35A]" />
            <span className="font-display text-[#C8A35A] text-xs tracking-widest uppercase">Hita Illuminage 2026</span>
          </div>
          <h1 className="font-serif-jp font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 drop-shadow-2xl">
            日田イルミナージュ<br />
            <span className="font-display text-[#C8A35A]">2026</span>
          </h1>
          <p className="font-sans-jp text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-2 drop-shadow">
            光を見に来る。
          </p>
          <p className="font-sans-jp text-white/70 text-sm sm:text-base leading-relaxed mb-8 drop-shadow">
            日田に泊まり、食べ、巡り、また訪れる。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/ticket" className="inline-flex items-center justify-center gap-2 bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold px-8 py-4 rounded-xl font-sans-jp text-base transition-all active:scale-95 shadow-lg shadow-[#C8A35A]/30">
              <Ticket size={18} />チケットを購入する
            </Link>
            <Link href="/today" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl font-sans-jp text-base transition-all active:scale-95">
              <CalendarCheck size={18} />本日の開催情報
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-xs font-sans-jp">
            <span className="flex items-center gap-1"><CalendarCheck size={12} />2026年10月31日〜2027年1月31日（93日間）</span>
            <span className="flex items-center gap-1"><Clock size={12} />17:00〜22:00</span>
            <span className="flex items-center gap-1"><MapPin size={12} />大分県日田市</span>
          </div>
        </div>

        {/* スクロール誘導 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          本日の開催情報（ライブバナー）
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#10243E] py-4 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-sans-jp text-white/80 text-sm">{s.date}</span>
            <StatusBadge status={s.status} />
          </div>
          <div className="flex items-center gap-4 text-sm font-sans-jp text-white/70">
            <span className="flex items-center gap-1.5"><Clock size={13} />{s.startTime}〜{s.endTime}</span>
            <span className="flex items-center gap-1.5"><Car size={13} />駐車場：<StatusBadge status={s.parkingStatus} /></span>
            <Link href="/today" className="flex items-center gap-1 text-[#C8A35A] hover:text-[#b8924a] font-bold transition-colors">
              詳細<ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          イベント概要
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F7F1E5]">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn>
            <SectionTitle en="ABOUT" ja="イベント概要" sub="日田の冬を彩る光の祭典。地域全体で作り上げる、日田ならではのイルミネーションイベントです。" />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeIn delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/manus-storage/gallery2_8f991659.jpg" alt="イルミネーション" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {[{ icon: <CalendarCheck size={14} />, text: "10/31〜1/31（93日間）" }, { icon: <Clock size={14} />, text: "17:00〜22:00" }, { icon: <MapPin size={14} />, text: "大分県日田市" }].map(({ icon, text }) => (
                      <span key={text} className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-sans-jp">{icon}{text}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-5">
                <p className="font-sans-jp text-[#10243E]/80 leading-relaxed text-base">
                  日田イルミナージュは、大分県日田市で開催される冬のイルミネーションイベントです。「光を見に来る。日田に泊まり、食べ、巡り、また訪れる。」をコンセプトに、イルミネーションを入口として日田全体の魅力を発信します。
                </p>
                <p className="font-sans-jp text-[#10243E]/70 leading-relaxed text-sm">
                  地元の事業者・住民・行政が一体となって作り上げる、日田ならではの冬の祭典。来場者に日田の食・宿・観光・文化を体験していただき、何度でも訪れたくなる「日田のファン」を増やすことを目指しています。
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[{ num: "5万人+", label: "来場目標" }, { num: "93日間", label: "開催期間" }, { num: "無料", label: "シャトルバス" }].map(({ num, label }) => (
                    <div key={label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-[#e8e0d0]">
                      <p className="font-display font-bold text-[#C8A35A] text-2xl">{num}</p>
                      <p className="font-sans-jp text-[#10243E]/60 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="inline-flex items-center gap-2 text-[#10243E] hover:text-[#C8A35A] font-bold font-sans-jp text-sm transition-colors">
                  詳細を見る<ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          見どころ
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#10243E]">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn>
            <SectionTitle en="HIGHLIGHTS" ja="見どころ" light center sub="会場を彩る多彩なイルミネーション演出をご紹介します。" />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "メインゲート", desc: "豪華なイルミネーションゲートが来場者を迎えます。", img: "/manus-storage/gallery1_9912daf3.jpg", tag: "フォトスポット" },
              { title: "光のトンネル", desc: "色とりどりのLEDが織りなす幻想的なトンネル体験。", img: "/manus-storage/gallery3_77c209d6.jpg", tag: "体験型" },
              { title: "三隈川リフレクション", desc: "川面に映るイルミネーションが幻想的な空間を演出。", img: "/manus-storage/hero_sp_d2322500.jpg", tag: "絶景スポット" },
            ].map((h, i) => (
              <FadeIn key={h.title} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <img src={h.img} alt={h.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C8A35A] text-[#10243E] text-xs font-bold px-2.5 py-1 rounded-full font-sans-jp">{h.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={14} className="text-[#C8A35A]" />
                      <h3 className="font-serif-jp font-bold text-white text-lg">{h.title}</h3>
                    </div>
                    <p className="font-sans-jp text-white/80 text-sm">{h.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={300}>
            <div className="mt-8 text-center">
              <Link href="/highlights" className="inline-flex items-center gap-2 border border-[#C8A35A] text-[#C8A35A] hover:bg-[#C8A35A] hover:text-[#10243E] font-bold px-6 py-3 rounded-xl font-sans-jp text-sm transition-all">
                すべての見どころを見る<ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          チケット
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F7F1E5]">
        <div className="max-w-[900px] mx-auto px-4">
          <FadeIn>
            <SectionTitle en="TICKET" ja="チケット情報" sub="事前購入でスムーズに入場できます。" />
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "大人", price: "1,500円", note: "中学生以上" },
              { label: "子ども", price: "800円", note: "小学生" },
              { label: "未就学児", price: "無料", note: "保護者同伴" },
              { label: "団体", price: "1,200円", note: "15名以上" },
            ].map((t, i) => (
              <FadeIn key={t.label} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-md p-5 border border-[#e8e0d0] text-center">
                  <p className="font-serif-jp font-bold text-[#10243E] text-base mb-1">{t.label}</p>
                  <p className="text-xs text-[#10243E]/50 font-sans-jp mb-2">{t.note}</p>
                  <p className="font-display font-bold text-[#C8A35A] text-2xl">{t.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={320}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold px-8 py-4 rounded-xl font-sans-jp transition-all active:scale-95 shadow-lg shadow-[#C8A35A]/20">
                <Ticket size={18} />オンラインで購入する
              </a>
              <Link href="/ticket" className="inline-flex items-center justify-center gap-2 border border-[#10243E] text-[#10243E] hover:bg-[#10243E] hover:text-white font-bold px-8 py-4 rounded-xl font-sans-jp transition-all">
                チケット詳細<ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          飲食店・宿泊施設
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn>
            <SectionTitle en="EAT & STAY" ja="飲食・宿泊" sub="日田の食と宿でイルミネーションをより豊かに楽しんでください。" />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 飲食店 */}
            <FadeIn delay={100}>
              <div>
                <h3 className="font-serif-jp font-bold text-[#10243E] text-xl mb-4 flex items-center gap-2">
                  <Star size={18} className="text-[#C8A35A]" />おすすめ飲食店
                </h3>
                <div className="space-y-3">
                  {RESTAURANTS.slice(0, 3).map((r) => (
                    <div key={r.id} className="flex gap-3 bg-[#F7F1E5] rounded-xl p-3 border border-[#e8e0d0]">
                      <img src={r.image} alt={r.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif-jp font-bold text-[#10243E] text-sm truncate">{r.name}</p>
                        <p className="text-xs text-[#10243E]/50 font-sans-jp">{r.genre} · {r.distance}</p>
                        <p className="text-xs text-[#10243E]/70 font-sans-jp mt-0.5 line-clamp-1">{r.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/restaurants" className="mt-4 inline-flex items-center gap-1.5 text-[#10243E] hover:text-[#C8A35A] font-bold font-sans-jp text-sm transition-colors">
                  飲食店一覧を見る<ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
            {/* 宿泊施設 */}
            <FadeIn delay={200}>
              <div>
                <h3 className="font-serif-jp font-bold text-[#10243E] text-xl mb-4 flex items-center gap-2">
                  <Star size={18} className="text-[#C8A35A]" />おすすめ宿泊施設
                </h3>
                <div className="space-y-3">
                  {STAYS.map((s) => (
                    <div key={s.id} className="flex gap-3 bg-[#F7F1E5] rounded-xl p-3 border border-[#e8e0d0]">
                      <img src={s.image} alt={s.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif-jp font-bold text-[#10243E] text-sm truncate">{s.name}</p>
                        <p className="text-xs text-[#10243E]/50 font-sans-jp">{s.type} · {s.distance}</p>
                        <p className="text-xs text-[#10243E]/70 font-sans-jp mt-0.5 line-clamp-1">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/stay" className="mt-4 inline-flex items-center gap-1.5 text-[#10243E] hover:text-[#C8A35A] font-bold font-sans-jp text-sm transition-colors">
                  宿泊施設一覧を見る<ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          アクセス
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F7F1E5]">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn>
            <SectionTitle en="ACCESS" ja="アクセス" sub="JR日田駅から無料シャトルバスをご利用いただけます。" />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <div className="space-y-4">
                {[
                  { icon: <Bus size={18} className="text-[#C8A35A]" />, title: "シャトルバス（無料）", desc: "JR日田駅〜会場間を無料運行予定" },
                  { icon: <Car size={18} className="text-[#C8A35A]" />, title: "お車でお越しの方", desc: "大分自動車道「日田IC」から約10分。会場周辺に駐車場あり。" },
                  { icon: <MapPin size={18} className="text-[#C8A35A]" />, title: "会場", desc: "サッポロビール日田工場（大分県日田市大字高瀬）" },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#e8e0d0]">
                    <div className="mt-0.5">{icon}</div>
                    <div>
                      <p className="font-serif-jp font-bold text-[#10243E] text-sm">{title}</p>
                      <p className="font-sans-jp text-xs text-[#10243E]/70 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
                <Link href="/access" className="inline-flex items-center gap-1.5 text-[#10243E] hover:text-[#C8A35A] font-bold font-sans-jp text-sm transition-colors">
                  アクセス詳細を見る<ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#e8e0d0] h-64 lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52657.3!2d130.9413!3d33.3219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354149d4b3b3b3b3%3A0x0!2z5aSn55Sw5biC!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="会場地図"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#10243E]">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <SectionTitle en="FAQ" ja="よくある質問" light sub="お客様からよくいただくご質問をまとめました。" />
          </FadeIn>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.slice(0, 5).map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  >
                    <span className="font-sans-jp text-white/90 text-sm leading-relaxed flex-1">
                      <span className="text-[#C8A35A] font-display mr-2">Q.</span>{item.q}
                    </span>
                    <ChevronDown size={16} className={`text-[#C8A35A] shrink-0 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`} />
                  </button>
                  {faqOpen === i && (
                    <div className="px-5 pb-4 border-t border-white/10 pt-3">
                      <p className="font-sans-jp text-white/70 text-sm leading-relaxed">
                        <span className="text-[#C8A35A] font-bold font-display mr-2">A.</span>{item.a}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={300}>
            <div className="mt-6 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 border border-[#C8A35A] text-[#C8A35A] hover:bg-[#C8A35A] hover:text-[#10243E] font-bold px-6 py-3 rounded-xl font-sans-jp text-sm transition-all">
                すべてのFAQを見る<ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/gallery3_77c209d6.jpg" alt="CTA背景" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#10243E]/75" />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <p className="font-display text-[#C8A35A] text-sm tracking-widest uppercase mb-3">Hita Illuminage 2026</p>
            <h2 className="font-serif-jp font-black text-white text-3xl sm:text-4xl md:text-5xl mb-4 drop-shadow-xl">
              光の日田へ、ようこそ。
            </h2>
            <p className="font-sans-jp text-white/80 text-base mb-8">2026年10月31日（土）〜2027年1月31日（日）　全93日間</p>
            <Link href="/ticket" className="inline-flex items-center gap-2 bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold px-10 py-5 rounded-xl font-sans-jp text-lg transition-all active:scale-95 shadow-2xl shadow-[#C8A35A]/30">
              <Ticket size={20} />チケットを購入する
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </div>
  );
}
