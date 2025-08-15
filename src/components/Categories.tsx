import React from 'react';

const Categories: React.FC = () => {
  return (
    <div className="common-sidebar">
      <h6 className="common-sidebar__title"> Categories </h6>
      <ul className="category-list">
        <li className="category-list__item">
          <a href="blog.html" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
            <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
            <span className="text">WordPress (12)</span>
          </a>
        </li>
        <li className="category-list__item">
          <a href="blog.html" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
            <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
            <span className="text">App & Saas (6)</span>
          </a>
        </li>
        <li className="category-list__item">
          <a href="blog.html" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
            <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
            <span className="text">Web Development (6)</span>
          </a>
        </li>
        <li className="category-list__item">
          <a href="blog.html" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
            <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
            <span className="text">Graphics (6)</span>
          </a>
        </li>
        <li className="category-list__item">
          <a href="blog.html" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
            <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
            <span className="text">IOS/Android Design (6)</span>
          </a>
        </li>
        <li className="category-list__item">
          <a href="blog.html" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
            <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
            <span className="text">Web Design (6)</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;