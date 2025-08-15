import React from 'react';

const EmailSettingForm: React.FC = () => {
  return (
    <div className="card common-card border border-gray-five overflow-hidden mb-24" id="emailSetting">
      <div className="card-header">
        <h6 className="title">Email Settings</h6>
      </div>
      <div className="card-body">
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
      </div>
    </div>
  );
};

export default EmailSettingForm;