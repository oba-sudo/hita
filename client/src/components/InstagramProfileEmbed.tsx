/**
 * InstagramProfileEmbed — Instagram公式プロフィール埋め込み
 * デザイン方針: Instagram公式表示を尊重しつつ、夜空の余白と光線でサイト世界観へ接続する。
 */
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds?: { process: () => void } };
  }
}

const PROFILE_URL = "https://www.instagram.com/hita_illuminage/";
const SCRIPT_ID = "instagram-embed-script";

export default function InstagramProfileEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const processEmbed = () => window.instgrm?.Embeds?.process();
    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.instgrm?.Embeds) processEmbed();
      else existingScript.addEventListener("load", processEmbed, { once: true });
      return () => existingScript.removeEventListener("load", processEmbed);
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbed;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="instagram-profile-shell mx-auto w-full max-w-[540px] overflow-hidden rounded-[28px] bg-white p-1 shadow-[0_28px_90px_rgba(244,63,142,.18)]">
      <blockquote
        className="instagram-media m-0 min-w-0 w-full bg-white"
        data-instgrm-permalink={`${PROFILE_URL}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{ margin: 0, minWidth: 0, width: "100%" }}
      >
        <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 px-6 text-center text-[#161722]">
          <div className="h-11 w-11 animate-pulse rounded-full bg-gradient-to-tr from-[#FF7A1A] via-[#F43F8E] to-[#7C3AED]" />
          <p className="font-sans-jp text-sm font-semibold">@hita_illuminage</p>
          <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="font-sans-jp text-xs text-[#C13584] underline underline-offset-4">
            Instagramで最新投稿を見る
          </a>
        </div>
      </blockquote>
    </div>
  );
}
