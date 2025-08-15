import React from 'react';

interface ArrivalProductCardProps {
  imgSrc: string;
  title: string;
  author: string;
  price: string;
  prevPrice: string;
  sales: string;
  ratings: number;
  ratingCount: number;
}

const ArrivalProductCard: React.FC<ArrivalProductCardProps> = ({ imgSrc, title, author, price, prevPrice, sales, ratings, ratingCount }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<li key={i} className="star-rating__item font-11"><i className="fas fa-star"></i></li>);
    }
    return stars;
  };

  return (
    <div className="product-item ">
      <div className="product-item__thumb d-flex">
        <a href="product-details.html" className="link w-100">
          <img src={imgSrc} alt="" className="cover-img" />
        </a>
        <button type="button" className="product-item__wishlist"><i className="fas fa-heart"></i></button>
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
            <span className="product-item__sales font-14 mb-2">{sales} Sales</span>
            <div className="d-flex align-items-center gap-1">
              <ul className="star-rating">
                {renderStars()}
              </ul>
              <span className="star-rating__text text-heading fw-500 font-14"> ({ratingCount})</span>
            </div>
          </div>
          <a href="product-details.html" className="btn btn-outline-light btn-sm pill">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ArrivalProductCard;
