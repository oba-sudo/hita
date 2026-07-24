interface SectionTitleProps { en?: string; ja: string; sub?: string; light?: boolean; center?: boolean; }

export default function SectionTitle({ en, ja, sub, light = false, center = false }: SectionTitleProps) {
  const textColor = light ? "text-white" : "text-[#10243E]";
  const goldColor = "text-[#C8A35A]";
  const subColor = light ? "text-white/70" : "text-[#1E2933]/60";
  const alignClass = center ? "text-center items-center" : "";
  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {en && <span className={`font-display text-sm tracking-widest uppercase ${goldColor}`}>{en}</span>}
      <h2 className={`font-serif-jp text-3xl md:text-4xl font-bold ${textColor} leading-tight`}>{ja}</h2>
      {sub && <p className={`font-sans-jp text-sm leading-relaxed mt-1 ${subColor} max-w-xl`}>{sub}</p>}
      <div className={`flex gap-1 mt-1 ${center ? "justify-center" : ""}`}>
        <div className="h-0.5 w-12 bg-[#C8A35A]" />
        <div className="h-0.5 w-3 bg-[#C8A35A]/40" />
      </div>
    </div>
  );
}
