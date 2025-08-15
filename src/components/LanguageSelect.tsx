import React from 'react';

const LanguageSelect: React.FC = () => {
  return (
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
  );
};
export default LanguageSelect;