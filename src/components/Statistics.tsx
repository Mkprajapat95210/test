import React from 'react';

interface StatisticsProps {
  amount: string;
  text: string;
  styleClass?: string;
}

const Statistics: React.FC<StatisticsProps> = ({ amount, text, styleClass = '' }) => {
  return (
    <div className={`statistics style-three position-relative start-0 top-0 bg-white text-center ${styleClass}`}>
      <h5 className="statistics__amount statistics__amount-two text-heading">{amount}</h5>
      <span className="statistics__text">{text}</span>
    </div>
  );
};

export default Statistics;
