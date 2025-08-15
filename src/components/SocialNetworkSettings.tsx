import React from 'react';
import { SettingsDetailCard } from './SettingsDetailCard';

export const SocialNetworkSettings: React.FC = () => (
  <SettingsDetailCard id="socialNetwork" title="Social Network Settings">
    <div className="row gy-3">
      <div className="col-sm-6 col-xs-6">
        <label htmlFor="facebookUrl" className="form-label">Facebook Profile Url</label>
        <div className="position-relative">
          <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="facebookUrl" placeholder="Facebook Profile Url" />
          <span className="input-icon input-icon--left text-main"><i className="fab fa-facebook-f"></i> </span>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <label htmlFor="linkedinUrl" className="form-label">Linkedin Profile Url</label>
        <div className="position-relative">
          <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="linkedinUrl" placeholder="Linkedin Profile Url" />
          <span className="input-icon input-icon--left text-main"><i className="fab fa-linkedin-in"></i></span>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <label htmlFor="behanceUrl" className="form-label">Behance Profile Url</label>
        <div className="position-relative">
          <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="behanceUrl" placeholder="Behance Profile Url" />
          <span className="input-icon input-icon--left text-main"><i className="fab fa-behance"></i> </span>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <label htmlFor="dribbleUrl" className="form-label">Dribble Profile Url</label>
        <div className="position-relative">
          <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="dribbleUrl" placeholder="Dribble Profile Url" />
          <span className="input-icon input-icon--left text-main"><i className="fab fa-dribbble"></i> </span>
        </div>
      </div>
    </div>
  </SettingsDetailCard>
);
