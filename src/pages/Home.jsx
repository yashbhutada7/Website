import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icons";
import { BookButton } from "@/components/Layout";
import { CheckList, CTA, FAQ, LogoStrip, SecurityList, ServiceCards, StatsBand, Testimonials, TimeZones } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { FIRM, INDUSTRIES, STANDARDS } from "@/content/site";
import { SERVICE_ORDER } from "@/content/services";
import { HOME_FAQS } from "@/pages/homeFaqs";


function Workspace() {
  return (
    <div className="workspace" aria-hidden="true">
      <div className="ws-card ws-main">
        <div className="ws-title">
          <b>Month-end close</b>
          <span className="ws-pill">On track</span>
        </div>
        {[
          ["Bank and card reconciliations", "Done"],
          ["AP aging and accruals", "Done"],
          ["AR aging and cash application", "Done"],
          ["Balance sheet reconciliations", "Done"],
          ["Management reporting pack", "In review"],
        ].map(([t, s], i) => (
          <div className="ws-row" key={t}>
            <span className={`ws-tick${i === 4 ? " todo" : ""}`}>{i < 4 && <Icon name="check" />}</span>
            <span className="label">{t}</span>
            <small>{s}</small>
          </div>
        ))}
        <div className="ws-progress">
          <i />
        </div>
      </div>
      <div className="ws-card ws-chart">
        <b>Cash position</b>
        <div className="bars">
          {[38, 52, 46, 60, 58, 72, 68, 84].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="ws-card ws-chips">
        <img src="/images/tools/Oracle_NetSuite.png" alt="" width="90" height="26" />
        <img src="/images/tools/QuickBook.svg" alt="" width="90" height="26" />
        <img src="/images/tools/Xero.svg" alt="" width="40" height="26" />
      </div>
    </div>
  );
}

export default function Home() {
  useSEO();
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="kicker" style={{ color: "#7fd6e6" }}>
              CPA-led outsourced accounting
            </span>
            <h1>
              Outsourced bookkeeping and accounting for <em>US and UK businesses</em>
            </h1>
            <p className="lead">
              Accounts payable and receivable, month-end close, management reporting and NetSuite migrations, handled by a
              team of 20 that works in your time zone and your software.
            </p>
            <div className="btn-row">
              <BookButton />
              <Link to="/services/" className="btn btn-ghost">
                Explore services <Icon name="arrow" />
              </Link>
            </div>
            <ul className="hero-badges">
              <li>
                <Icon name="award" /> CPA-led team
              </li>
              <li>
                <Icon name="layers" /> {STANDARDS.join(" & ")}
              </li>
              <li>
                <Icon name="clock" /> US Eastern working hours
              </li>
            </ul>
          </div>
          <Workspace />
        </div>
      </section>

      <StatsBand />
      <LogoStrip />

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <span className="kicker">What we do</span>
            <h2>Finance operations, handled end to end</h2>
            <p className="lead">
              Pick one service or hand us the whole back office. We work inside your existing systems and processes.
            </p>
          </div>
          <ServiceCards slugs={SERVICE_ORDER} />
        </div>
      </section>

      <section className="section band-dark">
        <div className="container split">
          <div>
            <span className="kicker">Why Grandeur Advisors</span>
            <h2>An extension of your finance team, not a black box</h2>
            <p className="lead">
              Since {FIRM.founded} we have worked with more than 30 clients across 7 countries, from fast-growing e-commerce
              brands to manufacturers and SaaS companies.
            </p>
            <ul className="chips dark" aria-label="Industries we serve">
              {INDUSTRIES.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <SecurityList />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">Working hours that fit yours</span>
            <h2>We work when you work</h2>
            <p className="lead">
              Our day runs on US Eastern time, with comfortable overlap for clients in the UK, India and Australia.
            </p>
            <CheckList
              items={[
                "Daily overlap with US and UK business hours",
                "One dedicated team that knows your books",
                "Reporting delivered on a schedule you agree",
              ]}
            />
          </div>
          <TimeZones />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">FAQ</span>
            <h2>Questions clients ask us</h2>
            <p className="lead">Anything else? Ask us on a free 30-minute call.</p>
            <BookButton className="btn btn-dark" />
          </div>
          <FAQ items={HOME_FAQS} />
        </div>
      </section>

      <CTA />
    </>
  );
}
