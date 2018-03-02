import React from 'react'
import SignIn from './SignIn'
import NewUser from './NewUser'
import { Link, Route } from 'react-router-dom'

import Banner from './Banner'



class SignInUp extends React.Component{

  state = {
    fire: true
  }

  componentDidMount = () => {
     
    this.changeFireState()
  }

  changeFireState = () => {

    if (window.location.href.length <= 22){
      this.setState({
        fire: true
      })
    } else {
      this.setState({
        fire: false
      })
    }
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Banner />
        <h1> Sign In Or Sign Up!</h1>
        <Link className="sign-in-link" to="/signin">Sign In</Link>
        <Link className="sign-up-link" to="/signup">Sign Up</Link>
        {this.state.fire === false
          ? null
          : <img className="home-fire" src={require('../5Mz4.gif')} alt="fire-gif"/>
        }
        <Route exact path='/signin' render={(props) => (
          <SignIn info={this.props} changeFire={this.changeFireState}/>
        )}/>
      <Route exact path='/signup' render={(props) => (
          <NewUser info={this.props} changeFire={this.changeFireState}/>
        )}/>
      </div>
    )
  }

}

export default SignInUp
