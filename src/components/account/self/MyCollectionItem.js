import style from 'style/account/self/myCollectionItem.scss'

import React from 'react'

class MyCollectionItem extends React.Component {
  render () {
    return (
      <div className={ style.myCollectionItem }>
        <p className={ style.desc }><span>{this.props.name}</span>提出了问题</p>

        <p className={ style.title }>{this.props.content}</p>
      </div>
    )
  }
}

export default MyCollectionItem
