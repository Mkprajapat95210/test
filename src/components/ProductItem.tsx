import React from 'react';

interface ProductItemProps {
  imageSrc: string;
  title: string;
  author: string;
  authorProfileLink: string;
  price: string;
  prevPrice?: string;
  sales: string;
  detailsLink: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  title,
  author,
  authorProfileLink,
  price,
  prevPrice,
  sales,
  detailsLink,
}) => {
  return (
    <div className="product-item section-bg">
      <div className="product-item__thumb d-flex">
        <a href={detailsLink} className="link w-100">
          <img src={imageSrc} alt="" className="cover-img" />
        </a>
        <button type="button" className="product-item__wishlist">
          <i className="fas fa-heart"></i>
        </button>
      </div>

      <div className="product-item__content">
        <h6 className="product-item__title">
          <a href={detailsLink} className="link">{title}</a>
        </h6>

        <div className="product-item__info flx-between gap-2">
          <span className="product-item__author">
            by <a href={authorProfileLink} className="link hover-text-decoration-underline">{author}</a>
          </span>
          <div className="flx-align gap-2">
            <h6 className="product-item__price mb-0">{price}</h6>
            {prevPrice && (
              <span className="product-item__prevPrice text-decoration-line-through">{prevPrice}</span>
            )}
          </div>
        </div>

        <div className="product-item__bottom flx-between gap-2">
          <div>
            <span className="product-item__sales font-14 mb-2">{sales} Sales</span>
            <div className="d-flex align-items-center gap-1">
              <ul className="star-rating">
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
              </ul>
              <span className="star-rating__text text-heading fw-500 font-14"> (16)</span>
            </div>
          </div>
          <a href={detailsLink} className="btn btn-outline-light btn-sm pill">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
