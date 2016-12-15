import React from 'react'

class ControllerUnit extends React.Component {
  render () {
    let styleObj

    if (this.props.selected) {
      styleObj = {
        backgroundColor: '#FFF'
      }
    }

    return (
      <span style={styleObj}></span>
    )
  }
}

export default ControllerUnit
