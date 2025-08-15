import React from 'react';
import SocialIconList from './SocialIconList';

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">
      <h3 className="contact-info__title">Get in touch with us today</h3>
      <p className="contact-info__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum rem facere labore cupiditate sint? Animi quis illo suscipit autem cum.</p>

      <div className="contact-info__item-wrapper flx-between gap-4">
        <div className="contact-info__item">
          <span className="contact-info__text text-capitalize d-block mb-1">Give Us A Call</span>
          <a href="tel:01812345678" className="contact-info__link font-24 fw-500 text-heading hover-text-main">01812345678</a>
        </div>
        <div className="contact-info__item">
          <span className="contact-info__text text-capitalize d-block mb-1">Give Us An Email</span>
          <a href="tel:dpmarket@gmail.com" className="contact-info__link font-24 fw-500 text-heading hover-text-main">dpmarket@gmail.com</a>
        </div>
      </div>

      <div className="mt-24">
        <SocialIconList />
      </div>
    </div>
  );
};

export default ContactInfo;