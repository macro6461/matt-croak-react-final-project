import React, { Component } from 'react';
import UserData from './usersData'
import UserList from './components/UserList'
import styles from './App.css'
import ShowUser from './components/ShowUser'




class App extends Component {
  constructor(){
    super()
    this.state = {
      users: UserData,
      selectedUser: ''
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(json => this.assignUsers(json))
  }

  assignUsers = (json) => {
    console.log(json.results)
    this.setState ({
      users: json.results
    })
  }



  handleUserClick = (element) => {
    let selectedUser = this.state.users.find((user) =>{
      return (user.name.first === element)
    })
    this.setState({
      selectedUser: selectedUser
    })
  }

    changeStateOnSubmit = (newData) => {
      this.setState((prevState) => {
         return {users: prevState.users.map((user) => {
          if (user === newData.selectedUser) {
            return newData.user
          } else {
            return user
          }
        }),
        selectedUser: newData.user
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="user-list">
          <UserList handleClick={this.handleUserClick} users={this.state.users}/>
        </div>
        {(this.state.selectedUser)
          ? <ShowUser selectedUser={this.state.selectedUser} users={this.state.users} handleChange={this.handleChange} changeStateOnSubmit={this.changeStateOnSubmit}/>
          : null
        }
      </div>
    );
  }
}

export default App;
