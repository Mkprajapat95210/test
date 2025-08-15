import React from 'react';

const DarkLightModeToggle: React.FC = () => {
  return (
    <div className="dark-light-mode">
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
    </div>
  );
};

export default DarkLightModeToggle;