import React, { Component } from 'react'
import NavLink from './NavLink'

class AlarmSet extends Component {

  constructor(props) {
    super(props)
  }


  render () {
    return (
      <div className="alarmSet">
    		<h1>Alarm Set For:</h1>
        <h2>10:00 am</h2>
        <h1>Time Now:</h1>
        <h2>9:00 am</h2>
    		<NavLink to="/AddAlarm"><button  type="button">click me</button></NavLink>
    	</div>
    )
  }

}

export default AlarmSet