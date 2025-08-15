import NavMenu from '../common/NavMenu';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container container-full">
        <nav className="header-inner flx-between">
          <div className="logo">
            <a href="index-2.html" className="link white-version">
              <img src="assets/images/logo/logo-two.png" alt="Logo" />
            </a>
            <a href="index-2.html" className="link dark-version">
              <img src="assets/images/logo/white-logo.png" alt="" />
            </a>
          </div>
          <div className="header-menu d-lg-block d-none">
            <NavMenu />
          </div>
          <div className="header-right flx-align">
            <a href="cart.html" className="header-right__button cart-btn position-relative">
              <img src="assets/images/icons/cart.svg" alt="" className="white-version" />
              <img src="assets/images/icons/cart-white.svg" alt="" className="dark-version" />
              <span className="qty-badge font-12">0</span>
            </a>
            <div className="theme-switch-wrapper position-relative">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" className="d-none" id="checkbox" />
                <span className="slider text-black header-right__button white-version">
                  <img src="assets/images/icons/sun.svg" alt="" />
                </span>
                <span className="slider text-black header-right__button dark-version">
                  <img src="assets/images/icons/moon.svg" alt="" />
                </span>
              </label>
            </div>
            <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
              <a href="register.html" className="btn btn-main pill">
                <span className="icon-left icon">
                  <img src="assets/images/icons/user.svg" alt="" />
                </span>
                Create Account
              </a>
              <div className="language-select flx-align select-has-icon">
                <img src="assets/images/icons/globe.svg" alt="" className="globe-icon white-version" />
                <img src="assets/images/icons/globe-white.svg" alt="" className="globe-icon dark-version" />
                <select className="select py-0 ps-2 border-0 fw-500">
                  <option value="1">Eng</option>
                  <option value="2">Bn</option>
                  <option value="3">Eur</option>
                  <option value="4">Urd</option>
                </select>
              </div>
            </div>
            <button type="button" className="toggle-mobileMenu d-lg-none">
              <i className="las la-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
