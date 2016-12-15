require('style/account/other/otherQuestionItem.scss')

import React from 'react'

class OtherQuestionItem extends React.Component {
  render () {
    return (
      <div className="otherQuestionItem">
        <p>{this.props.content}</p>

        <p className="num">{this.props.concernNum}人关注,&nbsp;&nbsp;{this.props.answerNum}个回答</p>
      </div>
    )
  }
}

export default OtherQuestionItem
