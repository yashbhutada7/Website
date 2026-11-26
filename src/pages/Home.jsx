import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icons";
import { BookButton } from "@/components/Layout";
import {
  CheckList,
  CTA,
  Eyebrow,
  FAQ,
  LogoMarquee,
  SecurityFeatures,
  ServiceCards,
  StatsPanel,
  Team,
  Testimonials,
  TimeZones,
} from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { FIRM, INDUSTRIES } from "@/content/site";
import { SERVICE_ORDER } from "@/content/services";
import { HOME_FAQS } from "@/pages/homeFaqs";

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="ring" />
      <div className="hero-photo">
        <img src="/images/Yash.jpg" alt="" width="349" height="473" fetchpriority="high" />
        <div className="tagline">
          <b>Yash Bhutada</b>
          <span>CEO · CPA · Grandeur Advisors</span>
        </div>
      </div>
      <div className="float f1">
        <div className="title">
          Month-end close <span className="pill">On track</span>
        </div>
        {["Bank reconciliations", "AP and AR aging", "Management pack"].map((t) => (
          <div className="mini-row" key={t}>
            <i>
              <Icon name="check" />
            </i>
            {t}
          </div>
        ))}
      </div>
      <div className="float f2">
        <div className="big-stat">200k+</div>
        <span>Billable hours delivered</span>
        <div className="spark">
          {[30, 45, 38, 58, 52, 70, 64, 86, 78, 100].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="float f3">
        <div className="logos-mini">
          <img src="/images/tools/Oracle_NetSuite.png" alt="" width="80" height="22" />
          <img src="/images/tools/QuickBook.svg" alt="" width="90" height="22" />
          <img src="/images/tools/Xero.svg" alt="" width="22" height="22" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useSEO();
  return (
    <>
      <section className="hero">
        <div className="grid-bg" />
        <div className="container">
          <div>
            <Eyebrow>CPA-led outsourced accounting</Eyebrow>
            <h1>
              Outsourced bookkeeping &amp; accounting for <span className="hl">US &amp; UK businesses</span>
            </h1>
            <p className="lead">
              We run accounts payable and receivable, month-end close, reporting and NetSuite projects for growing
              companies, in your software and in your time zone.
            </p>
            <div className="btn-row">
              <BookButton />
              <Link to="/services/" className="btn btn-light">
                Explore services <Icon name="arrow" />
              </Link>
            </div>
            <div className="trust">
              <span className="faces">
                {["Kyle_Binder", "Dana_Harper", "Marie_Kotter", "Michelle_George"].map((f) => (
                  <img key={f} src={`/images/${f}.jpg`} alt="" width="42" height="42" />
                ))}
              </span>
              <span>
                <b>30+ clients</b> in 7 countries
              </span>
              <ul>
                <li>
                  <Icon name="award" /> CPA-led
                </li>
                <li>
                  <Icon name="layers" /> US GAAP &amp; IFRS
                </li>
              </ul>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <LogoMarquee />

      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <Eyebrow>Our services</Eyebrow>
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
            <Eyebrow>Why Grandeur Advisors</Eyebrow>
            <h2>
              An extension of your team, <span className="hl">not a black box</span>
            </h2>
            <p className="lead">
              Since {FIRM.founded} we have supported fast-growing e-commerce brands, manufacturers, SaaS companies and more.
            </p>
          </div>
          <StatsPanel />
          <div className="split top" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
            <div>
              <h3 style={{ fontSize: 26 }}>Industries we know well</h3>
              <ul className="chips" aria-label="Industries we serve" style={{ marginTop: 18 }}>
                {INDUSTRIES.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <h3 style={{ fontSize: 26, marginTop: 40 }}>How we work with you</h3>
              <CheckList
                items={[
                  "One dedicated team that knows your books",
                  "Work done inside your own software",
                  "Reporting delivered on a schedule you agree",
                ]}
              />
            </div>
            <SecurityFeatures />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <Eyebrow>Working hours that fit yours</Eyebrow>
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
            <Eyebrow>Leadership</Eyebrow>
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
            <Eyebrow>FAQ</Eyebrow>
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
