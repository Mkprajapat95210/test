import React from 'react';

interface SettingsDetailCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const SettingsDetailCard: React.FC<SettingsDetailCardProps> = ({ id, title, children }) => (
  <div className="card common-card border border-gray-five overflow-hidden mb-24" id={id}>
    <div className="card-header">
      <h6 className="title">{title}</h6>
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>
);
