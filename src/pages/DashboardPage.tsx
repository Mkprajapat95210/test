import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import SideOverlay from './components/SideOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardNav from './components/DashboardNav';
import WelcomeBalance from './components/WelcomeBalance';
import DashboardWidgetsRow from './components/DashboardWidgetsRow';
import SalesHistoryCard from './components/SalesHistoryCard';
import TopCountriesCard from './components/TopCountriesCard';
import SalesTable from './components/SalesTable';
import DashboardFooter from './components/DashboardFooter';

const DashboardPage = () => {
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
              <WelcomeBalance />
              <div className="dashboard-body__item-wrapper">
                <DashboardWidgetsRow />

                <div className="dashboard-body__item">
                  <div className="row gy-4">
                    <SalesHistoryCard />
                    <TopCountriesCard />
                  </div>
                </div>

                <SalesTable />
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DashboardPage;