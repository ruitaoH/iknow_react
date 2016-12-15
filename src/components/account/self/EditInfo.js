require('style/common/reset.css')
require('style/account/self/editInfo.scss')

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import InfoEditer from './InfoEditer'

class EditInfo extends React.Component {
  render () {
    return (
      <div className="editInfo">
        <HeaderBar
          content="编辑个人资料"
          afterButton="完成"
        />

        <div className="edit_avatar">
          <img className="avatar" src={require('../../../images/portraits.jpg')} />

          <span>编辑头像</span>

          <img className="arrow" src={require('../../../images/account_arrow3.png')} />
        </div>

        <div className="edit_info">
          <div className="edit_info_container">
            <InfoEditer
              content="昵称"
            />

            <InfoEditer
              content="性别"
            />

            <InfoEditer
              style={{marginTop: '0.24rem'}}
              content="介绍"
              type="textarea"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EditInfo
