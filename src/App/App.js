import React, { useState } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Form from './components/Form/index';
import NoteList from './components/NoteList/index';
import DoneNoteList from './components/DoneNoteList/index';
import './style.css';

const App = () => {
    const arrayNotes = localStorage.getItem('notes') !== null ? JSON.parse(localStorage.getItem('notes')) : [];
    const arrayDoneNotes = localStorage.getItem('doneNotes') !== null ? JSON.parse(localStorage.getItem('doneNotes')) : [];

    const [notes, newNote] = useState(arrayNotes);
    const [doneNotes, newDoneNotes] = useState(arrayDoneNotes);

    function updateNotes (value) {
        const newArray = notes;
        newArray.push(value);
        newNote(newArray);

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function updateDoneNotes (value) {
        const newArray = doneNotes;
        newArray.push(value);
        newDoneNotes(newArray);

        localStorage.setItem('doneNotes', JSON.stringify(doneNotes));
    }

    return(
        <div className="app">
            <HashRouter>

                <ul className="tab-list">
                    <NavLink to="/create"><li className="tab">Создать</li></NavLink>
                    <NavLink exact to="/"><li className="tab">Заметки</li></NavLink>
                    <NavLink to="/done-notes"><li className="tab">Готовые</li></NavLink>
                </ul>
                <div className="content">
                    <Route path="/create" render={props => <Form updateData={updateNotes} />} />
                    <Route exact path="/" render={props => <NoteList notes={notes} updateData={updateDoneNotes} />} />
                    <Route path="/done-notes" render={props => <DoneNoteList doneNotes={doneNotes} />} />
                </div>

            </HashRouter>
        </div>
    );
}

export default App;