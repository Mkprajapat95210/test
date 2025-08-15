import React from 'react';
import BlogDetailsTop from './BlogDetailsTop'; // Assuming BlogDetailsTop is in the same directory
import BlogDetailsContent from './BlogDetailsContent'; // Assuming BlogDetailsContent is in the same directory

const BlogDetailsSection: React.FC = () => {
  return (
    <section className="blog-details padding-y-120 position-relative overflow-hidden">
      <div className="container container-two">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <BlogDetailsTop />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <BlogDetailsContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
