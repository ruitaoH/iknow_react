import style from 'style/common/myInput.scss'

import React from 'react'
import Util from 'util/Util'

class MyInput extends React.Component {
  render () {
    let className = 'input'

    if (this.props.icon) {
      className += ' ' + this.props.icon
    }

    return (
      <div className={ Util.getStyle(style, className) }>
        <input type={this.props.type} placeholder={this.props.placeholder} required />
      </div>
    )
  }
}

export default MyInput
