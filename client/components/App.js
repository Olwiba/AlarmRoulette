import React, { Component } from 'react'
import NavLink from './NavLink'

class App extends Component {

  render () {
    return (
      <div className="content">
      {this.props.children}
      </div>
    )
  }

}

export default App
