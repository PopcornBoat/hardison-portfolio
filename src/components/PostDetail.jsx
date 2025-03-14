import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate(); // Get the navigate function

  // Dummy posts data for now
  const posts = [
    {
      id: 1,
      title: 'First Post',
      content: 'Full content of the first post. This is a dummy text to simulate post content.',
      author: 'Author 1',
      date: '2025-03-01',
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'Full content of the second post. This is another dummy text to simulate post content.',
      author: 'Author 2',
      date: '2025-03-02',
    },
    {
      id: 3,
      title: 'Third Post',
      content: 'Full content of the third post. More dummy content for testing.',
      author: 'Author 3',
      date: '2025-03-03',
    },
  ];

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
