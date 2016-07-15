import React, { Component } from 'react'
import NavLink from './NavLink'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  onChange(event) {

  }

  getCurrentTime() {
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()
    var seconds = new Date().getSeconds()

    var currentTime = hours + ":" + minutes + ":" + seconds

    return "The current time is " + currentTime
  }

  render () {
    console.log('name: ', this.props.name)
    return (
      <div className="homePage">
    		<h1>Hello, {this.props.name}</h1>
        <h2>{this.getCurrentTime()}</h2>
    		<NavLink to="/AddAlarm"><button  type="button">Add Alarm</button></NavLink>
    	</div>
    )
  }

}

export default Home
