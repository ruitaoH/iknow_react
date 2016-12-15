import React from 'react'

class ControllerUnit extends React.Component {
  render () {
    let className = ''

    if (this.props.selected) {
      className += ' selected'
    }

    return (
      <span className={className}></span>
    )
  }
}

export default ControllerUnit
