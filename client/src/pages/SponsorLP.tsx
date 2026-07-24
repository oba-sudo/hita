/**
 * SponsorLP.tsx — 日田イルミナージュ2026 協賛企業募集LP
 * 対象: 地域企業の経営者・担当者
 * 設計: 企業向け提案書の説得力 × 地域創生への共感 × スマホ優先
 * データ出典: 日田イルミナージュ2026協賛企業募集のご案内.pdf
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Star, Users, TrendingUp, Building2, Heart,
  Ticket, Megaphone, Video, Phone, Mail,
  ChevronDown, CheckCircle2, Sparkles, Award
} from "lucide-react";

const IMG = {
  hero: "/manus-storage/hero_new_main_a3f186f4.jpg",
  crowd: "/manus-storage/hita_wide_crowd_5f089356.jpg",
  tunnel: "/manus-storage/hero_new_tunnel_90800fe9.jpg",
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
}

const PLANS = [
  {
    name: "ダイヤモンド",
    price: "500万円",
    limit: "1社限定",
    color: "#c090f0",
    bg: "rgba(42,26,74,0.8)",
    border: "#9060d0",
    badge: "最上位",
    perks: ["メインゲート独占掲出", "会場最大広告掲出", "PRブース出展権", "商品サンプリング権", "オープニングセレモニー来賓席", "VIP招待券 300枚", "企業紹介動画制作", "特設企業ページ制作", "公式SNS年間特集"],
    influencer: ["タイアップ投稿 5回", "リール動画 3本制作", "企業PR動画制作"],
  },
  {
    name: "特別メイン",
    price: "300万円",
    limit: "2社限定",
    color: "#C8A35A",
    bg: "rgba(42,30,10,0.8)",
    border: "#C8A35A",
    badge: "残2枠",
    perks: ["パンフレット裏表紙掲載", "会場大型広告", "PRブース出展", "商品サンプリング権", "VIP招待券 150枚", "特集記事掲載"],
    influencer: ["タイアップ投稿 3回", "企業紹介動画制作"],
  },
  {
    name: "プレミアム",
    price: "100万円",
    limit: "5社限定",
    color: "#80c8f0",
    bg: "rgba(10,30,42,0.8)",
    border: "#4090b0",
    badge: "残5枠",
    perks: ["大型看板掲載", "パンフレット広告掲載", "PRブース出展", "VIP招待券 50枚", "特別内覧会招待"],
    influencer: ["タイアップ投稿 3回", "紹介動画制作"],
  },
  {
    name: "ゴールド",
    price: "50万円",
    limit: "8社限定",
    color: "#d4a040",
    bg: "rgba(30,26,8,0.8)",
    border: "#806020",
    badge: "残8枠",
    perks: ["会場看板掲載", "パンフレット掲載", "VIP招待券 30枚"],
    influencer: ["タイアップ投稿 2回"],
  },
  {
    name: "シルバー",
    price: "30万円",
    limit: "5社限定",
    color: "#c0c8d0",
    bg: "rgba(24,28,32,0.8)",
    border: "#607080",
    badge: "残5枠",
    perks: ["ロゴ大型掲載", "VIP招待券 20枚", "特別内覧会招待"],
    influencer: ["タイアップ投稿 1回"],
  },
  {
    name: "ブロンズ",
    price: "10万円",
    limit: "20社限定",
    color: "#c09070",
    bg: "rgba(30,20,8,0.8)",
    border: "#806040",
    badge: "残20枠",
    perks: ["ホームページ掲載", "ポスター掲載", "協賛ボード掲載", "VIP招待券 4枚"],
    influencer: ["合同企画での紹介"],
  },
];

const SMALL_PLANS = [
  { name: "地域応援パートナー", price: "5万円", limit: "10社限定" },
  { name: "まちづくり応援パートナー", price: "3万円", limit: "10社限定" },
  { name: "協力パートナー", price: "1万円", limit: "70社限定" },
];

export default function SponsorLP() {
  const [activeTab, setActiveTab] = useState<"btob" | "btoc">("btob");

  return (
    <div className="bg-[#040810] text-white overflow-x-hidden">
      <style>{`
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes pulse-border { 0%,100% { box-shadow: 0 0 0 0 rgba(200,163,90,0.4); } 50% { box-shadow: 0 0 0 8px rgba(200,163,90,0); } }
        .gold-shimmer {
          background: linear-gradient(90deg, #C8A35A 0%, #f0d080 40%, #C8A35A 60%, #a07830 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .float { animation: float 4s ease-in-out infinite; }
        .pulse-cta { animation: pulse-border 2.5s ease-in-out infinite; }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[85svh] flex flex-col justify-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#040810]" />
        <div className="relative z-10 px-6 max-w-lg mx-auto w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 border border-[#C8A35A]/40 rounded-full px-4 py-1.5 mb-5 text-xs text-[#C8A35A] font-sans-jp tracking-widest">
              <Star size={10} fill="currentColor" />協賛企業募集<Star size={10} fill="currentColor" />
            </div>
            <h1 className="font-display text-[clamp(2.2rem,11vw,4rem)] leading-[1.1] mb-4">
              <span className="block text-white">光で、日田の</span>
              <span className="block gold-shimmer">未来を照らす。</span>
            </h1>
            <p className="font-sans-jp text-white/70 text-sm leading-relaxed mb-8">
              日田イルミナージュ2026は、地域企業の皆様と共に育てる冬の観光資源です。<br />
              協賛は「イベントへの支援」ではなく、<strong className="text-[#C8A35A]">「日田の未来への投資」</strong>です。
            </p>
            <a href="#plans">
              <button className="flex items-center gap-2 bg-[#C8A35A] text-[#040810] font-bold font-sans-jp py-4 px-8 rounded-full text-sm tracking-wider active:scale-95 transition-transform pulse-cta">
                <Award size={16} />協賛プランを見る<ChevronDown size={14} />
              </button>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* イベント規模 */}
      <section className="py-16 px-6 bg-[#040810]">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-2">THE EVENT</p>
            <h2 className="font-display text-3xl text-white mb-8">イベント規模</h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { num: "93", unit: "日間", label: "開催日数", sub: "10/31〜1/31" },
              { num: "3万", unit: "人", label: "来場目標", sub: "地域消費2〜3億円" },
              { num: "100", unit: "社", label: "協賛企業目標", sub: "現在募集中" },
              { num: "2,000", unit: "万円", label: "協賛目標金額", sub: "地域で育てる" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#0a1020] p-5 text-center">
                  <div className="font-display text-2xl text-[#C8A35A] leading-none">{item.num}<span className="text-base">{item.unit}</span></div>
                  <div className="font-sans-jp text-white text-xs font-bold mt-1">{item.label}</div>
                  <div className="font-sans-jp text-white/30 text-[10px] mt-0.5">{item.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-6 bg-[#0d1525] border border-[#C8A35A]/20 rounded-xl p-5">
              <p className="font-sans-jp text-white/80 text-sm leading-relaxed">
                来場者はイルミネーションを楽しむだけではありません。<strong className="text-white">飲食店利用・宿泊施設利用・温泉利用・観光施設周遊・お土産購入</strong>など、多くの消費活動が地域全体へ波及します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 協賛メリット */}
      <section className="py-16 px-6 bg-[#060d1a]">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-2">BENEFITS</p>
            <h2 className="font-display text-3xl text-white mb-6">協賛企業様のメリット</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex gap-2 mb-6">
              <button onClick={() => setActiveTab("btob")} className="flex-1 py-3 rounded-xl text-sm font-sans-jp font-bold transition-all" style={activeTab === "btob" ? { background: "#C8A35A", color: "#040810" } : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                BtoB企業様向け
              </button>
              <button onClick={() => setActiveTab("btoc")} className="flex-1 py-3 rounded-xl text-sm font-sans-jp font-bold transition-all" style={activeTab === "btoc" ? { background: "#C8A35A", color: "#040810" } : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                BtoC企業様向け
              </button>
            </div>
          </FadeIn>
          {activeTab === "btob" ? (
            <div className="space-y-3">
              {[
                { icon: Building2, title: "地域貢献による企業価値向上", body: "地域活性化プロジェクトへの参画を通じて企業ブランド向上につながります。CSR活動として対外的にアピールできます。" },
                { icon: Users, title: "採用ブランディング", body: "若年層や地域住民に対して企業認知向上が期待できます。「地域を大切にする会社」として採用競争力が高まります。" },
                { icon: Heart, title: "福利厚生・取引先へのおもてなし", body: "VIP招待券を社員様やご家族へ配布。招待券を活用した顧客満足向上にもご利用いただけます。" },
                { icon: Megaphone, title: "企業PR", body: "公式サイトや公式SNSにて企業紹介を行います。地域メディアへの露出機会も提供します。" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex gap-4 bg-[#0a1020] rounded-xl p-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,163,90,0.12)", border: "1px solid rgba(200,163,90,0.3)" }}>
                      <item.icon size={18} className="text-[#C8A35A]" />
                    </div>
                    <div>
                      <div className="font-sans-jp font-bold text-white text-sm mb-1">{item.title}</div>
                      <div className="font-sans-jp text-white/50 text-xs leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {[
                { icon: Users, title: "来場者3万人へのPR", body: "会場広告やパンフレット掲載による認知拡大。イルミネーション目当ての来場者に直接アプローチできます。" },
                { icon: Megaphone, title: "SNS拡散", body: "イベント公式SNSでの商品・サービス紹介。拡散力の高いイルミネーション投稿に乗せてPRします。" },
                { icon: Star, title: "インフルエンサー活用（10万円以上限定）", body: "九州の観光・グルメ・ファミリー系インフルエンサーを活用。店舗紹介・商品レビュー・SNSリール動画制作など。" },
                { icon: TrendingUp, title: "販促・集客", body: "店舗誘導や商品販売促進。イベント会場での配布物・サンプリングも可能です。" },
                { icon: Video, title: "動画制作", body: "企業紹介動画の制作。SNSリール・YouTube向けの高品質な動画コンテンツを制作します。" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex gap-4 bg-[#0a1020] rounded-xl p-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,163,90,0.12)", border: "1px solid rgba(200,163,90,0.3)" }}>
                      <item.icon size={18} className="text-[#C8A35A]" />
                    </div>
                    <div>
                      <div className="font-sans-jp font-bold text-white text-sm mb-1">{item.title}</div>
                      <div className="font-sans-jp text-white/50 text-xs leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* コンセプト全幅 */}
      <section className="relative">
        <div className="relative h-[55vw] max-h-[320px] overflow-hidden">
          <img src={IMG.crowd} alt="会場イメージ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <FadeIn>
              <p className="font-sans-jp text-white/50 text-xs tracking-widest mb-3">CONCEPT</p>
              <h2 className="font-display text-[clamp(1.6rem,8vw,2.8rem)] text-white leading-tight">
                協賛とは<br /><span className="gold-shimmer">「日田の未来への投資」</span>
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 協賛プラン */}
      <section id="plans" className="py-16 px-6 bg-[#040810]">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-2">PLANS</p>
            <h2 className="font-display text-3xl text-white mb-2">協賛プラン</h2>
            <p className="font-sans-jp text-white/40 text-xs mb-8">全プラン合計100社・2,000万円を目標に募集しています</p>
          </FadeIn>
          <div className="space-y-4">
            {PLANS.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="rounded-2xl overflow-hidden" style={{ background: plan.bg, border: `1px solid ${plan.border}40` }}>
                  <div className="px-5 pt-5 pb-4 flex items-start justify-between" style={{ borderBottom: `1px solid ${plan.border}20` }}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-sans-jp text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: `${plan.border}30`, color: plan.color }}>{plan.badge}</span>
                        <span className="font-sans-jp text-white/40 text-[10px]">{plan.limit}</span>
                      </div>
                      <h3 className="font-display text-xl text-white">{plan.name}<span className="text-xs text-white/40 ml-1">スポンサー</span></h3>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-2xl leading-none" style={{ color: plan.color }}>{plan.price}</div>
                      <div className="font-sans-jp text-white/30 text-[10px] mt-0.5">協賛金（税別）</div>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="font-sans-jp text-white/40 text-[10px] tracking-widest mb-2">特典</div>
                    <div className="space-y-1.5">
                      {plan.perks.map((perk, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                          <span className="font-sans-jp text-white/70 text-xs">{perk}</span>
                        </div>
                      ))}
                    </div>
                    {plan.influencer.length > 0 && (
                      <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${plan.border}20` }}>
                        <div className="font-sans-jp text-[10px] tracking-widest mb-2" style={{ color: plan.color }}>
                          <Sparkles size={10} className="inline mr-1" />インフルエンサー特典
                        </div>
                        <div className="space-y-1.5">
                          {plan.influencer.map((item, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <Star size={10} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} fill="currentColor" />
                              <span className="font-sans-jp text-white/60 text-xs">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-6 bg-[#0a1020] rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="px-5 py-4 border-b border-white/5">
                <h3 className="font-sans-jp font-bold text-white text-sm">地域応援・まちづくりプラン</h3>
                <p className="font-sans-jp text-white/40 text-xs mt-1">小規模事業者・個人事業主の方もご参加いただけます</p>
              </div>
              <div className="divide-y divide-white/5">
                {SMALL_PLANS.map((plan, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between">
                    <div>
                      <div className="font-sans-jp text-white/80 text-sm">{plan.name}</div>
                      <div className="font-sans-jp text-white/30 text-xs">{plan.limit}</div>
                    </div>
                    <div className="font-display text-lg text-[#C8A35A]">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 協賛目標達成イメージ */}
      <section className="py-16 px-6 bg-[#060d1a]">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <p className="text-[#C8A35A] text-xs tracking-[0.4em] font-sans-jp mb-2">GOAL</p>
            <h2 className="font-display text-3xl text-white mb-6">協賛目標達成イメージ</h2>
          </FadeIn>
          <div className="space-y-3">
            {[
              { plan: "ダイヤモンドスポンサー", count: "1社", amount: "500万円", pct: 25, color: "#9060d0" },
              { plan: "特別メインスポンサー", count: "2社", amount: "600万円", pct: 30, color: "#C8A35A" },
              { plan: "プレミアムスポンサー", count: "5社", amount: "500万円", pct: 25, color: "#80c8f0" },
              { plan: "ゴールドスポンサー", count: "8社", amount: "400万円", pct: 20, color: "#d4a040" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#0a1020] rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans-jp text-white/80 text-xs">{item.plan} × {item.count}</span>
                    <span className="font-display text-sm" style={{ color: item.color }}>{item.amount}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.35}>
              <div className="bg-[#C8A35A]/10 border border-[#C8A35A]/30 rounded-xl p-4 flex justify-between items-center">
                <span className="font-sans-jp font-bold text-white text-sm">合計目標</span>
                <span className="font-display text-xl text-[#C8A35A]">2,000万円</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 主催情報 */}
      <section className="py-16 px-6 bg-[#040810]">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <div className="bg-[#0a1020] rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(200,163,90,0.15)" }}>
              <div className="px-6 py-5 border-b border-white/5">
                <p className="text-[#C8A35A] text-xs tracking-[0.3em] font-sans-jp mb-1">ORGANIZER</p>
                <h3 className="font-display text-xl text-white">主催・企画運営</h3>
              </div>
              <div className="px-6 py-5 space-y-3">
                {[
                  { label: "主催", value: "日田イルミナージュ実行委員会" },
                  { label: "企画運営", value: "株式会社BIDOW" },
                  { label: "会場", value: "サッポロビール九州日田工場" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <span className="font-sans-jp text-white/40 text-xs w-20 flex-shrink-0">{row.label}</span>
                    <span className="font-sans-jp text-white/80 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 問い合わせCTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${IMG.tunnel})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810] via-[#040810]/80 to-[#040810]" />
        <div className="relative py-20 px-6 max-w-lg mx-auto text-center">
          <FadeIn>
            <Star size={28} className="text-[#C8A35A] mx-auto mb-5 float" fill="currentColor" />
            <h2 className="font-display text-3xl text-white mb-3">
              ご参画を<br /><span className="gold-shimmer">お待ちしています</span>
            </h2>
            <p className="font-sans-jp text-white/60 text-sm leading-relaxed mb-8">
              日田イルミナージュは、一企業だけでは実現できません。<br />
              地域企業の皆様と共に育て、冬の日田に新たな賑わいを生み出し、<br />
              次世代へ誇れる文化として定着させていきたいと考えております。
            </p>
            <div className="space-y-3">
              <a href="tel:080-3908-4738">
                <button className="w-full flex items-center justify-center gap-3 bg-[#C8A35A] text-[#040810] font-bold font-sans-jp py-4 px-8 rounded-full text-sm tracking-wider active:scale-95 transition-transform pulse-cta">
                  <Phone size={16} />電話で問い合わせる<span className="font-display text-base">080-3908-4738</span>
                </button>
              </a>
              <a href="mailto:fujisaki@bidow.jp">
                <button className="w-full flex items-center justify-center gap-3 border border-[#C8A35A]/40 text-[#C8A35A] font-sans-jp py-4 px-8 rounded-full text-sm tracking-wider active:scale-95 transition-transform">
                  <Mail size={16} />メールで問い合わせる
                </button>
              </a>
              <Link href="/contact">
                <button className="w-full flex items-center justify-center gap-3 border border-white/15 text-white/60 font-sans-jp py-4 px-8 rounded-full text-sm active:scale-95 transition-transform">
                  お問い合わせフォームへ<ArrowRight size={14} />
                </button>
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="font-sans-jp text-white/30 text-xs">
                担当：藤﨑 雄次郎（株式会社BIDOW）<br />
                fujisaki@bidow.jp / 080-3908-4738
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
