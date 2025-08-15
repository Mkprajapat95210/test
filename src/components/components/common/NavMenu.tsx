interface NavMenuProps {
  isMobile?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isMobile = false }) => {
  const menuClass = isMobile ? "nav-menu flx-align nav-menu--mobile" : "nav-menu flx-align ";
  const submenuLink = isMobile ? "nav-submenu__link" : "nav-submenu__link";

  return (
    <ul className={menuClass}>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Home</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="index-2.html" className={submenuLink}> Home One</a>
          </li>
          <li className="nav-submenu__item">
            <a href="index-two.html" className={submenuLink}> Home Two</a>
          </li>
          <li className="nav-submenu__item">
            <a href="index-three.html" className={submenuLink}> Home Three</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Products</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="all-product.html" className={submenuLink}> All Products</a>
          </li>
          <li className="nav-submenu__item">
            <a href="product-details.html" className={submenuLink}> Product Details</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="profile.html" className={submenuLink}> Profile</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart.html" className={submenuLink}> Shopping Cart</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart-personal.html" className={submenuLink}> Mailing Address</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart-payment.html" className={submenuLink}> Payment Method</a>
          </li>
          <li className="nav-submenu__item">
            <a href="cart-thank-you.html" className={submenuLink}> Preview Order</a>
          </li>
          <li className="nav-submenu__item">
            <a href="dashboard.html" className={submenuLink}> Dashboard</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item has-submenu">
        <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
        <ul className="nav-submenu">
          <li className="nav-submenu__item">
            <a href="blog.html" className={submenuLink}> Blog</a>
          </li>
          <li className="nav-submenu__item">
            <a href="blog-details.html" className={submenuLink}> Blog Details</a>
          </li>
          <li className="nav-submenu__item">
            <a href="blog-details-sidebar.html" className={submenuLink}> Blog Details Sidebar</a>
          </li>
        </ul>
      </li>
      <li className="nav-menu__item">
        <a href="contact.html" className="nav-menu__link">Contact</a>
      </li>
    </ul>
  );
};
export default NavMenu;
