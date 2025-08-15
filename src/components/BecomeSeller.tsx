import React from 'react';
import SellerItem from './SellerItem';
import SupportSection from './SupportSection';

const BecomeSeller: React.FC = () => {
  return (
    <section className="seller padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-6">
            <SellerItem
              title="Earn 75% of the ItemD Price"
              desc="Sellers receive 75% of the Itemp Price for items Dsold exclusively and 50% for items sold non-exclusively. See detailed informationabout the fee structure on Market."
              buttonText="Become a Seller"
              buttonLink="register.html"
              bgImgSrc="assets/images/shapes/seller-bg.png"
            />
          </div>
          <div className="col-lg-6">
            <SellerItem
              title="Earn until 40% commission"
              desc="Our Market is the world’s largest creative market place, selling millions of digital assets every year. With 30% affiliate commission, earning money has never been easier!"
              buttonText="Become an Affiliate"
              buttonLink="register.html"
              bgColorClass="bg-two"
              bgImgSrc="assets/images/shapes/seller-bg-two.png"
            />
          </div>
          <SupportSection />
        </div>
      </div>
    </section>
  );
};

export default BecomeSeller;
