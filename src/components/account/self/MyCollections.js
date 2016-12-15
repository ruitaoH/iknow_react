require('style/common/reset.css')
import style from 'style/account/self/myCollections.scss'

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import MyCollectionItem from './MyCollectionItem'

class MyCollections extends React.Component {
  render () {
    let collections = []

    collections.push(
      <MyCollectionItem
        name="咩咩"
        content='哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果'
      />
    )
    collections.push(
      <MyCollectionItem
        name="咩咩"
        content='哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果'
      />
    )
    collections.push(
      <MyCollectionItem
        name="咩咩"
        content='哪个好心人帮忙...飞过来快色各色高栗色讲故事色狼关键是粉丝各色个色各色各色如果'
      />
    )

    return (
      <div className={ style.myCollections }>
        <HeaderBar
          content="我的收藏"
        />

      <div className={ style.collections_container }>
          {collections}
        </div>
      </div>
    )
  }
}

export default MyCollections
