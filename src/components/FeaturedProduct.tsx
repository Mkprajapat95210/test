import React from 'react';
import ProductItem from './ProductItem';

const FeaturedProduct: React.FC = () => {
  return (
    <section className="featured-product padding-y-120 position-relative z-index-1">
      <img src="assets/images/shapes/line-bg.png" alt="" className="line-bg position-absolute top-0 start-0 w-100 h-100 z-index--1" />
      <div className="container container-two">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Featured Products</h3>
                <p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
              </div>
              <a href="all-product.html" className="btn btn-main btn-lg fw-300">
                View All Items
              </a>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="card-wrapper">
              <div className="row gy-4">
                <div className="col-sm-6">
                  <ProductItem
                    imageSrc="assets/images/thumbs/product-img1.png"
                    title="SaaS dashboard digital products Title here"
                    author="themepix"
                    price="$120"
                    prevPrice="$259"
                    sales="1200"
                    rating={5}
                    reviewCount={16}
                  />
                </div>
                <div className="col-sm-6">
                  <ProductItem
                    imageSrc="assets/images/thumbs/product-img2.png"
                    title="SaaS dashboard digital products Title here"
                    author="themepix"
                    price="$129"
                    prevPrice="$236"
                    sales="100"
                    rating={5}
                    reviewCount={16}
                  />
                </div>
                <div className="col-sm-6">
                  <ProductItem
                    imageSrc="assets/images/thumbs/product-img3.png"
                    title="SaaS dashboard digital products Title here"
                    author="themepix"
                    price="$79"
                    prevPrice="$99"
                    sales="900"
                    rating={5}
                    reviewCount={16}
                  />
                </div>
                <div className="col-sm-6">
                  <ProductItem
                    imageSrc="assets/images/thumbs/product-img4.png"
                    title="SaaS dashboard digital products Title here"
                    author="themepix"
                    price="$59"
                    prevPrice="$129"
                    sales="1225"
                    rating={5}
                    reviewCount={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;