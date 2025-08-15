import NavMenu from '../common/NavMenu';

const MobileMenu: React.FC = () => {
  return (
    <div className="mobile-menu d-lg-none d-block">
      <button type="button" className="close-button">
        <i className="las la-times"></i>
      </button>
      <div className="mobile-menu__inner">
        <a href="index-2.html" className="mobile-menu__logo">
          <img src="assets/images/logo/logo.png" alt="Logo" className="white-version" />
          <img src="assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
        </a>
        <div className="mobile-menu__menu">
          <NavMenu isMobile={true} />
          <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
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
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
