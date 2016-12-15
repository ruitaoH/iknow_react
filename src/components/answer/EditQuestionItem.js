import style from 'style/answer/editQuestionItem.scss'

import React from 'react'

class EditQuestionItem extends React.Component {
  render () {
    let data = this.props.data

    return (
      <div className={ style.editQuestionItem }>
        <div className={ style.left }>
          <img src={data.head} />
          <span>LV12</span>
        </div>

        <div className={ style.right }>
          <h1>{data.name}</h1>
          <p>{data.answer}</p>
        </div>
      </div>
    )
  }
}

export default EditQuestionItem
