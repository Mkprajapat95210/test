import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import LoginForm from './LoginForm';

const AccountSection: React.FC = () => {
  return (
    <section className="account d-flex">
      <img src="assets/images/thumbs/account-img.png" alt="" className="account__img" />
      <div className="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
        <img src="assets/images/shapes/pattern-curve-seven.png" alt="" className="position-absolute end-0 top-0 z-index--1 h-100" />
        <div className="account-thumb">
          <img src="assets/images/thumbs/banner-img.png" alt="" />
          <div className="statistics animation bg-main text-center">
            <h5 className="statistics__amount text-white">50k</h5>
            <span className="statistics__text text-white font-14">Customers</span>
          </div>
        </div>
      </div>
      <div className="account__right padding-y-120 flx-align">
        <ThemeSwitch />
        <div className="account-content">
          <a href="index-2.html" className="logo mb-64">
            <img src="assets/images/logo/logo.png" alt="" className="white-version" />
            <img src="assets/images/logo/white-logo-two.png" alt="" className="dark-version" />
          </a>
          <h4 className="account-content__title mb-48 text-capitalize">Welcome Back!</h4>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
