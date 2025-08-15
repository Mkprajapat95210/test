const SaleOffer: React.FC = () => {
  return (
    <div className="sale-offer">
      <div className="container container-full">
        <div className="sale-offer__content flx-between position-relative">
          <div className="sale-offer__countdown">
            <div className="countdown" data-date="14-10-2026" data-time="12:00">
              <div className="day"><span className="num"></span><span className="word"></span></div>
              <div className="hour"><span className="num"></span><span className="word"></span></div>
              <div className="min"><span className="num"></span><span className="word"></span></div>
              <div className="sec"><span className="num"></span><span className="word"></span></div>
            </div>
          </div>
          <div className="sale-offer__discount flx-align gap-2">
            <span className="sale-offer__text text-heading text-capitalize">New Year Flash Sale Offer</span>
            <strong className="sale-offer__qty text-heading font-heading">45% OFF</strong>
            <a href="#" className="btn btn-sm btn-white pill fw-500">Shop Now</a>
          </div>
          <div className="sale-offer__button">
            <button type="submit" className="sale-offer__close text-heading"><i className="las la-times"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaleOffer;
