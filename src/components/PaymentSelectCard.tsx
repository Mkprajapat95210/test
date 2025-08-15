import React from 'react';

interface PaymentSelectCardProps {
  id: string;
}

const PaymentSelectCard: React.FC<PaymentSelectCardProps> = ({ id }) => {
  return (
    <div className="payment-select-card mb-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="common-check common-radio mb-0">
            <input className="form-check-input" type="radio" name="radio" id={id} />
            <label className="form-check-label" htmlFor={id}> </label>
          </div>
          <div className="">
            <h6 className="font-16 mb-0">Paypal </h6>
            <p className="font-14">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="payment-select-card__logo">
          <img src="../../../upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentSelectCard;