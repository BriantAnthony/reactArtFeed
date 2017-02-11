import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test, loginRequest } from '../user/UserActions';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {

  handleTouchTap() {
    //alert('onTouchTap triggered on the title component');
    this.props.dispatch(test({email: 'bc@m.com', password: '123'}));
  }

  render() {
    console.log('props: ', this.props);
    return (
      <AppBar 
        title="Mini Art Feed"
        iconElementRight={<FlatButton label="login" />}
        onRightIconButtonTouchTap={this.handleTouchTap.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    user : state
  }
};

export default connect(mapStateToProps)(Header);