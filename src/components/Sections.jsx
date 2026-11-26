import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon, { SERVICE_ICONS } from "@/components/Icons";
import { BookButton } from "@/components/Layout";
import { SECURITY, SOFTWARE, SOFTWARE_TEXT_ONLY, STATS, TIME_ZONES } from "@/content/site";
import { SERVICE_ORDER, serviceBySlug } from "@/content/services";
import { TEAM, TESTIMONIALS } from "@/content/people";

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export function StatsPanel() {
  return (
    <div className="stats-panel" role="list" aria-label="Grandeur Advisors in numbers">
      {STATS.map((s) => (
        <div className="stat" role="listitem" key={s.label}>
          <b className="hl">{s.value}</b>
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
            <div className={`art art-${idx % 4}`}>
              {badges && s.featured && <span className="badge">Most requested</span>}
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
            <img src={m.photo} alt={m.name} width="400" height="420" />
          </div>
          <div className="info">
            <div className="role">
              {m.role}
              {m.credential ? ` · ${m.credential}` : ""}
            </div>
            <h3>{m.name}</h3>
            <p>{full ? m.bio : m.headline}</p>
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
  const row = useRef(null);
  const nudge = (dir) => {
    const el = row.current;
    if (el) el.scrollBy({ left: dir * Math.min(430, el.clientWidth * 0.9), behavior: "smooth" });
  };
  return (
    <>
      <div className="head-row">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <Eyebrow>Client success stories</Eyebrow>
          <h2>
            Trusted by founders, CFOs and <span className="hl">finance teams</span>
          </h2>
        </div>
        <div className="arrows">
          <button type="button" aria-label="Previous testimonials" onClick={() => nudge(-1)}>
            <Icon name="arrowLeft" />
          </button>
          <button type="button" aria-label="More testimonials" onClick={() => nudge(1)}>
            <Icon name="arrow" />
          </button>
        </div>
      </div>
      <div className="quotes" ref={row} tabIndex="0" aria-label="Testimonials">
        {TESTIMONIALS.map((t) => (
          <figure className="quote" key={t.name}>
            <div className="mark" aria-hidden="true">
              “
            </div>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              {t.photo ? (
                <img src={t.photo} alt="" width="50" height="50" />
              ) : (
                <span className="avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
              )}
              <div>
                <b>{t.name}</b>
                <span>{[t.role, t.place].filter(Boolean).join(", ")}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
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
  text = "Book a free 30-minute consultation. We'll learn how your finance function works today and show you where we can help.",
}) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <BookButton className="btn btn-white" label="Book a free consultation" />
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
