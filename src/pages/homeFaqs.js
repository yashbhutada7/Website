import { COUNTRIES, STANDARDS } from "../content/site.js";

export const HOME_FAQS = [
  {
    q: "What does Grandeur Advisors do?",
    a: "We are a CPA-led outsourced accounting firm. Our team handles bookkeeping, accounts payable and receivable, month-end close, management reporting, fractional CFO work, audit support, and NetSuite implementation and data migration.",
  },
  {
    q: "Which countries do you work with?",
    a: `We currently work with clients in ${COUNTRIES.slice(0, -1).join(", ")} and ${COUNTRIES[COUNTRIES.length - 1]}. We work with businesses anywhere, in your time zone and your software.`,
  },
  {
    q: "Which accounting software do you use?",
    a: "We work in your system, most often Oracle NetSuite, QuickBooks Online or Xero, along with Zoho, Odoo, Tipalti, Bill.com, MineralTree, Lightyear, Dext and A2X.",
  },
  {
    q: "What hours do you work?",
    a: "Our main working hours follow US Eastern time. We also work comfortably with clients in the UK, India and Australia (AEST afternoons).",
  },
  {
    q: "How do you keep our financial data secure?",
    a: "We sign an NDA before we see your data, use two-factor authentication on every system, and limit access to the people assigned to your account and introduced to you.",
  },
  {
    q: "Which accounting standards do you work with?",
    a: `${STANDARDS.join(" and ")}.`,
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute consultation. We'll learn how your finance function works today and suggest where we can help.",
  },
];
