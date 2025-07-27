import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy - Cohort Dashboard</h1>
      <CohortDetails name="React Bootcamp" batch="May 2025" status="ongoing" />
      <CohortDetails name="Node.js Mastery" batch="March 2025" status="completed" />
    </div>
  );
}

export default App;
