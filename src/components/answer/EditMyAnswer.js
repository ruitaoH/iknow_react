require('style/common/reset.css')
import style from 'style/answer/editMyAnswer.scss'

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import CommentItem from './CommentItem'

class EditMyAnswer extends React.Component {
  render () {
    return (
      <div className={ style.editMyAnswer }>
        <HeaderBar
          content="查看回答"
          goBack={this.props.router.goBack}
        />

        <div className={ style.main_container }>
          <h1>哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？</h1>

          <div className={ style.user }>
            <div className={ style.left }>
              <img src={require('image/portraits.jpg')} />
              <span>昵称</span>
            </div>
            <div className={ style.line }></div>
            <div className={ style.right }>编辑回答</div>
          </div>

          <div className={ style.content }>
            <p>我们私聊，就要毕业了，目前不需要，你看你要的话就拿走。我们私聊，就要毕业了，目前不需要，你看你要的话就拿走。我们私</p>
            <h3>2016年12月09日</h3>
          </div>

          <div className={ style.comment_container }>
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
