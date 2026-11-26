import React from "react";
import styles from "./index.module.css";
import Carousel from "react-multi-carousel";

const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <li
      className={`${active ? "active" : "inactive"}`}
      onClick={() => onClick()}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
      tabIndex="0"
    >
      <span className="cricleDots"></span>
    </li>
  );
};

const ToolsWeUse = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 768 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={styles.toolsWeUse}>
      <div className="container">
        <h1 className={styles.header}>Tools We Use</h1>
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customDot={<CustomDot />}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive}
          showDots={true}
          customTransition="all 3"
          className={styles.sliderWrapper}
        >
          <div>
            <h1 className={styles.title}>Accounting Software</h1>
            <div className={styles.logoWrap}>
              <img
                src="/images/tools/Oracle_NetSuite.png"
                alt="NetSuite logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/QuickBook.svg"
                alt="QuickBook logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/Xero.svg"
                alt="Xero logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/zoho.svg"
                alt="zoho logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
            </div>
          </div>
          <div>
            <h1 className={styles.title}>AP management software</h1>
            <div className={styles.logoWrap}>
              <img
                src="/images/tools/tipalti.svg"
                alt="tipalti logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/bill.svg"
                alt="Bill logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/MineralTree.svg"
                alt="MineralTree logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/Lightyear.png"
                alt="zoho logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
            </div>
          </div>
          <div>
            <h1 className={styles.title}>Inventory management software</h1>
            <div className={styles.logoWrap}>
              <img
                src="/images/tools/Vend.svg"
                alt="Vend logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
              <img
                src="/images/tools/odoo.svg"
                alt="odoo logo"
                height={14}
                width={202}
                className={styles.logoImages}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ToolsWeUse;
