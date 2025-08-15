import React from 'react';

const ProcessList: React.FC = () => {
  return (
    <ul className="process-list">
      <li className="process-list__item activePage">
        <a href="cart.html" className="process-list__link">
          <div className="icons">
            <span className="icon white"><img src="assets/images/icons/process-white1.svg" alt="Shopping Cart Icon White" /></span>
          </div>
          <span className="text">Shopping Cart</span>
        </a>
      </li>
      <li className="process-list__item activePage">
        <a href="cart-personal.html" className="process-list__link">
          <div className="icons">
            <span className="icon white"><img src="assets/images/icons/process-white2.svg" alt="Mailing Address Icon White" /></span>
            <span className="icon colored"><img src="assets/images/icons/process2.svg" alt="Mailing Address Icon Colored" /></span>
          </div>
          <span className="text">Mailing Address</span>
        </a>
      </li>
      <li className="process-list__item activePage">
        <a href="cart-payment.html" className="process-list__link">
          <div className="icons">
            <span className="icon white"><img src="assets/images/icons/process-white3.svg" alt="Payment Methods Icon White" /></span>
            <span className="icon colored"><img src="assets/images/icons/process3.svg" alt="Payment Methods Icon Colored" /></span>
          </div>
          <span className="text">Payment Methods</span>
        </a>
      </li>
      <li className="process-list__item">
        <a href="cart-thank-you.html" className="process-list__link">
          <div className="icons">
            <span className="icon white"><img src="assets/images/icons/process-white4.svg" alt="Preview Order Icon White" /></span>
            <span className="icon colored"><img src="assets/images/icons/process4.svg" alt="Preview Order Icon Colored" /></span>
          </div>
          <span className="text">Preview Order</span>
        </a>
      </li>
    </ul>
  );
};

export default ProcessList;