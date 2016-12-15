import style from 'style/question/labelItem.scss'

import React from 'react'

class LabelItem extends React.Component {
  constructor (props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.props.selectLabel()
  }

  render () {
    let check

    if (this.props.selected) {
      check = <i>&#xe603;</i>
    }

    return (
      <div className={ style.labelItem } onClick={this.clickHandler}>
        <p>{this.props.content}</p>
        {check}
      </div>
    )
  }
}

export default LabelItem
