import React from 'react';

interface PostItemProps {
  imageSrc: string;
  tag: string;
  title: string;
}

const PostItem: React.FC<PostItemProps> = ({ imageSrc, tag, title }) => {
  return (
    <div className="post-item">
      <div className="post-item__thumb">
        <a href="blog-details.html" className="link">
          <img src={imageSrc} className="cover-img" alt="" />
        </a>
      </div>
      <div className="post-item__content">
        <div className="post-item__top flx-align">
          <a href="blog.html" className="post-item__tag pill font-14 text-heading fw-500 hover-text-main">{tag}</a>
          <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
            <span className="icon">
              <img src="assets/images/icons/calendar.svg" alt="" className="white-version" />
              <img src="assets/images/icons/calendar-white.svg" alt="" className="dark-version" />
            </span>
            <span className="text">Jan 17, 2024</span>
          </div>
        </div>
        <h5 className="post-item__title">
          <a href="blog-details.html" className="link">{title}</a>
        </h5>
        <a href="blog-details.html" className="btn btn-outline-light pill fw-600">Read More </a>
      </div>
    </div>
  );
};
export default PostItem;