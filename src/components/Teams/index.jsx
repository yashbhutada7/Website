import React from "react";
import styles from "./index.module.css";
import Carousel from "@/components/ClientCarousel";

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

const Teams = () => {
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
    <div className={styles.teamsWrapper}>
      <div className="container">
        <h2 className={styles.header}>Meet Our Professionals</h2>
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customDot={<CustomDot />}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          responsive={responsive}
          showDots={true}
          customTransition="all 3"
          className={styles.sliderWrapper}
        >
          <div className={styles.mainWrapper}>
            <div className={styles.imageWrap}>
              <img
                src="/images/Yash.jpg"
                alt="Yash Bhutada"
                height={300}
                width={125}
                className={styles.logoImages}
              />
              <h4 className={styles.title}>Yash Bhutada (CEO)</h4>
            </div>
            <p className={styles.description}>
              <strong>
                A Visionary CEO Crafting Financial Success with Precision and
                Passion
              </strong>
              <br />
              Yash isn't your typical finance professional; he is a visionary
              strategist, sculpting robust financial landscapes for over six
              years with a passionate dedication to excellence. His journey
              began with academic brilliance, earning him the prestigious
              Chartered Accountancy title in 2019 and a Bachelor's degree in
              Commerce with honors in 2018. Since then, Yash has been on a
              relentless pursuit of financial mastery, leaving an enduring mark
              on the industries he engages with. His expertise spans the entire
              financial spectrum, showcasing an adept understanding of
              accounting principles. His commitment to transparency and accuracy
              ensures thorough record-keeping, building trust and confidence
              among stakeholders. Embracing the transformative power of
              technology, the implementation of advanced software solutions, and
              data analytics tools. He automates workflows, builds customized
              systems, and leverages data visualization to optimize processes,
              minimize errors, and extract actionable insights.
            </p>
          </div>
          <div className={styles.mainWrapper}>
            <div className={styles.imageWrap}>
              <img
                src="/images/Sumit.jpg"
                alt="Sumit Bhutada"
                height={300}
                width={125}
                className={styles.logoImages}
              />
              <h4 className={styles.title}>Sumit Bhutada (Fractional CFO)</h4>
            </div>
            <p className={styles.description}>
              <strong>
                Unveiling the Financial Architect Behind Our Success
              </strong>
              <br />
              Sumit is driven by the desire to use his knowledge and abilities
              to the fullest in a stimulating, demanding, and learning-focused
              atmosphere. He is also dedicated to ongoing professional growth.
              His pursuits center on enhancing corporate skills via
              self-assurance, investigation, and an insatiable curiosity. He is
              the cornerstone of financial leadership at Grandeur Advisors LLP
              and is renowned for his diverse expertise and unwavering financial
              acumen. His experience in leading strategic financial initiatives
              and promoting excellence at every turn, spanning a variety of
              industries, embodies an extraordinary track record. He leads a
              dynamic team specializing in consulting in finance, taxation, and
              audit. His tenure since January 2014 has been instrumental in
              offering comprehensive financial guidance and solutions, fostering
              an environment grounded in financial excellence and compliance.{" "}
            </p>
          </div>
          <div className={styles.mainWrapper}>
            <div className={styles.imageWrap}>
              <img
                src="/images/Chetan.jpg"
                alt="Chetan Bhutada"
                height={300}
                width={125}
                className={styles.logoImages}
              />
              <h4 className={styles.title}>Chetan Bhutada (Fractional CFO)</h4>
            </div>
            <p className={styles.description}>
              Chetan Bhutada is not just a financial leader; he is a
              transformative force within the industry. His passion for
              collaborative growth, unwavering commitment to innovation, and
              dedication to professional excellence make him an invaluable asset
              to any organization trying to achieve sustainable success while
              navigating the complexities of the financial landscape. He is an
              experienced professional skilled in the full range of financial
              functions, from organizing the completion of year-end financial
              statements to painstakingly managing statutory books of accounts.
              Renowned for having a keen analytical mind, carefully examining,
              resolving inconsistencies, and guaranteeing compliance with IND AS
              and local GAAP standards, promoting reporting transparency for
              internal and external stakeholders. Our CFO's experience covers a
              wide range of domains, from managing financial closures and
              startup phases of businesses to providing comprehensive coverage
              across all operational facets.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Teams;
