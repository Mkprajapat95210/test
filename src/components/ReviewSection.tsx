import React from 'react';
import ReviewTable from './ReviewTable';
import Pagination from './Pagination';

const ReviewSection: React.FC = () => {
  return (
    <div className="card common-card border border-gray-five">
      <div className="card-body">
        <ReviewTable />
        <Pagination />
      </div>
    </div>
  );
};

export default ReviewSection;