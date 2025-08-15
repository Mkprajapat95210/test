import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="card common-card p-sm-4">
      <div className="card-body">
        <form action="#" autoComplete="off">
          <div className="row gy-4">
            <div className="col-sm-6 col-xs-6">
              <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
              <input type="text" className="common-input common-input--grayBg border" id="name" placeholder="Your name here" />
            </div>
            <div className="col-sm-6 col-xs-6">
              <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Your Mail</label>
              <input type="email" className="common-input common-input--grayBg border" id="email" placeholder="Your email here " />
            </div>
            <div className="col-sm-12">
              <label htmlFor="message" className="form-label mb-2 font-18 font-heading fw-600">Your Message</label>
              <textarea className="common-input common-input--grayBg border" id="message" placeholder="Write Your Message Here"></textarea>
            </div>
            <div className="col-sm-12">
              <button className="btn btn-main btn-lg pill w-100"> Submit Now </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;