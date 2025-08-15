import React from 'react';
import GlobalUIElements from '../components/GlobalUIElements';
import MobileMenu from '../components/MobileMenu';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardNav from '../components/DashboardNav';
import RefundContent from '../components/RefundContent';
import DashboardFooter from '../components/DashboardFooter';

const RefundPage: React.FC = () => {
  return (
    <>
      <GlobalUIElements />
      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />

          <div className="dashboard-body">
            <DashboardNav />
            <RefundContent />
            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPage;
