import React from 'react';
import Preloader from './components/Preloader';
import Overlays from './components/Overlays';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardNav from './components/DashboardNav';
import SettingSidebar from './components/SettingSidebar';
import PersonalInfoForm from './components/PersonalInfoForm';
import ProfileForm from './components/ProfileForm';
import PaymentMethodForm from './components/PaymentMethodForm';
import EmailSettingForm from './components/EmailSettingForm';
import SocialNetworkForm from './components/SocialNetworkForm';
import DashboardFooter from './components/DashboardFooter';

const SettingPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlays />
      <ScrollToTop />
      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />

          <div className="dashboard-body">
            <DashboardNav />

            <div className="dashboard-body__content">
              <div className="card common-card">
                <div className="card-body">
                  <div className="row gy-4">
                    <SettingSidebar />

                    <div className="col-lg-8">
                      <div className="setting-content" data-bs-spy="scroll" data-bs-target="#sidebar-scroll-spy">
                        <PersonalInfoForm />
                        <ProfileForm />
                        <PaymentMethodForm />
                        <EmailSettingForm />
                        <SocialNetworkForm />
                        <button type="button" className="btn w-100 btn-main btn-md">Save Information</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingPage;