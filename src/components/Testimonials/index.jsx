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

const Testimonials = () => {
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
    <div className={styles.Testimonials}>
      <div className="container">
        <h2 className={styles.header}>Client Success Stories</h2>
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customDot={<CustomDot />}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={15000}
          responsive={responsive}
          showDots={true}
          customTransition="all 10"
          className={styles.sliderWrapper}
        >
          <div className={styles.TestimonialWrap}>
            <img
              src="/images/Kyle_Binder.jpg"
              alt="Kyle Binder"
              height={300}
              width={300}
            />
            <div>
              <p className={styles.description}>
                Yash has done excellent job of handling the majority of
                accounting needs for two scaling companies with multi-currency &
                cross border e-commerce marketplace transactions. We have
                experienced significant growth and Yash has done excellent job
                at keeping up with the growth while creating and maintaining a
                systems which have helped our financial visibility and accuracy
                tremendously. It wasn't an easy task to find someone sufficient
                for this role and we'd previously hired multiple candidates who
                were not able to fulfill the responsibility of the role. Highly
                recommend Yash for accounting needs, especially for eCom
                company.
              </p>
              <p className={styles.clientName}>
                Kyle Binder, <br />
                Founder of PetLovers
                <br /> USA.
              </p>
            </div>
          </div>
          <div className={styles.TestimonialWrap}>
            <img
              src="/images/Dana_Harper.jpg"
              alt="Dana M. Harper"
              height={300}
              width={300}
            />
            <div>
              <p className={styles.description}>
                "Yash is an excellent team player, collaborator, and has a
                positive can-do attitude. It has been a pleasure to work with
                him on a shared multinational client as we elevate their
                accounting operations and speed to close. He is always willing
                to challenge my thinking while complex variables. He is highly
                skilled across the suite of cloud-based accounting solutions and
                their apps. I look forward to our continued and future
                opportunities to work together."
              </p>
              <p className={styles.clientName}>
                Dana M. Harper <br />
                Fractional CFO
                <br /> California, USA.
              </p>
            </div>
          </div>
          <div className={styles.TestimonialWrap}>
            <img
              src="/images/Michelle_George.jpg"
              alt="Michelle George"
              height={300}
              width={300}
            />
            <div>
              <p className={styles.description}>
                "I had the pleasure of working with team Grandeur, an
                exceptional accountant, and I couldn't be happier with the
                experience. Their attention to detail and expertise in financial
                matters made managing my accounts a breeze. Not only did they
                keep everything organized and accurate on Quickbooks, but they
                also provided valuable insights to improve my financial
                processes. Working with them was a game-changer for our
                business, and I highly recommend team Grandeur's services to
                anyone in need of a reliable and skilled accountant."
              </p>
              <p className={styles.clientName}>
                Michelle George <br />
                Freelancer, Executive Assistance.
              </p>
            </div>
          </div>
          <div className={styles.TestimonialWrap}>
            <img
              src="/images/Marie_Kotter.jpg"
              alt="Marie Kotter"
              height={300}
              width={300}
            />
            <div>
              <p className={styles.description}>
                "It was a pleasure to work with Yash. Over the period of several
                months, he always had a positive, can do attitude despite
                numerous hurdles along the way. He worked as part of the team
                and was always willing to roll up his sleeves to get stuck in.
                From ledger accounting to reconciliations to controls, his wide
                range of experience is evident. I hope to work with him again
                soon!"
              </p>
              <p className={styles.clientName}>
                Marie Kotter
                <br />
                Accounting Manager
                <br />
                Wimborne, England.
              </p>
            </div>
          </div>
          <div className={styles.TestimonialWrap}>
            <img src="/images/user.png" alt="" height={300} width={300} />
            <div>
              <p className={styles.description}>
                "Yash Bhutada and his team have done excellent jobs on our
                recent Accounts Receivable, Accounts Payable, and Fixed Assets
                related projects with our NetSuite implementation. Their
                expertise, professionalism, and dedication truly set a high
                standard for quality work in the field of accounting. It has
                truly been a pleasure working with them."
              </p>
              <p className={styles.clientName}>
                Tammy Phan <br />
                CFO, HTS Poly.
              </p>
            </div>
          </div>
          <div className={styles.TestimonialWrap}>
            <img src="/images/user.png" alt="" height={300} width={300} />
            <div>
              <p className={styles.description}>
                "Collaborating with Yash and his team has drastically improved
                our company's bookkeeping and accounting. Their expertise in
                optimizing Netsuite accounting processes has significantly
                enhanced our efficiency and accuracy. With their guidance, we
                seamlessly streamlined our workflows, saving valuable time and
                resources."
                <br />
                "Their dedication to month-end reconciliation is exceptional.
                Yash has consistently ensured that our financials are impeccably
                reconciled, keeping our team on track and poised for success.
                Their meticulous approach to detail and commitment to deadlines
                have been instrumental in maintaining our financial health.
                We're grateful for their partnership and the positive impact
                they've had on our business."
              </p>
              <p className={styles.clientName}>
                Sharleen Salim, <br />
                General Manager
                <br />
                Forestindo, Inc
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
