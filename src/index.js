import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import rootReducer from './Reducer'
import SearchLog from './SearchLogPage'
import App from './App'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/searchlog' component={SearchLog} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
