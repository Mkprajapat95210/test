import ProductItem, { ProductItemProps } from '../common/ProductItem';

const featuredProductsData: ProductItemProps[] = [
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

const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="featured-product padding-y-120 position-relative z-index-1">
      <img src="assets/images/gradients/featured-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/shapes/spider-net.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version" />
      <img src="assets/images/shapes/spider-net-white.png" alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />

      <div className="container container-two">
        <div className="row gy-4 flex-wrap-reverse align-items-center">
          <div className="col-xl-6">
            <div className="row gy-4 card-wrapper">
              {featuredProductsData.map((product, index) => (
                <div key={index} className="col-sm-6">
                  <ProductItem {...product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-1 d-xl-block d-none"></div>
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Featured Products</h3>
                <p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
              </div>
              <a href="all-product.html" className="btn btn-main btn-lg pill fw-300">
                View All Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProductsSection;
