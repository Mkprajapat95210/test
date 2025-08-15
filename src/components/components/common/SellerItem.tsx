interface SellerItemProps {
  title: string;
  desc: string;
  link: string;
  buttonText: string;
  className?: string;
  bgImgSrc?: string;
}

const SellerItem: React.FC<SellerItemProps> = ({ title, desc, link, buttonText, className = "", bgImgSrc }) => {
  return (
    <div className={`seller-item position-relative z-index-1 ${className}`}>
      {bgImgSrc && (
        <img src={bgImgSrc} className="position-absolute start-0 top-0 z-index--1" alt="" />
      )}
      <h3 className="seller-item__title">{title}</h3>
      <p className="seller-item__desc fw-500 text-heading">{desc}</p>
      <a href={link} className="btn btn-static-outline-black btn-xl pill fw-600">{buttonText}</a>
    </div>
  );
};
export default SellerItem;
