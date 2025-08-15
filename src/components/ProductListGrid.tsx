import React from 'react';
import { ProductCard } from './ProductCard';

interface ProductListGridProps {
  data: { imgSrc: string; title: string; author: string; price: string; prevPrice: string; sales: string; }[];
}

export const ProductListGrid: React.FC<ProductListGridProps> = ({ data }) => (
  <div className="row gy-4 list-grid-wrapper">
    {data.map((product, index) => (
      <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
        <ProductCard {...product} />
      </div>
    ))}
  </div>
);
