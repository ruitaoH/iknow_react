require('style/account/other/otherAQCCItem.scss')

import React from 'react'

class OtherAQCCItem extends React.Component {
  render () {
    let className = 'otherAQCCItem'

    if (!this.props.last) {
      className += ' marginRight'
    }

    if (this.props.selected) {
      className += ' selected'
    }

    return (
      <li className={className} style={this.props.objStyle}>
        <h1>{this.props.num}</h1>
        <h2>{this.props.content}</h2>
      </li>
    )
  }
}

export default OtherAQCCItem
