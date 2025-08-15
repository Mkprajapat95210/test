import ProductItem, { ProductItemProps } from '../common/ProductItem';

const bestSellingProductsData: ProductItemProps[] = [
  {
    thumbSrc: "assets/images/thumbs/product-img12.png",
    title: "Title here digital products new marketplace theme",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$56",
    prevPrice: "$65",
    sales: "1230",
    rating: 5,
    totalReviews: 0, 
    liveDemoLink: "product-details.html",
    className: "shadow-sm overlay-none",
    showDownloadBtn: true,
  },
  {
    thumbSrc: "assets/images/thumbs/product-img13.png",
    title: "Title here digital products new marketplace theme",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$32",
    prevPrice: "$40",
    sales: "1230",
    rating: 5,
    totalReviews: 0,
    liveDemoLink: "product-details.html",
    className: "shadow-sm overlay-none",
    showDownloadBtn: true,
  },
  {
    thumbSrc: "assets/images/thumbs/product-img14.png",
    title: "Title here digital products new marketplace theme",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$90",
    prevPrice: "$120",
    sales: "1230",
    rating: 5,
    totalReviews: 0,
    liveDemoLink: "product-details.html",
    className: "shadow-sm overlay-none",
    showDownloadBtn: true,
  },
  {
    thumbSrc: "assets/images/thumbs/product-img13.png",
    title: "Title here digital products new marketplace theme",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$56",
    prevPrice: "$54",
    sales: "1230",
    rating: 5,
    totalReviews: 0,
    liveDemoLink: "product-details.html",
    className: "shadow-sm overlay-none",
    showDownloadBtn: true,
  },
];

const BestSellingProductsSection: React.FC = () => {
  return (
    <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/gradients/selling-gradient.png" alt="" className="bg--gradient" />
      <img src="assets/images/shapes/element2.png" alt="" className="element one" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />
      <img src="assets/images/shapes/curve-pattern1.png" alt="" className="position-absolute start-0 top-0 z-index--1" />
      <img src="assets/images/shapes/curve-pattern2.png" alt="" className="position-absolute end-0 top-0 z-index--1" />

      <div className="container container-two">
        <div className="section-heading style-left style-white flx-between max-w-unset gap-4">
          <div>
            <h3 className="section-heading__title">Weekly Best selling Products</h3>
            <p className="section-heading__desc font-18">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
          </div>
          <a href="all-product.html" className="btn btn-main btn-lg pill fw-300">
            View All Items
          </a>
        </div>
        <div className="selling-product-slider">
          {bestSellingProductsData.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BestSellingProductsSection;
