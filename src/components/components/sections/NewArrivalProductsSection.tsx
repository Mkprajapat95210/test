import ProductItem, { ProductItemProps } from '../common/ProductItem';

const newArrivalProductsData: ProductItemProps[] = [
  {
    thumbSrc: "assets/images/thumbs/product-img1.png",
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
  },
  {
    thumbSrc: "assets/images/thumbs/product-img2.png",
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
  },
  {
    thumbSrc: "assets/images/thumbs/product-img3.png",
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
  },
  {
    thumbSrc: "assets/images/thumbs/product-img5.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$99",
    prevPrice: "$129",
    sales: "1300",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
  },
  {
    thumbSrc: "assets/images/thumbs/product-img6.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$129",
    prevPrice: "$256",
    sales: "200",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
  },
  {
    thumbSrc: "assets/images/thumbs/product-img7.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$129",
    prevPrice: "$259",
    sales: "500",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
  },
  {
    thumbSrc: "assets/images/thumbs/product-img8.png",
    title: "SaaS dashboard digital products Title here",
    productDetailsLink: "product-details.html",
    author: "themepix",
    authorProfileLink: "profile.html",
    currentPrice: "$79",
    prevPrice: "$99",
    sales: "2100",
    rating: 5,
    totalReviews: 16,
    liveDemoLink: "product-details.html",
  },
];

const NewArrivalProductsSection: React.FC = () => {
  const renderProductGrid = (products: ProductItemProps[]) => (
    <div className="row gy-4">
      {products.map((product, index) => (
        <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );

  return (
    <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
      <img src="assets/images/gradients/product-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/shapes/element2.png" alt="" className="element one" />

      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">New Arrival Products</h3>
        </div>

        <ul className="nav common-tab justify-content-center nav-pills mb-48" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All Item</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-wordPress-tab" data-bs-toggle="pill" data-bs-target="#pills-wordPress" type="button" role="tab" aria-controls="pills-wordPress" aria-selected="false">wordPress</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">php</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-siteTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-siteTemplate" type="button" role="tab" aria-controls="pills-siteTemplate" aria-selected="false">site Template</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-blogging-tab" data-bs-toggle="pill" data-bs-target="#pills-blogging" type="button" role="tab" aria-controls="pills-blogging" aria-selected="false">blogging</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">marketing</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-plugins-tab" data-bs-toggle="pill" data-bs-target="#pills-plugins" type="button" role="tab" aria-controls="pills-plugins" aria-selected="false">plugins</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-uiTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-uiTemplate" type="button" role="tab" aria-controls="pills-uiTemplate" aria-selected="false">UI Template</button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-wordPress" role="tabpanel" aria-labelledby="pills-wordPress-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-php" role="tabpanel" aria-labelledby="pills-php-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-siteTemplate" role="tabpanel" aria-labelledby="pills-siteTemplate-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-blogging" role="tabpanel" aria-labelledby="pills-blogging-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-plugins" role="tabpanel" aria-labelledby="pills-plugins-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
          <div className="tab-pane fade" id="pills-uiTemplate" role="tabpanel" aria-labelledby="pills-uiTemplate-tab" tabIndex={0}>
            {renderProductGrid(newArrivalProductsData)}
          </div>
        </div>

        <div className="text-center mt-64">
          <a href="all-product.html" className="btn btn-main btn-lg pill fw-300">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};
export default NewArrivalProductsSection;
