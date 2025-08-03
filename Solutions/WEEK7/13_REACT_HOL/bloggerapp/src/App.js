import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [section, setSection] = useState("books");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSection("books")}>Show Book Details</button>
        <button onClick={() => setSection("blogs")}>Show Blog Details</button>
        <button onClick={() => setSection("courses")}>Show Course Details</button>
      </div>

      {/* Conditional rendering using if-else-like expression */}
      {section === "books" && <BookDetails />}
      {section === "blogs" && <BlogDetails />}
      {section === "courses" && <CourseDetails />}
    </div>
  );
}

export default App;
