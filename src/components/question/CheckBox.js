require('style/question/checkBox.scss')

import React from 'react'

class CheckBox extends React.Component {
  render () {
    let objStyle

    if (this.props.selected) {
      objStyle = {'backgroundColor': '#89847e'}
    }

    return (
      <div className="checkBox">
        <div style={objStyle}></div>
      </div>
    )
  }
}

export default CheckBox
