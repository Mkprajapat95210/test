import React from 'react';

const PersonalInfoForm: React.FC = () => {
  return (
    <div className="cart-personal__content">
      <h5 className="cart-personal__title mb-32">Personal information</h5>
      <form action="#">
        <div className="mb-4">
          <label htmlFor="email" className="form-label font-18 mb-2 fw-500 font-heading">Email Address <span className="text-danger">*</span> </label>
          <span className="text d-block mb-2">We will send the purchase receipt to this address.</span>
          <input type="email" className="common-input" id="email" placeholder="Email address" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="form-label font-18 mb-2 fw-500 font-heading">First Name <span className="text-danger">*</span> </label>
          <span className="text d-block mb-2">We will use this to personalize your account experience.</span>
          <input type="text" className="common-input" id="name" placeholder="First name" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="form-label font-18 mb-2 fw-500 font-heading">Last name <span className="text-danger">*</span> </label>
          <span className="text d-block mb-2">We will use this to personalize your account experience.</span>
          <input type="text" className="common-input" id="lastName" placeholder="Last name" />
        </div>
        <div className="mt-32 mb-32">
          <div className="common-check">
            <input className="form-check-input" type="checkbox" name="checkbox" id="agree" />
            <label className="form-check-label mb-0" htmlFor="agree">Agree To Terms</label>
          </div>
          <div className="common-check mb-0">
            <input className="form-check-input" type="checkbox" name="checkbox" id="privacy" />
            <label className="form-check-label mb-0" htmlFor="privacy">Agree To Privacy Policy</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;