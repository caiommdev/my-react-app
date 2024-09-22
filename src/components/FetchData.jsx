import React, { useEffect, useState } from 'react';
import User from './User';
import Post from './Post';
import Comment from './Comment';
import NavBar from './NavBar';

const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [comments, setComments] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const fetchUsers = async () => {
      	const response = await fetch('https://jsonplaceholder.typicode.com/users');
      	const data = await response.json();
      	setUsers(data);
    };

    const fetchPosts = async (userId) => {
      	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      	const data = await response.json();
      	setPosts(data);
    };

    const fetchComments = async (postId) => {
      	const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      	const data = await response.json();
      	setComments(data);
      	setSelectedPostId(postId);
    };

    useEffect(() => {
      fetchUsers();
    }, []);

    useEffect(() => {
      if (selectedUserId) {
        fetchPosts(selectedUserId);
        setComments([]);
      }
    }, [selectedUserId]);

    const handleUserClick = (userId) => {
       	setSelectedUserId(userId);
    };

    const handlePostClick = (postId) => {
        if (postId === selectedPostId) {
          	setComments([]);
          	setSelectedPostId(null);
        } else {
            fetchComments(postId);
        }
    };
	
	const handleBackToUsers = () => {
		setSelectedUserId(null);
		setPosts([]);
		setComments([]);
		setSelectedPostId(null);
	  };
	
	  const handleBackToPosts = () => {
		setSelectedPostId(null);
		setComments([]);
	  };

    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '-10px',
    };

    return (
		<div>
			<NavBar 
				onBackToUsers={handleBackToUsers}
				onBackToPosts={handleBackToPosts}
				showUsers={selectedPostId !== null}
				showButton={selectedUserId !== null}
			/>
			<div style={gridStyle}>
				{selectedUserId ? (
				posts.map(post => (
					<div key={post.id}>
						<Post 
							title={post.title} 
							body={post.body} 
							onClick={() => handlePostClick(post.id)} 
						/>
						{selectedPostId === post.id && comments.map(comment => (
							<Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
						))}
					</div>
				))
				) : (
					users.map(user => (
						<User 
							key={user.id} 
							name={user.name} 
							catchPhrase={user.company.catchPhrase} 
							onClick={() => handleUserClick(user.id)} 
						/>
					))
				)}
			</div>
		</div>
    );
};

export default FetchData;
