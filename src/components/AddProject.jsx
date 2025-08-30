import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../services/projectService';

export default function AddProject(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) { setError('Title required'); return; }

    create({ title, description })
      .then(() => navigate('/'))
      .catch(err => setError(err.response?.data || 'Error'));
  }

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={submit}>
        <div>
          <label>Title</label><br/>
          <input value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label><br/>
          <textarea value={description} onChange={e=>setDescription(e.target.value)} />
        </div>
        {error && <p style={{color:'red'}}>{error}</p>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
