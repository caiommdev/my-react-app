import React, { useEffect, useState } from 'react';
import User from './User'; // Importa o componente User

const FetchData = () => {
  const [users, setUsers] = useState([]);

  // Função para buscar usuários
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  // Chamar a função de buscar usuários ao montar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  // Estilos inline para o grid
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '-10px', // Para compensar a margem dos cartões
  };

  return (
    <div style={gridStyle}>
      {users.map(user => (
        <User key={user.id} name={user.name} catchPhrase={user.company.catchPhrase} />
      ))}
    </div>
  );
};

export default FetchData;
