import React from 'react';
import SectionHeading from './SectionHeading';
import TestimonialItem from './TestimonialItem';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    { desc: 'Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.', clientThumb: 'assets/images/thumbs/client1.png', clientName: 'Michel John', clientDesignation: 'Market Expert' },
    { desc: 'Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.', clientThumb: 'assets/images/thumbs/client2.png', clientName: 'Ralph Edwards', clientDesignation: 'Analytis' },
    { desc: 'Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.', clientThumb: 'assets/images/thumbs/client3.png', clientName: 'Jacob Jones', clientDesignation: 'Market Expert' }
  ];

  return (
    <section className="testimonial padding-y-120 position-relative section-bg overflow-hidden">
      <img src="assets/images/shapes/brush.png" alt="" className="element-brush" />
      <div className="container container-two">
        <SectionHeading
          title="Clients Feedback"
          styleClass="style-left style-flex flx-between align-items-end gap-3"
        >
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Clients Feedback</h3>
          </div>
          <a href="#" className="btn btn-main btn-lg pill">More Feedback</a>
        </SectionHeading>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
