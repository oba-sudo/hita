import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "お問い合わせ | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026へのお問い合わせはこちら。チケット・アクセス・協賛・取材に関するご質問をお受けしています。",
  });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans-jp text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8A35A] focus:ring-1 focus:ring-[#C8A35A] transition-colors";

  return (
    <PageLayout>
      <PageHero en="CONTACT" ja="お問い合わせ" sub="イベントに関するご質問・ご要望はこちらからお送りください。" bgImage="/manus-storage/gallery2_3f1cfbd2.jpg" />
      <div className="pb-24 bg-[#050a1a]">
        <div className="max-w-2xl mx-auto px-4 pt-12">
          {submitted ? (
            <div className="bg-white/5 rounded-2xl p-10 border border-white/10 text-center">
              <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
              <h3 className="font-serif-jp font-bold text-white text-xl mb-2">送信が完了しました</h3>
              <p className="font-sans-jp text-white/60 text-sm">お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-8 border border-white/10 space-y-5">
              <div>
                <label className="block text-sm font-bold font-sans-jp text-white/80 mb-1.5">お名前 <span className="text-red-400">*</span></label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-bold font-sans-jp text-white/80 mb-1.5">メールアドレス <span className="text-red-400">*</span></label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputCls}
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold font-sans-jp text-white/80 mb-1.5">お問い合わせ種別</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className={`${inputCls} bg-[#0d1a2e]`}
                >
                  <option value="" className="bg-[#0d1a2e]">選択してください</option>
                  <option value="ticket" className="bg-[#0d1a2e]">チケットについて</option>
                  <option value="access" className="bg-[#0d1a2e]">アクセス・駐車場について</option>
                  <option value="sponsor" className="bg-[#0d1a2e]">協賛について</option>
                  <option value="media" className="bg-[#0d1a2e]">取材・メディアについて</option>
                  <option value="other" className="bg-[#0d1a2e]">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold font-sans-jp text-white/80 mb-1.5">お問い合わせ内容 <span className="text-red-400">*</span></label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={`${inputCls} resize-none`}
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#C8A35A] hover:bg-[#e8c070] text-[#050a1a] font-bold py-4 rounded-xl font-sans-jp transition-all active:scale-[0.98]"
              >
                <Send size={16} />送信する
              </button>
              <p className="text-xs text-white/30 font-sans-jp text-center">
                ご入力いただいた個人情報は、お問い合わせへの回答のみに使用します。
              </p>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
