import style from 'style/account/self/infoBox.scss'

import React from 'react'

class InfoBox extends React.Component {
  render () {
    return (
      <div className={ style.infoBox } style={{backgroundImage: 'url(' + require('image/portraits.jpg') + ')'}}>
        <div className={ style.mask }></div>

        <div className={ style.info }>
          <img src={require('image/portraits.jpg')} />

          <h1>这是一个昵称</h1>
          <h3>初级弟子一级</h3>
          <h2>采纳率:80%</h2>

          <a href="#">编辑个人资料</a>
        </div>
      </div>
    )
  }
}

export default InfoBox
