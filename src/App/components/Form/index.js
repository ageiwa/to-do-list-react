import React from 'react';
import './style.css';

const Form = () => {
    return(
        <form className="form">
            <textarea className="text"></textarea>
            <input className="submit" type="submit"></input>
        </form>
    );
}

export default Form;