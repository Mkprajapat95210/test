import DashboardWidget from './DashboardWidget';

const DashboardWidgetsRow = () => {
  return (
    <div className="dashboard-body__item">
      <div className="row gy-4">
        <DashboardWidget
          iconSrc="assets/images/icons/dashboard-widget-icon1.svg"
          number="2M+"
          text="Total Products"
        />
        <DashboardWidget
          iconSrc="assets/images/icons/dashboard-widget-icon2.svg"
          number="$5289.00"
          text="Total Earnings"
        />
        <DashboardWidget
          iconSrc="assets/images/icons/dashboard-widget-icon3.svg"
          number="5,2458"
          text="Total Downloads"
        />
        <DashboardWidget
          iconSrc="assets/images/icons/dashboard-widget-icon4.svg"
          number="2,589"
          text="Total Sales"
        />
      </div>
    </div>
  );
};

export default DashboardWidgetsRow;