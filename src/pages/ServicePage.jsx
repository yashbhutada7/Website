import React from "react";
import { Link, useParams } from "react-router-dom";
import { BookButton } from "@/components/Layout";
import { CheckList, CTA, FAQ, SecurityList, ServiceCards } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { serviceBySlug } from "@/content/services";
import { INDUSTRIES, SOFTWARE, SOFTWARE_TEXT_ONLY, STANDARDS } from "@/content/site";
import NotFound from "@/pages/NotFound";

const LOGOS = Object.fromEntries(SOFTWARE.map((s) => [s.name, s.logo]));

export default function ServicePage() {
  const { slug } = useParams();
  const s = serviceBySlug[slug];
  useSEO();
  if (!s) return <NotFound />;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div>
            <ol className="crumbs" aria-label="Breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services/">Services</Link>
              </li>
              <li aria-current="page">{s.name}</li>
            </ol>
            <h1>{s.h1}</h1>
            <p className="lead">{s.intro}</p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <BookButton />
              <Link to="/contact-us/" className="btn btn-outline">
                Send us a message
              </Link>
            </div>
          </div>
          <aside className="included" aria-labelledby="included-h">
            <h2 id="included-h">What's included</h2>
            <CheckList items={s.includes.slice(0, 6)} />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">Scope</span>
            <h2>What we handle</h2>
            <p className="lead">{s.whoFor}</p>
          </div>
          <CheckList items={s.includes} two />
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="kicker">Software</span>
            <h2>Done in the tools you already use</h2>
            <p className="lead">
              No new system to learn. We log in to your software and work to {STANDARDS.join(" or ")}, depending on how you
              report.
            </p>
          </div>
          <ul className="logo-row" style={{ justifyContent: "flex-start", gap: "24px 32px" }}>
            {s.software.map((name) =>
              LOGOS[name] ? (
                <li key={name}>
                  <img src={LOGOS[name]} alt={name} width="140" height="30" loading="lazy" />
                </li>
              ) : SOFTWARE_TEXT_ONLY.includes(name) ? (
                <li key={name} className="txt">
                  {name}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>

      <section className="section band-dark">
        <div className="container split">
          <div>
            <span className="kicker">Your data stays safe</span>
            <h2>Access you control</h2>
            <p className="lead">The same security practices apply to every client, on every engagement.</p>
            <ul className="chips dark" aria-label="Industries we serve">
              {INDUSTRIES.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <SecurityList />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">FAQ</span>
            <h2>{s.name}: common questions</h2>
          </div>
          <FAQ items={s.faqs} />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Related services</span>
            <h2>Often combined with</h2>
          </div>
          <ServiceCards slugs={s.related} featuredStyle={false} cols={3} />
        </div>
      </section>

      <CTA title={`Talk to us about ${s.name.toLowerCase()}`} />
    </>
  );
}
