import React from 'react';

interface ProductCategoryItemProps {
  srcWhite: string;
  srcDark?: string;
  alt: string;
  title: string;
  href: string;
}

const ProductCategoryItem: React.FC<ProductCategoryItemProps> = ({ srcWhite, srcDark, alt, title, href }) => {
  return (
    <a href={href} className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={title}>
      <img src={srcWhite} alt={alt} className="white-version" />
      {srcDark && <img src={srcDark} alt={alt} className="dark-version" />}
    </a>
  );
};

const ProductCategoryList: React.FC = () => {
  return (
    <div className="product-category-list">
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon1.png" srcDark="assets/images/thumbs/tech-icon-white1.png" alt="" title="WordPress" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon2.png" alt="" title="Laravel" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon3.png" srcDark="assets/images/thumbs/tech-icon-white3.png" alt="" title="PHP" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon4.png" alt="" title="HTML" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon5.png" alt="" title="Sketch" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon6.png" alt="" title="Figma" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon7.png" alt="" title="Bootstrap" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon8.png" alt="" title="Tailwind" href="all-product.html" />
      <ProductCategoryItem srcWhite="assets/images/thumbs/tech-icon9.png" alt="" title="React" href="all-product.html" />
    </div>
  );
};

export default ProductCategoryList;
