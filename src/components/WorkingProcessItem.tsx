import React from 'react';

interface WorkingProcessItemProps {
  number: string;
  title: string;
  description: string;
}

const WorkingProcessItem: React.FC<WorkingProcessItemProps> = ({ number, title, description }) => {
  return (
    <div className="col-xl-3 col-sm-6 col-xs-6">
      <div className="working-process-item text-center">
        <img src="assets/images/shapes/arrow-curve-right.png" alt="" className="working-process-item__arrow" />
        <span className="working-process-item__number font-heading fw-700 mb-32">{number}</span>
        <h5 className="working-process-item__title mb-3 text-white">{title}</h5>
        <p className="working-process-item__desc text-white fw-200">{description}</p>
      </div>
    </div>
  );
};

export default WorkingProcessItem;