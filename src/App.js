import React from 'react';
import FetchData from './components/FetchData';
import './styles/App.css';

const App = () => {
  return (
    <div className='container'>
      <header>
        <h1>Minha Aplicação</h1>
        <p>Exibindo dados da API JSONPlaceholder</p>
      </header>

      <main className='content'>
        <FetchData />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Exibindo dados da API JSONPlaceholder. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
