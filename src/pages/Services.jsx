import React from "react";
import { Link } from "react-router-dom";
import { BookButton } from "@/components/Layout";
import { CTA, Eyebrow, LogoMarquee, ServiceCards } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { SERVICE_ORDER } from "@/content/services";
import { INDUSTRIES } from "@/content/site";

export default function Services() {
  useSEO();
  return (
    <>
      <section className="page-hero simple">
        <div className="grid-bg" />
        <div className="container">
          <div>
            <ol className="crumbs" aria-label="Breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">Services</li>
            </ol>
            <h1>
              Outsourced accounting <span className="hl">services</span>
            </h1>
            <p className="lead">
              From daily bookkeeping to NetSuite migrations and fractional CFO support, our CPA-led team runs the finance
              work that keeps your business moving.
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <BookButton />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceCards slugs={SERVICE_ORDER} headingLevel="h2" />
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <Eyebrow>Industries</Eyebrow>
            <h2>
              Experience across <span className="hl">industries</span>
            </h2>
            <p className="lead">
              Our team has worked with businesses in most sectors, so we already know the transactions, cut-offs and reports
              that matter in yours.
            </p>
          </div>
          <ul className="chips" aria-label="Industries we serve">
            {INDUSTRIES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <LogoMarquee />
      <CTA />
    </>
  );
}
