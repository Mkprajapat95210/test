import React from 'react';

export const ProfileContactForm: React.FC = () => (
  <form action="#">
    <div className="row gy-4">
      <div className="col-12">
        <label htmlFor="emailsId" className="form-label mb-2 font-18 fw-500">Email</label>
        <input type="email" className="common-input radius-8 common-input--md" id="emailsId" placeholder="dpmarket@gmail.com" />
      </div>
      <div className="col-12">
        <label htmlFor="messagesId" className="form-label mb-2 font-18 fw-500">Message</label>
        <textarea className="common-input radius-8" id="messagesId" placeholder="Write Message"></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-main btn-md w-100">Send</button>
      </div>
    </div>
  </form>
);
