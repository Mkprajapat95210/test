import React from 'react';
import StatisticsThree from './StatisticsThree';
import HappyClientThree from './HappyClientThree';

const BannerThree: React.FC = () => {
  return (
    <section className="banner-three">
      <div className="container container-full">
        <div className="banner-three__wrapper section-bg position-relative z-index-1">
          <img src="assets/images/gradients/banner-gradient-two.png" alt="" className="bg--gradient" />
          <img src="assets/images/shapes/line-curve1.png" alt="" className="line-curve one" />
          <img src="assets/images/shapes/line-curve2.png" alt="" className="line-curve two" />
          <img src="assets/images/shapes/element2.png" alt="" className="element two" />
          <div className="banner-three__inner">
            <div className="banner-three-content">
              <span className="banner-three-content__subtitle text-main fw-700 font-heading font-20">Welcome to Our Agency</span>
              <h1 className="banner-three-content__title my-3 text-capitalize">Full range of Digital Agency services</h1>
              <p className="banner-three-content__desc font-18">Lorem ipsum dolor sit amet consectetur. Arcu vestibulum dictumst fermentum rhoncus. Velit dual in sagittis.</p>
              <div className="buttons flx-align gap-sm-3 gap-2 mt-40">
                <a href="all-product.html" className="btn btn-black btn-lg-icon">
                  <span className="d-sm-flex d-none me-1">Our best </span> Services
                  <span className="icon-right icon">
                    <img src="assets/images/icons/arrow-right-white.svg" alt="" />
                  </span>
                </a>
                <a href="all-product.html" className="btn btn-outline-black btn-lg fw-500">
                  About Us
                </a>
              </div>
              <StatisticsThree />
            </div>
            <div className="banner-three__right">
              <div className="banner-three-thumb position-relative">
                <img src="assets/images/thumbs/banner-thumb.png" alt="" />
                <div className="statistics-three-box bg-white text-center">
                  <h5 className="statistics-three-box__amount text-heading">19k</h5>
                  <span className="statistics-three-box__text text-heading font-14">Themes &amp; Plugins</span>
                </div>
                <HappyClientThree />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;