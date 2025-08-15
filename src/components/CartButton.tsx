import React from 'react';

const CartButton: React.FC = () => {
  return (
    <a href="cart.html" className="header-right__button cart-btn position-relative">
      <img src="assets/images/icons/cart.svg" alt="" className="white-version" />
      <img src="assets/images/icons/cart-white.svg" alt="" className="dark-version" />
      <span className="qty-badge font-12">0</span>
    </a>
  );
};

export default CartButton;