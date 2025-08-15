import React from 'react';
import { ProductRejectCard } from './ProductRejectCard';

export const HiddenItemTab: React.FC = () => (
  <div className="row justify-content-center">
    <div className="col-xxl-8 col-xl-10">
      <div className="product-reject__wrapper">
        <ProductRejectCard
          reviewerName="John Doe"
          productName="Soft - reject CityScape HTML Template"
          productDate="12 March 2024 at 09:21am"
        />
        <ProductRejectCard
          reviewerName="John William"
          productName="Soft - reject FixTurbo HTML Template"
          productDate="10 March 2024 at 10:35am"
        />
      </div>
    </div>
  </div>
);
