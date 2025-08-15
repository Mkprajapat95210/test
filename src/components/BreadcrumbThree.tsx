import React from 'react';
import { AuthorProfileHeaderContent } from './AuthorProfileHeaderContent';
import { MainTabNavigation } from './MainTabNavigation';

export const BreadcrumbThree: React.FC = () => (
  <section className="breadcrumb-three section-bg position-relative z-index-1 overflow-hidden">
    <img src="assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient" />
    <img src="assets/images/shapes/element-moon3.png" alt="" className="element one" />
    <img src="assets/images/shapes/element-moon1.png" alt="" className="element three" />
    <div className="container container-two">
      <div className="breadcrumb-three-content border-bottom border-color">
        <AuthorProfileHeaderContent />
        <MainTabNavigation />
      </div>
    </div>
  </section>
);
