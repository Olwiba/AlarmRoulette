import React, { Component } from 'react'
import NavLink from './NavLink'

class App extends Component {

  render () {
    return (
      <div className="content">
      <NavLink to="/home"><a>Hoto to Home</a></NavLink>
      {this.props.children}
      </div>
    )
  }

}

export default App
