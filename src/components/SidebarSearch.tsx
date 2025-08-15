import React from 'react';

const SidebarSearch: React.FC = () => {
  return (
    <form action="#" autoComplete="off">
      <div className="search-box w-100">
        <input type="text" className="common-input border-0" placeholder="Type here..." />
        <button type="submit" className="icon line-height-1 rounded-icon white-version">
          <img src="assets/images/icons/search-dark.svg" alt="" />
        </button>
        <button type="submit" className="icon line-height-1 rounded-icon dark-version">
          <img src="assets/images/icons/search-dark-white.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

export default SidebarSearch;