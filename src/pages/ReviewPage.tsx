import React from 'react';
import Preloader from '../components/Preloader';
import Overlay from '../components/Overlay';
import ScrollToTop from '../components/ScrollToTop';
import MobileMenu from '../components/MobileMenu';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardNav from '../components/DashboardNav';
import ReviewSection from '../components/ReviewSection';
import DashboardFooter from '../components/DashboardFooter';

const ReviewPage: React.FC = () => {
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
              <ReviewSection />
            </div>
            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewPage;