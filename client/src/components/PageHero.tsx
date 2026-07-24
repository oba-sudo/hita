/**
 * PageHero — 各サブページの上部に表示するナイトスケープ帯
 * Deep Navy × Antique Gold のブランドシグネチャーを全ページに統一
 */
interface PageHeroProps {
  en: string;
  ja: string;
  sub?: string;
  bgImage?: string;
}

export default function PageHero({ en, ja, sub, bgImage }: PageHeroProps) {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-[#10243E]">
      {bgImage && (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10243E]/80 to-[#10243E]" />
        </>
      )}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <span className="font-display text-[#C8A35A] text-xs tracking-widest uppercase">{en}</span>
        <h1 className="font-serif-jp font-black text-white text-3xl md:text-4xl mt-1 mb-2">{ja}</h1>
        {sub && <p className="font-sans-jp text-white/70 text-sm leading-relaxed max-w-xl">{sub}</p>}
        <div className="flex gap-1 mt-3">
          <div className="h-0.5 w-12 bg-[#C8A35A]" />
          <div className="h-0.5 w-3 bg-[#C8A35A]/40" />
        </div>
      </div>
    </div>
  );
}
