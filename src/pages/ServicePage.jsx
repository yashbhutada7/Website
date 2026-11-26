import React from "react";
import { Link, useParams } from "react-router-dom";
import Icon, { SERVICE_ICONS } from "@/components/Icons";
import { CheckList, CTA, Eyebrow, FAQ, SecurityFeatures, ServiceCards, StatsPanel } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { serviceBySlug } from "@/content/services";
import { SOFTWARE, SOFTWARE_TEXT_ONLY, STANDARDS } from "@/content/site";
import Industries from "@/components/Industries";
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
        <div className="grid-bg" />
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
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link to="/contact-us/" className="btn btn-primary">
                Contact us <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <aside className="included" aria-labelledby="included-h">
            <div className="top">
              <span className="glyph">
                <Icon name={SERVICE_ICONS[s.slug]} />
              </span>
              <h2 id="included-h">What's included</h2>
            </div>
            <CheckList items={s.includes.slice(0, 6)} />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container split top">
          <div>
            <Eyebrow>Scope</Eyebrow>
            <h2>
              What we <span className="hl">handle</span>
            </h2>
            <p className="lead">{s.whoFor}</p>
          </div>
          <CheckList items={s.includes} two />
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <Eyebrow>Software</Eyebrow>
            <h2>
              Done in the tools <span className="hl">you already use</span>
            </h2>
            <p className="lead">
              No new system to learn. We log in to your software and work to {STANDARDS.join(" or ")}, depending on how you
              report.
            </p>
          </div>
          <ul className="logo-grid">
            {s.software.map((name) =>
              LOGOS[name] ? (
                <li key={name}>
                  <img src={LOGOS[name]} alt={name} width="130" height="28" loading="lazy" />
                </li>
              ) : SOFTWARE_TEXT_ONLY.includes(name) ? (
                <li key={name}>
                  <span className="txt">{name}</span>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <Eyebrow>Why Grandeur Advisors</Eyebrow>
            <h2>
              Your data stays <span className="hl">safe with us</span>
            </h2>
            <p className="lead">The same practices apply to every client, on every engagement.</p>
          </div>
          <SecurityFeatures />
          <div style={{ marginTop: 40 }}>
            <StatsPanel />
          </div>
          <div style={{ marginTop: 40 }}>
            <Industries />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split top">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2>
              {s.name}: <span className="hl">common questions</span>
            </h2>
          </div>
          <FAQ items={s.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Eyebrow>Related services</Eyebrow>
            <h2>Often combined with</h2>
          </div>
          <ServiceCards slugs={s.related} cols={3} badges={false} />
        </div>
      </section>

      <CTA title={`Talk to us about ${s.name.toLowerCase()}`} />
    </>
  );
}
