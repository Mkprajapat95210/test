import React from 'react';
import Preloader from './components/Preloader';
import OverlayComponent from './components/OverlayComponent';
import SideOverlay from './components/SideOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import BreadcrumbTwo from './components/BreadcrumbTwo';
import BlogSection from './components/BlogSection';
import BrandSection from './components/BrandSection';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

const BlogPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <OverlayComponent />
      <SideOverlay />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <BreadcrumbTwo />
      <BlogSection />
      <BrandSection />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default BlogPage;