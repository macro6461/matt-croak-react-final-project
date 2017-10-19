import React, { Component } from 'react';
import UserData from './usersData'
import UserList from './components/UserList'
import styles from './App.css'
import ShowUser from './components/ShowUser'
// import { Button } from 'semantic-ui-react'



class App extends Component {
  constructor(){
    super()
    this.state = {
      users: UserData,
      selectedUser: ''
    }
  }


  handleUserClick = (element) => {
    let selectedUser = this.state.users.find((user) =>{
      return (user.name.first === element)
    })
    this.setState({
      selectedUser: selectedUser
    })
  }

    submitForm = (userData) => {
      this.setState((prevState) => {
        users: prevState.users.map((user) => {
          if (user === userData.selectedUser) {
            console.log(user)
            console.log(userData.selectedUser)
            console.log(userData.user)
            return user = userData.user
          } else {
            return user
          }
        })
      }, () => console.log(this.state.users))
    }

  render() {
    return (
      <div>
        <div className="user-list">
          <UserList handleClick={this.handleUserClick} users={this.state.users}/>
        </div>
        {(this.state.selectedUser)
          ? <ShowUser selectedUser={this.state.selectedUser} users={this.state.users} handleChange={this.handleChange} onSubmit={this.submitForm}/>
          : null
        }
      </div>
    );
  }
}

export default App;
