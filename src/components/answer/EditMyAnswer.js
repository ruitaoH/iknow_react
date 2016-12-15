require('style/common/reset.css')
require('style/answer/editMyAnswer.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import CommentItem from './CommentItem'

class EditMyAnswer extends React.Component {
  render () {
    return (
      <div className="editMyAnswer">
        <HeaderBar
          content="查看回答"
        />

        <div className="main_container">
          <h1>哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？</h1>

          <div className="user">
            <div className="left">
              <img src={require('image/portraits.jpg')} />
              <span>昵称</span>
            </div>
            <div className="line"></div>
            <div className="right">编辑回答</div>
          </div>

          <div className="content">
            <p>我们私聊，就要毕业了，目前不需要，你看你要的话就拿走。我们私聊，就要毕业了，目前不需要，你看你要的话就拿走。我们私</p>
            <h3>2016年12月09日</h3>
          </div>

          <div className="comment_container">
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
        </div>
      </div>
    )
  }
}

export default EditMyAnswer
