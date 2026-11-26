// Page titles and descriptions. Used at build time (pre-rendered HTML for
// Google and social previews) and in the browser when moving between pages.
export const SITE_URL = "https://grandeuradvisory.com";
export const SITE_NAME = "Grandeur Advisors";

export const PAGES = {
  "/": {
    title: "Outsourced Bookkeeping & Accounting Services | Grandeur Advisors",
    description:
      "Grandeur Advisors LLP provides outsourced bookkeeping, month-end close, AP/AR, payroll and management reporting for businesses in the USA, UK, Germany, Australia, Thailand and Singapore, using NetSuite, QuickBooks, Xero and Zoho.",
  },
  "/about-us/": {
    title: "About Us | Grandeur Advisors",
    description:
      "Meet the team at Grandeur Advisors LLP, an accounting firm founded in 2022 providing bookkeeping, financial reporting and accounting system support to businesses worldwide.",
  },
  "/contact-us/": {
    title: "Contact Us | Grandeur Advisors",
    description:
      "Contact Grandeur Advisors LLP about outsourced bookkeeping, accounting and management reporting. Send us a message, email or call and we will get back to you.",
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

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Germany",
  "Australia",
  "Thailand",
  "Singapore",
];

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: "Grandeur Advisors LLP",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/Grandeur-Advisors-Logo.png`,
  image: `${SITE_URL}/images/og-card.png`,
  description: PAGES["/"].description,
  foundingDate: "2022",
  telephone: "+91-7218362866",
  areaServed: COUNTRIES.map((name) => ({ "@type": "Country", name })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-7218362866",
    url: `${SITE_URL}/contact-us/`,
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/grandeur-advisors-llp",
    "https://www.instagram.com/grandeuradvisorsllp/",
  ],
  knowsAbout: [
    "Bookkeeping",
    "Accounting outsourcing",
    "Management reporting",
    "Month-end close",
    "Accounts payable management",
    "Accounts receivable management",
    "Balance sheet reconciliation",
    "Inventory management",
    "Payroll processing",
    "Accounting system migration and implementation",
    "Auditing",
    "Oracle NetSuite",
    "QuickBooks",
    "Xero",
    "Zoho",
  ],
};

const team = [
  { name: "Yash Bhutada", jobTitle: "CEO", image: "Yash.jpg", cpa: true },
  { name: "Sumit Bhutada", jobTitle: "Fractional CFO", image: "Sumit.jpg" },
  { name: "Chetan Bhutada", jobTitle: "Fractional CFO", image: "Chetan.jpg" },
].map(({ name, jobTitle, image, cpa }) => ({
  "@type": "Person",
  name,
  jobTitle,
  image: `${SITE_URL}/images/${image}`,
  worksFor: { "@id": ORG_ID },
  ...(cpa && {
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
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { "@id": ORG_ID },
    });
  } else if (page === "/about-us/") {
    graph.push(
      {
        "@type": "AboutPage",
        url: `${SITE_URL}/about-us/`,
        name: PAGES[page].title,
        about: { "@id": ORG_ID },
      },
      ...team
    );
  } else if (page === "/contact-us/") {
    graph.push({
      "@type": "ContactPage",
      url: `${SITE_URL}/contact-us/`,
      name: PAGES[page].title,
      about: { "@id": ORG_ID },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
