import React from 'react';
import ArticleItem from './ArticleItem'; // Assuming ArticleItem is in the same directory

const ArticleSection: React.FC = () => {
  const articles = [
    {
      userInfoThumb: "assets/images/thumbs/user-info-img1.png",
      userName: "Ralph Edwards",
      tags: [{ name: "Startup", link: "blog.html" }, { name: "Marketing", link: "blog.html" }],
      date: "June 24, 2024",
      title: "Data-Driven Insights Unlock The Hidden Potential",
      titleLink: "blog-details.html",
      desc: "Etiam id euismod odio. Ut euismod sem a lacus ringill a hendrerit. facilisi orbi a arcu turpis...",
      thumbImg: "assets/images/thumbs/blog1.png"
    },
    {
      userInfoThumb: "assets/images/thumbs/user-info-img2.png",
      userName: "Jacob Jones",
      tags: [{ name: "Startup", link: "blog.html" }, { name: "Marketing", link: "blog.html" }],
      date: "June 24, 2024",
      title: "we offer best training for individuals and teams",
      titleLink: "blog-details.html",
      desc: "Etiam id euismod odio. Ut euismod sem a lacus ringill a hendrerit. facilisi orbi a arcu turpis...",
      thumbImg: "assets/images/thumbs/blog2.png"
    },
    {
      userInfoThumb: "assets/images/thumbs/user-info-img1.png",
      userName: "Jenny Wilson",
      tags: [{ name: "Startup", link: "blog.html" }, { name: "Marketing", link: "blog.html" }],
      date: "June 24, 2024",
      title: "The analytics feature is like having a personal fortune.",
      titleLink: "blog-details.html",
      desc: "Etiam id euismod odio. Ut euismod sem a lacus ringill a hendrerit. facilisi orbi a arcu turpis...",
      thumbImg: "assets/images/thumbs/blog3.png"
    }
  ];

  return (
    <section className="article padding-y-120 section-bg">
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner">
            <h3 className="section-heading__title">Browse all latest blogs and articles</h3>
          </div>
          <a href="blog.html" className="btn btn-outline-light btn-lg pill">Browse All Articles</a>
        </div>
        <div className="article-item-wrapper">
          {articles.map((article, index) => (
            <ArticleItem key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
