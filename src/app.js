import React from 'react'
import history from './history'
import { Router, Switch, Route } from 'react-router-dom'
import List from './pages/list'
import Form from './pages/form'

const App = props => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Form} />
      </Switch>
    </Router>
  )
}

export default App
