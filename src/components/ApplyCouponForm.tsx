import React from 'react';

const ApplyCouponForm: React.FC = () => {
  return (
    <form action="#" className="apply-coupon flx-align gap-3">
      <input type="text" className="common-input common-input--md w-auto pill" placeholder="Coupon code" />
      <button type="submit" className="btn btn-main btn-md py-3 px-sm-5 px-4 flx-align gap-2 pill fw-300"> Apply</button>
    </form>
  );
};

export default ApplyCouponForm;