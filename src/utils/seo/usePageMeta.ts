import { useEffect } from "react";

const SITE_URL = "https://aske21.github.io";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

function setMetaContent(selector: string, content: string) {
  const tag = document.querySelector(selector);
  if (tag) tag.setAttribute("content", content);
}

export function usePageMeta({ title, description, path }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonicalUrl = `${SITE_URL}${path}`;
    setMetaContent('meta[property="og:url"]', canonicalUrl);

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute("href", canonicalUrl);
  }, [title, description, path]);
}
