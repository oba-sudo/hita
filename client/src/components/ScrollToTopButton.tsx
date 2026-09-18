import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const VISIBILITY_THRESHOLD = 500;

/** Fixed, shared return-to-top control for long event information pages. */
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > VISIBILITY_THRESHOLD);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページの先頭へ戻る"
      className={`scroll-top-button fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-[#07091d]/95 text-white shadow-[0_10px_28px_rgba(0,0,0,.38)] backdrop-blur-xl transition-[opacity,transform,background-color] duration-200 ease-out hover:bg-[#d72677] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5C95D] lg:bottom-6 lg:right-6 ${isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowUp size={20} strokeWidth={1.8} aria-hidden="true" />
      <span className="sr-only">トップへ戻る</span>
    </button>
  );
}
