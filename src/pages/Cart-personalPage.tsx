import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import SidebarOverlay from './components/SidebarOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import BreadcrumbFour from './components/BreadcrumbFour';
import CartPersonalSection from './components/CartPersonalSection';
import BrandSlider from './components/BrandSlider';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

const CartPersonalPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <SidebarOverlay />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <main>
        <BreadcrumbFour />
        <CartPersonalSection />
        <BrandSlider />
      </main>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default CartPersonalPage;