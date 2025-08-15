import React from 'react';

interface ServiceThreeItemProps {
  iconSrc: string;
  title: string;
  description: string;
  listItems: string[];
  isActive?: boolean;
}

const ServiceThreeItem: React.FC<ServiceThreeItemProps> = ({ iconSrc, title, description, listItems, isActive }) => {
  return (
    <div className={`service-three-item d-flex align-items-start gap-3 z-index-1 position-relative ${isActive ? 'active' : ''}`}>
      <img src="assets/images/gradients/service-item-gradient.png" alt="" className="service-three-item__bg position-absolute start-0 top-0 w-100 h-100 z-index--1" />
      <span className="service-three-item__icon flex-shrink-0"><img src={iconSrc} alt="" /></span>
      <div className="service-three-item__content">
        <h5 className="service-three-item__title mb-2">{title}</h5>
        <p className="service-three-item__desc">{description}</p>
        <ul className="ser-list d-flex flex-column gap-2 mt-32">
          {listItems.map((item, index) => (
            <li key={index} className="ser-list__item fw-500 font-heading font-18 transition text-capitalize">{item}</li>
          ))}
        </ul>
        <button type="button" className="service-three-item__button ms-auto text-end"> <i className="las la-plus"></i> </button>
      </div>
    </div>
  );
};

export default ServiceThreeItem;