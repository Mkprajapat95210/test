import React from 'react';
import TeamItem from './TeamItem';

const Team: React.FC = () => {
  return (
    <section className="team padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/shapes/full-line.png" alt="" className="full-line position-absolute start-0 top-0 w-100 h-100 z-index--1" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two top-50" />
      <div className="container container-two">
        <div className="section-heading style-left flx-between max-w-unset gap-4">
          <div>
            <h3 className="section-heading__title">Meet Our Team</h3>
            <p className="section-heading__desc font-18">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
          </div>
          <a href="all-product.html" className="btn btn-main btn-lg fw-300">
            View All Members
          </a>
        </div>
        <div className="team-item-slider">
          <TeamItem imageSrc="assets/images/thumbs/team1.png" name="Maria Jany" designation="Product Manager" />
          <TeamItem imageSrc="assets/images/thumbs/team2.png" name="Ralph Edwards" designation="Product Manager" />
          <TeamItem imageSrc="assets/images/thumbs/team3.png" name="John Doe" designation="Product Manager" />
          <TeamItem imageSrc="assets/images/thumbs/team4.png" name="John Edwards" designation="Product Manager" />
          <TeamItem imageSrc="assets/images/thumbs/team2.png" name="Martin Luthar" designation="Product Manager" />
        </div>
      </div>
    </section>
  );
};

export default Team;