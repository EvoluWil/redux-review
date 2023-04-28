import { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Tasks from './pages/Tasks'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/tasks' component={Tasks}/>
      </Switch>
    )
  }
}

export default App
