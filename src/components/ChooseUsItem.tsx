import React from 'react';

interface ChooseUsItemProps {
  thumbSrc: string;
  iconSrc: string;
  title: string;
  description: string;
}

const ChooseUsItem: React.FC<ChooseUsItemProps> = ({ thumbSrc, iconSrc, title, description }) => {
  return (
    <div className="choose-us-item">
      <div className="choose-us-item__thumb">
        <img src={thumbSrc} alt="" />
      </div>
      <div className="choose-us-item__content text-center">
        <span className="choose-us-item__icon"><img src={iconSrc} alt="" /></span>
        <h5 className="choose-us-item__title my-3">{title}</h5>
        <p className="choose-us-item__desc">{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsItem;