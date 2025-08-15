import React from 'react';

interface PricingPlanThreeItemProps {
  iconSrc: string;
  title: string;
  price: string;
  timeUnit: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlanThreeItem: React.FC<PricingPlanThreeItemProps> = ({ iconSrc, title, price, timeUnit, description, features, isPopular }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="pricing-plan-three-item hover-bg-main">
        <img src="assets/images/gradients/price-hover-bg.png" alt="" className="hover-bg" />
        <span className={`popular-badge ${isPopular ? '' : 'd-none'}`}>{isPopular ? 'Popular' : ''}</span>
        <div className="pricing-plan-three-item__top flx-align gap-3">
          <span className="pricing-plan-three-item__icon">
            <img src={iconSrc} alt="" />
          </span>
          <h6 className="pricing-plan-three-item__title mb-0 mt-2 fw-500">{title}</h6>
        </div>
        <div className="pricing-plan-three-item__content">
          <h5 className="pricing-plan-three-item__price mb-0"> {price} <span className="text font-14 text-body font-body fw-300">/{timeUnit}</span> </h5>
          <p className="pricing-plan-three-item__desc mt-32 fw-300">{description}</p>
        </div>
        <div className="pricing-plan-three-item__lists">
          <ul className="text-list">
            {features.map((feature, index) => (
              <li key={index} className="text-list__item text-heading">
                <span className="icon"><i className="fas fa-check"></i></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <a href="#" className="btn btn-outline-light mt-32 w-100 fw-400">Get Started</a>
      </div>
    </div>
  );
};

export default PricingPlanThreeItem;