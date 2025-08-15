import React from 'react';

export const SalesDashboardTable: React.FC = () => (
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
            <tr>
              <td> Friday</td>
              <td> 2</td>
              <td> $5.31</td>
            </tr>
            <tr>
              <td> Saturday</td>
              <td> 6</td>
              <td> $30.62</td>
            </tr>
            <tr>
              <td> Sunday</td>
              <td> 10</td>
              <td> $100.34</td>
            </tr>
            <tr>
              <td> Monday</td>
              <td> 1</td>
              <td> $21.24</td>
            </tr>
            <tr>
              <td> Tuesday</td>
              <td> 3</td>
              <td> $32.56</td>
            </tr>
            <tr>
              <td> Wednesday</td>
              <td> 1</td>
              <td> $5.15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
