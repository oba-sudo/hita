/**
 * Home — 日田イルミナージュ2026 イベント本番トップ
 * デザイン方針: Immersive Celestial Festival。会場体験・チケット・来場情報を最短導線で伝える。
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CalendarDays,
  Car,
  Clock3,
  ExternalLink,
  MapPin,
  MoonStar,
  Sparkles,
  Ticket,
  TrainFront,
  UsersRound,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms ${delay}ms cubic-bezier(.23,1,.32,1), transform 700ms ${delay}ms cubic-bezier(.23,1,.32,1)`,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ number, en, children }: { number: string; en: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 md:mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="constellation-number font-display text-[11px] tracking-[.22em]">{number}</span>
        <div className="light-rule w-16 md:w-28" />
        <span className="font-display text-[10px] tracking-[.28em] text-white/40">{en}</span>
      </div>
      <h2 className="max-w-4xl font-serif-jp text-[clamp(1.8rem,5.5vw,4.25rem)] font-semibold leading-[1.18] tracking-[-.03em] text-white">
        {children}
      </h2>
    </div>
  );
}

const eventFacts = [
  { icon: CalendarDays, label: "開催期間", value: "2026.10.31 — 2027.1.31", note: "全93日間・期間中無休" },
  { icon: Clock3, label: "開催時間", value: "17:30 — 21:30", note: "最終受付 21:00・雨天決行" },
  { icon: MapPin, label: "会場", value: "サッポロビール 九州日田工場", note: "大分県日田市高瀬6979" },
];

const highlights = [
  {
    number: "01",
    title: "回廊トンネル",
    en: "LIGHT CORRIDOR",
    description: "青白い光が幾重にも連なり、歩くほどに奥行きが変わる幻想の回廊。",
    image: RENEWAL_ASSETS.corridorTunnel,
    className: "md:col-span-5 md:row-span-2",
  },
  {
    number: "02",
    title: "宇宙広場",
    en: "COSMIC PLAZA",
    description: "星や惑星、ロケットの光が夜空へ広がる、スケール感あふれるエリア。",
    image: RENEWAL_ASSETS.spacePlaza,
    className: "md:col-span-7",
  },
  {
    number: "03",
    title: "キッズエリア",
    en: "KIDS AREA",
    description: "見るだけでなく、光の中で遊べる。家族で楽しめる体験型イルミネーション。",
    image: RENEWAL_ASSETS.kidsCircle,
    className: "md:col-span-7",
  },
];

export default function Home() {
  useSEO({
    title: "日田イルミナージュ2026｜九州初上陸・光の章",
    description: "2026年10月31日から2027年1月31日まで、サッポロビール九州日田工場で開催。回廊トンネル、宇宙広場、キッズエリアなど、光が泳ぐ93日間をお楽しみください。",
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030513] text-white">
      <Header />

      <main>
        <section className="relative min-h-[100svh] overflow-hidden bg-[#030513]">
          <img
            src={RENEWAL_ASSETS.mainNight}
            alt="日田イルミナージュ2026の光のオブジェが並ぶ会場イメージ"
            className="hero-drift absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,19,.95)_0%,rgba(3,5,19,.76)_42%,rgba(3,5,19,.25)_78%,rgba(3,5,19,.56)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,19,.18)_0%,transparent_35%,rgba(3,5,19,.92)_100%)]" />
          <div className="absolute left-[12%] top-[18%] h-48 w-48 rounded-full bg-[#F43F8E]/10 blur-[90px]" />
          <div className="absolute right-[8%] top-[9%] h-64 w-64 rounded-full bg-[#55D9FF]/10 blur-[110px]" />
          <div className="portal-rings" />
          <div className="light-stream left-[-8%] top-[29%] w-[62%] -rotate-[8deg]" />
          <div className="light-stream right-[-5%] top-[64%] w-[48%] rotate-[5deg]" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-28 pt-28 sm:px-8 md:items-center md:pb-24 lg:px-14">
            <div className="max-w-5xl">
              <p className="constellation-number mb-5 font-display text-[11px] tracking-[.38em] md:text-sm">2026 — 2027 ・ HITA</p>
              <div className="mb-7 flex items-center gap-3">
                <Sparkles size={18} className="text-[#F43F8E]" />
                <span className="font-serif-jp text-sm tracking-[.18em] text-white/75 md:text-base">九州初上陸・光の章</span>
              </div>
              <h1 className="mb-7">
                <img
                  src={RENEWAL_ASSETS.logoHiRes}
                  alt="日田イルミナージュ"
                  className="h-auto w-full max-w-[760px] object-contain object-left drop-shadow-[0_6px_24px_rgba(0,0,0,.65)]"
                />
              </h1>
              <p className="mb-3 font-serif-jp text-[clamp(1.1rem,3vw,1.65rem)] leading-relaxed text-white">サッポロビール九州日田工場に、<br className="sm:hidden" />光が泳ぐ夜が姿をあらわす。</p>
              <p className="mb-9 font-sans-jp text-xs leading-7 text-white/55 md:text-sm">2026年10月31日（土）から2027年1月31日（日）まで。<br className="hidden sm:block" />冬の日田が、光と遊びと驚きに包まれる93日間。</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/tickets" className="ticket-glow ticket-pulse inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-sans-jp text-sm font-bold text-white transition-transform active:scale-[.97]">
                  <Ticket size={17} /> チケット情報を見る
                </Link>
                <Link href="/events" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/10 px-7 py-4 font-sans-jp text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10">
                  見どころをめぐる <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-7 right-5 z-10 font-sans-jp text-[10px] tracking-[.08em] text-white/45 md:right-8">※会場演出イメージ</div>
        </section>

        <section className="relative z-20 -mt-16 px-4 md:-mt-14 md:px-8" aria-label="開催概要">
          <div className="mx-auto grid max-w-[1320px] overflow-hidden border border-white/10 bg-[#090b22]/94 shadow-[0_24px_90px_rgba(0,0,0,.42)] backdrop-blur-xl md:grid-cols-3">
            {eventFacts.map(({ icon: Icon, label, value, note }, index) => (
              <div key={label} className={`relative p-5 md:p-7 ${index < eventFacts.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""}`}>
                <div className="mb-4 flex items-center gap-2 text-[#F5C95D]">
                  <Icon size={16} />
                  <span className="font-sans-jp text-[10px] font-bold tracking-[.18em]">{label}</span>
                </div>
                <p className="font-serif-jp text-base font-semibold leading-relaxed text-white md:text-lg">{value}</p>
                <p className="mt-1 font-sans-jp text-[11px] text-white/45">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cosmos-surface relative overflow-hidden px-5 pb-24 pt-24 md:px-8 md:pb-36 md:pt-36">
          <div className="light-stream left-0 top-0 w-[72%]" />
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20">
            <Reveal>
              <SectionTitle number="00" en="WELCOME TO HITA">光に包まれる、<br />冬の日田へ。</SectionTitle>
              <p className="max-w-xl font-sans-jp text-sm leading-8 text-white/64 md:text-base">
                日田イルミナージュ2026は、サッポロビール九州日田工場を舞台にした、九州初上陸のイルミネーションイベントです。光の回廊、宇宙を旅するような広場、家族で遊べる体験エリア。日常を離れ、光の中を歩く特別な夜をお楽しみください。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-[#55D9FF]/30 bg-[#55D9FF]/5 px-3 py-2 font-sans-jp text-xs text-[#9CEBFF]">カップル</span>
                <span className="border border-[#F43F8E]/30 bg-[#F43F8E]/5 px-3 py-2 font-sans-jp text-xs text-[#FF9CC8]">ファミリー</span>
                <span className="border border-[#F5C95D]/30 bg-[#F5C95D]/5 px-3 py-2 font-sans-jp text-xs text-[#F5C95D]">写真・思い出</span>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="relative">
                <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(244,63,142,.18),transparent_67%)] blur-2xl" />
                <img src={RENEWAL_ASSETS.eventKeyvisual} alt="日田イルミナージュ2026 開催期間と会場を案内するキービジュアル" className="relative w-full border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,.5)]" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="highlights" className="relative overflow-hidden bg-[#030513] px-5 py-24 md:px-8 md:py-36">
          <div className="light-stream right-0 top-0 w-[62%]" />
          <div className="mx-auto max-w-[1320px]">
            <Reveal>
              <SectionTitle number="01" en="HIGHLIGHTS">今夜、どの光を<br />めぐりますか。</SectionTitle>
            </Reveal>
            <div className="grid auto-rows-[290px] gap-4 md:grid-cols-12 md:auto-rows-[310px]">
              {highlights.map((item, index) => (
                <Reveal key={item.title} className={item.className} delay={index * 70}>
                  <article className="group relative h-full overflow-hidden border border-white/10 bg-[#090b22]">
                    <img src={item.image} alt={`${item.title}の会場演出イメージ`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030513] via-[#030513]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-display text-xs text-[#F43F8E]">{item.number}</span>
                        <span className="font-display text-[9px] tracking-[.22em] text-white/45">{item.en}</span>
                      </div>
                      <h3 className="font-serif-jp text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
                      <p className="mt-2 max-w-lg font-sans-jp text-xs leading-6 text-white/62 md:text-sm">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Reveal delay={80}>
                <article className="group relative min-h-[280px] overflow-hidden border border-white/10">
                  <img src={RENEWAL_ASSETS.ebisuPond} alt="恵比寿池の会場演出イメージ" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030513] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5"><p className="font-display text-[9px] tracking-[.22em] text-[#F5C95D]">EBISU POND</p><h3 className="mt-1 font-serif-jp text-2xl font-semibold">恵比寿池</h3></div>
                </article>
              </Reveal>
              <Reveal delay={140}>
                <article className="group relative min-h-[280px] overflow-hidden border border-white/10">
                  <img src={RENEWAL_ASSETS.ledSeesaw} alt="光るLEDシーソーの体験イメージ" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030513] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5"><p className="font-display text-[9px] tracking-[.22em] text-[#55D9FF]">PLAY WITH LIGHT</p><h3 className="mt-1 font-serif-jp text-2xl font-semibold">LEDシーソー</h3></div>
                </article>
              </Reveal>
            </div>
            <p className="mt-4 text-right font-sans-jp text-[10px] text-white/35">※掲載画像は会場演出イメージです。</p>
            <Reveal delay={120} className="mt-9">
              <Link href="/events" className="inline-flex items-center gap-2 border-b border-[#F43F8E]/70 pb-2 font-sans-jp text-sm text-white transition-colors hover:text-[#FF9CC8]">すべての見どころを見る <ArrowRight size={15} /></Link>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[#090b22] px-5 py-24 md:px-8 md:py-32">
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#F43F8E]/10 blur-[110px]" />
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20">
            <Reveal>
              <img src={RENEWAL_ASSETS.ticketPromo} alt="日田イルミナージュ提携施設100円OFF WEBチケット案内" className="mx-auto max-h-[720px] w-auto border border-white/10 shadow-[0_26px_80px_rgba(0,0,0,.48)]" />
            </Reveal>
            <Reveal delay={100}>
              <SectionTitle number="02" en="TICKETS">光の夜へ、<br />一歩先に。</SectionTitle>
              <div className="mb-8 grid grid-cols-2 gap-px bg-white/10">
                <div className="bg-[#06081d] p-5 md:p-7">
                  <p className="font-sans-jp text-[10px] text-white/45">大人（中学生以上）</p>
                  <p className="constellation-number mt-2 font-display text-3xl md:text-4xl">¥2,000</p>
                </div>
                <div className="bg-[#06081d] p-5 md:p-7">
                  <p className="font-sans-jp text-[10px] text-white/45">子ども（1歳〜小学生）</p>
                  <p className="constellation-number mt-2 font-display text-3xl md:text-4xl">¥1,000</p>
                </div>
              </div>
              <p className="mb-7 font-sans-jp text-sm leading-8 text-white/62">
                進撃の巨人ミュージアム、進撃の巨人カフェ、日田森のビール園をご利用の方には、QRチケット提示で各100円OFFの特典をご用意しています。
              </p>
              <Link href="/tickets" className="ticket-glow inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-sans-jp text-sm font-bold text-white transition-transform active:scale-[.97]">
                <Ticket size={17} /> チケット情報を見る
              </Link>
              <p className="mt-4 font-sans-jp text-[10px] leading-5 text-white/38">※販売先・購入URLは順次公開します。割引は期間中お一人様1回限り、他割引との併用不可、転売・譲渡禁止です。</p>
            </Reveal>
          </div>
        </section>

        <section className="cosmos-surface relative overflow-hidden px-5 py-24 md:px-8 md:py-36">
          <div className="light-stream left-[8%] top-0 w-[74%]" />
          <div className="mx-auto max-w-[1320px]">
            <Reveal><SectionTitle number="03" en="ACCESS">会場までの道のりも、<br />夜の旅のはじまり。</SectionTitle></Reveal>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              <Reveal>
                <div className="h-full bg-[#06081d] p-6 md:p-8">
                  <MapPin className="mb-5 text-[#F43F8E]" size={23} />
                  <p className="font-sans-jp text-[10px] tracking-[.18em] text-white/40">VENUE</p>
                  <h3 className="mt-2 font-serif-jp text-lg font-semibold">サッポロビール<br />九州日田工場</h3>
                  <p className="mt-3 font-sans-jp text-xs leading-6 text-white/50">〒877-0054<br />大分県日田市高瀬6979</p>
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div className="h-full bg-[#06081d] p-6 md:p-8">
                  <TrainFront className="mb-5 text-[#55D9FF]" size={23} />
                  <p className="font-sans-jp text-[10px] tracking-[.18em] text-white/40">BY TRAIN</p>
                  <h3 className="mt-2 font-serif-jp text-lg font-semibold">JR「日田」駅より</h3>
                  <p className="mt-3 font-display text-3xl text-white">約10<span className="ml-1 font-sans-jp text-sm">分</span></p>
                  <p className="mt-2 font-sans-jp text-xs text-white/50">タクシー利用</p>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="h-full bg-[#06081d] p-6 md:p-8">
                  <Car className="mb-5 text-[#F5C95D]" size={23} />
                  <p className="font-sans-jp text-[10px] tracking-[.18em] text-white/40">BY CAR</p>
                  <h3 className="mt-2 font-serif-jp text-lg font-semibold">日田ICより約10分</h3>
                  <p className="mt-3 font-sans-jp text-sm text-white/65">併設駐車場 150台・無料</p>
                  <p className="mt-2 font-sans-jp text-xs text-white/40">台数に限りがあります。</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140} className="mt-8 flex flex-wrap gap-4">
              <Link href="/access" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-sans-jp text-sm text-white transition-colors hover:bg-white/10">アクセス詳細 <ArrowRight size={14} /></Link>
              <Link href="/faq" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-sans-jp text-sm text-white/65 transition-colors hover:text-white">ご来場前のFAQ <ArrowRight size={14} /></Link>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#030513] px-5 py-24 md:px-8 md:py-32">
          <img src={RENEWAL_ASSETS.aerial} alt="サッポロビール九州日田工場の会場全景" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030513] via-[#030513]/92 to-[#030513]/62" />
          <div className="relative mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[1.15fr_.85fr] md:items-center">
            <Reveal>
              <p className="mb-4 font-display text-[10px] tracking-[.28em] text-[#F5C95D]">HITA × LIGHT × COMMUNITY</p>
              <h2 className="font-serif-jp text-3xl font-semibold leading-tight md:text-5xl">光をきっかけに、<br />冬の日田をめぐる。</h2>
              <p className="mt-6 max-w-2xl font-sans-jp text-sm leading-8 text-white/60">
                会場だけでなく、飲食、温泉、観光、宿泊へ。日田イルミナージュは、冬の日田を訪れる新しい理由をつくり、地域をめぐる時間まで含めて一つの体験にしていきます。
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-l border-[#F43F8E]/55 pl-6 md:pl-8">
                <UsersRound className="mb-5 text-[#F43F8E]" size={26} />
                <p className="font-serif-jp text-xl font-semibold">協賛・スポンサー募集中</p>
                <p className="mt-3 font-sans-jp text-xs leading-6 text-white/50">冬の日田を代表する観光イベントを、ともにつくる企業・団体を募集しています。</p>
                <Link href="/sponsor" className="mt-6 inline-flex items-center gap-2 font-sans-jp text-sm text-[#FF9CC8]">協賛について詳しく見る <ArrowRight size={14} /></Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#06081d] px-5 py-14 md:px-8">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-[10px] tracking-[.25em] text-[#55D9FF]">ILLUMINAGE GROUP</p>
              <p className="mt-2 font-serif-jp text-lg text-white">神戸・大阪でも、光の物語を開催。</p>
            </div>
            <a href="https://illuminagegroup.com/ja" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans-jp text-sm text-white/70 transition-colors hover:text-white">イルミナージュ公式サイト <ExternalLink size={14} /></a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
