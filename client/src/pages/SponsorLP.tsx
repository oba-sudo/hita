/**
 * SponsorLP.tsx — 日田イルミナージュ2026 協賛企業募集LP
 * 参考: sandbox2.kajitori.me/sponsor（立花幻想夜）
 * 構成: スティッキーヘッダー / ヒーロー / 事業概要 / 協賛プラン / 地域効果 / 申込み流れ / お問い合わせ
 * デザイン: ダークネイビー × ゴールド、白背景セクション交互
 */
import { useState, useEffect, useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";
import {
  Download, ChevronDown, ChevronUp, CheckCircle2,
  Building2, TrendingUp, MapPin, Heart,
  ArrowRight, Phone, Mail, Users, Star, Megaphone, Award
} from "lucide-react";

const IMG = {
  hero: RENEWAL_ASSETS.mainNight,
  crowd: RENEWAL_ASSETS.parkRestaurant,
  tunnel: RENEWAL_ASSETS.corridorTunnel,
};

// ===== データ =====
const OVERVIEW_ROWS = [
  { label: "イベント名称", value: "日田イルミナージュ2026" },
  { label: "会場", value: "サッポロビール九州日田工場（大分県日田市高瀬６９７９）" },
  { label: "開催期間", value: "2026年10月31日（土）〜 2027年1月31日（日）" },
  { label: "開催日数", value: "93日間" },
  { label: "営業時間", value: "会場時間 17:00〜21:30 ／ 点灯時間 17:30〜21:30（雨天決行）" },
  { label: "入場料", value: "大人（中学生以上）2,000円 ／ 子ども（1歳〜小学生）1,000円" },
];

const VISITOR_BREAKDOWN = [
  { label: "日田市・近隣市町村", pct: 50, count: "15,000人", color: "#C8A35A" },
  { label: "大分・福岡都市圏", pct: 35, count: "10,500人", color: "#4a90d9" },
  { label: "県外・インバウンド", pct: 15, count: "4,500人", color: "#5ab88a" },
];

const ATTRACTION_METHODS = [
  {
    title: "地域住民向け",
    items: ["自治体広報誌・地域新聞", "学校関係への案内", "地域イベント連携", "口コミ紹介"],
  },
  {
    title: "大分・福岡都市圏向け",
    items: ["Instagram・Google・YouTube広告", "西鉄・JR沿線PR", "観光情報サイト掲載", "道の駅・SA等でのPR"],
  },
  {
    title: "県外・インバウンド向け",
    items: ["一般社団法人日田市観光協会・宿泊施設連携", "旅行会社・観光メディア", "外国語WEBサイト", "福岡空港利用者向けPR"],
  },
];

type Plan = {
  badge: string;
  badgeColor: string;
  badgeBg: string;
  name: string;
  price: string;
  summary: string;
  perks: string[];
  icon: React.ReactNode;
  headerBg: string;
  headerText: string;
};

const PLANS: Plan[] = [
  {
    badge: "最上位",
    badgeColor: "#fff",
    badgeBg: "#1a3a6e",
    name: "ダイヤモンドスポンサー",
    price: "¥5,000,000",
    summary: "メインゲート独占・企業紹介映像・最高位の露出（1社限定）",
    perks: [
      "メインゲート独占掲出",
      "公式HP最上段掲載",
      "会場最大広告掲出",
      "SNS特別紹介（年間）",
      "上映前 企業紹介映像制作",
      "VIP招待券 300枚",
      "PRブース出展権",
      "オープニングセレモニー来賓席",
      "メディア対応時の協賛企業パネル掲載",
    ],
    icon: <Award size={20} />,
    headerBg: "#0f2a5e",
    headerText: "#C8A35A",
  },
  {
    badge: "プレミアム",
    badgeColor: "#fff",
    badgeBg: "#2a5298",
    name: "特別メインスポンサー",
    price: "¥3,000,000",
    summary: "パンフレット裏表紙・大型看板・オープニング招待（2社限定）",
    perks: [
      "パンフレット裏表紙掲載",
      "公式HP上位掲載",
      "会場大型看板掲載",
      "SNS特別紹介",
      "オープニングセレモニー招待",
      "VIP招待券 150枚",
      "PRブース出展権",
      "メディア対応時の協賛企業パネル掲載",
    ],
    icon: <Star size={20} />,
    headerBg: "#1a3a6e",
    headerText: "#fff",
  },
  {
    badge: "スタンダード",
    badgeColor: "#fff",
    badgeBg: "#3a6aae",
    name: "プレミアムスポンサー",
    price: "¥1,000,000",
    summary: "大型看板・公式HP・SNS紹介・VIP招待券50枚（5社限定）",
    perks: [
      "大型看板掲載",
      "公式HP掲載",
      "SNS紹介",
      "VIP招待券 50枚",
      "特別内覧会招待",
      "メディア対応時の協賛企業パネル掲載",
    ],
    icon: <Building2 size={20} />,
    headerBg: "#2a5298",
    headerText: "#fff",
  },
  {
    badge: "飲食店向け",
    badgeColor: "#fff",
    badgeBg: "#2e7d32",
    name: "地域応援パートナー",
    price: "¥50,000",
    summary: "飲食店マップ掲載＋インスタグラマーによる店舗PR投稿1回",
    perks: [
      "公式HP掲載",
      "SNS紹介",
      "飲食店マップ掲載・来場者配布",
      "インスタグラマーによる店舗PR投稿 1回",
    ],
    icon: <MapPin size={20} />,
    headerBg: "#1b5e20",
    headerText: "#fff",
  },
  {
    badge: "飲食店向け",
    badgeColor: "#fff",
    badgeBg: "#388e3c",
    name: "まちづくり応援パートナー",
    price: "¥30,000",
    summary: "飲食店マップ掲載・来場者配布＋公式HP掲載",
    perks: [
      "公式HP掲載",
      "飲食店マップ掲載・来場者配布",
    ],
    icon: <Heart size={20} />,
    headerBg: "#2e7d32",
    headerText: "#fff",
  },
  {
    badge: "エントリー",
    badgeColor: "#fff",
    badgeBg: "#5d4037",
    name: "協力パートナー",
    price: "¥10,000",
    summary: "公式HP掲載・協賛企業一覧掲載",
    perks: [
      "公式HP掲載",
      "協賛企業一覧掲載",
    ],
    icon: <Users size={20} />,
    headerBg: "#4e342e",
    headerText: "#fff",
  },
];

const REGIONAL_EFFECTS = [
  { num: "01", title: "夜間観光の創出", body: "冬の夜に日田を訪れる新しい理由をつくります。" },
  { num: "02", title: "市内回遊の促進", body: "飲食店マップ等により、来場者の店舗利用を促します。" },
  { num: "03", title: "地域店舗のPR", body: "協賛店舗を来場者へ紹介し、認知拡大につなげます。" },
  { num: "04", title: "地域経済の活性化", body: "宿泊・飲食・土産など地域消費2〜3億円を目標とします。" },
];

const STEPS = [
  { step: "01", title: "協賛区分の選択", body: "6つのプランからご予算・目的に合ったプランをお選びください。" },
  { step: "02", title: "内容の確認", body: "企業名・店舗名・掲載内容をご確認いただきます。" },
  { step: "03", title: "協賛金のお支払い", body: "お支払い方法についてご案内いたします。" },
  { step: "04", title: "掲載・PR開始", body: "公式HP・SNS・会場掲示・飲食店マップ等へ掲載します。" },
];

// ===== サブコンポーネント =====
function PlanCard({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
      <div className="px-5 py-4" style={{ background: plan.headerBg }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full font-sans-jp" style={{ background: plan.badgeBg, color: plan.badgeColor }}>
            {plan.badge}
          </span>
          <span style={{ color: plan.headerText, opacity: 0.7 }}>{plan.icon}</span>
        </div>
        <h3 className="font-sans-jp font-bold text-lg mb-1" style={{ color: plan.headerText }}>{plan.name}</h3>
        <div className="font-sans-jp text-2xl font-bold mb-1" style={{ color: plan.headerText }}>
          {plan.price}<span className="text-sm font-normal opacity-70 ml-1">円（税別）</span>
        </div>
        <p className="font-sans-jp text-xs opacity-70" style={{ color: plan.headerText }}>{plan.summary}</p>
      </div>
      <div className="px-5 py-4">
        <ul className="space-y-2 mb-4">
          {plan.perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-[#C8A35A]" />
              <span className="font-sans-jp text-sm text-gray-700">{perk}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-center gap-1 py-2 border border-gray-200 rounded text-sm font-sans-jp text-gray-600 hover:bg-gray-50 transition-colors"
        >
          特典の詳細を見る {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {open && (
          <div className="mt-3 p-3 bg-gray-50 rounded text-xs font-sans-jp text-gray-600 leading-relaxed">
            <p className="font-bold text-gray-800 mb-1">【{plan.name}】特典詳細</p>
            {plan.perks.map((perk, i) => (
              <p key={i} className="mb-0.5">・{perk}</p>
            ))}
            <p className="mt-2 text-gray-500">※詳細は担当者よりご案内いたします。</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== メインコンポーネント =====
export default function SponsorLP() {
  const [scrolled, setScrolled] = useState(false);
  useSEO({
    title: "協賛・スポンサー募集 | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026の協賛企業・スポンサーを募集しています。大分県日田市で93日間開催されるイルミネーションイベントへの協賛で、地域経済活性化と企業PRを実現しませんか。",
  });
  const sectionsRef = {
    about: useRef<HTMLElement>(null),
    plans: useRef<HTMLElement>(null),
    effect: useRef<HTMLElement>(null),
    apply: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden font-sans-jp">

      {/* ===== スティッキーヘッダー ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,20,50,0.97)" : "rgba(10,20,50,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(200,163,90,0.2)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <span className="font-display text-sm text-[#C8A35A] tracking-wider cursor-pointer">日田イルミナージュ</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "事業概要", ref: sectionsRef.about },
              { label: "協賛プラン", ref: sectionsRef.plans },
              { label: "地域効果", ref: sectionsRef.effect },
              { label: "お申込み", ref: sectionsRef.apply },
              { label: "お問い合わせ", ref: sectionsRef.contact },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.ref)}
                className="text-white/70 hover:text-white text-xs px-3 py-1.5 rounded transition-colors font-sans-jp"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo(sectionsRef.contact)}
            className="text-xs font-bold px-4 py-2 rounded font-sans-jp transition-colors"
            style={{ background: "#C8A35A", color: "#0a1432" }}
          >
            協賛のお申込み
          </button>
        </div>
        {/* モバイル用アンカーナビ */}
        <div className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2 scrollbar-hide">
          {[
            { label: "事業概要", ref: sectionsRef.about },
            { label: "協賛プラン", ref: sectionsRef.plans },
            { label: "地域効果", ref: sectionsRef.effect },
            { label: "お申込み", ref: sectionsRef.apply },
            { label: "お問い合わせ", ref: sectionsRef.contact },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.ref)}
              className="text-white/60 hover:text-white text-[11px] whitespace-nowrap px-2 py-1 rounded font-sans-jp flex-shrink-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* ===== ヒーロー ===== */}
      <section className="relative min-h-[90svh] flex flex-col justify-end pt-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.hero})` }} />
        {/* イメージ注釈 */}
        <div className="absolute bottom-4 right-4 z-20 text-[10px] text-white/30 font-sans-jp pointer-events-none select-none">※イメージ画像です</div>
       <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,20,50,0.7) 0%, rgba(10,20,50,0.5) 50%, rgba(10,20,50,0.9) 100%)" }} />
       <div className="relative z-10 max-w-2xl mx-auto px-6 pb-12 w-full">
         <p className="text-[#C8A35A] text-xs tracking-[0.4em] mb-3 font-sans-jp">— SPONSORSHIP RECRUITMENT</p>
          <h1 className="font-serif-jp font-bold text-white text-[clamp(2rem,8vw,3.2rem)] leading-tight mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.7)" }}>
            協賛募集のご案内
          </h1>
          <p className="text-white/80 text-base font-sans-jp mb-2">日田イルミナージュ2026</p>
          <p className="text-white/70 text-sm font-sans-jp leading-relaxed mb-8">
            日田に、新たな「冬の観光目的」をつくる。<br />
            93日間のイルミネーションイベントを通じて、<br />
            日田の観光振興と地域経済の活性化に、ともに取り組みませんか。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="/manus-storage/sponsor_guide_hita2026_23d12e04.pdf" download="日田イルミナージュ2026協賛企業募集のご案内.pdf" className="flex items-center justify-center gap-2 bg-[#C8A35A] text-[#0a1432] font-bold text-sm px-6 py-3 rounded font-sans-jp active:scale-95 transition-transform">
              <Download size={16} />資料をダウンロード
            </a>
            <button
              onClick={() => scrollTo(sectionsRef.plans)}
              className="flex items-center justify-center gap-2 border border-white/40 text-white text-sm px-6 py-3 rounded font-sans-jp active:scale-95 transition-transform"
            >
              協賛プランを見る <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollTo(sectionsRef.contact)}
              className="flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm px-6 py-3 rounded font-sans-jp active:scale-95 transition-transform"
            >
              お問い合わせ
            </button>
          </div>
          {/* 概要4指標 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded overflow-hidden text-center">
            {[
              { label: "開催期間", value: "2026年10月31日（土）〜 2027年1月31日（日）" },
              { label: "開催日数", value: "93日間" },
              { label: "会場", value: "サッポロビール九州日田工場" },
            ].map((item) => (
              <div key={item.label} className="bg-black/30 backdrop-blur-sm px-3 py-3">
                <p className="text-white/50 text-[10px] font-sans-jp mb-1">{item.label}</p>
                <p className="text-white text-xs font-bold font-sans-jp leading-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 事業概要 ===== */}
      <section ref={sectionsRef.about} className="py-16 bg-white scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C8A35A] text-xs tracking-[0.3em] text-center font-sans-jp mb-1">ABOUT THE EVENT</p>
          <h2 className="font-serif-jp font-bold text-2xl text-center text-gray-900 mb-1">事業概要</h2>
          <div className="w-10 h-0.5 bg-[#C8A35A] mx-auto mb-8" />

          <div className="bg-[#f8f5ee] rounded-lg p-6 mb-8">
            <h3 className="font-serif-jp font-bold text-lg text-gray-900 text-center mb-3">
              日田に、新たな「冬の観光目的」をつくる。
            </h3>
            <p className="font-sans-jp text-sm text-gray-600 leading-relaxed text-center">
              本事業は、サッポロビール九州日田工場を舞台に、日田の歴史・文化・自然・温もりを光で表現するイルミネーションイベントです。<br />
              夜間観光が少なかった日田に新たな観光資源を創出し、観光客の滞在時間延長、地域回遊の促進、地域経済の活性化を目指します。<br />
              93日間にわたり開催することで、単発イベントではなく、継続的に日田市内外から来場者を呼び込み、<strong>協賛企業・店舗様にとっても長期間のPR機会</strong>を創出します。
            </p>
          </div>

          {/* 開催概要テーブル */}
          <h3 className="font-serif-jp font-bold text-base text-gray-900 mb-3 text-center">開催概要</h3>
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-10">
            {OVERVIEW_ROWS.map((row, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="w-32 sm:w-40 flex-shrink-0 px-4 py-3 font-sans-jp text-xs font-bold text-[#C8A35A] border-r border-gray-100">
                  {row.label}
                </div>
                <div className="px-4 py-3 font-sans-jp text-sm text-gray-700">{row.value}</div>
              </div>
            ))}
          </div>

          {/* 来場者構成 */}
          <h3 className="font-serif-jp font-bold text-base text-gray-900 mb-4 text-center">想定来場者構成</h3>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {VISITOR_BREAKDOWN.map((item) => (
              <div key={item.label} className="text-center p-4 rounded-lg border border-gray-100 bg-gray-50">
                <div className="font-display text-2xl font-bold mb-1" style={{ color: item.color }}>{item.pct}%</div>
                <div className="font-sans-jp text-xs text-gray-600 mb-1">{item.label}</div>
                <div className="font-sans-jp text-xs font-bold text-gray-800">{item.count}</div>
              </div>
            ))}
          </div>
          {/* プログレスバー */}
          <div className="h-3 rounded-full overflow-hidden flex mb-2">
            {VISITOR_BREAKDOWN.map((item) => (
              <div key={item.label} style={{ width: `${item.pct}%`, background: item.color }} />
            ))}
          </div>
          <div className="flex gap-4 justify-center mb-10">
            {VISITOR_BREAKDOWN.map((item) => (
              <div key={item.label} className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <span className="font-sans-jp text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>

          {/* 集客方法 */}
          <h3 className="font-serif-jp font-bold text-base text-gray-900 mb-4 text-center">主な集客方法</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ATTRACTION_METHODS.map((method) => (
              <div key={method.title} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Megaphone size={14} className="text-[#C8A35A]" />
                  <h4 className="font-sans-jp font-bold text-sm text-gray-800">{method.title}</h4>
                </div>
                <ul className="space-y-1.5">
                  {method.items.map((item) => (
                    <li key={item} className="font-sans-jp text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-[#C8A35A] mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 協賛プラン ===== */}
      <section ref={sectionsRef.plans} className="py-16 bg-gray-50 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C8A35A] text-xs tracking-[0.3em] text-center font-sans-jp mb-1">SPONSORSHIP PLANS</p>
          <h2 className="font-serif-jp font-bold text-2xl text-center text-gray-900 mb-1">協賛プラン一覧</h2>
          <div className="w-10 h-0.5 bg-[#C8A35A] mx-auto mb-4" />
          <p className="font-sans-jp text-sm text-gray-600 text-center mb-2">
            協賛金額に応じて、公式ホームページ掲載・会場看板掲載・SNS紹介・飲食店マップ掲載・<br className="hidden sm:block" />
            メディア対応時の企業名掲出などのPR機会をご提供します。
          </p>
          <p className="font-sans-jp text-sm text-gray-600 text-center mb-2">
            「特典の詳細を見る」ボタンで各プランの詳細をご確認いただけます。
          </p>
          <div className="bg-[#C8A35A]/10 border border-[#C8A35A]/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <TrendingUp size={18} className="text-[#C8A35A] flex-shrink-0 mt-0.5" />
              <p className="font-sans-jp text-sm text-gray-700">
                本事業は<strong>93日間</strong>の開催を予定しており、来場者に対して継続的に企業名・店舗名を届けることができます。
                公式ホームページ、SNS、会場掲示、飲食店マップ、メディア対応時の協賛企業パネルなど、
                協賛区分に応じたPR機会をご提供します。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {PLANS.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>

          {/* 飲食店向け比較 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden max-w-2xl mx-auto">
            <div className="px-6 py-4 bg-[#1b5e20]">
              <h3 className="font-sans-jp font-bold text-white text-base">飲食店・地域店舗向け協賛について</h3>
              <p className="font-sans-jp text-white/70 text-xs mt-1">
                協賛店舗を掲載した「飲食店マップ」を作成し、イベント来場者へ配布します。
              </p>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="font-sans-jp font-bold text-sm text-gray-800 mb-1">まちづくり応援パートナー</div>
                  <div className="font-display text-xl text-[#C8A35A] mb-3">¥3万円</div>
                  <ul className="space-y-1.5">
                    {["飲食店マップ掲載・来場者配布", "公式HP掲載"].map((item) => (
                      <li key={item} className="flex items-start gap-1.5 font-sans-jp text-xs text-gray-600">
                        <CheckCircle2 size={12} className="text-[#C8A35A] mt-0.5 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-2 border-[#2e7d32] rounded-lg p-4 relative">
                  <div className="absolute -top-2 left-3 bg-[#2e7d32] text-white text-[10px] font-bold px-2 py-0.5 rounded font-sans-jp">おすすめ</div>
                  <div className="font-sans-jp font-bold text-sm text-gray-800 mb-1">地域応援パートナー</div>
                  <div className="font-display text-xl text-[#C8A35A] mb-3">¥5万円</div>
                  <ul className="space-y-1.5">
                    {["飲食店マップ掲載・来場者配布", "公式HP掲載", "SNS紹介", "★ インスタグラマーによる店舗PR投稿 1回"].map((item) => (
                      <li key={item} className="flex items-start gap-1.5 font-sans-jp text-xs text-gray-600">
                        <CheckCircle2 size={12} className="text-[#2e7d32] mt-0.5 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="font-sans-jp text-xs text-gray-500 leading-relaxed">
                5万円プランの大きな違いは、インスタグラマーによる店舗PR投稿を1回実施する点です。
                イベント公式SNSと店舗SNSを紐付けて発信することで、来場前から店舗の認知を広げ、来店動機づくりにつなげます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 地域効果 ===== */}
      <section ref={sectionsRef.effect} className="py-16 bg-white scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C8A35A] text-xs tracking-[0.3em] text-center font-sans-jp mb-1">REGIONAL IMPACT</p>
          <h2 className="font-serif-jp font-bold text-2xl text-center text-gray-900 mb-1">地域に生まれる効果</h2>
          <div className="w-10 h-0.5 bg-[#C8A35A] mx-auto mb-4" />
          <p className="font-sans-jp text-sm text-gray-600 text-center mb-8">
            本事業は、サッポロビール九州日田工場だけで完結するイベントではありません。<br />
            温泉・豆田町・三隈川・宿泊施設・飲食店・土産物店などと連携し、<br />
            日田市内全体への回遊促進を目指します。
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {REGIONAL_EFFECTS.map((item) => (
              <div key={item.num} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="font-display text-3xl text-[#C8A35A]/30 mb-2">{item.num}</div>
                <h3 className="font-sans-jp font-bold text-sm text-gray-900 mb-2">{item.title}</h3>
                <p className="font-sans-jp text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* 地域経済還元 */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG.crowd})` }} />
            <div className="relative bg-[#0a1432]/90 rounded-lg p-8 text-center">
              <p className="font-sans-jp text-white/60 text-xs tracking-widest mb-2">REGIONAL ECONOMY</p>
              <div className="font-display text-5xl text-[#C8A35A] mb-1">2〜3億円</div>
              <p className="font-sans-jp text-white/80 text-sm mb-4">地域消費目標（93日間）</p>
              <p className="font-sans-jp text-white/60 text-xs leading-relaxed max-w-md mx-auto">
                来場者はイルミネーションを楽しむだけではありません。<strong className="text-white">飲食店利用・宿泊施設利用・温泉利用・観光施設周遊・お土産購入</strong>など、多くの消費活動が地域全体へ波及します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 申込みの流れ ===== */}
      <section ref={sectionsRef.apply} className="py-16 bg-gray-50 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C8A35A] text-xs tracking-[0.3em] text-center font-sans-jp mb-1">HOW TO APPLY</p>
          <h2 className="font-serif-jp font-bold text-2xl text-center text-gray-900 mb-1">お申込みの流れ</h2>
          <div className="w-10 h-0.5 bg-[#C8A35A] mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {STEPS.map((step) => (
              <div key={step.step} className="bg-white rounded-lg p-5 border border-gray-200 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold" style={{ background: "#0a1432", color: "#C8A35A" }}>
                    {step.step}
                  </div>
                </div>
                <div>
                  <p className="font-sans-jp text-[10px] text-gray-400 mb-0.5">STEP {step.step}</p>
                  <h3 className="font-sans-jp font-bold text-sm text-gray-900 mb-1">{step.title}</h3>
                  <p className="font-sans-jp text-xs text-gray-600">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-sans-jp font-bold text-sm text-gray-900 mb-3">申込時にご準備いただくもの</h3>
            <ul className="space-y-2">
              {[
                "企業名・店舗名",
                "担当者名・連絡先",
                "掲載用ロゴデータまたは店舗写真",
                "飲食店マップ掲載希望の場合：店舗住所・営業時間・PR文",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans-jp text-sm text-gray-600">
                  <CheckCircle2 size={14} className="text-[#C8A35A] mt-0.5 flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== お問い合わせ ===== */}
      <section ref={sectionsRef.contact} className="py-16 bg-white scroll-mt-14">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#C8A35A] text-xs tracking-[0.3em] text-center font-sans-jp mb-1">CONTACT</p>
          <h2 className="font-serif-jp font-bold text-2xl text-center text-gray-900 mb-1">お問い合わせ</h2>
          <div className="w-10 h-0.5 bg-[#C8A35A] mx-auto mb-4" />
          <p className="font-sans-jp text-sm text-gray-600 text-center mb-8">
            協賛についてのご質問・お申込みは、下記担当者までお気軽にご連絡ください。
          </p>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6">
            <div className="mb-4">
              <p className="font-sans-jp text-xs text-gray-500 mb-0.5">主催</p>
              <p className="font-sans-jp font-bold text-gray-900">日田イルミナージュ実行委員会</p>
              <p className="font-sans-jp text-xs text-gray-500">（株式会社BIDOW内）</p>
              <p className="mt-3 font-sans-jp text-xs text-gray-500 mb-0.5">共催</p>
              <a href="https://skyhopbrew.com/" target="_blank" rel="noopener noreferrer" className="font-sans-jp font-bold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-[#8f722f]">スカイホップブルーイング株式会社</a>
            </div>
            <div>
              <p className="font-sans-jp text-xs text-gray-500 mb-0.5">担当</p>
              <p className="font-sans-jp font-bold text-gray-900">藤﨑 雄次郎（ふじさき ゆうじろう）</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <a href="mailto:info@bidow.jp" className="flex items-center gap-3 bg-[#0a1432] text-white rounded-lg p-4 hover:bg-[#1a2a52] transition-colors">
              <Mail size={20} className="text-[#C8A35A] flex-shrink-0" />
              <div>
                <p className="font-sans-jp text-xs text-white/60 mb-0.5">メール</p>
                <p className="font-sans-jp text-sm font-bold">info@bidow.jp</p>
              </div>
            </a>
            <a href="tel:080-3908-4738" className="flex items-center gap-3 bg-[#0a1432] text-white rounded-lg p-4 hover:bg-[#1a2a52] transition-colors">
              <Phone size={20} className="text-[#C8A35A] flex-shrink-0" />
              <div>
                <p className="font-sans-jp text-xs text-white/60 mb-0.5">電話</p>
                <p className="font-sans-jp text-sm font-bold">080-3908-4738</p>
              </div>
            </a>
          </div>
          <blockquote className="text-center font-serif-jp text-gray-600 italic text-base mb-8 border-l-4 border-[#C8A35A] pl-4 text-left">
            「日田の新しい冬の風物詩を、ぜひ共に育ててください。」
          </blockquote>
          <div className="text-center">
            <Link href="/">
              <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-sm px-6 py-3 rounded font-sans-jp hover:bg-gray-50 transition-colors">
                イベント公式サイトへ戻る <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="py-8 bg-[#0a1432] text-center">
        <p className="font-sans-jp text-white/40 text-xs">
          日田イルミナージュ2026<br />
          主催：日田イルミナージュ実行委員会<br />
          共催：<a href="https://skyhopbrew.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">スカイホップブルーイング株式会社</a><br />
          © 2026 日田イルミナージュ実行委員会. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
