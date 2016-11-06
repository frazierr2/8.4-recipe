//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

//LOCAL IMPORTS
var TemplateContainer = require('./template.jsx').TemplateContainer;
var UsersCollection = require('../models/user').UsersCollection;

var Login = React.createClass({
  getInitialState: function(){
    var username = '';
    var password = '';
    return {
      username: username,
      password: password
    }
  },

  setUsername: function(e){
    var userName = e.target.value;
    this.setState({username: userName});
  },

  setPassword: function(e){
    var userPassword = e.target.value;
    this.setState({password: userPassword});
  },

  setUser: function(e){
    e.preventDefault();

    var userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.setUser(userInfo);
  },


  render: function(){
    var self = this;
    return(
        <div className="col-md-6 well">
          <form onSubmit={self.setUser}>
            <div className="form-group">
              <h1 className="text-center">Sign In</h1>
              <label htmlhtmlFor="username">Email/Username</label>
              <input onChange={self.setUsername} type="text" className="form-control" id="username" placeholder="Please Enter Your Email or Username" />
            </div>
            <div className="form-group">
              <label htmlhtmlFor="password">Password</label>
              <input onChange={self.setPassword}type="password" className="form-control" id="password" placeholder="Please Enter Your Password" />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign In</button>
          </form>
        </div>
    );
  }
});

var SignUp = React.createClass({
  getInitialState: function(){
    var username = '';
    var password = '';
    return {
      username: username,
      password: password
    }
  },

  setNewUsername: function(e){
    var userName = e.target.value;
    this.setState({username: userName});
  },

  setNewPassword: function(e){
    var userPassword = e.target.value;
    this.setState({password: userPassword});
  },

  setNewUser: function(e){
    e.preventDefault();

    var userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.setNewUser(userData);
  },

  render: function(){
    var self = this;
    return (
      <div className="col-md-6 well">
        <form onSubmit={self.setNewUser}>
          <div className="form-group">
            <h1 className="text-center">Create An Account</h1>
            <label htmlFor="createUsername">Email/Username</label>
            <input onChange={self.setNewUsername} type="text" className="form-control" id="createUsername" placeholder="Please Enter Your Email or Username" />
          </div>
          <div className="form-group">
            <label htmlFor="createPassword">Password</label>
            <input onChange={self.setNewPassword} type="password" className="form-control" id="createPassword" placeholder="Please Enter Your Password" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Create Account</button>
        </form>
      </div>
    );
  }
});

var LoginContainer = React.createClass({
  componentWillMount: function(){
    this.ajaxSetup();
  },

  ajaxSetup: function(token){
    $.ajaxSetup({
        beforeSend: function(xhr){
          xhr.setRequestHeader('X-Parse-Application-Id', 'ryansparseserver');
          xhr.setRequestHeader('X-Parse-REST-API-Key', 'ryansapikey');
        if(token){
          xhr.setRequestHeader('X-Parse-Session-Token', token);
        }
        }
    });
  },

  handleSubmit: function(userInfo){
    var username = userInfo.username;
    var password = userInfo.password;

    var self = this;
    var url = 'https://thefraz.herokuapp.com/';

    $.ajax(url + 'login?username=' + username + '&password=' + password).then(function(response){
      localStorage.setItem('username', response.username);
      localStorage.setItem('token', response.sessionToken);
      if (response.sessionToken) {
        self.props.router.navigate('listing/', {trigger: true});
      };
    });
  },

  handleSignUp: function(userData){
    $.post('https://thefraz.herokuapp.com/users', userData).then(function(response){
      console.log(response);
    })
  },
  render: function(){
    return (
      <TemplateContainer>
        <Login setUser={this.handleSubmit}/>
        <SignUp setNewUser={this.handleSignUp}/>
      </TemplateContainer>
    )
  }
});


module.exports = {
  LoginContainer: LoginContainer
}
