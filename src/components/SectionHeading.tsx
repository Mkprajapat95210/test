import React from 'react';

const SectionHeading: React.FC<{ title: string; desc?: string; styleClass?: string; }>= ({ title, desc, styleClass = '' }) => {
  return (
    <div className={`section-heading ${styleClass}`}>
      <h5 className="section-heading__title">{title}</h5>
      {desc && <p className="section-heading__desc font-18 w-sm">{desc}</p>}
    </div>
  );
};

export default SectionHeading;
