import React from 'react';
import { PersonalInfoSettings } from './PersonalInfoSettings';
import { ProfileSettings } from './ProfileSettings';
import { PaymentMethodSettings } from './PaymentMethodSettings';
import { EmailSettings } from './EmailSettings';
import { SocialNetworkSettings } from './SocialNetworkSettings';

export const SettingsTab: React.FC = () => (
  <div className="row gy-4">
    <div className="col-lg-4 pe-xl-5">
      <div className="setting-sidebar">
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
    <div className="col-lg-8">
      <div className="setting-content" data-bs-spy="scroll" data-bs-target="#sidebar-scroll-spy">
        <PersonalInfoSettings />
        <ProfileSettings />
        <PaymentMethodSettings />
        <EmailSettings />
        <SocialNetworkSettings />
        <button type="button" className="btn w-100 btn-main btn-md">Save Information</button>
      </div>
    </div>
  </div>
);
