require('style/account/other/otherInfoBox.scss')

import React from 'react'

import OtherAQCCItem from './OtherAQCCItem'
import Count from 'component/common/Count'

class OtherInfoBox extends React.Component {
  render () {
    return (
      <div className="otherInfoBox" style={{backgroundImage: 'url(' + require('image/portraits.jpg') + ')'}}>
        <div className="mask"></div>

        <div className="left">
          <img src={require('../../../images/portraits.jpg')} />
          <h3>初级弟子一级</h3>
          <div>关注</div>
        </div>

        <div className="right">
          <div>
            <h1>这是一个昵称</h1>
            <h2>嘿嘿嘿,这是一句签名哈哈哈哈</h2>
            <h3>采纳率:&nbsp;&nbsp;80%</h3>

            <div>
              <Count
                type="heart"
                count="122"
                objStyle={{color: '#FFF'}}
              />
              <Count
                type="eye"
                count="123"
                objStyle={{color: '#FFF'}}
              />
            </div>
          </div>
        </div>

        <ul>
          <OtherAQCCItem
            num="21"
            content="她的回答"
            selected="true"
          />
          <OtherAQCCItem
            num="34"
            content="她的提问"
          />
          <OtherAQCCItem
            num="106"
            content="她的收藏"
          />
          <OtherAQCCItem
            num="12"
            content="她的关注"
            last="true"
          />
        </ul>
      </div>
    )
  }
}

export default OtherInfoBox
