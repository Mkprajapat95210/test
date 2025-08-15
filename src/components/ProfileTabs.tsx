import React from 'react';

const ProfileTabs: React.FC = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header pb-0">
        <ul className="nav tab-bordered nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link font-18 font-heading active" id="pills-personalInfo-tab" data-bs-toggle="pill" data-bs-target="#pills-personalInfo" type="button" role="tab" aria-controls="pills-personalInfo" aria-selected="true">Personal Info</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link font-18 font-heading" id="pills-payouts-tab" data-bs-toggle="pill" data-bs-target="#pills-payouts" type="button" role="tab" aria-controls="pills-payouts" aria-selected="false">Payouts</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link font-18 font-heading" id="pills-changePassword-tab" data-bs-toggle="pill" data-bs-target="#pills-changePassword" type="button" role="tab" aria-controls="pills-changePassword" aria-selected="false">Change Password</button>
          </li>
        </ul>
      </div>
      <div className="profile-info-content">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-personalInfo" role="tabpanel" aria-labelledby="pills-personalInfo-tab" tabIndex={0}>
            <form action="#" autoComplete="off">
              <div className="row gy-4">
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="fName" className="form-label mb-2 font-18 font-heading fw-600">First Name</label>
                  <input type="text" className="common-input border" id="fName" defaultValue="Michel" placeholder="First Name"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="lastNamee" className="form-label mb-2 font-18 font-heading fw-600">Last Name</label>
                  <input type="text" className="common-input border" id="lastNamee"  defaultValue="Smith" placeholder="Last Name"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="phonee" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                  <input type="tel" className="common-input border" id="phonee" defaultValue="+880 15589 236 45" placeholder="Phone Number"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="emailAdddd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                  <input type="email" className="common-input border" id="emailAdddd" defaultValue="michel15@gmail.com" placeholder="Email Address"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="cityyy" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                  <div className="select-has-icon">
                    <select className="common-input border" id="cityyy">
                      <option value="1">Dhaka</option>
                      <option value="1">Chandpur</option>
                      <option value="1">Comilla</option>
                      <option value="1">Rangpur</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="Stateee" className="form-label mb-2 font-18 font-heading fw-600">State/Region</label>
                  <div className="select-has-icon">
                    <select className="common-input border" id="Stateee">
                      <option value="1">USA</option>
                      <option value="1">Bangladesh</option>
                      <option value="1">India</option>
                      <option value="1">Pakistan</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="Postcodeee" className="form-label mb-2 font-18 font-heading fw-600">Postcode</label>
                  <input type="text" className="common-input border" id="Postcodeee" defaultValue="1219" placeholder="Post Code"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="Countryyy" className="form-label mb-2 font-18 font-heading fw-600">Country</label>
                  <div className="select-has-icon">
                    <select className="common-input border" id="Countryyy">
                      <option value="1">USA</option>
                      <option value="1">Bangladesh</option>
                      <option value="1">India</option>
                      <option value="1">Pakistan</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12 text-end">
                  <button className="btn btn-main btn-lg pill mt-4"> Update Profile</button>
                </div>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="pills-payouts" role="tabpanel" aria-labelledby="pills-payouts-tab" tabIndex={0}>
            <form action="#" autoComplete="off">
              <div className="row gy-4">
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                  <input type="text" className="common-input border" id="name" defaultValue="Michel" placeholder="Full Name"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="phone" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                  <input type="tel" className="common-input border" id="phone" defaultValue="+880 15589 236 45" placeholder="Phone Number"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="emailAdd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                  <input type="email" className="common-input border" id="emailAdd" defaultValue="michel15@gmail.com" placeholder="Email Address"/>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="city" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                  <div className="select-has-icon">
                    <select className="common-input border" id="city">
                      <option value="1">Dhaka</option>
                      <option value="1">Chandpur</option>
                      <option value="1">Comilla</option>
                      <option value="1">Rangpur</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12 text-end">
                  <button className="btn btn-main btn-lg pill mt-4"> Pay Now</button>
                </div>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="pills-changePassword" role="tabpanel" aria-labelledby="pills-changePassword-tab" tabIndex={0}>
            <form action="#" autoComplete="off">
              <div className="row gy-4">
                <div className="col-12">
                  <label htmlFor="current-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                  <div className="position-relative">
                    <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon " id="current-password" placeholder="************"/>
                    <span className="input-icon input-icon--left"><img src="assets/images/icons/key-icon.svg" alt=""/></span>
                    <span className="input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two" id="#current-password"></span>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="new-password" className="form-label mb-2 font-18 font-heading fw-600">New Password</label>
                  <div className="position-relative">
                    <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon " id="new-password" placeholder="************"/>
                    <span className="input-icon input-icon--left"><img src="assets/images/icons/lock-two.svg" alt=""/></span>
                    <span className="input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two" id="#new-password"></span>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <label htmlFor="confirm-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                  <div className="position-relative">
                    <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon " id="confirm-password" placeholder="************"/>
                    <span className="input-icon input-icon--left"><img src="assets/images/icons/lock-two.svg" alt=""/></span>
                    <span className="input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two" id="#confirm-password"></span>
                  </div>
                </div>
                <div className="col-sm-12 text-end">
                  <button className="btn btn-main btn-lg pill mt-4"> Update Password</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;