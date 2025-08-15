import React from 'react';
import GlobalUIElements from './GlobalUIElements';
import MobileMenu from './MobileMenu';
import Header from './Header';
import BlogDetailsSection from './BlogDetailsSection';
import ArticleSection from './ArticleSection';
import BrandSection from './BrandSection';
import Footer from './Footer';

const BlogDetailsPage: React.FC = () => {
  return (
    <>
      <GlobalUIElements />
      <MobileMenu />
      <Header />
      <BlogDetailsSection />
      <ArticleSection />
      <BrandSection />
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
