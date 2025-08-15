import React from 'react';
import SellerItem from './SellerItem';
import SupportSection from './SupportSection';

const BecomeSellerSection: React.FC = () => {
  return (
    <section className="seller-two position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute bottom-0 end-0 z-index--1 white-version" />
      <img src="assets/images/shapes/spider-net-dark.html" alt="" className="spider-net position-absolute bottom-0 end-0 z-index--1 dark-version" />

      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-6">
            <SellerItem
              title="Become a Seller"
              description="Sellers receive 75% of the Item Price for items sold exclusively and 50% for items sold non-exclusively. See detailed informationabout the fee structure on Market."
              buttonText="Create Seller Account"
              bgClass=""
              bgShapeSrc="assets/images/shapes/seller-bg.png"
            />
          </div>
          <div className="col-lg-6">
            <SellerItem
              title="Earn untill 40% commission"
              description="Our Market is the world’s largest creative market place, selling millions of digital assets every year. With 30% affiliate commission, earning money has never been easier!"
              buttonText="Get More Commission"
              bgClass="bg-three"
              bgShapeSrc="assets/images/shapes/seller-bg-three.png"
            />
          </div>
          <SupportSection />
        </div>
      </div>
    </section>
  );
};

export default BecomeSellerSection;
