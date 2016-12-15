require('style/common/reset.css')
require('style/app.scss')

import React from 'react'

import Index from 'component/index/Index'
import Subject from 'component/subject/Subject'
import Question from 'component/question/Question'
import Notice from 'component/notice/Notice'
import MySelf from 'component/account/self/MySelf'
import Menu from 'component/common/Menu'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 1,
      pages: [
        <Index />,
        <Subject />,
        <Question />,
        <Notice />,
        <MySelf />
      ]
    }

    this.selectPage = this.selectPage.bind(this)
  }

  selectPage () {
    return (index) => {
      this.setState({
        selected: index
      })
    }
  }

  render () {
    let page = this.state.pages[this.state.selected - 1]

    return (
      <div className="app">
        {page}

        <footer>
          <Menu
            selectPage={this.selectPage()}
          />
        </footer>
      </div>
    )
  }
}

export default App
