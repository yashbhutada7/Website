import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.mainWrapper}>
            <Link to="/" rel="noopener noreferrer">
              <img
                src="/images/Grandeur-Advisors-Logo.png"
                alt="grandeur advisory logo"
                className={styles.grandeurLogo}
                width={100}
                height={100}
              />
            </Link>
            <div className={styles.menu}>
              <Link to="/about-us">About us</Link>
              <Link to="/contact-us">Enquire now</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
