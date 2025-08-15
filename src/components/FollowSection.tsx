import React from 'react';
import FollowItem from './FollowItem';

const FollowSection: React.FC = () => {
  const followItemsData = [
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 },
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 },
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 },
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 },
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 },
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 },
    { authorName: "Oviousdev", items: 77, followers: 100, memberSince: "September 2018", sales: 15830, ratings: 116 }
  ];

  return (
    <div className="card common-card">
      <div className="card-body">
        <div className="follow-wrapper">
          {followItemsData.map((data, index) => (
            <FollowItem
              key={index}
              authorName={data.authorName}
              items={data.items}
              followers={data.followers}
              memberSince={data.memberSince}
              sales={data.sales}
              ratings={data.ratings}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowSection;