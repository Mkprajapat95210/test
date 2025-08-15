import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import ApplyCouponForm from './ApplyCouponForm';
import PaymentMethodCard from './PaymentMethodCard';
import CartNavigationButtons from './CartNavigationButtons';
import OrderSummaryCard from './OrderSummaryCard';

const CartPersonalSection: React.FC = () => {
  return (
    <section className="cart-personal padding-y-120">
      <div className="container container-two">
        <div className="row gy-5">
          <div className="col-lg-8 pe-sm-5">
            <PersonalInfoForm />
            <ApplyCouponForm />
            <PaymentMethodCard />
            <CartNavigationButtons />
          </div>
          <div className="col-lg-4">
            <OrderSummaryCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPersonalSection;