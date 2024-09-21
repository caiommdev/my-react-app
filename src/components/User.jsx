import React from 'react';
import '../styles/User.css';

const User = ({ name, catchPhrase }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{catchPhrase}</p>
    </div>
  );
};

export default User;