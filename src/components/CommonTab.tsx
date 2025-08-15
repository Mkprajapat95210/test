import React from 'react';

interface CommonTabProps {
  id: string;
  children: React.ReactNode;
}

const CommonTab: React.FC<CommonTabProps> = ({ id, children }) => {
  return (
    <ul className="nav common-tab style-icon justify-content-center align-items-center nav-pills mb-48" id={id} role="tablist">
      {children}
    </ul>
  );
};

export default CommonTab;
