import React from 'react';
import Note from '../Note/index';
import './style.css';

const NoteList = (props) => {
    const array = props.notes;

    return(
        <div className="note-list">
            {
                array.map((title, i) => {
                    return <Note status="status await" title={title} desc={title} key={i} />
                }) 
            }
        </div>
    );
}

export default NoteList;