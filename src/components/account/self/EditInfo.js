require('style/common/reset.css')
import style from 'style/account/self/editInfo.scss'

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import InfoEditer from './InfoEditer'

class EditInfo extends React.Component {
  render () {
    return (
      <div className={ style.editInfo }>
        <HeaderBar
          content="编辑个人资料"
          afterButton="完成"
        />

        <div className={ style.edit_avatar }>
          <img className={ style.avatar } src={require('image/portraits.jpg')} />

          <span>编辑头像</span>

          <img className={ style.arrow } src={require('image/account_arrow3.png')} />
        </div>

        <div className={ style.edit_info }>
          <div className={ style.edit_info_container }>
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
