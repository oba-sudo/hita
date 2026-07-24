import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { SPONSORS } from "@/data/siteData";
import { Link } from "wouter";
import { Star, Users, TrendingUp, Heart } from "lucide-react";

const PLANS = [
  { rank: "プラチナ", price: "50万円〜", color: "bg-gradient-to-br from-slate-200 to-slate-400", textColor: "text-slate-800", benefits: ["メインゲートへの大型看板掲示", "公式サイトへのロゴ掲載（最上位）", "SNS・プレスリリースへの掲載", "VIPチケット10枚", "開会式への招待"] },
  { rank: "ゴールド", price: "20万円〜", color: "bg-gradient-to-br from-yellow-100 to-yellow-300", textColor: "text-yellow-900", benefits: ["会場内への看板掲示", "公式サイトへのロゴ掲載", "SNSへの掲載", "招待チケット6枚"] },
  { rank: "シルバー", price: "10万円〜", color: "bg-gradient-to-br from-gray-100 to-gray-300", textColor: "text-gray-800", benefits: ["公式サイトへのロゴ掲載", "SNSへの掲載", "招待チケット3枚"] },
  { rank: "ブロンズ", price: "3万円〜", color: "bg-gradient-to-br from-orange-100 to-orange-200", textColor: "text-orange-900", benefits: ["公式サイトへの社名掲載", "招待チケット1枚"] },
];

export default function SponsorLP() {
  return (
    <PageLayout>
      <PageHero en="SPONSOR" ja="協賛企業募集" sub="日田イルミナージュ2026の協賛企業を募集しています。地域を盛り上げる取り組みにご参加ください。" bgImage="/manus-storage/hero_97225277.jpg" />
      <div className="pb-20 bg-[#F7F1E5]">
        <div className="max-w-[1100px] mx-auto px-4 -mt-4">
          <div className="mt-6 bg-[#10243E] rounded-2xl p-8 text-white mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Users size={28} className="text-[#C8A35A] mx-auto mb-2" />, label: "来場者数", value: "5万人以上", note: "（目標）" },
                { icon: <TrendingUp size={28} className="text-[#C8A35A] mx-auto mb-2" />, label: "開催期間", value: "約45日間", note: "（予定）" },
                { icon: <Star size={28} className="text-[#C8A35A] mx-auto mb-2" />, label: "SNSリーチ", value: "10万人以上", note: "（目標）" },
                { icon: <Heart size={28} className="text-[#C8A35A] mx-auto mb-2" />, label: "地域貢献", value: "日田市全体", note: "の活性化" },
              ].map(({ icon, label, value, note }) => (
                <div key={label}>
                  {icon}
                  <p className="text-xs text-white/60 font-sans-jp">{label}</p>
                  <p className="font-display font-bold text-[#C8A35A] text-xl">{value}</p>
                  <p className="text-xs text-white/50 font-sans-jp">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <h3 className="font-serif-jp font-bold text-[#10243E] text-2xl mb-6">協賛プラン</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {PLANS.map((p) => (
              <div key={p.rank} className={`rounded-2xl p-5 ${p.color}`}>
                <p className={`font-display font-bold text-lg ${p.textColor}`}>{p.rank}</p>
                <p className={`font-bold text-2xl ${p.textColor} mt-1 mb-3`}>{p.price}</p>
                <ul className="space-y-1.5">
                  {p.benefits.map((b) => (
                    <li key={b} className={`text-xs font-sans-jp ${p.textColor} flex gap-1.5`}>
                      <span>◆</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {SPONSORS.length > 0 && (
            <div className="mb-10">
              <h3 className="font-serif-jp font-bold text-[#10243E] text-xl mb-4">協賛企業一覧（予定）</h3>
              <div className="flex flex-wrap gap-3">
                {SPONSORS.map((s) => (
                  <span key={s.id} className="bg-white border border-[#e8e0d0] rounded-xl px-4 py-2 text-sm font-sans-jp text-[#10243E] shadow-sm">
                    <span className="text-xs text-[#C8A35A] font-bold mr-1.5">[{s.rank}]</span>{s.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-[#e8e0d0] text-center">
            <h3 className="font-serif-jp font-bold text-[#10243E] text-xl mb-3">協賛のお申し込み・お問い合わせ</h3>
            <p className="font-sans-jp text-[#10243E]/70 text-sm mb-5">詳細資料のご請求・ご相談はお問い合わせフォームよりお気軽にどうぞ。</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold px-8 py-4 rounded-xl font-sans-jp transition-all active:scale-95">
              協賛についてお問い合わせする
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
