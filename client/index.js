import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import AddAlarm from './components/AddAlarm'
import AlarmSet from './components/AlarmSet'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}>
        <Route path="/Home" component={Home}/>
      </IndexRoute>
      <Route path="/addAlarm" component={AddAlarm}>
        <Route path="/alarmSet" component={AlarmSet}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
console.log('Server is up')
