import React, { Component } from 'react'
import NavLink from './NavLink'
import Home from './Home'

class LandingPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      showHome: false,
      name: 'myname here'
    }
  }

  nameChange (e) {
    let myName = e.target.value
    console.log('Name:', myName)
    this.setState({name: myName, showHome: false})
  }

  showHome () {
    console.log('showe home')
    this.setState({name: this.state.name, showHome: true})
  }

  render () {
    return (
    	<div className="landingPage">
    		<h1>Alarm Roulette</h1>
    		<input type="text" id="chooseName" placeholder="enter name here" onChange={this.nameChange.bind(this)}/>
         <NavLink to="/home"><a onClick={this.showHome.bind(this)}>Enter</a></NavLink>
        {this.state.showHome ? <Home name={this.state.name} /> : <div></div>}
    	</div>
    )
  }

}

export default LandingPage

