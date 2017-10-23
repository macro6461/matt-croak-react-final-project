import React from 'react'
import EditUser from './EditUser'
import { Link, Route } from 'react-router-dom'
import Home from './Home'

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      clicked: false,
      showClass: true
    }
  }
  render(){
    return(
      <div>
      <h1 className="ashes">From the Ashes</h1>
    <h3> Only a pheonix can rise from the ashes...</h3>
    <Link to="/profile">Profile</Link>
      <br/>
      <Link to='/'>Dashboard</Link>
      <Route exact path='/profile' render={(props) => (
          <EditUser selectedUser={this.props.selectedUser} clicked={this.state.clicked} handleUserClick={this.props.handleUserClick} handleChange={this.props.handleChange} handleEdit={this.props.changeEdit} handleUserDelete={this.props.handleUserDelete}/>
        )}/>
      </div>
  )}
}

export default Nav
