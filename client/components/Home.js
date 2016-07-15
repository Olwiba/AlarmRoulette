import React, { Component } from 'react'
import NavLink from './NavLink'

class Home extends Component {

  constructor(props) {
    super(props)
  }


  render () {
    console.log('name: ', this.props.name)
    return (
      <div className="content">
    		<h1>Hello, {this.props.name}</h1>
    		<NavLink to="/AddAlarm"><button  type="button">click me</button></NavLink>
    	</div>
    )
  }

}

export default Home
