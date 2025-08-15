import React from 'react';
import FollowItem from './FollowItem';

const FollowerSection: React.FC = () => {
  return (
    <div className="card common-card">
      <div className="card-body">
        <div className="follow-wrapper">
          <FollowItem />
          <FollowItem />
          <FollowItem />
          <FollowItem />
          <FollowItem />
          <FollowItem />
          <FollowItem />
        </div>
      </div>
    </div>
  );
};

export default FollowerSection;