import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './configureStore';
import AppContainer from './AppContainer.jsx';
import Profile from './components/Profile.jsx'
import Gallery from './components/Gallery.jsx'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainContent from './components/MainContent.jsx'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Route path="/" history={history} render={AppContainer} />
        <MainContent>
          <Switch>
            <Route path="/profile" history={history} component={Profile} />
            <Route path="/gallery" history={history} component={Gallery} />
            <Route render={() => <Redirect to="/profile" />} />
          </Switch>
          </MainContent>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
