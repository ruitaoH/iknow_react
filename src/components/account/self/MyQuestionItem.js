import style from 'style/account/self/myQuestionItem.scss'

import React from 'react'

class MyQuestionItem extends React.Component {
  render () {
    return (
      <div className={ style.myQuestionItem }>
        <p>{this.props.content}</p>

        <p className={ style.num }>{this.props.concernNum}人关注,&nbsp;&nbsp;{this.props.answerNum}个回答</p>
      </div>
    )
  }
}

export default MyQuestionItem
