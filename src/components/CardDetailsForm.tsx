import React from 'react';

const CardDetailsForm: React.FC = () => {
  return (
    <div className="cart-payment-card">
      <form action="#">
        <div className="row gy-4">
          <div className="col-lg-12">
            <label htmlFor="nmbr" className="form-label mb-2 font-18 font-heading fw-600">Card Number</label>
            <div className="position-relative">
              <input type="text" className="common-input common-input--bg common-input--withIcon" id="nmbr" placeholder="5896  1456  0040   2558" />
              <span className="input-icon"><img src="assets/images/icons/check-cirlce.svg" alt="Check circle icon" /></span>
            </div>
          </div>
          <div className="col-lg-12">
            <label htmlFor="holder" className="form-label mb-2 font-18 font-heading fw-600">Card Holder</label>
            <div className="position-relative">
              <input type="text" className="common-input common-input--bg common-input--withIcon" id="holder" placeholder="Michel John" />
              <span className="input-icon"><img src="assets/images/icons/check-cirlce.svg" alt="Check circle icon" /></span>
            </div>
          </div>
          <div className="col-lg-6">
            <label htmlFor="expire" className="form-label mb-2 font-18 font-heading fw-600">Expire Date</label>
            <div className="position-relative">
              <input type="text" className="common-input common-input--bg common-input--withIcon" id="expire" placeholder="09/26" />
              <span className="input-icon"><img src="assets/images/icons/check-cirlce.svg" alt="Check circle icon" /></span>
            </div>
          </div>
          <div className="col-lg-6">
            <label htmlFor="CVV" className="form-label mb-2 font-18 font-heading fw-600">CVV</label>
            <div className="position-relative">
              <input type="text" className="common-input common-input--bg common-input--withIcon" id="CVV" placeholder="853" />
              <span className="input-icon"><img src="assets/images/icons/check-cirlce.svg" alt="Check circle icon" /></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="common-check my-2">
              <input className="form-check-input" type="checkbox" name="checkbox" id="agree" />
              <label className="form-check-label mb-0 fw-400 font-16 text-body" htmlFor="agree">Save my details for future purchase</label>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="total-bill flx-between">
              <span className="text text-heading font-20 fw-500 font-heading">Total Amount</span>
              <span className="amount text-heading font-20 fw-500 font-heading">$274.00</span>
            </div>
          </div>
          <div className="col-lg-12">
            <a href="cart-thank-you.html" className="btn btn-main btn-lg w-100 pill"> Confirm Payment</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardDetailsForm;