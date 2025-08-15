import React from 'react';

interface ProductCardProps {
  imgSrc: string;
  title: string;
  author: string;
  price: string;
  prevPrice: string;
  sales: string;
  ratings: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, title, author, price, prevPrice, sales, ratings }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<li key={i} className="star-rating__item font-16"><i className="fas fa-star"></i></li>);
    }
    return stars;
  };

  return (
    <div className="product-item shadow-sm overlay-none">
      <div className="product-item__thumb d-flex max-h-unset">
        <a href="product-details.html" className="link w-100">
          <img src={imgSrc} alt="" className="cover-img" />
        </a>
      </div>
      <div className="product-item__content">
        <h6 className="product-item__title">
          <a href="product-details.html" className="link">{title}</a>
        </h6>
        <div className="product-item__info flx-between gap-2">
          <span className="product-item__author">
            by
            <a href="profile.html" className="link hover-text-decoration-underline"> {author}</a>
          </span>
          <div className="flx-align gap-2">
            <h6 className="product-item__price mb-0">{price}</h6>
            <span className="product-item__prevPrice text-decoration-line-through">{prevPrice}</span>
          </div>
        </div>
        <div className="product-item__bottom flx-between gap-2">
          <div>
            <span className="product-item__sales font-16 mb-2">{sales} Sales</span>
            <ul className="star-rating gap-2">
              {renderStars()}
            </ul>
          </div>
          <div className="flx-align gap-2">
            <a href="product-details.html" className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
              <span className="icon">
                <img src="assets/images/icons/download.svg" alt="" className="white-version" />
                <img src="assets/images/icons/download-white.svg" alt="" className="dark-version" />
              </span>
            </a>
            <a href="product-details.html" className="btn btn-outline-light pill">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
