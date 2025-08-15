import React from 'react';
import ChooseUsItem from './ChooseUsItem';

const ChooseUs: React.FC = () => {
  return (
    <section className="choose-us padding-y-120 position-relative z-index-1">
      <img src="assets/images/shapes/footer-shape2.png" alt="" className="position-absolute start-0 bottom-0 z-index--1" />
      <div className="container container-two">
        <div className="section-heading style-three">
          <span className="section-heading__subtitle section-bg">Choose Us</span>
          <h3 className="section-heading__title">Why Choose Us</h3>
          <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6">
            <ChooseUsItem
              thumbSrc="assets/images/thumbs/choose-us-img1.png"
              iconSrc="assets/images/icons/choose-us-icon1.svg"
              title="Dedicated & Professional High Quality Team"
              description="We have highly skilled and dedicated agile for your Php Laravel Script, Laravel Ecommerce, Fundraising Script."
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ChooseUsItem
              thumbSrc="assets/images/thumbs/choose-us-img2.png"
              iconSrc="assets/images/icons/choose-us-icon2.svg"
              title="Dedicated & Professional High Quality Team"
              description="We have highly skilled and dedicated agile for your Php Laravel Script, Laravel Ecommerce, Fundraising Script."
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ChooseUsItem
              thumbSrc="assets/images/thumbs/choose-us-img3.png"
              iconSrc="assets/images/icons/choose-us-icon3.svg"
              title="Dedicated & Professional High Quality Team"
              description="We have highly skilled and dedicated agile for your Php Laravel Script, Laravel Ecommerce, Fundraising Script."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;