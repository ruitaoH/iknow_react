require('style/common/reset.css')
require('style/subject/subject.scss')

import React from 'react'

import Exhibition from './Exhibition'
import SubjectItem from './SubjectItem'

class Subject extends React.Component {
  render () {
    return (
      <div className="subject">
        <Exhibition />

        <div className="more">
          <span>热门专题</span>

          <div>
            <span>More</span>
            <img src={require('image/account_arrow.png')} />
          </div>
        </div>

        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
      </div>
    )
  }
}

export default Subject
