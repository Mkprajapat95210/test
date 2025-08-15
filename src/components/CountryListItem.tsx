import React from 'react';

interface CountryListItemProps {
  flagSrc: string;
  countryName: string;
  amount: string;
}

const CountryListItem: React.FC<CountryListItemProps> = ({ flagSrc, countryName, amount }) => {
  return (
    <li className="country-list__item flx-between gap-2">
      <div className="country-list__content flx-align gap-2">
        <span className="country-list__flag"><img src={flagSrc} alt="" /></span>
        <span className="country-list__name">{countryName}</span>
      </div>
      <span className="country-list__amount">{amount}</span>
    </li>
  );
};

export default CountryListItem;