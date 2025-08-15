import React from 'react';
import SectionHeading from './SectionHeading';

const TopPerformance: React.FC = () => {
  return (
    <section className="top-performance overflow-hidden padding-y-120 position-relative z-index-1">
      <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version" />
      <img src="assets/images/shapes/spider-net-white.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version" />
      <img src="assets/images/shapes/pattern-curve-four.png" alt="" className="position-absolute top-0 start-0 z-index--1" />
      <img src="assets/images/shapes/element2.png" alt="" className="element two" />

      <div className="container container-two">
        <div className="row gy-4 align-items-center flex-wrap-reverse">
          <div className="col-lg-7 pe-lg-5">
            <div className="position-relative">
              <div className="circle style-two static-circle">
                <div className="circle__badge">
                  <img src="assets/images/icons/featured-badge.png" alt="" />
                </div>
                <div className="circle__desc circle__text">
                  <p>
                    Our Top Performance
                  </p>
                </div>
              </div>
              <div className="performance-content">
                <div className="performance-content__item">
                  <span className="performance-content__text font-18">Email Subscription</span>
                  <h4 className="performance-content__count">49,000+</h4>
                </div>
                <div className="performance-content__item">
                  <span className="performance-content__text font-18"> Total Products</span>
                  <h4 className="performance-content__count">45,000+</h4>
                </div>
                <div className="performance-content__item">
                  <span className="performance-content__text font-18"> Total Download</span>
                  <h4 className="performance-content__count">48,000+</h4>
                </div>
                <div className="performance-content__item">
                  <span className="performance-content__text font-18"> Monthly Visitor</span>
                  <h4 className="performance-content__count">65,000+</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-content">
              <SectionHeading
                title="Top Performance"
                desc="Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists."
                styleClass="style-left"
              />
              <a href="register.html" className="btn btn-main btn-lg pill fw-300"> Get Started </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPerformance;
