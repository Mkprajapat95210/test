import React from 'react';

interface DownloadItemProps {
  id: string;
  thumbSrc: string;
  title: string;
  license: string;
  checkboxId: string;
}

const DownloadItem: React.FC<DownloadItemProps> = ({ id, thumbSrc, title, license, checkboxId }) => {
  return (
    <div className="download-item flx-between gap-3">
      <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
        <div className="download-item__thumb flex-shrink-0"> 
          <img src={thumbSrc} alt={title} />
        </div>
        <div className="download-item__info">
          <h6 className="download-item__title mb-1">
            <a href="#" className="link">{title}</a>
          </h6>
          <a href="#" className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline">{license}</a>
          <div className="common-check">
            <input className="form-check-input" type="checkbox" name="checkbox" id={checkboxId} />
            <label className="form-check-label text-body fw-400 mb-0" htmlFor={checkboxId}>Get notified by email if this item is updated</label>
          </div>
        </div>
      </div>
      <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
        <button type="button" className="btn btn-main pill px-4">
          Download <span className="icon-right icon ms-0"> <i className="las la-download"></i></span>  
        </button>
        <div className="bg-white py-1 px-2 rounded d-inline-block">
          <ul className="star-rating justify-content-center">
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { DownloadItem };
