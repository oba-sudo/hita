import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { FAQ_ITEMS } from "@/data/siteData";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageLayout>
      <PageHero en="FAQ" ja="よくある質問" sub="お客様からよくいただくご質問をまとめました。" bgImage="/images/gallery3.jpg" />
      <div className="pb-20 bg-[#050a1a]">
        <div className="max-w-3xl mx-auto px-4 -mt-4">
          <div className="mt-6 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-3 px-6 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-sans-jp font-bold text-white text-sm leading-relaxed flex-1">
                    <span className="text-[#C8A35A] font-display mr-2">Q.</span>{item.q}
                  </span>
                  <ChevronDown size={18} className={`text-[#C8A35A] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 pt-0">
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-sans-jp text-sm text-white/70 leading-relaxed">
                        <span className="text-[#245A86] font-bold font-display mr-2">A.</span>{item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#10243E] rounded-2xl p-6 text-center">
            <p className="font-sans-jp text-white/80 text-sm mb-3">上記以外のご質問はお問い合わせください</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#C8A35A] hover:bg-[#b8924a] text-white font-bold px-6 py-3 rounded-xl font-sans-jp text-sm transition-all active:scale-95">
              お問い合わせフォームへ
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
