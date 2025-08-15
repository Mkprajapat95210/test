import React from 'react';
import AuthorDetails from './AuthorDetails';
import MetaAttributes from './MetaAttributes';

const ProductSidebar: React.FC = () => {
  return (
    <div className="product-sidebar section-bg">
      <div className="product-sidebar__top position-relative flx-between gap-1">
        <button type="button" className="btn-has-dropdown font-heading font-18">Regular License</button>
        <div className="license-dropdown">
          <div className="license-dropdown__item cursor-pointer mb-3 pb-3 border-bottom activeSelectItem">
            <h6 className="license-dropdown__title font-body mb-1 font-16">Regular License</h6>
            <p className="license-dropdown__desc font-13">Use, by you or one client, in a solitary finished result which end clients are not charged for. The complete cost incorporates the thing cost and a purchaser expense..</p>
          </div>
          <div className="license-dropdown__item cursor-pointer">
            <h6 className="license-dropdown__title font-body mb-1 font-16">Extended License</h6>
            <p className="license-dropdown__desc font-13">Use, by you or one client, in a solitary final result which end clients can be charged for. The all out cost incorporates the thing cost and a purchaser expense.</p>
          </div>
          <div className="mt-3 pt-2 border-top text-center ">
            <a href="#" className="link hover-text-decoration-underline font-14 text-main fw-500">View License Details</a>
          </div>
        </div>
        <h6 className="product-sidebar__title">$1580.00</h6>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
          <span className="icon"><img src="assets/images/icons/check-cirlce.svg" alt="" /></span>
          <span className="text">Quality verified</span>
        </li>
        <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
          <span className="icon"><img src="assets/images/icons/check-cirlce.svg" alt="" /></span>
          <span className="text">Use for a single project</span>
        </li>
        <li className="sidebar-list__item flx-align gap-2 font-14 fw-300">
          <span className="icon"><img src="assets/images/icons/check-cirlce.svg" alt="" /></span>
          <span className="text">Non-paying users only</span>
        </li>
      </ul>
      <div className="flx-between mt-3">
        <div className="common-check mb-0">
          <input className="form-check-input" type="checkbox" name="checkbox" id="extended" />
          <label className="form-check-label mb-0 fw-300 text-body" htmlFor="extended">Extended support 12 month</label>
        </div>
        <div className="flx-align gap-2">
          <span className="product-item__prevPrice text-decoration-line-through">$12</span>
          <h6 className="product-item__price mb-0 font-14 fw-500">$7.25</h6>
        </div>
      </div>
      <button type="button" className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32">
        <img src="assets/images/icons/add-to-cart.svg" alt="" />
        Add To Cart
      </button>
      <AuthorDetails />
      <MetaAttributes />
    </div>
  );
};

export default ProductSidebar;