import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Form from './components/Form/index';
import NoteList from './components/NoteList/index';
import './style.css';

const App = () => {
    return(
        <div className="app">
            <HashRouter>

                <ul className="tab-list">
                    <NavLink to="/create"><li className="tab active-tab">Создать</li></NavLink>
                    <NavLink to="/notes"><li className="tab">Заметки</li></NavLink>
                    <NavLink to="/done-notes"><li className="tab">Готовые</li></NavLink>
                </ul>
                <div className="content">
                    <Route path="/create" component={Form} />
                    <Route path="/notes" component={NoteList} />
                </div>

            </HashRouter>
        </div>
    );
}

export default App;