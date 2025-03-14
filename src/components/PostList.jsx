import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Dummy posts data for now
  const posts = [
    {
      id: 1,
      title: 'First Post',
      excerpt: 'This is the first post. It introduces the topic of the blog.',
      content: 'Full content of the first post. This is a dummy text to simulate post content.',
      author: 'Author 1',
      date: '2025-03-01',
      category: 'tech',
    },
    {
      id: 2,
      title: 'Second Post',
      excerpt: 'This is the second post. It explains the details of the project.',
      content: 'Full content of the second post. This is another dummy text to simulate post content.',
      author: 'Author 2',
      date: '2025-03-02',
      category: 'lifestyle',
    },
    {
      id: 3,
      title: 'Third Post',
      excerpt: 'This is the third post. It concludes the project overview.',
      content: 'Full content of the third post. More dummy content for testing.',
      author: 'Author 3',
      date: '2025-03-03',
      category: 'tech',
    },
  ];

  // Filter posts based on selected filter and search query
  const filteredPosts = posts
    .filter(post => {
      if (selectedFilter === 'all') return true;
      return post.category === selectedFilter;
    })
    .filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search posts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-25">
          <select
            className="form-select"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="tech">Tech</option>
            <option value="lifestyle">Lifestyle</option>
            {/* Add more options based on your categories */}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredPosts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/150"
                alt="Post Image"
                className="card-img-top"
              />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
