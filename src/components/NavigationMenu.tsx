import React from 'react';

const NavigationMenu: React.FC = () => {
  return (
    <ul className="nav-menu flx-align">
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Home</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="index-2.html" className="nav-submenu__link"> Home One</a>
          </li>
          <li className="nav-submenu__item">
            <a href="index-two.html" className="nav-submenu__link"> Home Two</a>
          </li>
          <li className="nav-submenu__item">
            <a href="index-three.html" className="nav-submenu__link"> Home Three</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Products</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="all-product.html" className="nav-submenu__link"> All Products</a>
          </li>
          <li className="nav-submenu__item">
            <a href="product-details.html" className="nav-submenu__link"> Product Details</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="profile.html" className="nav-submenu__link"> Profile</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart.html" className="nav-submenu__link"> Shopping Cart</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart-personal.html" className="nav-submenu__link"> Mailing Address</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart-payment.html" className="nav-submenu__link"> Payment Method</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart-thank-you.html" className="nav-submenu__link"> Preview Order</a>
          </li>
          <li className="nav-submenu__item">
            <a href="dashboard.html" className="nav-submenu__link"> Dashboard</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="blog.html" className="nav-submenu__link"> Blog</a>
          </li>
          <li className="nav-submenu__item">
            <a href="blog-details.html" className="nav-submenu__link"> Blog Details</a>
          </li>
          <li className="nav-submenu__item">
            <a href="blog-details-sidebar.html" className="nav-submenu__link"> Blog Details Sidebar</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item">
        <a href="contact.html" className="nav-menu__link">Contact</a>
      </li>
    </ul>
  );
};

export default NavigationMenu;
