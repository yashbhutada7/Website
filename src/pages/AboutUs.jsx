import React from "react";
import { Link } from "react-router-dom";
import { CTA, StatsBand } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { TEAM } from "@/content/people";
import { COUNTRIES, FIRM, INDUSTRIES, STANDARDS } from "@/content/site";

export default function AboutUs() {
  useSEO();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div>
            <ol className="crumbs" aria-label="Breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">About us</li>
            </ol>
            <h1>About Grandeur Advisors</h1>
            <p className="lead">
              {FIRM.legalName} was founded in {FIRM.founded} to give growing businesses the kind of finance team that
              larger companies take for granted: accurate books, a dependable close and reports you can act on.
            </p>
          </div>
          <aside className="included" aria-labelledby="facts-h">
            <h2 id="facts-h">At a glance</h2>
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

      <StatsBand />

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">Our approach</span>
            <h2>Personal service, built on trust</h2>
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

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Leadership</span>
            <h2>Meet our professionals</h2>
          </div>
          <div className="grid">
            {TEAM.map((m) => (
              <article className="card member" key={m.name}>
                <img src={m.photo} alt={m.name} width="200" height="240" loading="lazy" />
                <div>
                  <div className="role">
                    {m.role}
                    {m.credential ? ` · ${m.credential}` : ""}
                  </div>
                  <h3>{m.name}</h3>
                  <div className="headline">{m.headline}</div>
                  <p>{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
