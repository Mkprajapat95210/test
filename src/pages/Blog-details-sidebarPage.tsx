import React from 'react';
import Preloader from './Preloader';
import Overlay from './Overlay';
import ScrollToTop from './ScrollToTop';
import MobileMenu from './MobileMenu';
import Header from './Header';
import BlogDetailsSection from './BlogDetailsSection';
import ArticleSection from './ArticleSection';
import BrandSection from './BrandSection';
import Footer from './Footer';
import BottomFooter from './BottomFooter';

const BlogDetailsSidebarPage: React.FC = () => {
  return (
    <>
      <Preloader />
      <Overlay />
      <div className="side-overlay"></div>
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <BlogDetailsSection />
      <ArticleSection />
      <BrandSection />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default BlogDetailsSidebarPage;