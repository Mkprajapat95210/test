import React from 'react';

interface PricingItemProps {
  iconSrc: string;
  title: string;
  price: string;
  period: string;
  desc: string;
  isPopular?: boolean;
}

const PricingItem: React.FC<PricingItemProps> = ({ iconSrc, title, price, period, desc, isPopular = false }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="pricing-item box-shadow-lg hover-bg-main">
        <img src="assets/images/gradients/price-hover-bg.png" alt="" className="hover-bg" />
        <div className="pricing-item__top">
          <div className="flx-between flex-nowrap">
            <span className="pricing-item__icon">
              <img src={iconSrc} alt="" />
            </span>
            <span className={`popular-badge ${isPopular ? '' : 'd-none'}`}>Most Popular</span>
          </div>
          <h5 className="pricing-item__title mb-0 mt-2">{title}</h5>
        </div>
        <div className="pricing-item__content">
          <h3 className="pricing-item__price mb-2"> {price} <span className="text font-14 text-body font-body fw-400">{period}</span> </h3>
          <p className="pricing-item__desc">{desc}</p>
          <a href="#" className="btn btn-outline-light btn-lg pill w-100">Get Started</a>
        </div>
        <div className="pricing-item__lists">
          <ul className="text-list">
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Up to 30 members
            </li>
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Collaboration
            </li>
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Project management
            </li>
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Case management
            </li>
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Process management
            </li>
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Workflow management
            </li>
            <li className="text-list__item text-heading">
              <span className="icon"><i className="fas fa-check"></i></span>
              Team management
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
