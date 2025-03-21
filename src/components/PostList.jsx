import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from "../assets/dummyPosts";

const PostList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [awsPosts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://express-netlify-deploy-demo.netlify.app/.netlify/functions/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  

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
                <h5 className="card-title">{awsPosts?.files?.[1] || "Loading..."}</h5>
                <p className="card-text">{post.excerpt}</p>
                <p className="card-meta text-muted">
                  By {post.author} | {new Date(post.date).toLocaleDateString()}
                </p>
                <Link to={`/post/${awsPosts?.files?.[1] || "Loading..."}`} className="btn btn-primary">
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
