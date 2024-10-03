import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';

const AddEditModal = ({ open, onClose, onSave, editPost }) => {
  const [post, setPost] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    if (editPost) {
      setPost(editPost);
    } else {
      setPost({ title: '', content: '', imageUrl: '' });
    }
  }, [editPost]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(post);
    setPost({ title: '', content: '', imageUrl: '' });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box style={modalStyle}>
        <Typography variant="h6">{editPost ? 'Edit Post' : 'Add New Post'}</Typography>
        <TextField
          name="title"
          label="Title"
          value={post.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="content"
          label="Content"
          value={post.content}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        {/* New field for image URL */}
        <TextField
          name="imageUrl"
          label="Image URL"
          value={post.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: 24,
};

export default AddEditModal;
