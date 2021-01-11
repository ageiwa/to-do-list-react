import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Form from './components/Form/index';
import NoteList from './components/NoteList/index';
import './style.css';

const App = () => {
    function switchWindow(e) {
        const btn = e.target;
        const tabList = btn.parentElement.parentElement;

        for (let i = 0; i < tabList.children.length; i++) {
            tabList.children[i].firstChild.classList.remove('active-tab');
        }

        btn.classList.add('active-tab');
    }

    return(
        <div className="app">
            <HashRouter>

                <ul className="tab-list">
                    <NavLink to="/create"><li className="tab active-tab" onClick={(e) => switchWindow(e)}>Создать</li></NavLink>
                    <NavLink to="/notes"><li className="tab" onClick={(e) => switchWindow(e)}>Заметки</li></NavLink>
                    <NavLink to="/done-notes"><li className="tab" onClick={(e) => switchWindow(e)}>Готовые</li></NavLink>
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