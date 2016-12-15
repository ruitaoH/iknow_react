import React from 'react'

import style from 'style/main.scss'

let BingyanLogo = require('image/logo.png')

class AppComponent extends React.Component {
  render () {
    return (
      <div className={ style.index }>
        <img src={BingyanLogo} alt="冰岩作坊出品" />
        <div className={ style.notice }>让 react 的使用体验跟 vue 一样舒适</div>
      </div>
    )
  }
}

AppComponent.defaultProps = { }
export default AppComponent
