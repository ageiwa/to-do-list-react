import React from 'react';
import Note from '../Note/index'
import './style.css';

const Form = () => {
    return(
        <div className="note-list">
            <Note status="status await" title="Hello" />
        </div>
    );
}

export default Form;