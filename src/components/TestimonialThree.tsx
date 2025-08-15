import React from 'react';

const TestimonialThree: React.FC = () => {
  return (
    <section className="testimonial-three position-relative padding-y-120 overflow-hidden section-bg z-index-1">
      <img src="assets/images/shapes/footer-shape3.png" alt="" className="position-absolute start-0 top-0" />
      <img src="assets/images/gradients/testimonail-gradient.png" alt="" className="bg--gradient" />
      <img src="assets/images/shapes/element2.png" alt="" className="element two top-50" />
      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">Our Happy Client</h3>
          <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
        </div>
        <div className="row gy-4">
          <div className="col-xl-5 col-lg-6">
            <div className="testimonial-three-thumb-slider">
              <div className="testimonial-three-thumb">
                <img src="assets/images/thumbs/testimonial-img1.png" alt="" />
              </div>
              <div className="testimonial-three-thumb">
                <img src="assets/images/thumbs/testimonial-img1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-1 d-xl-block d-none"></div>
          <div className="col-lg-6">
            <div className="testimonial-three-item-slider">
              <div className="testimonial-three-item">
                <img src="assets/images/icons/testi-quote.svg" alt="" className="testimonial-three-item__quote" />
                <p className="testimonial-three-item__desc fw-500 mb-24 text-heading mt-3">Trust Saason provides reviews and ratings from verified users, with a specific focus on the software and services offered by the platform. It offers detailed feedback and insights.</p>
                <h6 className="testimonial-three-item__name mb-2">Cristan Vail, Analytics</h6>
                <span className="testimonial-three-item__text mb-2 font-18">From Australia</span>
                <ul className="star-rating">
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                </ul>
              </div>
              <div className="testimonial-three-item">
                <img src="assets/images/icons/testi-quote.svg" alt="" className="testimonial-three-item__quote" />
                <p className="testimonial-three-item__desc fw-500 mb-24 text-heading mt-3">Trust Saason provides reviews and ratings from verified users, with a specific focus on the software and services offered by the platform. It offers detailed feedback and insights.</p>
                <h6 className="testimonial-three-item__name mb-2">Cristan Vail, Analytics</h6>
                <span className="testimonial-three-item__text mb-2 font-18">From Australia</span>
                <ul className="star-rating">
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                  <li className="star-rating__item font-20"><i className="las la-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;