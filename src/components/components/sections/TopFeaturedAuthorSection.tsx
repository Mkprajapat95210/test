import ProductItem, { ProductItemProps } from '../common/ProductItem';

const topFeaturedAuthorProductsData: ProductItemProps[] = [
  {
    thumbSrc: "assets/images/thumbs/product-img9.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$120",
    prevPrice: "$259",
    sales: "1200",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
    className: "box-shadow"
  },
  {
    thumbSrc: "assets/images/thumbs/product-img10.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$129",
    prevPrice: "$236",
    sales: "100",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
    className: "box-shadow"
  },
  {
    thumbSrc: "assets/images/thumbs/product-img11.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$79",
    prevPrice: "$99",
    sales: "900",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
    className: "box-shadow"
  },
  {
    thumbSrc: "assets/images/thumbs/product-img4.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$59",
    prevPrice: "$129",
    sales: "1225",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
    className: "box-shadow"
  },
];

const TopFeaturedAuthorSection: React.FC = () => {
  return (
    <section className="top-author padding-y-120 section-bg position-relative z-index-1">
      <img src="assets/images/gradients/featured-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 start-0 z-index--1 white-version" />
      <img src="assets/images/shapes/spider-net-white2.png" alt="" className="spider-net position-absolute top-0 start-0 z-index--1 dark-version" />
      <img src="assets/images/shapes/pattern-curve-three.png" alt="" className="position-absolute top-0 end-0 z-index--1" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />

      <div className="container container-two">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Top Featured Author</h3>
                <p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
              </div>
              <div className="author-info d-flex align-items-center gap-3">
                <div className="author-info__thumb">
                  <img src="assets/images/thumbs/author-img.png" alt="" />
                </div>
                <div className="author-info__content">
                  <h4 className="author-info__name mb-1">Amplify</h4>
                  <span className="author-info__text">Member Since 2021</span>
                </div>
              </div>
              <div className="flx-align gap-2 mt-48">
                <a href="profile.html" className="btn btn-main btn-lg pill fw-300"> View Profile </a>
                <button type="button" className="follow-btn btn btn-outline-light btn-lg pill">Follow</button>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="circle-content position-relative">
              <div className="circle static-circle">
                <div className="circle__badge">
                  <img src="assets/images/icons/featured-badge.png" alt="" />
                </div>
                <div className="circle__text">
                  <p>
                    DPmarketer Top Featured Author
                  </p>
                </div>
              </div>
              <div className="row gy-4 card-wrapper">
                {topFeaturedAuthorProductsData.map((product, index) => (
                  <div key={index} className="col-sm-6">
                    <ProductItem {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopFeaturedAuthorSection;
