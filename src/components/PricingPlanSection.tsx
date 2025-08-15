import React from 'react';
import SectionHeading from './SectionHeading';
import PricingItem from './PricingItem';

const PricingPlanSection: React.FC = () => {
  const monthlyPlans = [
    { iconSrc: 'assets/images/icons/price-icon1.svg', title: 'Basic Plan', price: '$1599.00', period: '/Per Month', desc: 'Essential services to start your journey', isPopular: false },
    { iconSrc: 'assets/images/icons/price-icon2.svg', title: 'Standard Plan', price: '$1799.00', period: '/Per Month', desc: 'Essential services to start your journey', isPopular: true },
    { iconSrc: 'assets/images/icons/price-icon3.svg', title: 'Premium Plan', price: '$1999.00', period: '/Per Month', desc: 'Essential services to start your journey', isPopular: false }
  ];

  const yearlyPlans = [
    { iconSrc: 'assets/images/icons/price-icon1.svg', title: 'Basic Plan', price: '$1599.00', period: '/Per Month', desc: 'Essential services to start your journey', isPopular: false },
    { iconSrc: 'assets/images/icons/price-icon2.svg', title: 'Standard Plan', price: '$1799.00', period: '/Per Month', desc: 'Essential services to start your journey', isPopular: true },
    { iconSrc: 'assets/images/icons/price-icon3.svg', title: 'Premium Plan', price: '$1999.00', period: '/Per Month', desc: 'Essential services to start your journey', isPopular: false }
  ];

  return (
    <section className="pricing padding-y-120 position-relative z-index-1">
      <img src="assets/images/shapes/element1.png" alt="" className="element one" />
      <img src="assets/images/gradients/pricing-gradient-bg.png" alt="" className="bg--gradient" />

      <div className="container container-two">
        <SectionHeading
          title="Our Best Pricing Plan"
          desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
          styleClass="style-left style-flex flx-between align-items-end gap-3"
        >
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Our Best Pricing Plan</h3>
            <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
          </div>
          <div className="pricing-tabs">
            <ul className="nav tab-gradient nav-pills mb-0" id="pills-tab-pricing" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link pill active" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="true">monthly</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link pill" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly" aria-selected="false">yearly</button>
              </li>
            </ul>
          </div>
        </SectionHeading>

        <div className="tab-content" id="pills-tab-pricingContent">
          <div className="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab" tabIndex={0}>
            <div className="row gy-4">
              {monthlyPlans.map((plan, index) => (
                <PricingItem key={index} {...plan} />
              ))}
            </div>
          </div>
          <div className="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab" tabIndex={0}>
            <div className="row gy-4">
              {yearlyPlans.map((plan, index) => (
                <PricingItem key={index} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSection;
