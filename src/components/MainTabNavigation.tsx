import React from 'react';

export const MainTabNavigation: React.FC = () => (
  <ul className="nav tab-bordered nav-pills mt-4" id="pills-tabbs" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">Profile</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-portfolio-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio" type="button" role="tab" aria-controls="pills-portfolio" aria-selected="false">Portfolio </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-followerss-tab" data-bs-toggle="pill" data-bs-target="#pills-followerss" type="button" role="tab" aria-controls="pills-followerss" aria-selected="false">Followers <span className="notification">100</span> </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-Followingg-tab" data-bs-toggle="pill" data-bs-target="#pills-Followingg" type="button" role="tab" aria-controls="pills-Followingg" aria-selected="false">Following <span className="notification">22</span> </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-Settingss-tab" data-bs-toggle="pill" data-bs-target="#pills-Settingss" type="button" role="tab" aria-controls="pills-Settingss" aria-selected="false">Settings </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-hiddenItem-tab" data-bs-toggle="pill" data-bs-target="#pills-hiddenItem" type="button" role="tab" aria-controls="pills-hiddenItem" aria-selected="false">Hidden Item </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-refunded-tab" data-bs-toggle="pill" data-bs-target="#pills-refunded" type="button" role="tab" aria-controls="pills-refunded" aria-selected="false">Refunded </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-earning-tab" data-bs-toggle="pill" data-bs-target="#pills-earning" type="button" role="tab" aria-controls="pills-earning" aria-selected="false">Earning </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-statement-tab" data-bs-toggle="pill" data-bs-target="#pills-statement" type="button" role="tab" aria-controls="pills-statement" aria-selected="false">Statement </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-review-tab" data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab" aria-controls="pills-review" aria-selected="false">Review </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="pills-download-tab" data-bs-toggle="pill" data-bs-target="#pills-download" type="button" role="tab" aria-controls="pills-download" aria-selected="false">Download </button>
    </li>
  </ul>
);
