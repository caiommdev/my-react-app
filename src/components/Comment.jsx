import React from 'react';
import "../styles/Comment.css";

const Comment = ({ name, email, body, onDelete }) => {
  const namesList = name.split(' ');
  const firstName = namesList[0]
  const lastName = namesList[namesList.length -1]
  const formattedEmail = `@${email.split('@')[0].toLowerCase()}`;

  const handleDelete = () => {
    const confirmDelete = window.confirm("Tem certeza de que deseja excluir este comentário?");
    if (confirmDelete) {
      onDelete();
    }
  };


  return (
    <div className="comment-card">
      <h4 className="comment-name">{`${firstName} ${lastName}`}</h4>
      <p className="comment-email">{formattedEmail}</p>
      <p>{body.length > 140 ? `${body.substring(0, 140)}...` : body}</p>
      <button className='comment-button' onClick={handleDelete}> Excluir </button>
    </div>
  );
};

export default Comment;
