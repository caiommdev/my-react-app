import React from 'react';
import FetchData from './components/FetchData';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Minha Aplicação</h1>
        <p>Exibindo dados da API JSONPlaceholder</p>
      </header>

      <main>
        <FetchData />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
