const SalesHistoryCard = () => {
  return (
    <div className="col-xl-8">
      <div className="dashboard-card">
        <div className="dashboard-card__header flx-between gap-2">
          <h6 className="dashboard-card__title mb-0">Sales History</h6>
          <div className="select-has-icon d-inline-block">
            <select className="select common-input select-sm">
              <option value="1">Monthly</option>
              <option value="2">Daily</option>
              <option value="3">Yearly</option>
            </select>
          </div>
        </div>
        <div className="dashboard-card__chart">
          <div id="chart"></div>
        </div>
      </div>
    </div>
  );
};

export default SalesHistoryCard;