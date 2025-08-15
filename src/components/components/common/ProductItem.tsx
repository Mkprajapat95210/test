interface ProductItemProps {
  thumbSrc: string;
  title: string;
  productDetailsLink: string;
  author: string;
  authorProfileLink: string;
  currentPrice: string;
  prevPrice: string;
  sales: string;
  rating: number;
  totalReviews: number;
  liveDemoLink: string;
  className?: string; 
  showDownloadBtn?: boolean; 
}

const ProductItem: React.FC<ProductItemProps> = ({
  thumbSrc,
  title,
  productDetailsLink,
  author,
  authorProfileLink,
  currentPrice,
  prevPrice,
  sales,
  rating,
  totalReviews,
  liveDemoLink,
  className = "",
  showDownloadBtn = false,
}) => {
  return (
    <div className={`product-item ${className}`}>
      <div className="product-item__thumb d-flex">
        <a href={productDetailsLink} className="link w-100">
          <img src={thumbSrc} alt="" className="cover-img" />
        </a>
        <button type="button" className="product-item__wishlist">
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="product-item__content">
        <h6 className="product-item__title">
          <a href={productDetailsLink} className="link">
            {title}
          </a>
        </h6>
        <div className="product-item__info flx-between gap-2">
          <span className="product-item__author">
            by
            <a href={authorProfileLink} className="link hover-text-decoration-underline">
              {author}
            </a>
          </span>
          <div className="flx-align gap-2">
            <h6 className="product-item__price mb-0">{currentPrice}</h6>
            <span className="product-item__prevPrice text-decoration-line-through">{prevPrice}</span>
          </div>
        </div>
        <div className="product-item__bottom flx-between gap-2">
          <div>
            <span className="product-item__sales font-14 mb-2">{sales} Sales</span>
            <div className="d-flex align-items-center gap-1">
              <ul className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className={`star-rating__item font-11 ${i < rating ? 'rated' : ''}`}>
                    <i className="fas fa-star"></i>
                  </li>
                ))}
              </ul>
              <span className="star-rating__text text-heading fw-500 font-14"> ({totalReviews})</span>
            </div>
          </div>
          {showDownloadBtn && (
            <a href={productDetailsLink} className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
              <span className="icon">
                <img src="assets/images/icons/download.svg" alt="" className="white-version" />
                <img src="assets/images/icons/download-white.svg" alt="" className="dark-version" />
              </span>
            </a>
          )}
          <a href={liveDemoLink} className="btn btn-outline-light btn-sm pill">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;