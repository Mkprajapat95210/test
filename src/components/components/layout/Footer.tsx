import SocialIconList from '../common/SocialIconList';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <img src="assets/images/shapes/pattern.png" alt="" className="bg-pattern" />
      <img src="assets/images/shapes/element1.png" alt="" className="element one" />
      <img src="assets/images/shapes/element2.png" alt="" className="element two" />
      <img src="assets/images/gradients/footer-gradient.png" alt="" className="bg--gradient" />

      <div className="container container-two">
        <div className="row gy-5">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget">
              <div className="footer-widget__logo">
                <a href="index-2.html"> <img src="assets/images/logo/white-logo.png" alt="" /></a>
              </div>
              <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
              <div className="footer-widget__social">
                <SocialIconList />
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-xs-6">
            <div className="footer-widget">
              <h5 className="footer-widget__title text-white">Useful Link</h5>
              <ul className="footer-lists">
                <li className="footer-lists__item"><a href="all-product.html" className="footer-lists__link">Product </a></li>
                <li className="footer-lists__item"><a href="product-details.html" className="footer-lists__link">Product Details</a></li>
                <li className="footer-lists__item"><a href="profile.html" className="footer-lists__link">Profile </a></li>
                <li className="footer-lists__item"><a href="cart.html" className="footer-lists__link">Shopping Cart</a></li>
                <li className="footer-lists__item"><a href="dashboard.html" className="footer-lists__link">Dashboard</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
            <div className="footer-widget">
              <h5 className="footer-widget__title text-white">Quick Links</h5>
              <ul className="footer-lists">
                <li className="footer-lists__item"><a href="dashboard.html" className="footer-lists__link">Dashboard </a></li>
                <li className="footer-lists__item"><a href="login.html" className="footer-lists__link">Login </a></li>
                <li className="footer-lists__item"><a href="register.html" className="footer-lists__link">Register</a></li>
                <li className="footer-lists__item"><a href="blog.html" className="footer-lists__link">Blog </a></li>
                <li className="footer-lists__item"><a href="blog-details.html" className="footer-lists__link">Blog Details</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="footer-widget">
              <h5 className="footer-widget__title text-white">Subscribe</h5>
              <p className="footer-widget__desc">Subscribe our newsletter to get updated the latest news</p>
              <form action="#" className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
                <input type="text" className="form-control common-input pill text-white" placeholder="Enter Mail" />
                <button type="submit" className="btn btn-main btn-lg w-100 pill">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text font-14"> Copyright &copy; 2024 DPmarket, All rights reserved.</p>
            <div className="footer-links">
              <a href="#" className="footer-link font-14">Terms of service</a>
              <a href="#" className="footer-link font-14">Privacy Policy</a>
              <a href="contact.html" className="footer-link font-14">cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
