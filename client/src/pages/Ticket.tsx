import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ExternalLink, Info, Ticket as TicketIcon } from "lucide-react";

const TICKET_TYPES = [
  { id: "adult", label: "大人", price: "1,500円", note: "中学生以上", available: true },
  { id: "child", label: "子ども", price: "800円", note: "小学生", available: true },
  { id: "under6", label: "未就学児", price: "無料", note: "保護者同伴", available: true },
  { id: "group", label: "団体（15名以上）", price: "1,200円/人", note: "要事前申込", available: true },
];

export default function Ticket() {
  return (
    <PageLayout>
      <PageHero en="TICKET" ja="チケット情報" sub="チケットはオンラインまたは当日券でご購入いただけます。" bgImage="/manus-storage/hero_sp_d2322500.jpg" />
      <div className="pb-20 bg-[#F7F1E5]">
        <div className="max-w-[1000px] mx-auto px-4 -mt-4">
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TICKET_TYPES.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl shadow-md p-6 border border-[#e8e0d0] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#10243E] flex items-center justify-center shrink-0">
                  <TicketIcon size={22} className="text-[#C8A35A]" />
                </div>
                <div className="flex-1">
                  <p className="font-serif-jp font-bold text-[#10243E] text-lg">{t.label}</p>
                  <p className="text-xs text-[#10243E]/50 font-sans-jp">{t.note}</p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-[#C8A35A] text-2xl">{t.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-[#e8e0d0]">
              <h3 className="font-serif-jp font-bold text-[#10243E] text-lg mb-4 flex items-center gap-2"><TicketIcon size={18} className="text-[#C8A35A]" />オンライン購入</h3>
              <p className="font-sans-jp text-[#10243E]/80 text-sm leading-relaxed mb-4">公式チケット販売サイトにてご購入いただけます。当日券より混雑を避けてスムーズに入場できます。</p>
              <a href="#" className="inline-flex items-center gap-2 bg-[#C8A35A] hover:bg-[#b8924a] text-[#10243E] font-bold px-5 py-3 rounded-xl font-sans-jp text-sm transition-all active:scale-95">
                <ExternalLink size={16} />チケットを購入する
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-[#e8e0d0]">
              <h3 className="font-serif-jp font-bold text-[#10243E] text-lg mb-4 flex items-center gap-2"><TicketIcon size={18} className="text-[#C8A35A]" />当日券</h3>
              <p className="font-sans-jp text-[#10243E]/80 text-sm leading-relaxed mb-4">会場入口にて当日券を販売します。混雑状況によっては販売を終了する場合があります。</p>
              <div className="bg-[#F7F1E5] rounded-xl p-3 text-xs text-[#10243E]/70 font-sans-jp">
                ※ 混雑時は当日券の販売を早めに終了する場合があります。オンライン購入をおすすめします。
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-3">
            <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 font-sans-jp leading-relaxed">
              チケットの払い戻しは、主催者都合による中止の場合のみ対応します。天候による中止の場合は払い戻し対応外となる場合があります。詳細は購入時の規約をご確認ください。
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
