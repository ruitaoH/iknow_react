require('style/question/star.scss')

import React from 'react'

class Star extends React.Component {
  constructor (props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.props.selectStar()
  }

  render () {
    let num, objStyle

    if (this.props.selected && this.props.num) {
      num = this.props.num
    }

    if (!this.props.selected) {
      objStyle = {'backgroundPosition': '-0.44rem 0'}
    }

    return (
      <div className='star' style={objStyle} onClick={this.clickHandler}>
          {num}
      </div>
    )
  }
}

export default Star
