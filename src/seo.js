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
  "/about-us": {
    title: "About Us | Grandeur Advisors",
    description:
      "Meet the team at Grandeur Advisors LLP, an accounting firm founded in 2022 providing bookkeeping, financial reporting and accounting system support to businesses worldwide.",
  },
  "/contact-us": {
    title: "Contact Us | Grandeur Advisors",
    description:
      "Contact Grandeur Advisors LLP about outsourced bookkeeping, accounting and management reporting. Send us a message, email or call and we will get back to you.",
  },
};

export function pageMeta(path) {
  return PAGES[path] || PAGES["/"];
}
