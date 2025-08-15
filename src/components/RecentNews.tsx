import React from 'react';

const RecentNews: React.FC = () => {
  return (
    <div className="common-sidebar">
      <h6 className="common-sidebar__title">Recent News</h6>
      <div className="latest-blog">
        <div className="latest-blog__thumb">
          <a href="blog-details.html"> <img src="assets/images/thumbs/latest-blog1.png" className="cover-img" alt="" /></a>
        </div>
        <div className="latest-blog__content">
          <span className="latest-blog__date font-14 mb-2">January 15, 2024</span>
          <h6 className="latest-blog__title fw-500 font-body font-16">
            <a href="blog-details.html">There are many variations of business consulting.</a>
          </h6>
        </div>
      </div>
      <div className="latest-blog">
        <div className="latest-blog__thumb">
          <a href="blog-details.html"> <img src="assets/images/thumbs/latest-blog2.png" className="cover-img" alt="" /></a>
        </div>
        <div className="latest-blog__content">
          <span className="latest-blog__date font-14 mb-2">January 15, 2024</span>
          <h6 className="latest-blog__title fw-500 font-body font-16">
            <a href="blog-details.html">Maecenas malesuada mauris libero, ultricies vehicula.</a>
          </h6>
        </div>
      </div>
      <div className="latest-blog">
        <div className="latest-blog__thumb">
          <a href="blog-details.html"> <img src="assets/images/thumbs/latest-blog3.png" className="cover-img" alt="" /></a>
        </div>
        <div className="latest-blog__content">
          <span className="latest-blog__date font-14 mb-2">January 15, 2024</span>
          <h6 className="latest-blog__title fw-500 font-body font-16">
            <a href="blog-details.html">Phasellus sollicitudin massa aliquet ultricies condimentum.</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;