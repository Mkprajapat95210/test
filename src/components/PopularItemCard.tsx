import React from 'react';

interface PopularItemCardProps {
  imgSrc: string;
  sales: string;
  ratings: number;
  ratingCount: number;
  author: string;
  title: string;
}

const PopularItemCard: React.FC<PopularItemCardProps> = ({ imgSrc, sales, ratings, ratingCount, author, title }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<li key={i} className="star-rating__item font-11"><i className="fas fa-star"></i></li>);
    }
    return stars;
  };

  return (
    <div className="popular-item-card">
      <div className="popular-item-card__thumb">
        <a href="product-details.html" className="link w-100">
          <img src={imgSrc} alt="" />
        </a>
        <div className="product-item__bottom flx-between gap-2">
          <div>
            <span className="product-item__sales font-14 mb-0 text-white">{sales} Sales</span>
            <div className="d-flex align-items-center gap-1">
              <ul className="star-rating">
                {renderStars()}
              </ul>
              <span className="star-rating__text text-white fw-500 font-14"> ({ratingCount})</span>
            </div>
          </div>
          <span className="product-item__author">
            by
            <a href="profile.html" className="link text-decoration-underline"> {author}</a>
          </span>
        </div>
      </div>
      <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
        <h6 className="popular-item-card__title mb-0">
          <a href="product-details.html" className="link"> {title}</a>
        </h6>
        <a href="product-details.html" className="btn-link line-height-1 flex-shrink-0">
          <img src="assets/images/icons/link.svg" alt="" className="white-version" />
          <img src="assets/images/icons/link-light.svg" alt="" className="dark-version" />
        </a>
      </div>
    </div>
  );
};

export default PopularItemCard;
