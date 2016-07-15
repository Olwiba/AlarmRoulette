import React, { Component } from 'react'
import NavLink from './NavLink'

class AlarmSet extends Component {

  constructor(props) {
    super(props)

  }

    getCurrentTime() {
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()
    var seconds = new Date().getSeconds()

    var currentTime = hours + ":" + minutes + ":" + seconds

    return currentTime
  }

  render () {
    return (
      <div className="alarmSet">
    		<h1>Alarm Set For:</h1>
        <h2>{this.props.alarmTime}</h2>
        <h1>Time Now:</h1>
        <h2>{this.getCurrentTime()}</h2>
        <h1>If you dont get up, Im going to send:</h1>
        <h2>{this.props.secret}</h2>
    	</div>
    )
  }

}

export default AlarmSet
