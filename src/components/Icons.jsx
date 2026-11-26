import React from "react";

// Simple line icons (24px grid, currentColor) so the site needs no icon library.
const P = {
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  shield: <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8.5 10.5V7.5a3.5 3.5 0 017 0v3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l8-8M16 7l2.5 2.5M14 9l2 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.5" />
      <path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5M16 5.5a3.2 3.2 0 010 6.2M18 14.8c1.7.7 2.8 2.4 3 5.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5s1.2-6.1 3.6-8.5z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
    </>
  ),
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  // industries
  factory: <path d="M3 21V10l6 4V10l6 4V6l6 3v12zM7 17h2M12 17h2M17 17h2" />,
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11zM13.5 10h4l3 3.5v3h-7" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.5l2.2 11h10.6l2-7.5H6.4" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </>
  ),
  megaphone: <path d="M4 10v4h3l8 4V6l-8 4zM18 9.5a3.5 3.5 0 010 5M7 14l1.2 5h2.3l-1-5" />,
  hardhat: <path d="M6 21V3.5M3 21h8M6 4.5l14 3M6 8h14M17.5 8v4.5M16 12.5h3V16h-3zM9 3.5L6 4.5" />,
  cloud: <path d="M7 18.5h10.5a4 4 0 00.6-7.95A6 6 0 006.6 9.1 4.7 4.7 0 007 18.5z" />,
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8.5 20h7M12 16.5V20M8 11l2.5-2.5L13 11l3-3" />
    </>
  ),
  building: <path d="M4 21V5.5L12 3v18M12 8.5l8 2.5V21M2.5 21h19M7.5 8.5v.01M7.5 12v.01M7.5 15.5v.01M15.5 13v.01M15.5 16.5v.01" />,
  // services
  payable: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4M15 15h2" />
    </>
  ),
  receivable: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 12h7M9 16h5" />
    </>
  ),
  books: (
    <>
      <path d="M4 5.5A1.5 1.5 0 015.5 4H11v16H5.5A1.5 1.5 0 014 18.5zM20 5.5A1.5 1.5 0 0018.5 4H13v16h5.5a1.5 1.5 0 001.5-1.5z" />
    </>
  ),
  closeMonth: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  cfo: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M9 7.5V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5v2M3 12.5h18" />
    </>
  ),
  migrate: <path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5" />,
  audit: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21M8 10.5l2 2 3.5-3.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6.5L20.5 7" />
    </>
  ),
  phone: <path d="M6.6 3.5h2.8l1.4 4.2-2.1 1.4a11.5 11.5 0 006.2 6.2l1.4-2.1 4.2 1.4v2.8a2 2 0 01-2.2 2A17 17 0 014.6 5.7a2 2 0 012-2.2z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.2c0-1.6 1-2.7 2.4-2.7s2.1 1 2.1 2.7V17" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.01" />
    </>
  ),
};

export default function Icon({ name, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...rest}>
      {P[name]}
    </svg>
  );
}

export const SERVICE_ICONS = {
  "accounts-payable": "payable",
  "accounts-receivable": "receivable",
  "outsourced-bookkeeping": "books",
  "month-end-close": "closeMonth",
  "management-reporting": "chart",
  "fractional-cfo": "cfo",
  "erp-implementation-migration": "migrate",
  "audit-support": "audit",
};
