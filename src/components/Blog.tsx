import React from 'react';
import PostItem from './PostItem';

const Blog: React.FC = () => {
  return (
    <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/pattern-five.png" className="position-absolute end-0 top-0 z-index--1" alt="" />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner">
            <h3 className="section-heading__title">Browse all latest blogs and articles</h3>
          </div>
          <a href="blog.html" className="btn btn-main btn-lg pill">Browse All Articles </a>
        </div>
        <div className="row gy-4">
          <PostItem
            imageSrc="assets/images/thumbs/blog1.png"
            tag="Hiring"
            date="Jan 17, 2024"
            title="How to hire a right business executive for your company"
          />
          <PostItem
            imageSrc="assets/images/thumbs/blog2.png"
            tag="Workshop"
            date="Jan 17, 2024"
            title="The Gig Economy: Adapting to a Flexible Workforce"
          />
          <PostItem
            imageSrc="assets/images/thumbs/blog3.png"
            tag="Project Management"
            date="Jan 17, 2024"
            title="The Future of Remote Work: Strategies for Success"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;