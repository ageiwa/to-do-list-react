import React from 'react';
import './style.css';

const Note = (props) => {
    return(
        <div className="note">
            <div className="header">
                <div className={props.status}></div>
                <p className="title">{props.title}</p>
            </div>
            <div className="footer">
                <div className="icon-arrow"></div>
            </div>
        </div>
    );
}

export default Note;