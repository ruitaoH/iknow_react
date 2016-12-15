import style from 'style/account/self/myAnswerItem.scss'

import React from 'react'

class MyAnswerItem extends React.Component {
  render () {
    return (
      <div className={ style.myAnswerItem }>
        <p>我在问题&nbsp;&nbsp;<span style={{color: '#4C566C'}}>&quot;{this.props.content}&quot;</span>&nbsp;&nbsp;下添加了回答</p>
      </div>
    )
  }
}

export default MyAnswerItem
