import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import Spinner from './spinner/spinner';
import FormItem from './components/form-item/Form-item';

////динамические импорты
const App = lazy(() => import('./components/app/App'));
const Comics = lazy(() => import('./components/comics/Comics'));
const ComicsItem = lazy(() => import('./components/comics-item/Comics-item'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <div className="information">
          <NavLink exact to="/">
            <h1>
              <strong>Marvel</strong> information portal
            </h1>
          </NavLink>
          <div>
            <NavLink exact activeStyle={{ color: 'red' }} to="/">
              Characters /{' '}
            </NavLink>
            <NavLink activeStyle={{ color: 'red' }} to="/Comics">
              Comics{' '}
            </NavLink>
          </div>
        </div>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={App} />
          <Route exact path="/Comics" component={Comics} />
          <Route exact path="/Comics/:comicsId" component={ComicsItem} />

          <Route exact path="/FormItem/:charId" component={FormItem} />
        </Suspense>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
