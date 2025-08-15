import React from 'react';
import SectionHeading from './SectionHeading';
import CommonTab from './CommonTab';
import PopularItemCard from './PopularItemCard';

const PopularItemsSection: React.FC = () => {
  const popularItemsData = [
    { imgSrc: 'assets/images/thumbs/popular-item1.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'SaaS for Finance Management' },
    { imgSrc: 'assets/images/thumbs/popular-item2.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'zirtrust - Fintech SaaS Ui kit' },
    { imgSrc: 'assets/images/thumbs/popular-item3.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'yolla - CRM Software Landingpage' },
    { imgSrc: 'assets/images/thumbs/popular-item4.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'Business point - HR UX-UI design Template' },
    { imgSrc: 'assets/images/thumbs/popular-item5.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'Wonder AI Landing Page Template' },
    { imgSrc: 'assets/images/thumbs/popular-item6.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'turing UI Kit: AI Smart Healthcare App' },
    { imgSrc: 'assets/images/thumbs/popular-item7.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'FinTrust - Fintech SAAS Ui kit' },
    { imgSrc: 'assets/images/thumbs/popular-item2.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'SaaS for Finance Management' },
    { imgSrc: 'assets/images/thumbs/popular-item9.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'SaaS for Finance Management' },
    { imgSrc: 'assets/images/thumbs/popular-item10.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'SaaS for Finance Management' },
    { imgSrc: 'assets/images/thumbs/popular-item11.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'SaaS for Finance Management' },
    { imgSrc: 'assets/images/thumbs/popular-item11.png', sales: '100', ratings: 5, ratingCount: 16, author: 'themepix', title: 'amiz - SaaS customer Website Template' }
  ];

  const renderTabPane = (id: string) => (
    <div className="tab-pane fade show active" id={id} role="tabpanel" aria-labelledby={`${id}-tab`} tabIndex={0}>
      <div className="row gy-4">
        {popularItemsData.map((item, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
            <PopularItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="popular-item-card-section padding-y-120 overflow-hidden">
      <img src="assets/images/shapes/brush.png" alt="" className="element-brush" />
      <div className="container container-two">
        <SectionHeading title="Popular Items" />
        <CommonTab id="pills-tab-popular">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-all-two-tab" data-bs-toggle="pill" data-bs-target="#pills-all-two" type="button" role="tab" aria-controls="pills-all-two" aria-selected="true">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="WordPress">
                <img src="assets/images/thumbs/tech-icon1.png" alt="" className="white-version" />
                <img src="assets/images/thumbs/tech-icon-white1.png" alt="" className="dark-version" />
                <span className="text">WordPress</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-laravel-tab" data-bs-toggle="pill" data-bs-target="#pills-laravel" type="button" role="tab" aria-controls="pills-laravel" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="laravel">
                <img src="assets/images/thumbs/tech-icon2.png" alt="" />
                <span className="text">laravel</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-popular-php-tab" data-bs-toggle="pill" data-bs-target="#pills-popular-php" type="button" role="tab" aria-controls="pills-popular-php" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="PHP">
                <img src="assets/images/thumbs/tech-icon3.png" alt="" className="white-version" />
                <img src="assets/images/thumbs/tech-icon-white3.png" alt="" className="dark-version" />
                <span className="text">PHP</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-HTML-tab" data-bs-toggle="pill" data-bs-target="#pills-HTML" type="button" role="tab" aria-controls="pills-HTML" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="HTML">
                <img src="assets/images/thumbs/tech-icon4.png" alt="" />
                <span className="text">HTML</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-Sketch-tab" data-bs-toggle="pill" data-bs-target="#pills-Sketch" type="button" role="tab" aria-controls="pills-Sketch" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sketch">
                <img src="assets/images/thumbs/tech-icon5.png" alt="" />
                <span className="text">Sketch</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-Figma-tab" data-bs-toggle="pill" data-bs-target="#pills-Figma" type="button" role="tab" aria-controls="pills-Figma" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Figma">
                <img src="assets/images/thumbs/tech-icon6.png" alt="" />
                <span className="text">Figma</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-bootstrap-tab" data-bs-toggle="pill" data-bs-target="#pills-bootstrap" type="button" role="tab" aria-controls="pills-bootstrap" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bootstrap">
                <img src="assets/images/thumbs/tech-icon7.png" alt="" />
                <span className="text">Bootstrap</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-tailwind-tab" data-bs-toggle="pill" data-bs-target="#pills-tailwind" type="button" role="tab" aria-controls="pills-tailwind" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tailwind">
                <img src="assets/images/thumbs/tech-icon8.png" alt="" />
                <span className="text">Tailwind</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-react-tab" data-bs-toggle="pill" data-bs-target="#pills-react" type="button" role="tab" aria-controls="pills-react" aria-selected="false">
              <span className="product-category-list__item flx-align gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="React">
                <img src="assets/images/thumbs/tech-icon9.png" alt="" />
                <span className="text">React</span>
              </span>
            </button>
          </li>
        </CommonTab>
        <div className="tab-content" id="pills-tab-popularContent">
          {renderTabPane('pills-all-two')}
          {renderTabPane('pills-laravel')}
          {renderTabPane('pills-popular-php')}
          {renderTabPane('pills-HTML')}
          {renderTabPane('pills-Sketch')}
          {renderTabPane('pills-Figma')}
          {renderTabPane('pills-bootstrap')}
          {renderTabPane('pills-tailwind')}
          {renderTabPane('pills-react')}
        </div>
      </div>
    </section>
  );
};

export default PopularItemsSection;
