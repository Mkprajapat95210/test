import SearchBox from '../common/SearchBox';
import ProductCategoryList from '../common/ProductCategoryList';
import Statistics from '../common/Statistics';

const HeroSection: React.FC = () => {
  return (
    <section className="hero section-bg z-index-1">
      <img src="assets/images/gradients/banner-gradient.png" alt="" className="bg--gradient white-version" />
      <img src="assets/images/shapes/element-moon1.png" alt="" className="element one" />
      <img src="assets/images/shapes/element-moon2.png" alt="" className="element two" />

      <div className="container container-two">
        <div className="row align-items-center gy-sm-5 gy-4">
          <div className="col-lg-6">
            <div className="hero-inner position-relative pe-lg-5">
              <div>
                <h1 className="hero-inner__title">2M+ curated digital products</h1>
                <p className="hero-inner__desc font-18">Explore the best premium themes and plugins available for sale. Our unique collection is hand-curated by experts. Find and buy the perfect premium theme today.</p>
                <SearchBox placeholder="Search theme, plugins & more..." />
                <ProductCategoryList />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-thumb">
              <img src="assets/images/thumbs/banner-img.png" alt="" />
              <img src="assets/images/shapes/dots.png" alt="" className="dotted-img white-version" />
              <img src="assets/images/shapes/dots-white.png" alt="" className="dotted-img dark-version" />
              <img src="assets/images/shapes/element2.png" alt="" className="element two end-0" />

              <Statistics amount="50k" text="Customers" className="animation" isAnimated={true} />
              <Statistics amount="22k" text="Themes & Plugins" className="style-two bg-white text-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
