const DashboardFooter = () => {
  return (
    <div className="dashboard-footer bottom-footer-two mt-32 border-0 bg-white">
      <div className="bottom-footer__inner flx-between gap-3">
        <p className="bottom-footer__text font-14"> Copyright © 2024 DPmarket, All rights reserved.</p>
        <div className="footer-links gap-4">
          <a href="#" className="footer-link hover-text-heading font-14">Terms of service</a>
          <a href="#" className="footer-link hover-text-heading font-14">Privacy Policy</a>
          <a href="#" className="footer-link hover-text-heading font-14">cookies</a>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;