import React, { Component } from 'react'
import NavLink from './NavLink'
import AlarmSet from './AlarmSet'

class AddAlarm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      alarmTime: '',
      secret: '',
      showAlarm: false
    }

  }

  timeChange (e) {
    let myTime = e.target.value
    console.log('Time:', myTime)
    this.setState({alarmTime: myTime, secret: this.state.secret, showAlarm: false})
  }

  secretChange (e) {
    let mySecret = e.target.value
    console.log('secret:', mySecret)
    this.setState({alarmTime: this.state.alarmTime, secret: mySecret, showAlarm: false})
  }


  showSetAlarm () {
    this.setState({alarmTime: this.state.alarmTime, secret: this.state.secret, showAlarm: true})
  }

  render () {
    return (
      <div>
        <h1>Set up your alarm</h1>
        <h2>Enter alarm time:</h2>
        <input type="time" onChange={this.timeChange.bind(this)}/>
        <h2>Enter your Secret:</h2>
        <input type="text" placeholder="Enter message here" onChange={this.secretChange.bind(this)}/>
        <NavLink to="alarmSet" ><button onClick={this.showSetAlarm.bind(this)}>Add</button></NavLink>
        {this.state.showAlarm ? <AlarmSet alarmTime={this.state.alarmTime} secret={this.state.secret} /> : <div></div>}
      </div>
    )
  }

}

export default AddAlarm
