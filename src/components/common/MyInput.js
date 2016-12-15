require('style/common/myInput.scss')

import React from 'react'

class MyInput extends React.Component {
  render () {
    let className = 'input'

    if (this.props.icon) {
      className += ' ' + this.props.icon
    }

    return (
      <div className={className}>
        <input type={this.props.type} placeholder={this.props.placeholder} required />
      </div>
    )
  }
}

export default MyInput
