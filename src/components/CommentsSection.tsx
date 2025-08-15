import React from 'react';
import CommentItem from './CommentItem'; // Assuming CommentItem is in the same directory

const CommentsSection: React.FC = () => {
  return (
    <div className="comment mt-64 mb-64">
      <h5 className="mb-32">2 Comments</h5>
      <ul className="comment-list">
        <CommentItem
          thumbSrc="assets/images/thumbs/comment1.png"
          name="Jenny Wilson"
          date="Jan 21, 2024 at 11:25 pm"
          desc="Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus mi viverra. Quam faucibus morbi cras vitae neque. Necnunc pellentesque massa pretium."
        />
        <li>
          <ul className="comment-list comment-list--two">
            <CommentItem
              thumbSrc="assets/images/thumbs/comment2.png"
              name="Courtney Henry"
              date="Jan 21, 2024 at 11:25 pm"
              desc="Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus."
              isReply={true}
            />
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CommentsSection;
