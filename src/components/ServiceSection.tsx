import React from 'react';
import SectionHeading from './SectionHeading';
import ServiceItem from './ServiceItem';

const ServiceSection: React.FC = () => {
  const services = [
    { iconSrc: 'assets/images/icons/service-icon1.svg', title: 'Website Design & Development', description: 'We help companies communicate with customers more effectively and efficiently. Help is a conversational customer support.' },
    { iconSrc: 'assets/images/icons/service-icon2.svg', title: 'Management Systems Development', description: 'We help companies communicate with customers more effectively and efficiently. Help is a conversational customer support.' },
    { iconSrc: 'assets/images/icons/service-icon3.svg', title: 'Digital Marketing & Video Editing', description: 'We help companies communicate with customers more effectively and efficiently. Help is a conversational customer support.' },
    { iconSrc: 'assets/images/icons/service-icon4.svg', title: 'Graphic Design & UI/UX', description: 'We help companies communicate with customers more effectively and efficiently. Help is a conversational customer support.' },
    { iconSrc: 'assets/images/icons/service-icon5.svg', title: 'Blockchain Crypto web3 Development', description: 'We help companies communicate with customers more effectively and efficiently. Help is a conversational customer support.' },
    { iconSrc: 'assets/images/icons/service-icon6.svg', title: 'Content Creation & SEO', description: 'We help companies communicate with customers more effectively and efficiently. Help is a conversational customer support.' }
  ];

  return (
    <section className="service padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/curve-pattern3.png" alt="" className="position-absolute end-0 top-0 z-index--1" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />
      <div className="container container-two">
        <SectionHeading
          title="Best services we provide"
          desc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
          styleClass="style-left style-flex flx-between align-items-end gap-3"
        >
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Best services we provide</h3>
            <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
          </div>
          <a href="#" className="btn btn-main btn-lg pill">See All Services</a>
        </SectionHeading>
        <div className="row gy-4">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
