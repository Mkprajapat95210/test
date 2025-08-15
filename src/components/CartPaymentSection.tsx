import React from 'react';
import PaymentMethodSlider from './PaymentMethodSlider';
import CardDetailsForm from './CardDetailsForm';

const CartPaymentSection: React.FC = () => {
  return (
    <section className="cart-payment padding-y-120 overflow-hidden">
      <div className="container container-two">
        <PaymentMethodSlider />
        <div className="cart-payment__box position-relative z-index-1 overflow-hidden">
          <img src="assets/images/shapes/pattern-curve-six.png" alt="Pattern Curve Six" className="position-absolute end-0 top-0 z-index--1" />
          <img src="assets/images/shapes/pattern-curve-five.png" alt="Pattern Curve Five" className="position-absolute start-0 top-0 z-index--1" />
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-10">
              <h5 className="cart-payment__title mb-4">Card Details</h5>
              <CardDetailsForm />
            </div>
          </div>
        </div>
        <div className="cart-content__bottom flx-between gap-2">
          <a href="cart-personal.html" className="btn btn-outline-light flx-align gap-2 pill btn-lg">
            <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span>
            Back
          </a>
        </div>
      </div>
    </section>
  );
};

export default CartPaymentSection;