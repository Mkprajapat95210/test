import React from 'react';

export const Preloader: React.FC = () => (
  <div className="loader-mask">
    <div className="loader">
      <div></div>
      <div></div>
    </div>
  </div>
);

export const Overlays: React.FC = () => (
  <>
    <div className="overlay"></div>
    <div className="side-overlay"></div>
  </>
);

export const ScrollToTop: React.FC = () => (
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
);
