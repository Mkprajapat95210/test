import React from 'react';

interface StatementSummaryItemProps {
  title: string;
  funds: string;
  earnings: string;
  taxWithheld: string;
  fees: string;
}

export const StatementSummaryItem: React.FC<StatementSummaryItemProps> = ({
  title, funds, earnings, taxWithheld, fees
}) => (
  <div className="statement-item card common-card border border-gray-five">
    <div className="card-body">
      <div className="statement-item__header">
        <h6 className="statement-item__title">{title}</h6>
      </div>
      <ul className="statement-list">
        <li className="statement-list__item text-center">
          <span className="statement-list__text font-13">My Funds</span>
          <h6 className="statement-list__amount mb-0 mt-1 fw-600">{funds}</h6>
        </li>
        <li className="statement-list__item text-center">
          <span className="statement-list__text font-13">Earnings</span>
          <h6 className="statement-list__amount mb-0 mt-1 fw-600">{earnings}</h6>
        </li>
        <li className="statement-list__item text-center">
          <span className="statement-list__text font-13">Tax Withheld</span>
          <h6 className="statement-list__amount mb-0 mt-1 fw-600">{taxWithheld}</h6>
        </li>
        <li className="statement-list__item text-center">
          <span className="statement-list__text font-13">Fees</span>
          <h6 className="statement-list__amount mb-0 mt-1 fw-600">{fees}</h6>
        </li>
      </ul>
    </div>
  </div>
);
