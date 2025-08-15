import React from 'react';

const MetaAttributes: React.FC = () => {
  return (
    <ul className="meta-attribute">
      <li className="meta-attribute__item">
        <span className="name">Last Update</span>
        <span className="details">Feb 21, 2024</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Published</span>
        <span className="details">Feb 15, 2024</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Category</span>
        <span className="details">Themes</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Widget Ready</span>
        <span className="details">Yes</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">High Resolution</span>
        <span className="details">Yes</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Copatible with</span>
        <span className="details">
          <a href="#" className="hover-text-decoration-underline">Contact Form 7,</a>
          <a href="#" className="hover-text-decoration-underline"> Calendar,</a>
          <a href="#" className="hover-text-decoration-underline"> Elementor,</a>
          <a href="#" className="hover-text-decoration-underline"> Elementor Pro,</a>
          <a href="#" className="hover-text-decoration-underline"> WooCommerce 8.x.x</a>
        </span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">File size</span>
        <span className="details">85 MB</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Framework</span>
        <span className="details">Underscores</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Software Version</span>
        <span className="details">
          <a href="#" className="hover-text-decoration-underline">WordPress 6.3.x,</a>
          <a href="#" className="hover-text-decoration-underline">WordPress 6.2.x,</a>
          <a href="#" className="hover-text-decoration-underline">WordPress 6.1.x,</a>
          <a href="#" className="hover-text-decoration-underline">WordPress 6.0.x,</a>
          <a href="#" className="hover-text-decoration-underline">WordPress 5.9.x,</a>
        </span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Marketplace Files
          Included</span>
        <span className="details">
          <a href="#" className="hover-text-decoration-underline">PHP Files,</a>
          <a href="#" className="hover-text-decoration-underline">CSS Files,</a>
          <a href="#" className="hover-text-decoration-underline">SCSS Files,</a>
          <a href="#" className="hover-text-decoration-underline">JS Files,</a>
        </span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Layout</span>
        <span className="details">Responsive</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Tags</span>
        <span className="details">
          <a href="#" className="hover-text-decoration-underline">theme,</a>
          <a href="#" className="hover-text-decoration-underline">web design,</a>
          <a href="#" className="hover-text-decoration-underline">minimal design,</a>
          <a href="#" className="hover-text-decoration-underline">trendy,</a>
          <a href="#" className="hover-text-decoration-underline">responsive,</a>
          <a href="#" className="hover-text-decoration-underline">wordpress,</a>
          <a href="#" className="hover-text-decoration-underline">saas,</a>
          <a href="#" className="hover-text-decoration-underline">dashboard,</a>
        </span>
      </li>
    </ul>
  );
};

export default MetaAttributes;