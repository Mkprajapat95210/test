import React from 'react';

interface EarningSummaryCardProps {
  title: string;
  description?: string;
  amount: string;
  subDescription: string;
}

export const EarningSummaryCard: React.FC<EarningSummaryCardProps> = ({
  title, description, amount, subDescription
}) => (
  <div className="earning-card position-relative z-index-1">
    <img src="assets/images/gradients/testimonial-bg.png" alt="" className="hover-bg visible opacity-100" />
    <div>
      <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">{title}</h6>
      {description && <p className="earning-card__text font-14 text-white fw-200">{description}</p>}
    </div>
    <div>
      <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">{amount}</h5>
      <p className="earning-card__text font-14 text-white fw-200">{subDescription}</p>
    </div>
  </div>
);
