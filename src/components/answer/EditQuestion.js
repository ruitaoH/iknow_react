require('style/common/reset.css')
require('style/answer/editQuestion.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import EditQuestionItem from './EditQuestionItem'
import BombBox from './BombBox'

class EditQuestion extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      'bombBox': false
    }

    this.showBombBox = this.showBombBox.bind(this)
    this.hideBombBox = this.hideBombBox.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  goBack () {
    this.props.router.goBack()
  }

  showBombBox () {
    this.setState({
      'bombBox': true
    })
  }

  hideBombBox () {
    this.setState({
      'bombBox': false
    })
  }

  render () {
    let bombBox
    // type={
    //     'question':{
    //         title:'查看提问',
    //         btnLeft:'编辑问题'
    //     },
    //     'answer':{
    //         title:'查看问题',
    //         btnLeft:'我要回答'
    //     }
    // }// TODO 这里没有明白

    if (this.state.bombBox) {
      bombBox = <BombBox hideBombBox={this.hideBombBox} />
    }

    return (
      <div className="editQuestion">
        {bombBox}

        <HeaderBar
          content="查看问题"
          afterDot="true"
          showBombBox={this.showBombBox}
          hideBombBox={this.hideBombBox}
          goBack={this.goBack}
        />

        <div className="main_container">
          <div className="question_container">
            <p className="question">哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？<span>5分</span></p>

            <ul className="labels">
              <li>#</li>
              <li>学习考试</li>
              <li>校园生活</li>
            </ul>

            <p className="content">我们私聊，就要毕业了，目前不需要，你看你要的话就拿走.</p>

            <div className="num">
              <span>10人关注</span>
              <span>2人回答</span>
            </div>
          </div>

          <div className="button_container">
            <div className="left">
              <img src={require('image/xie.jpg')} />
              <span>编辑问题</span>
            </div>

            <div className="line"></div>

            <div className="right">
              <img src={require('image/close.png')} />
              <span>关闭问题</span>
              </div>
          </div>

          <div className="answer_container">
            <EditQuestionItem
            />
            <EditQuestionItem
            />
            <EditQuestionItem
            />
            <EditQuestionItem
            />
            <EditQuestionItem
            />
            <EditQuestionItem
            />
            <EditQuestionItem
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EditQuestion
