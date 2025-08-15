import React from 'react';

const PaymentMethodSection: React.FC = () => {
  return (
    <section className="payment padding-t-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/element3.png" alt="" className="element one top-0" />
      <div className="container container-three">
        <div className="payment-inner position-relative padding-t-120">
          <div className="payment-wrapper">
            <div className="payment-thumb d-xl-block d-none">
              <img src="assets/images/thumbs/pyament-thumb.png" alt="" />
            </div>
            <div className="section-heading style-left">
              <h3 className="section-heading__title">Our Acceptable <br /> Payment Methods</h3>
              <p className="section-heading__desc mb-0 font-18">Many desktop publishing packages and web page <br /> editors now use orem many web sites still in their infancy.</p>
              <a href="about.html" className="btn btn-black btn-lg fw-500 mt-48"> Start Invest </a>
            </div>
            <div className="payment-method">
              <div className="row g-md-3 g-2 justify-content-center">
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment1.png" alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="row g-md-3 g-2 justify-content-center">
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment3.png" alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment4.png" alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="row g-md-3 g-2 justify-content-center">
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment6.png" alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="payment-method__item">
                    <img src="assets/images/thumbs/payment7.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodSection;