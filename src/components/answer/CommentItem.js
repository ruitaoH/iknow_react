import style from 'style/answer/commentItem.scss'

import React from 'react'

const Reply = (props) => {
  return (
    <div className={ style.reply }>
      <h3><span>{props.other}</span>回复<span>{props.user}:</span></h3>
      <p>{props.content}</p>
    </div>
  )
}

class CommentItem extends React.Component {
  render () {
    return (
      <div className={ style.commentItem }>
        <img src={require('image/portraits.jpg')} />

        <div className={ style.comment }>
          <h1>昵称</h1>
          <h2>回复</h2>
          <h3>2016-03-27</h3>
          <p>这是回复的内容</p>

          <Reply
            user="昵称2"
            other="昵称1"
            content="这是评论回复的内容"
          />
          <Reply
            user="昵称2"
            other="昵称1"
            content="这是评论回复的内容"
          />
        </div>
      </div>
    )
  }
}

export default CommentItem
