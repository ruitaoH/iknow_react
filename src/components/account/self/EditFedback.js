require('style/common/reset.css')
require('style/account/self/editFedback.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'

class EditFedback extends React.Component {
  render () {
    return (
      <div className="editFedback">
        <HeaderBar
          content="我要反馈"
        />

        <div className="main_container">
          <p>您有什么问题或建议想对我们说?</p>
          <textarea placeholder="在这里写下您的意见"></textarea>

          <p>您的联系邮箱:</p>
          <input type="text" placeholder="请使用常用联系邮箱" />

          <div className="submit">
            <h3>请详细描述您遇到的问题,感谢您的参与~</h3>
            <div>问题提交</div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditFedback
