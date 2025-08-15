import React from 'react';
import CartItem from './CartItem';

const CartSection: React.FC = () => {
  return (
    <div className="cart padding-y-120">
      <div className="container">
        <div className="cart-content">
          <div className="table-responsive">
            <table className="table style-two">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <CartItem
                  imageSrc="assets/images/thumbs/product-img2.png"
                  productName="Digital product name here"
                  category="WordPress"
                  price="$28.00"
                  totalPrice="$56.00"
                  quantity={2}
                />
                <CartItem
                  imageSrc="assets/images/thumbs/product-img3.png"
                  productName="Digital product name here"
                  category="WordPress"
                  price="$28.00"
                  totalPrice="$56.00"
                  quantity={2}
                />
                <CartItem
                  imageSrc="assets/images/thumbs/product-img4.png"
                  productName="Digital product name here"
                  category="WordPress"
                  price="$28.00"
                  totalPrice="$96.00"
                  quantity={3}
                />
              </tbody>
            </table>
          </div>

          <div className="cart-content__bottom flx-between gap-2">
            <a href="all-product.html" className="btn btn-outline-light flx-align gap-2 pill btn-lg"> 
              <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span> 
              Continue Shopping
            </a>
            <a href="cart-personal.html" className="btn btn-main flx-align gap-2 pill btn-lg"> 
              Next
              <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;