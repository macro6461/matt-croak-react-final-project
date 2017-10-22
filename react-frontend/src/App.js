import React, { Component } from 'react';
import UserList from './components/UserList'
import styles from './App.css'
import ShowUser from './components/ShowUser'
import NewUser from './components/NewUser'




class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      selectedUser: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => this.assignUsers(json))
  }

  assignUsers = (json) => {
    this.setState ({
      users: json
    })
  }



  handleUserClick = (element) => {
    let selectedUser = this.state.users.find((user) =>{
      return (user.first === element)
    })
    this.setState({
      selectedUser: selectedUser
    })
  }

  changeStateOnNewEdit = (newEditData) => {
    console.log(newEditData.user)
    let newState = newEditData.user.state
    let newCity = newEditData.user.city
    fetch(`http://localhost:3000/users/${newEditData.user.id}`, {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "PATCH",
      body: JSON.stringify({
        first: newEditData.user.first,
        last: newEditData.user.last,
        gender: newEditData.user.gender,
        city: newCity, state: newState, picture_url: newEditData.user.picture_url
      })
    })
      .then(res => res.json())
      this.setState((prevState) => {
         return {users: prevState.users.map((user) => {
          if (user === newEditData.selectedUser) {
            return newEditData.user
          } else {
            return user
          }
        }),
        selectedUser: newEditData.user
      }
    })
  }

  changeStateOnNewSubmit = (newUserData) => {
    let newState = newUserData.user.state
    let newCity = newUserData.user.city
    fetch('http://localhost:3000/users', {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "POST",
      body: JSON.stringify({
        first: newUserData.user.first,
        last: newUserData.user.last,
        gender: newUserData.user.gender,
        city: newCity, state: newState, picture_url: newUserData.user.picture_url
      })
    })
      .then(res => res.json())
    this.setState({
        users: [...this.state.users, newUserData.user],
        selectedUser: newUserData.user
    })
  }


    changeStateOnSubmit = (editData) => {
      this.setState((prevState) => {
         return {users: prevState.users.map((user) => {
          if (user === editData.selectedUser) {
            return editData.user
          } else {
            return user
          }
        }),
        selectedUser: editData.user
      }
    })
  }

  render() {
    return (
      <div>
        <div className="user-list">
          <UserList handleClick={this.handleUserClick} users={this.state.users}/>
        </div>
        {(this.state.selectedUser)
          ? <ShowUser selectedUser={this.state.selectedUser} users={this.state.users} handleChange={this.handleChange} changeEdit={this.changeStateOnNewEdit} changeStateOnSubmit={this.changeStateOnSubmit}/>
        : <NewUser selectedUser={this.state.selectedUser}  changeStateOnNewSubmit={this.changeStateOnNewSubmit} />
        }
      </div>
    );
  }
}

export default App;
