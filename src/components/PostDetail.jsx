import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const validPostIds = [1];

const PostDetail = () => {
    const { postId } = useParams();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [iframeSize, setIframeSize] = useState({
        width: window.innerWidth, // Initial width of window
        height: window.innerHeight, // Initial height of window
    });
    // Update iframe size on window resize
    useEffect(() => {
        const handleResize = () => {
            setIframeSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Attach the resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures this runs only on mount/unmount


    useEffect(() => {
        setTimeout(() => {
            if (!validPostIds.includes(Number(postId))) {
                setError('Post not found');
            }
            setLoading(false);
        }, 1000); // Simulating a network delay of 1 second
    }, [postId]);

    const handleBack = () => {
        navigate('/posts'); // Go back to the posts list page
    };

    if (loading) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Checking post...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
                <h2 className="text-danger">404 - Post Not Found</h2>
                <p className="text-muted">The post you are looking for does not exist.</p>
                <button className="btn btn-primary mt-3" onClick={handleBack}>
                    Back to Post List
                </button>
            </div>
        );
    }

    return (
        <div className="w-100">
            <h2 className="text-center">Post {postId}</h2>
            {/* Iframe with dynamic size */}
            <iframe
                src={`/${postId}.html`} // Make sure your HTML files are in `public/posts/`
                width={iframeSize.width} // Set width dynamically based on window size
                height={iframeSize.height} // Set height dynamically based on window size
                frameBorder="0"
                style={{
                    display: "block",
                    border: "none",
                    overflow: "hidden",
                }}
                title={`Post ${postId}`}
            />
        </div>
    );
};

export default PostDetail;