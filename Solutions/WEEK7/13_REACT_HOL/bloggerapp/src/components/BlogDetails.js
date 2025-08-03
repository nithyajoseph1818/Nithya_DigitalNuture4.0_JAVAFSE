import React from 'react';

function Blog({ title, author }) {
  return <li><strong>{title}</strong> - {author}</li>;
}

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Patterns", author: "Dan Abramov" },
    { id: 2, title: "State Management Tips", author: "Kent C. Dodds" },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <Blog key={blog.id} title={blog.title} author={blog.author} />
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
