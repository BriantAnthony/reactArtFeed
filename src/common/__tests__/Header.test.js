import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../app/rootReducer';
import Header from '../Header';
import renderer from 'react-test-renderer';

jest.mock('material-ui/AppBar', () => 'AppBar');
const store = createStore(rootReducer);

it('renders without crashing', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Header />
    </Provider>
  ).toJSON();
  //console.log('tree: ', tree);
  expect(tree).toMatchSnapshot();
});
