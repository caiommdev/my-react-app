import React from 'react';
import '../styles/NavBar.css';

const NavBar = ({ onBackToUsers, onBackToPosts, showUsers, showButton }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Minha Aplicação</h1>
      <div className="navbar-buttons">
        {showButton ? (
            <button className="navbar-button" onClick={onBackToPosts}>Ver Posts</button>
        ) : (
          <>
            {showUsers ? (
                <button className="navbar-button" onClick={onBackToUsers}>Voltar para Usuários</button>
            ) : null}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
