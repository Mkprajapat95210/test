import React from 'react';
import { BadgeList } from './BadgeList';

export const AuthorProfileHeaderContent: React.FC = () => (
  <div className="breadcrumb-three-content__inner">
    <div className="breadcrumb-three-content__left">
      <div className="flx-between align-items-end gap-3">
        <div className="author-profile d-flex gap-2 flex-column">
          <div className="author-profile__thumb flex-shrink-0">
            <img src="assets/images/thumbs/author-profile.png" alt="" />
          </div>
          <div className="d-flex align-items-end flex-wrap gap-4">
            <div className="author-profile__info">
              <h5 className="author-profile__name mb-2">Oviousdev</h5>
              <span className="author-profile__membership font-14">Member Since January 2021</span>
            </div>
            <div className="flx-align gap-3">
              <a href="profile.html" className="btn btn-main pill px-4 fw-300"> View Profile </a>
              <button type="button" className="btn btn-outline-black pill px-4">Follow</button>
            </div>
          </div>
        </div>
        <div className="breadcrumb-three-content__right flex-shrink-0 d-flex align-items-center gap-4 gap-lg-5">
          <div className="author-rating">
            <span className="author-rating__text text-heading fw-500 mb-2">Author Rating</span>
            <div className="d-flex align-items-center gap-1">
              <ul className="star-rating">
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
              </ul>
              <span className="star-rating__text text-body font-14"> (116 ratings)</span>
            </div>
          </div>
          <div className="sales">
            <span className="sales__text mb-1 text-heading fw-500">Sales</span>
            <h5 className="sales__amount mb-0">15,830</h5>
          </div>
        </div>
      </div>
      <BadgeList />
    </div>
  </div>
);
