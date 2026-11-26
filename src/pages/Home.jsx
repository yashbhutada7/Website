import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icons";
import { BookButton } from "@/components/Layout";
import {
  CheckList,
  CTA,
  FAQ,
  LogoMarquee,
  SecurityFeatures,
  ServiceCards,
  Team,
  Testimonials,
  TimeZones,
} from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { FIRM, INDUSTRIES, STATS } from "@/content/site";
import { SERVICE_ORDER } from "@/content/services";
import { HOME_FAQS } from "@/pages/homeFaqs";

export default function Home() {
  useSEO();
  return (
    <>
      <section className="hero-photo-band">
        <img className="bg" src="/images/photos/hero-city.jpg" alt="" width="1920" height="1080" fetchpriority="high" />
        <div className="shade" />
        <div className="container">
          <h1>
            <span className="brandline">Grandeur Advisors</span>
            <span className="tagline">Outsourced accounting, bookkeeping and financial reporting for growing businesses worldwide</span>
          </h1>
          <p className="lead">
            A CPA-led team of 20 trusted by more than 30 clients across North America, Europe, Australia and Asia. We work in
            your software, to US GAAP or IFRS, and in your time zone.
          </p>
          <div className="btn-row">
            <BookButton className="btn btn-white" />
            <Link to="/services/" className="btn btn-ghost">
              Explore our services <Icon name="arrow" />
            </Link>
          </div>
          <ul className="hero-facts">
            {STATS.map((s) => (
              <li key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LogoMarquee />

      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>
              Everything your finance team needs, <span className="hl">handled</span>
            </h2>
            <p className="lead">
              Pick one service or hand us the whole back office. We work inside your existing systems and processes.
            </p>
          </div>
          <ServiceCards slugs={SERVICE_ORDER} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>
              An extension of your team, <span className="hl">not a black box</span>
            </h2>
            <p className="lead">
              Since {FIRM.founded} we have supported fast-growing e-commerce brands, manufacturers, SaaS companies and more.
            </p>
          </div>
          <div className="split">
            <div className="photo-panel">
              <div className="frame">
                <img src="/images/photos/team-at-work.jpg" alt="An accountant working on a laptop" width="1400" height="1120" loading="lazy" />
              </div>
              <div className="stamp">
                <span className="icon">
                  <Icon name="award" />
                </span>
                <span>
                  <b>CPA-led team</b>
                  <span>US GAAP and IFRS</span>
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 26 }}>How we work with you</h3>
              <CheckList
                items={[
                  "One dedicated team that knows your books",
                  "Work done inside your own software",
                  "Reporting delivered on a schedule you agree",
                  "NDAs, two-factor authentication and need-to-know access",
                ]}
              />
              <h3 style={{ fontSize: 26, marginTop: 36 }}>Industries we know well</h3>
              <ul className="chips" aria-label="Industries we serve" style={{ marginTop: 16 }}>
                {INDUSTRIES.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
            <SecurityFeatures />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <h2>
              We work <span className="hl">when you work</span>
            </h2>
            <p className="lead">
              Our day runs on US Eastern time, with comfortable overlap for clients in the UK, India and Australia.
            </p>
            <BookButton className="btn btn-primary" />
          </div>
          <TimeZones />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>
              The people behind <span className="hl">your numbers</span>
            </h2>
          </div>
          <Team />
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/about-us/" className="btn btn-light">
              More about us <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <div className="container split top">
          <div>
            <h2>
              Questions <span className="hl">clients ask us</span>
            </h2>
            <p className="lead">Anything else? Ask us on a free 30-minute call.</p>
            <BookButton />
          </div>
          <FAQ items={HOME_FAQS} />
        </div>
      </section>

      <CTA />
    </>
  );
}
