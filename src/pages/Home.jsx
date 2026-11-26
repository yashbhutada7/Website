import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icons";
import CountUp from "@/components/CountUp";
import Industries from "@/components/Industries";
import {
  CheckList,
  CTA,
  LogoMarquee,
  ServiceCards,
  Team,
  Testimonials,
} from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { FIRM, STATS } from "@/content/site";
import { SERVICE_ORDER } from "@/content/services";

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
            <Link to="/services/" className="btn btn-white">
              Explore our services <Icon name="arrow" />
            </Link>
            <Link to="/contact-us/" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
          <ul className="hero-facts">
            {STATS.map((s) => (
              <li key={s.label}>
                <b>
                  <CountUp to={s.n} suffix={s.suffix} />
                </b>
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
              Why <span className="hl">Grandeur Advisors</span>
            </h2>
            <p className="lead">
              An extension of your finance team since {FIRM.founded}, not a black box.
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
            <CheckList
              items={[
                "One dedicated team that knows your books",
                "Work done inside your own software: NetSuite, QuickBooks, Xero and more",
                "Reporting delivered on a schedule you agree",
                "US Eastern working hours, with overlap for the UK, India and Australia",
                "NDAs signed before we see your data",
                "Two-factor authentication and need-to-know access only",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>
              Industries <span className="hl">we serve</span>
            </h2>
            <p className="lead">
              Our team has worked across these sectors, so we already know their transactions, cut-offs and reports.
            </p>
          </div>
          <Industries />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <section className="section alt">
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

      <CTA />
    </>
  );
}
