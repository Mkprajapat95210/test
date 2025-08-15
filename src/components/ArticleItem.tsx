import React from 'react';

interface ArticleItemProps {
  userInfoThumb: string;
  userName: string;
  tags: { name: string; link: string; }[];
  date: string;
  title: string;
  titleLink: string;
  desc: string;
  thumbImg: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ userInfoThumb, userName, tags, date, title, titleLink, desc, thumbImg }) => {
  return (
    <div className="article-item">
      <div className="article-item__inner d-flex position-relative">
        <div className="article-item__start">
          <div className="user-info">
            <div className="user-info__thumb">
              <img src={userInfoThumb} alt="" />
            </div>
            <span className="user-info__text mt-2 mb-1 font-14 text-heading">Posted by</span>
            <h6 className="user-info__name font-16 font-body fw-600 mb-0">
              {userName}
            </h6>
          </div>
        </div>
        <div className="article-item__center d-flex align-items-center">
          <div className="article-item__content">
            <div className="article-item__top flx-align">
              {tags.map((tag, index) => (
                <a key={index} href={tag.link} className="article-item__tag font-14">{tag.name}</a>
              ))}
              <span className="text-heading font-16 fw-500">{date}</span>
            </div>
            <h4 className="article-item__title mb-3">
              <a href={titleLink} className="link"> {title}</a>
            </h4>
            <p className="article-item__desc">{desc}</p>
          </div>

          <div className="article-item__thumb">
            <img src={thumbImg} alt="" />
          </div>
        </div>
      </div>
      <div className="article-item__end flex-shrink-0">
        <a href={titleLink} className="btn-simple">Read More <span className="icon font-26"><i className="las la-arrow-right"></i></span> </a>
      </div>
    </div>
  );
};

export default ArticleItem;
