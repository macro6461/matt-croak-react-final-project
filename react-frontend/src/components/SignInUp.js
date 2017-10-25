import React from 'react'
import SignIn from './SignIn'
import NewUser from './NewUser'
import { Link, Route } from 'react-router-dom'
import Nav from './Nav'
import Banner from './Banner'


class SignInUp extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <Banner />
        <h1> Sign In Or Sign Up!</h1>
        <Link className="sign-in-link" to="/signin">Sign In</Link>
        <Link className="sign-up-link" to="/signup">Sign Up</Link>
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
