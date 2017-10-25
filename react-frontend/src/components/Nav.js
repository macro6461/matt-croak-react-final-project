import React from 'react'
import EditUser from './EditUser'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Banner from './Banner'

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
        <Banner />
      <Link className="link" to="/profile">Profile</Link>
      <Link className="link" to='/'>Dashboard</Link>
      <Link className="link" to="/" onClick={this.props.signOut}>Sign Out</Link>
      <Route exact path='/profile' render={(props) => (
          <EditUser currentUser={this.props.currentUser} clicked={this.state.clicked} selectedUser={this.props.selectedUser} handleUserClick={this.props.handleUserClick} handleChange={this.props.handleChange} handleEdit={this.props.changeEdit} handleUserDelete={this.props.handleUserDelete}/>
        )}/>
      </div>
  )}
}

export default Nav
