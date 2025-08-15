import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import SidebarOverlay from './components/SidebarOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardNav from './components/DashboardNav';
import FollowerSection from './components/FollowerSection';
import DashboardFooter from './components/DashboardFooter';

const FollowerPage: React.FC = () => {
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
              <FollowerSection />
            </div>
            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowerPage;