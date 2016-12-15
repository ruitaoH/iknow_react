require('style/answer/bombBox.scss')

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
      <div className="bombBox">
        <div>
          <div>
            <div className="report">我要举报</div>
            <div className="line"></div>

            <CopyToClipboard
              text={window.location.href}
            >
              <div className="copy" onClick={this.props.hideBombBox}>复制链接</div>
            </CopyToClipboard>
          </div>
          <div className="cancel" onClick={this.cancelClick}>取消</div>
        </div>
      </div>
    )
  }
}

export default BombBox
