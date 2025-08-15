import React from 'react';

interface StatementCardProps {
  title: string;
  data: { label: string; amount: string; }[];
}

const StatementCard: React.FC<StatementCardProps> = ({ title, data }) => {
  return (
    <div className="statement-item card common-card border border-gray-five">
      <div className="card-body">
        <div className="statement-item__header">
          <h6 className="statement-item__title">{title}</h6>
        </div>
        <ul className="statement-list">
          {data.map((item, index) => (
            <li key={index} className="statement-list__item text-center">
              <span className="statement-list__text font-13">{item.label}</span>
              <h6 className="statement-list__amount mb-0 mt-1 fw-600">{item.amount}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatementCard;