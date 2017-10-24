import React, { Component } from 'react';
import UserList from './components/UserList'
import styles from './App.css'
import ShowUser from './components/ShowUser'
import NewUser from './components/NewUser'
import { Link, Route, withRouter} from 'react-router-dom'
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import SignInUp from './components/SignInUp.js'





class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      currentUser: '',
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


  signInCurrentUser = (data) => {
    this.setState ({
      currentUser: data
    })
    this.props.history.push("/")

  }


  handleUserClick = (element) => {
    debugger
    let selectedUser = this.state.users.find((user) =>{
      return (user.id === element.id)
    })
    this.setState({
      selectedUser: selectedUser
    })
  }

  handleUserDelete = (deleteData) => {
    let newState = deleteData.user.state
    let newCity = deleteData.user.city
    fetch(`http://localhost:3000/users/${deleteData.user.id}`, {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "DELETE",
      body: JSON.stringify({
        name: deleteData.user.name,
        age: deleteData.user.age,
        gender: deleteData.user.gender,
        city: newCity, state: newState, picture_url: deleteData.user.picture_url, bio: deleteData.user.bio, password: deleteData.user.password
      })
    })
    .then(this.setState({
      selectedUser: "",
      currentUser: "",
      users: this.state.users.filter((user) =>{
        return user.name != deleteData.user.name
      })
    }))
    this.props.history.push("/")
  }

  changeStateOnNewEdit = (newEditData) => {
    debugger
    let editedUser = newEditData.user
    let newState = newEditData.user.state
    let newCity = newEditData.user.city
    //can't find newEditData.user.id
    fetch(`http://localhost:3000/users/${newEditData.user.id}`, {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "PATCH",
      body: JSON.stringify({
        name: editedUser.name,
        age: editedUser.age,
        gender: editedUser.gender,
        city: newCity, state: newState, picture_url: editedUser.picture_url, bio: editedUser.bio, password: editedUser.password
      })
    })
      .then(res => res.json())
      .then(this.removeUser(editedUser))
      .then(json => this.updateEditedState(json))
  }

  removeUser = (editedUser) => {
    debugger
    let newUsers = this.state.users.filter((user) => {
      return user.id != editedUser.id
    })
    this.setState({
      users: newUsers
    })
  }

  updateEditedState = (json) => {
    debugger
    this.setState({
      users: [json, ...this.state.users],
      currentUser: json,
      selectedUser: json
    })
    this.props.history.push("/")
  }

  deleteUserOnClick = () => {
    debugger
    this.setState({
      currentUser: ""
    })
  }

  changeStateOnNewSubmit = (newUserData) => {
    debugger
    let newState = newUserData.user.state
    let newCity = newUserData.user.city
    fetch('http://localhost:3000/users', {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "POST",
      body: JSON.stringify({
        name: newUserData.user.name,
        age: newUserData.user.age,
        gender: newUserData.user.gender,
        city: newCity, state: newState, picture_url: newUserData.user.picture_url, bio: newUserData.user.bio, password: newUserData.user.password
      })
    })
      .then(res => res.json())
    this.setState({
        users: [...this.state.users, newUserData.user],
        currentUser: newUserData.user
    })
    this.props.history.push("/")
  }


    changeStateOnSubmit = (editData) => {
      this.setState((prevState) => {
        debugger
         return {users: prevState.users.map((user) => {
          if (user === editData.selectedUser) {
            return editData.user
          } else {
            return user
          }
        }),
        currentUser: editData.user
      }
    })
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        {this.state.currentUser === ""
          ? <SignInUp allUsers={this.state.users} selectedUser={this.state.selectedUser} currentUser={this.state.currentUser} setCurrentUser={this.signInCurrentUser} handleAddUser={this.changeStateOnNewSubmit}/>
          : <div>
              <Nav selectedUser={this.state.selectedUser} users={this.state.users} currentUser={this.state.currentUser}  handleChange={this.handleChange} changeEdit={this.changeStateOnNewEdit} changeStateOnSubmit={this.changeStateOnSubmit} handleUserClick={this.handleUserClick} handleUserDelete={this.handleUserDelete} handleAddUser={this.changeStateOnNewSubmit}/>
            <h3>Welcome {this.state.currentUser.name}!</h3>
          <Route exact path="/" render={() => <Home currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} users={this.state.users} handleChange={this.handleChange} handleAddUser={this.changeStateOnNewSubmit} changeEdit={this.changeStateOnNewEdit} changeStateOnSubmit={this.changeStateOnSubmit} handleUserClick={this.handleUserClick}/>}/>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(App);
