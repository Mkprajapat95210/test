import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <form action="#">
      <div className="row gy-4">
        <div className="col-12">
          <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Email</label>
          <div className="position-relative">
            <input type="email" className="common-input common-input--bg common-input--withIcon" id="email" placeholder="infoname@mail.com" />
            <span className="input-icon"><img src="assets/images/icons/envelope-icon.svg" alt="" /></span>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="your-password" className="form-label mb-2 font-18 font-heading fw-600">Password</label>
          <div className="position-relative">
            <input type="password" className="common-input common-input--bg common-input--withIcon" id="your-password" placeholder="6+ characters, 1 Capital letter" />
            <span className="input-icon toggle-password cursor-pointer" id="#your-password"><img src="assets/images/icons/lock-icon.svg" alt="" /></span>
          </div>
        </div>
        <div className="col-12">
          <div className="flx-between gap-1">
            <div className="common-check my-2">
              <input className="form-check-input" type="checkbox" name="checkbox" id="keepMe" />
              <label className="form-check-label mb-0 fw-400 font-14 text-body" htmlFor="keepMe">Keep me signed in</label>
            </div>
            <a href="#" className="forgot-password text-decoration-underline text-main text-poppins font-14">Forgot password?</a>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-main btn-lg w-100 pill"> Sign In</button>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill">
            <span className="icon icon-left"><img src="assets/images/icons/google.svg" alt="" /></span>
            Sign in with google
          </button>
        </div>
        <div className="col-sm-12 mb-0">
          <div className="have-account">
            <p className="text font-14">New to the market? <a className="link text-main text-decoration-underline fw-500" href="register.html">sign up</a></p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
