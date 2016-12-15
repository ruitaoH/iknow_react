require('style/index/search.scss')

import React from 'react'

class Search extends React.Component {
  render () {
    return (
      <form className="search">
        <div>
          <input type="text" placeholder='搜索 @"用户名" 或关键词' />
        </div>
      </form>
    )
  }
}

export default Search
