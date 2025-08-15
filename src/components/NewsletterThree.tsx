import React from 'react';

const NewsletterThree: React.FC = () => {
  return (
    <div className="newsletter-three padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="newsletter-three-content overflow-hidden z-index-1">
              <img src="assets/images/gradients/newsletter-bg.png" alt="" className="bg--gradient" />
              <img src="assets/images/thumbs/newsletter-img.png" alt="" className="newsletter-three-content__img" />
              <h3 className="mb-3">Newsletter</h3>
              <p className="mb-24 font-18">Subscribe our newsletter to get the latest news</p>
              <div className="search-box">
                <input type="text" className="common-input common-input--lg shadow-sm" placeholder="Enter Mail" />
                <button type="submit" className="btn btn-main btn-lg">
                  <span className="d-sm-block d-none">Subscribe Now</span>
                  <span className="icon d-sm-none d-block"><i className="fas fa-bell"></i></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newsletter-three-content support-content overflow-hidden z-index-1">
              <img src="assets/images/gradients/support-gradient.png" alt="" className="bg--gradient" />
              <img src="assets/images/shapes/arrow-round.png" alt="" className="arrow-round" />
              <img src="assets/images/thumbs/newsletter-thumb.png" alt="" className="newsletter-three-content__img" />
              <h3 className="mb-3">Support 24/7</h3>
              <p className="mb-24 font-18">Wanna talk? Send us a message</p>
              <a href="mailto:azency@office.com" className="btn btn-outline-black btn-lg">azency@office.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterThree;