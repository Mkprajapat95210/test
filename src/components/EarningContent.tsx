import React from 'react';
import EarningCard from './EarningCard';
import CountryListItem from './CountryListItem';

const EarningContent: React.FC = () => {
  const countryData = [
    { flagSrc: "assets/images/thumbs/flag1.png", countryName: "United States", amount: "$58.00" },
    { flagSrc: "assets/images/thumbs/flag2.png", countryName: "Maxico", amount: "$69.00" },
    { flagSrc: "assets/images/thumbs/flag3.png", countryName: "Brazil", amount: "$120.00" },
    { flagSrc: "assets/images/thumbs/flag4.png", countryName: "Canada", amount: "$25.00" },
    { flagSrc: "assets/images/thumbs/flag5.png", countryName: "Ireland", amount: "$85.00" },
    { flagSrc: "assets/images/thumbs/flag6.png", countryName: "Newzealand", amount: "$99.00" },
    { flagSrc: "assets/images/thumbs/flag7.png", countryName: "Spain", amount: "$89.00" },
    { flagSrc: "assets/images/thumbs/flag8.png", countryName: "Turkey", amount: "$72.00" },
    { flagSrc: "assets/images/thumbs/flag9.png", countryName: "Italy", amount: "$465.00" },
    { flagSrc: "assets/images/thumbs/flag10.png", countryName: "Argentina", amount: "$45.00" },
    { flagSrc: "assets/images/thumbs/flag11.png", countryName: "Maxico", amount: "$42.00" },
    { flagSrc: "assets/images/thumbs/flag12.png", countryName: "Newzealand", amount: "$89.00" }
  ];

  const tableData = [
    { date: "Friday", salesCount: 2, earning: "$5.31" },
    { date: "Saturday", salesCount: 6, earning: "$30.62" },
    { date: "Sunday", salesCount: 10, earning: "$100.34" },
    { date: "Monday", salesCount: 1, earning: "$21.24" },
    { date: "Tuesday", salesCount: 3, earning: "$32.56" },
    { date: "Wednesday", salesCount: 1, earning: "$5.15" }
  ];

  return (
    <div className="card common-card">
      <div className="card-body">
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6">
            <EarningCard
              title="Procuring This Month"
              text="Sales earnings this month (March), after associated author fees, & before taxes:"
              amount="$6422"
              subText="All out Procuring after purchaser charge"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <EarningCard
              title="Your Balance"
              text=""
              amount="$6422"
              subText="Your Total Blance"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <EarningCard
              title="Absolute Worth of Your Deals."
              text="Total Value of your sales, before taxes: "
              amount="$6422"
              subText="Total Value of Sale Before Fee"
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
            <div className="dashboard-card">
              <div className="dashboard-card__header">
                <h6 className="dashboard-card__title mb-0">Top Countries</h6>
              </div>
              <ul className="country-list">
                {countryData.map((country, index) => (
                  <CountryListItem
                    key={index}
                    flagSrc={country.flagSrc}
                    countryName={country.countryName}
                    amount={country.amount}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card common-card border shadow-none border-gray-five">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-body mt--24">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Item Sales Count</th>
                        <th>Earning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td> {row.date}</td>
                          <td> {row.salesCount}</td>
                          <td> {row.earning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningContent;