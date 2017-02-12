import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardWithAvatar from './Card';
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."
         
class Body extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    const props = this.props;
    const {user} = props;
    return (
      <div className="container">
        <CardWithAvatar 
          action1={() => console.log('Like Action!')}
          actionLabel1="Like"
          action2={() => console.log('Fetch New Random Image!')}
          actionLabel2="Random Image"
          avatar='https://avatars2.githubusercontent.com/u/5712135?v=3&s=460'
          artworkImg='http://i0.wp.com/inherit.eu/wp-content/uploads/2016/10/nature-forest-moss-leaves-e1476955210166.jpg?resize=600%2C337'
          artistName={user.name}
          artistNiche={user.userClass}
          artworkTitle="Harvey, the Harvestor"
          artworkYear={2017}
          artworkDescription={description}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log('newState: ', state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Body);
