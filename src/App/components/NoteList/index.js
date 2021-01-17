import React from 'react';
import Note from '../Note/index';
import './style.css';

const NoteList = () => {
    return(
        <div className="note-list">
            <Note status="status await" title="Hello" />
        </div>
    );
}

export default NoteList;