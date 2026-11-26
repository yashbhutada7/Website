import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta, SITE_URL } from "@/seo";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Keeps the title, description, canonical link and social tags in sync
// when visitors move between pages without a full reload.
export function useSEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const { title, description } = pageMeta(pathname);
    const url = SITE_URL + pathname;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [pathname]);
}
