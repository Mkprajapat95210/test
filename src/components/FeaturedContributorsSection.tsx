import React from 'react';
import SectionHeading from './SectionHeading';
import ContributorItem from './ContributorItem';

const FeaturedContributorsSection: React.FC = () => {
  const contributors = [
    { thumbSrc: 'assets/images/thumbs/contributor-img1.png', name: 'Amplify', soldItems: '12558', itemImgSrc: 'assets/images/thumbs/contributor1.png' },
    { thumbSrc: 'assets/images/thumbs/contributor-img2.png', name: 'Radiuspoint', soldItems: '35462', itemImgSrc: 'assets/images/thumbs/contributor2.png' },
    { thumbSrc: 'assets/images/thumbs/contributor-img3.png', name: 'Ovious', soldItems: '2542', itemImgSrc: 'assets/images/thumbs/contributor3.png' },
    { thumbSrc: 'assets/images/thumbs/contributor-img1.png', name: 'Themex', soldItems: '6854', itemImgSrc: 'assets/images/thumbs/contributor1.png' }
  ];

  return (
    <section className="featured-contributor padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/pattern-curve-3.png" alt="" className="position-absolute start-0 top-0 z-index--1" />
      <img src="assets/images/shapes/element-moon1.png" alt="" className="element two" />
      <img src="assets/images/shapes/element1.png" alt="" className="element one" />

      <div className="container container-two">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="section-content">
              <SectionHeading
                title="Featured Contributors"
                desc="Who creates useful, qualitful, customer centric digital products"
                styleClass="style-left"
              />
              <a href="profile.html" className="btn btn-main btn-lg pill fw-300"> All Contributors </a>
            </div>
          </div>
          <div className="col-xl-2 d-xl-block d-none"></div>
          <div className="col-xl-6 col-lg-7">
            <div className="row gy-4">
              {contributors.map((contributor, index) => (
                <ContributorItem key={index} {...contributor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContributorsSection;
