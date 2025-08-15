import React from 'react';
import SectionHeading from './SectionHeading';
import ProductItem from './ProductItem';

const featuredProductsData = [
  {
    imageSrc: 'assets/images/thumbs/product-img9.png',
    title: 'SaaS dashboard digital products Title here',
    author: 'themepix',
    price: '$120',
    prevPrice: '$259',
    sales: '1200',
    reviewCount: 16,
    liveDemoLink: 'product-details.html'
  },
  {
    imageSrc: 'assets/images/thumbs/product-img10.png',
    title: 'SaaS dashboard digital products Title here',
    author: 'themepix',
    price: '$129',
    prevPrice: '$236',
    sales: '100',
    reviewCount: 16,
    liveDemoLink: 'product-details.html'
  },
  {
    imageSrc: 'assets/images/thumbs/product-img11.png',
    title: 'SaaS dashboard digital products Title here',
    author: 'themepix',
    price: '$79',
    prevPrice: '$99',
    sales: '900',
    reviewCount: 16,
    liveDemoLink: 'product-details.html'
  },
  {
    imageSrc: 'assets/images/thumbs/product-img4.png',
    title: 'SaaS dashboard digital products Title here',
    author: 'themepix',
    price: '$59',
    prevPrice: '$129',
    sales: '1225',
    reviewCount: 16,
    liveDemoLink: 'product-details.html'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="featured-product padding-y-120 position-relative z-index-1">
      <img src="assets/images/gradients/featured-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version" />
      <img src="assets/images/shapes/spider-net-white.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />

      <div className="container container-two">
        <div className="row gy-4 flex-wrap-reverse align-items-center">
          <div className="col-xl-6">
            <div className="row gy-4 card-wrapper">
              {featuredProductsData.map((product, index) => (
                <div key={index} className="col-sm-6">
                  <ProductItem {...product} boxShadow={true} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-1 d-xl-block d-none"></div>
          <div className="col-xl-5">
            <div className="section-content">
              <SectionHeading
                title="Featured Products"
                desc="Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists."
                styleClass="style-left"
              />
              <a href="all-product.html" className="btn btn-main btn-lg pill fw-300">
                View All Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
