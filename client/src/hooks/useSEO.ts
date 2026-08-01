import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description?: string;
}

export function useSEO({ title, description }: SEOOptions) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
    return () => {
      // ページ離脱時にデフォルトに戻す
      document.title = "日田イルミナージュ2026 | 大分・日田の冬を彩る光の祭典。サッポロビール工場で93日間開催！";
    };
  }, [title, description]);
}
