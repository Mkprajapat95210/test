interface ProductCategoryItemProps {
  link: string;
  imgSrcWhite: string;
  imgSrcDark?: string;
  title: string;
}

const ProductCategoryItem: React.FC<ProductCategoryItemProps> = ({ link, imgSrcWhite, imgSrcDark, title }) => (
  <a href={link} className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={title}>
    <img src={imgSrcWhite} alt="" className="white-version" />
    {imgSrcDark && <img src={imgSrcDark} alt="" className="dark-version" />}
  </a>
);

const ProductCategoryList: React.FC = () => {
  const categories = [
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon1.png", imgSrcDark: "assets/images/thumbs/tech-icon-white1.png", title: "WordPress" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon2.png", title: "Laravel" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon3.png", imgSrcDark: "assets/images/thumbs/tech-icon-white3.png", title: "PHP" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon4.png", title: "HTML" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon5.png", title: "Sketch" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon6.png", title: "Figma" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon7.png", title: "Bootstrap" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon8.png", title: "Tailwind" },
    { link: "all-product.html", imgSrcWhite: "assets/images/thumbs/tech-icon9.png", title: "React" },
  ];

  return (
    <div className="product-category-list">
      {categories.map((cat, index) => (
        <ProductCategoryItem key={index} {...cat} />
      ))}
    </div>
  );
};

export default ProductCategoryList;
