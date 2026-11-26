import React from "react";
import styles from "./index.module.css";

export function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "34c61b4d-b311-419f-acdd-b5826b15ef8c",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      document.getElementById("form").reset();
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
            name="email"
            required
            placeholder="email@example.com"
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
