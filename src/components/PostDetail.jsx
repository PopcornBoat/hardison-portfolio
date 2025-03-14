import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import posts from "../assets/dummyPosts";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate(); // Get the navigate function

  const post = posts.find(post => post.id === parseInt(postId));

  if (!post) {
    return <div className="alert alert-danger">Post not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.content}</p>
          <p className="card-meta text-muted">
            By {post.author} | {new Date(post.date).toLocaleDateString()}
          </p>

          {/* Back Button */}
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/posts')} // Navigate back to the PostList
          >
            Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
