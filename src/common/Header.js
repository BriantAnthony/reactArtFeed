import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test, userLoginThunk } from '../user/UserActions';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {

  handleTouchTap() {
    //alert('onTouchTap triggered on the title component');
    //this.props.dispatch(test({email: 'bc@m.com', password: '123'}));
    this.props.dispatch(userLoginThunk({email: 'briantacampbell@gmail.com', password: 'demo'}));
  }

  render() {
    //console.log('props: ', this.props);
    const testLabel = () => {
      if(this.props.test){
        return 'TESTED'
      } else {
        return 'UNTESTED'
      }
    }
    return (
      <AppBar 
        title="Mini Art Feed"
        iconElementRight={<FlatButton label={testLabel()} />}
        onRightIconButtonTouchTap={this.handleTouchTap.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    user : state.user,
    message: state.message,
    test: state.tested
  }
};

export default connect(mapStateToProps)(Header);