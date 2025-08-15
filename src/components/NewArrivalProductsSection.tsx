import React from 'react';
import SectionHeading from './SectionHeading';
import CommonTab from './CommonTab';
import ArrivalProductCard from './ArrivalProductCard';

const NewArrivalProductsSection: React.FC = () => {
  const arrivalProductsData = [
    { imgSrc: 'assets/images/thumbs/product-img1.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$120', prevPrice: '$259', sales: '1200', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img2.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$129', prevPrice: '$236', sales: '100', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img3.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$79', prevPrice: '$99', sales: '900', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img4.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$59', prevPrice: '$129', sales: '1225', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img5.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$99', prevPrice: '$129', sales: '1300', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img6.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$129', prevPrice: '$256', sales: '200', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img7.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$129', prevPrice: '$259', sales: '500', ratings: 5, ratingCount: 16 },
    { imgSrc: 'assets/images/thumbs/product-img8.png', title: 'SaaS dashboard digital products Title here', author: 'themepix', price: '$79', prevPrice: '$99', sales: '2100', ratings: 5, ratingCount: 16 },
  ];

  const renderTabPane = (id: string) => (
    <div className="tab-pane fade show active" id={id} role="tabpanel" aria-labelledby={`${id}-tab`} tabIndex={0}>
      <div className="row gy-4">
        {arrivalProductsData.map((product, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
            <ArrivalProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
      <img src="assets/images/gradients/product-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/shapes/element2.png" alt="" className="element one" />

      <div className="container container-two">
        <SectionHeading title="New Arrival Products" />

        <CommonTab id="pills-tab">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All Item</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-wordPress-tab" data-bs-toggle="pill" data-bs-target="#pills-wordPress" type="button" role="tab" aria-controls="pills-wordPress" aria-selected="false">wordPress</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">php</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-siteTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-siteTemplate" type="button" role="tab" aria-controls="pills-siteTemplate" aria-selected="false">site Template</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-blogging-tab" data-bs-toggle="pill" data-bs-target="#pills-blogging" type="button" role="tab" aria-controls="pills-blogging" aria-selected="false">blogging</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">marketing</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-plugins-tab" data-bs-toggle="pill" data-bs-target="#pills-plugins" type="button" role="tab" aria-controls="pills-plugins" aria-selected="false">plugins</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-uiTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-uiTemplate" type="button" role="tab" aria-controls="pills-uiTemplate" aria-selected="false">UI Template</button>
          </li>
        </CommonTab>

        <div className="tab-content" id="pills-tabContent">
          {renderTabPane('pills-all')}
          {renderTabPane('pills-wordPress')}
          {renderTabPane('pills-php')}
          {renderTabPane('pills-siteTemplate')}
          {renderTabPane('pills-blogging')}
          {renderTabPane('pills-marketing')}
          {renderTabPane('pills-plugins')}
          {renderTabPane('pills-uiTemplate')}
        </div>

        <div className="text-center mt-64">
          <a href="all-product.html" className="btn btn-main btn-lg pill fw-300">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProductsSection;
