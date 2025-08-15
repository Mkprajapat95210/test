import React from 'react';

const PaymentMethodForm: React.FC = () => {
  return (
    <div className="card common-card border border-gray-five overflow-hidden mb-24" id="paymentSystem">
      <div className="card-header">
        <h6 className="title">Payment Method</h6>
      </div>
      <div className="card-body">
        <div className="payment-method mb-0">
          <div className="payment-method__wrapper arrow-sm">
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment1" hidden />
              <label className="form-check-label" htmlFor="payment1">
                <img src="assets/images/thumbs/payment-method1.png" alt="Payment method 1" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment2" hidden defaultChecked />
              <label className="form-check-label" htmlFor="payment2">
                <img src="assets/images/thumbs/payment-method2.png" alt="Payment method 2" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment3" hidden />
              <label className="form-check-label" htmlFor="payment3">
                <img src="assets/images/thumbs/payment-method3.png" alt="Payment method 3" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment4" hidden />
              <label className="form-check-label" htmlFor="payment4">
                <img src="assets/images/thumbs/payment-method4.png" alt="Payment method 4" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment5" hidden />
              <label className="form-check-label" htmlFor="payment5">
                <img src="assets/images/thumbs/payment-method5.png" alt="Payment method 5" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment6" hidden />
              <label className="form-check-label" htmlFor="payment6">
                <img src="assets/images/thumbs/payment-method6.png" alt="Payment method 6" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment7" hidden />
              <label className="form-check-label" htmlFor="payment7">
                <img src="assets/images/thumbs/payment-method7.png" alt="Payment method 7" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment8" hidden />
              <label className="form-check-label" htmlFor="payment8">
                <img src="assets/images/thumbs/payment-method8.png" alt="Payment method 8" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment9" hidden />
              <label className="form-check-label" htmlFor="payment9">
                <img src="assets/images/thumbs/payment-method9.png" alt="Payment method 9" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment10" hidden />
              <label className="form-check-label" htmlFor="payment10">
                <img src="assets/images/thumbs/payment-method10.png" alt="Payment method 10" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment11" hidden />
              <label className="form-check-label" htmlFor="payment11">
                <img src="assets/images/thumbs/payment-method11.png" alt="Payment method 11" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment12" hidden />
              <label className="form-check-label" htmlFor="payment12">
                <img src="assets/images/thumbs/payment-method12.png" alt="Payment method 12" />
              </label>
            </div>
            <div className="payment-method__item">
              <input className="form-check-input" type="radio" name="payment" id="payment13" hidden />
              <label className="form-check-label" htmlFor="payment13">
                <img src="assets/images/thumbs/payment-method13.png" alt="Payment method 13" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodForm;