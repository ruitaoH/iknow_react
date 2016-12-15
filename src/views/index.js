import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import { url } from 'util/Configs'

import App from 'component/App'

import EditMyAnswer from 'component/answer/EditMyAnswer'
import EditQuestion from 'component/answer/EditQuestion'
import WriteAnswer from 'component/answer/WriteAnswer'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />

    <Route path={url.editQuestion} component={EditQuestion} />
    <Route path={url.editMyAnswer} component={EditMyAnswer} />
  </Router>
), document.getElementById('app'))
