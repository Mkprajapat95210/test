import BrandItem from '../common/BrandItem';

const brandItems = [
  { imgSrcWhite: "assets/images/thumbs/brand-img1.png", imgSrcDark: "assets/images/thumbs/brand-white-img1.png" },
  { imgSrcWhite: "assets/images/thumbs/brand-img2.png", imgSrcDark: "assets/images/thumbs/brand-white-img2.png" },
  { imgSrcWhite: "assets/images/thumbs/brand-img3.png", imgSrcDark: "assets/images/thumbs/brand-white-img3.png" },
  { imgSrcWhite: "assets/images/thumbs/brand-img4.png", imgSrcDark: "assets/images/thumbs/brand-white-img4.png" },
  { imgSrcWhite: "assets/images/thumbs/brand-img5.png", imgSrcDark: "assets/images/thumbs/brand-white-img5.png" },
  { imgSrcWhite: "assets/images/thumbs/brand-img3.png", imgSrcDark: "assets/images/thumbs/brand-white-img3.png" },
];

const BrandSection: React.FC = () => {
  return (
    <div className="brand">
      <div className="container container">
        <div className="brand-slider">
          {brandItems.map((brand, index) => (
            <BrandItem key={index} {...brand} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BrandSection;
