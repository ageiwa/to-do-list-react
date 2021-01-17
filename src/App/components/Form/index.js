import React, { useState } from 'react';
import './style.css';

const Form = () => {
    const [notes, setNotes] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const newArray = notes;
        newArray.push(e.target[0].value)
        setNotes(newArray);

        e.target[0].value = '';
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <textarea className="text"></textarea>
            <input className="submit" type="submit" value="Записать"></input>
        </form>
    );
}

export default Form;