import React from 'react'
import { Link, Route } from 'react-router-dom'

class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: {
          name: "",
          password: "",
      },
      user: ""
    }
  }

  handleSignChange = (event, parameter) => {
    let value = event.target.value
    let key = event.target.name
    this.setState({
      currentUser: {...this.state.currentUser,
        [key]: value
      }
    })
  }

  submitCurrentUser = (event) => {
    event.preventDefault()
    let thisUser = this.props.info.allUsers.find((user) => {
      return user.name === this.state.currentUser.name && user.password === this.state.currentUser.password
    })
    this.setState({
      user: thisUser
    }, () => this.props.info.setCurrentUser(this.state.user))
  }


  render(){
    return(
      <div>
        <form className="new-user-form">
          <h1> Sign In!</h1>
        <label>
          Name:
        </label>
          <input type="text" name="name" value={this.state.currentUser.name} onChange={(event) => this.handleSignChange(event)}/>
        <br/>
        <label>
          Password:
          <input type="password" name="password" value={this.state.currentUser.password} onChange={(event) => this.handleSignChange(event)}/>
        </label>
        <button onClick={this.submitCurrentUser}>SignIn</button>
      </form>
      </div>
    )
  }

}

export default SignIn
