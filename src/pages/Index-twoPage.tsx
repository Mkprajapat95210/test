import React from 'react';
import Preloader from './components/Preloader';
import Overlay from './components/Overlay';
import SideOverlay from './components/SideOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import SaleOffer from './components/SaleOffer';
import Header from './components/Header';
import BannerTwo from './components/BannerTwo';
import PopularItemsSection from './components/PopularItemsSection';
import SellingProductsSection from './components/SellingProductsSection';
import NewArrivalProductsSection from './components/NewArrivalProductsSection';
import FeaturedContributorsSection from './components/FeaturedContributorsSection';
import ServiceSection from './components/ServiceSection';
import TestimonialSection from './components/TestimonialSection';
import PricingPlanSection from './components/PricingPlanSection';
import BrandSection from './components/BrandSection';
import BecomeSellerSection from './components/BecomeSellerSection';
import ArticleSection from './components/ArticleSection';
import ResourceSection from './components/ResourceSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <SideOverlay />
      <ScrollToTop />
      <MobileMenu />
      <SaleOffer />
      <Header />
      <BannerTwo />
      <PopularItemsSection />
      <SellingProductsSection />
      <NewArrivalProductsSection />
      <FeaturedContributorsSection />
      <ServiceSection />
      <TestimonialSection />
      <PricingPlanSection />
      <BrandSection />
      <BecomeSellerSection />
      <ArticleSection />
      <ResourceSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default HomePage;
