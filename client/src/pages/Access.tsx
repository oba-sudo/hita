import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Train, Car, MapPin } from "lucide-react";

export default function Access() {
  return (
    <PageLayout>
      <PageHero en="ACCESS" ja="アクセス" sub="会場へのアクセス方法をご案内します。" bgImage="/manus-storage/gallery3_a3ce42f5.jpg" />
      <div className="pb-24 bg-[#050a1a]">
        <div className="max-w-[1100px] mx-auto px-4 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: <Train size={20} className="text-[#C8A35A]" />, title: "電車でお越しの方", content: ["JR久大本線「日田駅」下車", "駅から会場まで徒歩約20分"] },
                { icon: <Car size={20} className="text-[#C8A35A]" />, title: "お車でお越しの方", content: ["大分自動車道「日田IC」から約10分", "サッポロビール九州日田工場敷地内に駐車場あり", "混雑が予想されますので公共交通機関のご利用をおすすめします"] },
                { icon: <MapPin size={20} className="text-[#C8A35A]" />, title: "会場住所", content: ["サッポロビール九州日田工場", "〒877-0054 大分県日田市高瀬６９７９"] },
              ].map(({ icon, title, content }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C8A35A]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    {icon}
                    <h3 className="font-serif-jp font-bold text-white text-base">{title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {content.map((c, i) => (
                      <li key={i} className="font-sans-jp text-sm text-white/60 flex gap-2">
                        <span className="text-[#C8A35A] mt-0.5">•</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[500px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d130.9440418!3d33.2979371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35416a6590a96e8d%3A0x8abbe19477e78166!2z44K144OD44Od44Ot44OT44O844Or5Lmd5bee5pel55Sw5L-d5Zy6!5e0!3m2!1sja!2sjp!4v1700000000001!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="サッポロビール九州日田工場 会場地図"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
