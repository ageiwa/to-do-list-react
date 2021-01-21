import React from 'react';
import Note from '../Note/index';
import './style.css';

const NoteList = (props) => {
    const array = props.notes;

    function completeNote(e) {
        const status = e.target;
        const note = status.parentElement.parentElement;
        const noteList = note.parentElement;

        for (let i = 0; i < noteList.children.length; i++) {
            if (noteList.children[i] === note) {
                array.splice(i, 1);

                localStorage.setItem('notes', JSON.stringify(array));
            }
        }

        status.classList.remove('await');
        status.classList.add('done');        

        note.classList.add('note-swipe');

        props.updateData(note.innerText);

        setTimeout(() => note.remove(), 400);
    }

    return(
        <div className="note-list">
            {
                array.map((title, i) => {
                    return <Note status="status await" handleClick={completeNote} title={title} desc={title} key={i} />
                }) 
            }
        </div>
    );
}

export default NoteList;