import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../app/rootReducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Card, 
  CardActions, 
  CardHeader, 
  CardText
} from 'material-ui/Card';
import Login from '../UserLogin';
import renderer from 'react-test-renderer';

const store = createStore(rootReducer);
const form = {
  email: 'briantacampbell@gmail.com',
  password: 'demo'
};

it('renders without crashing', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Provider store={store}>
        <Login/>
      </Provider>
    </MuiThemeProvider>
  ).toJSON();
  //console.log('tree: ', tree);
  expect(tree).toMatchSnapshot();
});
