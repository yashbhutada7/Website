import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.FooterWrap}>
      <div className="container">
        <div className={styles.linkWrap}>
          <div className={styles.addressSection}>
            <p>
              <img
                src="/images/email.png"
                className={styles.icon}
                height={20}
                width={20}
                alt=""
              />
              <a href="mailto: Info@grandeuradvisory.com">
                Info@grandeuradvisory.com
              </a>
            </p>
            <p>
              <img
                src="/images/phone.png"
                className={styles.icon}
                height={20}
                width={20}
                alt=""
              />
              <a
                href="tel: +91-9209586140"
                className={styles.contactLink}
                id="contact"
              >
                +91-9209586140
              </a>
            </p>
          </div>
          <div className={styles.socialLogo}>
            <a
              href="https://www.instagram.com/grandeuradvisorsllp/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Instagram.svg"
                alt="Instagram"
                width={35}
                height={35}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/grandeur-advisors-llp"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/LinkedIn.svg"
                alt="LinkedIn"
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
