import React from 'react';

interface ProductRejectCardProps {
  reviewerName: string;
  productName: string;
  productDate: string;
}

export const ProductRejectCard: React.FC<ProductRejectCardProps> = ({
  reviewerName,
  productName,
  productDate,
}) => (
  <div className="card common-card border border-gray-five overflow-hidden">
    <div className="card-body">
      <div className="product-reject__content d-flex flex-sm-row flex-column align-items-start gap-md-5 gap-4">
        <div className="product-reviewer flx-align flex-nowrap gap-3 flex-shrink-0">
          <div className="product-reviewer__thumb flex-shrink-0">
            <img src="assets/images/thumbs/client3.png" alt="" />
          </div>
          <div className="product-reviewer__content">
            <h6 className="product-reviewer__name mb-0">{reviewerName}</h6>
            <span className="product-reviewer__designation font-14">Reviewer</span>
          </div>
        </div>
        <div className="product-reject__item flex-grow-1">
          <div className="product-reject-info flx-align flex-nowrap gap-3">
            <div className="product-reject-info__thumb flex-shrink-0">
              <img src="assets/images/thumbs/rejected1.png" alt="" />
            </div>
            <div className="product-reject-info__content">
              <h6 className="product-reject-info__name mb-0">{productName}</h6>
              <span className="product-reject-info__date font-14">{productDate}</span>
            </div>
          </div>
          <ul className="response-list">
            <li className="response-list__item">
              <h6 className="response-list__title fw-600 mb-2">01.Responsive Issues: </h6>
              <p className="response-list__desc font-14">Your files either inaccurately represented as responsive or have responsive layout iusser issues.please take a moment to make sure that your design layout looks correct at different breakpoints and that all text is scaled appropriately for smaller decices.</p>
            </li>
            <li className="response-list__item">
              <h6 className="response-list__title fw-600 mb-2"> 02.Typograpgy Hierarchy: </h6>
              <p className="response-list__desc font-14">As my understanding, there are two parts of hierarchy — Visual and Logic. For visual hierarchy, I usually use font matching, shapes or color to enhance it. And for logic hierarchy, I often start from the spacing control, especially poetic space art. Simply, we need to enhance the important content and tell the visitors which you should focus on</p>
            </li>
            <li className="response-list__item">
              <h6 className="response-list__title fw-600 mb-2">03. Placeholder Imagtes: </h6>
              <p className="response-list__desc font-14">Please delete the images form the main and replace them with placeholders. so that so that client can just placeholder files.</p>
            </li>
            <li className="response-list__item">
              <h6 className="response-list__title fw-600 mb-2">04.Loding Time: </h6>
              <p className="response-list__desc font-14">Reduce web loading time, some times take more time for loading for open your URL. so fixed loading time. </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
