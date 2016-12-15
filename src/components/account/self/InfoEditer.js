import style from 'style/account/self/infoEditer.scss'

import React from 'react'

class InfoEditer extends React.Component {
  render () {
    let inputElement

    if (this.props.type === 'textarea') {
      inputElement = <div className={ style.textarea_container }><textarea placeholder="请输入介绍" /></div>
    } else {
      inputElement = <div className={ style.input_container }><input /></div>
    }

    return (
      <div style={this.props.style} className={ style.infoEditer }>
        <span>{this.props.content}</span>

        {inputElement}
      </div>
    )
  }
}

export default InfoEditer
