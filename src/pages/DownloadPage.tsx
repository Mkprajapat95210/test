import React from 'react';
import { Preloader } from './components/Preloader';
import { Overlay } from './components/Overlay';
import { SideOverlay } from './components/SideOverlay';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileMenu } from './components/MobileMenu';
import { DashboardSidebar } from './components/DashboardSidebar';
import { DashboardNav } from './components/DashboardNav';
import { DashboardFooter } from './components/DashboardFooter';
import { DownloadsContent } from './components/DownloadsContent';

const DownloadsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Preloader />
      <Overlay />
      <SideOverlay />
      <ScrollToTop />
      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />
          <div className="dashboard-body">
            <DashboardNav />
            <div className="dashboard-body__content">
              <DownloadsContent />
            </div>
            <DashboardFooter />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DownloadsPage;
