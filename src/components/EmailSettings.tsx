import React from 'react';
import { SettingsDetailCard } from './SettingsDetailCard';

export const EmailSettings: React.FC = () => (
  <SettingsDetailCard id="emailSetting" title="Email Settings">
    <div className="row gy-3">
      <div className="col-sm-6 col-xs-6">
        <div className="common-check">
          <input className="form-check-input" type="checkbox" id="ratingReminder" />
          <label className="form-check-label" htmlFor="ratingReminder"> Rating reminder send an email for client rating </label>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <div className="common-check">
          <input className="form-check-input" type="checkbox" id="reviewNotification" />
          <label className="form-check-label" htmlFor="reviewNotification"> Item review notification</label>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <div className="common-check">
          <input className="form-check-input" type="checkbox" id="updateNotification" />
          <label className="form-check-label" htmlFor="updateNotification"> Item update notification</label>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <div className="common-check">
          <input className="form-check-input" type="checkbox" id="dailyNootification" />
          <label className="form-check-label" htmlFor="dailyNootification"> Daily update notification</label>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <div className="common-check">
          <input className="form-check-input" type="checkbox" id="itemNotification" />
          <label className="form-check-label" htmlFor="itemNotification"> Item Notification</label>
        </div>
      </div>
      <div className="col-sm-6 col-xs-6">
        <div className="common-check">
          <input className="form-check-input" type="checkbox" id="commentNotification" />
          <label className="form-check-label" htmlFor="commentNotification"> Item comment notification</label>
        </div>
      </div>
    </div>
  </SettingsDetailCard>
);
