import React, {Component} from 'react';
import logo from './logo.png';
import './index.less'


class Login extends Component {
  render () {
    return (
      <div className="logoName">
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Login;