import React from 'react';

interface LogoProps {
  isMobile?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isMobile }) => {
  return (
    <a href="index-2.html" className={`link ${isMobile ? 'mobile-menu__logo' : ''} white-version`}>
      <img src="assets/images/logo/logo.png" alt="Logo" className="white-version" />
      <img src="assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
    </a>
  );
};

export default Logo;