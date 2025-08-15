import React from 'react';

const CreateAccountButton: React.FC = () => {
  return (
    <a href="register.html" className="btn btn-main pill">
      <span className="icon-left icon">
        <img src="assets/images/icons/user.svg" alt="" />
      </span>Create Account
    </a>
  );
};

export default CreateAccountButton;