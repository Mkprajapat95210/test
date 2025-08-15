import React from 'react';

interface LatestProjectItemProps {
  imageSrc: string;
  title: string;
  tags: string[];
}

const LatestProjectItem: React.FC<LatestProjectItemProps> = ({ imageSrc, title, tags }) => {
  return (
    <div className="latest-project-item">
      <div className="latest-project-item__content">
        <h5 className="latest-project-item__title mb-3">
          <a href="#" className="link w-100 d-block"> {title} </a>
        </h5>
        <ul className="tag-list flx-align gap-2">
          {tags.map((tag, index) => (
            <li key={index} className="tag-list__item">
              <a href="#" className="tag-list__link">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="latest-project-item__thumb">
        <a href="#" className="link w-100 d-block">
          <img src={imageSrc} alt="" />
        </a>
      </div>
      <div className="latest-project-item__bottom flx-between gap-2">
        <a href="register.html" className="btn btn-main btn-lg-icon">
          Get Started
          <span className="icon-right icon">
            <img src="assets/images/icons/arrow-right-white.svg" alt="" />
          </span>
        </a>
        <button type="button" className="bookmark-btn">
          <img src="assets/images/icons/bookmark.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default LatestProjectItem;