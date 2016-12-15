require('style/index/listItem.scss')

import React from 'react'
import { Link } from 'react-router'
import { url } from 'util/Configs'

class ListItem extends React.Component {
  render () {
    return (
        <div className="listItem">
          <Link to={url.getEditQuestion(this.props.qid)}>
            <p className="question_num">{this.props.num_follow}人关注了问题</p>
            <p className="question_title">{this.props.ques_name}</p>
          </Link>

          {
            this.props.best_answer
              ? <Link to={url.getEditMyAnswer(this.props.qid, this.props.bid)}>
                  <div className="preview">
                    <span className="num">{this.props.num_up}</span>
                    <p className="question_content">{this.props.best_answer}</p>
                  </div>
                </Link>
              : null
          }
        </div>
    )
  }
}

export default ListItem
