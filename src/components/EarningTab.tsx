import React from 'react';
import { EarningSummaryCard } from './EarningSummaryCard';
import { TopCountriesCard } from './TopCountriesCard';
import { SalesDashboardTable } from './SalesDashboardTable';

export const EarningTab: React.FC = () => (
  <div className="row gy-4">
    <div className="col-lg-4 col-sm-6">
      <EarningSummaryCard
        title="Procuring This Month"
        description="Sales earnings this month (March), after associated author fees, & before taxes:"
        amount="$6422"
        subDescription="All out Procuring after purchaser charge"
      />
    </div>
    <div className="col-lg-4 col-sm-6">
      <EarningSummaryCard
        title="Your Balance"
        amount="$6422"
        subDescription="Your Total Blance"
      />
    </div>
    <div className="col-lg-4 col-sm-6">
      <EarningSummaryCard
        title="Absolute Worth of Your Deals."
        description="Total Value of your sales, before taxes: "
        amount="$6422"
        subDescription="Total Value of Sale Before Fee"
      />
    </div>
    <div className="col-lg-8">
      <div className="dashboard-card">
        <div className="dashboard-card__header">
          <h6 className="dashboard-card__title mb-0">Item Sales</h6>
        </div>
        <div id="earningChart"></div>
      </div>
    </div>
    <div className="col-lg-4">
      <TopCountriesCard />
    </div>
    <div className="col-lg-12">
      <SalesDashboardTable />
    </div>
  </div>
);
