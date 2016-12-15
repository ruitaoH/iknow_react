require('style/common/reset.css')
require('style/index/index.scss')

import React from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

// import自定义组件
import Search from './Search'
import ListItem from './ListItem'

class Index extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 1,
      data: []
    }

    this.onScrollEnd = this.onScrollEnd.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData (method, page, limit = 10, url = '/question/home_list') {
    fetch(`${url}/${page}/${limit}`, {
      method: method
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      let data = this.state.data

      data.push(...jsonData)

      this.setState({
        data: data,
        page: page + limit / 10
      })
    })
  }

  componentDidMount () {
    let page = this.state.page

    this.fetchData('GET', page, 20)
  }

  onScrollEnd (iScrollInstance) {
    if (iScrollInstance.y <= iScrollInstance.maxScrollY + 600) {
      let page = this.state.page

      this.fetchData('GET', page)
    }
  }

  render () {
    let listItems = []
    let data = this.state.data

    data.forEach((obj, index) => {
      listItems.push(
        <ListItem
          key={index}
          num_follow={obj['num_follow']}
          ques_name={obj['ques_name']}
          num_up={obj['num_up']}
          best_answer={obj['best_answer']}
          qid={obj['qid']}
          bid={obj['bid']}
        />
      )
    })

    return (
      <div className="index">
        <header>
          <Search />
        </header>

        <div className="list_container">
          <ReactIScroll
            iScroll={iScroll}
            options={this.props.options}
            onScrollEnd={this.onScrollEnd}
          >
            <ul>
              {listItems}
            </ul>
          </ReactIScroll>
        </div>
      </div>
    )
  }
}

Index.defaultProps = {
  options: {
    scrollbars: true,
    fadeScrollbars: true,
    preventDefault: false // 不屏蔽事件
  }
}

export default Index
