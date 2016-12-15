require('style/common/reset.css')
import style from 'style/identity/register.scss'

import React from 'react'

// import Menu from './Menu';
import HeaderBar from '../common/HeaderBar'
import MyInput from '../common/MyInput'

class Register extends React.Component {
  render () {
    return (
      <div className={ style.register }>
        <HeaderBar
          content="我要注册"
          goBack={this.props.router.goBack}
        />

        <div className={ style.register_main }>
          <div className={ style.main_content }>
            <div className={ style.avatar }>
              <img />
            </div>

            <MyInput
              icon="user"
              type="text"
              placeholder="手机号/邮箱"
            />

            <div className={ style.checkcode }>
              <div className={ style.left_input }>
                <input type="text" />
              </div>

              <div className={ style.right_button }>获取验证码</div>
            </div>

            <MyInput
              icon="password"
              type="password"
              placeholder="密码不少于12位"
            />

            <MyInput
              icon="password"
              type="password"
              placeholder="再次确认密码"
            />

            <input type="button" value="注册" />
          </div>
        </div>

        {/* <footer>
            <Menu />
        </footer> */}
      </div>
    )
  }
}

export default Register
