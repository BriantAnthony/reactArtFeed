import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import localforage from 'localforage';
import { Router, Route, browserHistory } from 'react-router';
import userReducer from '../user/userReducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../common/Header';
import Body from '../common/Body';

const loggerMiddleware = createLogger();
injectTapEventPlugin(); //required by MaterialUI for click/tap events

export const store = createStore(
  userReducer,
  undefined,
  compose(
    applyMiddleware(
    loggerMiddleware, // comment out before deploy to hide logging
    thunkMiddleware
    ),
    autoRehydrate()
  ));

// Persists redux-store
persistStore(store, {storage: localforage});

const styles = {
  body: {
    marginTop: 0,
  }
}

class Main extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div style={styles.body}>
            <Header />
            <Router history={browserHistory}>
              <Route path="/" component={Body} />
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
} 

export default Main;