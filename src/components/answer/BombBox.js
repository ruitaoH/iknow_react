import style from 'style/answer/bombBox.scss'

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

class BombBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      copied: false
    }

    this.cancelClick = this.cancelClick.bind(this)
  }

  cancelClick () {
    this.props.hideBombBox()
  }

  render () {
    return (
      <div className={ style.bombBox }>
        <div>
          <div>
            <div className={ style.report }>我要举报</div>
            <div className={ style.line }></div>

            <CopyToClipboard
              text={window.location.href}
            >
              <div className={ style.copy } onClick={this.props.hideBombBox}>复制链接</div>
            </CopyToClipboard>
          </div>
          <div className={ style.cancel } onClick={this.cancelClick}>取消</div>
        </div>
      </div>
    )
  }
}

export default BombBox
