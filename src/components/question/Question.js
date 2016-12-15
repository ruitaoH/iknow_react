require('style/common/reset.css')
import style from 'style/question/question.scss'

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import Star from './Star'
import CheckBox from './CheckBox'

class Qeustion extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      stars: [],
      noname: false // 默认匿名为false
    }

    this.selectStar = this.selectStar.bind(this)
    this.selectNoName = this.selectNoName.bind(this)
  }

  componentWillMount () {
    for (let i = 1; i <= 5; i++) {
      this.state.stars[i] = {
        num: i,
        selected: false
      }
    }
  }

  selectStar (index) {
    return () => {
      let stars = this.state.stars

      for (let i = 1; i <= 5; i++) {
        if (i <= index) {
          stars[i].selected = true
        } else {
          stars[i].selected = false
        }
      }

      this.setState({
        stars: stars
      })
    }
  }

  selectNoName () {
    this.setState({
      noname: !this.state.noname
    })
  }

  render () {
    let stars = []

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          num={this.state.stars[i].num}
          selected={this.state.stars[i].selected}
          selectStar={this.selectStar(i)}
        />
      )
    }

    return (
      <div className={ style.question }>
        <HeaderBar
          content="我要提问"
          afterContent="发布"
        />

        <div className={ style.question_container }>
          <div className={ style.title_container }>
            <input placeholder="输入你的问题* (20字以内)" required />
          </div>

          <div className={ style.content_container }>
            <textarea placeholder="补充内容* (100字以内)" required></textarea>

            <a className={ style.label_container }>
              添加标签* (请选择1-2项)
              <img src={require('image/right_arrow.png')} />
            </a>
          </div>

          <div className={ style.score_container }>
            <span>悬赏积分*:</span>
            <div className={ style.star_container }>
              {stars}
            </div>
          </div>

          <div className={ style.noname_container } onClick={this.selectNoName}>
            <CheckBox
              selected={this.state.noname}
            />

            <span>匿名提问</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Qeustion
