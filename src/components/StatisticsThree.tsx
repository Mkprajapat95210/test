import React from 'react';

const StatisticsThree: React.FC = () => {
  return (
    <div className="statistics-three-wrapper flx-align mt-64 position-relative d-inline-flex">
      <div className="statistics-three">
        <h4 className="statistics-three__amount text-heading mb-0">2900+</h4>
        <span className="statistics-three__text font-18 text-heading fw-500">Project Completed</span>
      </div>
      <div className="statistics-three">
        <h4 className="statistics-three__amount text-heading mb-0">1680+</h4>
        <span className="statistics-three__text font-18 text-heading fw-500">Customer Reviewed</span>
      </div>
      <img src="assets/images/icons/curve-arrow.png" alt="" className="curve-arrow" />
    </div>
  );
};

export default StatisticsThree;