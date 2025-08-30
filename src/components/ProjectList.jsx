import React, { useEffect, useState } from 'react';
import { getAll, remove } from '../services/projectService';
import { Link } from 'react-router-dom';

export default function ProjectList(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    getAll()
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => { load(); }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Delete this project?')) return;
    remove(id).then(() => load()).catch(err => console.error(err));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Projects</h2>
      {projects.length === 0 && <p>No projects yet. <Link to="/add">Add one</Link>.</p>}
      <ul>
        {projects.map(p => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <strong>{p.title}</strong>
            <p>{p.description}</p>
            <Link to={`/edit/${p.id}`}>Edit</Link> | <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
