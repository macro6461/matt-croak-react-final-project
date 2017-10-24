import React, { Component } from 'react';
import UserList from './UserList'
import ShowUser from './ShowUser'
import NewUser from './NewUser'
import { Link, Route} from 'react-router-dom'
import Nav from './Nav.js'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      searchTerm: "",
      users: this.props.users
    }
  }

  filterOnChange = (event) =>{
    this.setState({
      searchTerm: event.target.value
    }, () => this.filterGender())
  }

  filterGender = () => {
    let filteredUsers = this.props.users.filter((user) => {
      return user.gender.toLowerCase() === this.state.searchTerm.toLowerCase()
    })
    this.setState({
      users: filteredUsers
    })
  }


  render(){
    return(
      <div>
        <div className="search-bar">
          <input
            type="text"
            onChange={this.filterOnChange}
            placeholder={"gender preference..."}
            value={this.state.searchTerm}
          />
        <button>Search</button>
        </div>
          <div className="user-list">
            {this.props.users.length == 0
              ? console.log('hola')
              : this.state.users.length > 0
                  ? <UserList handleClick={this.props.handleUserClick} users={this.state.users}/>
                  : <UserList handleClick={this.props.handleUserClick} users={this.props.users}/>
            }
          </div>
          { this.props.users.length == 0
            ? null
            : <ShowUser handleMutualMatch={this.props.handleMutualMatch} mutualMatch={this.props.mutualMatch} selectedUser={this.props.selectedUser} currentUser={this.props.currentUser} users={this.props.users} handleChange={this.props.handleChange} changeEdit={this.props.changeStateOnNewEdit} changeStateOnSubmit={this.props.changeStateOnSubmit}/>
            }
    </div>
  )}
}

export default Home
