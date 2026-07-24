import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

export default function Privacy() {
  return (
    <PageLayout>
      <PageHero en="PRIVACY POLICY" ja="プライバシーポリシー" />
      <div className="pb-20 bg-[#F7F1E5]">
        <div className="max-w-3xl mx-auto px-4 -mt-4">
          <div className="mt-6 bg-white rounded-2xl shadow-md p-8 border border-[#e8e0d0] prose prose-sm max-w-none font-sans-jp text-[#10243E]">
            <h2 className="font-serif-jp font-bold text-[#10243E] text-lg mb-3">個人情報の取り扱いについて</h2>
            <p className="text-sm leading-relaxed text-[#10243E]/80 mb-4">
              日田光の町づくり実行委員会（以下「当実行委員会」）は、お客様の個人情報の保護を重要な責務と考え、以下の方針に基づき個人情報を適切に取り扱います。
            </p>
            {[
              { title: "1. 個人情報の収集", content: "当実行委員会は、お問い合わせフォームや各種申込フォームを通じて、お名前・メールアドレス等の個人情報を収集する場合があります。" },
              { title: "2. 個人情報の利用目的", content: "収集した個人情報は、お問い合わせへの回答、イベント情報のご案内、協賛・出展に関するご連絡等の目的に使用します。" },
              { title: "3. 個人情報の第三者提供", content: "当実行委員会は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。" },
              { title: "4. 個人情報の管理", content: "当実行委員会は、個人情報の漏洩・滅失・毀損の防止のため、適切な安全管理措置を講じます。" },
              { title: "5. お問い合わせ", content: "個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。" },
            ].map(({ title, content }) => (
              <div key={title} className="mb-4">
                <h3 className="font-serif-jp font-bold text-[#10243E] text-base mb-1">{title}</h3>
                <p className="text-sm text-[#10243E]/80 leading-relaxed">{content}</p>
              </div>
            ))}
            <p className="text-xs text-[#10243E]/50 mt-6">制定日：2026年11月</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
