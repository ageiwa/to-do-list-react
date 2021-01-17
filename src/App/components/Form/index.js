import React from 'react';
import './style.css';

const Form = (props) => {
    function handleSubmit(e) {
        e.preventDefault();

        props.updateData(e.target[0].value);
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