import React from 'react';

export const FeaturedProductCard: React.FC = () => (
  <div className="featured-item d-flex align-items-center gap-4">
    <div className="featured-item__thumb">
      <a href="product-details.html" className="link"><img src="assets/images/thumbs/featured-item-img.png" alt="" /></a>
    </div>
    <div className="featured-item__content">
      <h6 className="featured-item__title mb-2"><a href="product-details.html" className="link">Personal portfolio one page template</a></h6>
      <span className="featured-item__text mb-2 text-heading fw-500">250 Purchases</span>
      <div className="d-flex align-items-center gap-1">
        <ul className="star-rating">
          <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
        </ul>
        <span className="star-rating__text text-body font-14"> 5.0 </span>
        <span className="star-rating__text text-body font-14"> (116)</span>
      </div>
    </div>
  </div>
);
