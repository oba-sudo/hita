import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero en="CONTACT" ja="お問い合わせ" sub="イベントに関するご質問・ご要望はこちらからお送りください。" bgImage="/manus-storage/gallery2_8f991659.jpg" />
      <div className="pb-20 bg-[#F7F1E5]">
        <div className="max-w-2xl mx-auto px-4 -mt-4">
          {submitted ? (
            <div className="mt-10 bg-white rounded-2xl shadow-md p-10 border border-[#e8e0d0] text-center">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-serif-jp font-bold text-[#10243E] text-xl mb-2">送信が完了しました</h3>
              <p className="font-sans-jp text-[#10243E]/70 text-sm">お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 bg-white rounded-2xl shadow-md p-8 border border-[#e8e0d0] space-y-5">
              <div>
                <label className="block text-sm font-bold font-sans-jp text-[#10243E] mb-1.5">お名前 <span className="text-red-500">*</span></label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-[#e8e0d0] rounded-xl px-4 py-3 font-sans-jp text-sm focus:outline-none focus:border-[#C8A35A] focus:ring-1 focus:ring-[#C8A35A]" placeholder="山田 太郎" />
              </div>
              <div>
                <label className="block text-sm font-bold font-sans-jp text-[#10243E] mb-1.5">メールアドレス <span className="text-red-500">*</span></label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-[#e8e0d0] rounded-xl px-4 py-3 font-sans-jp text-sm focus:outline-none focus:border-[#C8A35A] focus:ring-1 focus:ring-[#C8A35A]" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold font-sans-jp text-[#10243E] mb-1.5">お問い合わせ種別</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border border-[#e8e0d0] rounded-xl px-4 py-3 font-sans-jp text-sm focus:outline-none focus:border-[#C8A35A] focus:ring-1 focus:ring-[#C8A35A] bg-white">
                  <option value="">選択してください</option>
                  <option value="ticket">チケットについて</option>
                  <option value="access">アクセス・駐車場について</option>
                  <option value="sponsor">協賛について</option>
                  <option value="media">取材・メディアについて</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold font-sans-jp text-[#10243E] mb-1.5">お問い合わせ内容 <span className="text-red-500">*</span></label>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full border border-[#e8e0d0] rounded-xl px-4 py-3 font-sans-jp text-sm focus:outline-none focus:border-[#C8A35A] focus:ring-1 focus:ring-[#C8A35A] resize-none" placeholder="お問い合わせ内容をご記入ください" />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#10243E] hover:bg-[#1a3a5e] text-white font-bold py-4 rounded-xl font-sans-jp transition-all active:scale-[0.98]">
                <Send size={16} />送信する
              </button>
              <p className="text-xs text-[#10243E]/40 font-sans-jp text-center">
                ご入力いただいた個人情報は、お問い合わせへの回答のみに使用します。
              </p>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
