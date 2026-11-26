import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon, { SERVICE_ICONS } from "@/components/Icons";
import { BookButton } from "@/components/Layout";
import { SECURITY, SOFTWARE, SOFTWARE_TEXT_ONLY, STATS, TIME_ZONES } from "@/content/site";
import { serviceBySlug } from "@/content/services";
import { TESTIMONIALS } from "@/content/people";

export function StatsBand() {
  return (
    <section className="stats" aria-label="Grandeur Advisors in numbers">
      <div className="container">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <b>
              {s.value.replace("+", "")}
              {s.value.includes("+") && <sup>+</sup>}
            </b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LogoStrip({ title = "Software we work in every day" }) {
  return (
    <section className="logos" aria-label={title}>
      <div className="container">
        <p>{title}</p>
        <ul className="logo-row">
          {SOFTWARE.map((s) => (
            <li key={s.name}>
              <img src={s.logo} alt={s.name} width="140" height="30" loading="lazy" />
            </li>
          ))}
          {SOFTWARE_TEXT_ONLY.map((t) => (
            <li key={t} className="txt">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceCards({ slugs, featuredStyle = true, headingLevel = "h3", cols = 4 }) {
  const H = headingLevel;
  return (
    <div className={`grid grid-${cols}`}>
      {slugs.map((slug) => {
        const s = serviceBySlug[slug];
        const featured = featuredStyle && s.featured;
        return (
          <Link key={slug} to={`/services/${slug}/`} className={`card service-card${featured ? " featured" : ""}`}>
            <span className="icon">
              <Icon name={SERVICE_ICONS[slug]} />
            </span>
            {featured && <span className="tag">Most requested</span>}
            <H>{s.name}</H>
            <p>{s.short}</p>
            <span className="more">
              Learn more <Icon name="arrow" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

const SECURITY_ICONS = ["shield", "key", "lock"];
export function SecurityList() {
  return (
    <div>
      {SECURITY.map((s, i) => (
        <div className="feature" key={s.title}>
          <span className="icon">
            <Icon name={SECURITY_ICONS[i]} />
          </span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </div>
      ))}
    </div>
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
        <div className="zone" key={z.zone}>
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
    if (el) el.scrollBy({ left: dir * Math.min(440, el.clientWidth * 0.9), behavior: "smooth" });
  };
  return (
    <>
      <div className="scroll-hint section-head" style={{ maxWidth: "none" }}>
        <div>
          <span className="kicker">Client success stories</span>
          <h2>What clients and colleagues say</h2>
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
                <img src={t.photo} alt="" width="48" height="48" />
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
            <Icon name="plus" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTA({ title = "Let's talk about your books", text = "Book a free 30-minute consultation. We'll look at how you work today and where we can help." }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <BookButton className="btn btn-primary" label="Book a free consultation" />
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
