import React from 'react';

interface StarRatingProps {
  rating: number;
  reviewCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  return (
    <div className="d-flex align-items-center gap-1">
      <ul className="star-rating">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="star-rating__item font-11"><i className="fas fa-star"></i></li>
        ))}
      </ul>
      <span className="star-rating__text text-heading fw-500 font-14"> ({reviewCount})</span>
    </div>
  );
};

export default StarRating;
