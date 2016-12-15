require('style/reset.css')
require('style/account/self/myQuestions.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import MyQuestionItem from './MyQuestionItem'

class MyQuestions extends React.Component {
  render () {
    let questions = []

    questions.push(
      <MyQuestionItem
        content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
        concernNum='124'
        answerNum='3'
      />
    )
    questions.push(
      <MyQuestionItem
        content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
        concernNum='124'
        answerNum='3'
      />
    )
    questions.push(
      <MyQuestionItem
        content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
        concernNum='124'
        answerNum='3'
      />
    )

    return (
      <div className="myQuestions">
        <HeaderBar
          content="我的提问"
        />

        <div className="questions_container">
          {questions}
        </div>
      </div>
    )
  }
}

export default MyQuestions
