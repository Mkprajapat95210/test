import React from 'react';
import Preloader from './Preloader';
import Overlay from './Overlay';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import DashboardSidebar from './DashboardSidebar';
import DashboardNav from './DashboardNav';
import FollowSection from './FollowSection';
import DashboardFooter from './DashboardFooter';

const FollowingPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <ScrollToTop />
      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />
          <div className="dashboard-body">
            <DashboardNav />
            <div className="dashboard-body__content">
              <FollowSection />
            </div>
            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowingPage;