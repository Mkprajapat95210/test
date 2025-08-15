import React from 'react';

const AboutThree: React.FC = () => {
  return (
    <section className="about-three padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/element1.png" alt="" className="element one" />
      <div className="container container-two">
        <div className="row gy-sm-5 gy-4 flex-wrap-reverse">
          <div className="col-lg-6">
            <div className="about-three-thumb position-relative">
              <img src="assets/images/shapes/dots.png" alt="" className="dotted-img style-three d-sm-block d-none" />
              <div className="about-three-thumb__img one">
                <img src="assets/images/thumbs/about-img1.png" alt="" />
              </div>
              <div className="about-three-thumb__img two text-end">
                <img src="assets/images/thumbs/about-img2.png" alt="" />
              </div>
              <div className="experience-content">
                <span className="experience-content__text fw-700 text-white">25+ Years Experiences</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-three-content">
              <div className="section-heading style-three style-left">
                <span className="section-heading__subtitle section-bg">About us</span>
                <h3 className="section-heading__title">Best services we provide</h3>
                <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
              </div>
              <div className="about-three-content__item-wrapper">
                <div className="about-three-content__item d-flex align-items-start gap-sm-3 gap-2">
                  <span className="about-three-content__icon flx-center flex-shrink-0"><i className="las la-check"></i></span>
                  <div className="flex-grow-1">
                    <h5 className="about-three-content__title mb-3">Hight Quality Services</h5>
                    <p className="about-three-content__desc">Lorem ipsum dolor sit amet consectetur. Lobortis aliquet tincidunt donec turpis nibh nunc dolor feugiat tellus. </p>
                  </div>
                </div>
                <div className="about-three-content__item d-flex align-items-start gap-sm-3 gap-2">
                  <span className="about-three-content__icon flx-center flex-shrink-0"><i className="las la-check"></i></span>
                  <div className="flex-grow-1">
                    <h5 className="about-three-content__title mb-3">Top Tier Business Acquisition</h5>
                    <p className="about-three-content__desc">Lorem ipsum dolor sit amet consectetur. Lobortis aliquet tincidunt donec turpis nibh nunc dolor feugiat tellus. </p>
                  </div>
                </div>
              </div>
              <a href="about-three.html" className="mt-48 btn btn-black btn-lg"> More About Us  </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;