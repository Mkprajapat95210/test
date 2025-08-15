import React from 'react';
import { StatementSummaryItem } from './StatementSummaryItem';
import { StatementDetailsTable } from './StatementDetailsTable';

export const StatementTab: React.FC = () => (
  <div className="row gy-4">
    <div className="col-lg-6">
      <StatementSummaryItem
        title="Total Earning"
        funds="$0.00"
        earnings="$0.00"
        taxWithheld="$0.00"
        fees="$0.00"
      />
    </div>
    <div className="col-lg-6">
      <StatementSummaryItem
        title="Monthly Earnings"
        funds="$0.00"
        earnings="$0.00"
        taxWithheld="$0.00"
        fees="$0.00"
      />
    </div>
    <div className="col-12">
      <StatementDetailsTable />
    </div>
  </div>
);
