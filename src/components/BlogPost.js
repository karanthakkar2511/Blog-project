import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BlogPost = ({ post, onEdit, onDelete }) => {
  const { title, content, imageUrl, createdAt } = post;

  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {new Date(createdAt).toLocaleString()}
        </Typography>
      
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Blog Post"
            style={{ width: '100%', height: 'auto', marginTop: '10px' }}
          />
        )}
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {content}
        </Typography>
        <Button color="primary" onClick={onEdit} style={{ marginRight: '10px' }}>Edit</Button>
        <Button color="secondary" onClick={onDelete}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
