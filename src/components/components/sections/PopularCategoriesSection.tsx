import PopularCategoryItem from '../common/PopularCategoryItem';

const PopularCategoriesSection: React.FC = () => {
  const categories = [
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon1.svg", title: "WordPress", qty: "15,296" },
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon2.svg", title: "Plugin", qty: "15,296" },
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon3.svg", title: "HTML", qty: "15,296" },
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon4.svg", title: "Java Script", qty: "15,296" },
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon5.svg", title: "Mobile App", qty: "15,296" },
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon6.svg", title: "PHP Script", qty: "15,296" },
    { link: "all-product.html", iconSrc: "assets/images/icons/popular-icon4.svg", title: "Java Script", qty: "15,296" },
  ];

  return (
    <section className="popular padding-y-120 overflow-hidden">
      <div className="container container-two">
        <div className="section-heading style-left mb-64">
          <h5 className="section-heading__title">Popular Categories</h5>
        </div>
        <div className="popular-slider arrow-style-two row gy-4">
          {categories.map((category, index) => (
            <PopularCategoryItem key={index} {...category} />
          ))}
        </div>
        <div className="popular__button text-center">
          <a href="all-product.html" className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">Explore More</a>
        </div>
      </div>
    </section>
  );
};
export default PopularCategoriesSection;
