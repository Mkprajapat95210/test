import React from 'react';
import { ProfileSidebar } from './ProfileSidebar';
import { FollowItem } from './FollowItem';

interface FollowListTabProps {
  type: 'followers' | 'following';
}

export const FollowListTab: React.FC<FollowListTabProps> = ({ type }) => (
  <div className="profile-wrapper">
    <div className="profile-content">
      <div className="follow-wrapper">
        {[...Array(8)].map((_, index) => (
          <FollowItem key={index} buttonText={type === 'followers' ? 'Follow' : 'Unfollow'} />
        ))}
      </div>
    </div>
    <ProfileSidebar emailFormIdSuffix={type === 'followers' ? 's' : 'ss'} />
  </div>
);
