// Page titles, descriptions and structured data. Used at build time
// (pre-rendered HTML for Google and social previews) and in the browser
// when moving between pages.
import { SERVICES, serviceBySlug } from "./content/services.js";
import { COUNTRIES, FIRM, STANDARDS } from "./content/site.js";
import { TEAM } from "./content/people.js";
import { HOME_FAQS } from "./pages/homeFaqs.js";

export const SITE_URL = "https://grandeuradvisory.com";
export const SITE_NAME = "Grandeur Advisors";

export const PAGES = {
  "/": {
    title: "Outsourced Bookkeeping & Accounting Services | Grandeur Advisors",
    description:
      "CPA-led outsourced bookkeeping, accounts payable and receivable, month-end close, management reporting and NetSuite services for businesses in the USA, UK and Europe.",
  },
  "/services/": {
    title: "Outsourced Accounting Services for US & UK Businesses | Grandeur Advisors",
    description:
      "Outsourced accounting services: bookkeeping, AP and AR management, month-end close, management reporting, fractional CFO, audit support and NetSuite implementation and migration.",
  },
  ...Object.fromEntries(
    SERVICES.map((s) => [`/services/${s.slug}/`, { title: s.title, description: s.description }])
  ),
  "/about-us/": {
    title: "About Us | CPA-Led Accounting Firm | Grandeur Advisors",
    description:
      "Grandeur Advisors LLP is a CPA-led outsourced accounting firm founded in 2022, with a team of 20 serving more than 30 clients across the USA, UK, Europe and Australia.",
  },
  "/contact-us/": {
    title: "Contact Us | Book a Free Consultation | Grandeur Advisors",
    description:
      "Book a free 30-minute consultation with Grandeur Advisors, or send us a message about outsourced bookkeeping, AP and AR, month-end close or NetSuite.",
  },
};

// Pages live at addresses ending in "/" (e.g. /about-us/), which is how
// S3 serves a folder's index.html.
export function normalizePath(path) {
  return path.endsWith("/") ? path : path + "/";
}

export function pageMeta(path) {
  return PAGES[normalizePath(path)] || PAGES["/"];
}

// ---------------------------------------------------------------------------
// Structured data (schema.org JSON-LD) for Google and AI search.
// Only facts that appear on the site or were confirmed by the owner.
// ---------------------------------------------------------------------------
const ORG_ID = `${SITE_URL}/#organization`;
const areaServed = COUNTRIES.map((name) => ({ "@type": "Country", name }));

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: FIRM.legalName,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/Grandeur-Advisors-Logo.png`,
  image: `${SITE_URL}/images/og-card.png`,
  description: PAGES["/"].description,
  foundingDate: FIRM.founded,
  telephone: FIRM.phone,
  numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
  areaServed,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: FIRM.phone,
    url: `${SITE_URL}/contact-us/`,
    availableLanguage: "English",
  },
  sameAs: [FIRM.linkedin, FIRM.instagram],
  knowsAbout: [
    ...SERVICES.map((s) => s.name),
    ...STANDARDS,
    "Oracle NetSuite",
    "QuickBooks Online",
    "Xero",
  ],
};

const crumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
});

const faqPage = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const team = TEAM.map((m) => ({
  "@type": "Person",
  name: m.name,
  jobTitle: m.role,
  image: `${SITE_URL}${m.photo}`,
  worksFor: { "@id": ORG_ID },
  ...(m.credential === "CPA" && {
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional certification",
      name: "Certified Public Accountant (CPA)",
    },
  }),
}));

export function structuredData(path) {
  const page = normalizePath(path);
  const graph = [organization];
  if (page === "/") {
    graph.push(
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME, publisher: { "@id": ORG_ID } },
      faqPage(HOME_FAQS)
    );
  } else if (page === "/services/") {
    graph.push(
      crumbs([["Home", "/"], ["Services", "/services/"]]),
      {
        "@type": "ItemList",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/services/${s.slug}/`,
          name: s.name,
        })),
      }
    );
  } else if (page.startsWith("/services/")) {
    const s = serviceBySlug[page.split("/")[2]];
    if (s) {
      graph.push(
        {
          "@type": "Service",
          name: s.name,
          serviceType: s.name,
          description: s.description,
          url: `${SITE_URL}${page}`,
          provider: { "@id": ORG_ID },
          areaServed,
        },
        crumbs([["Home", "/"], ["Services", "/services/"], [s.name, page]]),
        faqPage(s.faqs)
      );
    }
  } else if (page === "/about-us/") {
    graph.push(
      { "@type": "AboutPage", url: `${SITE_URL}/about-us/`, name: PAGES[page].title, about: { "@id": ORG_ID } },
      crumbs([["Home", "/"], ["About us", "/about-us/"]]),
      ...team
    );
  } else if (page === "/contact-us/") {
    graph.push(
      { "@type": "ContactPage", url: `${SITE_URL}/contact-us/`, name: PAGES[page].title, about: { "@id": ORG_ID } },
      crumbs([["Home", "/"], ["Contact us", "/contact-us/"]])
    );
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
