import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.scss'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import RenderProps, { Count } from './components/render-props/render-props';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="App">
                <div className="information">
                    <h1><strong>Marvel</strong> information portal</h1>
                    <div>
                        <NavLink to="/App">Characters / </NavLink>
                        <NavLink to="/RenderProps">RenderProps</NavLink>
                    </div>
                </div>
                <Route exact path="/App" component={App} />
                <Route exact path="/RenderProps"
                    component={() => (<RenderProps render={(counter) => (<Count state={counter} />)} />)} 
                />
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);