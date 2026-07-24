// SectionHeading — ヨルノヨ参考スタイルのセクション見出し
interface Props {
  en: string;
  ja: string;
  align?: "left" | "center";
  sub?: string;
}

export default function SectionHeading({ en, ja, align = "left", sub }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`mb-10 ${isCenter ? "text-center" : ""}`}>
      <p
        className="font-display text-xs tracking-[0.3em] uppercase mb-2"
        style={{ color: "rgba(212,175,55,0.7)" }}
      >
        {en}
      </p>
      <h2 className="font-serif-jp font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-3">
        {ja}
      </h2>
      <div
        className={isCenter ? "section-divider-center" : "section-divider"}
      />
      {sub && (
        <p className="font-sans-jp text-white/55 text-sm leading-relaxed mt-2">
          {sub}
        </p>
      )}
    </div>
  );
}

