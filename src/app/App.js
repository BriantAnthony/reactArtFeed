import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import userReducer from '../user/userReducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../common/Header';
import Body from '../common/Body';

const loggerMiddleware = createLogger();
injectTapEventPlugin(); //required by MaterialUI for click/tap events

const store = createStore(
  userReducer,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  ));

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