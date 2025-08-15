import React from 'react';
import NotFoundContent from '../components/NotFoundContent';
import FooterInfo from '../components/FooterInfo';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{
      color: '#444',
      margin: '0',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontWeight: 'normal',
      fontStyle: 'normal',
      height: '100%',
      backgroundColor: '#fff'
    }}>
      <NotFoundContent />
      <FooterInfo />
    </div>
  );
};

export default NotFoundPage;