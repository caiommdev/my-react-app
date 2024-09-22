import React from 'react';
import '../styles/Post.css';

const Post = ({ title, body, onClick }) => {
    return (
      <div onClick={onClick} className="post-card">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  };

export default Post;
