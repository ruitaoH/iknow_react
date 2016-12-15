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

// self
import MySelf from 'component/account/self/MySelf'
import EditInfo from 'component/account/self/EditInfo'
import EditFedback from 'component/account/self/EditFedback'
import MyQuestions from 'component/account/self/MyQuestions'
import MyAnswers from 'component/account/self/MyAnswers'
import MyCollections from 'component/account/self/MyCollections'
// import My from 'component/account/self/EditInfo' //TODO 我的关注还没有

render((
  <Router history={browserHistory}>
    <Route path={url.index} component={App} />

    <Route path={url.editQuestion} component={EditQuestion} />
    <Route path={url.editMyAnswer} component={EditMyAnswer} />

    <Route path={url.login} component={Login} />
    <Route path={url.register} component={Register} />

    <Route path='/self' component={MySelf} />
    <Route path='/editInfo' component={EditInfo} />
    <Route path='/editFedback' component={EditFedback} />
    <Route path='/myQuestions' component={MyQuestions} />
    <Route path='/myAnswers' component={MyAnswers} />
    <Route path='/myCollections' component={MyCollections} />
  </Router>
), document.getElementById('app'))
