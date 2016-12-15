require('style/common/reset.css')
import style from 'style/subject/subject.scss'

import React from 'react'

import Exhibition from './Exhibition'
import SubjectItem from './SubjectItem'

class Subject extends React.Component {
  // constructor (props){
  //   super(props)
  // }

  render () {
    return (
      <div className={ style.subject }>
        <Exhibition />

        <div className={ style.more }>
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
