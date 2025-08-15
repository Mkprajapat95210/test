import React from 'react';
import { Preloader, Overlays, ScrollToTop } from './GlobalElements';
import { Header } from './Header';
import { MobileMenu } from './MobileMenu';
import { BreadcrumbThree } from './BreadcrumbThree';
import { ProfileSectionTabs } from './ProfileSectionTabs';
import { BrandSection } from './BrandSection';
import { Footer } from './Footer';
import { BottomFooter } from './BottomFooter';

export const ProfilePage: React.FC = () => {
  return (
    <React.Fragment>
      <Preloader />
      <Overlays />
      <ScrollToTop />
      <MobileMenu />
      <Header />
      <BreadcrumbThree />
      <ProfileSectionTabs />
      <BrandSection />
      <Footer />
      <BottomFooter />
    </React.Fragment>
  );
};
