import React from 'react';
import PaymentSelectCard from './PaymentSelectCard';

const PaymentMethodCard: React.FC = () => {
  return (
    <div className="card common-card shadow mt-4">
      <div className="card-header p-4 bg-white">
        <h6 className="mb-0">Payment Method</h6>
      </div>
      <div className="card-body p-4">
        <div className="payment-select-card-wrapper">
          <PaymentSelectCard id="paypal" />
          <PaymentSelectCard id="paypal2" />
          <PaymentSelectCard id="paypal3" />
          <PaymentSelectCard id="paypal4" />
          <PaymentSelectCard id="paypal5" />
          <PaymentSelectCard id="paypal6" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;