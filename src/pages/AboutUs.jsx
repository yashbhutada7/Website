import React from "react";
import { Link } from "react-router-dom";
import { CheckList, CTA, Eyebrow, StatsPanel, Team } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import Icon from "@/components/Icons";
import { COUNTRIES, FIRM, INDUSTRIES, STANDARDS } from "@/content/site";

export default function AboutUs() {
  useSEO();
  return (
    <>
      <section className="page-hero">
        <div className="grid-bg" />
        <div className="container">
          <div>
            <ol className="crumbs" aria-label="Breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">About us</li>
            </ol>
            <h1>
              About <span className="hl">Grandeur Advisors</span>
            </h1>
            <p className="lead">
              {FIRM.legalName} was founded in {FIRM.founded} to give growing businesses the kind of finance team that
              larger companies take for granted: accurate books, a dependable close and reports you can act on.
            </p>
          </div>
          <aside className="included" aria-labelledby="facts-h">
            <div className="top">
              <span className="glyph">
                <Icon name="award" />
              </span>
              <h2 id="facts-h">At a glance</h2>
            </div>
            <ul className="check-list" style={{ gap: 14 }}>
              <li>
                <span>
                  <b>Founded:</b> {FIRM.founded}
                </span>
              </li>
              <li>
                <span>
                  <b>Standards:</b> {STANDARDS.join(", ")}
                </span>
              </li>
              <li>
                <span>
                  <b>Clients in:</b> {COUNTRIES.join(", ")}
                </span>
              </li>
              <li>
                <span>
                  <b>Industries:</b> {INDUSTRIES.join(", ")}
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <StatsPanel />
        </div>
      </section>

      <section className="section">
        <div className="container split top">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2>
              Personal service, <span className="hl">built on trust</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              Every client is different. We take the time to understand your objectives, whether you run a small business or
              a multinational group, and shape our work around them.
            </p>
            <p>
              Our team brings deep experience across the accounting cycle. From compliance to auditing and advisory support,
              we help clients reach their financial goals and handle today's complex business landscape with confidence.
            </p>
            <p>
              Beyond technical skill, we build lasting relationships based on trust, transparency and open communication. We
              work closely with your team so that the numbers support the decisions you need to make.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <Eyebrow>Leadership</Eyebrow>
            <h2>
              Meet our <span className="hl">professionals</span>
            </h2>
          </div>
          <Team full />
        </div>
      </section>

      <CTA />
    </>
  );
}
