require('style/common/reset.css')
import style from 'style/answer/editQuestion.scss'

import React from 'react'
import { label } from 'util/Configs'

import HeaderBar from 'component/common/HeaderBar'
import EditQuestionItem from './EditQuestionItem'
import BombBox from './BombBox'

class EditQuestion extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bombBox: false,
      data: {
        target: [],
        answer: []
      }
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

  fetchData () {
    fetch(`/question/question_info/${this.props.params.qid}`, {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {

    })
  }

  componentDidMount () {
    fetch(`/question/question_info/${this.props.params.qid}`, {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      this.setState({
        data: jsonData
      })
    })
  }

  render () {
    let bombBox, labels
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
    let data = this.state.data
    let answers = []

    if (this.state.bombBox) {
      bombBox = <BombBox hideBombBox={this.hideBombBox} />
    }

    labels = data.target.map((val, index) => {
      return <li key={index}>{label[val]}</li>
    })

    answers = data.answer.map((obj, index) => {
      return <EditQuestionItem
              key={index}
              data={obj}
            />
    })

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
            <p className={ style.question }>{data.question}<span>{data.score}分</span></p>

            {
              data.target.length
                ? <ul className={ style.labels }>
                    <li>#</li>
                    {labels}
                  </ul>
                : null
            }

            <p className={ style.content }>{data.supplement}</p>

            <div className={ style.num }>
              <span>{data.num_follow}人关注</span>
              <span>{data.answer.length}人回答</span>
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
            {answers}
            {/* <EditQuestionItem
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
            /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default EditQuestion
