import React from 'react';

interface FooterListsProps {
  title: string;
  links: { href: string; text: string; }[];
}

const FooterLists: React.FC<FooterListsProps> = ({ title, links }) => {
  return (
    <div className="footer-widget">
      <h5 className="footer-widget__title text-white">{title}</h5>
      <ul className="footer-lists">
        {links.map((link, index) => (
          <li className="footer-lists__item" key={index}>
            <a href={link.href} className="footer-lists__link">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLists;