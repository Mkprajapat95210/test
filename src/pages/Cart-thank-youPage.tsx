import React, { Fragment } from 'react';
import Preloader from './Preloader';
import Overlay from './Overlay';
import SideOverlay from './SideOverlay';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import Header from './Header';
import ThankYouSection from './ThankYouSection';
import BrandSlider from './BrandSlider';
import Footer from './Footer';
import BottomFooter from './BottomFooter';

const CartThankYouPage: React.FC = () => {
  return (
    <Fragment>
      <Preloader />
      <Overlay />
      <SideOverlay />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <main>
        <ThankYouSection />
        <BrandSlider />
      </main>
      <Footer />
      <BottomFooter />
    </Fragment>
  );
};

export default CartThankYouPage;