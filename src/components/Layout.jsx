import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "@/components/Icons";
import { FIRM } from "@/content/site";
import { SERVICES, SERVICE_ORDER, serviceBySlug } from "@/content/services";

const ordered = SERVICE_ORDER.map((s) => serviceBySlug[s]);

export function BookButton({ className = "btn btn-primary", label = FIRM.bookingLabel }) {
  return (
    <a className={className} href={FIRM.bookingUrl} target="_blank" rel="noopener noreferrer">
      <Icon name="calendar" />
      {label}
    </a>
  );
}

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Grandeur Advisors home">
      <img src="/images/Grandeur-Advisors-Logo.png" alt="" width="52" height="52" />
      <span>
        Grandeur Advisors
        <small>Accounting · Bookkeeping · Reporting</small>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Brand />
        <ul className="nav-links">
          <li className="has-menu">
            <NavLink to="/services/">
              Services <Icon name="chevron" width="16" height="16" />
            </NavLink>
            <div className="menu">
              {ordered.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}/`}>
                  <b>{s.name}</b>
                  <span>{s.short}</span>
                </Link>
              ))}
              <Link to="/services/" className="all">
                All services →
              </Link>
            </div>
          </li>
          <li>
            <NavLink to="/about-us/">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us/">Contact</NavLink>
          </li>
        </ul>
        <div className="nav-cta">
          <BookButton label="Book a free call" />
        </div>
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <nav id="mobile-nav" className={`mobile-nav container${open ? " open" : ""}`} aria-label="Mobile">
        <Link to="/services/">Services</Link>
        <div className="sub">
          {ordered.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}/`}>
              {s.name}
            </Link>
          ))}
        </div>
        <Link to="/about-us/">About</Link>
        <Link to="/contact-us/">Contact</Link>
        <BookButton />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Brand />
            <p>
              CPA-led outsourced accounting for growing businesses in the USA, UK and Europe. Bookkeeping, AP and AR,
              month-end close, reporting and NetSuite.
            </p>
            <div className="socials">
              <a href={FIRM.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Grandeur Advisors on LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href={FIRM.instagram} target="_blank" rel="noopener noreferrer" aria-label="Grandeur Advisors on Instagram">
                <Icon name="instagram" />
              </a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {ordered.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>More services</h4>
            <ul>
              {ordered.slice(5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/services/">All services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
              </li>
              <li>
                <a href={`tel:${FIRM.phone}`}>{FIRM.phone}</a>
              </li>
              <li>
                <a href={FIRM.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a free consultation
                </a>
              </li>
              <li>
                <Link to="/about-us/">About us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {FIRM.legalName}. All rights reserved.</span>
          <span>Serving clients in the USA, UK, Europe and Australia.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <div className="mobile-cta">
        <BookButton />
      </div>
    </>
  );
}

export { SERVICES };
