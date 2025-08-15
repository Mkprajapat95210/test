import React from 'react';

const HappyClientThree: React.FC = () => {
  return (
    <div className="happy-client-three flx-align">
      <div className="happy-client-three__thumbs">
        <img src="assets/images/thumbs/happy-client1.png" alt="Client" className="happy-client-three__img" />
        <img src="assets/images/thumbs/happy-client2.png" alt="Client" className="happy-client-three__img" />
        <img src="assets/images/thumbs/happy-client3.png" alt="Client" className="happy-client-three__img" />
        <img src="assets/images/thumbs/happy-client4.png" alt="Client" className="happy-client-three__img" />
      </div>
      <span className="happy-client-three__text text-heading fw-500 text-center">2k Happy Clients</span>
    </div>
  );
};

export default HappyClientThree;