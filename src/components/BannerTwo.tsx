import React from 'react';
import Statistics from './Statistics';
import SearchBox from './SearchBox';
import PopularSearch from './PopularSearch';

const BannerTwo: React.FC = () => {
  return (
    <section className="banner-two position-relative z-index-1 overflow-hidden">
      <img src="assets/images/gradients/banner-two-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/gradients/banner-two-gradient-dark.png" alt="" className="bg--gradient dark-version" />
      <img src="assets/images/shapes/element-moon3.png" alt="" className="element one" />
      <img src="assets/images/shapes/element-moon2.png" alt="" className="element two" />
      <img src="assets/images/shapes/element-moon1.png" alt="" className="element three" />

      <div className="container container-full">
        <div className="row gy-sm-5 gy-4 align-items-center">

          <div className="col-xl-3 col-sm-6 order-xl-0 order-2">
            <div className="position-relative z-index-1">
              <img src="assets/images/shapes/dots-sm.png" alt="" className="dotted-img d-xl-block d-none white-version" />
              <img src="assets/images/shapes/dots-sm-white.png" alt="" className="dotted-img d-xl-block d-none dark-version" />
              <div className="statistics-wrapper">
                <Statistics amount="85,000+" text="Active Members" />
                <Statistics amount="5+ Million" text="Total Download" />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="banner-two__content">
              <h1 className="banner-two__title text-center mb-3">858,990+ curated assets for download</h1>
              <p className="banner-two__desc text-center">Lorem ipsum dolor sit amet consectetur. Arcu vestibulum dictumst fermentum rhoncus. Velit dui a lorem in sagittis nisl lectus diam.</p>
              <SearchBox />
              <PopularSearch />
            </div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="position-relative z-index-1">
              <img src="assets/images/shapes/dots-sm.png" alt="" className="dotted-img d-xl-block d-none white-version" />
              <img src="assets/images/shapes/dots-sm-white.png" alt="" className="dotted-img d-xl-block d-none dark-version" />
              <div className="statistics-wrapper style-right">
                <Statistics amount="35k+" text="Themes and Plugin" />
                <Statistics amount="24/7" text="Customer Support" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
