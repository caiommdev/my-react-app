import React from 'react';
import '../styles/User.css';

const User = ({ name, catchPhrase, onClick }) => {
    return (
      <div className={`user-card`} onClick={onClick}>
        <h2>{name}</h2>
        <p>{catchPhrase}</p>
      </div>
    );
  };

export default User;