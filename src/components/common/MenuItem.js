require('style/common/menuItem.scss')

import React from 'react'

class MenuItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false
    }

    // 事件绑定
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e) {
    this.props.select()

    e.stopPropagation()
    e.preventDefault()
  }

  render () {
    let imgUrl, styleObj

    if (this.props.selected === this.props.index) {
      imgUrl = this.props.data.icon_selected
      styleObj = {color: '#f77922'}
    } else {
      imgUrl = this.props.data.icon_normal
      styleObj = {color: '#FFF'}
    }

    if (this.props.data.center) {
      return (
        <figure onClick={this.clickHandler} className="center">
          <a href="#">
            <img src={this.props.data.icon} alt="" />
          </a>
        </figure>
      )
    } else {
      return (
        <figure onClick={this.clickHandler} className="menuItem" style={this.props.cssObject}>
          <a href="#">
            <img src={imgUrl} alt="" />
            <figcaption style={styleObj}>{this.props.data.title}</figcaption>
          </a>
        </figure>
      )
    }
  }
}

export default MenuItem
