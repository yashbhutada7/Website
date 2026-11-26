import React, { useState } from "react";
import styles from "./index.module.css";

export function Contact() {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "34c61b4d-b311-419f-acdd-b5826b15ef8c",
          name: form.name.value,
          email: form.email.value,
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
    <div className={styles.contactUsWrapper}>
      <h1 className={styles.header}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm} id="form">
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="email@example.com"
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
            className={styles.textarea}
          ></textarea>
        </div>
        <div aria-live="polite">
          {status === "sent" && (
            <p className={`${styles.status} ${styles.success}`}>
              Thank you! Your message has been sent. We will get back to you
              soon.
            </p>
          )}
          {status === "error" && (
            <p className={`${styles.status} ${styles.error}`}>
              Sorry, your message could not be sent. Please try again or
              contact us by email or phone.
            </p>
          )}
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
