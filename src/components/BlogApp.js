import React, { useState } from 'react';
import BlogPost from './BlogPost';
import AddEditModal from './AddEditModal';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

const BlogApp = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleAddClick = () => {
    setCurrentPost(null);
    setModalOpen(true);
  };

  const handleSavePost = (post) => {
    if (post.id) {
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
    } else {
      setPosts([...posts, { ...post, id: uuidv4(), createdAt: new Date() }]);
    }
  };

  const handleEditPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setCurrentPost(postToEdit);
    setModalOpen(true);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog App</h1>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
          onEdit={() => handleEditPost(post.id)}
          onDelete={() => handleDeletePost(post.id)}
        />
      ))}
      <Fab color="primary" aria-label="add" onClick={handleAddClick} style={fabStyle}>
        <AddIcon />
      </Fab>
      <AddEditModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSavePost}
        editPost={currentPost}
      />
    </div>
  );
};

const fabStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
};

export default BlogApp;
