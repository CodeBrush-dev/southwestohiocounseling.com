// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.southwestohiocounseling.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.southwestohiocounseling.com/","title_tag":"Counseling Southwest Ohio & EMDR Ohio | Counseling Center of Southwest Ohio","meta_description":"Compassionate counseling in Southwest Ohio offering EMDR, DBT, person-centered therapy, positive psychology and Christian counseling for anxiety, depression and trauma."},{"page_url":"https://www.southwestohiocounseling.com/copy-of-about-us-meet-therapist","title_tag":"Counseling Southwest Ohio Therapists | Counseling Center of Southwest Ohio","meta_description":"Meet our Southwest Ohio counseling team providing person-centered therapy, DBT, EMDR, positive psychology and Christian counseling for adults, teens, couples and families."},{"page_url":"https://www.southwestohiocounseling.com/services","title_tag":"EMDR Ohio & DBT Southwest Ohio | Counseling Center of Southwest Ohio","meta_description":"Therapy services in Southwest Ohio including EMDR, DBT, CBT, person-centered therapy, positive psychology and Christian counseling for anxiety, depression, trauma and families."},{"page_url":"https://www.southwestohiocounseling.com/contact-us","title_tag":"Therapy Cincinnati Contact | Counseling Center of Southwest Ohio","meta_description":"Contact our Cincinnati counseling center for anxiety therapy, trauma recovery, family counseling and Christian counseling. In-person therapy in Southwest Ohio. Call or email today."},{"page_url":"https://www.southwestohiocounseling.com/about-us","title_tag":"Counseling Southwest Ohio Approach | Counseling Center of Southwest Ohio","meta_description":"Learn about our holistic, person-centered counseling in Southwest Ohio. We offer DBT, EMDR, positive psychology and Christian counseling to support anxiety, trauma and relationship healing."}],"keywords":["Counseling Southwest Ohio","Therapy Cincinnati","EMDR Ohio","DBT Southwest Ohio","Christian Counseling Cincinnati","Positive Psychology Ohio","Anxiety Therapy Cincinnati","Trauma Recovery Ohio","Family Counseling Southwest Ohio","Person-Centered Therapy Ohio"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.southwestohiocounseling.com/#localbusiness",
  "name": "The Counseling Center of Southwest Ohio",
  "url": "https://www.southwestohiocounseling.com/",
  "description": "The Counseling Center of Southwest Ohio provides counseling and psychotherapy services for adults, adolescents, children, couples, and families in Cincinnati and surrounding areas. Services include CBT, DBT, EMDR, EFT, person-centered therapy, positive psychology, Christian counseling, and attachment-based therapy for concerns such as depression, anxiety, trauma, relationship issues, ADHD, OCD, and more.",
  "telephone": "+1-513-996-0157",
  "email": "scheduling@southwestohiocounseling.com",
  "image": [
    "https://static.wixstatic.com/media/ad75df_717fe9837ae64a66bcd9ac907100b884~mv2.png/v1/crop/x_123,y_51,w_728,h_167/fill/w_379,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/The_Counseling_Center_of_Southwest_Ohio_-_File-01-removebg-preview.png",
    "https://static.wixstatic.com/media/11062b_f8985ccb6dc94177aa99fcfad20a4934~mv2.jpg/v1/crop/x_351,y_0,w_4297,h_3333/fill/w_419,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychotherapy.jpg",
    "https://static.wixstatic.com/media/11062b_918f77d49c6e47d395addb2e5dcef03c~mv2.jpg/v1/crop/x_256,y_0,w_2048,h_2048/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Therapy%20Season.jpg",
    "https://static.wixstatic.com/media/11062b_544404cd9da74cf08f1dc058ce7884c5~mv2.jpeg/v1/crop/x_326,y_0,w_4954,h_3840/fill/w_469,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_544404cd9da74cf08f1dc058ce7884c5~mv2.jpeg",
    "https://static.wixstatic.com/media/11062b_5bbbdb2594a04feaa683abcb7244a1b5~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_264,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Child%20Psycholgist.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/8840f2_02deed8d86be46fe9f8946c3ba5e79e4%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/8840f2_02deed8d86be46fe9f8946c3ba5e79e4%7Emv2.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4050 Executive Park Dr, Suite 350",
    "addressLocality": "Cincinnati",
    "addressRegion": "OH",
    "postalCode": "45241",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Cincinnati"
    },
    {
      "@type": "City",
      "name": "West Chester"
    },
    {
      "@type": "City",
      "name": "Mason"
    },
    {
      "@type": "City",
      "name": "Loveland"
    },
    {
      "@type": "City",
      "name": "Sharonville"
    },
    {
      "@type": "City",
      "name": "Blue Ash"
    },
    {
      "@type": "City",
      "name": "Montgomery"
    },
    {
      "@type": "City",
      "name": "Liberty Township"
    },
    {
      "@type": "City",
      "name": "Kenwood"
    },
    {
      "@type": "City",
      "name": "Milford"
    },
    {
      "@type": "City",
      "name": "Springdale"
    }
  ],
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Counseling and Psychotherapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Adult Counseling",
          "description": "Individual counseling for adults to address concerns such as career stress, relationship issues, life transitions, depression, anxiety, trauma, and more."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Adolescent Counseling",
          "description": "Therapy for teenagers to address peer pressure, academic stress, self-esteem issues, anxiety, depression, and life transitions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Child Counseling",
          "description": "Counseling for children in a safe and supportive environment to help them express feelings and cope with difficult life situations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Couples Counseling",
          "description": "Couples therapy focusing on communication, connection, conflict resolution, and relationship strengthening, including Emotion Focused Therapy (EFT)."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Counseling",
          "description": "Family therapy aimed at fostering healthier and more harmonious family dynamics."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Behavioral Therapy (CBT)",
          "description": "CBT to help clients understand and change the relationship between thoughts, behaviors, and feelings to develop healthier patterns."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dialectical Behavioral Therapy (DBT)",
          "description": "DBT skills training to support emotional regulation, distress tolerance, and life balance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Eye Movement Desensitization and Reprocessing (EMDR)",
          "description": "EMDR therapy for PTSD and trauma recovery, helping process traumatic memories and move toward healing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emotion Focused Therapy (EFT)",
          "description": "Emotion Focused Therapy with a focus on helping couples reconnect, communicate more effectively, and strengthen their relationship."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Person-Centered Therapy",
          "description": "Person-centered counseling that honors each client’s unique experiences, needs, and goals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Positive Psychology Counseling",
          "description": "Strength-based counseling using positive psychology to build resilience, optimism, and a more fulfilling life."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Christian Counseling",
          "description": "Faith-based counseling for clients who wish to integrate Christian spirituality into their healing process."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Attachment-Based Therapy",
          "description": "Counseling informed by attachment theory to explore how early relationships impact current relational patterns."
        }
      }
    ]
  },
  "knowsAbout": [
    "depression counseling",
    "anxiety counseling",
    "trauma therapy",
    "PTSD treatment",
    "OCD counseling",
    "ADHD counseling",
    "relationship counseling",
    "marriage counseling",
    "family therapy",
    "child therapy",
    "teen therapy",
    "EMDR",
    "CBT",
    "DBT",
    "EFT",
    "person-centered therapy",
    "positive psychology",
    "Christian counseling",
    "attachment theory",
    "online counseling",
    "telehealth counseling",
    "in-person counseling"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-513-996-0157",
    "contactType": "customer service",
    "email": "scheduling@southwestohiocounseling.com"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
