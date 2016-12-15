require('style/account/self/myCollectionItem.scss')

import React from 'react'

class MyCollectionItem extends React.Component {
  render () {
    return (
      <div className="myCollectionItem">
        <p className="desc"><span>{this.props.name}</span>提出了问题</p>

        <p className="title">{this.props.content}</p>
      </div>
    )
  }
}

export default MyCollectionItem
