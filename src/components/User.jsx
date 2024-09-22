import React from 'react';
import '../styles/User.css';

const User = ({ name, catchPhrase, onClick, isGridView }) => {
    return (
      <div className={`user-card ${isGridView ? 'grid' : 'list'}`} onClick={onClick}>
        <h2>{name}</h2>
        <p>{catchPhrase}</p>
      </div>
    );
  };

export default User;