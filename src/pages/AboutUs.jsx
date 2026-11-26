import React from "react";
import Teams from "@/components/Teams";
import styles from "@/styles/About.module.css";
import { useSEO } from "@/hooks/useSEO";

const AboutUs = () => {
  useSEO();

  return (
    <div className={styles.aboutUsWrap}>
      <h1 className={styles.header}>About Us</h1>
      <p className={styles.description}>
        Welcome to Grandeur Advisors LLP, where financial expertise meets
        personalized service. Founded in 2022, we have been serving individuals
        and businesses alike with dedication and integrity. As a leading
        accounting firm, we pride ourselves on delivering exceptional results
        tailored to meet the unique needs of each client.
      </p>
      <p className={styles.description}>
        Our team of seasoned professionals brings a wealth of experience and
        knowledge to every engagement. From tax planning and compliance to
        auditing and advisory services, we offer comprehensive solutions
        designed to help our clients achieve their financial goals and navigate
        today's complex business landscape with confidence.
      </p>
      <p className={styles.description}>
        At Grandeur, we understand that every client is different. That's why we
        take the time to listen and understand your specific objectives, whether
        you're a small business owner, a multinational corporation, or an
        individual seeking personal financial guidance. Our commitment to
        excellence and personalized attention sets us apart and drives our
        success.
      </p>
      <p className={styles.description}>
        Beyond our technical expertise, we are dedicated to building lasting
        relationships based on trust, transparency, and mutual respect. We
        believe in open communication and collaboration, working closely with
        our clients to develop strategies that optimize their financial
        performance and position them for long-term success.
      </p>
      <p className={styles.description}>
        Thank you for considering Grandeur for your accounting needs. We look
        forward to the opportunity to serve you and exceed your expectations.
        Contact us today to learn more about how we can help you achieve
        financial success.
      </p>
      <Teams />
    </div>
  );
};

export default AboutUs;
