require('style/common/reset.css')
require('style/account/self/myself.scss')

import React from 'react'

import InfoBox from './InfoBox'
import Tip from './Tip'

class MySelf extends React.Component {
  render () {
    return (
      <div className="myself">
        <div className="info_container">
          <InfoBox />
        </div>

        <div className="tips_container">
          <Tip
            content="我的提问"
            icon={require('image/self_question.png')}
          />
          <Tip
            content="我的回答"
            icon={require('image/self_answer.png')}
          />
          <Tip
            content="我的关注"
            icon={require('image/self_concern.png')}
          />
          <Tip
            content="我的收藏"
            icon={require('image/self_collect.png')}
          />
          <Tip
            style={{marginTop: '0.8rem'}}
            content="我要反馈"
            icon={require('image/feedback.png')}
          />
        </div>
      </div>
    )
  }
}

export default MySelf
