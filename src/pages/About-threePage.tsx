import React from 'react';
import NotFoundContent from '../components/NotFoundContent';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div style={{ color: '#444', margin: '0', fontWeight: 'normal', fontSize: '14px', lineHeight: '20px', fontFamily: 'Arial, Helvetica, sans-serif', height: '100%', backgroundColor: '#fff' }}>
      <div style={{ height: 'auto', minHeight: '100%' }}>
        <NotFoundContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;