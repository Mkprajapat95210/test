import React from 'react';
import LoaderMask from './components/LoaderMask';
import Overlay from './components/Overlay';
import SideOverlay from './components/SideOverlay';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';
import SaleOffer from './components/SaleOffer';
import Header from './components/Header';
import Banner from './components/Banner';
import PopularCategories from './components/PopularCategories';
import NewArrivalProducts from './components/NewArrivalProducts';
import FeaturedProducts from './components/FeaturedProducts';
import SellingProducts from './components/SellingProducts';
import TopFeaturedAuthor from './components/TopFeaturedAuthor';
import TopPerformance from './components/TopPerformance';
import BlogSection from './components/BlogSection';
import BecomeSeller from './components/BecomeSeller';
import BrandSection from './components/BrandSection';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

const HomePage: React.FC = () => {
  return (
    <>
      <LoaderMask />
      <Overlay />
      <SideOverlay />
      <ScrollToTop />
      <MobileMenu />
      <main className="change-gradient">
        <SaleOffer />
        <Header />
        <Banner />
        <PopularCategories />
        <NewArrivalProducts />
        <FeaturedProducts />
        <SellingProducts />
        <TopFeaturedAuthor />
        <TopPerformance />
        <BlogSection />
        <BecomeSeller />
        <BrandSection />
        <Footer />
        <BottomFooter />
      </main>
    </>
  );
};

export default HomePage;
