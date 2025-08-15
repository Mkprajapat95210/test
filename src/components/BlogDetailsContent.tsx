import React from 'react';
import QuoteText from './QuoteText'; // Assuming QuoteText is in the same directory
import PostTagShare from './PostTagShare'; // Assuming PostTagShare is in the same directory
import Advisor from './Advisor'; // Assuming Advisor is in the same directory
import CommentForm from './CommentForm'; // Assuming CommentForm is in the same directory
import CommentsSection from './CommentsSection'; // Assuming CommentsSection is in the same directory

const BlogDetailsContent: React.FC = () => {
  return (
    <div className="blog-details-content">
      <div className="blog-details-content__thumb mb-32">
        <img src="assets/images/thumbs/blog-details-thumb1.png" alt="" />
      </div>
      <p className="blog-details-content__desc mb-40">Design and development may seem like two separate worlds, but they can work together seamlessly to create stunning and functional software. In this post, we'll explore the benefits of integrating design and development early on in a project.</p>

      <h4 className="blog-details-content__title mb-24">Interview multiple candidates</h4>
      <p className="blog-details-content__desc mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa.</p>

      <div className="blog-details-content__thumbs mb-40">
        <div className="row gy-4">
          <div className="col-sm-5 col-6">
            <div className="blog-details-content__thumb">
              <img src="assets/images/thumbs/blog-details-thumb2.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-7 col-6">
            <div className="blog-details-content__thumb">
              <img src="assets/images/thumbs/blog-details-thumb3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <h5 className="blog-details-content__title mb-3">Search for the right experience</h5>
      <p className="blog-details-content__desc mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio. we'll explore the importance of design in the software development process and how it can lead to more successful projects.</p>
      <p className="blog-details-content__desc mb-24">Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis ullamcorper id posuere. Leo congue nulla quam pharetra. Pellentesque morbi dictumst congue risus luctus.</p>


      <ul className="product-list mb-40">
        <li className="product-list__item font-18 fw-500 text-heading">Morbi dictumst congue risus luctus</li>
        <li className="product-list__item font-18 fw-500 text-heading">Porttitor nibh est vulputate vitae sem vitae.</li>
        <li className="product-list__item font-18 fw-500 text-heading">Amet tellus nisl risus lorem vulputate velit eget.</li>
        <li className="product-list__item font-18 fw-500 text-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>

      <QuoteText />

      <h5 className="blog-details-content__title mb-3">Once you hire them, give them access for all tools &amp; resources for success</h5>
      <p className="blog-details-content__desc mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut suspendisse convallis enim tincidunt nunc condimentum facilisi accumsan tempor donec.</p>


      <PostTagShare />

      <Advisor />

      <CommentForm />

      <CommentsSection />
    </div>
  );
};

export default BlogDetailsContent;
