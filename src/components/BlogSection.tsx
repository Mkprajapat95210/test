import React from 'react';
import PostItem from './PostItem';
import Pagination from './Pagination';

const blogPosts = [
  { imageSrc: "assets/images/thumbs/blog1.png", tag: "Hiring", title: "How to hire a right business executive for your company" },
  { imageSrc: "assets/images/thumbs/blog2.png", tag: "Workshop", title: "The Gig Economy: Adapting to a Flexible Workforce" },
  { imageSrc: "assets/images/thumbs/blog3.png", tag: "Project Management", title: "The Future of Remote Work: Strategies for Success" },
  { imageSrc: "assets/images/thumbs/blog3.png", tag: "Project Management", title: "The Future of Remote Work: Strategies for Success" },
  { imageSrc: "assets/images/thumbs/blog1.png", tag: "Hiring", title: "How to hire a right business executive for your company" },
  { imageSrc: "assets/images/thumbs/blog2.png", tag: "Workshop", title: "The Gig Economy: Adapting to a Flexible Workforce" },
  { imageSrc: "assets/images/thumbs/blog1.png", tag: "Hiring", title: "How to hire a right business executive for your company" },
  { imageSrc: "assets/images/thumbs/blog2.png", tag: "Workshop", title: "The Gig Economy: Adapting to a Flexible Workforce" },
  { imageSrc: "assets/images/thumbs/blog3.png", tag: "Project Management", title: "The Future of Remote Work: Strategies for Success" }
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/pattern-five.png" className="position-absolute end-0 top-0 z-index--1" alt="" />
      <div className="container container-two">
        <div className="row gy-4">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <PostItem imageSrc={post.imageSrc} tag={post.tag} title={post.title} />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};
export default BlogSection;