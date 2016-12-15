require('style/index/listItem.scss')

import React from 'react'

class ListItem extends React.Component {
  render () {
    return (
        <div className="listItem">
          <p className="question_num">{this.props.num_follow}人关注了问题</p>
          <p className="question_title">{this.props.ques_name}</p>

          {
            this.props.best_answer
              ? <div className="preview">
                  <span className="num">{this.props.num_up}</span>
                  <p className="question_content">{this.props.best_answer}</p>
                </div>
              : null
          }
        </div>
    )
  }
}

export default ListItem
