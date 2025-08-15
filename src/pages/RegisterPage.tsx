import React from 'react';
import Preloader from './Preloader';
import Overlay from './Overlay';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import AccountLeft from './AccountLeft';
import DarkLightModeToggle from './DarkLightModeToggle';
import RegisterForm from './RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <ScrollToTop />
      <MobileMenu />

      <section className="account d-flex">
        <img src="assets/images/thumbs/account-img.png" alt="" className="account__img" />
        <AccountLeft />
        <div className="account__right padding-t-120 flx-align">
          <DarkLightModeToggle />
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default RegisterPage;