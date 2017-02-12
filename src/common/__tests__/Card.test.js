import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardWithAvatar from '../Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <CardWithAvatar 
        action1={jest.fn()}
        actionLabel1="Like"
        action2={jest.fn()}
        actionLabel2="Random Image"
        avatar='https://avatars2.githubusercontent.com/u/5712135?v=3&s=460'
        artworkImg='http://i0.wp.com/inherit.eu/wp-content/uploads/2016/10/nature-forest-moss-leaves-e1476955210166.jpg?resize=600%2C337'
        artistName="Briant Campbell"
        artistNiche="Photography"
        artworkTitle="Harvey, the Harvestor"
        artworkYear="2017"
        artworkDescription="This is good art."
        isFetching={false}
      />
    </MuiThemeProvider>
  ).toJSON();
  //console.log('tree: ', tree);
  expect(tree).toMatchSnapshot();
});
