import React from 'react';

const NavBar = ({ onBackToUsers, onBackToPosts, showUsers, showButton }) => {
  return (
    <nav style={{ margin: '1rem 0', display: 'flex', justifyContent: 'space-between' }}>
      {showUsers ? (
        <button onClick={onBackToPosts}>Voltar para Posts</button>
      ) : (
        showButton ? (
        <button onClick={onBackToUsers}>Voltar para Usuários</button>
        ) : null
      )}
    </nav>
  );
};

export default NavBar;