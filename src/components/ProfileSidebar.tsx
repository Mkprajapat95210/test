import React from 'react';
import { FeaturedProductCard } from './FeaturedProductCard';
import { BadgeList } from './BadgeList';
import { ProfileContactForm } from './ProfileContactForm';
import { ProfileSocialLinks } from './ProfileSocialLinks';

interface ProfileSidebarProps {
  emailFormIdSuffix?: string;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ emailFormIdSuffix = '' }) => (
  <div className="profile-sidebar">
    <div className="profile-sidebar__item">
      <h5 className="mb-4">Featured Items</h5>
      <FeaturedProductCard />
      <div className="profile-sidebar__author">
        <div className="author-details p-0 border-0 mt-0">
          <div className="d-flex align-items-center gap-2">
            <div className="author-details__thumb flex-shrink-0">
              <img src="assets/images/thumbs/author-details-img.png" alt="" />
            </div>
            <div className="author-details__content">
              <h6 className="author-details__name font-18 mb-2">Oviousdev</h6>
              <span className="d-flex align-items-center gap-1">
                <span className="star-rating">
                  <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                  <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                  <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                  <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                  <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                </span>
                <span className="star-rating__text text-body"> 5.0</span>
              </span>
            </div>
          </div>
          <BadgeList />
          <a href="profile.html" className="btn btn-outline-light w-100 pill mt-32 fw-600">Total 89 Items</a>
        </div>
      </div>
    </div>
    <div className="profile-sidebar__item">
      <h5 className="profile-sidebar__title">Email to Support</h5>
      <form action="#">
        <div className="row gy-4">
          <div className="col-12">
            <label htmlFor={`emailsId${emailFormIdSuffix}`} className="form-label mb-2 font-18 fw-500">Email</label>
            <input type="email" className="common-input radius-8 common-input--md" id={`emailsId${emailFormIdSuffix}`} placeholder="dpmarket@gmail.com" />
          </div>
          <div className="col-12">
            <label htmlFor={`messagesId${emailFormIdSuffix}`} className="form-label mb-2 font-18 fw-500">Message</label>
            <textarea className="common-input radius-8" id={`messagesId${emailFormIdSuffix}`} placeholder="Write Message"></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-main btn-md w-100">Send</button>
          </div>
        </div>
      </form>
    </div>
    <div className="profile-sidebar__item">
      <h5 className="profile-sidebar__title">Social Profile</h5>
      <ProfileSocialLinks />
    </div>
  </div>
);
