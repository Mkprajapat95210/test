import React from 'react';

interface ServiceItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-6">
      <div className="service-item hover-bg-main">
        <img src="assets/images/gradients/service-hover-bg.png" alt="" className="hover-bg white-version" />
        <img src="assets/images/gradients/service-hover-bg-dark.png" alt="" className="hover-bg dark-version" />
        <span className="service-item__icon">
          <img src={iconSrc} alt="" />
        </span>
        <h5 className="service-item__title my-3">{title}</h5>
        <p className="service-item__desc">{description}</p>
        <a href="#" className="btn-simple">Read More <span className="icon"><i className="las la-arrow-right"></i></span> </a>
      </div>
    </div>
  );
};

export default ServiceItem;
