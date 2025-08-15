import React from 'react';

const CartNavigationButtons: React.FC = () => {
  return (
    <div className="cart-content__bottom flx-between gap-2">
      <a href="cart.html" className="btn btn-outline-light flx-align gap-2 pill btn-lg">
        <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span>
        Back
      </a>
      <a href="cart-payment.html" className="btn btn-main flx-align gap-2 pill btn-lg">
        Proceed To Payment
      </a>
    </div>
  );
};

export default CartNavigationButtons;