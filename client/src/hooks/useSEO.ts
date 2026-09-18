import { useEffect } from "react";

const SITE_URL = "https://www.hita-hikarinomachidukuri.com";
const DEFAULT_TITLE = "日田イルミナージュ2026｜大分・日田の冬を彩る光の祭典";
const DEFAULT_DESCRIPTION = "日田イルミナージュ2026は、大分県日田市・サッポロビール九州日田工場で開催する冬のイルミネーションイベントです。2026年10月31日から2027年1月31日まで、全93日間開催します。";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/ogp-hita-illuminage-2026.jpg`;

interface SEOOptions {
  title: string;
  description?: string;
}

function setNameMeta(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setPropertyMeta(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setCanonical(pathname: string) {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
}

/** Sets page-specific search and social metadata after SPA route changes. */
export function useSEO({ title, description }: SEOOptions) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const pathname = window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/$/, "");
    const canonicalUrl = `${SITE_URL}${pathname}`;

    document.title = resolvedTitle;
    setNameMeta("description", resolvedDescription);
    setNameMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setCanonical(pathname);

    setPropertyMeta("og:title", resolvedTitle);
    setPropertyMeta("og:description", resolvedDescription);
    setPropertyMeta("og:url", canonicalUrl);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:site_name", "日田イルミナージュ2026");
    setPropertyMeta("og:locale", "ja_JP");
    setPropertyMeta("og:image", DEFAULT_OG_IMAGE);
    setPropertyMeta("og:image:secure_url", DEFAULT_OG_IMAGE);
    setPropertyMeta("og:image:alt", "日田イルミナージュ2026 公式ビジュアル");

    setNameMeta("twitter:card", "summary_large_image");
    setNameMeta("twitter:title", resolvedTitle);
    setNameMeta("twitter:description", resolvedDescription);
    setNameMeta("twitter:image", DEFAULT_OG_IMAGE);
    setNameMeta("twitter:image:alt", "日田イルミナージュ2026 公式ビジュアル");
  }, [title, description]);
}
