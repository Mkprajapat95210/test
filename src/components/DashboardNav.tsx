const DashboardNav = () => {
  return (
    <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
      <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
        <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center">
          <i className="las la-bars"></i>
        </button>
        <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center">
          <img src="assets/images/icons/angle-right.svg" alt="" />
        </button>
        <form action="#" className="search-input d-sm-block d-none">
          <span className="icon">
            <img src="assets/images/icons/search-dark.svg" alt="" className="white-version" />
            <img src="assets/images/icons/search-dark-white.svg" alt="" className="dark-version" />
          </span>
          <input type="text" className="common-input common-input--md common-input--bg pill w-100" placeholder="Search here..." />
        </form>
      </div>
      <div className="dashboard-nav__right">
        <div className="header-right flx-align">
          <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">
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
            <div className="user-profile">
              <button className="user-profile__button flex-align">
                <span className="user-profile__thumb">
                  <img src="assets/images/thumbs/user-profile.png" className="cover-img" alt="" />
                </span>
              </button>
              <ul className="user-profile-dropdown">
                <li className="sidebar-list__item">
                  <a href="dashboard-profile.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                      <img src="assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Profile</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="setting.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                      <img src="assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Settings</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="login.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="assets/images/icons/sidebar-icon13.svg" alt="" className="icon" />
                      <img src="assets/images/icons/sidebar-icon-active13.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
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

export default DashboardNav;