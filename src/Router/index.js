import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
import App from '../App.js'
import SearchLog from '../SearchPage/SearchLog'

function Routing() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/searchlog' component={SearchLog} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
