import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginThunk, userLogoutThunk } from '../user/UserActions';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {

  handleTouchTap() {
    if(!this.props.isAuthenticated){
      this.props.dispatch(userLoginThunk({email: 'briantacampbell@gmail.com', password: 'demo'}));
    } else {
      this.props.dispatch(userLogoutThunk());
    }
  }

  render() {
    //console.log('props: ', this.props);
    const authLabel = () => {
      if(this.props.isAuthenticated){
        return 'LOGOUT'
      } else {
        return 'LOGIN'
      }
    }
    return (
      <AppBar 
        title="Art Safari"
        iconElementRight={<FlatButton label={authLabel()} />}
        onRightIconButtonTouchTap={this.handleTouchTap.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  //console.log('state: ', state);
  return {
    user : state.app.user,
    isAuthenticated: state.app.isAuthenticated
  }
};

export default connect(mapStateToProps)(Header);