import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../app/rootReducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Header from '../Header';
import renderer from 'react-test-renderer';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Provider store={store}>
        <Header />
      </Provider>
    </MuiThemeProvider>
  ).toJSON();
  //console.log('tree: ', tree);
  expect(tree).toMatchSnapshot();
});
