import React from 'react';

const StatementsTable: React.FC = () => {
  const tableData = [
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
    { date: '2022-12-31 03:36 AM', orderId: '#DR54745425478', type: 'WordPress', price: '59.00 USD' },
  ];

  return (
    <div className="col-12">
      <div className="card common-card border border-gray-five">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table text-body mt--24">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Order ID</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td data-label="Date">{row.date}</td>
                    <td data-label="Order ID">{row.orderId}</td>
                    <td data-label="Type">{row.type}</td>
                    <td data-label="Price">{row.price}</td>
                    <td data-label="Details">
                      <a href="#" className="btn btn-main"><i className="far fa-eye"></i></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flx-between gap-2">
              <div className="paginate-content flx-align flex-nowrap gap-3">
                <select className="select common-input py-2 px-3 w-auto">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <span className="paginate-content__text fs-14">Showing 1 - 10 of 100</span>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination common-pagination mt-0">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item">
                    <a className="page-link flx-align gap-2 flex-nowrap" href="#">Next
                      <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementsTable;