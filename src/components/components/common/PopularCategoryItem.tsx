interface PopularCategoryItemProps {
  link: string;
  iconSrc: string;
  title: string;
  qty: string;
}

const PopularCategoryItem: React.FC<PopularCategoryItemProps> = ({ link, iconSrc, title, qty }) => {
  return (
    <div className="col-lg-2">
      <a href={link} className="popular-item w-100">
        <span className="popular-item__icon">
          <img src={iconSrc} alt="" />
        </span>
        <h6 className="popular-item__title font-18">{title}</h6>
        <span className="popular-item__qty text-body">{qty}</span>
      </a>
    </div>
  );
};
export default PopularCategoryItem;
