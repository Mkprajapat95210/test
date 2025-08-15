import React from 'react';

interface PopularItemProps {
  iconSrc: string;
  title: string;
  qty: string;
  href: string;
}

const PopularItem: React.FC<PopularItemProps> = ({ iconSrc, title, qty, href }) => {
  return (
    <div className="col-lg-2">
      <a href={href} className="popular-item w-100">
        <span className="popular-item__icon">
          <img src={iconSrc} alt="" />
        </span>
        <h6 className="popular-item__title font-18">{title}</h6>
        <span className="popular-item__qty text-body">{qty}</span>
      </a>
    </div>
  );
};

export default PopularItem;
