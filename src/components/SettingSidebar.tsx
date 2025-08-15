import React from 'react';

const SettingSidebar: React.FC = () => {
  return (
    <div className="col-lg-4 pe-xl-5">
      <div className="setting-sidebar top-24">
        <h6 className="setting-sidebar__title">Your Details</h6>
        <ul className="setting-sidebar-list">
          <li className="setting-sidebar-list__item"><a href="#personalInfo" className="setting-sidebar-list__link active">Personal Information</a></li>
          <li className="setting-sidebar-list__item"><a href="#profile" className="setting-sidebar-list__link">Profile</a></li>
          <li className="setting-sidebar-list__item"><a href="#paymentSystem" className="setting-sidebar-list__link">Setup Payment System</a></li>
          <li className="setting-sidebar-list__item"><a href="#emailSetting" className="setting-sidebar-list__link">Email Setting</a></li>
          <li className="setting-sidebar-list__item"><a href="#socialNetwork" className="setting-sidebar-list__link">Social Networks</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SettingSidebar;