import React from 'react';
import ProductItem from './ProductItem';
import SectionHeading from './SectionHeading';

const sellingProductsData = [
  {
    imageSrc: 'assets/images/thumbs/product-img12.png',
    title: 'Title here digital products new marketplace theme',
    author: 'themepix',
    price: '$56',
    prevPrice: '$65',
    sales: '1230',
    reviewCount: 5,
    liveDemoLink: 'product-details.html'
  },
  {
    imageSrc: 'assets/images/thumbs/product-img13.png',
    title: 'Title here digital products new marketplace theme',
    author: 'themepix',
    price: '$32',
    prevPrice: '$40',
    sales: '1230',
    reviewCount: 5,
    liveDemoLink: 'product-details.html'
  },
  {
    imageSrc: 'assets/images/thumbs/product-img14.png',
    title: 'Title here digital products new marketplace theme',
    author: 'themepix',
    price: '$90',
    prevPrice: '$120',
    sales: '1230',
    reviewCount: 5,
    liveDemoLink: 'product-details.html'
  },
  {
    imageSrc: 'assets/images/thumbs/product-img13.png',
    title: 'Title here digital products new marketplace theme',
    author: 'themepix',
    price: '$56',
    prevPrice: '$54',
    sales: '1230',
    reviewCount: 5,
    liveDemoLink: 'product-details.html'
  }
];

const SellingProducts: React.FC = () => {
  return (
    <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/gradients/selling-gradient.png" alt="" className="bg--gradient" />
      <img src="assets/images/shapes/element2.png" alt="" className="element one" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />
      <img src="assets/images/shapes/curve-pattern1.png" alt="" className="position-absolute start-0 top-0 z-index--1" />
      <img src="assets/images/shapes/curve-pattern2.png" alt="" className="position-absolute end-0 top-0 z-index--1" />

      <div className="container container-two">
        <SectionHeading
          title="Weekly Best selling Products"
          desc="Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists."
          styleClass="style-left style-white flx-between max-w-unset gap-4"
        >
          <a href="all-product.html" className="btn btn-main btn-lg pill fw-300">
            View All Items
          </a>
        </SectionHeading>

        <div className="selling-product-slider">
          {sellingProductsData.map((product, index) => (
            <ProductItem key={index} {...product} boxShadow={true} overlayNone={true} showDownloadBtn={true} maxHUnset={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingProducts;
