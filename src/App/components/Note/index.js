import React, { useRef } from 'react';
import './style.css';

const Note = (props) => {
    const footNote = useRef(null);

    function toggleNote() {
        footNote.current.classList.toggle('desc-active');
        footNote.current.nextSibling.firstChild.classList.toggle('rotate-arrow');
    }

    return(
        <div className="note">
            <div className="header">
                <div className={props.status} onClick={props.handleClick}></div>
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