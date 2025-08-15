interface DashboardWidgetProps {
  iconSrc: string;
  number: string;
  text: string;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ iconSrc, number, text }) => {
  return (
    <div className="col-xl-3 col-sm-6">
      <div className="dashboard-widget">
        <img src="assets/images/shapes/widget-shape1.png" alt="" className="dashboard-widget__shape one" />
        <img src="assets/images/shapes/widget-shape2.png" alt="" className="dashboard-widget__shape two" />
        <span className="dashboard-widget__icon">
          <img src={iconSrc} alt="" />
        </span>
        <div className="dashboard-widget__content flx-between gap-1 align-items-end">
          <div>
            <h4 className="dashboard-widget__number mb-1 mt-3">{number}</h4>
            <span className="dashboard-widget__text font-14">{text}</span>
          </div>
          <img src="assets/images/icons/chart-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;