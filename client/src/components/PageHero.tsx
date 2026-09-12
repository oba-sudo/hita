/**
 * PageHero — イベント本番仕様の下層ページヒーロー
 * デザイン方針: Immersive Celestial Festival。写真・星雲・光線でトップページの没入感を継承する。
 */
interface PageHeroProps {
  en: string;
  ja: string;
  sub?: string;
  bgImage?: string;
}

export default function PageHero({ en, ja, sub, bgImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[430px] overflow-hidden bg-[#030513] pt-28 md:min-h-[520px] md:pt-36">
      {bgImage && (
        <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,19,.96),rgba(3,5,19,.62)_55%,rgba(3,5,19,.38)),linear-gradient(180deg,rgba(3,5,19,.3),rgba(3,5,19,.98))]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#55D9FF]/10 blur-[100px]" />
      <div className="absolute right-[8%] top-20 h-72 w-72 rounded-full bg-[#F43F8E]/12 blur-[110px]" />
      <div className="light-stream left-[-8%] top-[46%] w-[72%] -rotate-[7deg]" />
      <div className="portal-rings opacity-40" />
      <div className="relative z-10 mx-auto flex min-h-[300px] max-w-[1320px] flex-col justify-end px-5 pb-16 md:min-h-[370px] md:px-8 md:pb-20">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-[#F43F8E] to-[#F5C95D] shadow-[0_0_12px_rgba(244,63,142,.4)]" />
          <span className="font-display text-[10px] tracking-[.34em] text-[#F5C95D]">{en}</span>
        </div>
        <h1 className="font-serif-jp text-[clamp(2.4rem,7vw,5.6rem)] font-semibold leading-[1.08] tracking-[-.04em] text-white">{ja}</h1>
        {sub && <p className="mt-5 max-w-2xl font-sans-jp text-sm leading-8 text-white/62 md:text-base">{sub}</p>}
      </div>
    </section>
  );
}
