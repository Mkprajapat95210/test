import React from 'react';
import FooterLists from './FooterLists';

const FooterUsefulLinks: React.FC = () => {
  const links = [
    { href: 'all-product.html', text: 'Product' },
    { href: 'product-details.html', text: 'Product Details' },
    { href: 'profile.html', text: 'Profile' },
    { href: 'cart.html', text: 'Shopping Cart' },
    { href: 'dashboard.html', text: 'Dashboard' }
  ];
  return (
    <div className="footer-widget">
      <h5 className="footer-widget__title text-white">Useful Link</h5>
      <FooterLists links={links} />
    </div>
  );
};

export default FooterUsefulLinks;