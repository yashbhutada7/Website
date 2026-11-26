import React from "react";
import styles from "./index.module.css";

const HomeHero = () => {
  return (
    <div className={styles.homeHero}>
      <div className={`container ${styles.homeContainer}`}>
        <div className={styles.leftWrap}>
          <h1 className={styles.header}>
            Empowering Financial Success: Bookkeeping, Finance and Management
            Reporting Solutions
          </h1>
        </div>
        <div className={styles.rightWrap}>
          <img src="/images/heroImage.svg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
