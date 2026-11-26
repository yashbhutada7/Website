// Service pages. Each targets the search terms buyers use in the USA, UK, Canada, Europe and Australia.
// Scope is described from the owner's questionnaire; no outcomes or prices are claimed.

export const SERVICES = [
  {
    slug: "accounts-payable",
    name: "Accounts Payable Management",
    short: "Vendor bills, approvals and payment runs handled accurately and on schedule.",
    featured: true,
    title: "Outsourced Accounts Payable Services | AP Management | Grandeur Advisors",
    description:
      "Outsourced accounts payable (AP) services for businesses in the USA, UK, Canada, Europe, Australia and beyond: bill processing, approvals, vendor payments and AP reconciliations in NetSuite, QuickBooks, Xero, Bill.com and Tipalti.",
    h1: "Outsourced accounts payable services",
    intro:
      "We run your accounts payable process from bill capture to payment run, so vendors are paid correctly and on time and your liabilities are always up to date.",
    includes: [
      "Vendor bill capture and coding",
      "Approval workflows in your AP tool",
      "Weekly or scheduled payment runs",
      "Vendor onboarding and master data",
      "Vendor statement reconciliations",
      "AP aging review and accruals",
      "Matching bills to purchase orders and receipts",
      "Month-end AP close and reporting",
    ],
    whoFor:
      "Growing companies whose finance team is spending too much time chasing invoices and approvals, and businesses moving AP onto tools like Bill.com, Tipalti or NetSuite.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero", "Bill.com", "Tipalti", "MineralTree", "Lightyear", "Dext"],
    faqs: [
      {
        q: "Which accounts payable tools do you work with?",
        a: "We work hands-on with Bill.com, Tipalti, MineralTree, Lightyear and Dext, and with AP directly in Oracle NetSuite, QuickBooks Online and Xero.",
      },
      {
        q: "Do you release payments ourselves or do we?",
        a: "We prepare and schedule payment runs in your system. Approval and release stay with the people you choose, so you keep control of cash.",
      },
      {
        q: "Can you clean up an AP backlog?",
        a: "Yes. We can catch up unprocessed bills and reconcile vendor balances, then move you onto a regular weekly cycle.",
      },
    ],
    related: ["accounts-receivable", "month-end-close", "outsourced-bookkeeping"],
  },
  {
    slug: "accounts-receivable",
    name: "Accounts Receivable Management",
    short: "Invoicing, cash application and collections follow-up that keep cash coming in.",
    featured: true,
    title: "Outsourced Accounts Receivable Services | AR Management | Grandeur Advisors",
    description:
      "Outsourced accounts receivable (AR) services: customer invoicing, cash application, collections follow-up and AR aging reports for businesses in the USA, UK, Canada, Europe, Australia and beyond, in NetSuite, QuickBooks and Xero.",
    h1: "Outsourced accounts receivable services",
    intro:
      "We take care of invoicing, cash application and collections follow-up, so your customers are billed correctly, payments are matched, and you always know who owes you what.",
    includes: [
      "Customer invoicing and credit notes",
      "Cash application and payment matching",
      "Collections reminders and follow-up",
      "AR aging reports",
      "Customer statement reconciliations",
      "Marketplace and payment gateway settlements",
      "Bad debt and allowance review",
      "Month-end AR close and reporting",
    ],
    whoFor:
      "B2B companies with growing invoice volumes, and e-commerce brands that need marketplace and payment gateway payouts matched to their books.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero", "A2X"],
    faqs: [
      {
        q: "Can you handle multi-currency receivables?",
        a: "Yes. We work with multi-currency AR in NetSuite and other systems, including revaluation at month end.",
      },
      {
        q: "Do you work with e-commerce sales channels?",
        a: "Yes. We reconcile marketplace and payment gateway settlements, using tools such as A2X where they fit.",
      },
      {
        q: "Will you contact our customers directly?",
        a: "Only if you want us to. Many clients prefer us to prepare reminders and aging reports while they keep customer contact.",
      },
    ],
    related: ["accounts-payable", "month-end-close", "management-reporting"],
  },
  {
    slug: "outsourced-bookkeeping",
    name: "Outsourced Bookkeeping",
    short: "Accurate, up-to-date books every week, kept by a CPA-led team.",
    featured: true,
    title: "Outsourced Bookkeeping Services for Growing Businesses | Grandeur Advisors",
    description:
      "Outsourced and online bookkeeping services for businesses in the USA, UK, Canada, Europe, Australia and beyond: daily transaction coding, bank reconciliations and weekly reporting in NetSuite, QuickBooks Online and Xero, by a CPA-led team.",
    h1: "Outsourced bookkeeping services",
    intro:
      "A CPA-led team keeps your books accurate and current, from daily transaction coding to bank reconciliations and weekly reporting, in the accounting system you already use.",
    includes: [
      "Daily transaction coding",
      "Bank and credit card reconciliations",
      "Weekly reporting",
      "Receipt and document capture",
      "Payroll journal entries",
      "Fixed asset register",
      "Prepaid and accrual schedules",
      "Clean-up and catch-up bookkeeping",
    ],
    whoFor:
      "Founders and finance leads who want reliable books without hiring in-house, and companies that have outgrown a part-time bookkeeper.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero", "Zoho", "Dext", "A2X"],
    faqs: [
      {
        q: "Which accounting software do you use?",
        a: "We work in your system. Most often that is Oracle NetSuite, QuickBooks Online or Xero, and we also use Zoho, Odoo, Dext and A2X.",
      },
      {
        q: "Can you catch up books that are behind?",
        a: "Yes. We regularly bring books up to date, reconcile every account, and then keep them current going forward.",
      },
      {
        q: "Which accounting standards do you follow?",
        a: "We keep books in line with US GAAP or IFRS, depending on how your business reports.",
      },
    ],
    related: ["month-end-close", "management-reporting", "accounts-payable"],
  },
  {
    slug: "month-end-close",
    name: "Month-End Close & Reconciliations",
    short: "A dependable close every month, with every balance sheet account reconciled.",
    featured: false,
    title: "Month-End Close Services & Account Reconciliations | Grandeur Advisors",
    description:
      "Outsourced month-end close and account reconciliation services: bank reconciliations, accruals, balance sheet reconciliations and close checklists in NetSuite, QuickBooks and Xero.",
    h1: "Month-end close and reconciliation services",
    intro:
      "We run a structured month-end close: every bank and balance sheet account reconciled, accruals and adjustments booked, and the books locked with a clear close checklist.",
    includes: [
      "Bank and credit card reconciliations",
      "Balance sheet account reconciliations",
      "Accruals, prepaids and deferrals",
      "Intercompany reconciliations",
      "Multi-currency revaluation",
      "Fixed asset and depreciation entries",
      "Close checklist and review",
      "Period lock and close sign-off",
    ],
    whoFor:
      "Companies whose close keeps slipping, multi-entity groups that need intercompany balances to agree, and teams preparing for an audit or investor reporting.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero"],
    faqs: [
      {
        q: "Can you run the month-end close in NetSuite?",
        a: "Yes. We close the books in NetSuite, including multi-subsidiary and multi-currency setups.",
      },
      {
        q: "Do you reconcile every balance sheet account?",
        a: "Yes. Each month we reconcile bank, card and balance sheet accounts and support them with schedules your reviewers and auditors can follow.",
      },
    ],
    related: ["outsourced-bookkeeping", "management-reporting", "audit-support"],
  },
  {
    slug: "management-reporting",
    name: "Management Reporting & Financial Statements",
    short: "Monthly financial statements and management accounts you can make decisions with.",
    featured: false,
    title: "Management Reporting & Management Accounts Services | Grandeur Advisors",
    description:
      "Monthly financial statements, management accounts and custom KPI reports for businesses in the USA, UK, Canada, Europe, Australia and beyond, including NetSuite saved searches and custom reports.",
    h1: "Management reporting and financial statements",
    intro:
      "We turn closed books into monthly financial statements and management accounts, with the custom reports and KPIs your leadership team actually uses.",
    includes: [
      "Monthly profit and loss, balance sheet and cash flow",
      "Management accounts packs",
      "Budget vs actual reporting",
      "KPI and department reports",
      "Weekly reporting",
      "NetSuite saved searches",
      "Custom reports and dashboards",
      "Investor and lender reporting",
    ],
    whoFor:
      "Owners, boards and investors who need clear monthly numbers, and finance teams that want reports built once and refreshed every month.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero"],
    faqs: [
      {
        q: "Can you build custom reports in NetSuite?",
        a: "Yes. We create saved searches and custom reports in NetSuite so the numbers you need are available every month.",
      },
      {
        q: "Do you prepare financial statements under US GAAP or IFRS?",
        a: "Both. We prepare statements under the framework your business reports in.",
      },
    ],
    related: ["month-end-close", "fractional-cfo", "outsourced-bookkeeping"],
  },
  {
    slug: "fractional-cfo",
    name: "Fractional CFO Services",
    short: "Senior finance leadership when you need it, without a full-time hire.",
    featured: false,
    title: "Fractional CFO Services | Part-Time CFO & Finance Director | Grandeur Advisors",
    description:
      "Fractional CFO and part-time finance director services for growing businesses worldwide: financial leadership, reporting oversight, cash management and finance process improvement.",
    h1: "Fractional CFO services",
    intro:
      "Our fractional CFOs give you senior finance leadership on a part-time basis: oversight of your numbers, better finance processes, and a partner for the decisions that matter.",
    includes: [
      "Finance leadership and oversight",
      "Review of monthly results",
      "Cash flow management",
      "Budgeting and forecasting support",
      "Finance process and controls review",
      "Accounting system selection advice",
      "Board and investor reporting",
      "Support through audits",
    ],
    whoFor:
      "Founder-led and growing companies that need CFO-level thinking but not a full-time CFO. In the UK this role is often called a part-time or fractional finance director.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero"],
    faqs: [
      {
        q: "What is a fractional CFO?",
        a: "A senior finance leader who works with your business part-time. You get CFO experience for the hours you need, instead of a full-time salary.",
      },
      {
        q: "Who are your fractional CFOs?",
        a: "Sumit Bhutada and Chetan Bhutada lead our fractional CFO work. You can read about them on our About page.",
      },
    ],
    related: ["management-reporting", "month-end-close", "erp-implementation-migration"],
  },
  {
    slug: "erp-implementation-migration",
    name: "ERP Implementation & Data Migration",
    short: "NetSuite implementations and moves between accounting systems, done carefully.",
    featured: true,
    title: "NetSuite Implementation & Accounting System Migration Services | Grandeur Advisors",
    description:
      "NetSuite implementation support and accounting data migration: AP, AR and fixed asset setup, multi-subsidiary and multi-currency configuration, and migration between accounting systems.",
    h1: "NetSuite implementation and accounting data migration",
    intro:
      "We help you move to NetSuite or between accounting systems without losing data or control: clean migration, finance modules set up properly, and reports ready from day one.",
    includes: [
      "NetSuite implementation support",
      "Data migration between accounting systems",
      "Chart of accounts design and mapping",
      "AP, AR and fixed asset module setup",
      "Multi-subsidiary and multi-currency setup",
      "Opening balance and history migration",
      "Saved searches and custom reports",
      "Post go-live month-end close",
    ],
    whoFor:
      "Companies outgrowing QuickBooks, Xero or spreadsheets, and NetSuite users whose setup needs fixing before it slows down the close.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero", "Zoho", "Odoo"],
    faqs: [
      {
        q: "Can you migrate us from QuickBooks or Xero to NetSuite?",
        a: "Yes. We map your chart of accounts, migrate balances and history, and reconcile everything after the move.",
      },
      {
        q: "Do you set up multi-subsidiary and multi-currency in NetSuite?",
        a: "Yes, along with the AP, AR and fixed asset modules your team will use every day.",
      },
      {
        q: "Do you stay on after go-live?",
        a: "We can. Many clients keep us for daily bookkeeping, month-end close and reporting in the new system.",
      },
    ],
    related: ["month-end-close", "management-reporting", "accounts-payable"],
  },
  {
    slug: "audit-support",
    name: "Audit Support",
    short: "Audit-ready books, schedules and reconciliations, and a team that answers auditor requests.",
    featured: false,
    title: "Audit Support & Audit Preparation Services | Grandeur Advisors",
    description:
      "Audit support and audit preparation services: reconciled balance sheets, supporting schedules, auditor request (PBC) lists and liaison with your external auditors.",
    h1: "Audit support and audit preparation",
    intro:
      "We get your books audit-ready and work alongside your external auditors, preparing the reconciliations, schedules and documents they ask for.",
    includes: [
      "Audit readiness review",
      "Balance sheet reconciliations and schedules",
      "Auditor request (PBC) list preparation",
      "Supporting documents and samples",
      "Fixed asset and accrual schedules",
      "Proposed adjustment review",
      "Liaison with your auditors",
      "Year-end close support",
    ],
    whoFor:
      "Companies facing their first audit, and finance teams that want their year end to run smoothly with fewer auditor follow-up questions.",
    software: ["Oracle NetSuite", "QuickBooks Online", "Xero"],
    faqs: [
      {
        q: "Do you perform the audit?",
        a: "No. We prepare your books and documents and support your team through the audit. The audit itself is carried out by your independent auditors.",
      },
      {
        q: "Which frameworks do you prepare audit schedules under?",
        a: "US GAAP and IFRS.",
      },
    ],
    related: ["month-end-close", "management-reporting", "fractional-cfo"],
  },
];

export const serviceBySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

// Order used on the home page: owner's top three first.
export const SERVICE_ORDER = [
  "accounts-payable",
  "accounts-receivable",
  "outsourced-bookkeeping",
  "erp-implementation-migration",
  "month-end-close",
  "management-reporting",
  "fractional-cfo",
  "audit-support",
];
