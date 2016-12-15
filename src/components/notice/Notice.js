require('style/common/reset.css')
require('style/notice/notice.scss')

import React from 'react'

const Content = (props) => {
  return (
    <div className="content">
      <p>你在问题&nbsp;&nbsp;<span>{props.title}</span>&nbsp;&nbsp;下的回答经用户举报已经被管理员iKnow删除,删除理由:&nbsp;&nbsp;<span>{props.reason}</span>&nbsp;&nbsp;点此查看iKnow行为规范.</p>
    </div>
  )
}

const PrivateMessage = (props) => {
  return (
    <div className="private_message">

    </div>
  )
}

class Notice extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 1
    }
  }

  select (index) {
    this.setState({
      selected: index
    })
  }

  render () {
    let lineStyle, leftStyle, rightStyle

    if (this.state.selected && this.state.selected === 1) {
      leftStyle = {color: '#f77922'}
      lineStyle = {left: '1.98rem'}
    } else if (this.state.selected && this.state.selected === 2) {
      rightStyle = {color: '#f77922'}
      lineStyle = {left: '4.28rem'}
    }

    return (
      <div className="notice">
        <div className="header_container">
          <div className="left" style={leftStyle} onClick={this.select.bind(this, 1)}>
            内容<span></span>
          </div>
          <div className="line"></div>
          <div className="right" style={rightStyle} onClick={this.select.bind(this, 2)}>
            私信<span></span>
          </div>
          <div className="under_line" style={lineStyle}></div>
        </div>

        <div className="main_container">
          <Content
            title="failgjeilagje各色极乐谷角色i类两个i就色理工将诶了"
            reason="广告"
          />
          <Content
            title="failgjeilagje各色极乐谷角色i类两个i就色理工将诶了"
            reason="广告"
          />
          <Content
            title="failgjeilagje各色极乐谷角色i类两个i就色理工将诶了"
            reason="广告"
          />
        </div>
      </div>
    )
  }
}

export default Notice
