import React from 'react';
import Note from '../Note/index';
import './style.css';

const DoneNoteList = (props) => {
    const array = props.doneNotes;

    return(
        <div className="done-note-list">
            {
                array.map((title, i) => {
                    return <Note status="status done" title={title} desc={title} key={i} />
                }) 
            }
        </div>
    );
}

export default DoneNoteList;