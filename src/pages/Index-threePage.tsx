import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import BannerThree from './components/BannerThree';
import BrandThree from './components/BrandThree';
import AboutThree from './components/AboutThree';
import ServiceThree from './components/ServiceThree';
import FeaturedProduct from './components/FeaturedProduct';
import ChooseUs from './components/ChooseUs';
import WorkingProcess from './components/WorkingProcess';
import LatestProject from './components/LatestProject';
import Team from './components/Team';
import PaymentMethodSection from './components/PaymentMethodSection';
import TestimonialThree from './components/TestimonialThree';
import PricingPlanThree from './components/PricingPlanThree';
import Blog from './components/Blog';
import NewsletterThree from './components/NewsletterThree';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <ScrollToTop />
      <MobileMenu />

      <main className="main-wrapper index-three-wrapper position-relative z-index-1">
        <img src="assets/images/shapes/border-box.png" alt="" className="border-box" />
        <Header />
        <BannerThree />
        <BrandThree />
        <AboutThree />
        <ServiceThree />
        <FeaturedProduct />
        <ChooseUs />
        <WorkingProcess />
        <LatestProject />
        <Team />
        <PaymentMethodSection />
        <TestimonialThree />
        <PricingPlanThree />
        <Blog />
        <NewsletterThree />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;