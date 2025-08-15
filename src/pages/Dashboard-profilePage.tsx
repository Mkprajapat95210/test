import React from 'react';
import Preloader from './Preloader';
import Overlay from './Overlay';
import SidebarOverlay from './SidebarOverlay';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import DashboardSidebar from './DashboardSidebar';
import DashboardNav from './DashboardNav';
import CoverPhoto from './CoverPhoto';
import ProfileInfo from './ProfileInfo';
import ProfileTabs from './ProfileTabs';
import DashboardFooter from './DashboardFooter';

const DashboardProfilePage: React.FC = () => {
  return (
    <>
      <Preloader/>
      <Overlay/>
      <SidebarOverlay/>
      <ScrollToTop/>
      <MobileMenu/>

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar/>
          <div className="dashboard-body">
            <DashboardNav/>
            <CoverPhoto/>
            <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100">
              <div className="profile">
                <div className="row gy-4">
                  <div className="col-xxl-3 col-xl-4">
                    <ProfileInfo/>
                  </div>
                  <div className="col-xxl-9 col-xl-8">
                    <ProfileTabs/>
                  </div>
                </div>
              </div>
            </div>
            <DashboardFooter/>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardProfilePage;