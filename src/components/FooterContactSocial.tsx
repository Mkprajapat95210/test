import React from 'react';
import SocialIconList from './SocialIconList';

const FooterContactSocial: React.FC = () => {
  return (
    <div className="footer-widget">
      <div className="footer-widget__logo">
        <a href="index-2.html"> <img src="assets/images/logo/white-logo.png" alt="" /></a>
      </div>
      <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
      <div className="footer-widget__social">
        <SocialIconList />
      </div>
    </div>
  );
};

export default FooterContactSocial;