import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import createHistory from 'history/createBrowserHistory';

import './semantic/dist/semantic.min.css'
import App from './containers/App';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = combineReducers({router: routerReducer});

const store = createStore(reducers, applyMiddleware(middleware));

ReactDOM.render(

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root')
)
