import React, { Component } from 'react'
import NavLink from './NavLink'

class Home extends Component {

  render () {
    return (
    	<div>
      		<h1>Welome to the home page</h1>
      		<NavLink to="/AddAlarm"><button  type="button">click me</button></NavLink>

      	</div>

    )
  }

}

export default Home
