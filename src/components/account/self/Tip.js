require('style/account/self/tip.scss')

import React from 'react'

class Tip extends React.Component {
  render () {
    return (
      <div style={this.props.style} className="tip">
        <img className="icon" src={this.props.icon} />
        <span>{this.props.content}</span>
        <img style={this.props.arrowStyle} className="arrow" src={require('image/account_arrow2.png')} />
      </div>
    )
  }
}

export default Tip
