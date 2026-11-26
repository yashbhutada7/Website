// Facts about the firm, confirmed by the owner. Change them here only.
export const FIRM = {
  name: "Grandeur Advisors",
  legalName: "Grandeur Advisors LLP",
  founded: "2022",
  phone: "+91-7218362866",
  email: "Info@grandeuradvisory.com",
  bookingUrl: "https://calendly.com/grandeuradvisory-info/30min",
  bookingLabel: "Book a free 30-minute consultation",
  linkedin: "https://www.linkedin.com/company/grandeur-advisors-llp",
  instagram: "https://www.instagram.com/grandeuradvisorsllp/",
};

// Owner's questionnaire (Q15), 26 Nov 2026.
export const STATS = [
  { value: "30+", label: "Clients served" },
  { value: "200k+", label: "Billable hours" },
  { value: "20", label: "Team members" },
  { value: "7", label: "Countries" },
];

export const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Portugal",
  "Australia",
  "Thailand",
];

export const INDUSTRIES = [
  "Manufacturing",
  "Distribution",
  "E-commerce",
  "Advertising",
  "Construction",
  "SaaS",
  "IT services",
  "Professional services",
  "Real estate",
];

export const STANDARDS = ["US GAAP", "IFRS"];

export const TIME_ZONES = [
  { zone: "US Eastern", note: "Our main working hours" },
  { zone: "UK", note: "Daily overlap" },
  { zone: "India (IST)", note: "Our home base" },
  { zone: "Australia (AEST)", note: "Afternoons" },
];

export const SECURITY = [
  {
    title: "NDAs as standard",
    text: "We sign a non-disclosure agreement before we see your data.",
  },
  {
    title: "Two-factor authentication",
    text: "Every system we log in to is protected with 2FA.",
  },
  {
    title: "Need-to-know access",
    text: "Only the people assigned to your account, and introduced to you, can access your data. Not the whole firm.",
  },
];

// Logos already on the site (public/images/tools) plus tools named by the owner.
export const SOFTWARE = [
  { name: "Oracle NetSuite", logo: "/images/tools/Oracle_NetSuite.png" },
  { name: "QuickBooks Online", logo: "/images/tools/QuickBook.svg" },
  { name: "Xero", logo: "/images/tools/Xero.svg" },
  { name: "Zoho", logo: "/images/tools/zoho.svg" },
  { name: "Tipalti", logo: "/images/tools/tipalti.svg" },
  { name: "Bill.com", logo: "/images/tools/bill.svg" },
  { name: "MineralTree", logo: "/images/tools/MineralTree.svg" },
  { name: "Lightyear", logo: "/images/tools/Lightyear.png" },
  { name: "Odoo", logo: "/images/tools/odoo.svg" },
  { name: "Vend", logo: "/images/tools/Vend.svg" },
];
export const SOFTWARE_TEXT_ONLY = ["Dext", "A2X"];
