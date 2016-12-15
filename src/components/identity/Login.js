require('style/common/reset.css')
require('style/identity/login.scss')

import React from 'react'

import Menu from '../common/Menu'

class Login extends React.Component {
  render () {
    return (
      <div className="login">
        <img src={require('image/logo.png')} />

        <div className="login_main">
          <div className="input user">
            <input type="text" placeholder="邮箱/手机号" required />
          </div>

          <div className="input password" style={{marginBottom: '0.56rem'}}>
            <input type="text" placeholder="密码" required />
          </div>

          <input type="button" value="登陆" />

          <div className="info">
            <a className="new_user">新用户</a>
            <a className="forget_password">忘记密码</a>
          </div>

          <div className="look_with_reg">
            <a>我想先看看>></a>
          </div>
        </div>

        <footer>
          <Menu />
        </footer>
      </div>
    )
  }
}

export default Login
