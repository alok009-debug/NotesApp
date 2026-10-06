import React, { useState, useEffect } from 'react';

const CreateNote = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
    id: Date.now(),
      title,
      content: noteContent,
      updatedAt:  new Date().toLocaleString()
    };
    onSave(newNote);

    setTitle('');
    setNoteContent('');
  };


  useEffect(() => {
    localStorage.setItem('notesData', JSON.stringify(newNote))
  }, [newNote])

  return (
    <div className='popup-overlay'>
      <div className='popup-form'>
        <h3>Create New Note</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            name="noteContent"
            placeholder="Write here..."
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
          <div className='form-actions'>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
