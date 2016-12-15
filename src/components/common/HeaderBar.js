import style from 'style/common/headerBar.scss'

import React from 'react'

class HeaderBar extends React.Component {
  constructor (props) {
    super(props)

    this.dotClick = this.dotClick.bind(this)
  }

  dotClick () {
    this.props.showBombBox()
  }

  render () {
    let afterContent

    if (this.props.afterContent) {
      afterContent = this.props.afterContent
    } else if (this.props.afterDot) {
      afterContent = <i onClick={this.dotClick}>&#xe68a;</i>
    }

    return (
      <div className={ style.headerBar }>
        <img src={require('image/left_arrow.png')} onClick={this.props.goBack} />

        <p>{this.props.content}</p>

        <a>{afterContent}</a>
      </div>
    )
  }
}

export default HeaderBar
