import React from 'react';

interface FooterWidgetProps {
  title: string;
  links: { text: string; href: string; }[];
  logoSrc?: string;
  description?: string;
  socialIcons?: { className: string; href: string; }[];
  subscribeForm?: boolean;
}

const FooterWidget: React.FC<FooterWidgetProps> = ({
  title,
  links,
  logoSrc,
  description,
  socialIcons,
  subscribeForm
}) => {
  return (
    <div className="footer-widget">
      {logoSrc && (
        <div className="footer-widget__logo">
          <a href="index-2.html"> <img src={logoSrc} alt="" /></a>
        </div>
      )}
      {description && <p className="footer-widget__desc">{description}</p>}
      {socialIcons && (
        <div className="footer-widget__social">
          <ul className="social-icon-list">
            {socialIcons.map((icon, index) => (
              <li key={index} className="social-icon-list__item">
                <a href={icon.href} className={`social-icon-list__link flx-center ${icon.className}`}><i className={icon.className.split(' ')[0]}></i></a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!logoSrc && <h5 className="footer-widget__title text-white">{title}</h5>}
      <ul className="footer-lists">
        {links.map((link, index) => (
          <li key={index} className="footer-lists__item">
            <a href={link.href} className="footer-lists__link">{link.text}</a>
          </li>
        ))}
      </ul>
      {subscribeForm && (
        <>
          <p className="footer-widget__desc">Subscribe our newsletter to get updated the latest news</p>
          <form action="#" className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
            <input type="text" className="form-control common-input pill text-white" placeholder="Enter Mail" />
            <button type="submit" className="btn btn-main btn-lg w-100 pill">Subscribe Now</button>
          </form>
        </>
      )}
    </div>
  );
};

export default FooterWidget;
