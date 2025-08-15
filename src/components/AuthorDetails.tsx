import React from 'react';
import StarRating from './StarRating';

const AuthorDetails: React.FC = () => {
  return (
    <div className="author-details">
      <div className="d-flex align-items-center gap-2">
        <div className="author-details__thumb flex-shrink-0">
          <img src="assets/images/thumbs/author-details-img.png" alt="" />
        </div>
        <div className="author-details__content">
          <h6 className="author-details__name font-18 mb-2"><a href="profile.html" className="link hover-text-main">Oviousdev</a></h6>
          <span className="d-flex align-items-center gap-1">
            <StarRating />
            <span className="star-rating__text text-body"> 5.0</span>
          </span>
        </div>
      </div>
      <ul className="badge-list flx-align gap-2 mt-3">
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge1.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge2.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge3.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge4.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge5.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge6.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge7.png" alt="" />
        </li>
        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
          <img src="assets/images/thumbs/badge8.png" alt="" />
        </li>
      </ul>
      <a href="profile.html" className="btn btn-outline-light w-100 pill mt-32">View Portfolio</a>
    </div>
  );
};

export default AuthorDetails;