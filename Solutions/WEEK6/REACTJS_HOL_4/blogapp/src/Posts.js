import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Fetch posts from API
  loadPosts() {
    const customPosts = [
      { id: 1, title: "React Basics", body: "Introduction to React components and state." },
      { id: 2, title: "React Lifecycle", body: "Understanding componentDidMount and other hooks." },
      { id: 3, title: "Styling in React", body: "How to apply styles using CSS in JS." },
    ];
  
    this.setState({ posts: customPosts });
  }
  

  // Called once the component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // Catch rendering or lifecycle errors
  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts.");
    console.error("Error caught in componentDidCatch:", error, info);
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2>Error loading posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
