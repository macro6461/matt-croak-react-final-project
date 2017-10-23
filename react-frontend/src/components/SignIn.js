import React from 'react'
import { Link, Route } from 'react-router-dom'

class SignIn extends React.Component{

  render(){
    return(
      <div>
        <form className="new-user-form">
          <h1> Sign In!</h1>
        <label>
          Name:
        </label>
          <input type="text" name="name" value={"name"} onChange={(event) => this.handleNewChange(event)}/>
        <br/>
        <label>
          Password:
          <input type="password" name="password" value={"password"} onChange={(event) => this.handleNewChange(event)}/>
        </label>
        <Link to="/">SignIn</Link>
      </form>
      </div>
    )
  }

}

export default SignIn
