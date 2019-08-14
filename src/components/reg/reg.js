import React, { Component } from 'react';
import WrappedNormalLoginForm from './NormalLoginForm'
import './login.css';
import Auth from '../auth/Auth'
class Login extends Component {
    render() {
      return (
        <div>
            <div className="Login" >
                <h2 className="center">用户报名</h2>
                <div className="Login-form">
                    <WrappedNormalLoginForm/>
                </div>
            </div>
        </div>
        

      );
    }
  }
  export default Login;