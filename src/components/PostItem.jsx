import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="card h-100">
      <img src="https://via.placeholder.com/150" alt="Post Image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.excerpt}</p>
        <p className="card-meta text-muted">
          By {post.author} | {new Date(post.date).toLocaleDateString()}
        </p>
        <Link to={`/post/${post.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
