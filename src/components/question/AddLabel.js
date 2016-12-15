require('style/common/reset.css')
import style from 'style/question/addLabel.scss'

import React from 'react'

import HeaderBar from 'component/common/HeaderBar'
import LabelItem from './LabelItem'

class AddLabel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      labels: [],
      selectNum: 0
    }

    this.selectLabel = this.selectLabel.bind(this)
  }

  componentWillMount () {
    for (let i = 1; i <= 3; i++) {
      this.state.labels[i] = {
        selected: false
      }
    }
  }

  selectLabel (index) {
    return () => {
      let labels = this.state.labels
      let selectNum = this.state.selectNum

      if (selectNum < 2) {
        if (labels[index].selected) {
          selectNum--
        } else {
          selectNum++
        }

        labels[index].selected = !labels[index].selected

        this.setState({
          labels: labels,
          selectNum: selectNum
        })
      } else if (labels[index].selected) {
        selectNum--
        labels[index].selected = !labels[index].selected

        this.setState({
          selectNum: selectNum
        })
      }
    }
  }

  render () {
    let labels = []

    for (let i = 1; i <= 3; i++) {
      labels.push(
        <LabelItem
          content="校园服务"
          selected={this.state.labels[i].selected}
          selectLabel={this.selectLabel(i)}
        />
      )
    }

    return (
      <div className={ style.addLabel }>
        <HeaderBar
          content="添加标签"
          afterContent="完成"
        />

        <div className={ style.label_container }>
          {labels}
        </div>
      </div>
    )
  }
}

export default AddLabel
