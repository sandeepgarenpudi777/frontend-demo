import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getById, update } from '../services/projectService';

export default function EditProject(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getById(id).then(res => {
      setTitle(res.data.title);
      setDescription(res.data.description);
    }).catch(err => console.error(err));
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    update(id, { title, description }).then(() => navigate('/'))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={submit}>
        <div>
          <label>Title</label><br/>
          <input value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label><br/>
          <textarea value={description} onChange={e=>setDescription(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
