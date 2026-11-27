import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon, { SERVICE_ICONS } from "@/components/Icons";
import CountUp from "@/components/CountUp";
import { SECURITY, SOFTWARE, SOFTWARE_TEXT_ONLY, STATS, TIME_ZONES } from "@/content/site";
import { SERVICE_ORDER, serviceBySlug } from "@/content/services";
import { TEAM, TESTIMONIALS } from "@/content/people";

// Small label tags were removed at the owner's request; kept as a no-op so pages stay simple.
export function Eyebrow() {
  return null;
}

export function StatsPanel() {
  return (
    <div className="stats-panel" role="list" aria-label="Grandeur Advisors in numbers">
      {STATS.map((s) => (
        <div className="stat" role="listitem" key={s.label}>
          <b className="hl">
            <CountUp to={s.n} suffix={s.suffix} />
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee({ title = "Software we work in every day" }) {
  const items = [
    ...SOFTWARE.map((s) => <img key={s.name} src={s.logo} alt={s.name} width="150" height="30" />),
    ...SOFTWARE_TEXT_ONLY.map((t) => (
      <span key={t} className="txt">
        {t}
      </span>
    )),
  ];
  return (
    <section className="marquee" aria-label={title}>
      <p>{title}</p>
      <div className="marquee-track">
        {items}
        <span aria-hidden="true" style={{ display: "contents" }}>
          {items.map((el, i) => React.cloneElement(el, { key: `dup-${i}`, alt: "" }))}
        </span>
      </div>
    </section>
  );
}

export function ServiceCards({ slugs, headingLevel = "h3", cols = 4, badges = true }) {
  const H = headingLevel;
  return (
    <div className={`grid grid-${cols}`}>
      {slugs.map((slug) => {
        const s = serviceBySlug[slug];
        const idx = SERVICE_ORDER.indexOf(slug);
        return (
          <Link key={slug} to={`/services/${slug}/`} className="svc">
            <div className={`art photo art-${idx % 4}`}>
              <img src={`/images/photos/svc-${slug}.jpg`} alt="" width="800" height="498" loading="lazy" />
              <span className="glyph">
                <Icon name={SERVICE_ICONS[slug]} />
              </span>
            </div>
            <div className="body">
              <H>{s.name}</H>
              <p>{s.short}</p>
              <span className="more">
                Learn more <Icon name="arrow" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const FEATURE_ICONS = ["shield", "key", "lock", "award"];
export function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((f, i) => (
        <div className="feature" key={f.title}>
          <span className="icon">
            <Icon name={f.icon || FEATURE_ICONS[i % FEATURE_ICONS.length]} />
          </span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
}

export function SecurityFeatures() {
  return (
    <FeatureGrid
      items={[
        ...SECURITY,
        { title: "US GAAP and IFRS", text: "Books kept and statements prepared under the framework your business reports in.", icon: "layers" },
      ]}
    />
  );
}

const TZ = ["America/New_York", "Europe/London", "Asia/Kolkata", "Australia/Sydney"];
export function TimeZones() {
  // Clocks are filled in the browser so the pre-rendered page stays identical.
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  const fmt = (tz) => {
    if (!now) return "--:--";
    try {
      return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(now);
    } catch {
      return "--:--";
    }
  };
  return (
    <div className="zones">
      {TIME_ZONES.map((z, i) => (
        <div className={`zone${i === 0 ? " main" : ""}`} key={z.zone}>
          <b>{z.zone}</b>
          <small>{z.note}</small>
          <div className="clock" aria-label={`Current time in ${z.zone}`}>
            {fmt(TZ[i])}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Team({ full = false }) {
  return (
    <div className="team-grid">
      {TEAM.map((m) => (
        <article className="person" key={m.name}>
          <div className="photo">
            <img src={m.photo} alt={m.name} width="800" height="1000" />
          </div>
          <div className="info">
            <h3>{m.name}</h3>
            <div className="role">{m.role}</div>
            <p className="headline">{m.headline}</p>
            {full && <p>{m.bio}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setTimeout(() => setI((x) => (x + 1) % n), 8000);
    return () => clearTimeout(t);
  }, [i, paused, n]);
  const t = TESTIMONIALS[i];
  const go = (d) => setI((x) => (x + d + n) % n);
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)}>
      <div className="section-head center">
        <h2>
          Trusted by founders, CFOs and <span className="hl">finance teams</span>
        </h2>
      </div>
      <figure className="tcard" aria-live="polite">
        <div className="tphoto">
          {t.photo ? (
            <img src={t.photo} alt={t.name} width="240" height="240" />
          ) : (
            <span className="avatar">{initials(t.name)}</span>
          )}
        </div>
        <div className="tbody">
          <div className="mark" aria-hidden="true">
            “
          </div>
          <blockquote key={i}>{t.quote}</blockquote>
          <figcaption>
            <b>
              {t.linkedin ? (
                <a href={t.linkedin} target="_blank" rel="noopener noreferrer">
                  {t.name}
                </a>
              ) : (
                t.name
              )}
            </b>
            <span>{[t.role, t.place].filter(Boolean).join(", ")}</span>
          </figcaption>
        </div>
      </figure>
      <div className="tnav">
        <button type="button" className="tarrow" aria-label="Previous testimonial" onClick={() => go(-1)}>
          <Icon name="arrowLeft" />
        </button>
        <div className="tfaces" role="tablist" aria-label="Choose a testimonial">
          {TESTIMONIALS.map((p, k) => (
            <button
              type="button"
              key={p.name}
              role="tab"
              aria-selected={k === i}
              aria-label={p.name}
              className={k === i ? "on" : ""}
              onClick={() => setI(k)}
            >
              {p.photo ? <img src={p.photo} alt="" width="56" height="56" loading="lazy" /> : <span>{initials(p.name)}</span>}
            </button>
          ))}
        </div>
        <button type="button" className="tarrow" aria-label="Next testimonial" onClick={() => go(1)}>
          <Icon name="arrow" />
        </button>
      </div>
      {/* All quotes stay in the page for search engines and screen readers. */}
      <ul className="sr-only">
        {TESTIMONIALS.map((p) => (
          <li key={p.name}>
            {p.quote} — {p.name}, {p.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FAQ({ items }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span className="plus">
              <Icon name="plus" />
            </span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTA({
  title = "Let's get your books in great shape",
  text = "Tell us how your finance function works today and we'll show you where we can help.",
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link to="/contact-us/" className="btn btn-white">
            Contact us <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items, two = false }) {
  return (
    <ul className={`check-list${two ? " two" : ""}`}>
      {items.map((i) => (
        <li key={i}>
          <Icon name="check" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
