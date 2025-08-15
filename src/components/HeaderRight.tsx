import React from 'react';
import HeaderRightInner from './HeaderRightInner';

const HeaderRight: React.FC = () => {
  return (
    <div className="header-right flx-align">
      <a href="cart.html" className="header-right__button cart-btn position-relative">
        <img src="assets/images/icons/cart.svg" alt="" className="white-version" />
        <img src="assets/images/icons/cart-white.svg" alt="" className="dark-version" />
        <span className="qty-badge font-12">0</span>
      </a>

      {/* Light Dark Mode */}
      <div className="theme-switch-wrapper position-relative">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" className="d-none" id="checkbox" />
          <span className="slider text-black header-right__button white-version">
            <img src="assets/images/icons/sun.svg" alt="" />
          </span>
          <span className="slider text-black header-right__button dark-version">
            <img src="assets/images/icons/moon.svg" alt="" />
          </span>
        </label>
      </div>

      <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
        <HeaderRightInner />
      </div>
      <button type="button" className="toggle-mobileMenu d-lg-none"> <i className="las la-bars"></i> </button>
    </div>
  );
};
export default HeaderRight;