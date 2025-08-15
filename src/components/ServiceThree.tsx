import React from 'react';
import ServiceThreeItem from './ServiceThreeItem';

const ServiceThree: React.FC = () => {
  const commonListItems = [
    'Market analysis',
    'Competitive analysis',
    'Branding Positioning',
    'User research',
    'innovation strategy',
    'Concept strategy',
  ];

  return (
    <section className="service-three position-relative section-bg padding-y-120 z-index-1">
      <img src="assets/images/shapes/line-curve3.png" alt="" className="line-curve right-bottom one" />
      <div className="container container-two">
        <div className="section-heading style-three">
          <span className="section-heading__subtitle">Services</span>
          <h3 className="section-heading__title">We do everything on product design</h3>
          <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
        </div>
        <div className="row gy-4">
          <div className="col-xxl-5 col-lg-6">
            <div className="service-three-item-wrapper">
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon1.svg"
                title="Strategy"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
                isActive={true}
              />
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon2.svg"
                title="Design"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
              />
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon3.svg"
                title="Creative Tech"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
              />
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6">
            <div className="service-three-item-wrapper">
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon4.svg"
                title="Strategy"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
              />
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon5.svg"
                title="Strategy"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
              />
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon6.svg"
                title="Strategy"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
              />
              <ServiceThreeItem
                iconSrc="assets/images/icons/service-icon2.svg"
                title="Strategy"
                description="Each user's self-serve multifactor settings are enforced automatically during sign-in."
                listItems={commonListItems}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThree;