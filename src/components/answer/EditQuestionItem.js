import style from 'style/answer/editQuestionItem.scss'

import React from 'react'

class EditQuestionItem extends React.Component {
  render () {
    return (
      <div className={ style.editQuestionItem }>
        <div className={ style.left }>
          <img src={require('image/portraits.jpg')} />
          <span>LV12</span>
        </div>

        <div className={ style.right }>
          <h1>昵称</h1>
          <p>我们私聊，就要毕业了，目前不需要，你看你要的话就拿走。</p>
        </div>
      </div>
    )
  }
}

export default EditQuestionItem
