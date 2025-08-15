import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import SidebarOverlay from './components/SidebarOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import BreadcrumbTwo from './components/BreadcrumbTwo';
import ContactSection from './components/ContactSection';
import NewsletterTwo from './components/NewsletterTwo';
import BrandSection from './components/BrandSection';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

const ContactPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <SidebarOverlay />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <main className="main-content">
        <BreadcrumbTwo />
        <ContactSection />
        <NewsletterTwo />
        <BrandSection />
      </main>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default ContactPage;