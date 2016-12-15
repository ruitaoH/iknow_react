import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import { url } from 'util/Configs'

import App from 'component/App'

import EditMyAnswer from 'component/answer/EditMyAnswer'
import EditQuestion from 'component/answer/EditQuestion'
import WriteAnswer from 'component/answer/WriteAnswer'

import Login from 'component/identity/Login'
import Register from 'component/identity/Register'

import EditFedback from 'component/account/self/EditFedback'

render((
  <Router history={browserHistory}>
    <Route path={url.index} component={App} />

    <Route path={url.editQuestion} component={EditQuestion} />
    <Route path={url.editMyAnswer} component={EditMyAnswer} />

    <Route path={url.login} component={Login} />
    <Route path={url.register} component={Register} />

    {/* <Route path="/editFedback" component={EditFedback} /> */}
  </Router>
), document.getElementById('app'))
