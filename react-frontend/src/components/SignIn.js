import React from 'react'


class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: {
          name: "",
          password: "",
      },
      user: "",
      success: true,
    }
  }

  handleSignChange = (event, parameter) => {
    console.log(Object.values(this.state.currentUser))
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
      debugger
      return user.name === this.state.currentUser.name && user.password === this.state.currentUser.password
    })
    if (thisUser){
      localStorage.setItem('currentUser', JSON.stringify(thisUser))
      var localUser = JSON.parse(localStorage.getItem('currentUser'));
      this.setState({
        user: localUser,
      }, () => this.props.info.setCurrentUser(this.state.user))
    } else {
      this.setState({
        success: false
      })
    }
  }


  render(){
    return(
      <div>
        <form className="user-form">
          {this.state.success === false
            ? <h1 className="user-not-found">User not found</h1>
            : null
          }
          <h1> Sign In!</h1>
        <label>
          Name:
        </label>
          <input type="text" name="name" value={this.state.currentUser.name} onChange={(event) => this.handleSignChange(event)} required/>
        <br/>
      <br/>
        <label>
          Password:
          <input type="password" name="password" value={this.state.currentUser.password} onChange={(event) => this.handleSignChange(event)} required/>
        </label>
        <br/>
        <br/>
          <button onClick={this.submitCurrentUser}>Sign In</button>
      </form>
      </div>
    )
  }

}

export default SignIn
