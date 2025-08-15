import React from 'react';

const BlogDetailsTop: React.FC = () => {
  return (
    <div className="blog-details-top mb-64">
      <div className="blog-details-top__info flx-align gap-3 mb-4">
        <div className="blog-details-top__thumb flx-align gap-2">
          <img src="assets/images/thumbs/blog-details-user.png" alt="" />
          <span className="text-heading fw-500">Michel Smith</span>
        </div>
        <span className="blog-details-top__date flx-align gap-2">
          <img src="assets/images/icons/clock.svg" alt="" />
          25 Jan 2024
        </span>
      </div>
      <h2 className="blog-details-top__title mb-4 text-capitalize">How to hire a right business executive for your company</h2>
      <p className="blog-details-top__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan.</p>
    </div>
  );
};

export default BlogDetailsTop;
