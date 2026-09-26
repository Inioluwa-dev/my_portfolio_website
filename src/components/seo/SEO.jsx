import { useEffect } from "react";

const SEO = ({
  title = "Inioluwa Olayoriju | Systems & Product Engineer",
  description = "Systems & Product Engineer specializing in mathematical optimization, distributed backend systems, and clean architecture.",
  image = "/images/mr_heritage.png",
  url = "https://inioluwa-dev.vercel.app",
  structuredData = null,
  canonical = null,
}) => {
  useEffect(() => {
    const fullTitle = title.includes("Mr Heritage") || title.includes("Inioluwa")
      ? title
      : `${title} | Inioluwa Olayoriju`;
    document.title = fullTitle;

    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("name", "twitter:title", fullTitle);

    const fullUrl = canonical || url;
    if (fullUrl) {
      setMetaTag("property", "og:url", fullUrl);
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", fullUrl);
    }

    const baseUrl = "https://inioluwa-dev.vercel.app";
    const fullImage = !image 
      ? `${baseUrl}/images/mr_heritage.png` 
      : image.startsWith("http") 
        ? image 
        : `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;
    if (fullImage) {
      setMetaTag("property", "og:image", fullImage);
      setMetaTag("name", "twitter:image", fullImage);
    }

    // Dynamic JSON-LD Structured Data
    if (structuredData) {
      let script = document.getElementById("dynamic-seo-ld-json");
      if (!script) {
        script = document.createElement("script");
        script.id = "dynamic-seo-ld-json";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, image, url, structuredData, canonical]);

  return null;
};

export default SEO;
