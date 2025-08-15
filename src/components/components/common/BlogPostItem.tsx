interface BlogPostItemProps {
  thumbSrc: string;
  tag: string;
  blogLink: string;
  date: string;
  title: string;
  readMoreLink: string;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ thumbSrc, tag, blogLink, date, title, readMoreLink }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="post-item">
        <div className="post-item__thumb">
          <a href={blogLink} className="link">
            <img src={thumbSrc} className="cover-img" alt="" />
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
              <span className="text">{date}</span>
            </div>
          </div>
          <h5 className="post-item__title">
            <a href={readMoreLink} className="link">{title}</a>
          </h5>
          <a href={readMoreLink} className="btn btn-outline-light pill fw-600">Read More </a>
        </div>
      </div>
    </div>
  );
};
export default BlogPostItem;
