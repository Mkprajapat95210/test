import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="contact padding-t-120 padding-b-60 section-bg position-relative z-index-1 overflow-hidden">
      <img src="assets/images/gradients/banner-two-gradient.png" alt="" className="bg--gradient" />
      <img src="assets/images/shapes/pattern-five.png" className="position-absolute end-0 top-0 z-index--1" alt="" />

      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-5">
            <ContactInfo />
          </div>
          <div className="col-lg-7 ps-lg-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;