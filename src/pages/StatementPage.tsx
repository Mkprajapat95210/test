import React from 'react';
import Preloader from './components/Preloader';
import MainOverlay from './components/MainOverlay';
import SidebarOverlay from './components/SidebarOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardNavbar from './components/DashboardNavbar';
import StatementCard from './components/StatementCard';
import StatementsTable from './components/StatementsTable';
import DashboardFooter from './components/DashboardFooter';

const StatementPage: React.FC = () => {
  const totalEarningData = [
    { label: 'My Funds', amount: '$0.00' },
    { label: 'Earnings', amount: '$0.00' },
    { label: 'Tax Withheld', amount: '$0.00' },
    { label: 'Fees', amount: '$0.00' },
  ];

  const monthlyEarningsData = [
    { label: 'My Funds', amount: '$0.00' },
    { label: 'Earnings', amount: '$0.00' },
    { label: 'Tax Withheld', amount: '$0.00' },
    { label: 'Fees', amount: '$0.00' },
  ];

  return (
    <>
      <Preloader />
      <MainOverlay />
      <SidebarOverlay />
      <ScrollToTop />
      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />

          <div className="dashboard-body">
            <DashboardNavbar />

            <div className="dashboard-body__content">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <StatementCard title="Total Earning" data={totalEarningData} />
                </div>
                <div className="col-lg-6">
                  <StatementCard title="Monthly Earnings" data={monthlyEarningsData} />
                </div>
                <StatementsTable />
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default StatementPage;