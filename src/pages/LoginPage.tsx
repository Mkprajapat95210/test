import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import SidebarOverlay from './components/SidebarOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import AccountSection from './components/AccountSection';

const LoginPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <SidebarOverlay />
      <ScrollToTop />
      <MobileMenu />
      <AccountSection />
    </>
  );
};

export default LoginPage;
