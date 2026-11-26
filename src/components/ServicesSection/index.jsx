import React from "react";
import styles from "./index.module.css";

const Services = () => {
  return (
    <div className={styles.servicesWrap}>
      <div className="container">
        <h2 className={styles.header}>Services We Provide</h2>
        <div className={styles.features}>
          <p>Virtual Bookkeeping and Accounting Outsourcing</p>
          <p>Management Reports</p>
          <p>Month-end close</p>
          <p>AP management</p>
          <p>AR Management</p>
          <p>Reconciliation of Balance sheet items</p>
          <p>Inventory Management</p>
          <p>Payroll Processing</p>
          <p>Cloud Based Solution</p>
          <p>Migration and implementation of Accounting system</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
