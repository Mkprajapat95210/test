import React from 'react';

const PopularSearch: React.FC = () => {
  return (
    <div className="popular-search d-flex align-items-start gap-3 justify-content-center">
      <h6 className="popular-search__title font-18 fw-700 mb-0 mt-1 flex-shrink-0 flx-align gap-1"> <span className="d-md-flex d-none">Popular</span> Search: </h6>
      <ul className="search-list">
        <li className="search-list__item">
          <a href="all-product.html" className="search-list__link font-14 text-heading">theme</a>
        </li>
        <li className="search-list__item">
          <a href="all-product.html" className="search-list__link font-14 text-heading">plugins</a>
        </li>
        <li className="search-list__item">
          <a href="all-product.html" className="search-list__link font-14 text-heading">ui template</a>
        </li>
        <li className="search-list__item">
          <a href="all-product.html" className="search-list__link font-14 text-heading">mobile app</a>
        </li>
        <li className="search-list__item">
          <a href="all-product.html" className="search-list__link font-14 text-heading">html template</a>
        </li>
        <li className="search-list__item">
          <a href="all-product.html" className="search-list__link font-14 text-heading">dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default PopularSearch;
