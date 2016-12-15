require('style/subject/exhibition.scss')

import React from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

import ControllerUnit from './ControllerUnit'

const ExhibitionItem = (props) => {
  return (
    <div className="exhibitionItem" style={{backgroundImage: 'url(' + props.pic + ')'}}>
      <div className="mask"></div>

      <div className="container">
        <p>{props.title}</p>

        <div className="like_read">
          <span>123</span>
          <span>123</span>
        </div>
      </div>
    </div>
  )
}

class Exhibition extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      banners: [],
      page: 0
    }

    this.fetchData = this.fetchData.bind(this)
    this.onScrollEnd = this.onScrollEnd.bind(this)
  }

  fetchData (url, method) {
    return fetch(url, {
      method: method
    }).then((response) => {
      return response.json()
    })
  }

  componentDidMount () {
    let banners = this.state.banners

    this.fetchData('/theme/banners', 'GET').then((jsonData) => {
      jsonData.forEach((obj, index) => {
        banners[index] = {
          pic: obj['pic']
        };

        ((index) => {
          this.fetchData(`/theme/info/${obj['tid']}`, 'GET').then((jsonData) => {
            banners[index]['title'] = jsonData['title']

            this.setState({
              banners: banners
            })
          })
        })(index)
      })
    })
  }

  onScrollEnd (iScrollIntance) {
    let page

    iScrollIntance.pages.forEach((obj, index) => {
      if (obj.x === iScrollIntance.x) {
        page = index
      }
    })

    this.setState({
      page: page
    })
  }

  render () {
    let banners = this.state.banners
    let page = this.state.page
    let exhibitionItems = []
    let controllerUnits = []

    banners.forEach((obj, index) => {
      exhibitionItems.push(
        <ExhibitionItem
          key={index}
          title={obj['title']}
          pic={obj['pic']}
        />
      )

      if (page === index) {
        controllerUnits.push(
          <ControllerUnit
            key={index}
            selected='true'
          />
        )
      } else {
        controllerUnits.push(
          <ControllerUnit
            key={index}
          />
        )
      }
    })

    return (
      <div className="exhibition">
        <ReactIScroll
          iScroll={iScroll}
          options={{
            preventDefault: false,
            scrollX: true,
            scrollY: false,
            deceleration: 0.04,
            snap: true // 自动分页
            // ,bounce: false --> 弹性
          }}
          onScrollEnd={this.onScrollEnd}
        >
          <div className="wrapper">
            {exhibitionItems}
          </div>
        </ReactIScroll>

        <div className="circle_container">
          {controllerUnits}
        </div>
      </div>
    )
  }
}

export default Exhibition
