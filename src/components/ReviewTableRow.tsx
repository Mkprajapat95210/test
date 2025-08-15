import React from 'react';

interface ReviewTableRowProps {
  productImg: string;
  productName: string;
  productDate: string;
  userName: string;
  userComment: string;
}

const ReviewTableRow: React.FC<ReviewTableRowProps> = ({
  productImg,
  productName,
  productDate,
  userName,
  userComment,
}) => {
  return (
    <tr>
      <td>
        <div className="review-product d-flex align-items-center gap-2">
          <div className="review-product__thumb flex-shrink-0">
            <img src={productImg} alt="" />
          </div>
          <div className="review-product__content">
            <h6 className="review-product__name font-15 fw-500 mb-0">
              <a href="profile.html" className="link">{productName}</a>
            </h6>
            <span className="review-product__date font-12">{productDate}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="product-user font-12">
          <strong className="fw-600 text-heading d-block">{userName}</strong>
          <span>{userComment}</span>
        </div>
      </td>
      <td>
        <ul className="star-rating justify-content-center">
          <li className="star-rating__item font-16"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-16"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-16"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-16"><i className="fas fa-star"></i></li>
          <li className="star-rating__item font-16"><i className="fas fa-star"></i></li>
        </ul>
      </td>
      <td>
        <a href="#" className="btn btn-main"><i className="fa fa-reply"></i></a>
      </td>
    </tr>
  );
};

export default ReviewTableRow;