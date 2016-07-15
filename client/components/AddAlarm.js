import React, { Component } from 'react'
import NavLink from './NavLink'

class AddAlarm extends Component {

  render () {
    return (
      <div>
        <h2>Enter alarm time:</h2>
        <input type="time" />
        <h2>Enter your Secret:</h2>
        <input type="text" placeholder="Enter message here" />
        <NavLink to="alarmSet" ><button>Add</button></NavLink>
        {this.props.children}
      </div>
    )
  }

}

export default AddAlarm
