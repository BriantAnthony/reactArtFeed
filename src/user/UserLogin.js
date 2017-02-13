import React, { Component } from 'react';
import {
  Card, 
  CardActions, 
  CardHeader, 
  CardText
} from 'material-ui/Card';
import { connect } from 'react-redux';
import { userLoginThunk } from '../user/UserActions';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  loginForm: {
    width: 400,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const TextFieldExampleCustomize = (props) => (
  <div>
    <TextField
      defaultValue={props.form.email}
      hintText="email"
      floatingLabelText="Email"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      fullWidth={true}
    /><br/>
    <TextField
      defaultValue={props.form.password}
      hintText="Password"
      floatingLabelText="Password"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      fullWidth={true}
      type="password"
    />
  </div>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: 'briantacampbell@gmail.com',
        password: 'demo'
      }
    };
    this.userLogin = this.userLogin.bind(this);
  }

  userLogin(payload) {
    if(payload){
      console.log('payload:', payload);
      this.props.dispatch(userLoginThunk(payload));
    }
  }

  render(){
    return (
      <Card style={styles.loginForm}>
        <CardHeader
          title="Login"
          subtitle="Demo Account"
        />
        <CardText>
          <TextFieldExampleCustomize form={this.state.form} />
        </CardText>
        <CardActions>
          <RaisedButton label="Login" primary={true} onTouchTap={() => this.userLogin(this.state.form)} />
          <FlatButton label="Forgot Password" />
        </CardActions>
      </Card>
    );
  }
}

export default connect()(Login);
