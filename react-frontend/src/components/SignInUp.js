import React from 'react'
import SignIn from './SignIn'
import NewUser from './NewUser'
import { Link, Route } from 'react-router-dom'


class SignInUp extends React.Component{

  render(){
    return(
      <div>
        <h1> Sign In Or Sign Up!</h1>
        <Link to="/signin">SignIn</Link>
      <br/>
      <br/>
        <Link to="/signup">SignUp</Link>
      <Route exact path='/signin' render={(props) => (
          <SignIn info={this.props}/>
        )}/>
      <Route exact path='/signup' render={(props) => (
          <NewUser info={this.props}/>
        )}/>
      </div>
    )
  }

}

export default SignInUp
