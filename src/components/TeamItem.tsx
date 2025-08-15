import React from 'react';

interface TeamItemProps {
  imageSrc: string;
  name: string;
  designation: string;
}

const TeamItem: React.FC<TeamItemProps> = ({ imageSrc, name, designation }) => {
  return (
    <div className="team-item shadow-sm mb-2">
      <div className="team-item__thumb">
        <img src={imageSrc} alt="" className="cover-img" />
      </div>
      <div className="team-item__content">
        <a href="#" className="btn btn-black btn-icon btn-icon--sm ms-auto"> <i className="las la-plus"></i> </a>
        <h6 className="team-item__name mb-2"><a href="#" className="link hover-text-main">{name}</a></h6>
        <span className="team-item__designation text-heading fw-500">{designation}</span>
      </div>
    </div>
  );
};

export default TeamItem;