import React from 'react';

const PopularTags: React.FC = () => {
  return (
    <div className="common-sidebar">
      <h6 className="common-sidebar__title"> Popular Tags </h6>
      <ul className="tag-list flx-align gap-2">
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Digital</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Template</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Web Design</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">SaaS</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Products</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">App</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Development</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">UI/UX</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Marketing</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">HTML</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Web App</a>
        </li>
        <li className="tag-list__item">
          <a href="blog.html" className="tag-list__link pill px-3 py-2 font-14 fw-500">Design</a>
        </li>
      </ul>
    </div>
  );
};

export default PopularTags;