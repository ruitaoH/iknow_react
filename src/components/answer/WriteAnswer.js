require('style/common/reset.css')
require('style/answer/writeAnswer.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'

class WriteAnswer extends React.Component {
  render () {
    return (
      <div className="writeAnswer">
        <HeaderBar
          content="我要回答"
        />

        <div className="main_container">
          <h1>哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？</h1>

          <div className="user">
            <div className="left">
              <img src={require('image/portraits.jpg')} />
              <span>昵称</span>
            </div>
            <div className="line"></div>
            <div className="right">完成</div>
          </div>

          <div className="edit_container">
            <textarea>
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default WriteAnswer
