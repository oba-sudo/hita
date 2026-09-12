/**
 * Contact — お問い合わせ
 * デザイン方針: 光の余韻を保ちながら、Formspree送信フォームを読みやすく安心感のある構成にする。
 */
import { useRef, useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { RENEWAL_ASSETS } from "@/data/renewalAssets";

export default function Contact() {
  useSEO({
    title: "お問い合わせ | 日田イルミナージュ2026",
    description: "日田イルミナージュ2026のチケット、アクセス、取材、地域連携、協賛に関するお問い合わせを受け付けています。",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("https://formspree.io/f/xnpaazya", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.errors?.[0]?.message ?? "送信に失敗しました。時間をおいて再度お試しください。");
      }
      setSubmitted(true);
      formRef.current?.reset();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "ネットワークエラーが発生しました。接続を確認して再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = "w-full border border-white/12 bg-white/[.035] px-4 py-3.5 font-sans-jp text-sm text-white placeholder:text-white/24 outline-none transition-colors focus:border-[#F43F8E]/70 focus:bg-white/[.055] focus:ring-1 focus:ring-[#F43F8E]/30";

  return (
    <PageLayout>
      <PageHero en="CONTACT" ja="お問い合わせ" sub="イベント、チケット、アクセス、取材、地域連携などについて、こちらからお問い合わせください。" bgImage={RENEWAL_ASSETS.restaurantFront} />

      <section className="relative overflow-hidden bg-[#030513] px-5 py-20 md:px-8 md:py-32">
        <div className="light-stream right-0 top-0 w-[72%]" />
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-2 text-[#55D9FF]"><Mail size={17} /><span className="font-display text-[10px] tracking-[.26em]">ENQUIRIES</span></div>
            <h2 className="mt-4 font-serif-jp text-3xl font-semibold leading-tight md:text-4xl">光の夜を、<br />安心して楽しむために。</h2>
            <p className="mt-5 font-sans-jp text-sm leading-8 text-white/52">よくある質問で解決しない内容は、フォームからお送りください。内容を確認のうえ、担当者よりご連絡します。</p>
            <a href="mailto:info@bidow.jp" className="mt-8 inline-flex items-center gap-2 font-sans-jp text-sm text-[#9CEBFF]">info@bidow.jp</a>
            <p className="mt-2 font-sans-jp text-[10px] leading-5 text-white/35">返信には数営業日いただく場合があります。</p>
          </div>

          {submitted ? (
            <div className="border border-emerald-300/20 bg-emerald-300/5 p-8 text-center md:p-12">
              <CheckCircle2 size={48} className="mx-auto mb-5 text-emerald-300" />
              <h3 className="font-serif-jp text-2xl font-semibold">送信が完了しました</h3>
              <p className="mt-4 font-sans-jp text-sm leading-7 text-white/56">お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡します。</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 border border-white/10 bg-[#07091d] p-6 md:p-10">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-sans-jp text-xs font-medium text-white/72">お名前 <span className="text-[#FF83B7]">必須</span></label>
                <input id="contact-name" name="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={fieldClass} placeholder="山田 太郎" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-sans-jp text-xs font-medium text-white/72">メールアドレス <span className="text-[#FF83B7]">必須</span></label>
                <input id="contact-email" name="email" required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={fieldClass} placeholder="example@email.com" autoComplete="email" />
              </div>
              <div>
                <label htmlFor="contact-category" className="mb-2 block font-sans-jp text-xs font-medium text-white/72">お問い合わせ種別</label>
                <select id="contact-category" name="category" value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className={`${fieldClass} bg-[#090b22]`}>
                  <option value="">選択してください</option>
                  <option value="ticket">チケットについて</option>
                  <option value="access">アクセス・駐車場について</option>
                  <option value="media">取材・メディアについて</option>
                  <option value="regional">地域連携について</option>
                  <option value="sponsor">協賛について</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block font-sans-jp text-xs font-medium text-white/72">お問い合わせ内容 <span className="text-[#FF83B7]">必須</span></label>
                <textarea id="contact-message" name="message" required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows={7} className={`${fieldClass} resize-y`} placeholder="お問い合わせ内容をご記入ください" />
              </div>
              {error && <p role="alert" className="font-sans-jp text-sm text-red-300">{error}</p>}
              <button type="submit" disabled={submitting} className="ticket-glow flex w-full items-center justify-center gap-2 rounded-full py-4 font-sans-jp text-sm font-bold text-white transition-transform active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-55">
                <Send size={16} /> {submitting ? "送信中…" : "送信する"}
              </button>
              <p className="text-center font-sans-jp text-[10px] leading-5 text-white/30">ご入力いただいた個人情報は、お問い合わせへの回答のみに使用します。</p>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
