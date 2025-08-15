import React from 'react';
import { ProductListGrid } from './ProductListGrid';
import { CommonPagination } from './CommonPagination';

const dummyProducts = [
  { imgSrc: "assets/images/thumbs/product-img1.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$120", prevPrice: "$259", sales: "1200" },
  { imgSrc: "assets/images/thumbs/product-img2.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$236", sales: "100" },
  { imgSrc: "assets/images/thumbs/product-img3.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "900" },
  { imgSrc: "assets/images/thumbs/product-img4.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$59", prevPrice: "$129", sales: "1225" },
  { imgSrc: "assets/images/thumbs/product-img5.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$99", prevPrice: "$129", sales: "1300" },
  { imgSrc: "assets/images/thumbs/product-img6.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$256", sales: "200" },
  { imgSrc: "assets/images/thumbs/product-img7.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$259", sales: "500" },
  { imgSrc: "assets/images/thumbs/product-img8.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "2100" },
  { imgSrc: "assets/images/thumbs/product-img9.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "2100" },
  { imgSrc: "assets/images/thumbs/product-img10.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "2100" },
  { imgSrc: "assets/images/thumbs/product-img11.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "2100" },
  { imgSrc: "assets/images/thumbs/product-img12.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "2100" },
];

export const PortfolioTab: React.FC = () => (
  <>
    <div className="filter-tab gap-3 flx-between mb-5">
      <div className="list-grid d-flex align-items-center gap-2">
        <button className="list-grid__button list-button d-sm-flex d-none text-body"><i className="las la-list"></i></button>
        <button className="list-grid__button grid-button d-sm-flex d-none active text-body"><i className="las la-border-all"></i></button>
      </div>
      <ul className="nav common-tab nav-pills mb-0 gap-lg-2 gap-1 me-auto" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-product-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-product" aria-selected="true">All Item</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-bestMatch-tab" data-bs-toggle="pill" data-bs-target="#pills-bestMatch" type="button" role="tab" aria-controls="pills-bestMatch" aria-selected="false"> Best Match</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-bestRating-tab" data-bs-toggle="pill" data-bs-target="#pills-bestRating" type="button" role="tab" aria-controls="pills-bestRating" aria-selected="false">Best Rating</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected="false">Site Template</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-bestOffers-tab" data-bs-toggle="pill" data-bs-target="#pills-bestOffers" type="button" role="tab" aria-controls="pills-bestOffers" aria-selected="false">Best Offers</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-bestSelling-tab" data-bs-toggle="pill" data-bs-target="#pills-bestSelling" type="button" role="tab" aria-controls="pills-bestSelling" aria-selected="false">Best Selling</button>
        </li>
      </ul>
      <form action="#" className="search-box style-three">
        <input type="text" className="common-input pill" placeholder="Search..." />
        <button type="submit" className="btn btn-main btn-icon icon border-0">
          <img src="assets/images/icons/search.svg" alt="" />
        </button>
      </form>
    </div>
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab" tabIndex={0}>
        <ProductListGrid data={dummyProducts} />
        <CommonPagination />
      </div>
      <div className="tab-pane fade" id="pills-bestMatch" role="tabpanel" aria-labelledby="pills-bestMatch-tab" tabIndex={0}>
        <ProductListGrid data={dummyProducts} />
        <CommonPagination />
      </div>
      <div className="tab-pane fade" id="pills-bestRating" role="tabpanel" aria-labelledby="pills-bestRating-tab" tabIndex={0}>
        <ProductListGrid data={dummyProducts} />
        <CommonPagination />
      </div>
      <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab" tabIndex={0}>
        <ProductListGrid data={dummyProducts} />
        <CommonPagination />
      </div>
      <div className="tab-pane fade" id="pills-bestOffers" role="tabpanel" aria-labelledby="pills-bestOffers-tab" tabIndex={0}>
        <ProductListGrid data={dummyProducts} />
        <CommonPagination />
      </div>
      <div className="tab-pane fade" id="pills-bestSelling" role="tabpanel" aria-labelledby="pills-bestSelling-tab" tabIndex={0}>
        <ProductListGrid data={dummyProducts} />
        <CommonPagination />
      </div>
    </div>
  </>
);
