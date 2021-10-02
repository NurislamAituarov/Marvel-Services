import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.scss'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="App">
                <div className="information">
                    <h1><strong>Marvel</strong> information portal</h1>
                    <div>
                        <NavLink to="/App">Characters / </NavLink>
                        <NavLink to="/Section">Comics</NavLink>
                    </div>
                </div>
                <Route exact path="/App" component={App} />
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);