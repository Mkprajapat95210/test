import React from 'react';
import NotFoundContent from './NotFoundContent';
import FooterSection from './FooterSection';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{
      color: "#444",
      margin: "0",
      font: "normal 14px/20px Arial, Helvetica, sans-serif",
      height: "100%",
      backgroundColor: "#fff"
    }}>
      <div style={{
        height: "auto",
        minHeight: "100%"
      }}>
        <NotFoundContent />
      </div>
      <FooterSection />
    </div>
  );
};

export default NotFoundPage;
