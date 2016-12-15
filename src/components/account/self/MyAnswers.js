require('style/common/reset.css')
require('style/account/self/myAnswers.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import MyAnswerItem from './MyAnswerItem'

class MyAnswers extends React.Component {
  render () {
    let answers = []

    answers.push(
      <MyAnswerItem
        content='哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果'
      />
    )
    answers.push(
      <MyAnswerItem
        content='哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果'
      />
    )
    answers.push(
      <MyAnswerItem
        content='哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果'
      />
    )

    return (
      <div className="myAnswers">
        <HeaderBar
          content="我的回答"
        />

        <div className="answers_container">
          {answers}
        </div>
      </div>
    )
  }
}

export default MyAnswers
