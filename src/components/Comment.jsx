import React from 'react';
import "../styles/Comment.css";

const Comment = ({ name, email, body }) => {
  const namesList = name.split(' ');
  const firstName = namesList[0]
  const lastName = namesList[namesList.length -1]
  const formattedEmail = `@${email.split('@')[0].toLowerCase()}`;

  return (
    <div className="comment-card">
      <h4 className="comment-name">{`${firstName} ${lastName}`}</h4>
      <p className="comment-email">{formattedEmail}</p>
      <p>{body.length > 140 ? `${body.substring(0, 140)}...` : body}</p>
    </div>
  );
};

export default Comment;
