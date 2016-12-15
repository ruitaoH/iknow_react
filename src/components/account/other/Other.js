require('style/common/reset.css')
require('style/account/other/other.scss')

import React from 'react'

import Menu from 'component/common/Menu'
import OtherInfoBox from './OtherInfoBox'
import OtherAnswerItem from './OtherAnswerItem'
import OtherQuestionItem from './OtherQuestionItem'
import OtherCollectionItem from './OtherCollectionItem'

class Other extends React.Component {
  render () {
    return (
      <div className="other">
        <div className="info_container">
            <OtherInfoBox />
        </div>

        <div className="contents_container">
          <OtherAnswerItem
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherAnswerItem
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherAnswerItem
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherAnswerItem
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />

          <OtherCollectionItem
            type="answer"
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherCollectionItem
            type="question"
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherCollectionItem
            type="answer"
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherCollectionItem
            type="question"
            name="昵称"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />

          <OtherQuestionItem
            concernNum="7"
            answerNum="3"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherQuestionItem
            concernNum="7"
            answerNum="3"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherQuestionItem
            concernNum="7"
            answerNum="3"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
          <OtherQuestionItem
            concernNum="7"
            answerNum="3"
            content="哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果"
          />
        </div>

        <footer>
          <Menu />
        </footer>
      </div>
    )
  }
}

export default Other
