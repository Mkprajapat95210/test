import React from 'react';
import FooterLists from './FooterLists';

const FooterQuickLinks: React.FC = () => {
  const links = [
    { href: 'dashboard.html', text: 'Dashboard' },
    { href: 'login.html', text: 'Login' },
    { href: 'register.html', text: 'Register' },
    { href: 'blog.html', text: 'Blog' },
    { href: 'blog-details.html', text: 'Blog Details' }
  ];
  return (
    <div className="footer-widget">
      <h5 className="footer-widget__title text-white">Quick Links</h5>
      <FooterLists links={links} />
    </div>
  );
};

export default FooterQuickLinks;