import React, { useRef } from 'react';
import './style.css';

const Note = (props) => {
    const footNote = useRef(null);

    function toggleNote() {
        footNote.current.classList.toggle('desc-active');
        footNote.current.nextSibling.firstChild.classList.toggle('rotate-arrow');
    }

    function completeNote(e) {
        const status = e.target;
        const note = status.parentElement.parentElement;

        status.classList.remove('await');
        status.classList.add('done');        

        note.classList.add('note-swipe');

        setTimeout(() => note.remove(), 400);
    }

    return(
        <div className="note">
            <div className="header">
                <div className={props.status} onClick={completeNote}></div>
                <p className="title">{props.title}</p>
            </div>
            <div className="desc" ref={footNote}>{props.desc}</div>
            <div className="footer" onClick={toggleNote}>
                <div className="icon-arrow"></div>
            </div>
        </div>
    );
}

export default Note;