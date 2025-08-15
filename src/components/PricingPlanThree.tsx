import React from 'react';
import PricingPlanThreeItem from './PricingPlanThreeItem';

const PricingPlanThree: React.FC = () => {
  const commonFeatures = [
    'Up to 30 members',
    'Collaboration',
    'Project management',
    'Case management',
    'Process management',
    'Workflow management',
    'Team management'
  ];

  return (
    <section className="pricing-plan-three padding-y-120 position-relative z-index-1">
      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">Flexible Plans For your Business growth</h3>
          <p className="section-heading__desc">Many desktop publishing packages and web page editors now use orem many web sites still in their infancy.</p>
        </div>
        <div className="row gy-4">
          <div className="col-xl-3 col-sm-6 mx-auto">
            <div className="welcome-card h-100">
              <div className="text-center">
                <img src="assets/images/thumbs/price-vector.png" alt="" className="price-vector" />
              </div>
              <div className="pricing-plan-three-item active hover-bg-main">
                <img src="assets/images/gradients/price-hover-bg.png" alt="" className="hover-bg" />
                <div className="plan-tab">
                  <div className="mb-32">
                    <h4 className="text-white mb-2 fw-600"> Welcome Back</h4>
                    <p className="text-white mb-32 fw-300">Choose your best plan</p>
                  </div>
                  <ul className="nav tab-gradient nav-pills mb-3" id="pills-tab-three" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link font-18 font-heading pill text-white fw-600 active" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="true">monthly</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link font-18 font-heading pill text-white fw-600" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly" aria-selected="false">yearly</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab" tabIndex={0}>
                <div className="row gy-4">
                  <PricingPlanThreeItem
                    iconSrc="assets/images/icons/price-icon1.svg"
                    title="Startup"
                    price="$1589.00"
                    timeUnit="Per Month"
                    description="Essential services for startups and small businesses seeking."
                    features={commonFeatures}
                  />
                  <PricingPlanThreeItem
                    iconSrc="assets/images/icons/price-icon2.svg"
                    title="Professional"
                    price="$1689.00"
                    timeUnit="Per Month"
                    description="Essential services for startups and small businesses seeking."
                    features={commonFeatures}
                    isPopular={true}
                  />
                  <PricingPlanThreeItem
                    iconSrc="assets/images/icons/price-icon3.svg"
                    title="Premium Plan"
                    price="$1789.00"
                    timeUnit="Per Month"
                    description="Essential services for startups and small businesses seeking."
                    features={commonFeatures}
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab" tabIndex={0}>
                <div className="row gy-4">
                  <PricingPlanThreeItem
                    iconSrc="assets/images/icons/price-icon1.svg"
                    title="Startup"
                    price="$1589.00"
                    timeUnit="Per Month"
                    description="Essential services for startups and small businesses seeking."
                    features={commonFeatures}
                  />
                  <PricingPlanThreeItem
                    iconSrc="assets/images/icons/price-icon2.svg"
                    title="Professional"
                    price="$1689.00"
                    timeUnit="Per Month"
                    description="Essential services for startups and small businesses seeking."
                    features={commonFeatures}
                    isPopular={true}
                  />
                  <PricingPlanThreeItem
                    iconSrc="assets/images/icons/price-icon3.svg"
                    title="Premium Plan"
                    price="$1789.00"
                    timeUnit="Per Month"
                    description="Essential services for startups and small businesses seeking."
                    features={commonFeatures}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanThree;