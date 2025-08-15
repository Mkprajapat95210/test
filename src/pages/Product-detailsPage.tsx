import React from 'react';
import Preloader from '../components/Preloader';
import Overlay from '../components/Overlay';
import SidebarOverlay from '../components/SidebarOverlay';
import ScrollToTop from '../components/ScrollToTop';
import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';
import BreadcrumbTwo from '../components/BreadcrumbTwo';
import ProductDetailsSection from '../components/ProductDetailsSection';
import BrandSlider from '../components/BrandSlider';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

const ProductDetailsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Preloader />
      <Overlay />
      <SidebarOverlay />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <BreadcrumbTwo />
      <ProductDetailsSection />
      <BrandSlider />
      <Footer />
      <BottomFooter />
    </React.Fragment>
  );
};

export default ProductDetailsPage;