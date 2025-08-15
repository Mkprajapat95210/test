import React from 'react';
import Preloader from './Preloader';
import LayoutOverlays from './LayoutOverlays';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import Header from './Header';
import BreadcrumbFour from './BreadcrumbFour';
import CartSection from './CartSection';
import BrandSlider from './BrandSlider';
import Footer from './Footer';

const CartPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <LayoutOverlays />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <BreadcrumbFour />
      <CartSection />
      <BrandSlider />
      <Footer />
    </>
  );
};

export default CartPage;