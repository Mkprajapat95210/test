import React from 'react';

interface CommentItemProps {
  thumbSrc: string;
  name: string;
  date: string;
  desc: string;
  isReply?: boolean;
}

const CommentItem: React.FC<CommentItemProps> = ({ thumbSrc, name, date, desc, isReply = false }) => {
  return (
    <li className={`comment-list__item d-flex align-items-start gap-sm-4 gap-3 ${isReply ? 'comment-list comment-list--two' : ''}`}>
      <div className="comment-list__thumb flex-shrink-0">
        <img src={thumbSrc} className="cover-img" alt="" />
      </div>
      <div className="comment-list__content">
        <div className="flx-between gap-2 align-items-start">
          <div>
            <h6 className="comment-list__name font-18 mb-sm-2 mb-1">{name}</h6>
            <span className="comment-list__date font-14">{date}</span>
          </div>
          <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box">
            Reply
            <span className="icon"><img src="assets/images/icons/reply-icon.svg" alt="" /></span>
          </a>
        </div>
        <p className="comment-list__desc mt-3">{desc}</p>
      </div>
    </li>
  );
};

export default CommentItem;
