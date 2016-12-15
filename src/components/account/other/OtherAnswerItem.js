require('style/account/other/otherAnswerItem.scss')

import React from 'react'

class OtherAnswerItem extends React.Component {
  render () {
    return (
      <div className="otherAnswerItem">
        <p><span>{this.props.name}在问题&nbsp;&nbsp;</span>&quot;{this.props.content}&quot;<span>&nbsp;&nbsp;下添加了回答</span></p>
      </div>
    )
  }
}

export default OtherAnswerItem
