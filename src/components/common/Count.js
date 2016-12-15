require('style/common/count.scss')

import React from 'react'

class Count extends React.Component {
  render () {
    let imagesURL = {
      'heart': require('image/heart.png'),
      'eye': require('image/eye.png')
    }

    return (
      <span className="count" style={this.props.objStyle}>
        <img src={imagesURL[this.props.type]} />
        {this.props.count}
      </span>
    )
  }
}

export default Count
