import Preloader from '../components/common/Preloader';
import Overlay from '../components/common/Overlay';
import ScrollToTop from '../components/common/ScrollToTop';
import MobileMenu from '../components/layout/MobileMenu';
import SaleOffer from '../components/layout/SaleOffer';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import PopularCategoriesSection from '../components/sections/PopularCategoriesSection';
import NewArrivalProductsSection from '../components/sections/NewArrivalProductsSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import BestSellingProductsSection from '../components/sections/BestSellingProductsSection';
import TopFeaturedAuthorSection from '../components/sections/TopFeaturedAuthorSection';
import TopPerformanceSection from '../components/sections/TopPerformanceSection';
import BlogSection from '../components/sections/BlogSection';
import BecomeSellerSection from '../components/sections/BecomeSellerSection';
import BrandSection from '../components/sections/BrandSection';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <ScrollToTop />
      <MobileMenu />

      <main className="change-gradient">
        <SaleOffer />
        <Header />
        <HeroSection />
        <PopularCategoriesSection />
        <NewArrivalProductsSection />
        <FeaturedProductsSection />
        <BestSellingProductsSection />
        <TopFeaturedAuthorSection />
        <TopPerformanceSection />
        <BlogSection />
        <BecomeSellerSection />
        <BrandSection />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
