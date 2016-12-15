require('style/subject/subjectItem.scss')

import React from 'react'

import Count from 'component/common/Count'

class SubjectItem extends React.Component {
  render () {
    return (
      <div className="subjectItem">
        <img src={require('image/head.png')} />

        <div>
          <p>拱手加额李个角色歌i类叫狐色管理角色i类拱手加额李个</p>

          <Count
            type="heart"
            count="122"
          />

          <Count
            type="eye"
            count="122"
          />
        </div>
      </div>
    )
  }
}

export default SubjectItem
