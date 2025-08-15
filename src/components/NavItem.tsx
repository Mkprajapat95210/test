import React from 'react';

interface NavItemProps {
  children: React.ReactNode;
  hasSubmenu?: boolean;
  className?: string;
  linkHref?: string;
  linkText?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, hasSubmenu, className, linkHref, linkText }) => {
  return (
    <li className={`nav-menu__item ${hasSubmenu ? 'has-submenu' : ''} ${className || ''}`}>
      {linkText && linkHref ? (
        <a href={linkHref} className="nav-menu__link">
          {linkText}
        </a>
      ) : null}
      {children}
    </li>
  );
};

export default NavItem;