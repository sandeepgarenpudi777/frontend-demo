import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '20px auto', padding: 10 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>My Portfolio</h1>
        <nav>
          <Link to="/">Projects</Link> | <Link to="/add">Add Project</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProjectList/>} />
        <Route path="/add" element={<AddProject/>} />
        <Route path="/edit/:id" element={<EditProject/>} />
      </Routes>
    </div>
  );
}

export default App;
