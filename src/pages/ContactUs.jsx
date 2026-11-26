import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icons";
import { BookButton } from "@/components/Layout";
import { TimeZones } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { FIRM } from "@/content/site";

function ContactForm() {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "34c61b4d-b311-419f-acdd-b5826b15ef8c",
          name: form.name.value,
          email: form.email.value,
          company: form.company.value,
          message: form.message.value,
        }),
      });
      const result = await response.json();
      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card form" id="form">
      <h2 style={{ fontSize: 24, marginBottom: 0 }}>Send us a message</h2>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input type="text" id="company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" required placeholder="For example: we need help with AP and month-end close in NetSuite." />
      </div>
      <div aria-live="polite">
        {status === "sent" && <p className="form-status ok">Thank you! Your message has been sent. We will get back to you soon.</p>}
        {status === "error" && (
          <p className="form-status err">Sorry, your message could not be sent. Please try again or contact us by email or phone.</p>
        )}
      </div>
      <button type="submit" className="btn btn-dark" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function ContactUs() {
  useSEO();
  return (
    <>
      <section className="page-hero simple">
        <div className="container">
          <div>
            <ol className="crumbs" aria-label="Breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">Contact us</li>
            </ol>
            <h1>Contact us</h1>
            <p className="lead">
              The quickest way to start is a free 30-minute consultation. Prefer to write? Send a message and we'll reply by
              email.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <BookButton />
            <div style={{ marginTop: 28 }}>
              <div className="contact-item">
                <span className="icon">
                  <Icon name="mail" />
                </span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">
                  <Icon name="phone" />
                </span>
                <div>
                  <small>Phone</small>
                  <a href={`tel:${FIRM.phone}`}>{FIRM.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">
                  <Icon name="linkedin" />
                </span>
                <div>
                  <small>LinkedIn</small>
                  <a href={FIRM.linkedin} target="_blank" rel="noopener noreferrer">
                    Grandeur Advisors LLP
                  </a>
                </div>
              </div>
            </div>
            <h2 style={{ fontSize: 22, marginTop: 36 }}>Our working hours</h2>
            <TimeZones />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
