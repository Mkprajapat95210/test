import React from 'react';

interface ContributorItemProps {
  thumbSrc: string;
  name: string;
  soldItems: string;
  itemImgSrc: string;
}

const ContributorItem: React.FC<ContributorItemProps> = ({ thumbSrc, name, soldItems, itemImgSrc }) => {
  return (
    <div className="col-sm-6 col-xs-6">
      <div className="contributor-item">
        <img src="assets/images/icons/madel-badge.png" alt="" className="contributor-item__badge" />
        <div className="contributor-item__content">
          <div className="contributor-info flx-align gap-2">
            <div className="contributor-info__thumb">
              <img src={thumbSrc} alt="" />
            </div>
            <div className="contributor-info__content">
              <h6 className="contributor-info__name mb-1 text-white">{name}</h6>
              <span className="contributor-info__text text-white font-14">{soldItems} Sold Items</span>
            </div>
          </div>
          <div className="contributor-item__thumb">
            <img src={itemImgSrc} alt="" className="cover-img" />
            <a href="#" className="contributor-item__link">
              <img src="assets/images/icons/link-white.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorItem;
