import React from 'react';
import Preloader from './Preloader';
import Overlay from './Overlay';
import SidebarOverlay from './SidebarOverlay';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import DashboardSidebar from './DashboardSidebar';
import DashboardNav from './DashboardNav';
import EarningContent from './EarningContent';
import DashboardFooter from './DashboardFooter';

const EarningPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <SidebarOverlay />
      <ScrollToTop />
      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />
          <div className="dashboard-body">
            <DashboardNav />
            <div className="dashboard-body__content">
              <EarningContent />
            </div>
            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default EarningPage;