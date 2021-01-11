import React from 'react';
import Form from './components/Form/index';
import NoteList from './components/NoteList/index';
import './style.css';

const App = () => {
    return(
        <div className="app">
            <ul className="tab-list">
                <li className="tab active-tab">Создать</li>
                <li className="tab">Заметки</li>
                <li className="tab">Готовые</li>
            </ul>
            <div className="content">
                <Form />
                <NoteList />
            </div>
        </div>
    );
}

export default App;