require('style/common/reset.css')
import style from 'style/answer/editQuestion.scss'

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
      <div className={ style.editQuestion }>
        {bombBox}

        <HeaderBar
          content="查看问题"
          afterDot="true"
          showBombBox={this.showBombBox}
          hideBombBox={this.hideBombBox}
          goBack={this.props.router.goBack}
        />

        <div className={ style.main_container }>
          <div className={ style.question_container }>
            <p className={ style.question }>哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？<span>5分</span></p>

            <ul className={ style.labels }>
              <li>#</li>
              <li>学习考试</li>
              <li>校园生活</li>
            </ul>

            <p className={ style.content }>我们私聊，就要毕业了，目前不需要，你看你要的话就拿走.</p>

            <div className={ style.num }>
              <span>10人关注</span>
              <span>2人回答</span>
            </div>
          </div>

          <div className={ style.button_container }>
            <div className={ style.left }>
              <img src={require('image/xie.jpg')} />
              <span>编辑问题</span>
            </div>

            <div className={ style.line }></div>

            <div className={ style.right }>
              <img src={require('image/close.png')} />
              <span>关闭问题</span>
              </div>
          </div>

          <div className={ style.answer_container }>
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
