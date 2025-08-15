import React from 'react';
import ProductDetailsContent from './ProductDetailsContent';
import ProductReviewTab from './ProductReviewTab';
import ProductCommentsTab from './ProductCommentsTab';
import ProductSidebar from './ProductSidebar';

const ProductDetailsSection: React.FC = () => {
  return (
    <div className="product-details mt-32 padding-b-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-product-details" role="tabpanel" aria-labelledby="pills-product-details-tab" tabIndex={0}>
                <ProductDetailsContent />
              </div>
              <div className="tab-pane fade" id="pills-rating" role="tabpanel" aria-labelledby="pills-rating-tab" tabIndex={0}>
                <ProductReviewTab />
              </div>
              <div className="tab-pane fade" id="pills-comments" role="tabpanel" aria-labelledby="pills-comments-tab" tabIndex={0}>
                <ProductCommentsTab />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <ProductSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;