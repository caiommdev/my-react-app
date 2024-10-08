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
	const [isGridView, setIsGridView] = useState(true);

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

	const toggleView = () => {
		setIsGridView(!isGridView);
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

	const handleDeleteComment = (commentId) => {
		setComments(comments.filter(comment => comment.id !== commentId));
	  };
	
	
	const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        margin: '1rem',
    };

    const listStyle = {
        flex: '1 1 100%',
    };

	const buttonStyle = {
		backgroundColor: '#e9e0d1',
		color: '#070001',
		border: 'none',
		borderRadius: '4px',
		padding: '0.5rem 1rem',
		margin: '1rem',
		cursor: 'pointer',
		transition: 'background-color 0.3s'
	}

	const showUsers = selectedUserId !== null;
  	const showButton = selectedPostId !== null;

    return (
		<div>
			<NavBar 
				onBackToUsers={handleBackToUsers}
				onBackToPosts={handleBackToPosts}
				showUsers={showUsers}
				showButton={showButton}
			/>
			<button onClick={toggleView} style={buttonStyle}>
				Alternar para {isGridView ? 'Lista' : 'Grade'}
			</button>
			<div style={isGridView ? gridStyle : listStyle}>
				{selectedUserId ? (
				posts.map(post => (
					<div key={post.id}>
						<Post 
							title={post.title} 
							body={post.body} 
							onClick={() => handlePostClick(post.id)} 
						/>
						{selectedPostId === post.id && comments.map(comment => (
							<Comment 
							key={comment.id} 
							name={comment.name} 
							email={comment.email} 
							body={comment.body}
							onDelete={() => handleDeleteComment(comment.id)} />
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
							isGridView={isGridView}
						/>
					))
				)}
			</div>
		</div>
    );
};

export default FetchData;
