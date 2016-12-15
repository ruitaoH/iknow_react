require('style/common/reset.css')
import style from 'style/answer/writeAnswer.scss'

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'

class WriteAnswer extends React.Component {
  render () {
    return (
      <div className={ style.writeAnswer }>
        <HeaderBar
          content="我要回答"
        />

        <div className={ style.main_container }>
          <h1>哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？</h1>

          <div className={ style.user }>
            <div className={ style.left }>
              <img src={require('image/portraits.jpg')} />
              <span>昵称</span>
            </div>
            <div className={ style.line }></div>
            <div className={ style.right }>完成</div>
          </div>

          <div className={ style.edit_container }>
            <textarea>
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default WriteAnswer
