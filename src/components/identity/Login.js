require('style/common/reset.css')
import style from 'style/identity/login.scss'

import React from 'react'
import { Link } from 'react-router'
import { url } from 'util/Configs'
import Util from 'util/Util'

import Menu from 'component/common/Menu'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onValueChange (key, e) {
    let input = {}
    input[key] = e.target.value
    this.setState(input)
  }

  login () {

  }

  render () {
    return (
      <div className={ style.login }>
        <img src={require('image/logo.png')} />

        <div className={ style.login_main }>
          <div className={ Util.getStyle(style, 'input user') }>
            <input type="text" placeholder="邮箱/手机号" value={this.state.email} onChange={this.onValueChange.bind(this, 'email')} required />
          </div>

          <div className={ Util.getStyle(style, 'input password') } style={{marginBottom: '0.56rem'}} value={this.state.password} onChange={this.onValueChange.bind(this)}>
            <input type="password" placeholder="密码" required />
          </div>

          <input type="button" value="登陆" onClick={this.login} />

          <div className={ style.info }>
            <Link to={url.register} className={ style.new_user }>新用户</Link>
            <Link to="" className={ style.forget_password }>忘记密码</Link>
            {/* <a className="new_user">新用户</a> */}
            {/* <a className="forget_password">忘记密码</a> */}
          </div>

          <div className={ style.look_with_reg }>
            <Link to={url.index}>我想先看看>></Link>
            {/* <a>我想先看看>></a> */}
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
