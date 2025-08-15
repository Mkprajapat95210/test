import React from 'react';

const FooterSubscribe: React.FC = () => {
  return (
    <div className="footer-widget">
      <h5 className="footer-widget__title text-white">Subscribe</h5>
      <p className="footer-widget__desc">Subscribe our newsletter to get updated the latest news</p>
      <form action="#" className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
        <input type="text" className="form-control common-input pill text-white" placeholder="Enter Mail" />
        <button type="submit" className="btn btn-main btn-lg w-100 pill">Subscribe Now</button>
      </form>
    </div>
  );
};

export default FooterSubscribe;