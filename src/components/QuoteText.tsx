import React from 'react';

const QuoteText: React.FC = () => {
  return (
    <div className="quote-text mb-40">
      <img src="assets/images/icons/quote-icon.svg" alt="" className="quote-text__icon" />
      <p className="quote-text__desc mb-3 font-20 fw-500 text-heading">“Through their vision, determination, and exacting standards, the winning young developers inspire not only their peers in the Apple developer.</p>
      <h6 className="quote-text__name">Esabela Marun</h6>
    </div>
  );
};

export default QuoteText;
