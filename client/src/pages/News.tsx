// News.tsx — お知らせページ
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

function PageHero({ title, en }: { title: string; en: string }) {
  return (
    <div className="pt-32 pb-16 relative" style={{ background: "linear-gradient(to bottom, #07101f, #050a1a)" }}>
      <div className="container">
        <p className="font-display text-[#D4AF37] text-xs tracking-widest uppercase mb-2">{en}</p>
        <h1 className="font-serif-jp text-3xl md:text-4xl font-bold text-white">{title}</h1>
        <div className="mt-3 w-12 h-px" style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }} />
      </div>
    </div>
  );
}

const NEWS_ITEMS = [
  {
    date: "2026.07.30",
    tag: "開催情報",
    tagColor: "#D4AF37",
    title: "日田イルミナージュ2026開催決定のお知らせ",
    body: "2026年10月31日（土）から2027年1月31日（日）まで、サッポロビール九州日田工場を会場に「日田イルミナージュ2026」を開催することが決定しました。",
  },
  {
    date: "2026.07.30",
    tag: "協賛募集",
    tagColor: "#C8A35A",
    title: "協賛・スポンサー募集開始のお知らせ",
    body: "日田イルミナージュ2026の開催に向け、協賛・スポンサー企業・団体の募集を開始しました。詳細は協賛ページをご覧ください。",
  },
  {
    date: "2026.07.30",
    tag: "協力決定",
    tagColor: "#a0c0e0",
    title: "一般社団法人日本イルミネーション協会との協力決定のお知らせ",
    body: "一般社団法人日本イルミネーション協会と協力関係が決定しました。同協会の専門的な知見のもと、イベントの品質確保と安全な運営を進めます。",
  },
  {
    date: "2026.07.30",
    tag: "後援決定",
    tagColor: "#80c080",
    title: "日田市・日田商工会議所・一般社団法人日田市観光協会の後援決定のお知らせ",
    body: "日田市、日田商工会議所、一般社団法人日田市観光協会から後援をいただくことが決定しました。地域一体となったイベント運営を進めてまいります。",
  },
];

export default function News() {
  useSEO({
    title: "お知らせ | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026に関する最新情報・お知らせ。開催決定・協賛募集・後援決定など最新ニュースをお届けします。",
  });
  return (
    <div className="min-h-screen" style={{ background: "#050a1a", color: "#fff" }}>
      <Header />
      <PageHero title="お知らせ" en="News" />
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="space-y-0">
            {NEWS_ITEMS.map((item, i) => (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-white/35 text-xs">{item.date}</span>
                  <span
                    className="font-sans-jp text-xs px-2 py-0.5 rounded"
                    style={{ background: `${item.tagColor}18`, color: item.tagColor, border: `1px solid ${item.tagColor}33` }}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-serif-jp text-white text-base font-bold mb-2">{item.title}</h3>
                <p className="font-sans-jp text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
