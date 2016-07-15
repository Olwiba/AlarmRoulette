import React, { Component } from 'react'
import NavLink from './NavLink'

class LandingPage extends Component {

  render () {
    return (
    	<div className="content">
    		<h1>Landing Page</h1>
    		<input type="text" id="chooseName" /> 

	      <button  type="button"><NavLink to="/Home">click me</NavLink></button>
	      
    	</div>
    )
  }

}

export default LandingPage

