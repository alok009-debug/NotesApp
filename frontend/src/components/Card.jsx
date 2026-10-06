import { useEffect, useState } from 'react'
import { RiHeartLine, RiDeleteBin6Line } from 'react-icons/ri'
import notesdata from '../data/NotesData'
const Card = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('notesData');
        if (data) {
            setNotes(JSON.parse(data));
        }
    }, []);
    if (!notes || notes.length === 0) {
        return <p>No Notes Found.</p>;
    }

    console.log(notes);

    return (
        <>
            {notes.map(note => (
                <div className='NoteCard' key={note.id}>
                    <div className='cardTop'>
                        <div className='noteType'>
                            {note.noteType}
                        </div>
                        <div className='heart-icon'>
                            <RiHeartLine id='heart' />
                        </div>
                    </div>
                    <div className='title'>

                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    </div>
                    <div className='notes-bottom' >

                        <div className='updateDetails'>
                            {note.updatedAt}
                        </div>
                        <div className='delete-icon'>
                            <RiDeleteBin6Line
                                size={20}
                                className='Icon'
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Card