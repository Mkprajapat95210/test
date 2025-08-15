const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <button type="button" className="dashboard-sidebar__close d-lg-none d-flex"><i className="las la-times"></i></button>
      <div className="dashboard-sidebar__inner">
        <a href="index-2.html" className="logo mb-48">
          <img src="assets/images/logo/logo.png" alt="" className="white-version" />
          <img src="assets/images/logo/white-logo-two.png" alt="" className="dark-version" />
        </a>
        <a href="index-2.html" className="logo favicon mb-48">
          <img src="assets/images/logo/favicon.png" alt="" />
        </a>
        <ul className="sidebar-list">
          <li className="sidebar-list__item">
            <a href="dashboard.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon1.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active1.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Dashboard</span>
            </a>
          </li>
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
            <a href="follower.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon4.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active4.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Followers</span>
            </a>
          </li>
          <li className="sidebar-list__item">
            <a href="following.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon5.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active5.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Followings</span>
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
            <a href="statement.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon12.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active12.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Statements</span>
            </a>
          </li>
          <li className="sidebar-list__item">
            <a href="earning.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon11.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active11.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Earnings</span>
            </a>
          </li>
          <li className="sidebar-list__item">
            <a href="review.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon7.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active7.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Reviews</span>
            </a>
          </li>
          <li className="sidebar-list__item">
            <a href="download.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon6.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active6.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Downloads</span>
            </a>
          </li>
          <li className="sidebar-list__item">
            <a href="refund.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src="assets/images/icons/sidebar-icon8.svg" alt="" className="icon" />
                <img src="assets/images/icons/sidebar-icon-active8.svg" alt="" className="icon icon-active" />
              </span>
              <span className="text">Refunds</span>
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
    </div>
  );
};

export default DashboardSidebar;