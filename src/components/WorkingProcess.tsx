import React from 'react';
import WorkingProcessItem from './WorkingProcessItem';

const WorkingProcess: React.FC = () => {
  return (
    <section className="working-process">
      <div className="container container-full">
        <div className="working-process-wrapper padding-y-120 position-relative z-index-1 overflow-hidden">
          <img src="assets/images/gradients/working-process-gradient.png" alt="" className="bg--gradient" />
          <img src="assets/images/shapes/element3.png" alt="" className="element one" />
          <img src="assets/images/shapes/element2.png" alt="" className="element two top-0" />
          <div className="section-heading">
            <h3 className="section-heading__title text-white">Our working process</h3>
            <p className="section-heading__desc text-white fw-200">Every month we pick some best products for you.</p>
          </div>
          <div className="container container-two">
            <div className="row gy-4 working-process-item-wrapper">
              <WorkingProcessItem
                number="1"
                title="Understanding"
                description="Create a new account to work hat strategy"
              />
              <WorkingProcessItem
                number="2"
                title="Ideation"
                description="Create a new account to work hat strategy"
              />
              <WorkingProcessItem
                number="3"
                title="Develop Idea"
                description="Create a new account to work hat strategy"
              />
              <WorkingProcessItem
                number="4"
                title="User Testing"
                description="Create a new account to work hat strategy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;