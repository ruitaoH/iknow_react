import style from 'style/account/other/otherCollectionItem.scss'

import React from 'react'

class OtherCollectionItem extends React.Component {
  render () {
    let type = {
      'answer': '回答',
      'question': '问题'
    }

    return (
      <div className={ style.otherCollectionItem }>
        <h3>{this.props.name}收藏了{type[this.props.type]}</h3>
        <p>&nbsp;&nbsp;{this.props.content}</p>
      </div>
    )
  }
}

export default OtherCollectionItem
