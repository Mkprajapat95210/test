interface BrandItemProps {
  imgSrcWhite: string;
  imgSrcDark: string;
}

const BrandItem: React.FC<BrandItemProps> = ({ imgSrcWhite, imgSrcDark }) => {
  return (
    <div className="brand-item d-flex align-items-center justify-content-center">
      <img src={imgSrcWhite} alt="" className="white-version" />
      <img src={imgSrcDark} alt="" className="dark-version" />
    </div>
  );
};
export default BrandItem;
